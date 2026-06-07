import DocLayout from "../../../common/components/DocsLayout"
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes"
import { EExamples } from "../../../common/utils/types"

export default function Navigation({ theme }) {
  const route = useRoute();
    
  return (
     <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            The most basic navigation element is created by placing an unordered list of links within a <code>nav</code> element.
            It's suitable as the top level navigation for a document, where each item can be a link to a different page.
          </p>
          <nav className="disable-mobile">
            <ul>
              <li>
                <a href="">Item 1</a>
              </li>
              <li>
                <a href="">Item 2</a>
              </li>
              <li>
                <a href="">Item 3</a>
              </li>
            </ul>
          </nav>
          <p>
            Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items.
          </p>
          <nav className="disable-mobile">
            <ul>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" /><path d="m18 15 4-4" /><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" /></svg>
                  <span>Docs</span>
                </a>
              </li>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>
                  <span>More</span>
                </a>
                <ul>
                  <li><a href="">Option 1</a></li>
                  <li><a href="">Option 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <p>
            Navigtion items may use the <code>aria-selected</code> attribute to denote they are selected.
          </p>
          <nav className="disable-mobile">
            <ul>
              <li aria-selected>
                <a href="">
                  Selected
                </a>
              </li>
              <li>
                <a href="">
                  Unselected
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <pre><code>
            {`<header>
  <nav>
    <ul>
      <!-- simple nav item -->
      <li>
        <a href="...">
          Item 1
        </a>
      </li>
      <!-- selected -->
      <li aria-selected>
        <a href="...">
          Item 2
        </a>
      </li>
      <!-- with icon -->
      <li>
        <a href="...">
          <svg ...></svg>
          <span>
            Item 3
          </span>
        </a>
        <!-- collapsible -->
        <ul>
          <li>
            <a href="...">
              Option 1
            </a>
          </li>
          ...
        </ul>
      </li>
    </ul>
  </nav>
</header>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can use other elements such as <code>select</code>, <code>input</code>, <code>img</code>, etc to add more functionality to the navigation bar.
          </p>
          <nav className="disable-mobile">
            <ul>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <select id="selector" defaultValue={"opt-1"} style={{ minWidth: "100px"}}>
                  <option value={"opt-1"}>Val 1</option>
                  <option value={"opt-2"}>Val 2</option>
                  <option value={"opt-3"}>Val 3</option>
                </select>
              </li>
              <li>
                <input type="search" placeholder="Search ..." id="search" />
              </li>
            </ul>
          </nav>
          <br />
        </div>
        <div>
          <pre><code>
            {`<li>
  <img 
    height="24" 
    src="..." 
    alt="logo"/>
</li>
<li>
  <select>...</select>
</li>
<li>
  <input 
    type="search" 
    placeholder="Search..."/>
</li>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Navigation can be split into a left and a right section by placing an empty <code>div</code> element to 
            act as gap.
          </p>
          <nav className="disable-mobile">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Menu</a>
              </li>
              <div></div>
              <li>
                <a href="">
                  <button>Download</button>
                </a>
              </li>
              <li>
                <a href="">
                  <button type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </button>
                </a>
              </li>
            </ul>
          </nav>
          <br />
        </div>
        <div>
          <pre><code>
            {`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Navigation can be placed inside an <code>article</code> to create a more striking display.
          </p>
          <article>
            <nav className="disable-mobile">
              <ul>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" /><path d="m18 15 4-4" /><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" /></svg>
                  <span>Docs</span>
                </a>
              </li>
              <li>
                <input type="search" placeholder="Search..." />
              </li>
              <div></div>
              <li>
                <a href="">
                  <button type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </button>
                </a>
              </li>
            </ul>
            </nav>
          </article>
          <br />
        </div>
        <div>
          <pre><code>
            {`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Finally, the navigation bar is responsive.
            On large displays it expands horizontally and
            on smaller displays it switches to a vertical layout.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.example(EExamples.MobileNav, theme, route)} />
            <figcaption>Showcase of navigation on a smaller device</figcaption>
          </figure>
        </div>
        <div>
          <pre><code>
            {`<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>Docs</span>
        </a>
      </li>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>More</span>
        </a>
        <ul>
          <li>
            <a href="...">
              Option 1
            </a>
          <li>
          <li>
            <a href="...">
              Option 2
            </a>
          <li>
        </ul>
      </li>
    </ul>
  </nav>
</header>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}