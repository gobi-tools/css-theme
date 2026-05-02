import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { RouteMaster } from "../../../common/utils/routes";
import { EDoc } from "../../../common/utils/types";

export default function Links({ theme }) {
  const route = useRoute();
    
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Navigation elements can be styled in a
            standard, success or error way (by applying
            the corresponding <code>success</code> and <code>error</code> classes)
          </p>
          <p>
            Basic <a href="">link</a>.
          </p>
          <p>
            Success <a href="" className="success">link</a>.
          </p>
          <p>
            Error <a href="" className="error">link</a>.
          </p>
          <p>
            <small>
              You can learn more about classes <a href={RouteMaster.doc(EDoc.Classes, theme, route)}>here</a>.
            </small>
          </p>
        </div>
        <div>
          <pre><code>
            {`<a href="">link</a>
<a href="" class="success">success</a>
<a href="" class="error">error</a>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}