export default function Newsletter() {
  return (
    <>
      <header>
        <nav className="disable-mobile">
          <ul>
            <li>
              <img className="circle" width={"30"} height={"30"} src="https://picsum.photos/id/42/30/30" />
            </li>
            <li className="gap"></li>
            <li className="align-center">
              <h3>My newsletter</h3>
            </li>
            <li className="gap"></li>
            <li>
              <button>Subscribe</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Lorem ipsum dolor sit amet</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
          <div className="group">
            <div className="row">
              <img className="circle" width={"40"} height={"40"} src="https://picsum.photos/id/50/30/30" />
              <div>
                <span>Author Name</span>
                <br />
                <span><small>Published today • Paid</small></span>
              </div>
            </div>
          </div>
          <div className="row disable-mobile">
            <div>
              <button type="reset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
                <span>130</span>
              </button>
              <button type="reset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                </svg>
                <span>20</span>
              </button>
              <button type="reset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m2 9 3-3 3 3" />
                  <path d="M13 18H7a2 2 0 0 1-2-2V6" />
                  <path d="m22 15-3 3-3-3" />
                  <path d="M11 6h6a2 2 0 0 1 2 2v10" />
                </svg>
                <span>5</span>
              </button>
            </div>
            {/* <div className="gap"></div> */}
            <button type="reset">Share</button>
          </div>
        </section>
      </main>
    </>
  )
}