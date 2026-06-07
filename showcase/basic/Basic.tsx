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
              Ship and scale your startup faster with Acme
            </h1>
            <p>
              Acme Cloud is the all-in-one platform that helps engineering teams plan, build, and deploy without the overhead.
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
            <h3>Deploy in seconds</h3>
            <p>Push to main and we handle the rest — automatic builds, previews, and zero-downtime rollouts on every commit.</p>
          </article>
          <article>
            <img width={"100%"} style={{ aspectRatio: 16.0 / 9.0 }} src="https://picsum.photos/id/42/600/200" />
            <h3>Scale without thinking</h3>
            <p>Auto-scaling infrastructure that grows with your traffic, so you only pay for what you actually use.</p>
          </article>
        </div>

        <header className="align-center secondary">
          <aside>
            <hgroup>
              <h2>Start shipping in minutes</h2>
              <p>Free for up to 5 teammates. No credit card required.</p>
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
            <div>
              <h5>About us</h5>
              <p>
                Acme Cloud gives modern engineering teams the infrastructure to ship products customers love.
              </p>
            </div>
            <div>
              <h5>Quick Links</h5>
              <nav>
                <ul className="secondary">
                  <li><a href="">Features</a></li>
                  <li><a href="">Pricing</a></li>
                  <li><a href="">About</a></li>
                </ul>
              </nav>
            </div>
            <div>
              <h5>Legal</h5>
              <nav>
                <ul className="secondary">
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