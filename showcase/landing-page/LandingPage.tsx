export default function LandingPage() {
  return (
    <>
      <header>
        <aside className="primary inverted">
          <div>
            <b>Introducing Hopper</b>— The first agentic development environment for the mainframe.
          </div>
        </aside>
      </header>
      <header>
        <nav className="container-wide">
          <ul>
            <li><a href="">Platform</a></li>
            <li><a href="">Industries</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Security</a></li>
            <li><a href="">About</a></li>
            <li className="gap"></li>
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
            <h1>Hopper</h1>
            <h4>The first agentic development environment for the mainframe</h4>
            <p>Use AI agents to navigate TN3270, inspect datasets, write JCL, debug jobs, query VSAM, and operate inside z/OS from a modern development environment.</p>
          </hgroup>
          <p>
            <button>Download for Linux</button>
            <button type="reset">Read the Announcement</button>
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
            <h2>Built by leading minds behind the world's most advanced AI</h2>
            <p>
              Our team unites top researchers, engineers, and strategists from pioneering companies and institutions—all focused on building systems that deliver real impact.
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
                <li>macOS, Windows, and Linux</li>
                <li>Connect with mainframe</li>
                <li>All core Hopper features</li>
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
                <li>Org-wide Privacy Controls</li>
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
              <div className="group">
                <div className="row">
                  <div>
                    <hgroup>
                      <h4>Join our Community</h4>
                      <p>
                        Connect with builders using Hopper, follow product updates, and swap ideas with the Hypercubic team.
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
            <div className="group">
              <div className="row">
                <div>
                  <hgroup>
                    <h4>Need access?</h4>
                    <p>
                      Fill out the form and we'll send you credentials to try it on for free.
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
        <div className="primary">
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
            <div className="gap"></div>
          </div>
        </div>
      </footer>
    </>
  );
}