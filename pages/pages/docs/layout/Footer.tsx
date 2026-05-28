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
            A <code>footer</code> element is used to define the very last
            piece of content in a page or section.
            The simplest footer can contain text, links, etc.
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.LayoutFooterSimple, theme, route)} />
        </div>
        <div>

        </div>
      </section>
    </DocLayout>
  );
}