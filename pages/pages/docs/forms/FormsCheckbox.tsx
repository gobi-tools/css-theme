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
            <div>
              <label htmlFor="egg">
                <input type="checkbox" id="egg" name="sandwich" value="egg" />
                <span>Egg</span>
              </label>
            </div>

            <div>
              <label htmlFor="cheese">
                <input type="checkbox" id="cheese" name="sandwich" value="cheese" />
                <span>Cheese</span>
              </label>
            </div>

            <div>
              <label htmlFor="ham">
                <input type="checkbox" id="ham" name="sandwich" value="ham" />
                <span>Ham</span>
              </label>
            </div>
          </form>
          <p>
            These work well even for complex, multi-line, checkboxes
          </p>
          <form>
            <p>
              <b>Todos</b>
            </p>
            <div>
              <div>
                <label htmlFor="friday">
                  <input type="checkbox" id="friday" name="todos" value={"friday"} />
                  <span>
                    <b>Friday</b><br />
                    <span>- Order lunch</span><br />
                    <span>- Go to work</span>
                    <span>- Eat lunch</span>
                  </span>
                </label>
              </div>
              <div>
                <label htmlFor="saturday">
                  <input type="checkbox" id="saturday" name="todos" value={"saturday"} />
                  <span>
                    <b>Saturday</b><br />
                    <span>- Order lunch</span><br />
                    <span>- Eat lunch</span>
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <div className="row">
    <div>
      <p><b>Options</b></p>

      <div>
        <label for="egg">
          <input 
            type="checkbox" 
            id="egg" 
            name="sandwich" 
            value="egg" />
          <span>Egg</span>
        </label>
      </div>
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
            <div>
              <p>
                <b>Wrapping</b>
              </p>

              <div>
                <label htmlFor="bread">
                  <input type="radio" id="bread" name="radio" value="bread" checked={radio === 'bread'} onChange={(e) => setRadio(e.target.value)} />
                  <span>Bread</span>
                </label>
              </div>

              <div>
                <label htmlFor="salad">
                  <input type="radio" id="salad" name="radio" value="salad" checked={radio === 'salad'} onChange={(e) => setRadio(e.target.value)} />
                  <span>Salad</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <div className="row">
    <div>
      <p><b>Wrapping</b></p>

      <div>
        <label for="bread">
          <input 
            type="radio" 
            id="bread" 
            name="radio" 
            value="bread" />
          <span>Bread</span>
        </label>
      </div>
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
            To handle the majority of edge cases gracefully it's
            best practice to place the checkbox or radio <code>input</code> element
            inside a <code>label</code> element. This will ensure
            vertical and horizontal alignment is consistent.
          </p>
          <p>
            You can also place the inputs and labels as siblings and
            alignment will still work, although multiline labels won't look right 
            and clicking on the label won't automatically select the corresponding input.
          </p>
          <form>
            <p>
              <b>Extras</b>
            </p>
            <div>
              <input type="checkbox" name="pickles" id="pickles" value="pickles" />
              <label htmlFor="pickes">Pickles</label>
            </div>
            <div>
              <input type="checkbox" name="mustard" id="mustard" value="mustard" />
              <label htmlFor="mustard">Mustard</label>
            </div>
          </form>
        </div>
        <div>
           <pre><code>
            {`<form>
  <div className="row">
    <div>
      <p><b>Extras</b></p>

      <div>
        <input 
          type="checkbox" 
          id="pickles" 
          name="pickles" 
          value="pickles" />
        <label for="pickles">
          Pickless
        </label>
      </div>
      ...
    </div>
    ...
  </div>
</form>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  );
}