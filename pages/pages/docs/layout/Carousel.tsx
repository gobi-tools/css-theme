import CodeSyntax from "../../../common/components/CodeSyntax";
import DocLayout from "../../../common/layouts/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { EDoc, ELinks, EThemes, PRODUCT_NAME } from "../../../common/utils/types";
import { RouteMaster } from "../../../common/utils/routes";

export default function Carousel({ theme }: { theme: EThemes }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Any element can be turned into a <a href={ELinks.CSSCarousel} target="_blank">carousel</a> by
            adding the <code>{`aria-roledescription="carousel"`}</code> attribute, as recommended
            by <a href={ELinks.W3CCarousel} target="_blank">the W3C</a>.
          </p>
          <p>
            Ordered or unordered lists are preffered, because they work without specifying
            the additional <code>{`aria-roledescription="slide"`}</code> attribute on each individual slide.
          </p>
          <p>
            The <code>{"aria-label"}</code> attribute can be used to give information about the contents of the carousel.
          </p>
          <ol aria-roledescription="carousel" aria-label="Simple Carousel">
            <li>
              <div>
                <h3>Page 1</h3>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Page 2</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div>
                  <a href="">https://example.com</a>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Page 3</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                <pre><code>{'d488e0a9-fd57-4876-bc57-fa373d949379'}</code></pre>
              </div>
            </li>
          </ol>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<ol aria-roledescription="carousel">
  <li>
    <div>
      <h3>Page 1</h3>
      <div>Lorem ipsum ...</div>
    </div>
  </li>
  <li>
    <div>
      <h3>Page 2</h3>
      <p>Set ut ...</p>
      <div><a href="...">...</a>
    </div>
  </li>
  <li>
    <div>
      <h3>Page 3</h3>
      <p>Nemo enum ...</p>
      <pre><code>...</code></pre>
    </div>
  </li>
</ol>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Image carousels can be created just as easily as text ones.
          </p>
          <ol aria-roledescription="carousel" aria-label="Image Carousel">
            <li>
              <img width={'100%'} height={250} src="https://picsum.photos/id/16/500/250" alt="Slide Image 1" />
            </li>
            <li>
              <img width={'100%'} height={250} src="https://picsum.photos/id/100/500/250" alt="Slide Image 2" />
            </li>
            <li>
              <img width={'100%'} height={250} src="https://picsum.photos/id/40/500/250" alt="Slide Image 3" />
            </li>
          </ol>
          <figcaption>
            With one caption for the entire element.
          </figcaption>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<ol aria-roledescription="carousel">
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 1"/>
  </li>
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 2"/>
  </li>
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 3"/>
  </li>
</ol>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Carousel slides can, in fact, hold all sorts of complex components.
            More interestingly, they can be combined with <a href={RouteMaster.doc(EDoc.Grids, theme, route)}>grids</a> to produce a variety of layouts.
          </p>
          <p>
            If you choose a column size that divides the available space neatly into equal parts,
            you can place a number of preview slides on the viewport, whilst keeping the rest hidden.
          </p>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>{"col"}</code></td>
                <td>All slides will be visible</td>
              </tr>
              <tr>
                <td><code>{"col-1"}</code></td>
                <td>The first 12 slides will be visible</td>
              </tr>
              <tr>
                <td><code>{"col-2"}</code></td>
                <td>The first 6 slides will be visible</td>
              </tr>
              <tr>
                <td><code>{"col-3"}</code></td>
                <td>The first 4 slides will be visible</td>
              </tr>
              <tr>
                <td><code>{"col-4"}</code></td>
                <td>The first 3 slides will be visible</td>
              </tr>
              <tr>
                <td><code>{"col-5"}</code></td>
                <td>The first 2 slides will be visible</td>
              </tr>
            </tbody>
          </table>
          <ol aria-roledescription="carousel" aria-label="Ordering Menu" className="row disable-mobile">
            <li className="col-6">
              <article>
                <img height="120" src="https://picsum.photos/id/216/480/120" alt="header image" />
                <hgroup>
                  <h4>Botanical Garden</h4>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </hgroup>
                <p>
                  <mark className="success">25% off</mark>
                </p>
                <p>
                  <a href="">Book</a>
                </p>
              </article>
            </li>
            <li className="col-6">
              <article>
                <img height="120" src="https://picsum.photos/id/42/480/120" alt="header image" />
                <hgroup>
                  <h4>Brunch</h4>
                  <p>
                    Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                </hgroup>
                <p>
                  <a href="">Book</a>
                </p>
              </article>
            </li>
            <li className="col-6">
              <article>
                <img height="120" src="https://picsum.photos/id/211/480/120" alt="header image" />
                <hgroup>
                  <h4>Boat trip</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos
                  </p>
                </hgroup>
                <p>
                  <a href="">Book</a>
                </p>
              </article>
            </li>
          </ol>
        </div>

        <div>
          <CodeSyntax lang={'xml'}>
            {`<ol aria-roledescription="carousel" class="row">
  <!-- the first two slides will be visible -->
  <li class="col-6">
    <article>
      <img height="120" src="..."/>
      <hgroup>
        <h4>Botanical Garden</h4>
        <p>Lorem ipsum ...</p>
        <p>
          <mark class="success">25% off</mark>
        </p>
        <p><a href="...">Book</a>
      </hgroup>
    </article>
  </li>
  <li class="col-6">
    <article>
      <img height="120" src="..."/>
      <hgroup>
        <h4>Brunch</h4>
        <p>Vel illum ...</p>
        <p><a href="...">Book</a>
      </hgroup>
    </article>
  </li>
  <!-- this one will be initially hidden -->
  <li class="col-6">
    <article>
      <img height="120" src="..."/>
      <hgroup>
        <h4>Boat trip</h4>
        <p>At vero eos ...</p>
        <p><a href="...">Book</a>
      </hgroup>
    </article>
  </li>
</ol>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            If you choose a column size that does not divide the avaibale space neatly, you can generate
            a preview of the next slides.
          </p>
          <p>
            Below is an example using <code>{"col-11"}</code>, which will mean most on large displays
            the first slide will be fully visible whilst the second will peek from the right.
          </p>
          <p>
            A choise of <code>{"col-5"}</code> will allow two slides to be fully visible and a third
            to peek, whilst choices like <code>{"col-7"}</code>, <code>{"col-8"}</code>, etc will allow
            more or less of the second slide to peek through.
          </p>
          <p>
            Note on smaller devices carousels are responsive, so only one slide will be visible.
          </p>
          <article>
            <ol aria-roledescription="carousel" aria-label="Plane Tickets" className="row disable-mobile">
              <li className="col-11">
                <article>
                  <OrderingHeader src="New York" dest="Paris" />
                  <hr />
                  <OrderingDetails start="12:15" startDelay="On time" end="20:00" endDelay="On time" type="Direct" />
                  <OrderingDetails start="13:25" startDelay="On time" end="21:00" endDelay="Delayed" type="Direct" />
                  <OrderingOptions />
                  <hr />
                  <OrderingControl />
                </article>
              </li>
              <li className="col-11">
                <article>
                  <OrderingHeader src="Tokyo" dest="London" />
                  <hr />
                  <OrderingDetails start="06:00" startDelay="On time" end="18:00" endDelay="Delayed" type="Direct" />
                  <OrderingDetails start="06:15" startDelay="On time" end="18:15" endDelay="On time" type="Direct" />
                  <OrderingOptions />
                  <hr />
                  <OrderingControl />
                </article>
              </li>
            </ol>
          </article>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<ol aria-roledescription="carousel" class="row">
  <li class="col-11">
    ...
  </li>
  <li class="col-11">
    ...
  </li>
  <li class="col-11">
    ...
  </li>
</ol>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            In previous examples each column also represents a single carousel slide.
            Using the same mechanism you can group multiple elements together on the same slide.
          </p>
          <ol aria-roledescription="carousel" aria-label="Multi Column Example">
            <li className="row disable-mobile">
              <div>
                <p>
                  <mark className="primary">
                    <b>1</b>
                  </mark>
                </p>
                <p>
                  <b>Page 1.1</b>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div>
                <p>
                  <mark className="success">
                    <b>2</b>
                  </mark>
                </p>
                <p>
                  <b>Page 1.2</b>
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </li>
            <li className="row disable-mobile">
              <div>
                <p>
                  <mark className="secondary">
                    <b>2</b>
                  </mark>
                </p>
                <p>
                  <b>Page 2.1</b>
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

              <div>
                <p>
                  <mark className="error">
                    <b>2</b>
                  </mark>
                </p>
                <p>
                  <b>Page 2.2</b>
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<ol aria-roledescription="carousel">
  <!-- first slide -->
  <li class="row">
    <!-- each of the two pages -->
    <div>...</div>
    <div>...</div>
  </li>
  <!-- second slide -->
  <li class="row">
    <!-- each of the two pages -->
    <div>...</div>
    <div>...</div>
  </li>
</ol>`}
          </CodeSyntax>
        </div>
      </section>
    </DocLayout>
  )
}

function OrderingHeader(props: { src: string, dest: string }) {
  return <div role="group">
    <div className="row disable-mobile">
      <mark>
        <TicketIcon />
      </mark>
      <div>
        <b>{props.src}</b>
        <br />
        <b>{props.dest}</b>
      </div>
    </div>
  </div>
}

function OrderingDetails(props: { start: string, startDelay: string, end: string, endDelay: string, type: string }) {
  return <div className="row disable-mobile">
    <div>
      <b>{props.start}</b>
      <br />
      <i><small className={props.startDelay === 'Delayed' ? 'error' : ''}>{props.startDelay}</small></i>
    </div>
    <div>
      <ArrowIcon />
    </div>
    <div>
      <b>{props.end}</b>
      <br />
      <i><small className={props.endDelay === 'Delayed' ? 'error' : ''}>{props.endDelay}</small></i>
    </div>
    <div>
      <mark>{props.type}</mark>
    </div>
  </div>
}

function OrderingOptions() {
  return <div>
    <a><b>View more options</b></a>
  </div>
}

function OrderingControl() {
  return <div>
    <div className="row disable-mobile">
      <div></div>
      <button type="submit">Book</button>
    </div>
  </div>
}

function TicketIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M13 5v2" />
    <path d="M13 17v2" />
    <path d="M13 11v2" />
  </svg>
}

function ArrowIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
}