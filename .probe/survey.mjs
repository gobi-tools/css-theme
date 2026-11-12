import { chromium } from 'playwright';
import { execSync } from 'child_process';
import * as fs from 'fs';

const OUT = process.argv[2] || '.probe/survey.json';
const BASE = 'http://localhost:8124';

const files = execSync("find docs -name '*.html' | sed 's|^docs/||' | sort", { encoding: 'utf-8' })
  .split('\n').filter(Boolean);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

const survey = {};
let done = 0;
for (const f of files) {
  try {
    await page.goto(`${BASE}/${f}`, { waitUntil: 'load', timeout: 15000 });
  } catch (e) {
    survey[f] = { error: String(e).slice(0, 120) };
    continue;
  }
  survey[f] = await page.evaluate(() => {
    const g = (el) => el.getBoundingClientRect();
    const cls = (el) => typeof el.className === 'string' && el.className.trim()
      ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : '';
    const out = [];
    // 1) every element with a non-zero computed margin-top
    for (const el of document.querySelectorAll('*')) {
      const mt = getComputedStyle(el).marginTop;
      if (mt !== '0px' && mt !== 'auto' && mt !== '') {
        const par = el.parentElement;
        out.push({
          k: 'mt', tag: el.tagName.toLowerCase(), cls: cls(el),
          par: par ? par.tagName.toLowerCase() + cls(par) : null,
          prev: el.previousElementSibling ? el.previousElementSibling.tagName.toLowerCase() : null,
          first: par ? par.firstElementChild === el : null,
          mt, text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 20),
        });
      }
    }
    // 2) every heading: above/below gaps
    for (const h of document.querySelectorAll('h1,h2,h3,h4,h5,h6')) {
      const par = h.parentElement;
      const prev = h.previousElementSibling, next = h.nextElementSibling;
      out.push({
        k: 'h', tag: h.tagName.toLowerCase(),
        par: par ? par.tagName.toLowerCase() + cls(par) : null,
        prev: prev ? prev.tagName.toLowerCase() : null,
        next: next ? next.tagName.toLowerCase() : null,
        first: par ? par.firstElementChild === h : null,
        ab: prev ? +(g(h).top - g(prev).bottom).toFixed(1)
          : par ? +(g(h).top - (g(par).top + parseFloat(getComputedStyle(par).paddingTop || 0))).toFixed(1) : null,
        be: next ? +(g(next).top - g(h).bottom).toFixed(1) : null,
        mt: getComputedStyle(h).marginTop,
        text: (h.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 20),
      });
    }
    return out;
  });
  if (++done % 50 === 0) console.error(`... ${done}/${files.length}`);
}

fs.writeFileSync(OUT, JSON.stringify(survey, null, 1));
console.log(`wrote ${OUT}: ${files.length} pages, ${Object.keys(survey).length} surveyed`);
await browser.close();
