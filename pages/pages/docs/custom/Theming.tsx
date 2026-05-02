import DocLayout from "../../../common/components/DocsLayout";
import { PRODUCT_NAME } from "../../../common/utils/types";

export default function Theming({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            If you want to create your own custom theme, you can start 
            by creating a new <code>my-theme.css</code> file and 
            adding a new <code>:root</code> section.
          </p>
          <p>
            To start, {PRODUCT_NAME} allows you to specify a small number
            or <b>colors</b>.
          </p>
        </div>

        <div>
          <pre><code>
                      {`:root {
  /** 
   * Specifying the colour scheme
   * allows you to create themes with explicit
   * dar or light support.
   * 
   * color-scheme: light dark;
   * color-scheme: light only; 
   * color-scheme: dark only; 
   * */
  color-scheme: light dark;
                      
  /**
   * You can control the main background 
   * and content colors.
   * */
  --color-bg: light-dark(#ffffff, #111827);
  --color-txt: light-dark(#212121, #d8eaff);
  --color-txt-on-dark: #ffffff;


  /**
   * You can also specify two main theme colors 
   * (for buttons, panels, etc).
   * */
  --color-primary: #526cfe;
  --color-secondary: #8b5cf6;

  /**
   * Finally you can specify colors
   * for success and error states.
   * */
  --color-success: #23b157;
  --color-error: #ef4444;
}`}
                    </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}