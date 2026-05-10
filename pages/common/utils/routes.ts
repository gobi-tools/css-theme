import Buttons from "../../pages/docs/basics/Buttons";
import { EDoc, EShowcase, EThemes } from "./types";
import Typography from "../../pages/docs/basics/Typography";
import Blockquotes from "../../pages/docs/basics/Blockquotes";
import Code from "../../pages/docs/basics/Code";
import Figures from "../../pages/docs/basics/Figures";
import Links from "../../pages/docs/basics/Links";
import Summary from "../../pages/docs/basics/Summary";
import Table from "../../pages/docs/basics/Table";
import Tags from "../../pages/docs/basics/Tags";
import Lists from "../../pages/docs/basics/Lists";
import FormsCheckbox from "../../pages/docs/forms/FormsCheckbox";
import FormsDisabled from "../../pages/docs/forms/FormsDisabled";
import FormsGrouped from "../../pages/docs/forms/FormsGrouped";
import FormsNormal from "../../pages/docs/forms/FormsNormal";
import FormsValidation from "../../pages/docs/forms/FormsValidation";
import Modal from "../../pages/docs/dialogs/Modal";
import Navigation from "../../pages/docs/navigation/Navigation";
import Tabs from "../../pages/docs/navigation/Tabs";
import Menu from "../../pages/docs/navigation/Menu";
import DesktopMenu from "../../pages/showcase/DekstopMenu";
import LayoutHeaderNav from "../../pages/showcase/LayoutHeaderNav";
import LayoutHeaderComplex from "../../pages/showcase/LayoutHeaderComplex";
import MobileColumns from "../../pages/showcase/MobileColumns";
import MobileMenu from "../../pages/showcase/MobileMenu";
import MobileNav from "../../pages/showcase/MobileNav";
import MobileTabs from "../../pages/showcase/MobileTabs";
import MobileTypography from "../../pages/showcase/MobileTypography";
import DarkMode from "../../pages/docs/extra/DarkMode";
import Icons from "../../pages/docs/extra/Icons";
import Mobile from "../../pages/docs/extra/Mobile";
import Cards from "../../pages/docs/custom/Cards";
import Classes from "../../pages/docs/custom/Classes";
import Columns from "../../pages/docs/custom/Columns";
import Containers from "../../pages/docs/custom/Containers";
import Groups from "../../pages/docs/custom/Groups";
import Header from "../../pages/docs/layout/Header";
import LayoutHeaderSection from "../../pages/showcase/LayoutHeaderSection";
import Breadcrumbs from "../../pages/docs/navigation/Breadcrumbs";

export class RouteMaster {
  static baseRoute: string = '';

  static home(theme: EThemes, domain: string): string {
    const base = RouteMaster.getBase(domain);
    return `${base}${theme}/`;
  }

  static doc(route: EDoc, theme: EThemes, domain: string): string {
    const base = RouteMaster.getBase(domain);
    switch (route) {
      // basics
      case EDoc.Typographty: return `${base}${theme}/pages/docs/basics/${htmlName(Typography)}`;
      case EDoc.Buttons: return `${base}${theme}/pages/docs/basics/${htmlName(Buttons)}`;
      case EDoc.Blockquotes: return `${base}${theme}/pages/docs/basics/${htmlName(Blockquotes)}`;
      case EDoc.Code: return `${base}${theme}/pages/docs/basics/${htmlName(Code)}`;
      case EDoc.Figures: return `${base}${theme}/pages/docs/basics/${htmlName(Figures)}`;
      case EDoc.Lists: return `${base}${theme}/pages/docs/basics/${htmlName(Lists)}`;
      case EDoc.Links: return `${base}${theme}/pages/docs/basics/${htmlName(Links)}`;
      case EDoc.Summary: return `${base}${theme}/pages/docs/basics/${htmlName(Summary)}`;
      case EDoc.Table: return `${base}${theme}/pages/docs/basics/${htmlName(Table)}`;
      case EDoc.Tags: return `${base}${theme}/pages/docs/basics/${htmlName(Tags)}`;
      // forms
      case EDoc.FormsCheck: return `${base}${theme}/pages/docs/forms/${htmlName(FormsCheckbox)}`;
      case EDoc.FormsDisabled: return `${base}${theme}/pages/docs/forms/${htmlName(FormsDisabled)}`;
      case EDoc.FormsGrouped: return `${base}${theme}/pages/docs/forms/${htmlName(FormsGrouped)}`;
      case EDoc.FormsNormal: return `${base}${theme}/pages/docs/forms/${htmlName(FormsNormal)}`;
      case EDoc.FormsValidation: return `${base}${theme}/pages/docs/forms/${htmlName(FormsValidation)}`;
      // layout
      case EDoc.Header: return `${base}${theme}/pages/docs/layout/${htmlName(Header)}`;
      // modal
      case EDoc.Modal: return `${base}${theme}/pages/docs/dialogs/${htmlName(Modal)}`;
      // navigation
      case EDoc.Navigation: return `${base}${theme}/pages/docs/navigation/${htmlName(Navigation)}`;
      case EDoc.Breadcrumbs: return `${base}${theme}/pages/docs/navigation/${htmlName(Breadcrumbs)}`;
      case EDoc.Tabs: return `${base}${theme}/pages/docs/navigation/${htmlName(Tabs)}`;
      case EDoc.Menu: return `${base}${theme}/pages/docs/navigation/${htmlName(Menu)}`;
      // extra
      case EDoc.DarkMode: return `${base}${theme}/pages/docs/extra/${htmlName(DarkMode)}`;
      case EDoc.Icons: return `${base}${theme}/pages/docs/extra/${htmlName(Icons)}`;
      case EDoc.Mobile: return `${base}${theme}/pages/docs/extra/${htmlName(Mobile)}`;
      // custom
      case EDoc.Cards: return `${base}${theme}/pages/docs/custom/${htmlName(Cards)}`;
      case EDoc.Classes: return `${base}${theme}/pages/docs/custom/${htmlName(Classes)}`;
      case EDoc.Columns: return `${base}${theme}/pages/docs/custom/${htmlName(Columns)}`;
      case EDoc.Containers: return `${base}${theme}/pages/docs/custom/${htmlName(Containers)}`;
      case EDoc.Groups: return `${base}${theme}/pages/docs/custom/${htmlName(Groups)}`;
    }
  }

  static getDocFromRoute(path: string): EDoc | undefined {
    const items = path.split('/docs/');
    const last = items.pop();
    const [folder, doc] = last.split('/');

    switch (folder) {
      case 'basics': {
        switch (doc) {
          case htmlName(Typography): return EDoc.Typographty;
          case htmlName(Buttons): return EDoc.Buttons;
          case htmlName(Blockquotes): return EDoc.Blockquotes;
          case htmlName(Code): return EDoc.Code;
          case htmlName(Figures): return EDoc.Figures;
          case htmlName(Links): return EDoc.Links;
          case htmlName(Lists): return EDoc.Lists;
          case htmlName(Summary): return EDoc.Summary;
          case htmlName(Table): return EDoc.Table;
          case htmlName(Tags): return EDoc.Tags;
        }
      }
      case 'forms': {
        switch (doc) {
          case htmlName(FormsCheckbox): return EDoc.FormsCheck;
          case htmlName(FormsDisabled): return EDoc.FormsDisabled;
          case htmlName(FormsGrouped): return EDoc.FormsGrouped;
          case htmlName(FormsNormal): return EDoc.FormsNormal;
          case htmlName(FormsValidation): return EDoc.FormsValidation;
        }
      }
      case 'layout': {
        switch (doc) {
          case htmlName(Header): return EDoc.Header;
        }
      }
      case 'dialogs': {
        switch (doc) {
          case htmlName(Modal): return EDoc.Modal;
        }
      }
      case 'navigation': {
        switch (doc) {
          case htmlName(Navigation): return EDoc.Navigation;
          case htmlName(Breadcrumbs): return EDoc.Breadcrumbs;
          case htmlName(Tabs): return EDoc.Tabs;
          case htmlName(Menu): return EDoc.Menu;
        }
      }
      case 'extra': {
        switch (doc) {
          case htmlName(DarkMode): return EDoc.DarkMode;
          case htmlName(Icons): return EDoc.Icons;
          case htmlName(Mobile): return EDoc.Mobile;
        }
      }
      case 'custom': {
        switch (doc) {
          case htmlName(Cards): return EDoc.Cards;
          case htmlName(Classes): return EDoc.Classes;
          case htmlName(Columns): return EDoc.Columns;
          case htmlName(Containers): return EDoc.Containers;
          case htmlName(Groups): return EDoc.Groups;
        }
      }
    }

    return undefined;
  }

  static showcase(route: EShowcase, theme: EThemes, domain: string): string {
    const base = RouteMaster.getBase(domain);
    switch (route) {
      case EShowcase.DekstopMenu: return `${base}${theme}/pages/showcase/${htmlName(DesktopMenu)}`;
      case EShowcase.LayoutHeaderSimple: return `${base}${theme}/pages/showcase/${htmlName(LayoutHeaderNav)}`;
      case EShowcase.LayoutHeaderComplex: return `${base}${theme}/pages/showcase/${htmlName(LayoutHeaderComplex)}`;
      case EShowcase.LayoutHeaderSection: return `${base}${theme}/pages/showcase/${htmlName(LayoutHeaderSection)}`;
      case EShowcase.MobileColumns: return `${base}${theme}/pages/showcase/${htmlName(MobileColumns)}`;
      case EShowcase.MobileMenu: return `${base}${theme}/pages/showcase/${htmlName(MobileMenu)}`;
      case EShowcase.MobileNav: return `${base}${theme}/pages/showcase/${htmlName(MobileNav)}`;
      case EShowcase.MobileTabsNav: return `${base}${theme}/pages/showcase/${htmlName(MobileTabs)}`;
      case EShowcase.MobileTypography: return `${base}${theme}/pages/showcase/${htmlName(MobileTypography)}`;
    }
  }

  private static getBase(domain?: string): string {
    if (!domain) return '/';
    return domain === '' ? '/' : `/${domain}/`;
  }
}

function htmlName(elem: React.FC<any>): string {
  return `${toKebabCase(elem.name)}.html`;
}

function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
}