import CodeSyntax from "../../../common/components/CodeSyntax";
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
            <figure>
            <CodeSyntax lang={'xml'}>{"console.log('abc')"}</CodeSyntax>
            <figcaption>Code block</figcaption>
            </figure>
            <p>
              The theme doesn't handle syntax highlighting out of the box.
              That can be handled separately, by using a system such as <a href={ELinks.Syntax_Hilite} target="_blank">hilite.me</a> or <a href={ELinks.Syntax_HighlightJS} target="_blank">higlightjs.org</a>.
            </p>
          </div>
          <div>
            <CodeSyntax lang={'xml'}>
              {`<p>
  Inline code <code>...</code>
</p>
<p>
  Keyboard shortcut 
  <kbd>...</kbd>
</p>
<pre>
  <code>....</code>
</pre>`}
            </CodeSyntax>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}