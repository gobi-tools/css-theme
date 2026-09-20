import { useRoute } from "../effects/useRoute";
import { PUB_SUBDOMAIN } from "../utils/constants";
import { RouteMaster } from "../utils/routes";
import { EThemes, ELinks } from "../utils/types";

export default function TopNav({ theme }) {

  const route = useRoute();

  const onThemeChange = (e: { target: { value: string } }) => {
    const newTheme = e.target.value as EThemes;

    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes(theme)) {
        const newPath = path.replace(theme, newTheme);
        window.location.href = newPath;
      } else {
        if (path.includes(PUB_SUBDOMAIN)) {
          const splitPath = path.split('/');
          const index = splitPath.indexOf(PUB_SUBDOMAIN) + 1;
          splitPath.splice(index, 0, newTheme);
          const newPath = splitPath.join('/');
          window.location.href = newPath;
        } else {
          const newPath = `/${newTheme}${path}`;
          window.location.href = newPath;
        }
      }
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <a href={RouteMaster.home(theme, route)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href={RouteMaster.showcase(theme, route)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
            <span>Showcase</span>
          </a>
        </li>
        <div></div>
        <li className="hide-on-desktop">
          <a href={ELinks.GitHub} target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <select name="theme-selector" onChange={onThemeChange}>
            <option value={EThemes.Default} selected={theme === EThemes.Default}>Default</option>
            <option value={EThemes.Blog} selected={theme === EThemes.Blog}>Blog</option>
            <option value={EThemes.App} selected={theme === EThemes.App}>App</option>

            <option value={EThemes.Delivery} selected={theme === EThemes.Delivery}>Delivery</option>
            <option value={EThemes.Landing} selected={theme === EThemes.Landing}>Landing</option>
            <option value={EThemes.Newsletter} selected={theme === EThemes.Newsletter}>Newsletter</option>
          </select>
        </li>
        <li className="hide-on-mobile">
          <a href={ELinks.GitHub} target="blank">
            <button type="reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </button>
          </a>
        </li>
      </ul>
    </nav>
  )
}