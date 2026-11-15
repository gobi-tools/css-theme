import DocLayout from "../../../common/layouts/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";
import { EThemes } from "../../../common/utils/types";
import CodeSyntax from "../../../common/components/CodeSyntax";

export default function Meters({ theme }: { theme: EThemes }) {
  const route = useRoute();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            The HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
          </p>
          <label htmlFor="progress">
            <span>Progress</span>
            <progress id="progress" max={100} value={30} />
          </label>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<label for="progress">
  <span>Progress</span>
  <progress id="progress" max="100" value="30" />
</label>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            The HTML element represents either a scalar value within a known range or a fractional value.
          </p>
          <label htmlFor="meter">
            <span>Fuel level:</span>

            <meter id="meter" min="0" max="100" low={33} high={66} optimum={80} value="50">
              at 50/100
            </meter>
          </label>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<label html="meter">
  <span>Fuel level:</span>

  <meter id="meter" min="0" max="5" value="3">
    at 3/5
  </meter>
</label>`}
          </CodeSyntax>
        </div>
      </section>
    </DocLayout>
  )
}