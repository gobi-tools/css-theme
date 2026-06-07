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
  Cards = 'cards',
  // forms
  FormsNormal = 'forms-normal',
  FormsCheck = 'forms-check',
  FormsGrouped = 'forms-grouped',
  FormsDisabled = 'forms-disabled',
  FormsValidation = 'forms-validation', 
  // layout
  Header = 'header',
  Footer = 'footer',
  Groups = 'groups',
  Modal = 'modal',
  // navigation
  Navigation = 'navigation',
  Breadcrumbs = 'breadcrumbs',
  Menu = 'menu',
  Tabs = 'tabs',
  // extra
  Icons = 'icons',
  DarkMode = 'dark-mode',
  Mobile = 'mobile',
  // custom - layout
  Grids = 'grid',
  Containers = 'containers',
  // custom - colors
  Colors = 'colors',
  // custom - classes
  Classes = 'classes',
};

export enum EExamples {
  MobileNav = 'mobile-nav',
  MobileBreadcrumbs = 'mobile-breadcrumbs',
  MobileMenu = 'mobile-menu',
  DekstopMenu = 'desktop-menu',
  MobileTabsNav = 'mobile-tabs-nav',
  MobileColumns = 'mobile-columns',
  MobileTypography = 'mobile-typography',
  LayoutHeaderSimple = 'layout-header-simple',
  LayoutHeaderComplex = 'layout-header-sub',
  LayoutHeaderSection = 'layout-header-section',
  LayoutFooterSimple = 'layout-footer-simple',
  LayoutFooterComplex = 'layout-footer-complex',
};

export enum EShowcases {
  Basic = 'basic',
  Blog = 'blog',
  Newsletter = 'newsletter',
  FoodDelivery = 'food-delivery',
  LandingPage = 'landing-page',
  App = 'app',
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
  Blog = 'blog',
  Delivery = 'delivery',
  Landing = 'landing',
  Newsletter = 'newsletter',
};

export const PRODUCT_NAME = "CSS Theme";