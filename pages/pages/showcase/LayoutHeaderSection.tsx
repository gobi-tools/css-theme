export default function LayoutHeaderSection() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <section>
          <header>
            <div style={{ backgroundColor: 'light-dark(var(--color-secondary-muted), var(--color-accent-faint))' }}>
              <div className="group">
                <div className="row">
                  <div>
                    <b>Try Now</b>
                    <br />
                    Subtitle
                  </div>
                  <div className="gap"></div>
                  <button>Download</button>
                </div>
              </div>
            </div>
          </header>
        </section>
      </main>
    </>
  )
}