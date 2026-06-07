import { useState } from "react";

export default function Basic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="hide-on-mobile">
        <nav>
          <ul>
            <li>
              <h2>Acme Inc</h2>
            </li>
            <div></div>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </nav>
      </header>
      <header className="hide-on-desktop">
        <nav className="disable-mobile">
          <ul>
            <li>
              <h2>Acme Inc</h2>
            </li>
            <div></div>
            <li>
              <button type="reset" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {!isMenuOpen && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>}
                {isMenuOpen && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>}
              </button>
            </li>
          </ul>
        </nav>
        {isMenuOpen &&
          <nav>
            <ul>
              <li></li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Sign Up</a>
              </li>
            </ul>
          </nav>
        }
      </header>
      <header className="align-center">
        <div>
          <hgroup>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.
            </p>
          </hgroup>
          <div>
            <button>Get Started</button>
            <button type="reset">Learn More</button>
          </div>
        </div>
      </header>
      <main>
        <div className="row">
          <article>
            <img width={"100%"} style={{ aspectRatio: 16.0 / 9.0 }} src="https://picsum.photos/id/20/600/200" />
            <h3>Sed ut perspiciatis</h3>
            <p>Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          </article>
          <article>
            <img width={"100%"} style={{ aspectRatio: 16.0 / 9.0 }} src="https://picsum.photos/id/42/600/200" />
            <h3>Nemo enim ipsam quia</h3>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed.</p>
          </article>
        </div>

        <header className="align-center secondary">
          <aside>
            <hgroup>
              <h2>Ut enim ad minima veniam</h2>
              <p>Quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
            </hgroup>
            <p>
              <button>
                <span>Sign up for free</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </button>
            </p>
          </aside>
        </header>
      </main>
      <hr />
      <footer>
        <div>
          <div className="row">
            <div className="col-6">
              <h5>About us</h5>
              <p>
                 Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.
              </p>
            </div>
            <div>
              <h5>Quick Links</h5>
              <nav>
                <ul>
                  <li><a href="">Features</a></li>
                  <li><a href="">Pricing</a></li>
                  <li><a href="">About</a></li>
                </ul>
              </nav>
            </div>
            <div>
              <h5>Legal</h5>
              <nav>
                <ul>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms of Service</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}