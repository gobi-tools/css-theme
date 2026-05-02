import ReactSrv from "react-srv";
import Document from "./common/documents/Document";
import { EThemes } from "./common/utils/types";
import fs from "fs";
import { cp } from "fs/promises";

const themes = Object.keys(EThemes);
const deployments = ['', ...themes.map(t => t.toLowerCase())];

(async () => {
  for (const deployment of deployments) {
    const theme = deployment === '' ? EThemes.Default : deployment as EThemes;

    console.log('Outputting for theme', theme);

    const react = new ReactSrv({
      Document,
      srcPath: './pages',
      outPath: `./docs/${deployment}`,
      initProps: { theme },
    });
    await react.prerender();

    console.log('---------------------------');
  }

  // now copy resources
  fs.mkdirSync('./docs/res', { recursive: true });
  cp('./dist', './docs/res', { recursive: true });
  cp('./pages/res', './docs/res', { recursive: true });
  console.log('Finished copying resources');
})();

