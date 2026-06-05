import DocsLayout from "../../../common/components/DocsLayout";

export default function Icons({ theme }) {
  return (
    <DocsLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            The framework can combine any svg or raster icon with a multitude of html elements to
            create more interesting components.
          </p>
          <p>
            When inside buttons the width & height is aligned to match the font size.
          </p>
          <p>
            <button>
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
          </p>
        </div>
        <div>
          <pre><code>
            {`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`}
          </code></pre>
        </div>
      </section>
      <section className="row">
        <div>
          <p>
            If they are used in a standalone mode then they should have a clear
            width and height specified.
          </p>
          <div role="group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <b>Test Address, SE11 8CL</b>
          </div>
        </div>
        <div>
          <pre><code>
            {`<div role="group">
  <svg 
    width="20" 
    height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`}
          </code></pre>
        </div>
      </section>
    </DocsLayout>
  );
}