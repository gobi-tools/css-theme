import DocLayout from "../../../common/components/DocsLayout";
import { ELinks } from "../../../common/utils/types";

export default function Code({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section>
        <div className="row">
          <div>
            <p>
              Code can be displayed both inline as well as part of a
              stand alone code block.
            </p>
            <p>
              Inline code <code>{"console.log('abc')"}</code>
            </p>
            <p>
              Keyboard shortcut <kbd>{"Ctrl + S"}</kbd>
            </p>
            <pre><code>{"console.log('abc')"}</code></pre>
            <p>
              The theme doesn't handle syntax highlighting out of the box.
              That can be handled separately, by using a system such as <a href={ELinks.Syntax_Hilite} target="_blank">hilite.me</a> or <a href={ELinks.Syntax_HighlightJS} target="_blank">higlightjs.org</a>.
            </p>
          </div>
          <div>
            <pre><code>
              {`<p>Inline code <code>...</code></p>
<p>Keyboard shortcut <kbd>...</kbd></p>
<pre><code>....</code></pre>`}
            </code></pre>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}