export default function LandingPage() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="">Platform</a></li>
            <li><a href="">Industries</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Security</a></li>
            <li><a href="">About</a></li>
            <li className="gap"></li>
            <li>
              <select>
                <option selected>En</option>
                <option>Fr</option>
                <option>De</option>
              </select>
            </li>
            <li>
              <button>Request Demo</button>
            </li>
          </ul>
        </nav>
      </header>
      <header>
        <div className="align-center">
          <h1>Hopper</h1>
          <h4>The first agentic development environment for the mainframe</h4>
          <p>Use AI agents to navigate TN3270, inspect datasets, write JCL, debug jobs, query VSAM, and operate inside z/OS from a modern development environment.</p>
          <p>
            <button>Download for Linux</button>
            <button type="reset">Read the Announcement</button>
          </p>
          <p>
            <a href="">Other platforms</a>
          </p>
        </div>
      </header>
    </>
  );
}