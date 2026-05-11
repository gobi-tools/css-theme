import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EExamples } from "../../../common/utils/types";

export default function Header({ theme }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            A <code>header</code> is used to define the introductory content of a page or section.
            The simplest top level header can contain a navigation element:
          </p>
          <iframe scrolling="no" width="100%" height={275} src={RouteMaster.example(EExamples.LayoutHeaderSimple, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          Home
        </a>
      </li>
      <li>
        <a href="...">
          About
        </a>
      </li>
    </ul>
  </nav>
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
            More compelx headers can contain both the navigation as well as a
            call to action, a brand promo, etc.
          </p>
          {/* <p>
            Inside a header you can create more complex layouts, to highlight 
            a call to action, a brand promo, etc.
          </p> */}
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.LayoutHeaderComplex, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          Home
        </a>
      </li>
    </ul>
  </nav>
  <div class="align-center">
    <h2>
      My blog
    </h2>
    <p>
      Lorem ipsum...
    </p>
    <form action="...">
      <div class="group">
        <input 
          type="email" 
          placeholder="..."/>
        <input 
          type="submit" 
          value="Subscribe"/>
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

      <section className="row">
        <div>
          <p>
            Section headers can be combined with other elements to form banners:
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.LayoutHeaderSection, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<main>
  <section>
    <header>
      <div>
        <div class="group">
          <div class="row">
            <div>
              ...
            </div>
            <div class="gap">
            </div>
            <button>
              ...
            </button>
          </div>
        </div>
      </div>
    </header>
  </section>
</main>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}