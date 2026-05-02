import HomeLayout from "./common/components/HomeLayout";
import { useRoute } from "./common/effects/useRoute";
import { RouteMaster } from "./common/utils/routes";
import { EDoc, EThemes } from "./common/utils/types";

export default function Index(props: { theme: EThemes }) {
  const route = useRoute();

  return (
    <HomeLayout theme={props.theme}>
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
      <section className="align-center">
        <p>
          <a href={RouteMaster.doc(EDoc.Typographty, props.theme, route)}>
            <button>
              Documentation
            </button>
          </a>
        </p>
      </section>
      <section>
        <p>
          To install, simply add the following to your HTML page:
        </p>
        <pre><code>{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gobi-tools/css-theme@refs/heads/main/dist/theme.${props.theme}.min.css">`}</code></pre>
      </section>
    </HomeLayout>
  )
}