import DocLayout from "../../../common/components/DocsLayout";

export default function Semantic({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            You can apply several color modes with the help of few classes like <code>primary</code>, <code>secondary</code>, <code>success</code> and <code>error</code>.
          </p>
          <p>
            You can combine them with the <code>inverted</code> class to obtain various effects.
            For example, you can apply them to typographical elements:
          </p>
          <section>

            <hgroup>
              <h1>
                <span className="primary">Lorem ipsum dolor</span>
                <br />
                sit amet
              </h1>
              <h4>
                Lorem ipsum dolor sit amet,<br />
                <span className="primary inverted">sed do amet</span>
              </h4>
            </hgroup>
            <p className="group">
              <mark className="primary">v12.5.33</mark>
              <mark className="primary inverted">Passing</mark>
            </p>
          </section>

          <section>
            <form>
              <div className="group primary">
                <input type="email" id="subscribe" placeholder="Enter email..." />
                <input type="submit" value={"Subscribe"} />
              </div>
            </form>
          </section>
          <section className="row">
            {/* <div> */}
              <div className="primary card">
                <hgroup>
                  <h4>Hobby</h4>
                  <p><b>Free</b></p>
                </hgroup>
                <p>Includes</p>
                <ul>
                  <li>No credit card</li>
                  <li>All platforms</li>
                </ul>
              </div>
            {/* </div> */}
            {/* <div> */}
              <div className="primary inverted card">
                <hgroup>
                  <h4>Enterprise</h4>
                  <p><b>Contact us</b></p>
                </hgroup>
                <p>Includes</p>
                <ul>
                  <li>Everything in Hobby</li>
                  <li>24/7 support</li>
                </ul>
              </div>
            {/* </div> */}
          </section>
        </div>
        <div>
          <pre><code>
            {`<h1>
  <span class="primary">
    Lorem ipsum dolor
  </span>
  <br/>
  <span>
    sit amet
  </span>
</h1>
<h4>
  <span>
    Lorem ipsum dolor sit amet,
  </span>
  <br/>
  <span class="secondary">
    consectetur adipiscing elit
  </span>
  <span class="success inverted">
    sed do
  </span>
  <span class="error inverted">
    eiusmod tempor
  </span>
</h4>`}
          </code></pre>
        </div>
      </section>
      <section className="row">
        <div>
          <p>
            These classes can be applied to other elements like buttons, links, forms, marks, etc:
          </p>
          <p>
            <button className="success">Confirm</button>
            <button className="error">Cancel</button>
          </p>
          <p className="group secondary">
            <button type="reset">First</button>
            <button>Second</button>
            <button type="reset">Third</button>
          </p>
          <form className="primary">
            <div className="group">
              <input type="search" id="search" placeholder="Search" />
              <input type="submit" value={"Search"} />
            </div>
          </form>
          <p>
            Don't forget to <span><a href="" className="success">subscribe</a></span>!
          </p>
          <p className="group">
            <mark className="primary inverted">v12.3.0</mark>
            <mark className="success inverted">Passing</mark>
          </p>
        </div>
        <div></div>
      </section>
      <section className="row">
        <div>
          <p>
            And they can be applied to blocks and cards:
          </p>
          <div className="row">
            <div>
              <blockquote className="secondary">
                <hgroup>
                  <h4>Title</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </hgroup>
              </blockquote>
            </div>
            <div>
              <blockquote className="error inverted">
                <hgroup>
                  <h4>Error</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </hgroup>
                <p>
                  <button type="reset">Copy</button>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div>

        </div>
      </section>
    </DocLayout>
  );
}