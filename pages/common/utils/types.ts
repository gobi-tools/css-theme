export class Routes {
  static home = {
    get path(): string {
      return '/';
    },
    url(): string {
      return Routes.home.path;
    },
    href(theme: EThemes): string {
      return `${Routes.home.path}?theme=${theme}`;
    },
  };
  static docs = {
    get path(): string {
      return '/docs';
    },
    url(): string {
      return `${Routes.docs.path}/:doc`
    },
    href(doc: EDoc, theme: EThemes, width?: EContainerWidth): string {
      return `${Routes.docs.path}/${doc}?theme=${theme}&width=${width ?? EContainerWidth.Wide}`;
    },
  };
  static theme = {
    get path(): string {
      return '/theme-maker';
    },
    url(): string {
      return `${Routes.theme.path}`;
    },
    href(theme: EThemes): string {
      return `${Routes.theme.path}?theme=${theme}`;
    },
  };
  static showcase = {
    get path(): string {
      return '/showcase';
    },
    url(): string {
      return `${Routes.showcase.path}/:item`;
    },
    href(item: EShowcase, theme: EThemes): string {
      return `${Routes.showcase.path}/${item}?theme=${theme}`;
    },
  };
}

export enum EDoc {
  None = '',
  // base
  Typographty = 'typography',
  Buttons = 'buttons',
  Tags = 'tags',
  Links = 'links',
  Lists = 'lists',
  Blockquotes = 'blockquotes',
  Summary = 'summary',
  Code = 'code',
  Table = 'table',
  Figures = 'figures',
  // forms
  FormsNormal = 'forms-normal',
  FormsCheck = 'forms-check',
  FormsGrouped = 'forms-grouped',
  FormsDisabled = 'forms-disabled',
  FormsValidation = 'forms-validation', 
  // dialogs
  Modal = 'modal',
  // navitation
  Navigation = 'navigation',
  Menu = 'menu',
  Tabs = 'tabs',
  // extra
  Icons = 'icons',
  DarkMode = 'dark-mode',
  Mobile = 'mobile',
  // custom - elements
  Cards = 'cards',
  Heroes = 'heroes',
  // custom - layout
  Columns = 'cols',
  Containers = 'containers',
  Groups = 'groups',
  // custom - classes
  Classes = 'classes',
  // custom - theming
  Theming = 'theming',
};

export enum EShowcase {
  MobileNav = 'mobile-nav',
  MobileMenu = 'mobile-menu',
  DekstopMenu = 'desktop-menu',
  MobileTabsNav = 'mobile-tabs-nav',
  MobileColumns = 'mobile-columns',
  MobileTypography = 'mobile-typography',
  LayoutHeroSimple = 'layout-hero-simple',
  LayoutHeroSub = 'layout-hero-sub',
};

export enum ELinks {
  // own css github
  GitHub = 'https://github.com/gobi-tools/css-theme',
  // icon providers
  Lucide = 'https://lucide.dev/',
  FontAwesome = 'https://fontawesome.com/',
  HugeIcons = 'https://hugeicons.com/',
  // other things
  CSS3 = 'https://en.wikipedia.org/wiki/CSS#CSS_3',
  Syntax_Hilite = 'http://hilite.me/',
  Syntax_HighlightJS = 'https://highlightjs.org/',
  HtmlFormsDocs = 'https://www.w3schools.com/html/html_forms.asp',
  Bootstrap = 'https://getbootstrap.com/docs/5.3/examples/grid/',
};

export enum EThemes {
  Default = 'default',
  App = 'app',
  Writing = 'writing',
  Scholar = 'scholar',
  Bold = 'bold',
  Sunset = 'sunset',
  Pink = 'pink',
  Forest = 'forest',
  Betty = 'betty',
  Gold = 'gold',
};

export enum EContainerWidth {
  Normal = 'normal',
  Medium = 'medium',
  Wide = 'wide',
};

export const PRODUCT_NAME = "CSS Theme";