export default function Index() {
  return (
    <>
      <header>
        <nav className="disable-mobile" style={{ backgroundColor: 'var(--color-primary-faint)' }}>
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
        <div style={{ backgroundColor: 'var(--color-primary-faint)' }}>
          <div>
            <h1 className="align-center">
              Restaurants, takeaways, supermarkets and shops. Delivered.
            </h1>
            <form>
              <div className="group">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                </button>
                <input
                  id="address-search"
                  type="search"
                  placeholder="Enter delivery address">
                </input>
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
              </div>
            </form>
            <p className="align-center hide-on-mobile">
              <button type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <span>Sign in for saved address</span>
              </button>
              <button type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                <span>Use current location</span>
              </button>
            </p>
            <p className="hide-on-desktop align-center">
              <button type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </button>
              <button type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
              </button>
            </p>
          </div>
        </div>
      </header>
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
                    <span>
                      <b>
                        Start earning
                      </b>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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
                    <span>
                      <b>
                        Sign up
                      </b>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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
                    <span>
                      <b>
                        Get the app
                      </b>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="row">
          <div>
            <h1>Everything you crave, delivered.</h1>
            <h4>Your favorite local restaurants</h4>
            <p>
              Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
            </p>
            <p>
              <button>Find restaurants</button>
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/id/42/640/480" width={"100%"} />
          </div>
        </section>

        <section className="row">
          <div>
            <img src="https://picsum.photos/id/103/640/480" width={"100%"} />
          </div>
          <div>
            <h1>Delivery for less</h1>
            <p>
              Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.
            </p>
            <p>
              <button>Get pass</button>
            </p>
          </div>
        </section>

        <section>
          <header>
            <div className="align-center" style={{ backgroundImage: 'url("https://picsum.photos/id/130/640/480")', backgroundSize: 'cover' }}>
              <h1>Get grocery and convenience store essentials</h1>
              <h4>Grocery delivery, exactly how you want it.</h4>
              <p>Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.</p>
              <p><button>Shop Groceries</button></p>
            </div>
          </header>
        </section>

        <section className="row">
          <div>
            <h1>Convenience stores at your doorstep.</h1>
            <p>
              Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour.
            </p>
            <p>
              <button>Shop now</button>
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/id/348/640/480" width={"100%"} />
          </div>
        </section>

        <section>
          <header>
            <div style={{ backgroundColor: 'var(--color-primary-faint)' }}>
              <h1 className="align-center">Helping you with to-dos and gifting</h1>
              <div className="row">
                <div>
                  <h2>Beauty essentials from top brands</h2>
                  <p>Get all your beauty and self-care needs delivered at home or on-the-go</p>
                  <p><button>Show beauty</button></p>
                </div>
                <div>
                  <h2>Flowers for any occasion</h2>
                  <p>Shop hand-picked and thoughtfully-arranged blooms from florists near you.</p>
                  <p><button>Send flowers</button></p>
                </div>
              </div>
              <div className="row">
                <div>
                  <h2>Restock the minibar</h2>
                  <p>Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.</p>
                  <p><button>Show alcohol</button></p>
                </div>
                <div>
                  <h2>What your pets need, and want</h2>
                  <p>Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.</p>
                  <p><button>Get pet supplies</button></p>
                </div>
              </div>
            </div>
          </header>
        </section>
      </main>
    </>
  );
}