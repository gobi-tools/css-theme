import { useState } from "react";
import DocLayout from "../../../common/components/DocsLayout";

type TColor = 'primary' | 'secondary' | 'success' | 'error';

export default function Colors({ theme }) {
  const [colorClass, setColorClass] = useState<TColor>('primary');

  const onColorClassChange = (e: { target: { value: string }}) => setColorClass(e.target.value as TColor);

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            You can apply several color modes with the help of few classes like <code>primary</code>, <code>secondary</code>, <code>success</code> and <code>error</code>.
          </p>
          <p>
            You can combine them with the <code>inverted</code> class to change the colors of various components.
          </p>
          <form>
            <label>
              <span>
                <b>Color mode</b>
              </span>
              <select onChange={onColorClassChange}>
                <option value={'primary'}>Primary</option>
                <option value={'secondary'}>Secondary</option>
                <option value={'success'}>Success</option>
                <option value={'error'}>Error</option>
              </select>
            </label>
          </form>
          <hr />
          <section>
            <hgroup>
              <h1>
                <span className={`${colorClass}`}>Lorem ipsum dolor</span>
                <br />
                sit amet
              </h1>
              <h4>
                Lorem ipsum dolor sit amet,<br />
                <span className={`${colorClass} inverted`}>sed do amet</span>
              </h4>
            </hgroup>
            <p role="group">
              <mark className={`${colorClass}`}>v12.5.33</mark>
              <mark className={`${colorClass} inverted`}>Passing</mark>
            </p>
          </section>

          <section>
            <form>
              <div role="group" className={`${colorClass}`}>
                <input type="email" id="subscribe" placeholder="Enter email..." />
                <input type="submit" value={"Subscribe"} />
              </div>
            </form>
          </section>
          <section>
            <div className="row">
              <article className={`${colorClass}`}>
                <hgroup>
                  <h4>Hobby</h4>
                  <p><b>Free</b></p>
                </hgroup>
                <p>Includes</p>
                <ul>
                  <li>No credit card</li>
                  <li>All platforms</li>
                </ul>
              </article>
              <article className={`${colorClass} inverted`}>
                <hgroup>
                  <h4>Enterprise</h4>
                  <p><b>Contact us</b></p>
                </hgroup>
                <p>Includes</p>
                <ul>
                  <li>Everything in Hobby</li>
                  <li>24/7 support</li>
                </ul>
              </article>
            </div>
            <blockquote className={`${colorClass}`}>
              <hgroup>
                <h4>More information</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </hgroup>
            </blockquote>
          </section>
        </div>
        <div>
          <pre><code>
            {`...
<h1>
  <span class="${colorClass}">
    Lorem ipsum dolor
  </span>
  <br/>
  <span>
    sit amet
  </span>
</h1>

<h4>
  Lorem ipsum dolor sit amet,
  <br/>
  <span class="${colorClass} inverted">
    sed do amet
  </span>
</h4>

...

<p role="group">
  <mark class="${colorClass}">
    v12.5.33 
  </mark>
  <mark class="${colorClass} inverted">
    Passing
  </mark>
</p>

...

<form>
  <div class="group ${colorClass}">
    <input .../>
    <input .../>
  </div>
</form>

...

<div class="row">
  <div class="${colorClass} card">
    ...
  </div>
  <div class="${colorClass} inverted card">
    ...
  </div>
</div>
<div class="row">
  <blockquote class="${colorClass}>
    ...
  </blockquote>
</div>
`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  );
}