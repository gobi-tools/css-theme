import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:8123/.probe/probe.html';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: 'load' });
await page.waitForTimeout(300);

const rows = await page.evaluate(() => {
  const out = [];
  const label = (el) => {
    let s = el.tagName.toLowerCase();
    if (el.className && typeof el.className === 'string' && el.className.trim()) s += '.' + el.className.trim().split(/\s+/).join('.');
    const t = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 45);
    return s + ` "${t}"`;
  };
  const cs = (el) => getComputedStyle(el);
  const walk = (parent) => {
    const kids = [...parent.children];
    const pcs = cs(parent);
    for (let i = 0; i < kids.length - 1; i++) {
      const a = kids[i], b = kids[i + 1];
      const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      // vertical stacking check
      const overlapY = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
      if (overlapY > Math.min(ra.height, rb.height) * 0.5) continue;
      const cas = cs(a), cbs = cs(b);
      out.push({
        parent: label(parent) + ' [' + pcs.display + ' gap:' + (pcs.display.includes('flex') || pcs.display.includes('grid') ? pcs.rowGap : '-') + ']',
        a: label(a),
        aMB: cas.marginBottom,
        b: label(b),
        bMT: cbs.marginTop,
        gap: +(rb.top - ra.bottom).toFixed(2),
        collapsed: cas.marginBottom !== '0px' && cbs.marginTop !== '0px',
      });
      walk(a);
    }
    if (kids.length) walk(kids[kids.length - 1]);
  };
  walk(document.body);
  // token values
  const rootCS = getComputedStyle(document.documentElement);
  const tokens = {};
  for (const t of ['2xs', 'xs', 'sm', 'm', 'l', 'xl', '2xl']) tokens[t] = rootCS.getPropertyValue('--space-' + t).trim();
  return { tokens, rows: out };
});

console.log('TOKENS:', JSON.stringify(rows.tokens));
const seen = new Set();
for (const r of rows.rows) {
  const key = `${r.a.split('"')[0]}mb=${r.aMB} -> ${r.b.split('"')[0]} mt=${r.bMT} gap=${r.gap}`;
  console.log(String(r.gap).padStart(7), '|', r.parent.slice(0, 70).padEnd(70), '|', r.a.slice(0, 45).padEnd(45), 'mb=' + r.aMB.padEnd(7), '->', r.b.slice(0, 40).padEnd(40), 'mt=' + r.bMT);
}
await browser.close();
