import { useState, useEffect } from "react";
import { PUB_SUBDOMAIN } from "../utils/constants";

export function useRoute() {
  const [route, setRoute] = useState<string>(undefined as unknown as string);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const baseRoute: string = path.includes(PUB_SUBDOMAIN) ? PUB_SUBDOMAIN : '';
      setRoute(baseRoute);
    }
  }, []);

  return route;
}