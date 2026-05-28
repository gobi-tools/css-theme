import HomeLayout from "./common/components/HomeLayout";
import { useRoute } from "./common/effects/useRoute";
import { RouteMaster } from "./common/utils/routes";
import { EDoc, EShowcases, EThemes } from "./common/utils/types";

export default function Showcases(props: { theme: EThemes }) {
  const route = useRoute();

  return (
    <HomeLayout theme={props.theme}>
      <section className="row">
        <div>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.showacses(EShowcases.Blog, route)} />
        </div>
        <div>
          <iframe scrolling="no" width="100%" height={500} src={RouteMaster.showacses(EShowcases.Newsletter, route)} />
        </div>
      </section>
    </HomeLayout>
  )
}