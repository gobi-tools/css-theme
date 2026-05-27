export default function LayoutHeaderComplex() {
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
        <article className="align-center secondary">
          <h2>My blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form>
            <div className="group">
              <input type="email" placeholder="name@example.com" />
              <input type="submit" value="Subscribe" />
            </div>
          </form>
        </article>
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