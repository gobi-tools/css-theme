import CodeSyntax from "../../../common/components/CodeSyntax";
import DocLayout from "../../../common/layouts/DocsLayout";
import { EThemes } from "../../../common/utils/types";

export default function FormsGrouped({ theme }: { theme: EThemes }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Simple forms, with a small number of inputs, can
            be grouped horizontally by applying the <code>group</code> role to a parent tag.
            In such a case, auxiliary elemnents such as input labels should not be used.
          </p>
          <form>
            <div role="group">
              <input id="email" type="email" placeholder="Email" />
              <input type="submit" value="Subscribe" />
            </div>
          </form>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>{`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`}</CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            This can be used to great effect for search inputs.
          </p>
          <form>
            <div role="group">
              <button disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
              </button>
              <input type="search" id="search" placeholder="Search" />
              <input type="submit" value="Search" />
            </div>
          </form>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<form>
  <div role="group">
    <button disabled>
      <svg ...></svg>
    </button>
    <input 
      id="search" 
      type="search" 
      placeholder="Search"/>
    <input 
      type="submit" 
      value="Search"/>
  </div>
</form>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            And even use mutliple buttons:
          </p>
          <form>
            <div role="group">
              <input type="search" value="" placeholder="e.g. SW1A 1AA" />

              <button type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="22" x2="18" y1="12" y2="12" />
                  <line x1="6" x2="2" y1="12" y2="12" />
                  <line x1="12" x2="12" y1="6" y2="2" />
                  <line x1="12" x2="12" y1="22" y2="18" />
                </svg>
              </button>
              <button type="submit">
                <span>Go</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<form>
  <div role="group">
    <input 
      type="search" 
      value="" 
      placeholder="e.g. SW1A 1AA"/>
    <button type="reset">
      <svg ...></svg>
    </button>
    <button type="submit">
      <span>Go</span>
      <svg ...></svg>
    </button> 
  </div>
</form>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            You can still wrap form elements inside
            a <code>fieldset</code> with an appropriate <code>legend</code> tag.
          </p>
          <form>
            <fieldset>
              <legend>Selection</legend>
              <div role="group">
                <select id="delivery" defaultValue={"fast"}>
                  <option value="fast">Fast</option>
                  <option value="standard">Standard</option>
                </select>
                <input type="date" id="delivery-date" />
                <input type="submit" value="Confirm" />
              </div>
            </fieldset>

          </form>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<form>
  <fieldset>
    <legend>
      Selection
    </legend>
    <div role="group">
      <select id="delivery">
        <option 
          value="fast" 
          selected>
          Fast
        </option>
        <option 
          value="standard">
          Standard
        </option>
      </select>
      <input 
        type="date" 
        id="delivery-date"/>
      <input 
        type="submit" 
        value="Confirm"/>
    </div>
  </fieldset>
</form>`}
          </CodeSyntax>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            And you can group checkbox and radio in order
            to display them horizontally as well.
          </p>
          <form>
            <div role="group">
              <label htmlFor="ch_1">
                <input type="checkbox" id="ch_1" name="check" value="ch_1" />
                <span>Check #1</span>
              </label>
              <label htmlFor="ch_2">
                <input type="checkbox" id="ch_2" name="check" value="ch_2" />
                <span>Check #2</span>
              </label>
              <label htmlFor="ch_3">
                <input type="checkbox" id="ch_3" name="check" value="ch_3" />
                <span>Check #3</span>
              </label>
            </div>
          </form>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<form>
  <div role="group">
    <label for="ch_1">
      <input 
        type="checkbox" 
        id="ch_1" 
        name="check"
        value="ch_1" />
      <span>Check #1</span>
    </label>
    ...
</form>`}
          </CodeSyntax>
        </div>
      </section>
    </DocLayout>
  )
}