import { useEffect, useState } from "react";
import { PUB_SUBDOMAIN } from "../utils/constants";
import { RouteMaster } from "../utils/routes";
import TopNav from "./TopNav";

export default function HomeLayout({ theme, children }) {
  const [baseRoute, setBaseRoute] = useState(undefined);

  useEffect(() => {
    console.log('I AM HERE');
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      RouteMaster.baseRoute = path.includes(PUB_SUBDOMAIN) ? PUB_SUBDOMAIN : '';
      console.log('set route to', RouteMaster.baseRoute);
      setBaseRoute(RouteMaster.baseRoute);
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