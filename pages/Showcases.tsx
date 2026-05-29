import HomeLayout from "./common/components/HomeLayout";
import { useRoute } from "./common/effects/useRoute";
import { RouteMaster } from "./common/utils/routes";
import { EDoc, EShowcases, EThemes } from "./common/utils/types";

export default function Showcases(props: { theme: EThemes }) {
  const route = useRoute();

  return (
    <HomeLayout theme={props.theme}>
      <section>
        <div className="row">
          <div className="card">
            <div className="group">
              <div className="row">
                <div>
                  <hgroup>
                    <h4>Blog</h4>
                    <p>
                      A simple, minimalist, blog theme. Inspired by <a href="https://bearblog.dev/" target="_blank">Bear</a>.
                    </p>
                  </hgroup>
                </div>
                <a href={RouteMaster.showacses(EShowcases.Blog, route)} target="_blank">
                  <button>
                    Explore
                  </button>
                </a>
              </div>
            </div>
            <div>
              <iframe scrolling="no" width="100%" height={500} src={RouteMaster.showacses(EShowcases.Blog, route)} />
            </div>
          </div>
          <div className="card">
            <div className="group">
              <div className="row">
                <div>
                  <hgroup>
                    <h4>Newsletter</h4>
                    <p>
                      A theme suitable for newsletters. Inspired by <a href="https://substack.com/" target="_blank">Substack</a>.
                    </p>
                  </hgroup>
                </div>
                <a href={RouteMaster.showacses(EShowcases.Newsletter, route)} target="_blank">
                  <button>
                    Explore
                  </button>
                </a>
              </div>
            </div>
            <div>
              <iframe scrolling="no" width="100%" height={500} src={RouteMaster.showacses(EShowcases.Newsletter, route)} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="card">
            <div className="group">
              <div className="row">
                <div>
                  <hgroup>
                    <h4>Delivery</h4>
                    <p>
                      A full blown app theme. Inspired by <a href="https://www.doordash.com/" target="_blank">DoorDash</a>.
                    </p>
                  </hgroup>
                </div>
                <a href={RouteMaster.showacses(EShowcases.FoodDelivery, route)} target="_blank">
                  <button>
                    Explore
                  </button>
                </a>
              </div>
            </div>
            <div>
              <iframe scrolling="no" width="100%" height={500} src={RouteMaster.showacses(EShowcases.FoodDelivery, route)} />
            </div>
          </div>

          <div className="card">
            <div className="group">
              <div className="row">
                <div>
                  <hgroup>
                    <h4>Landing</h4>
                    <p>
                      Perfect for a product landing pages. Inspired by <a href="https://www.uber.com/" target="_blank">Uber</a>.
                    </p>
                  </hgroup>
                </div>
                <a href={RouteMaster.showacses(EShowcases.LandingPage, route)} target="_blank">
                  <button>
                    Explore
                  </button>
                </a>
              </div>
            </div>
            <div>
              <iframe scrolling="no" width="100%" height={500} src={RouteMaster.showacses(EShowcases.LandingPage, route)} />
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  )
}