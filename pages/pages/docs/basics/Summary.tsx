import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc } from "../../../common/utils/types";

export default function Summary({ theme }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            The summary and details html tag is used
            to present a short piece of information that can be
            expanded to offer more insights.
          </p>
          <details>
            <summary>Info</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>

          <details>
            <summary>More info Info</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </div>
        <div>
          <pre><code>
            {`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            This basic summary can be combined both with
            the <code>card</code> class as well as
            the <code>success</code> and <code>error</code> classes
            to form a more visually appealing element.
          </p>
          <article>
            <details>
              <summary>Note</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </details>
          </article>

          <article className="success">
            <details>
              <summary>Success</summary>
              <p>
                Operation finished <code>OK</code>
              </p>
            </details>
          </article>
          <article className="error">
            <details>
              <summary>Error</summary>
              <div>
                <p>
                  Unknown error occurred
                </p>
                <button>Ack</button>
              </div>
            </details>
          </article>
          <p>
            <small>
              You can learn more about colors <a href={RouteMaster.doc(EDoc.Colors, theme, route)}>here</a> and cards <a href={RouteMaster.doc(EDoc.Cards, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<details class="card">
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
            
<details class="card success">
  <summary>Success</summary>
  <p>
    Operation finished 
    <code>
      OK
    </code>
  </p>
</details>
  
<details class="card error">
  <summary>Error</summary>
  <div>
    <p>
      Unknown error occurred
    </p>
    <button>Ack</button>
  </div>
</details>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Finally, by giving a group of summary elements the
            same name, you can form an accordion menu:
          </p>
          <article>
            <details name="menu">
              <summary>Option 1</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </details>
            <details name="menu" open>
              <summary>Option 2</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </details>
            <details name="menu">
              <summary>Option 3</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </details>
          </article>
        </div>
        <div>
          <pre><code>
            {`<details 
  class="card" 
  name="menu">
  <summary>Option 1</summary>
  <p>...</p>
</details>

<details 
  class="card" 
  name="menu">
  <summary>Option 2</summary>
  <p>...</p>
</details>

<details 
  class="card" 
  name="menu">
  <summary>Option 3</summary>
  <p>...</p>
</details>
            `}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  );
}