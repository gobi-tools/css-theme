import HomeLayout from "./common/components/HomeLayout";
import { useRoute } from "./common/effects/useRoute";
import { RouteMaster } from "./common/utils/routes";
import { EShowcases, EThemes } from "./common/utils/types";

const Arrow = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
}

function ShowcaseTitle(props: { title: string, url: string }) {
  return <nav>
    <ul>
      <li>
        <a href={props.url} target="_blank">
          <span><b>{props.title}</b></span>
          <Arrow />
        </a>
      </li>
    </ul>
  </nav>
}

function ShowcasePreview(props: { route: string, showcase: EShowcases }) {
  return <img
    src={RouteMaster.showcaseImg(props.showcase, props.route)}
    width={"100%"}
    style={{ aspectRatio: 16.0 / 9.0, objectPosition: 'top' }}
    alt={props.showcase} />
}

export default function Showcases(props: { theme: EThemes }) {
  const route = useRoute();

  return (
    <HomeLayout theme={props.theme}>
      <section>
        <div className="row">
          <div>
            <article>
              <div>
                <ShowcaseTitle title="Blog" url={RouteMaster.showcases(EShowcases.Blog, route)} />
              </div>
              <div>
                <a href={RouteMaster.showcases(EShowcases.Blog, route)} target="_blank">
                  <ShowcasePreview showcase={EShowcases.Blog} route={route} />
                </a>
              </div>
            </article>
          </div>
          <div>
            <article>
              <div>
                <ShowcaseTitle title="Newsletter" url={RouteMaster.showcases(EShowcases.Newsletter, route)} />
              </div>
              <div>
                <a href={RouteMaster.showcases(EShowcases.Newsletter, route)} target="_blank">
                  <ShowcasePreview showcase={EShowcases.Newsletter} route={route} />
                </a>
              </div>
            </article>
          </div>
        </div>
        <br className="hide-on-desktop" />
        <div className="row">
          <div>
            <article>
              <div>
                <ShowcaseTitle title="Delivery" url={RouteMaster.showcases(EShowcases.FoodDelivery, route)} />
              </div>
              <div>
                <a href={RouteMaster.showcases(EShowcases.FoodDelivery, route)} target="_blank">
                  <ShowcasePreview showcase={EShowcases.FoodDelivery} route={route} />
                </a>
              </div>
            </article>
          </div>
          <div>
            <article>
              <div>
                <ShowcaseTitle title="Landing" url={RouteMaster.showcases(EShowcases.LandingPage, route)} />
              </div>
              <div>
                <a href={RouteMaster.showcases(EShowcases.LandingPage, route)} target="_blank">
                  <ShowcasePreview showcase={EShowcases.LandingPage} route={route} />
                </a>
              </div>
            </article>
          </div>
        </div>
        <br className="hide-on-desktop" />
        <div className="row">
          <div>
            <article>
              <div>
                <ShowcaseTitle title="App" url={RouteMaster.showcases(EShowcases.App, route)} />
              </div>
              <div>
                <a href={RouteMaster.showcases(EShowcases.App, route)} target="_blank">
                  <ShowcasePreview showcase={EShowcases.App} route={route} />
                </a>
              </div>
            </article>
          </div>
          <div></div>
        </div>
      </section>
    </HomeLayout>
  )
}