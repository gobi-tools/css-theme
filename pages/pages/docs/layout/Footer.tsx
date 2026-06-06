import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EExamples } from "../../../common/utils/types";

export default function Footer({ theme }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            A <code>footer</code> element is used to define the very last piece of content in a page or a section.
            The simplest footer can contain text, links, etc.
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.LayoutFooterSimple, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<footer>
  <div>
    This is a simple footer
    with a <a href="...">link</a>.
  </div>
</footer>`}
          </code></pre>
        </div>
      </section>
      <section className="row">
        <div>
          <p>
            More complex footers can contain information divided by columns, etc.
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.LayoutFooterComplex, theme, route)} />
        </div>
        <div>
          <pre><code>
            {`<footer>
  <div>
    <div class="row">
      <div>
        <nav>
          <ul>...</ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>...</ul>
        </nav>
      </div>
      <div></div>
    </div>
  </div>
</footer>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  );
}