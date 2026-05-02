import { useState } from "react";
import DocLayout from "../../../common/components/DocsLayout";

export default function FormsValidation({ theme }) {
  const [name, setName] = useState("a");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Helper styles for form validation come out of the box for
            any <code>input</code> and <code>textarea</code> elements marked as <b>required</b>.
          </p>
          <p>
            Error styles apply to an input if either they start out as invalid or if the user
            types something, switches focus, and leaves the input invalid.
          </p>
          <p>
            Empty inputs do not display error styles.
          </p>
          <p>
            Adjacent text elements with the <code>error</code> class can also have
            error styles applied, so as to act as guides for the user.
          </p>
          <form action="" method="post">
            <fieldset>
              <legend>Input</legend>

              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                placeholder="Name..."
                pattern=".{4,100}"
                title="Name must be at least 4 characters"
                value={name}
                onChange={(e) => setName(e.target.value)} />
              <div className="error"><small>Enter a name between 4 and 100 characters</small></div>

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="comment">Comment</label>
              <textarea
                rows={5}
                id="comment"
                name="comment"
                placeholder="Enter your comment"
                required
                minLength={10}
                maxLength={500}
                value={comment}
                onChange={(e) => setComment(e.target.value)}></textarea>
              <div className="error"><small>Enter a meaningful comment</small></div>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form action="/" method="post">
  <fieldset>
    <legend>Input</legend>

    <label for="name">Name</label>
    <input
      id="name"
      name="name"
      required
      placeholder="Name..."
      pattern=".{4,100}"
      title="Name ..."
      value="a" />
    <div className="error">
      <small>Enter ...</small>
    </div>

    <label for="email">Email</label>
    <input 
      id="email" 
      name="email" 
      type="email" 
      required 
      placeholder="Email..." />

    <label for="comment">Comment</label>
    <textarea
      rows="5"
      id="comment"
      name="comment"
      placeholder="Enter your comment"
      required
      minLength="10"
      maxLength="500"></textarea>
    <div className="error">
      <small>Enter ...</small>
    </div>
    
    <input type="submit" value="Submit" />
    
  </fieldset>
</form>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Inputs that present a more limited range of options to a user, such as <code>select</code>, <code>radio</code> and <code>check</code> buttons,
            won't display a error styles but can be set as required.
          </p>
          <form>
            <fieldset>
              <legend>Countries</legend>

              <select id="country" name="country" required>
                <option value="" disabled selected hidden>
                  Please select a country
                </option>

                <option value="uk">United Kingdom</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
              </select>

              <label>
                <input type="checkbox" name="terms" required />
                I accept the terms and conditions
              </label>

              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <fieldset>
    <legend>Countries</legent>
    
    <select id="country" name="country" required>
      <option value="" disabled selected hidden>
        Please select a country
      </option>

      <option value="uk">United Kingdom</option>
      <option value="fr">France</option>
      <option value="de">Germany</option>
    </select>

    <label>
      <input type="checkbox" name="terms" required />
      I accept the terms and conditions
    </label>

    <input type="submit" value="Submit" />
  </fieldset>
</form>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}