import { useState } from "react"
import DocLayout from "../../../common/components/DocsLayout";
import { RouteMaster } from "../../../common/utils/routes";
import { EShowcase } from "../../../common/utils/types";
import { useRoute } from "../../../common/effects/useRoute";

export type TSelectedTab = 'tab-1' | 'tab-2' | 'tab-3';

export function Tab1() {
  return (
    <>
      <h4>Home</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <p>
        <button>Edit</button>
      </p>
    </>
  );
}

export function Tab2() {
  return (
    <>
      <h4>Projects</h4>
      <p>
        <ul>
          <li>
            <a href="">user123/test</a>
          </li>
          <li>
            <a href="">user123/notes</a>
          </li>
          <li>
            <a href="">user_451/financials</a>
          </li>
        </ul>
      </p>
    </>
  )
}

export function Tab3() {
  return (
    <>
      <h4>Users</h4>
      <div className="group">
        <div className="row">
          <img className="circle" width="36" height="36" src="https://picsum.photos/80/80" alt="profile pic" />
          <div>
            <b>user123</b>
            <br />
            <span>active</span>
          </div>
        </div>
      </div>
      <br />
      <div className="group">
        <div className="row">
          <img className="circle" width="36" height="36" src="https://picsum.photos/40/40" alt="profile pic" />
          <div>
            <b>user_451</b>
            <br />
            <span>active</span>
          </div>
        </div>
      </div>
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
            Standard navigation is suitable for switching
            between pages, meaning independent pieces of
            content on your website.
          </p>
          <p>
            Tabbed navigation is suitable for switching
            between various bits of content within a
            particular page. It can be created
            by using an ordered list inside a <code>nav</code> element.
          </p>

          <nav className="disable-mobile">
            <ol>
              <li aria-selected={selected === 'tab-1'}>
                <a onClick={() => setSelected('tab-1')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span>Home</span>
                </a>
              </li>
              <li aria-selected={selected === 'tab-2'}>
                <a onClick={() => setSelected('tab-2')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><circle cx="12" cy="13" r="1" /></svg>
                  <span>Projects</span>
                </a>
              </li>
              <li aria-selected={selected === 'tab-3'}>
                <a onClick={() => setSelected('tab-3')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  <span>Users</span>
                </a>
              </li>
            </ol>
          </nav>
          <br />
          <div className="card">
            {selected === 'tab-1' ? <Tab1 /> : null}
            {selected === 'tab-2' ? <Tab2 /> : null}
            {selected === 'tab-3' ? <Tab3 /> : null}
          </div>
        </div>
        <div>
          <pre><code>
            {`<main>
  <nav>
    <ol>
      <li>
        <a onclick="... display content-1 ...">
          <svg ...></svg>
          <span>Home</span>
        </a>
      </li>
      <li>...</li>
      <li>...</li>
    </ol>
  </nav>
  <div>
    <!-- content is displayed only when -->
    <!-- the relevant tab is selected --> 
    <div id="content-1">...</div>
    <div id="content-2">...</div>
    <div id="content-3">...</div>
  </div>
</main>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            It's also responsive. On larger screens it will
            expand horizontally, whilst on smaller screens (or
            smaller containers in general) it will expand
            vertically.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.showcase(EShowcase.MobileTabsNav, theme, route)} />

            <figcaption>
              Showcase of tabbed navigation in a smaller container or device.
            </figcaption>
          </figure>
        </div>
        <div>
          <pre><code>
            {`<div className="row">
  <aside>
    <nav>
      <ol>
        <li>
          <a onclick="... display content-1 ...">
            <svg ...></svg>
            <span>Home</span>
          </a>
        </li>
        <li>...</li>
        <li>...</li>
      </ol>
    </nav>
  </aside>
  <div>
    <!-- content is displayed only when -->
    <!-- the relevant tab is selected --> 
    <div id="content-1">...</div>
    <div id="content-2">...</div>
    <div id="content-3">...</div>
  </div>
</div>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}