import CodeSyntax from "../../../common/components/CodeSyntax";
import DocLayout from "../../../common/components/DocsLayout";

export default function Lists({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Both ordered and unordered lists are
            styled such that they have a bit more
            vertical spacing.
          </p>
          <p>
            As usual, lists can contain any number of other elements
            (text, links, etc) and can be nested quite deep.
          </p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
            </ol>
          </ul>

        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Definition lists are styled such that <code>dd</code> elements 
            are inlined compared to <code>dt</code> elements.
          </p>
          <dl>
            <dt>Coffee</dt>
            <dd>Black hot drink</dd>
            <dt>Milk</dt>
            <dd>White cold drink</dd>
          </dl>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`}
          </CodeSyntax>
        </div>
      </section>
    </DocLayout>
  );
}