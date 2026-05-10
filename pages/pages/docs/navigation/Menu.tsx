import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EShowcase } from "../../../common/utils/types";

export default function Menu({ theme }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Menu type navigation can be used both as
            the top level navigation as well as part of
            various page elements.
          </p>
          <p>
            It's best suited when each navigation item is
            paired with a specific icon.
          </p>
          <nav>
            <menu className="disable-mobile">
              <li aria-selected>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg>
                  <span>Latest</span>
                </a>
              </li>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 15H7a4 4 0 0 0-4 4v2" /><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /><circle cx="10" cy="7" r="4" /></svg>
                  <span>Profile</span>
                </a>
              </li>
            </menu>
          </nav>
        </div>
        <div>
          <pre><code>
            {`<main>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</main>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            More importantly, on tablets and mobile devices,
            the top level navigation (housed inside a <code>header</code> element) will automatically move from the
            top of the page to the bottom, mimicking the
            classic mobile navigation.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.showcase(EShowcase.MobileMenu, theme, route)} />
            <figcaption>Showcase of menu navigation on smaller device</figcaption>
          </figure>
        </div>
        <div>
          <pre><code>
            {`<header>
  <menu>
    ...
  </menu>
</header>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}