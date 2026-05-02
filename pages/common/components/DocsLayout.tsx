import { useEffect, useState } from "react";
import HomeLayout from "./HomeLayout";
import { EDoc } from "../utils/types";
import { RouteMaster } from "../utils/routes";

export default function DocLayout({ theme, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(undefined);
  const [selectedDoc, setSelectedDoc] = useState<EDoc | undefined>(undefined);
  
  const toggleMenuOpen = () => {
    setIsMenuOpen(isMenuOpen === undefined ? true : false);
  };

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
                <button onClick={toggleMenuOpen}>
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
          <nav className={isMenuOpen === false ? "hide-on-mobile" : (isMenuOpen === undefined ? "hide-on-mobile" : "")}>
            <b>Basics</b>
            <ol>
              <li aria-selected={selectedDoc === EDoc.Typographty}>
                <a href={RouteMaster.doc(EDoc.Typographty, theme)}>Typography</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Buttons}>
                <a href={RouteMaster.doc(EDoc.Buttons, theme)}>Buttons</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Tags}>
                <a href={RouteMaster.doc(EDoc.Tags, theme)}>Tags</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Links}>
                <a href={RouteMaster.doc(EDoc.Links, theme)}>Links</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Lists}>
                <a href={RouteMaster.doc(EDoc.Lists, theme)}>Lists</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Blockquotes}>
                <a href={RouteMaster.doc(EDoc.Blockquotes, theme)}>Blokquotes</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Summary}>
                <a href={RouteMaster.doc(EDoc.Summary, theme)}>Summary</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Code}>
                <a href={RouteMaster.doc(EDoc.Code, theme)}>Code</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Table}>
                <a href={RouteMaster.doc(EDoc.Table, theme)}>Table</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Figures}>
                <a href={RouteMaster.doc(EDoc.Figures, theme)}>Figures</a>
              </li>
            </ol>
            <br />

            <b>Forms</b>
            <ol>
              <li aria-selected={selectedDoc === EDoc.FormsNormal}>
                <a href={RouteMaster.doc(EDoc.FormsNormal, theme)}>Normal</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.FormsCheck}>
                <a href={RouteMaster.doc(EDoc.FormsCheck, theme)}>Checks & Radios</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.FormsGrouped}>
                <a href={RouteMaster.doc(EDoc.FormsGrouped, theme)}>Grouped</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.FormsDisabled}>
                <a href={RouteMaster.doc(EDoc.FormsDisabled, theme)}>Disabled</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.FormsValidation}>
                <a href={RouteMaster.doc(EDoc.FormsValidation, theme)}>Validation</a>
              </li>
            </ol>
            <br />

            <b>Dialogs</b>
            <ol>
              <li aria-selected={selectedDoc === EDoc.Modal}>
                <a href={RouteMaster.doc(EDoc.Modal, theme)}>Modal</a>
              </li>
            </ol>
            <br />

            <b>Navigation</b>
            <ol>
              <li aria-selected={selectedDoc === EDoc.Navigation}>
                <a href={RouteMaster.doc(EDoc.Navigation, theme)}>Basic</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Tabs}>
                <a href={RouteMaster.doc(EDoc.Tabs, theme)}>Tabs</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Menu}>
                <a href={RouteMaster.doc(EDoc.Menu, theme)}>Menu</a>
              </li>
            </ol>
            <br />

            <b>Extra</b>
            <ol>
              <li aria-selected={selectedDoc === EDoc.DarkMode}>
                <a href={RouteMaster.doc(EDoc.DarkMode, theme)}>Dark Mode</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Icons}>
                <a href={RouteMaster.doc(EDoc.Icons, theme)}>Icons</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Mobile}>
                <a href={RouteMaster.doc(EDoc.Mobile, theme)}>Mobile</a>
              </li>
            </ol>
            <br />

            <b>Custom</b>
            <ol>
              <li aria-selected={selectedDoc === EDoc.Cards}>
                <a href={RouteMaster.doc(EDoc.Cards, theme)}>Cards</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Heroes}>
                <a href={RouteMaster.doc(EDoc.Heroes, theme)}>Heroes</a>
              </li>

              <li aria-selected={selectedDoc === EDoc.Columns}>
                <a href={RouteMaster.doc(EDoc.Columns, theme)}>Columns</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Containers}>
                <a href={RouteMaster.doc(EDoc.Containers, theme)}>Containers</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Groups}>
                <a href={RouteMaster.doc(EDoc.Groups, theme)}>Groups</a>
              </li>
              <li aria-selected={selectedDoc === EDoc.Classes}>
                <a href={RouteMaster.doc(EDoc.Classes, theme)}>Classes</a>
              </li>

              <li aria-selected={selectedDoc === EDoc.Theming}>
                <a href={RouteMaster.doc(EDoc.Theming, theme)}>Theming</a>
              </li>
            </ol>
            <br />

          </nav>
        </aside>
        <div>
          {children}
        </div>
      </div>
    </HomeLayout>
  )
}