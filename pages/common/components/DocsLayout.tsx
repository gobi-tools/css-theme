import { useEffect, useState } from "react";
import HomeLayout from "./HomeLayout";
import { EDoc } from "../utils/types";
import { RouteMaster } from "../utils/routes";
import { useRoute } from "../effects/useRoute";

export default function DocLayout({ theme, children }) {
  const route = useRoute();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<EDoc | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const doc = RouteMaster.getDocFromRoute(window.location.pathname)
      setSelectedDoc(doc);
    }
  }, []);

  return (
    <HomeLayout theme={theme}>
      <div className="row">
        <aside>
          <div className="hide-on-desktop group">
            <div className="row">
              <div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {
                    isMenuOpen ?
                      (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>) :
                      (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" /></svg>)
                  }
                </button>
              </div>
              <span>
                <b>
                  Chapters
                </b>
              </span>
            </div>
            <hr />
          </div>
          <div className={isMenuOpen === false ? "hide-on-mobile" : (isMenuOpen === undefined ? "hide-on-mobile" : "")}>
            <menu>
              <b>Basics</b>
              <li aria-selected={selectedDoc === EDoc.Typographty}>
                <a href={RouteMaster.doc(EDoc.Typographty, theme, route)}>Typography</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Buttons}>
                <a href={RouteMaster.doc(EDoc.Buttons, theme, route)}>Buttons</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Tags}>
                <a href={RouteMaster.doc(EDoc.Tags, theme, route)}>Tags</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Lists}>
                <a href={RouteMaster.doc(EDoc.Lists, theme, route)}>Lists</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Links}>
                <a href={RouteMaster.doc(EDoc.Links, theme, route)}>Links</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Blockquotes}>
                <a href={RouteMaster.doc(EDoc.Blockquotes, theme, route)}>Blokquotes</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Summary}>
                <a href={RouteMaster.doc(EDoc.Summary, theme, route)}>Summary</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Code}>
                <a href={RouteMaster.doc(EDoc.Code, theme, route)}>Code</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Table}>
                <a href={RouteMaster.doc(EDoc.Table, theme, route)}>Table</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Figures}>
                <a href={RouteMaster.doc(EDoc.Figures, theme, route)}>Figures</a>
              </li>
            </menu>

            <menu>
              <b>Forms</b>
              <li aria-selected={selectedDoc === EDoc.FormsNormal}>
                <a href={RouteMaster.doc(EDoc.FormsNormal, theme, route)}>Normal</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.FormsCheck}>
                <a href={RouteMaster.doc(EDoc.FormsCheck, theme, route)}>Checks & Radios</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.FormsGrouped}>
                <a href={RouteMaster.doc(EDoc.FormsGrouped, theme, route)}>Grouped</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.FormsDisabled}>
                <a href={RouteMaster.doc(EDoc.FormsDisabled, theme, route)}>Disabled</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.FormsValidation}>
                <a href={RouteMaster.doc(EDoc.FormsValidation, theme, route)}>Validation</a>
              </li>
            </menu>

            <menu>
              <b>Layout</b>
              <li aria-selected={selectedDoc === EDoc.Header}>
                <a href={RouteMaster.doc(EDoc.Header, theme, route)}>Headers</a>
              </li>
            </menu>

            <menu>
              <b>Dialogs</b>
              <li aria-selected={selectedDoc === EDoc.Modal}>
                <a href={RouteMaster.doc(EDoc.Modal, theme, route)}>Modal</a>
              </li>
            </menu>

            <menu>
              <b>Navigation</b>
              <li aria-selected={selectedDoc === EDoc.Navigation}>
                <a href={RouteMaster.doc(EDoc.Navigation, theme, route)}>Basic</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Breadcrumbs}>
                <a href={RouteMaster.doc(EDoc.Breadcrumbs, theme, route)}>Breadcrumbs</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Menu}>
                <a href={RouteMaster.doc(EDoc.Menu, theme, route)}>Menu</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Tabs}>
                <a href={RouteMaster.doc(EDoc.Tabs, theme, route)}>Tabs</a>
              </li>
            </menu>

            <menu>
              <b>Extra</b>
              <li aria-selected={selectedDoc === EDoc.DarkMode}>
                <a href={RouteMaster.doc(EDoc.DarkMode, theme, route)}>Dark Mode</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Icons}>
                <a href={RouteMaster.doc(EDoc.Icons, theme, route)}>Icons</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Mobile}>
                <a href={RouteMaster.doc(EDoc.Mobile, theme, route)}>Mobile</a>
              </li>
            </menu>

            <menu>
              <b>Custom</b>
              <li aria-selected={selectedDoc === EDoc.Cards}>
                <a href={RouteMaster.doc(EDoc.Cards, theme, route)}>Cards</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Grids}>
                <a href={RouteMaster.doc(EDoc.Grids, theme, route)}>Grids</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Containers}>
                <a href={RouteMaster.doc(EDoc.Containers, theme, route)}>Containers</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Groups}>
                <a href={RouteMaster.doc(EDoc.Groups, theme, route)}>Groups</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Colors}>
                <a href={RouteMaster.doc(EDoc.Colors, theme, route)}>Colors</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Classes}>
                <a href={RouteMaster.doc(EDoc.Classes, theme, route)}>Classes</a>
              </li>
            </menu>
          </div>
        </aside>
        <div>
          {children}
        </div>
      </div>
    </HomeLayout>
  )
}