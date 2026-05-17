import { useState } from "react";
import { EDoc, ELinks } from "../../../common/utils/types";
import { RouteMaster } from "../../../common/utils/routes";
import DocLayout from "../../../common/components/DocsLayout";
import { useRoute } from "../../../common/effects/useRoute";

export default function FormsNormal({ theme }) {
  const route = useRoute();
  const [volume, setVolume] = useState(50);

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            All <a href={ELinks.HtmlFormsDocs} target="_blank">HTML form elements</a> are supported and
            can be easily arranged into a pleasantly looking and functional
            form. There is no JavaScript required and no extra CSS.
          </p>
          <form>
            <label htmlFor="email">
              <span>Email</span>
              <input type="email" placeholder="Email Address" id="email" />
            </label>

            <label htmlFor="password">
              <span>Password</span>
              <input type="password" id="password" placeholder="Password" />
            </label>

            <input type="submit" value={"Login"} />
            <p>
              Don't have an account? <a href="">Sign up</a>.
            </p>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <fieldset>
    <legend>
      Login
    </legend>

    <label for="email">
      <span>
        Email
      </span>
      <input 
        type="email" 
        name="email"
        placeholder="..." 
        id="email"/>
    </label>

    <label for="password">
      <span>
        Password
      </span>
      <input 
        type="password" 
        name="password"
        id="password" 
        placeholder="..."/>  
    </label>
    
    <input 
      type="submit" 
      value="Login"/>

    <p>
      Don't have an account?
      <a href="...">
        Sign up
      </a>.
    </p>
  </fieldset>
</form>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Textareas are supported as well and by default they
            expand to fit the available horizontal space.
          </p>
          <form>
            <textarea rows={4} id="textarea" placeholder="Write your comments..."></textarea>

            <input type="submit" value={"Comment"} />
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Ranged inputs are also supported.
          </p>
          <form>
            <label htmlFor="volume">
              <span>
                Volume (range)
              </span>
              <input type="range" id="volume" name="volume" min={0} max={100} step={1} value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
            </label>
            <input type="submit" value={"Tune"} />
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <label for="volume">
    <span>
      Volume (range)
    </span>
    <input 
      type="range" 
      id="volume" 
      name="volume" 
      min="0" 
      max="100" 
      step="1" 
      value="50"/>
  </label>
  <input 
    type="submit" 
    value="Tune"/>
</form>`}
          </code></pre>
        </div>
      </section>

      <section>
        <div className="row">
          <div>
            <p>
              If you want your forms to stand out more, you can
              wrap the inputs inside a <code>fieldset</code> and
              assign a <code>legend</code>.
            </p>
            <form>
              <fieldset>
                <legend>Details</legend>

                <div className="row disable-mobile">
                  <div>
                    <label htmlFor="first-name">
                      <span>First name</span>
                      <input type="text" id="first-name" placeholder="First name" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="last-name">
                      <span>Last name</span>
                      <input type="text" id="last-name" placeholder="Last name" />
                    </label>
                  </div>
                </div>

                <div className="row disable-mobile">
                  <div>
                    <label htmlFor="delivery">
                      <span>Delivery Time</span>
                      <select id="delivery" defaultValue={"mornibgt"}>
                        <option value="morning">Morning</option>
                        <option value="evening">Evening</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="delivery-date">
                      <span>Delivery Date</span>
                    <input type="date" id="delivery-date" />
                    </label>
                  </div>
                </div>

                <blockquote className="success">
                  Order total is <b>$33.59</b>
                </blockquote>

                <div className="row disable-mobile">
                  <div>
                    <input type="reset" className="error" value={"Reset"} />
                  </div>
                  <div className="gap"></div>
                  <div>
                    <input type="submit" value={"Confirm"} />
                  </div>
                </div>
              </fieldset>

            </form>
            <p>
              You can make forms as simple or as
              complex as you want.
            </p>
            <p>
              In the example above
              we're separating inputs into two separate <a href={RouteMaster.doc(EDoc.Grids, theme, route)}>columns</a>, so we
              can pack more information in the same space.
            </p>
            <p>
              We're also using <a href={RouteMaster.doc(EDoc.Blockquotes, theme, route)}>blockquotes</a> to highlight important information.
            </p>
            <p>
              We're using both <code>submit</code> and <code>reset</code> type inputs.
              Please note these inputs are styled to look exactly like <a href={RouteMaster.doc(EDoc.Blockquotes, theme, route)}>buttons</a>.
            </p>
          </div>
          <div>
            <pre><code>
              {`<form>
  <fieldset>
    <legend>
      Order details
    </legend>

    <!-- name row -->
    <div 
      class="row disable-mobile">
      <div>
        <label 
          for="first-name">
          <span>
            First name
          </span>
          <input 
            type="text" 
            id="first-name" 
            placeholder="..."/>
        </label>
      </div>
      <div>
        <label 
          for="last-name">
          <span>
            Last name
          </span>
          <input 
            type="text" 
            id="last-name" 
            placeholder="..."/>
        </label>
      </div>
    </div>

    <!-- other rows --> 
    <!-- .... -->

    <blockquote class="success">
      Order total is 
      <b>$33.59</b>
    </blockquote>

    <div 
      class="row disable-mobile">
      <div>
        <input 
          type="reset" 
          class="error" 
          value="Reset"//>
      </div>
      <div></div>
      <div>
        <input 
          type="submit" 
          value="Confirm"/> 
      </div>
    </div>
  </fieldset>
</form>`}
            </code></pre>
          </div>
        </div>
      </section>
    </DocLayout>
  )
}