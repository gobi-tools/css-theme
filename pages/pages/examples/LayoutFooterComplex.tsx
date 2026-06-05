export default function LayoutFooterComplex() {
  return <>
    <main>
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </main>
    <footer>
      <article className="primary">
        <div className="row">
          <div>
            <nav>
              <ul>
                <b>COMPANY</b>
                <li>
                  <a href="">Our Story</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <b>DEVELOPERS</b>
                <li>
                  <a href="">API</a>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
        </div>
      </article>
    </footer>
  </>;
}