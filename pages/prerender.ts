import ReactSrv from "react-srv";
import Document from "./common/documents/Document";
import DocumentExamples from "./common/documents/DocumentExamples";
import { EThemes } from "./common/utils/types";
import fs from "fs";
import { cp } from "node:fs/promises";

const themes = Object.keys(EThemes);
const deployments = ['', ...themes.map(t => t.toLowerCase())];

(async () => {
  for (const deployment of deployments) {
    const theme = deployment === '' ? EThemes.Default : deployment as EThemes;

    console.log('Outputting for theme', theme);

    // normal pages
    const pages = new ReactSrv({
      Document,
      srcPath: './pages',
      outPath: `./docs/${deployment}`,
      minify: true,
      splitting: true,
      keepNames: true,
      initProps: { theme },
    });
    await pages.prerender();

    // examples
    const examples = new ReactSrv({
      Document: DocumentExamples,
      srcPath: './pages/pages/examples',
      outPath: `./docs/${deployment}/pages/examples`,
      minify: true,
      splitting: true,
      keepNames: true,
      initProps: { theme },
    });
    await examples.prerender();

    console.log('---------------------------');
  }

  // now copy resources
  fs.mkdirSync('./docs/res', { recursive: true });
  cp('./dist', './docs/res', { recursive: true });
  cp('./pages/res', './docs/res', { recursive: true });
  console.log('Finished copying resources');
})();

