import { useState } from "react"
import DocLayout from "../../../common/components/DocsLayout";
import { RouteMaster } from "../../../common/utils/routes";
import { EExamples } from "../../../common/utils/types";
import { useRoute } from "../../../common/effects/useRoute";

export type TSelectedTab = 'tab-1' | 'tab-2' | 'tab-3';

export function Tab1() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <p>
        <button>Discover</button>
      </p>
    </>
  );
}

export function Tab2() {
  return (
    <>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div>
        <blockquote>lorem ipsum install</blockquote>
      </div>
    </>
  )
}

export function Tab3() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </>
  )
}

export default function Tabs({ theme }) {
  const route = useRoute();
  const [selected, setSelected] = useState<TSelectedTab>('tab-1');

  return (
     <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Tabbed navigation is suitable for switching
            between various pieces of content within a
            particular page. It can be created
            by using a <code>{'<menu>'}</code> element <b>outside</b> of a <code>{'nav'}</code> element.
          </p>

          <div className="disable-mobile">
            <menu>
              <li aria-selected={selected === 'tab-1'}>
                <a onClick={() => setSelected('tab-1')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span>Home</span>
                </a>
              </li>
              <li aria-selected={selected === 'tab-2'}>
                <a onClick={() => setSelected('tab-2')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
                  <span>Install</span>
                </a>
              </li>
              <li aria-selected={selected === 'tab-3'}>
                <a onClick={() => setSelected('tab-3')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M17 12h.01"/><path d="M12 12h.01"/><path d="M7 12h.01"/></svg>
                  <span>More</span>
                </a>
              </li>
            </menu>
          </div>
          <div>
            {selected === 'tab-1' ? <Tab1 /> : null}
            {selected === 'tab-2' ? <Tab2 /> : null}
            {selected === 'tab-3' ? <Tab3 /> : null}
          </div>
        </div>
        <div>
          <pre><code>
            {`<main>
  <menu>
    <li>
      <a onclick="...">
        <svg ...></svg>
        <span>
          Home
        </span>
      </a>
    </li>
    <li>...</li>
    <li>...</li>
  </menu>
  <div>
    <div id="content-1">
      ...
    </div>
    <div id="content-2">
      ...
    </div>
    <div id="content-3">
      ...
    </div>
  </div>
</main>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Tabs are responsive. On larger screens they 
            will expand horizontally, whilst on smaller screens (or
            smaller containers in general) they will expand
            vertically.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.example(EExamples.MobileTabsNav, theme, route)} />

            <figcaption>
              Showcase of tabbed navigation in a smaller container or device.
            </figcaption>
          </figure>
        </div>
        <div>
          <pre><code>
            {`<div className="row">
  <aside>
    <menu>
      <li>
        <a onclick="...">
          <svg ...></svg>
          <span>
            Home
          </span>
        </a>
      </li>
      <li>...</li>
      <li>...</li>
    </menu>
  </aside>
  <div>
    <div id="content-1">
      ...
    </div>
    <div id="content-2">
      ...
    </div>
    <div id="content-3">
      ...
    </div>
  </div>
</div>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}