import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1000, height: 900 } });
await p.goto('http://localhost:8123/.probe/probe.html', { waitUntil: 'load' });
await p.waitForTimeout(400);
const res = await p.evaluate(() => {
  const g = el => el.getBoundingClientRect();
  const pair = (a, b) => +(g(b).top - g(a).bottom).toFixed(2);
  const out = [];
  const q = s => [...document.querySelectorAll(s)];
  // p -> section, section -> following p (last child), section internal first heading
  q('section').forEach(s => {
    const prev = s.previousElementSibling;
    const kids = [...s.children];
    out.push({ t: 'section', prev: prev && prev.tagName, above: prev ? pair(prev, s) : null,
      firstKidAbove: kids[0] ? +(g(kids[0]).top - g(s).top).toFixed(2) : null,
      lastKidBelow: kids.length ? +(g(s).bottom - g(kids[kids.length-1]).bottom).toFixed(2) : null,
      belowNext: s.nextElementSibling ? pair(s, s.nextElementSibling) : null });
  });
  // headings: above/below by level when prev is P
  q('h1,h2,h3,h4,h5,h6').forEach(h => {
    const prev = h.previousElementSibling, next = h.nextElementSibling;
    out.push({ t: 'head', tag: h.tagName, prev: prev && prev.tagName, above: prev ? pair(prev, h) : null,
      next: next && next.tagName, below: next ? pair(h, next) : null });
  });
  // details closed/open with following p
  q('details').forEach(d => {
    out.push({ t: 'det', open: d.open, above: d.previousElementSibling ? pair(d.previousElementSibling, d) : null,
      below: d.nextElementSibling ? pair(d, d.nextElementSibling) : null,
      sumToContent: d.children.length > 1 ? pair(d.children[0], d.children[1]) : null });
  });
  // figure/figcaption
  q('figure').forEach(f => {
    const img = f.querySelector('img, picture, video'), cap = f.querySelector('figcaption');
    out.push({ t: 'fig', imgToCap: img && cap ? pair(img, cap) : null,
      capBelow: cap && f.nextElementSibling ? pair(f, f.nextElementSibling) : null, capMb: cap && getComputedStyle(cap).marginBottom });
  });
  // fieldset outer
  q('fieldset').forEach(fs => {
    out.push({ t: 'fieldset', above: fs.previousElementSibling ? pair(fs.previousElementSibling, fs) : null,
      below: fs.nextElementSibling ? pair(fs, fs.nextElementSibling) : null, mb: getComputedStyle(fs).marginBottom });
  });
  // hr
  q('hr').forEach(h => out.push({ t: 'hr', above: h.previousElementSibling ? pair(h.previousElementSibling, h) : null,
    below: h.nextElementSibling ? pair(h, h.nextElementSibling) : null, mt: getComputedStyle(h).marginTop, mb: getComputedStyle(h).marginBottom }));
  return out;
});
for (const r of res) console.log(JSON.stringify(r));
await b.close();
