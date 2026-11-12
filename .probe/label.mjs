import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
for (const url of ['http://localhost:8124/default/pages/docs/forms/forms_normal.html', 'http://localhost:8123/.probe/probe.html']) {
  await p.goto(url, { waitUntil: 'load' });
  const res = await p.evaluate(() => {
    const g = e => e.getBoundingClientRect();
    const out = [];
    document.querySelectorAll('form, fieldset').forEach((f, fi) => {
      [...f.children].forEach((c, i, a) => {
        const prev = a[i - 1];
        out.push({ f: fi, pair: (prev ? prev.tagName + '.' + (prev.className || '-') : 'START') + ' > ' + c.tagName + '.' + (c.className || '-'),
          gap: prev ? +(g(c).top - g(prev).bottom).toFixed(1) : null });
      });
      // inside labels: children of label
      f.querySelectorAll('label').forEach((l, li) => {
        const kids = [...l.children];
        out.push({ f: fi, label: li, display: getComputedStyle(l).display, kids: kids.map(k => k.tagName).join(',') });
        for (let i = 1; i < kids.length; i++)
          out.push({ f: fi, label: li, inner: kids[i - 1].tagName + ' > ' + kids[i].tagName, gap: +(g(kids[i]).top - g(kids[i - 1]).bottom).toFixed(1) });
        if (!kids.length && l.nextElementSibling)
          out.push({ f: fi, label: li, sibling: l.nextElementSibling.tagName, gap: +(g(l.nextElementSibling).top - g(l).bottom).toFixed(1) });
      });
    });
    return out;
  });
  console.log('=====', url);
  res.forEach(r => console.log(JSON.stringify(r)));
}
await b.close();
