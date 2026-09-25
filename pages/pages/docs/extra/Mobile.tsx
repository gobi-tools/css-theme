import CodeSyntax from "../../../common/components/CodeSyntax";
import DocsLayout from "../../../common/layouts/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc, EExamples, EThemes } from "../../../common/utils/types";

export default function Mobile({ theme }: { theme: EThemes}) {
  const route = useRoute();
    
  return (
    <DocsLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            The CSS framework is design to handle various screen sizes, from
            wide (desktop) to narrow (mobile).
          </p>
          <p>
            The threshold between wide and narrow happens at <b>600px</b>.
          </p>
          <p>
            Most elements, like paragraphs of text, buttons, etc, will layout
            or cascade naturally.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.example(EExamples.MobileTypography, theme, route)} />
            <figcaption>More information <a href={RouteMaster.doc(EDoc.Typographty, theme, route)}>here</a></figcaption>
          </figure>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Navigation elements are one example where there's a distinct
            transition between wide and narrow displays. In wide displays they're
            arranged horizontally whist in narrow displays they're aranged vertically, to
            conserve space.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.example(EExamples.MobileNav, theme, route)} />
            <figcaption>More information <a href={RouteMaster.doc(EDoc.Navigation, theme, route)}>here</a> or <a href={RouteMaster.doc(EDoc.Tabs, theme, route)}>here</a>.</figcaption>
          </figure>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<header>
  <nav>
    <ul>
      <li><a ...>...</a></li>
      ....
    </ul>
  </nav>
</header>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Header menu elements are another example. On wide displays they are
            arrange horizontally, at the top of the page. On narrow displays they still
            maintain the horizontal arrangement, but are displayed at the bottom of the page, to
            simulate mobile app displays.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.example(EExamples.MobileMenu, theme, route)} />
            <figcaption>More information <a href={RouteMaster.doc(EDoc.Menu, theme, route)}>here</a>.</figcaption>
          </figure>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<header>
  <menu>
    <li><a ...>...</a></li>
    ....
  </menu>
</header>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Finally, elements that have the <code>row</code> class also behave differentely. In
            wide displats, they're arrange horizontally, with a gap between them.
            In narrow displays the flip to a vertical arrangement, with no gap between them.
          </p>
          <figure>
            <iframe scrolling="no" width="100%" height={300} src={RouteMaster.example(EExamples.MobileColumns, theme, route)} />
            <figcaption>More information <a href={RouteMaster.doc(EDoc.Grids, theme, route)}>here</a>.</figcaption>
          </figure>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can instruct an element to ignore mobile transitions by
            applying the <code>disable-mobile</code> class.
          </p>
          <p>
            You can also instruct elements to be hidden on mobile, via the <code>hiden-on-mobile</code> class,
            or be hidden on desktop, via the <code>hiden-on-desktop</code> class.
          </p>
        </div>
        <div></div>
      </section>
    </DocsLayout>
  )
}