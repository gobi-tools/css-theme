import { chromium } from 'playwright';
import fs from 'fs';

const BASE = 'http://localhost:8124';

const pages = process.argv.slice(2);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();

const results = {};

for (const p of pages) {
  await page.goto(BASE + p, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(e => console.log('goto fail', p, e.message));
  await page.waitForTimeout(1200);
  const data = await page.evaluate(() => {
    const out = [];
    const label = (el) => {
      let s = el.tagName.toLowerCase();
      if (el.id) s += '#' + el.id;
      if (el.className && typeof el.className === 'string') s += '.' + el.className.trim().split(/\s+/).join('.');
      const t = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40);
      return s + ` "${t}"`;
    };
    const isVisual = (el) => {
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      if (r.height === 0 && r.width === 0) return false;
      // ignore inline elements for gap purposes unless they have height
      return true;
    };
    const walk = (parent, depth) => {
      if (depth > 6) return;
      const kids = [...parent.children].filter(isVisual);
      for (let i = 0; i < kids.length - 1; i++) {
        const a = kids[i], b = kids[i + 1];
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        const gap = rb.top - ra.bottom;
        const csA = getComputedStyle(a);
        const csB = getComputedStyle(b);
        const parentCS = getComputedStyle(parent);
        const parentGap = parentCS.rowGap !== 'normal' && parentCS.display.includes('flex') || parentCS.display.includes('grid') ? parentCS.rowGap : null;
        // only vertical stacking: horizontal adjacency => skip if they overlap vertically
        const overlapY = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
        const horizontal = overlapY > Math.min(ra.height, rb.height) * 0.5;
        if (!horizontal) {
          out.push({
            parent: label(parent),
            parentDisplay: parentCS.display,
            parentGap,
            a: label(a),
            aMarginBottom: csA.marginBottom,
            b: label(b),
            bMarginTop: csB.marginTop,
            gap: +gap.toFixed(2),
            aRect: [Math.round(ra.top), Math.round(ra.bottom)],
            bRect: [Math.round(rb.top), Math.round(rb.bottom)],
          });
        }
        walk(kids[i], depth + 1);
      }
      if (kids.length) walk(kids[kids.length - 1], depth + 1);
    };
    const roots = [...document.body.children].filter(isVisual);
    walk(document.body, 0);
    return { title: document.title, gaps: out };
  });
  results[p] = data;
}

fs.writeFileSync('/tmp/opencode/gaps.json', JSON.stringify(results, null, 2));
await browser.close();
console.log('written');
