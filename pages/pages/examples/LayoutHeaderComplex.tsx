export default function LayoutHeaderComplex() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
          </ul>
        </nav>
      </header>
      <header>
        <div className="align-center" style={{ backgroundColor: 'light-dark(var(--color-secondary-muted), var(--color-accent-faint))' }}>
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
        </div>
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