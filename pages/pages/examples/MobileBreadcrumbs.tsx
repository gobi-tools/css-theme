export default function MobileBreadcrumbs() {
  return (
    <>
      <header>
        <nav style={{maxWidth: '600px'}}>
          <ol>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Library</a>
            </li>
            <li aria-selected>
              <a href="">Data</a>
              <ul>
                <li><a href="">Not visible</a></li>
              </ul>
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <article>
          <h1>Heading 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </article>
      </main>
    </>
  )
}