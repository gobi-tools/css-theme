import { useState } from "react";
import DocsLayout from "../../../common/layouts/DocsLayout";
import { EThemes } from "../../../common/utils/types";
import CodeSyntax from "../../../common/components/CodeSyntax";

export default function Loading({ theme }: { theme: EThemes }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <DocsLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            You can add a loading indicator to an element by adding the <code>aria-busy</code> attribute,
            with <span role="group" style={{ display: 'inline-flex' }}><mark onClick={() => setIsLoading(true)} className={isLoading ? "success" : ""}>true</mark><mark onClick={() => setIsLoading(false)} className={!isLoading ? "success" : ""}>false</mark></span>.
          </p>

          <p>
            For example, it can be applied to buttons (with or without exiting icons):
          </p>

          <p className="flex">
            <button aria-busy={isLoading}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </button>

            <button aria-busy={isLoading} role="reset">Button</button>

            <button aria-busy={isLoading} className="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path
                  d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span>
                Home
              </span>
            </button>

            <button type="reset" aria-busy={isLoading}>
              <span>
                Play
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 4v16" />
                <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
              </svg>
            </button>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>{`<!-- icon button -->
<button${isLoading ? ' aria-busy' : ''}>
  <svg ...></svg>
</button>
          
<!-- text button -->
<button${isLoading ? ' aria-busy' : ''}>
  Button
</button>

<!-- left side icon -->
<button${isLoading ? ' aria-busy' : ''}>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset"${isLoading ? ' aria-busy' : ''}>
  <span>Play</span>
  <svg ...></svg>
</button>`}</CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            It can be applied to paragraphs or other text elements:
          </p>
          <p aria-busy={isLoading}>
            Loading...
          </p>
          <p>
            <a href="" aria-busy={isLoading}>Click me</a>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>{`<p${isLoading ? ' aria-busy' : ''}>Loading...</p>
          
<a href="..."${isLoading ? ' aria-busy' : ''}>Click me</a>`}</CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>

        </div>
        <div></div>
      </section>

      <section className="row">
        <div>
          <p>
            Or it can be applied to block elements. In this case the whole content is
            hidden when loading.
          </p>
          <blockquote aria-busy={isLoading}>
            <p>
              Press
              <kbd>Ctrl + Q</kbd>
              to quit
            </p>
          </blockquote>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>{`<blockquote${isLoading ? ' aria-busy' : ''}>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>`}</CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            And cards of different types, where the loading spinner is also
            horizontally centered.
          </p>

          <article aria-busy={isLoading}>
            <details open>
              <summary>Note</summary>
              <p>
                Lorem ipsum dolor sit
                amet, consectetur
                adipiscing elit,
                sed do eiusmod tempor
                incididunt ut labore
                et dolore magna aliqua.
              </p>
            </details>
          </article>

          <article aria-busy={isLoading} className="success">
            <span>
              <b>Title</b>
            </span>
            <p>
              Lorem ipsum ...
            </p>
          </article>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>{`<article${isLoading ? ' aria-busy' : ''}>
  <details>
    <summary>...</summary>
    <p>...</p>
  </details>
</article>

<article${isLoading ? ' aria-busy' : ''}>
  <span><b>...</b></span>
  <p>...</p>
</article>`}</CodeSyntax>
        </div>
      </section>
    </DocsLayout>
  );
}