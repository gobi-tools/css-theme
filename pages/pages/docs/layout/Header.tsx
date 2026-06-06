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
            A <code>header</code> element is used to define the introductory content of a page or a section.
            The simplest top level header can contain a navigation element (<code>nav</code> or <code>menu</code>):
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
            You create more complex "hero" layouts by placing any element, such as a <code>div</code>, inside a header. 
            Note that heroes are defined by the extra top and bottom padding child elements receive.
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.LayoutHeaderComplex, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<!-- nav header -->
<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          Home
        </a>
      </li>
    </ul>
  </nav>
</header>

<!-- hero header -->
<header>
  <div class="align-center">
    <h2>
      My blog
    </h2>
    <p>
      Lorem ipsum...
    </p>
    <form action="...">
      <div role="group">
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
            Finally, <code>aside</code> is another specialised element that can be used in a header in 
            order to create a "banner" element, either to be placed at the top of the page or mid-content.
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.LayoutHeaderSection, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<main>
  <header>
    <aside>
      <div role="group">
        <div class="row">
          <div>
            ...
          </div>
          <!-- gap -->
          <div></div>
          <button>
            ...
          </button>
        </div>
      </div>
    </aside>
  </header>
</main>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}