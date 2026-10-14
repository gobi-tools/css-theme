import CodeSyntax from "../../../common/components/CodeSyntax";
import DocLayout from "../../../common/layouts/DocsLayout";
import { EThemes } from "../../../common/utils/types";

export default function Links({ theme }: { theme: EThemes }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Anchor elements are used to create links to other pages, email addresses, locations in the same page
            or anything else a URL can address.
          </p>
          <ul>
            <li><a href="">website.com</a></li>
            <li><a href="">email@test.com</a></li>
            <li><a href="">{"/#location"}</a></li>
          </ul>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location">
  /#location
</a>`}</CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Headigns can be used together with empty fragment links to reference
            locations in the same document.
          </p>
          <h1 data-hover>
            Section 1
            <a href="#section_1"></a>
          </h1>
          <h2>
            Section 1.2
            <a href="#section_12"></a>
          </h2>
          <h3>
            Section 1.2.1
            <a href="#section_121"></a>
          </h3>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<h1>
  Section 1
  <a href="#section_1"></a>
</h1>
<h2>
  Section 1.2
  <a href="#section_12"></a>
</h2>
<h3>
  Section 1.2.1
  <a href="#section_121"></a>
</h3>
`}</CodeSyntax>
        </div>
      </section>
    </DocLayout>
  )
}