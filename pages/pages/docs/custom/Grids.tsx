import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { ELinks, EExamples } from "../../../common/utils/types";

export default function Grids({ theme }) {
  const route = useRoute();
  
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Any layout element, such as a <code>div</code> or <code>section</code>, can 
            be transformed into a grid with columns of equal width 
            using the <code>row</code> and <code>col</code> classes.
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
            Like similar CSS libraries, a grid contains 12 columns.
          </p>
          <p>
            An element with class <code>col-1</code> will span just one 
            column, whilst an element with class <code>col-4</code> will span 4 columns (or 33.333% of the 
            available space) and an element with <code>col-12</code> will span the whole width of the grid.
          </p>
          <p>
            Grids can combine columns of multiple widths.
            The generic <code>col</code> class will fill all available space.
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
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Grids are fully responsive.
            On smaller devices they transition to a row based layout, with
            columns being laid out vertically, one below the other.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.example(EExamples.MobileColumns, theme, route)} />

            <figcaption>
              Showcase of grids on a smaller device.
            </figcaption>
          </figure>

          
        </div>
        <div>
          <pre><code>
            {`<div class="row">
  <div>
    <p>
      <code>...</code>
    </p>
  </div>
  <div>
    <p>
      <code>...</code>
    </p>
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
              <img width="80" height="80" src="https://picsum.photos/id/16/80/80" alt="ssample image " />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <pre><code>
            {`<div class="row">
  <p 
    width="80" 
    height="80" ...>
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