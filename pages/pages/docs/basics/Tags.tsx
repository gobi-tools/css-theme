import CodeSyntax from "../../../common/components/CodeSyntax";
import DocLayout from "../../../common/layouts/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc, EThemes } from "../../../common/utils/types";

export default function Tags({ theme }: { theme: EThemes }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            You can mark any text, keyword or piece
            of information with the <code>mark</code> html tag.
          </p>
          <p>
            <mark>v15.20.30</mark>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<mark>v15.20.30</mark>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can append svg icons to the start and
            each of each piece of highlighted content.
          </p>
          <p>
            <mark>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>released</span>
            </mark>
            <mark>
              <span>error</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </mark>
          </p>
          <p>
            <small>
              You can learn more about icons <a href={RouteMaster.doc(EDoc.Icons, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You  can assign the <code>primary</code>, <code>secondary</code>, <code>success</code> or <code>error</code> classes
            to change the appearance of the highlighted content. You can add the <code>inverted</code> class to each of the
            previous to highlight the content even more.
          </p>
          <p className="flex">
            <mark className="primary">#theme</mark>
            <mark className="secondary">#second</mark>
            <mark className="success">Process OK</mark>
            <mark className="error">Error 400</mark>
          </p>
          <p className="flex">
            <mark className="primary inverted">#theme</mark>
            <mark className="secondary inverted">#second</mark>
            <mark className="success inverted">Process OK</mark>
            <mark className="error inverted">Error 400</mark>
          </p>
          <p>
            <small>
              You can learn more about colors <a href={RouteMaster.doc(EDoc.Colors, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<!-- with or without -->
<!-- the inverted class -->
<mark class="primary">
  #theme
</mark>
<mark class="secondary">
  #second
</mark>
<mark class="success">
  Process OK
</mark>
<mark class="error">
  Error 400
</mark>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Finally, if you wrap a number of
            highlighted pieces of text in a
            html element with the <code>group</code> role, they
            will be grouped together.
          </p>
          <p role="group">
            <mark>npm</mark>
            <mark className="success">1.0.3</mark>
            <mark className="error">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-x-icon lucide-x">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </mark>
          </p>
          <p>
            <small>
              You can learn more about groups <a href={RouteMaster.doc(EDoc.Groups, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can use the <code>mark</code> tag as standalone badges with text or with icons.
          </p>
          <p>
            <mark>1</mark>
            <mark>2</mark>
            <mark>3</mark>
            <mark>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </mark>
          </p>
          <p>
            Or in more complex layouts.
          </p>
          <article>
            <div role="group">
              <div className="row">
                <mark className="secondary">1</mark>
                <div>
                  <b>Lorem ipsum dolor sit amet</b>
                  <br />
                  <small>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                </div>
              </div>
            </div>

            <div role="group">
              <div className="row">
                <mark className="secondary">2</mark>
                <div>
                  <b>Sed ut perspiciatis unde omnis</b>
                  <br />
                  <small>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</small>
                </div>
              </div>
            </div>

            <div role="group">
              <div className="row">
                <mark className="secondary">3</mark>
                <div>
                  <b>At vero eos et accusamus</b>
                  <br />
                  <small>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</small>
                </div>
              </div>
            </div>
          </article>
          <p>
            <small>
              You can learn more about cards <a href={RouteMaster.doc(EDoc.Cards, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<p>
  <mark>1</mark>
  <mark>2</mark>
  <mark>3</mark>
  <mark><svg .../></svg></mark>
</p>

<article>
  <div role="group">
    <div class="row">
      <mark class="secondary">1</mark>
      <div>
        <b>Lorem ipsum ...</b>
        <br/>
        <small>>Ut enum...</small>
      </div>
    </div>

    <div class="row">
      <mark class="secondary">2</mark>
      <div>
        <b>Set ut ...</b>
        <br/>
        <small>Nemo enim...</small>
      </div>
    </div>

    ...
  </div>
</article>`}
          </CodeSyntax>
        </div>
      </section>
    </DocLayout>
  )
}