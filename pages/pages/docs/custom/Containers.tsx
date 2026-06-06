import DocLayout from "../../../common/components/DocsLayout";

export default function Containers({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            There are three classes that allow you to set different content widths:
          </p>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Width</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>container-narrow</code>
                </td>
                <td>
                  800px
                </td>
                <td>
                  This is the default viewport. Suitable for blogs, newsletters, etc.
                </td>
              </tr>
              <tr>
                <td>
                  <code>container-medium</code>
                </td>
                <td>
                  1200px
                </td>
                <td>
                  A slighlty larger viewport that allows more content on the screen
                  whilst at the same time still centering it.
                </td>
              </tr>
              <tr>
                <td>
                  <code>container-wide</code>
                </td>
                <td>
                  1600px
                </td>
                <td>
                  The largest viewport. Suitable for apps, dashboard, etc.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Of course, on mobile devices or tables, the viewport will adjust 
            accordingly.
          </p>
        </div>
        <div>
          <pre><code>
            {`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}