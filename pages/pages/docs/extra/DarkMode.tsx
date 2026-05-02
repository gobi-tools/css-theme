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

          {/* <p>
            Dark Mode is supported by default on the themes where it makes sense, no JavaScript required.
            By default the <i>light</i> variant of any theme will be rendered.
          </p>
          <p>
            To make it so the variant changes automatically with system settings, you can add
            the <code>color-scheme</code> meta tag to your HTML document.
          </p>
          <p>
            You can also force a light or dark variant through the same mechanism.
          </p> */}
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
    <!-- enable both light and dark variants -->
    <meta name="color-scheme" content="light dark"/>
    
    <!-- enable only dark variant -->
    <meta name="color-scheme" content="dark"/>
  </head>
</html>`}
          </code></pre>
        </div>
      </section>
    </DocsLayout>
  )
}