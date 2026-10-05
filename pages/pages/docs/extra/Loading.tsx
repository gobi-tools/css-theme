import DocsLayout from "../../../common/layouts/DocsLayout";
import { EThemes } from "../../../common/utils/types";

export default function Loading({ theme }: { theme: EThemes }) {
  return (
    <DocsLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            You can add a loading indicator to an element by adding the <code>aria-busy="true"</code> attribute.
          </p>
          <p>
          <button aria-busy="true"></button>
          <button aria-busy="true" role="reset">Loading</button>
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}