export default function Newspaper() {
  return (
    <>
      <header>
        <nav>
          <menu>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                <span>
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg>
                <span>
                  Subscription
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.5 15H7a4 4 0 0 0-4 4v2" /><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /><circle cx="10" cy="7" r="4" /></svg>
                <span>
                  Profile
                </span>
              </a>
            </li>
          </menu>
        </nav>
      </header>
      <header>
        <nav className="secondary">
          <ul>
            <li><a href="">News</a></li>
            <li><a href="">Politics</a></li>
            <li><a href="">Sports</a></li>
            <li><a href="">Local</a></li>
            <li><a href="">Culture</a></li>
            <li><a href="">Food & Drink</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="row">
          <div className="col">
            <hgroup>
              <img width={"100%"} className="article-img" src="https://picsum.photos/id/42/420/300" />
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p><i><small>10 minutes ago</small></i></p>
            </hgroup>
          </div>
          <div className="col-4">
            <blockquote>
              <hgroup>
                <p><b>MOST READ</b></p>
                <a href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                <hr />
                <a href="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</a>
                <hr/>
                <a href="">Ut enim ad minim veniam, quis nostrud exercitation</a>
                <hr/>
                <a href="">Ullamco laboris nisi ut aliquip ex ea commodo consequat</a>
              </hgroup>
            </blockquote>
          </div>
        </section>
        <section>
          <p>
            <mark className="primary">Politics</mark>
          </p>
          <div className="row">
            <div>
              <div className="row disable-mobile">
                <div className="col">
                  <hgroup>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </hgroup>
                </div>
                <div className="col-5">
                  <img className="article-img" width={"100%"} src="https://picsum.photos/id/43/300/250" />
                </div>
              </div>
            </div>
            <div>
              <div className="row disable-mobile">
                <div className="col">
                  <hgroup>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </hgroup>
                </div>
                <div className="col-5">
                  <img className="article-img" width={"100%"} src="https://picsum.photos/id/57/300/250" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div>
              <div className="row disable-mobile">
                <div className="col">
                  <hgroup>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </hgroup>
                </div>
                <div className="col-5">
                  <img className="article-img" width={"100%"} src="https://picsum.photos/id/49/300/250" />
                </div>
              </div>
            </div>
            <div>
              <div className="row disable-mobile">
                <div className="col">
                  <hgroup>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </hgroup>
                </div>
                <div className="col-5">
                  <img className="article-img" width={"100%"} src="https://picsum.photos/id/48/300/250" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p>
            <mark className="primary">Big Reads</mark>
          </p>
          <div className="row">
            <div>
              <hgroup>
                <img className="article-img" width={"100%"} src="https://picsum.photos/id/76/300/250" />
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              </hgroup>
            </div>
            <div>
              <hgroup>
                <img className="article-img" width={"100%"} src="https://picsum.photos/id/84/300/250" />
                <h4>Ut enim ad minim veniam, quis nostrud exercitation</h4>
              </hgroup>
            </div>
            <div>
              <hgroup>
                <img className="article-img" width={"100%"} src="https://picsum.photos/id/63/300/250" />
                <h4>Ullamco laboris nisi ut aliquip ex ea commodo consequat</h4>
              </hgroup>
            </div>
          </div>
        </section>
      </main>
      <hr />
      <footer>
        <div>
          <div className="row">
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Staff</a>
                  </li>
                  <li>
                    <a href="">Standards</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="">Newsletters</a>
                  </li>
                  <li>
                    <a href="">RSS Feeds</a>
                  </li>
                  <li>
                    <a href="">Jobs</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="">Coontact Us</a>
                  </li>
                  <li>
                    <a href="">Tips</a>
                  </li>
                  <li>
                    <a href="">Inquieries</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}