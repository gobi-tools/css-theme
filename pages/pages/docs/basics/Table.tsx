import DocLayout from "../../../common/components/DocsLayout";

export default function Table({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Tables are given a light glow up with appropriate 
            padding, borders and highlights. Naturally, table 
            cells can contain anything from plain text to images or links.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cover</th>
                <th>Item</th>
                <th>Value</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>  
                  <img width="30" height="50" src="https://picsum.photos/id/16/30/50" alt="cover 1" />
                </td>
                <td><a href="">Item 1.1</a></td>
                <td>20.35</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>
                  <img width="30" height="50" src="https://picsum.photos/id/100/30/50" alt="cover 2" />
                </td>
                <td><a href="">Item 2.1</a></td>
                <td>15.99</td>
                <td>Out of stock</td>
              </tr>
              <tr>
                <td>
                  <img width="30" height="50" src="https://picsum.photos/id/40/30/50" alt="cover 3" />
                </td>
                <td><a href="">Item 5.1</a></td>
                <td>14.23</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>
                  <img width="30" height="50" src="https://picsum.photos/id/25/30/50" alt="cover 4" />
                </td>
                <td><a href="">Item 22</a></td>
                <td>10.11</td>
                <td>In stock</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}><b>Total</b></td>
                <td colSpan={2}><b>60.68</b></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <pre><code>
            {`<table>
  <thead>
    <tr>
      <th>Cover</th>
      <th>Item</th>
      <th>Value</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="..."/>
      </td>
      <td>
        <a href="...">
          Item 1.1
        </a>
      </td>
      <td>20.35</td>
      <td>In stock</td>
    </tr>
    ....
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">
        <b>Total</b>
      </td>
      <td colspan="2">
        <b>60.68</b>
      </td>
    </tr>
  </tfoot>
</table>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}