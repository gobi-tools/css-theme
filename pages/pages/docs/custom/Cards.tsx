import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc } from "../../../common/utils/types";

export default function Cards({ theme }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            By wrapping together a number of HTML elements
            inside a parent with the <code>card</code> class,
            you can create a basic card-type layout.
          </p>
          <div className="row disable-mobile">
            <div>
              <article>
                <span><b>Title</b></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </article>
            </div>
            <div>
              <article className="success">
                <span><b>Title</b></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div>
          <pre><code>
            {`<div class="card">
  <span>
    <b>Title</b>
  </span>
  <p>
    Lorem ipsum ...
  </p>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Cards can wrap headings and paragraphs and
            can be styled with <code>success</code> and <code>error</code> classes.
          </p>
          <div className="row disable-mobile">
            <div>
              <article>
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </article>
            </div>
            <div>
              <article className="error">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </article>
            </div>
          </div>
          <p>
            <small>
              You can learn more about classes <a href={RouteMaster.doc(EDoc.Classes, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<div class="card error">
  <h3>Title</h3>
  <p>
    Lorem ipsum ...
  </p>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            The starting paragraph of a card will be
            styled so it's more proeminent.
          </p>
          <div className="row disable-mobile">
            <div>
              <article>
                <header>Title</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </article>
            </div>
            <div>
              <article className="success">
                <header>Title</header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div>
          <pre><code>
            {`<div class="card">
  <p>Title</p>
  <p>
    Lorem ipsum ...
  </p>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Likewise, the first image tag used in a card
            will be styled as a header image.
          </p>
          <div className="row disable-mobile">
            <div>
              <article>
                <img height="80" src="https://picsum.photos/id/16/320/80" alt="header image" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </article>
            </div>
            <div>
              <article className="error">
                <img height="80" src="https://picsum.photos/id/16/420/80" alt="header image" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div>
          <pre><code>
            {`<div class="card">
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can combine elements inside a card
            to produce quite compelx results, as the example below shows.
          </p>
          <p>
            By adding a header image, a title, paragraph and a button, we've created an
            interesting visual element in a few lines of HTML.
          </p>
          <article>
            <img height="160" src="https://picsum.photos/id/16/480/160" alt="header image" />
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p>
              <button>Button</button>
            </p>
          </article>
        </div>
        <div>
          <pre><code>
            {`<div class="card">
  <img 
    height="160" 
    src="..." 
    alt="..." />
  <h4>
    Title
  </h4>
  <p>
    Lorem ipsum ...
  </p>
  <p>
    <button>
      Button
    </button>
  </p>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            If we combine groups, columns and cards, we can experiment
            with even more daring layouts. All without having to write any custom CSS.
          </p>
          <article>
            <div role="group">
              <div className="row">
                <img width="80" height="80" src="https://picsum.photos/id/16/80/80" alt="header image" />
                <div>
                  <b>Title</b>
                  <br />
                  <span>Subtitle</span>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p>
              <mark>v12.5.3</mark>
              <mark className="success">success</mark>
            </p>
            <hr />
            <p>
              <button>Button</button>
            </p>
          </article>
          <p>
            <small>
              You can learn more about groups <a href={RouteMaster.doc(EDoc.Groups, theme, route)}>here</a>.
            </small>
          </p>
          <p>
            <small>
              You can learn more about columns <a href={RouteMaster.doc(EDoc.Grids, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<div class="card">
  <div role="group">
    <div className="row">
      <img 
        width="80" 
        height="80" 
        src="..."/>
      <div>
        <b>
          Title
        </b>
        <br/>
        <span>
          Subtitle
        </span>
      </div>
    </div>
  </div>
  <p>
    Lorem ipsum ...
  </p>
  <p>
    <mark>
      v12.5.3
    </mark>
    <mark class="success">
      success
    </mark>
  </p>
  <hr/>
  <p>
    <button>
      Button
    </button>
  </p>
</div>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}