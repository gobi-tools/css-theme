export default function LandingPage() {
  return (
    <>
      <header>
        <aside className="primary inverted align-center">
          <div>
            <b>Introducing FooBar</b> — The best product in its category
          </div>
        </aside>
      </header>
      <header className="hide-on-mobile">
        <nav className="container-wide">
          <ul>
            <li><a href="">Product</a></li>
            <li><a href="">Industries</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">About</a></li>
            <div></div>
            <li>
              <select>
                <option selected>En</option>
                <option>Fr</option>
                <option>De</option>
              </select>
            </li>
            <li>
              <button>Request Demo</button>
            </li>
          </ul>
        </nav>
      </header>
      <header>
        <article className="align-center">
          <hgroup>
            <h1>FooBar</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
          </hgroup>
          <p>
            <button>Download</button>
            <button type="reset">Announcement</button>
          </p>
          <p>
            <a href="">Other platforms</a>
          </p>
        </article>
      </header>
      <main>
        <section>
          <figure>
            <img className="rounded" width={"100%"} style={{ aspectRatio: 16.0 / 9.0 }} src="https://picsum.photos/id/2/1200/500?grayscale" />
          </figure>
        </section>
        <section>
          <hgroup>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </hgroup>
        </section>
        <hr />
        <section>
          <div className="align-center">
            <h2>Pricing</h2>
          </div>
          <div className="row">
            <div className="card">
              <hgroup>
                <h2>Hobby</h2>
                <p><b>Free</b></p>
              </hgroup>
              <p>
                Includes:
              </p>
              <ul>
                <li>No credit card required</li>
                <li>All platforms</li>
                <li>All core FooBar features</li>
              </ul>
              <br />
              <div>
                <button>Download</button>
              </div>
            </div>
            <div className="card">
              <hgroup>
                <h2>Eterprise</h2>
                <p><b>Custom</b></p>
              </hgroup>
              <p>
                Everything in Hobby, plus:
              </p>
              <ul>
                <li>SAML SSO</li>
                <li>MCP Server Access</li>
                <li>Admin and Model Controls</li>
              </ul>
              <br />
              <div>
                <button>Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <header>
            <aside>
              <div role="group">
                <div className="row">
                  <div>
                    <hgroup>
                      <h4>Join our Community</h4>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
                      </p>
                    </hgroup>
                  </div>
                  <button type="reset">Join our Discord</button>
                </div>
              </div>
            </aside>
          </header>
        </section>
      </main>
      <header>
        <aside className="primary inverted">
          <div>
            <div role="group">
              <div className="row">
                <div>
                  <hgroup>
                    <h4>Need access?</h4>
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                    </p>
                  </hgroup>
                </div>
                <button type="reset">Request Credentials</button>
              </div>
            </div>
          </div>
        </aside>
      </header>
      <footer>
        <article className="primary">
          <div className="row">
            <div>
              <nav>
                <ul>
                  <b>COMPANY</b>
                  <li>
                    <a href="">Our Story</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Team</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul>
                  <b>DEVELOPERS</b>
                  <li>
                    <a href="">API</a>
                  </li>
                  <li>
                    <a href="">Vulnerabilities</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul>
                  <b>MORE</b>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </article>
      </footer>
    </>
  );
}