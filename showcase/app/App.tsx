function Header() {
  return <header>
    <nav className="disable-mobile">
      <ul>
        <li><a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
          <span>Home</span>
        </a></li>
        <div></div>
        <li>
          <button type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" /></svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
}

function Menu() {
  return <menu>
    <li aria-selected>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
        <span>Dashboard</span>
      </a>
    </li>
    <li>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="19" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="16" cy="12" r="2" /><circle cx="20" cy="19" r="2" /><circle cx="4" cy="19" r="2" /><circle cx="8" cy="12" r="2" /></svg>
        <span>Inventory</span>
      </a>
    </li>
    <li>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></svg>
        <span>Shipping</span>
      </a>
    </li>
    <li>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12h4" /><path d="M10 8h4" /><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" /><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" /></svg>
        <span>Supplier</span>
      </a>
    </li>
  </menu>
}

function Search() {
  return <form>
    <fieldset>
      <legend>
        Search params
      </legend>

      <div className="row disable-mobile">
        <div>
          <label>
            <span><b>Params</b></span>
            <input type="search" id="search" name="search" placeholder="Search" />
          </label>
        </div>

        <div>
          <label>
            <span><b>Category</b></span>
            <select id="category" name="category">
              <option selected>Gold</option>
              <option>Others</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            <span><b>Status</b></span>
            <select id="status" name="status">
              <option selected>Active</option>
              <option>Inactive</option>
            </select>
          </label>
        </div>
      </div>
    </fieldset>
  </form>
}

function Table() {
  const data = [
    {
      "name": "Acme Logistics Ltd",
      "is_gold": true,
      "is_active": true,
      "email": "office@acmelogistics.example"
    },
    {
      "name": "Northbridge Solutions",
      "is_gold": false,
      "is_active": true,
      "email": "contact@northbridge.example"
    },
    {
      "name": "Summit Retail Group",
      "is_gold": true,
      "is_active": false,
      "email": "admin@summitretail.example"
    },
    {
      "name": "Blue Horizon Consulting",
      "is_gold": false,
      "is_active": true,
      "email": "office@bluehorizon.example"
    },
    {
      "name": "Greenfield Industries",
      "is_gold": true,
      "is_active": true,
      "email": "support@greenfield.example"
    },
    {
      "name": "Evercrest Partners",
      "is_gold": false,
      "is_active": false,
      "email": "hello@evercrest.example"
    },
    {
      "name": "Redwood Technologies",
      "is_gold": true,
      "is_active": true,
      "email": "info@redwoodtech.example"
    },
    {
      "name": "Sterling Procurement",
      "is_gold": false,
      "is_active": true,
      "email": "office@sterlingprocurement.example"
    },
    {
      "name": "Vertex Manufacturing",
      "is_gold": true,
      "is_active": false,
      "email": "contact@vertexmfg.example"
    },
    {
      "name": "Oakstone Services",
      "is_gold": false,
      "is_active": true,
      "email": "admin@oakstone.example"
    }
  ]

  return <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Partner</th>
          <th>Status</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => {
          return <tr key={r.name}>
            <td>
              {r.name}
            </td>
            <td>
              {r.is_active && <mark className="success">active</mark>}
              {!r.is_active && <mark className="error">active</mark>}
            </td>
            <td><a href="">{r.email}</a></td>
            <td>
              <div className="row disable-mobile">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                </button>

                <button disabled={!r.is_gold} type="reset">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                </button>
              </div>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

function Pagination() {
  return <p role="group" className="align-center">
    <button type="reset">Prev</button>
    <button type="reset">1</button>
    <button type="reset">2</button>
    <button type="reset">...</button>
    <button type="reset">17</button>
    <button type="reset">18</button>
    <button type="reset">Next</button>
  </p>
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="row">
          <div className="col-3">
            <Menu />
          </div>
          <div>
            <Search />
            <Table />
            <hr />
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}