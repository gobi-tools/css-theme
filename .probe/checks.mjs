import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const checks = [
  ['blog', 'http://localhost:8124/showcase/blog/blog.html'],
  ['forms', 'http://localhost:8124/pages/docs/forms/forms_normal.html'],
  ['lists', 'http://localhost:8124/pages/docs/basics/lists.html'],
  ['summary', 'http://localhost:8124/pages/docs/basics/summary.html'],
];

for (const [name, url] of checks) {
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(700);
  const res = await page.evaluate(() => {
    const out = [];
    const g = (el) => el.getBoundingClientRect();
    const label = (el) => el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/).join('.') : '') + ' "' + (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 30) + '"';

    // main children + footer
    const main = document.querySelector('main');
    if (main) {
      const cs = getComputedStyle(main);
      out.push({ t: 'main', info: label(main), display: cs.display, mb: cs.marginBottom, h: Math.round(g(main).height) });
      [...main.children].forEach(c => {
        const ccs = getComputedStyle(c);
        out.push({ t: 'main>child', info: label(c), mb: ccs.marginBottom, top: Math.round(g(c).top), bottom: Math.round(g(c).bottom) });
      });
      const last = main.lastElementChild;
      const mnext = main.nextElementSibling;
      if (last) out.push({ t: 'main->next', gap: mnext ? +(g(mnext).top - g(main).bottom).toFixed(2) : null, lastChildMb: getComputedStyle(last).marginBottom });
    }
    const footer = document.querySelector('footer');
    if (footer) {
      const fc = footer.firstElementChild;
      out.push({ t: 'footer', info: label(footer), pad: getComputedStyle(footer).padding });
      if (fc) out.push({ t: 'footer>first', info: label(fc), padT: getComputedStyle(fc).paddingTop, mb: getComputedStyle(fc).marginBottom });
    }

    // details pairs
    document.querySelectorAll('details').forEach(d => {
      const dcs = getComputedStyle(d);
      out.push({ t: 'details', info: label(d), open: d.open, display: dcs.display, gap: dcs.gap, mb: dcs.marginBottom });
      const nx = d.nextElementSibling;
      if (nx) out.push({ t: 'details->next', a: label(d).slice(0, 30), b: label(nx).slice(0, 40), gap: +(g(nx).top - g(d).bottom).toFixed(2) });
      const prev = d.previousElementSibling;
      if (prev) out.push({ t: 'prev->details', a: label(prev).slice(0, 30), b: label(d).slice(0, 30), gap: +(g(d).top - g(prev).bottom).toFixed(2) });
      const dkids = [...d.children];
      for (let i = 0; i < dkids.length - 1; i++) {
        out.push({ t: 'details-inner', a: dkids[i].tagName.toLowerCase(), b: dkids[i + 1].tagName.toLowerCase(), gap: +(g(dkids[i + 1]).top - g(dkids[i]).bottom).toFixed(2) });
      }
    });

    // list items with paragraphs
    document.querySelectorAll('ul, ol').forEach(list => {
      const items = [...list.children].filter(li => li.tagName === 'LI');
      if (items.length > 1 && items.some(li => li.querySelector('p'))) {
        for (let i = 0; i < items.length - 1; i++) {
          out.push({ t: 'li-pair', a: label(items[i]).slice(0, 40), b: label(items[i + 1]).slice(0, 40), gap: +(g(items[i + 1]).top - g(items[i]).bottom).toFixed(2), aH: Math.round(g(items[i]).height) });
        }
        out.push({ t: 'list', info: label(list), gap: getComputedStyle(list).rowGap, display: getComputedStyle(list).display });
      }
    });

    // form pairs with labels
    document.querySelectorAll('form').forEach(f => {
      [...f.children].forEach((c, i, arr) => {
        if (i < arr.length - 1) out.push({ t: 'form-inner', a: arr[i].tagName.toLowerCase() + ':' + (arr[i].textContent || arr[i].placeholder || '').trim().slice(0, 16), b: arr[i + 1].tagName.toLowerCase() + ':' + (arr[i + 1].textContent || arr[i + 1].placeholder || '').trim().slice(0, 16), gap: +(g(arr[i + 1]).top - g(arr[i]).bottom).toFixed(2) });
      });
    });

    // headings: space above vs below
    document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
      const prev = h.previousElementSibling, next = h.nextElementSibling;
      out.push({
        t: 'heading', tag: h.tagName, text: (h.textContent || '').trim().slice(0, 25),
        above: prev ? +(g(h).top - g(prev).bottom).toFixed(1) : +(g(h).top - (g(h.parentElement).top + parseFloat(getComputedStyle(h.parentElement).paddingTop || 0))).toFixed(1),
        below: next ? +(g(next).top - g(h).bottom).toFixed(1) : null,
        mb: getComputedStyle(h).marginBottom, mt: getComputedStyle(h).marginTop,
        parent: h.parentElement.tagName.toLowerCase(),
      });
    });

    // hr contexts
    document.querySelectorAll('hr').forEach(hr => {
      const prev = hr.previousElementSibling, next = hr.nextElementSibling;
      out.push({ t: 'hr', parent: hr.parentElement.tagName.toLowerCase(), above: prev ? +(g(hr).top - g(prev).bottom).toFixed(1) : null, below: next ? +(g(next).top - g(hr).bottom).toFixed(1) : null, mt: getComputedStyle(hr).marginTop, mb: getComputedStyle(hr).marginBottom });
    });

    // sections
    document.querySelectorAll('section').forEach(s => {
      const prev = s.previousElementSibling;
      out.push({ t: 'section', text: (s.textContent || '').trim().slice(0, 25), above: prev ? +(g(s).top - g(prev).bottom).toFixed(1) : null, mb: getComputedStyle(s).marginBottom });
    });

    return out;
  });
  console.log('\n########', name);
  for (const r of res) console.log(JSON.stringify(r));
}
await browser.close();
