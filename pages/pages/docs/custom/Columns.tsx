import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { ELinks, EShowcase } from "../../../common/utils/types";

export default function Columns({ theme }) {
  const route = useRoute();
  
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Any layout element, such a or <code>div</code> or <code>section</code> tag, can
            arrange its children in columns of equal width, by combining the <code>row</code> and <code>col</code> classes.
          </p>
          <div className="card">
            <div className="row disable-mobile">
              <div className="col">
                <code style={{width:'100%'}}>col</code>
              </div>
              <div className="col">
                <code style={{width:'100%'}}>col</code>
              </div>
            </div>
            <div className="row disable-mobile">
              <div className="col">
                <code style={{width:'100%'}}>col</code>
              </div>
              <div className="col">
                <code style={{width:'100%'}}>col</code>
              </div>
              <div className="col">
                <code style={{width:'100%'}}>col</code>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div>
          <pre><code>
            {`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            This system uses the same naming convention as the popular <a href={ELinks.Bootstrap} target="_blanl">Bootstrap CSS library</a>.
            And just like Bootstrap, columns can have various widths, by using the <code>col-2</code> to <code>col-6</code> classes.
          </p>
          <div className="card">
            <div className="row disable-mobile">
              <div className="col-2">
                <code style={{width:'100%'}}>col-2</code>
              </div>
              <div className="col">
                <code style={{width:'100%'}}>col</code>
              </div>
              <div className="col-6">
                <code style={{width:'100%'}}>col-6</code>
              </div>
            </div>
          </div>
        </div>
        <div>
          <pre><code>
            {`<div class="row">
  <div class="col-2"><code>...</code></div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Columns are fully responsive.
            On smaller devices they transition to a row based layout, with
            columns being laid out vertically, one below the other.
          </p>
          <p>
            In such a layout the gap that's usually present in a horizontal layout dissapears.
            This means that each element within a column must provide its owne element 
            with bottom padding (like a <code>p</code>, etc).
          </p>

          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.showcase(EShowcase.MobileColumns, theme, route)} />

            <figcaption>
              Showcase of columns on a smaller device.
            </figcaption>
          </figure>

          
        </div>
        <div>
          <pre><code>
            {`<div class="row">
  <div>
    <p><code>...</code></p>
  </div>
  <div>
    <p><code>...</code></p>
  </div>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Finally, you can even omit the <code>col</code> class entirely.
            A <b>div</b> element will expand to fill as much width as available.
            Multiple <b>divs</b> will eqpand equaly.
            And any other element (like an <b>image</b>, etc) will expand naturally.
            This makes layouts like the one below possible and easy to write.
          </p>
          <div className="card">
            <div className="row disable-mobile">
              <img width="80" height="80" src="https://picsum.photos/80/80" alt="ssample image " />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div>
          <pre><code>
            {`<div class="row">
  <p width="80" height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}