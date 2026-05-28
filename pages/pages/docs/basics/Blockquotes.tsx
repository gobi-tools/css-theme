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
          <pre><code>{`<blockquote>
  Lorem ipsum ...
</blockquote>`}</code></pre>
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
            <p>Press <kbd>Ctrl + Q</kbd> to quit</p>
          </blockquote>

          <blockquote>
            <hgroup>
              <p className="group">
                <svg xmlns=" http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <span>Information</span>
              </p>
              <p>
                Your package will be delivered on <b>Tuesday at 08:00.</b>
              </p>
            </hgroup>
          </blockquote>
          <p>
            <small>
              You can learn more about groups <a href={RouteMaster.doc(EDoc.Groups, theme, route)}>here</a> and about icons <a href={RouteMaster.doc(EDoc.Icons, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<blockquote>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>
            
<blockquote>
  <hgroup>
    <p class="group">
      <svg ... ></svg>
      <span>Information</span>
    </p>
    <p>
      Your package will 
      be delivered on 
      <b>Tuesday at 08:00</b>.
    </p>
  </hgroup>
</blockquote>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Blockquotes can also be styled using the <code>success</code>, <code>error</code>, <code>primary</code> and <code>secondary</code> classes.
          </p>
          <blockquote className="success">
            <hgroup>
              <h4>Success</h4>
              <p>The operation was completed successfully</p>
            </hgroup>
          </blockquote>

          <blockquote className="error">
            <hgroup>
              <p>Unknown error</p>
              <p>
                <code>Server responsed with <b>Error 500</b></code>
              </p>
            </hgroup>
          </blockquote>

          <blockquote className="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </blockquote>

          <blockquote className="secondary">
            <hgroup>
              <hgroup>
                <h4>Title</h4>
                <p>Important Information</p>
                <p><button>Click me</button></p>
              </hgroup>
            </hgroup>
          </blockquote>
          <hgroup>
            <p>
              <small>
                You can learn more about colors <a href={RouteMaster.doc(EDoc.Colors, theme, route)}>here</a>.
              </small>
            </p>
          </hgroup>
        </div>
        <div>
          <pre><code>
            {`<blockquote class="success">
  <hgroup>
    <h4>Success</h4>
    <p>
      The operation was 
      completed successfully
    </p>
  </hgroup>
</blockquote>

<blockquote class="error">
  <hgroup>
    <p>Unknown error</p>
    <p>
      <code>
        Server responsed with 
        <b>Error 500</b>
      </code>
    </p>
  </hgroup>
</blockquote>

<blockquote class="primary">
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit
</blockquote>

<blockquote class="secondary">
  <hgroup>
    <h4>Title</h4>
    <p>
      Important Information
    </p>
    <button>
      Click me
    </button>
  </hgroup>
</blockquote>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}