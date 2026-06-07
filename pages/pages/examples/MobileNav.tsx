export default function MobileNav() {
  return (
    <>
      <header>
        <nav style={{ maxWidth: '600px' }}>
          <ul>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" /><path d="m18 15 4-4" /><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" /></svg>
                <span>Docs</span>
              </a>
            </li>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>
                <span>More</span>
              </a>
              <ul>
                <li><a href="">Option 1</a></li>
                <li><a href="">Option 2</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Heading 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </main>
    </>
  )
}