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
            A carousel placed inside a header element will automatically form a hero element, where 
            each slide extends as wide as the screen whilst the content stays correctly centered.
          </p>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.example(EExamples.CarouselHeader, theme, route)} />
          <p>
            <a href={RouteMaster.example(EExamples.CarouselHeader, theme, route)} target="_blank">See standalone example</a>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<header>
  <ol aria-roledescription="carousel">
    <!-- the slide can have a strong, bold, colour -->
    <!-- or a background image -->
    <li class="primary inverted">
      <!-- make sure the child is a layout element -->
      <div>
        <br>
        <h1>...</h1>
        <p>...</p>
        </br>
      </div>
    </li>
    <li class="secondary inverted">
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