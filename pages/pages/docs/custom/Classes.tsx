import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc, PRODUCT_NAME } from "../../../common/utils/types";

export default function Classes({ theme }) {
  const route = useRoute();
    
  return (
    <DocLayout theme={theme}>
      <section>
        <div>
          <p>
            {PRODUCT_NAME} aims to be plug & play as much as possible. In this
            section we've also seen a number of CSS classes that can be used to allow it to support many more cases.
          </p>
          <p>
            Below is the full list of supported classes and the effect they produce:
          </p>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>align-center</code></td>
                <td>
                  Aligns elements centrally on the horizontal axis. See <a href={RouteMaster.doc(EDoc.Heroes, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>card</code></td>
                <td>
                  Transforms an element into a card. See <a href={RouteMaster.doc(EDoc.Cards, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>circle</code></td>
                <td>
                  Rounds the edges off an element so it's a perfect circle. Useful for images. See <a href={RouteMaster.doc(EDoc.Table, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>container-medium</code></td>
                <td>
                  Sets the maximum size of the container to <code>var(--width-container-medium)</code>. See <a href={RouteMaster.doc(EDoc.Containers, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>container-narrow</code></td>
                <td>
                  Sets the maximum size of the container to <code>var(--width-container-narrow)</code>. See <a href={RouteMaster.doc(EDoc.Containers, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>container-wide</code></td>
                <td>
                  Sets the maximum size of the container to <code>var(--width-container-wide)</code>. See <a href={RouteMaster.doc(EDoc.Containers, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td>
                  Applies an error-type style of an element by changing its background, foreground or text color.
                  See <a href={RouteMaster.doc(EDoc.Tags, theme, route)}>here</a> or <a href={RouteMaster.doc(EDoc.Table, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>gap</code></td>
                <td>
                  Used in between <code>col</code> elements. Provides a gap between them so they can be separated into left and right sides.
                  Has no effect on mobile displays. See <a href={RouteMaster.doc(EDoc.Navigation, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>group</code></td>
                <td>
                  Groups various elements, like buttons or inputs, together, horizontally. See <a href={RouteMaster.doc(EDoc.Groups, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>hero</code></td>
                <td>
                  Transform an element into a hero (or banner). See <a href={RouteMaster.doc(EDoc.Heroes, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>hide-on-mobile</code></td>
                <td>
                  Hides an element if on small displays. See <a href={RouteMaster.doc(EDoc.Mobile, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>hide-on-desktop</code></td>
                <td>
                  Hides an element if on large displays. See <a href={RouteMaster.doc(EDoc.Mobile, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>row</code></td>
                <td>
                  Transforms child elements into horizontally aligned columns. Also the <code>col-N</code> class.
                  See <a href={RouteMaster.doc(EDoc.Columns, theme, route)}>here</a>.
                </td>
              </tr>
              <tr>
                <td><code>success</code></td>
                <td>
                  Applies a success-type style to an element by changing its background, foreground or text color.
                  See <a href={RouteMaster.doc(EDoc.Buttons, theme, route)}>here</a> or <a href={RouteMaster.doc(EDoc.Summary, theme, route)}>here</a>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DocLayout>
  )
}