import Buttons from "../../pages/docs/basics/Buttons";
import { EDoc, EExamples, EShowcases, EThemes } from "./types";
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
import DarkMode from "../../pages/docs/extra/DarkMode";
import Icons from "../../pages/docs/extra/Icons";
import Mobile from "../../pages/docs/extra/Mobile";
import Cards from "../../pages/docs/custom/Cards";
import Classes from "../../pages/docs/custom/Classes";
import Grids from "../../pages/docs/custom/Grids";
import Containers from "../../pages/docs/custom/Containers";
import Groups from "../../pages/docs/custom/Groups";
import Header from "../../pages/docs/layout/Header";
import Breadcrumbs from "../../pages/docs/navigation/Breadcrumbs";
import LayoutHeaderSection from "../../pages/examples/LayoutHeaderSection";
import MobileBreadcrumbs from "../../pages/examples/MobileBreadcrumbs";
import DesktopMenu from "../../pages/examples/DekstopMenu";
import LayoutHeaderNav from "../../pages/examples/LayoutHeaderNav";
import LayoutHeaderComplex from "../../pages/examples/LayoutHeaderComplex";
import MobileColumns from "../../pages/examples/MobileColumns";
import MobileMenu from "../../pages/examples/MobileMenu";
import MobileNav from "../../pages/examples/MobileNav";
import MobileTabs from "../../pages/examples/MobileTabs";
import MobileTypography from "../../pages/examples/MobileTypography";
import Colors from "../../pages/docs/custom/Colors";
import Footer from "../../pages/docs/layout/Footer";
import LayoutFooterSimple from "../../pages/examples/LayoutFooterSimple";
import LayoutFooterComplex from "../../pages/examples/LayoutFooterComplex";

export class RouteMaster {
  static baseRoute: string = '';

  static home(theme: EThemes, domain: string): string {
    const base = RouteMaster.getBase(domain);
    return `${base}${theme}/`;
  }

  static showcase(theme: EThemes, domain: string): string {
    const base = RouteMaster.getBase(domain);
    return `${base}${theme}/showcases.html`;
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
      case EDoc.Footer: return `${base}${theme}/pages/docs/layout/${htmlName(Footer)}`;
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
      case EDoc.Grids: return `${base}${theme}/pages/docs/custom/${htmlName(Grids)}`;
      case EDoc.Containers: return `${base}${theme}/pages/docs/custom/${htmlName(Containers)}`;
      case EDoc.Colors: return `${base}${theme}/pages/docs/custom/${htmlName(Colors)}`;
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
          case htmlName(Footer): return EDoc.Footer;
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
          case htmlName(Grids): return EDoc.Grids;
          case htmlName(Containers): return EDoc.Containers;
          case htmlName(Colors): return EDoc.Colors;
          case htmlName(Groups): return EDoc.Groups;
        }
      }
    }

    return undefined;
  }

  static example(route: EExamples, theme: EThemes, domain: string): string {
    const base = RouteMaster.getBase(domain);
    switch (route) {
      case EExamples.DekstopMenu: return `${base}${theme}/pages/examples/${htmlName(DesktopMenu)}`;
      case EExamples.LayoutHeaderSimple: return `${base}${theme}/pages/examples/${htmlName(LayoutHeaderNav)}`;
      case EExamples.LayoutHeaderComplex: return `${base}${theme}/pages/examples/${htmlName(LayoutHeaderComplex)}`;
      case EExamples.LayoutHeaderSection: return `${base}${theme}/pages/examples/${htmlName(LayoutHeaderSection)}`;
      case EExamples.LayoutFooterSimple: return `${base}${theme}/pages/examples/${htmlName(LayoutFooterSimple)}`;
      case EExamples.LayoutFooterComplex: return `${base}${theme}/pages/examples/${htmlName(LayoutFooterComplex)}`;
      case EExamples.MobileColumns: return `${base}${theme}/pages/examples/${htmlName(MobileColumns)}`;
      case EExamples.MobileMenu: return `${base}${theme}/pages/examples/${htmlName(MobileMenu)}`;
      case EExamples.MobileNav: return `${base}${theme}/pages/examples/${htmlName(MobileNav)}`;
      case EExamples.MobileBreadcrumbs: return `${base}${theme}/pages/examples/${htmlName(MobileBreadcrumbs)}`;
      case EExamples.MobileTabsNav: return `${base}${theme}/pages/examples/${htmlName(MobileTabs)}`;
      case EExamples.MobileTypography: return `${base}${theme}/pages/examples/${htmlName(MobileTypography)}`;
    }
  }

  static showacses(showcase: EShowcases, domain: string): string {
    const base = RouteMaster.getBase(domain);
    return `${base}showcase/${showcase}/${toKebabCase(showcase)}.html`;
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