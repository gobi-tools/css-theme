import * as fs from 'fs';

const before = JSON.parse(fs.readFileSync('.probe/survey.before.json', 'utf-8'));
const after = JSON.parse(fs.readFileSync((process.argv[2] || '.probe/survey.after.json'), 'utf-8'));

let structural = 0;
const hChanges = [];
const newMt = [];
const goneMt = [];

const key = (r) => `${r.tag}${r.cls || ''}|${r.par}|${r.prev}|${r.first}|${r.text}`;

for (const f of Object.keys(before)) {
  const b = before[f], a = after[f];
  if (!Array.isArray(b) || !Array.isArray(a)) continue;

  const bh = b.filter(r => r.k === 'h'), ah = a.filter(r => r.k === 'h');
  if (bh.length !== ah.length) { structural++; console.log('HEADING COUNT DIFF', f, bh.length, ah.length); continue; }
  for (let i = 0; i < bh.length; i++) {
    const rb = bh[i], ra = ah[i];
    const d = {};
    if (rb.ab !== ra.ab) d.ab = [rb.ab, ra.ab];
    if (rb.be !== ra.be) d.be = [rb.be, ra.be];
    if (rb.mt !== ra.mt) d.mt = [rb.mt, ra.mt];
    if (Object.keys(d).length) hChanges.push({ f, tag: ra.tag, par: ra.par, prev: ra.prev, first: ra.first, text: ra.text, ...d });
  }

  const bmt = new Map(b.filter(r => r.k === 'mt').map(r => [key(r), r]));
  const amt = new Map(a.filter(r => r.k === 'mt').map(r => [key(r), r]));
  for (const [k, r] of amt) if (!bmt.has(k)) newMt.push({ f, ...r });
  for (const [k, r] of bmt) if (!amt.has(k)) goneMt.push({ f, ...r });
}

console.log('structural diffs:', structural);
console.log('heading records changed:', hChanges.length);
console.log('new mt>0 elements:', newMt.length, '| gone:', goneMt.length);

const sig = {};
for (const c of hChanges) {
  const key = `${c.tag} in ${c.par} prev=${c.prev} first=${c.first} | ab ${c.ab ? c.ab.join('->') : '-'} | be ${c.be ? c.be.join('->') : '-'}`;
  sig[key] = (sig[key] || 0) + 1;
}
console.log('\n== heading change signatures ==');
for (const [k, v] of Object.entries(sig).sort((a, b) => b[1] - a[1])) console.log(String(v).padStart(4), k);

const sig2 = {};
for (const r of newMt) {
  const k = `${r.tag}${r.cls || ''} mt=${r.mt} parent=${r.par} prev=${r.prev} first=${r.first}`;
  sig2[k] = (sig2[k] || 0) + 1;
}
console.log('\n== new mt>0 by context ==');
for (const [k, v] of Object.entries(sig2).sort((a, b) => b[1] - a[1])) console.log(String(v).padStart(4), k);

console.log('\n== first-child new mt in nav/header/li/aside/td/menu contexts ==');
let shown = 0;
for (const r of newMt) {
  const p = r.par || '';
  if (r.first && /nav|header|aside|li|td|th|summary|row|menu/i.test(p) && shown < 50) {
    console.log(` ${r.f} | ${r.tag}${r.cls} first in ${p} mt=${r.mt} prev=${r.prev} "${r.text}"`);
    shown++;
  }
}
