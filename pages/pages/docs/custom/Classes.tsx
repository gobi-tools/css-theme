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
            {PRODUCT_NAME} aims to style elements purely based on their semantic meaning or
            on the relationships between elements. However, it also provides a limited set of classes that
            can be used to create more advanced layouts.
          </p>

          <table>
            <thead>
              <tr>
                <th>Domain</th>
                <th>Class</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>Containers</td>
                <td><code>container-medium</code></td>
                <td>
                  Sets the maximum size of the container to 800px.
                </td>
              </tr>
              <tr>
                <td><code>container-narrow</code></td>
                <td>
                  Sets the maximum size of the container to 1200px.
                </td>
              </tr>
              <tr>
                <td><code>container-wide</code></td>
                <td>
                  Sets the maximum size of the container to 1600px.
                </td>
              </tr>

              <tr>
                <td rowSpan={5}>Layout</td>
                <td><code>row</code></td>
                <td>
                  Transforms its child elements into horizontally aligned columns.
                </td>
              </tr>
              <tr>
                <td><code>col</code></td>
                <td>
                  Instructs an element to occupy as much space as possible. If all elements have this class they will all
                  have equal width.
                </td>
              </tr>
              <tr>
                <td><code>col-N</code></td>
                <td>
                  Horizontal space is divided in 12 equal columns. From <code>col-1</code> to <code>col-12</code> we can progressively specify columns of greater and greater width.
                </td>
              </tr>
              <tr>
                <td><code>gap</code></td>
                <td>
                  Used in between <code>col</code> elements. Provides a gap between them so they can be separated into left and right sides.
                  Has no effect on mobile displays.
                </td>
              </tr>
              
              <tr>
                <td rowSpan={3}>Mobile</td>
                <td><code>hide-on-mobile</code></td>
                <td>
                  Hides an element if on small displays.
                </td>
              </tr>
              <tr>
                <td><code>hide-on-desktop</code></td>
                <td>
                  Hides an element if on large displays.
                </td>
              </tr>
              <tr>
                <td><code>disable-mobile</code></td>
                <td>
                  Disable layout changes on small displays.
                  It can be applied to elements that have the <code>row</code> class applied, nav bars, menus, etc 
                  to force them not to change their display on small screens.
                </td>
              </tr>

              <tr>
                <td rowSpan={5}>Colors</td>
                <td><code>primary</code></td>
                <td>
                  Depending on context, it changes background, text or border colors to match various hues derived 
                  from the theme's primary color.
                </td>
              </tr>
              <tr>
                <td><code>secondary</code></td>
                <td>
                  Depening on context, it changes background, text or border colors to match various hues derived 
                  from the theme's secondary color.  
                </td>
              </tr>
              <tr>
                <td><code>success</code></td>
                <td>
                  Depending on context, it changes background, text or border colors to match various hues derived 
                  from the theme's success color.
                </td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td>
                  Depending on context, it changes background, text or border colors to match various hues derived 
                  from the theme's error color.
                </td>
              </tr>
              <tr>
                <td><code>inverted</code></td>
                <td>
                  Takes any primary, secondary, success or error color scheme and inverts it such that the 
                  background color is a lot more proeminent and the text color is usually a contrasting one.
                </td>
              </tr>

              <tr>
                <td rowSpan={2}>Style</td>
                <td><code>card</code></td>
                <td>
                  Transforms an element into a card.
                </td>
              </tr>
              <tr>
                <td><code>circle</code></td>
                <td>
                  Rounds the edges off an element so it's a perfect circle. Useful for images.
                </td>
              </tr>

              <tr>
                <td rowSpan={1}>Alignment</td>
                <td><code>align-center</code></td>
                <td>
                  Aligns elements centrally on the horizontal axis.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DocLayout>
  )
}