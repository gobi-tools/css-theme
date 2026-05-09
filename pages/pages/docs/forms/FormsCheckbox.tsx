import { useState } from "react";
import DocLayout from "../../../common/components/DocsLayout";

export default function FormsCheckbox({ theme }) {
  const [radio, setRadio] = useState('bread');

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            To allow multiple items to be selected, you can use
            lighlty styled checkbox inputs.
          </p>
          <form>
            <p>
              <b>Options</b>
            </p>
            <label htmlFor="egg">
              <input type="checkbox" id="egg" name="sandwich" value="egg" />
              <span>Egg</span>
            </label>

            <label htmlFor="cheese">
              <input type="checkbox" id="cheese" name="sandwich" value="cheese" />
              <span>Cheese</span>
            </label>

            <label htmlFor="ham">
              <input type="checkbox" id="ham" name="sandwich" value="ham" />
              <span>Ham</span>
            </label>
          </form>
          <p>
            These work well even for complex, multi-line, checkboxes
          </p>
          <form>
            <p>
              <b>Todos</b>
            </p>
            <label htmlFor="friday">
              <input type="checkbox" id="friday" name="todos" value={"friday"} />
              <span>
                <b>Friday</b><br />
                <span>- Order lunch</span><br />
                <span>- Go to work</span>
                <span>- Eat lunch</span>
              </span>
            </label>
            <label htmlFor="saturday">
              <input type="checkbox" id="saturday" name="todos" value={"saturday"} />
              <span>
                <b>Saturday</b><br />
                <span>- Order lunch</span><br />
                <span>- Eat lunch</span>
              </span>
            </label>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <div className="row">
    <div>
      <p><b>Options</b></p>

      <label for="egg">
        <input 
          type="checkbox" 
          id="egg" 
          name="sandwich" 
          value="egg" />
        <span>Egg</span>
      </label>
      ...
    </div>
    ...
  </div>
</form>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            If you want only one item to be selected out of a list
            of multiple options, you can use radio inputs.
          </p>
          <form>
            <p>
              <b>Wrapping</b>
            </p>

            <label htmlFor="bread">
              <input type="radio" id="bread" name="radio" value="bread" checked={radio === 'bread'} onChange={(e) => setRadio(e.target.value)} />
              <span>Bread</span>
            </label>
            <label htmlFor="salad">
              <input type="radio" id="salad" name="radio" value="salad" checked={radio === 'salad'} onChange={(e) => setRadio(e.target.value)} />
              <span>Salad</span>
            </label>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <div className="row">
    <p><b>Wrapping</b></p>

    <label for="bread">
      <input 
        type="radio" 
        id="bread" 
        name="radio" 
        value="bread" />
      <span>Bread</span>
    </label>
    ...
  </div>
</form>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  );
}