import CodeSyntax from "../../../common/components/CodeSyntax";
import { useRoute } from "../../../common/effects/useRoute";
import DocLayout from "../../../common/layouts/DocsLayout";
import { RouteMaster } from "../../../common/utils/routes";
import { EThemes } from "../../../common/utils/types";

export default function Figures({ theme }: { theme: EThemes}) {
  const route = useRoute();
  
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Figures can contain a single image and an
            associated caption.
          </p>
          <figure>
            <img width="640" height="480" src={RouteMaster.resImg("16-640x480.jpg", route)} alt="header image" />
            <figcaption>Sample caption</figcaption>
          </figure>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`}
          </CodeSyntax>
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
              <img width="200" height="240" src={RouteMaster.resImg("16-200x240.jpg", route)} alt="header image" />
              <figcaption>First image</figcaption>
            </figure>
            <figure>
              <img width="240" height="240" src={RouteMaster.resImg("16-240x240.jpg", route)} alt="second image" />
              <figcaption>Second image</figcaption>
            </figure>
            <figcaption>Figure group</figcaption>
          </figure>
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<figure>
  <figure>
    <img 
      width="200" 
      height="240" 
      src="..." 
      alt="first image" />
    <figcaption>
      First image
    </figcaption>
  </figure>
  
  <figure>
    <img 
      width="240" 
      height="240" 
      src="..." 
      alt="second image" />
    <figcaption>
      Second image
    </figcaption>
  </figure>
  
  <figcaption>
    Figure group
  </figcaption>
</figure>`}
          </CodeSyntax>
        </div>
      </section>
    </DocLayout>
  )
}