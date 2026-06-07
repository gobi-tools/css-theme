import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EExamples } from "../../../common/utils/types";

export default function Breadcrumbs({ theme }) {
  const route = useRoute();
  
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            The breadcrumbs navigaion element is created
            by placing an ordered list of links inside the <code>nav</code> element.
          </p>
          <p>
            As with unordered lists, you can denote the selected elment using
            the <code>aria-selected</code> attribute.
          </p>
          <nav className="disable-mobile">
            <ol>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Library</a>
              </li>
              <li aria-selected>
                <a href="">Data</a>
              </li>
            </ol>
          </nav>
          <p>
            Likewise, icons can be added to any link element, but unlike normal unordered
            navigation sub-lists will not be displayed.
          </p>
          <nav className="disable-mobile">
            <ol>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span>Home</span>
                </a>
              </li>
              <li aria-selected>
                <a href="">Folder</a>
              </li>
            </ol>
          </nav>

          <p>
            Finally, breadcrumbs are also responsive.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.example(EExamples.MobileBreadcrumbs, theme, route)} />
            <figcaption>Showcase of breadcrumbs on a smaller device</figcaption>
          </figure>
        </div>
        <div>
          <pre><code>
            {`<nav>
  <ol>
    <li>
      <a href="...">
        <svg ...></svg>
        <span>
          Home
        </span>
      </a>
    </li>
    <li>
      <a href="...">
        Library
      </a>
    </li>
    <li aria-selected>
      <a href="...">
        Data
      </a>
    </li>
  </ol>
</nav>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}