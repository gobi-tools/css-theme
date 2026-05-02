export default function LayoutHeroSimple() {
  return (
    <>
      <header className="hero" style={{ backgroundColor: 'light-dark(var(--color-secondary-light-2), var(--color-accent-dark-2))' }}>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
          </ul>
        </nav>
      </header>
      <main >
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </main>
    </>
  )
}