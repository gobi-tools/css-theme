import DocLayout from "../../../common/components/DocsLayout";

export default function Figures({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Figures can contain a single image and an
            associated caption.
          </p>
          <figure>
            <img width="640" height="480" src="https://picsum.photos/640/480" alt="ssample image " />
            <figcaption>Sample caption</figcaption>
          </figure>
        </div>
        <div>
          <pre><code>
            {`<figure>
  <img width="640" height="480" src="..." alt="ssample image " />
  <figcaption>Sample caption</figcaption>
</figure>`}
          </code></pre>
        </div>
      </section>

      <section className="row">
        <div>
          <p>
            Or they can contain multiple figures,
            each with its own separate caption,
            as well as a caption for the parent figure.
          </p>
          <figure>
            <figure>
              <img width="200" height="240" src="https://picsum.photos/200/240" alt="first image" />
              <figcaption>Caption for the first image</figcaption>
            </figure>
            <figure>
              <img width="240" height="240" src="https://picsum.photos/240/240" alt="second image" />
              <figcaption>Caption for the second image</figcaption>
            </figure>
            <figcaption>Caption for the figure group</figcaption>
          </figure>
        </div>
        <div>
          <pre><code>
            {`<figure>
  <figure>
    <img width="200" height="240" src="..." alt="first image" />
    <figcaption>Caption for the first image</figcaption>
  </figure>
  
  <figure>
    <img width="240" height="240" src="..." alt="second image" />
    <figcaption>Caption for the second image</figcaption>
  </figure>
  
  <figcaption>Caption for the figure group</figcaption>
</figure>`}
          </code></pre>
        </div>
      </section>
    </DocLayout>
  )
}