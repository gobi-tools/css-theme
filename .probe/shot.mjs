import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1000, height: 900 } });
await p.goto('http://localhost:8123/.probe/probe.html', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(500);
await p.screenshot({ path: '.probe/probe.png', fullPage: true });
await b.close();
console.log('ok');
