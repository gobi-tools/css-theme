import DocsLayout from "../../../common/components/DocsLayout";

export default function DarkMode({ theme }) {
  return (
    <DocsLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Support for dark mode depends on the specific theme. Some themes have a "light" aspect,
            some have a "dark" aspect and some change automatically based on the user's prefferences.
          </p>
          <p>
            By default you can add a <b>meta</b> tag with the <code>color-scheme</code> name and <code>light dark</code> value.
            Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected.
          </p>
          <p>
            For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme.
          </p>
          <table>
            <thead>
              <tr>
                <th>Theme</th>
                <th>Light</th>
                <th>Dark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Default</td>
                <td>&#9989;</td>
                <td>&#9989;</td>
              </tr>
              <tr>
                <td>App</td>
                <td>&#9989;</td>
                <td>&#9989;</td>
              </tr>
              <tr>
                <td>Writing</td>
                <td>&#9989;</td>
                <td>&#9989;</td>
              </tr>
              <tr>
                <td>Scholar</td>
                <td>&#9989;</td>
                <td>&#9989;</td>
              </tr>

              <tr>
                <td>Bold</td>
                <td>&#9989;</td>
                <td>&#10060;</td>
              </tr>
              <tr>
                <td>Sunset</td>
                <td>&#9989;</td>
                <td>&#10060;</td>
              </tr>
              <tr>
                <td>Sunset</td>
                <td>&#9989;</td>
                <td>&#10060;</td>
              </tr>

              <tr>
                <td>Green</td>
                <td>&#10060;</td>
                <td>&#9989;</td>
              </tr>
              <tr>
                <td>Betty</td>
                <td>&#10060;</td>
                <td>&#9989;</td>
              </tr>
              <tr>
                <td>Gold</td>
                <td>&#10060;</td>
                <td>&#9989;</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div>
          <pre><code>
            {`<html>
  <head>
    <!-- both variants -->
    <meta 
      name="color-scheme" 
      content="light dark"/>
    
    <!-- only dark variant -->
    <meta 
      name="color-scheme" 
      content="dark"/>
  </head>
</html>`}
          </code></pre>
        </div>
      </section>
    </DocsLayout>
  )
}