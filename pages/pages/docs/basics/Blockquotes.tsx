import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc } from "../../../common/utils/types";

export default function Blockquotes({ theme }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Blockquotes (or block quotations) are
            visually separate from the surrounding text.
          </p>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </blockquote>
        </div>
        <div>
          <pre><code>{`<blockquote>Lorem ipsum ...</blockquote>`}</code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            It's not just text that can be
            included in a blockquote element, but
            code, icons, and many other elements.
          </p>
          <blockquote>
            Press <kbd>Ctrl + Q</kbd> to quit
          </blockquote>

          <blockquote>
            <span className="group">
              <svg xmlns=" http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span>Information</span>
            </span>
            <br />
            <p>
              Your package will be delivered on <b>Tuesday at 08:00.</b>
            </p>
          </blockquote>
          <p>
            <small>
              You can learn more about groups <a href={RouteMaster.doc(EDoc.Groups, theme, route)}>here</a>.
            </small>
          </p>
          <p>
            <small>
              You can learn more about icons <a href="">here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<blockquote>Press <kbd>Ctrl + Q</kbd> to quit</blockquote>
            
<blockquote>
  <span class="group">
    <svg ... ></svg>
    <span>Information</span>
  </span>
  <br/>
  <p>
    Your package will be delivered on <b>Tuesday at 08:00.</b>
  </p>
</blockquote>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Blockquotes can also be styled using the <code>success</code> and <code>error</code> classes.
          </p>
          <blockquote className="success">
            <h4>Success</h4>
            <p>The operation was completed successfully</p>
          </blockquote>

          <blockquote className="error">
            <p>Unknown error</p>
            <code>Server responsed with <b>Error 500</b></code>
          </blockquote>
          <p>
            <small>
              You can learn more about classes <a href={RouteMaster.doc(EDoc.Classes, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<blockquote class="success">
  <h4>Success</h4>
  <p>The operation was completed successfully</p>
</blockquote>

<blockquote class="error">
  <p>Unknown error</p>
  <code>Server responsed with <b>Error 500</b></code>
</blockquote>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}