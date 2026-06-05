import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc } from "../../../common/utils/types";

export default function Buttons({ theme }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Two types of buttons styles are supported: standard and outlined (for <code>reset</code> type buttons).
          </p>
          <p>
            <button>Button</button>
            <button type="reset">Button</button>
          </p>
        </div>
        <div>
          <pre><code>
            {`<button>Button</button>
<button type="reset">
  Button
</button>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Both types can be marked as <code>disabled</code>, meaning no interaction
            will be possible with them.
          </p>
          <p>
            <button disabled>Disabled</button>
            <button type="reset" disabled>Disabled</button>
          </p>
        </div>
        <div>
          <pre><code>
            {`<button disabled>
  Button
</button>
<button 
  type="reset" 
  disabled>
  Button
</button>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Buttons can be improved by adding svg icons, either
            to the left or to the right of the main button title.
          </p>
          <p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path
                  d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span>
                Home
              </span>
            </button>
            <button type="reset">
              <span>
                Play
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 4v16" />
                <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
              </svg>
            </button>
          </p>
          <p>
            <small>
              You can learn more about icons <a href={RouteMaster.doc(EDoc.Icons, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>{`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can even create icon-only buttons
            by completely omitting the title.
          </p>
          <p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </button>

            <button type="reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </button>
          </p>
        </div>
        <div>
          <pre><code>{`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            By default, buttons are styled using the <b>primary</b> color, which impacts their background, border or text color. 
            You can change that by applying classes like <code>secondary</code>, <code>success</code> or <code>error</code>. 
          </p>
          <p>
            <button className="secondary">Action</button>
            <button className="success">Confirm</button>
            <button type="reset" className="error">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span>
                Cancel
              </span>
            </button>
          </p>
          <p>
            <small>
              You can learn more about colors <a href={RouteMaster.doc(EDoc.Colors, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>{`<button
  class="secondary">
  Action
</button>

<button 
  class="success">
  Confirm
</button>

<button 
  type="reset" 
  class="error">
  <svg ...></svg>
  <span>Cancel</span>
</button>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Finally, buttons can be grouped together by
            wrapping them in a parent tag
            that has the <code>group</code> role.
          </p>
          <p role="group">
            <button>Button 1</button>
            <button type="reset">Button 2</button>
            <button type="reset">Button 3</button>
          </p>
          <p role="group">
            <button type="reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
            </button>

            <button type="reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10v12" />
                <path
                  d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
            </button>

            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v13" />
                <path d="m16 6-4-4-4 4" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              </svg>
            </button>
          </p>

          <p role="group">
            <button type="reset">Prev</button>
            <button type="reset">1</button>
            <button type="reset">2</button>
            <button type="reset">3</button>
            <button type="reset">Next</button>
          </p>
          <p>
            <small>
              You can learn more about groups <a href={RouteMaster.doc(EDoc.Groups, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>{`<p role="group">
  <button>
    Button 1
  </button>
  <button type="reset">
    Button 2
  </button>
  <button type="reset">
    Button 3
  </button>
</p>

<p role="group">
  <button type="reset">
    <
  </button>
  <button type="reset">
    <svg ...></svg>
  </button>
  <button>
    >
  </button>
</p>

<p role="group">
  <button type="reset">
    Prev
  </button>
  <button type="reset">
    1
  </button>
  ...
  <button type="reset">
    Next
  </button>
</p>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}