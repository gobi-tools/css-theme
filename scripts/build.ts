import { exit } from 'process';
import * as fs from 'fs';

const TMP_FOLDER = 'tmp';
const THEMES_FOLDER = 'src/themes';
const BASE_FOLDER = 'src/base';
const RESET_FILE = '01.reset.css';

// 1. setup workspace dir
try {
  fs.rmSync(TMP_FOLDER, { recursive: true, force: true });
  fs.mkdirSync(TMP_FOLDER);
} catch {
  exit(0);
}

// 2. create main theme file
const baseCss = fs.readFileSync(`${BASE_FOLDER}/${RESET_FILE}`, 'utf-8');
const extraCssFiles = fs.readdirSync(BASE_FOLDER).filter((f) => f !== RESET_FILE);
console.log(`Extracted ${BASE_FOLDER}/${RESET_FILE}`);

const extraCsss = [];
for (const extraCssFile of extraCssFiles) {
  const extraCss = fs.readFileSync(`${BASE_FOLDER}/${extraCssFile}`, 'utf-8');
  extraCsss.push(extraCss);
  console.log(`Extracted ${BASE_FOLDER}/${extraCssFile}`);
}

const themes = [
  'default', 'blog', 'app', 'delivery', 'landing', 'newsletter', 
];

for (const theme of themes) {
  const fontCss = fs.readFileSync(`${THEMES_FOLDER}/theme.${theme}.fonts.css`, 'utf-8');
  const themeCss = fs.readFileSync(`${THEMES_FOLDER}/theme.${theme}.css`, 'utf-8');
  const css = [fontCss, baseCss, ...extraCsss, themeCss].join('\n');
  fs.writeFileSync(`${TMP_FOLDER}/theme.${theme}.css`, css);
}