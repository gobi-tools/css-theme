import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EShowcase } from "../../../common/utils/types";

export default function Heroes({ theme }) {
  const route = useRoute();
  
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            A <b>hero</b> is a section that spans the whole width of the viewport,
            used to highlight important parts of a website.
          </p>
          <p>
            For example, you can use the <code>hero</code> class to highlight the
            main webpage navigation.
          </p>
          <iframe scrolling="no" width="100%" height={275} src={RouteMaster.showcase(EShowcase.LayoutHeroSimple, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<header class="hero">
  <nav>
    <ul>
      <li><a href="...">Home</a></li>
    </ul>
  </nav<
</header>
<main>
  <h1>Title</h1>
  <p>Lorem ipsum...</p>
</main>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can also create more complex layouts, to highlight 
            a call to action for a web page.
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.showcase(EShowcase.LayoutHeroSub, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<header>
  <nav>
    <ul>
      <li><a href="...">Home</a></li>
    </ul>
  </nav>
  <div class="hero align-center">
    <h2>My blog</h2>
    <p>Lorem ipsum...</p>
    <form action="...">
      <div class="group">
        <input type="email placeholder="name@example.com"/>
        <input type="submit" value="Subscribe"/>
      </div>
    </form>
  </div>
</header>
<main>
  <h1>Title</h1>
  <p>Lorem ipsum...</p>
</main>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}