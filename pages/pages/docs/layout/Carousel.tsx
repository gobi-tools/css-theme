import CodeSyntax from "../../../common/components/CodeSyntax";
import DocLayout from "../../../common/layouts/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { ELinks, EThemes, PRODUCT_NAME } from "../../../common/utils/types";

export default function Carousel({ theme }: { theme: EThemes }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            {PRODUCT_NAME} supports <a href={ELinks.CSSCarousel} target="_blank">CSS carousels</a> with sensible defaults. 
            Any element can be turned into a carousel by adding the <code>{`aria-roledescription="carousel"`}</code> attribute 
            (as recommended by <a href={ELinks.W3CCarousel} target="_blank">the W3C</a>), alongside an optional <code>aria-label</code>, 
            and a single child unordered list (<code>{"ol"}</code>).
          </p>
          <div aria-roledescription="carousel" aria-label="Simple Carousel">
            <ol>
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
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {``}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Carousels can be comprised just of images.
          </p>
          <div aria-roledescription="carousel" aria-label="Image Carousel">
            <ol>
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
          </div>
          <figcaption>
            With one caption for the entire element.
          </figcaption>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {``}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Complex cards
          </p>
          <div aria-roledescription="carousel" aria-label="Ordering Menu">
            <ol className="row">
              <li className="col-6">
                <article>
                  <img height="120" src="https://picsum.photos/id/16/480/120" alt="header image" />
                  <hgroup>
                    <h4>Tortilla Buritos</h4>
                    <p>
                      Lorem ipsum dolor sit amet
                    </p>
                  </hgroup>
                  <p>
                    <mark className="success">25% off</mark>
                  </p>
                </article>
              </li>
              <li className="col-6">
                <article>
                  <img height="120" src="https://picsum.photos/id/35/480/120" alt="header image" />
                  <hgroup>
                    <h4>Honest Burgers</h4>
                    <p>
                      Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </p>
                  </hgroup>
                  {/* <p>
                    <mark className="success">25% off</mark>
                  </p> */}
                </article>
              </li>
              <li className="col-6">

              </li>
              <li className="col-6">

              </li>
            </ol>
          </div>
        </div>

        <div>
          <CodeSyntax lang={'xml'}>
            {``}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>Pictures</p>
          <article aria-roledescription="carousel" aria-label="Plane Tickets">
            <ol className="row">
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
        <div></div>
      </section>

      <section className="row">
        <div>
          <p>Carousel with multi-page</p>
          <div aria-roledescription="carousel" aria-label="Multi Column Example">
            <ol>
              <li>
                <div className="row">
                  <div>Page 1.1</div>
                  <div>Page 1.2</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Page 2.1</div>
                  <div>Page 2.2</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div></div>
      </section>
    </DocLayout>
  )
}

function OrderingHeader(props: { src: string, dest: string }) {
  return <div role="group">
    <div className="row">
      <mark>
        <svg xmlns="http://www.w3.org/2000/svg"
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
  return <div className="row">
    <div>
      <b>{props.start}</b>
      <br />
      <i><small className={props.startDelay === 'Delayed' ? 'error' : ''}>{props.startDelay}</small></i>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg"
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
    <form>
      <div className="row">
        <select>
          <option>Single</option>
          <option>Return</option>
        </select>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <button type="reset">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M13 19a4 4 0 00-8 0" />
            <path d="M16 10h2" />
            <path d="M16 14h2" />
            <circle cx="9" cy="12" r="3" />
            <rect x="2" y="5" width="20" height="14" rx="2" />
          </svg>
          <span>
            Clubcard
          </span>
        </button>
        <button type="submit">Go</button>
      </div>
    </form>
  </div>
}