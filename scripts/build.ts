import * as fs from 'fs';

// 1. create inter folder
try {
  fs.rmSync('inter', { recursive: true, force: true });
} catch {}
fs.mkdirSync('inter');
console.log('Created intermediary folder');

// 2. copy the normal themes
const themes = fs.readdirSync('src/themes');
for (const theme of themes) {
  const origin = `src/themes/${theme}`;
  const dest = `inter/${theme}`;
  fs.copyFileSync(origin, dest);
  console.log('Copied', theme, 'to intermediary folder');
}

// 3. create main theme file
const baseCssFile = 'theme.css';
const baseCss = fs.readFileSync('src/base/theme.css', 'utf-8');
const extraCssFiles = fs.readdirSync('src/base').filter((f) => f !== baseCssFile);

const extraCsss = [];
for (const extraCssFile of extraCssFiles) {
  const extraCss = fs.readFileSync(`src/base/${extraCssFile}`, 'utf-8');  
  extraCsss.push(extraCss);
}

const css = [baseCss, ...extraCsss].join('\n');
fs.writeFileSync('inter/theme.css', css);