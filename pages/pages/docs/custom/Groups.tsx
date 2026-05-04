import DocLayout from "../../../common/components/DocsLayout";

export default function Groups({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Some elements are visually meant to <q>stick</q> together.
            In such a case, you can wrap them in a parent that's been given the <code>group</code> class.
          </p>
          <p>
            In the case of a group of <code>buttons</code>, all horizontal
            spacing and borders between them dissapear.
          </p>
          <p className="group">
            <button>Option 1</button>
            <button type="reset">Option 2</button>
          </p>
        </div>
        <div>
          <pre><code>
            {`<p class="group">
  <button>
    Option 1
  </button>f
  <button type="reset">
    Option 2
  </button>
</p>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            In the case of a group of <code>marks</code>, they're
            also pulled together and have any vertical space dissapear.
          </p>
          <p className="group">
            <mark>#test</mark>
            <mark className="success">v1.0.0</mark>
          </p>
        </div>
        <div>
          <pre><code>
            {`<p class="group">
  <mark>
    #test
  </mark>
  <mark 
    className="success">
    v1.0.0
  </mark>
</p>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Grouping elements really shines in the
            case of forms and form inputs. You can see below
            an example of a compact login form.
          </p>
          <form>
            <div className="group">
              <input id="email" type="email" placeholder="Email" />
              <input id="password" type="password" placeholder="Password" />
              <input type="submit" value={"Login"} />
            </div>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <div class="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      id="password" 
      type="password" 
      placeholder="Password"/>
    <input 
      type="submit" 
      value={"Login"}/>
  </div>
</form>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Grouping elements can be used to style 
            icons and text together.
          </p>
          <div className="group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <b>Test Address, SE11 8CL</b>
          </div>
        </div>
        <div>
          <pre><code>
            {`<div class="group">
  <svg 
    width="20" 
    height="20" ...>
  </svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Other elements, such as images, can also be grouped,
            although the impact isn't as pronounced.
          </p>
          <p className="group">
            <img width="80" height="80" src="https://picsum.photos/80/80" alt="image 1" />
            <img width="80" height="80" src="https://picsum.photos/120/120" alt="image 2" />
          </p>
        </div>
        <div>
          <pre><code>
            {`<p class="group">
  <img 
    width="80" 
    height="80" 
    src="..." 
    alt="image 1"/>
  <img 
    width="80" 
    height="80" 
    src="..." 
    alt="image 2"/>
</p>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}