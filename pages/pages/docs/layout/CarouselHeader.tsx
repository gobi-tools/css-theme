import CodeSyntax from "../../../common/components/CodeSyntax";
import { useRoute } from "../../../common/effects/useRoute";
import DocLayout from "../../../common/layouts/DocsLayout";
import { RouteMaster } from "../../../common/utils/routes";
import { EExamples, EThemes } from "../../../common/utils/types";

export default function CarouselHeader({ theme }: { theme: EThemes }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            A carousel placed inside a header element will automatically extend it's slide to cover
            the whole width of the page whilst leaving the actual content correctly centered.
          </p>
          <p>
            This achieves the carousel banner effect when paired with a background image.
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.CarouselHeader, theme, route)} />
          <p>
            <a href={RouteMaster.example(EExamples.CarouselHeader, theme, route)} target="_blank">See example</a>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<header>
  <ol aria-roledescription="carousel">
    <!-- each slide and its background image extends for the whole page width -->
    <li style="background:url('...')">
      <!-- make sure the child is a layout element -->
      <div>
        <br>
        <h1>...</h1>
        <p>...</p>
        </br>
      </div>
    </li>
    <li style="background:url('...')">
      <div>...</div>
    <li>
  </ol>
</header>`}
          </CodeSyntax>
        </div>
      </section>
    </DocLayout>
  );
}