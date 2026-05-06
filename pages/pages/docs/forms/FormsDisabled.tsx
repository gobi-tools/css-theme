import DocLayout from "../../../common/components/DocsLayout";

export default function FormsDisabled({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            A form can have all or part of its inputs set as <code>disabled</code> to
            prevent any user interaction.
          </p>
          <form>
            <fieldset>
              <legend>Disabled form</legend>

              <label htmlFor="email">
                <span>Email</span>
                <input type="email" id="email" placeholder="N/A" disabled />
              </label>

              <label htmlFor="address">
                <span>Address</span>
                <input type="text" id="address" placeholder="Address" disabled />
              </label>
              
              <label htmlFor="delivery">
                <span>Delivery</span>
                <select id="delivery" defaultValue={"fast"} disabled>
                <option value="fast">Fast</option>
                <option value="standard">Standard</option>
              </select>
              </label>
              
              <input type="submit" value={"Submit"} disabled />
            </fieldset>
          </form>
        </div>
        <div>
          <pre><code>
            {`<form>
  <fieldset>
    <legend>
      Disabled form
    </legend>

    <label for="email">
      <span>
        Email
      </span>
      <input 
        type="email" 
        id="email" 
        placeholder="N/A" 
        disabled/>
    </label>
        
    <label for="address">
      <span>
        Address
      </span>
      <input 
        type="text" 
        id="address" 
        placeholder="Address" 
        disabled/>
    </label>
    
    <label form="delivery">
      <span>
        Delivery
      </span>
      <select 
        id="delivery" 
        disabled>
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
    </label>
    
    <input 
      type="submit" 
      value="Submit" 
      disabled/>
  </fieldset>
</form>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}