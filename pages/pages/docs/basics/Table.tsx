import DocLayout from "../../../common/components/DocsLayout";

export default function Table({ theme }) {  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Tables are given a light glow up with
            no borders except the bottom one (to visually separate rows)
            and a light color switch when highlighting.
          </p>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Value</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1.1</td>
                <td>20.35</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>Item 2.1</td>
                <td>15.99</td>
                <td>Out of stock</td>
              </tr>
              <tr>
                <td>Item 5.1</td>
                <td>14.23</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>Item 22</td>
                <td>10.11</td>
                <td>In stock</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <pre><code>
            {`<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Value</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1.1</td>
      <td>20.35</td>
      <td>In stock</td>
    </tr>
    ....
  </tbody>
</table>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Tables can, of course, contain any
            number of elements, as shown in the
            expample below.
          </p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="circle" width="32" height="32" src="https://picsum.photos/id/16/80/80" alt="profile pic" />
                </td>
                <td>
                  <code>04b720d8</code>
                </td>
                <td>
                  <a href="">@user-1</a>
                </td>
                <td>
                  <button>
                    <svg aria-label="Edit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <img className="circle" width="32" height="32" src="https://picsum.photos/id/16/40/40" alt="profile pic" />
                </td>
                <td>
                  <code>3edf8166</code>
                </td>
                <td>
                  <a href="">@user-253</a>
                </td>
                <td>
                  <button>
                    <svg aria-label="Edit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <img className="circle" width="32" height="32" src="https://picsum.photos/id/16/32/32" alt="profile pic" />
                </td>
                <td>
                  <code>90b4e981</code>
                </td>
                <td>
                  <a href="">@user-1182</a>
                </td>
                <td>
                  <button>
                    <svg aria-label="Edit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <pre><code>
            {`<table>
  <thead>
    <tr>
      <th></th>
      <th>ID</th>
      <th>User</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img 
          class="circle" 
          width="32" 
          height="32" 
          src="..."/>
      </td>
      <td>
        <code>...</code>
      </td>
      <td>
        <a href="...">...</a>
      </td>
      <td>
        <button>
          <svg...></svg>
        </button>
      </td>
    </tr>
    ....
  </tbody>
</table>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}