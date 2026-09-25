import CodeSyntax from "./common/components/CodeSyntax";
import HomeLayout from "./common/layouts/HomeLayout";
import { useRoute } from "./common/effects/useRoute";
import { RouteMaster } from "./common/utils/routes";
import { EDoc, EThemes } from "./common/utils/types";

export default function Index({ theme }: { theme: EThemes }) {
  const route = useRoute();

  return (
    <HomeLayout theme={theme}>
      <section>
        <br />
      </section>
      <section className="align-center">
        <h1>
          The simplest CSS framework
        </h1>
        <p>
          One oppinionated file that can handle styling, responsiveness, light or dark modes and themes.
        </p>
      </section>
      <section>
        <p className="row align-center disable-mobile">
          <a href={RouteMaster.doc(EDoc.Typographty, theme, route)}>
            <button>
              Documentation
            </button>
          </a>
          <a href={RouteMaster.showcase(theme, route)}>
            <button type="reset">
              Showcase
            </button>
          </a>
        </p>
      </section>
      <section>
        <p>
          To install, simply add the following to your HTML page:
        </p>
        <CodeSyntax lang={'xml'}>{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gobi-tools/css-theme@refs/heads/main/dist/theme.${theme}.min.css">`}</CodeSyntax>
      </section>
    </HomeLayout>
  )
}