export default function FoodDelivery() {
  return (
    <>
      <header>
        <nav className="disable-mobile primary">
          <ul>
            <div></div>
            <li>
              <button>Sign In</button>
            </li>
            <li>
              <button type="reset">Sign Up</button>
            </li>
          </ul>
        </nav>
      </header>
      <header>
        <article className="primary">
          <div>
            <h1 className="align-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <form>
              <div role="group">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                </button>
                <input
                  id="address-search"
                  type="search"
                  placeholder="Enter delivery address">
                </input>
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
              </div>
            </form>
            <p className="align-center">
              <button type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                <span>Use current location</span>
              </button>
            </p>
          </div>
        </article>
      </header>
      <br />
      <main>
        <section className="row">
          <div className="card">
            <h2>Become a member</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <nav>
              <ul>
                <li>
                  <a href="">
                    <span><b>Start earning</b></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card">
            <h2>Become a merchant</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <nav>
              <ul>
                <li>
                  <a href="">
                    <span><b>Sign up</b></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card">
            <h2>Get the best experience</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <nav>
              <ul>
                <li>
                  <a href="">
                    <span><b>Get the app</b></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="row" role="group">
          <div className="hide-on-desktop">
            <img className="rounded" src="https://picsum.photos/id/42/640/480" width={"100%"} />
          </div>
          <div>
            <hgroup>
              <h2>Sed ut perspiciatis unde.</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </hgroup>
            <p>
              <button>Find restaurants</button>
            </p>
          </div>
          <div className="hide-on-mobile">
            <img className="rounded" src="https://picsum.photos/id/42/640/480" width={"100%"} />
          </div>
        </section>

        <section className="row" role="group">
          <div>
            <img className="rounded" src="https://picsum.photos/id/103/640/480" width={"100%"} />
          </div>
          <div>
            <hgroup>
              <h2>Omnis iste natus</h2>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.
              </p>
            </hgroup>
            <p>
              <button>Get pass</button>
            </p>
          </div>
        </section>

        <section className="row" role="group">
          <div className="hide-on-desktop">
            <img className="rounded" src="https://picsum.photos/id/348/640/480" width={"100%"} />
          </div>
          <div>
            <hgroup>
              <h2>Sit voluptatem accusantium.</h2>
              <p>
                ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam, quis nostrum.
              </p>
            </hgroup>
            <p>
              <button>Shop now</button>
            </p>
          </div>
          <div className="hide-on-mobile">
            <img className="rounded" src="https://picsum.photos/id/348/640/480" width={"100%"} />
          </div>
        </section>

        <header>
          <article className="align-center big-banner">
            <hgroup>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <h4>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </hgroup>
            <p><button>Shop Groceries</button></p>
          </article>
        </header>

        <header className="align-center">
          <article className="primary">
            <div className="row">
              <div>
                <hgroup>
                  <h3>Sed ut perspiciatis unde omnis</h3>
                  <p>Iste natus error sit voluptatem accusantium doloremque laudantium</p>
                </hgroup>
                <p><button>Show beauty</button></p>
                <hr className="hide-on-desktop" />
              </div>
              <div>
                <hgroup>
                  <h3>Totam rem aperiam eaque</h3>
                  <p>Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                </hgroup>
                <p><button>Send flowers</button></p>
                <hr className="hide-on-desktop" />
              </div>
            </div>
            <br />
            <br className="hide-on-mobile" />
            <div className="row">
              <div>
                <hgroup>
                  <h3>Dicta sunt explicabo</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
                </hgroup>
                <p><button>Show alcohol</button></p>
                <hr className="hide-on-desktop" />
              </div>
              <div>
                <hgroup>
                  <h3>Voluptatem sequi nesciunt neque</h3>
                  <p>Quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                </hgroup>
                <p><button>Get pet supplies</button></p>
              </div>
            </div>
          </article>
        </header>
      </main>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="">Terms of service</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}