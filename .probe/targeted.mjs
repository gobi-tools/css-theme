import { chromium } from 'playwright';

const browser = await chromium.launch();

// 1) probe visual
const p1 = await browser.newPage({ viewport: { width: 900, height: 1400 } });
await p1.goto('http://localhost:8125/.probe/probe.html', { waitUntil: 'load' });
await p1.waitForTimeout(300);
await p1.screenshot({ path: '/tmp/opencode/probe-full.png', fullPage: true });

// 2) targeted computed checks
const targets = [
  'http://localhost:8124/showcase/blog/blog.html',
  'http://localhost:8124/showcase/landing-page/landing_page.html',
  'http://localhost:8124/pages/docs/forms/forms_normal.html',
];
const out = {};
for (const url of targets) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);
  out[url] = await page.evaluate(() => {
    const r = [];
    const fmt = (el) => {
      const cs = getComputedStyle(el);
      return {
        el: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : ''),
        text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 35),
        pad: cs.paddingTop + '/' + cs.paddingBottom,
        mt: cs.marginTop, mb: cs.marginBottom,
        display: cs.display, gap: cs.gap,
        h: Math.round(el.getBoundingClientRect().height),
      };
    };
    // headers
    document.querySelectorAll('header').forEach(h => {
      r.push({ section: 'header', ...fmt(h) });
      [...h.children].slice(0, 3).forEach(c => r.push({ section: 'header>child', ...fmt(c) }));
    });
    // fieldsets
    document.querySelectorAll('fieldset').forEach(f => {
      r.push({ section: 'fieldset', ...fmt(f) });
      const nx = f.nextElementSibling;
      if (nx) r.push({ section: 'fieldset->next', ...fmt(nx), gapPx: +(nx.getBoundingClientRect().top - f.getBoundingClientRect().bottom).toFixed(2) });
    });
    // forms: children gaps
    document.querySelectorAll('form').forEach(f => {
      const kids = [...f.children];
      for (let i = 0; i < kids.length - 1; i++) {
        const a = kids[i], b = kids[i + 1];
        r.push({ section: 'form-pair', a: a.tagName.toLowerCase() + ':' + (a.textContent || a.placeholder || '').trim().slice(0, 20), b: b.tagName.toLowerCase() + ':' + (b.textContent || b.placeholder || '').trim().slice(0, 20), gap: +(b.getBoundingClientRect().top - a.getBoundingClientRect().bottom).toFixed(2) });
      }
    });
    // figures
    document.querySelectorAll('figure').forEach(f => {
      const kids = [...f.children];
      for (let i = 0; i < kids.length - 1; i++) {
        const a = kids[i], b = kids[i + 1];
        r.push({ section: 'figure-pair', a: a.tagName.toLowerCase(), b: b.tagName.toLowerCase(), gap: +(b.getBoundingClientRect().top - a.getBoundingClientRect().bottom).toFixed(2) });
      }
      r.push({ section: 'figure', ...fmt(f) });
    });
    // details open inner
    document.querySelectorAll('details[open]').forEach(d => {
      r.push({ section: 'details-open', ...fmt(d) });
      const kids = [...d.children];
      for (let i = 0; i < kids.length - 1; i++) {
        const a = kids[i], b = kids[i + 1];
        r.push({ section: 'details-pair', a: a.tagName.toLowerCase(), b: b.tagName.toLowerCase(), gap: +(b.getBoundingClientRect().top - a.getBoundingClientRect().bottom).toFixed(2) });
      }
    });
    return r;
  });
  await page.close();
}
console.log(JSON.stringify(out, null, 1));
await browser.close();
