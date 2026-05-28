import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc } from "../../../common/utils/types";

export default function Tags({ theme }) {
  const route = useRoute();
    
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            You can mark any text, keyword or piece
            of information with the <code>mark</code> html tag.
          </p>
          <p>
            <mark>v15.20.30</mark>
          </p>
        </div>
        <div>
          <pre><code>
            {`<mark>v15.20.30</mark>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can append svg icons to the start and
            each of each piece of highlighted content.
          </p>
          <p>
            <mark>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>released</span>
            </mark>
            <mark>
              <span>error</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </mark>
          </p>
          <p>
            <small>
              You can learn more about icons <a href={RouteMaster.doc(EDoc.Icons, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`}
         </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You  can assign the <code>primary</code>, <code>secondary</code>, <code>success</code> or <code>error</code> classes
            to change the appearance of the highlighted content. You can add the <code>inverted</code> class to each of the 
            previous to highlight the content even more.
          </p>
          <p>
            <mark className="primary">#theme</mark>
            <mark className="secondary">#second</mark>
            <mark className="success">Process OK</mark>
            <mark className="error">Error 400</mark>
          </p>
          <p>
            <mark className="primary inverted">#theme</mark>
            <mark className="secondary inverted">#second</mark>
            <mark className="success inverted">Process OK</mark>
            <mark className="error inverted">Error 400</mark>
          </p>
          <p>
            <small>
              You can learn more about colors <a href={RouteMaster.doc(EDoc.Colors, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<!-- with or without -->
<!-- the inverted class -->
<mark class="primary">
  #theme
</mark>
<mark class="secondary">
  #second
</mark>
<mark class="success">
  Process OK
</mark>
<mark class="error">
  Error 400
</mark>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Finally, if you wrap a number of
            highlighted pieces of text in a
            html element with the <code>group</code> class, they
            will be grouped together.
          </p>
          <p className="group">
            <mark>npm</mark>
            <mark className="success">1.0.3</mark>
            <mark className="error">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-x-icon lucide-x">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </mark>
          </p>
          <p>
            <small>
              You can learn more about groups <a href={RouteMaster.doc(EDoc.Groups, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<p class="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}