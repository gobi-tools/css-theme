import DocLayout from "../../../common/components/DocsLayout";

export default function Links({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Anchor elements are used to create links to other pages, email addresses, locations in the same page 
            or anything else a URL can address.
          </p>
          <ul>
            <li><a href="">website.com</a></li>
            <li><a href="">email@test.com</a></li>
            <li><a href="">{"/#location"}</a></li>
          </ul>
        </div>
        <div>
          <pre><code>
            {`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location>
  /#location
</a>
`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}