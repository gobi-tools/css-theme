import DocLayout from "../../../common/components/DocsLayout";
import { ELinks } from "../../../common/utils/types";

export default function Typography({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Typography is based purely on <a href={ELinks.CSS3} target="_blank">CSS3</a>,
            meaning it can handle everything from
            basic paragraphs:
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <pre><code>
            {`<p>
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor 
  incididunt ut labore et 
  dolore magna aliqua. 
  Ut enim ad minim veniam, 
  quis nostrud exercitation 
  ullamco laboris nisi ut 
  aliquip ex ea 
  commodo consequat.
</p>`}
          </code></pre>
        </div>
      </section>
      <section className="row">
        <div>
          <p>
            To all sorts of text modifiers, like <code>b</code>, <code>i</code>, <code>em</code> tags
            and many more.
          </p>
          <p>
            <i>italic</i>
          </p>
          <p>
            <em>emphasized</em>
          </p>
          <p>
            <dfn>definition</dfn>
          </p>
          <p>
            <cite>citation</cite>
          </p>

          <p>
            <b>bold</b>
          </p>
          <p>
            <strong>strong</strong>
          </p>

          <p>
            <del>deleted</del>
          </p>
          <p>
            <s>corrected</s>
          </p>

          <p>
            <u>underlined</u>
          </p>

          <p>
            <q>quotation</q>
          </p>

          {/* <p>
            <small>smaller</small>
          </p>
          <p>
            <sub>subscript</sub>
          </p>
          <p>
            <sup>supescript</sup>
          </p> */}
        </div>
        <div>
          <pre><code>
            {`<i>italic</i>
<em>emphasized</em>
<dfn>definition</dfn>
<cite>citation</cite>

<b>bold</b>
<strong>strong</strong>
<del>deleted</del>
<s>corrected</s>
<u>underlined</u>
<q>quotation</q>

<small>smaller</small>
<sub>subscript</sub>
<sup>supescript</sup>`}
          </code></pre>
        </div>
      </section>
      <section className="row">
        <div>
          <p>
            Finally, it supports all six <code>heading</code> types.
          </p>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>
        <div>
          <pre><code>
            {`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  );
}