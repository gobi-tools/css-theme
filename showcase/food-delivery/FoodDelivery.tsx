export default function FoodDelivery() {
  return (
    <>
      <header>
        <nav className="disable-mobile primary">
          <ul>
            <li className="gap"></li>
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
        <div className="primary">
          <div>
            <h1 className="align-center">
              Restaurants, takeaways, supermarkets and shops. Delivered.
            </h1>
            <form>
              <div className="group">
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
        </div>
      </header>
      <br />
      <main>
        <section className="row">
          <div className="card">
            <h2>Become a member</h2>
            <p>
              As a delivery driver, make money and work on your schedule. Sign up in minutes.
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
              Attract new customers and grow sales, starting with 0% commissions for up to 30 days.
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
              Experience the best your neighborhood has to offer, all in one app.
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

        <section className="row group">
          <div className="hide-on-desktop">
            <img className="rounded" src="https://picsum.photos/id/42/640/480" width={"100%"} />
          </div>
          <div>
            <hgroup>
              <h2>Everything you crave, delivered.</h2>
              <p>
                Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
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

        <section className="row group">
          <div>
            <img className="rounded" src="https://picsum.photos/id/103/640/480" width={"100%"} />
          </div>
          <div>
            <hgroup>
              <h2>Delivery for less</h2>
              <p>
                Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.
              </p>
            </hgroup>
            <p>
              <button>Get pass</button>
            </p>
          </div>
        </section>

        <section className="row group">
          <div className="hide-on-desktop">
            <img className="rounded" src="https://picsum.photos/id/348/640/480" width={"100%"} />
          </div>
          <div>
            <hgroup>
              <h2>Convenience stores at your doorstep.</h2>
              <p>
                Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour.
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
          <div className="align-center big-banner">
            <hgroup>
              <h1>Get grocery and convenience store essentials</h1>
              <h4>Grocery delivery, exactly how you want it.</h4>
              <p>Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.</p>
            </hgroup>
            <p><button>Shop Groceries</button></p>
          </div>
        </header>

        <header className="align-center">
          <div className="primary">
            <div className="row">
              <div>
                <hgroup>
                  <h3>Beauty essentials from top brands</h3>
                  <p>Get all your beauty and self-care needs delivered at home or on-the-go</p>
                </hgroup>
                <p><button>Show beauty</button></p>
                <hr className="hide-on-desktop" />
              </div>
              <div>
                <hgroup>
                  <h3>Flowers for any occasion</h3>
                  <p>Shop hand-picked and thoughtfully-arranged blooms from florists near you.</p>
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
                  <h3>Restock the minibar</h3>
                  <p>Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.</p>
                </hgroup>
                <p><button>Show alcohol</button></p>
                <hr className="hide-on-desktop" />
              </div>
              <div>
                <hgroup>
                  <h3>What your pets need, and want</h3>
                  <p>Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.</p>
                </hgroup>
                <p><button>Get pet supplies</button></p>
              </div>
            </div>
          </div>
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