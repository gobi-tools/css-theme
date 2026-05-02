import { useEffect, useState } from "react";
import { PUB_SUBDOMAIN } from "../utils/constants";
import { RouteMaster } from "../utils/routes";
import TopNav from "./TopNav";

export default function HomeLayout({ theme, children }) {
  const [baseRoute, setBaseRoute] = useState(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const baseRoute = path.includes(PUB_SUBDOMAIN) ? PUB_SUBDOMAIN : '';
      RouteMaster.baseRoute = baseRoute;
      setBaseRoute(baseRoute);
      console.log('set state base route to', baseRoute);
    }
  }, [baseRoute]);
  
  return (
    <>
      <TopNav theme={theme} />
      <main>
        <article>
          {children}
        </article>
      </main>
    </>
  )
}