export default function CarouselHeader() {
  return (
    <>
      <header>
        <nav className="disable-mobile">
          <ul >
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
          </ul>
        </nav>
      </header>
      <header>
        <ol aria-roledescription="carousel" aria-label="Simple Carousel">
          <li className="primary inverted">
            <div>
              <br />
              <h3>Page 1</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <br />
            </div>
          </li>
          <li className="secondary inverted">
            <div>
              <br />
              <h3>Page 2</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <div>
                <a href="">https://example.com</a>
              </div>
              <br />
            </div>
          </li>
        </ol>
      </header>
      <main>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </main>
    </>
  )
}