import{a as At}from"./chunk-KC2WVVTY.js";import{a as Ot}from"./chunk-4F2ROYBB.js";import{a as Rt}from"./chunk-MDCAHXJR.js";import{a as Gt}from"./chunk-UPLXQAUZ.js";import{a as Wt}from"./chunk-XF2WV4YZ.js";import{a as jt}from"./chunk-ESLRQYEZ.js";import{a as It}from"./chunk-SVFQNSTA.js";import{a as zt}from"./chunk-PRBPLC6K.js";import{a as Pt}from"./chunk-HRT75PLO.js";import{a as Ht}from"./chunk-GSZ6UK6V.js";import{a as Ft}from"./chunk-6WZ2BZS5.js";import{a as qt}from"./chunk-C74J2UAQ.js";import{a as Bt}from"./chunk-K4XVBUED.js";import{b as $t,c as Et,d as Dt,e as a}from"./chunk-X3RR2HUG.js";import{a as qe}from"./chunk-7AZBNJU6.js";import{a as l}from"./chunk-7X4DHW36.js";import{useEffect as co,useState as Kt}from"https://esm.sh/react@19.2.6";import{useState as Qt,useEffect as Jt}from"https://esm.sh/react@19.2.6";function S(){let[e,t]=Qt(void 0);return Jt(()=>{if(typeof window<"u"){let F=window.location.pathname.includes(qe)?qe:"";t(F)}},[]),e}l(S,"useRoute");import{jsx as u,jsxs as E}from"https://esm.sh/react@19.2.6/jsx-runtime";function Fe({theme:e}){let t=S();return E(p,{theme:e,children:[E("section",{className:"row",children:[E("div",{children:[E("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",u("code",{children:"reset"})," type buttons)."]}),E("p",{children:[u("button",{children:"Button"}),u("button",{type:"reset",children:"Button"})]})]}),u("div",{children:u(a,{lang:"xml",children:`<button>Button</button>
<button type="reset">
  Button
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["Both types can be marked as ",u("code",{children:"disabled"}),", meaning no interaction will be possible with them."]}),E("p",{children:[u("button",{disabled:!0,children:"Disabled"}),u("button",{type:"reset",disabled:!0,children:"Disabled"})]})]}),u("div",{children:u(a,{lang:"xml",children:`<button disabled>
  Button
</button>
<button type="reset" disabled>
  Button
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[u("p",{children:"Buttons can be improved by adding svg icons, either to the left or to the right of the main button title."}),E("p",{children:[E("button",{children:[E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),u("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),u("span",{children:"Home"})]}),E("button",{type:"reset",children:[u("span",{children:"Play"}),E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M21 4v16"}),u("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]}),u("p",{children:E("small",{children:["You can learn more about icons ",u("a",{href:i.doc("icons",e,t),children:"here"}),"."]})})]}),u("div",{children:u(a,{lang:"xml",children:`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[u("p",{children:"You can even create icon-only buttons by completely omitting the title."}),E("p",{children:[u("button",{children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M4 11a9 9 0 0 1 9 9"}),u("path",{d:"M4 4a16 16 0 0 1 16 16"}),u("circle",{cx:"5",cy:"19",r:"1"})]})}),u("button",{type:"reset",children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u("circle",{cx:"12",cy:"12",r:"4"})]})})]})]}),u("div",{children:u(a,{lang:"xml",children:`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["By default, buttons are styled using the ",u("b",{children:"primary"})," color, which impacts their background, border or text color. You can change that by applying classes like ",u("code",{children:"secondary"}),", ",u("code",{children:"success"})," or ",u("code",{children:"error"}),"."]}),E("p",{className:"flex",children:[u("button",{className:"secondary",children:"Action"}),u("button",{className:"success",children:"Confirm"}),E("button",{type:"reset",className:"error",children:[E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})]}),u("span",{children:"Cancel"})]})]}),u("p",{children:E("small",{children:["You can learn more about colors ",u("a",{href:i.doc("colors",e,t),children:"here"}),"."]})})]}),u("div",{children:u(a,{lang:"xml",children:`<button
  class="secondary">
  Action
</button>

<button 
  class="success">
  Confirm
</button>

<button tsype="reset" class="error">
  <svg ...></svg>
  <span>Cancel</span>
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",u("code",{children:"group"})," role."]}),E("p",{role:"group",children:[u("button",{children:"Button 1"}),u("button",{type:"reset",children:"Button 2"}),u("button",{type:"reset",children:"Button 3"})]}),E("p",{role:"group",children:[u("button",{type:"reset",children:u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}),u("button",{type:"reset",children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M7 10v12"}),u("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}),u("button",{children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M12 2v13"}),u("path",{d:"m16 6-4-4-4 4"}),u("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})]})})]}),E("p",{role:"group",children:[u("button",{type:"reset",children:"Prev"}),u("button",{type:"reset",children:"1"}),u("button",{type:"reset",children:"2"}),u("button",{type:"reset",children:"3"}),u("button",{type:"reset",children:"Next"})]}),u("p",{children:E("small",{children:["You can learn more about groups ",u("a",{href:i.doc("groups",e,t),children:"here"}),"."]})})]}),u("div",{children:u(a,{lang:"xml",children:`<p role="group">
  <button>
    Button 1
  </button>
  <button type="reset">
    Button 2
  </button>
  <button type="reset">
    Button 3
  </button>
</p>

<p role="group">
  <button type="reset">
    <svg...></svg>
  </button>
  <button type="reset">
    <svg ...></svg>
  </button>
  <button>
    <svg...></svg>
  </button>
</p>

<p role="group">
  <button type="reset">
    Prev
  </button>
  <button type="reset">
    1
  </button>
  ...
  <button type="reset">
    Next
  </button>
</p>`})})]})]})}l(Fe,"Buttons");import{jsx as x,jsxs as ne}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ae({theme:e}){return ne(p,{theme:e,children:[ne("section",{className:"row",children:[ne("div",{children:[ne("p",{children:["Typography is based purely on ",x("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),x("div",{children:x(a,{lang:"xml",children:`<p>
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor 
  incididunt ut labore et 
  dolore magna aliqua. 
  Ut enim ad minim veniam, 
  quis nostrud exercitation 
  ullamco laboris nisi ut 
  aliquip ex ea 
  commodo consequat.
</p>`})})]}),ne("section",{className:"row",children:[ne("div",{children:[ne("p",{children:["To all sorts of text modifiers, like ",x("code",{children:"b"}),", ",x("code",{children:"i"}),", ",x("code",{children:"em"})," tags and many more."]}),x("p",{children:x("i",{children:"italic"})}),x("p",{children:x("em",{children:"emphasized"})}),x("p",{children:x("dfn",{children:"definition"})}),x("p",{children:x("cite",{children:"citation"})}),x("p",{children:x("b",{children:"bold"})}),x("p",{children:x("strong",{children:"strong"})}),x("p",{children:x("del",{children:"deleted"})}),x("p",{children:x("s",{children:"corrected"})}),x("p",{children:x("u",{children:"underlined"})}),x("p",{children:x("q",{children:"quotation"})})]}),x("div",{children:x(a,{lang:"xml",children:`<i>italic</i>
<em>emphasized</em>
<dfn>definition</dfn>
<cite>citation</cite>

<b>bold</b>
<strong>strong</strong>
<del>deleted</del>
<s>corrected</s>
<u>underlined</u>
<q>quotation</q>

<small>smaller</small>
<sub>subscript</sub>
<sup>supescript</sup>`})})]}),ne("section",{className:"row",children:[ne("div",{children:[ne("p",{children:["Finally, it supports all six ",x("code",{children:"heading"})," types."]}),x("h1",{children:"Heading 1"}),x("h2",{children:"Heading 2"}),x("h3",{children:"Heading 3"}),x("h4",{children:"Heading 4"}),x("h5",{children:"Heading 5"}),x("h6",{children:"Heading 6"})]}),x("div",{children:x(a,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),ne("section",{className:"row",children:[ne("div",{children:[ne("p",{children:["As well as the ability to group headings and associated content with ",x("code",{children:"hgroup"}),"."]}),ne("hgroup",{children:[x("h1",{children:"Heading 1"}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),x("div",{children:x(a,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}l(Ae,"Typography");import{jsx as N,jsxs as ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function Oe({theme:e}){let t=S();return ee(p,{theme:e,children:[ee("section",{className:"row",children:[ee("div",{children:[N("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),N("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),N("div",{children:N(a,{lang:"xml",children:`<blockquote>
  Lorem ipsum ...
</blockquote>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[N("p",{children:"It's not just text that can be included in a blockquote element, but code, icons, and many other elements."}),N("blockquote",{children:ee("p",{children:["Press ",N("kbd",{children:"Ctrl + Q"})," to quit"]})}),N("blockquote",{children:ee("hgroup",{children:[ee("p",{role:"group",children:[ee("svg",{xmlns:" http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N("circle",{cx:"12",cy:"12",r:"10"}),N("path",{d:"M12 16v-4"}),N("path",{d:"M12 8h.01"})]}),N("span",{children:"Information"})]}),ee("p",{children:["Delivery for ",N("b",{children:"Tuesday at 08:00."})]})]})}),N("p",{children:ee("small",{children:["You can learn more about groups ",N("a",{href:i.doc("groups",e,t),children:"here"})," and about icons ",N("a",{href:i.doc("icons",e,t),children:"here"}),"."]})})]}),N("div",{children:N(a,{lang:"xml",children:`<blockquote>
  <p>
    Press <kbd>Ctrl + Q</kbd> to quit
  </p>
</blockquote>
            
<blockquote>
  <hgroup>
    <p role="group">
      <svg ... ></svg>
      <span>Information</span>
    </p>
    <p>
      Delivery for <b>Tuesday at 08:00</b>.
    </p>
  </hgroup>
</blockquote>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[ee("p",{children:["Blockquotes can also be styled using the ",N("code",{children:"success"}),", ",N("code",{children:"error"}),", ",N("code",{children:"primary"})," and ",N("code",{children:"secondary"})," classes."]}),N("blockquote",{className:"success",children:ee("hgroup",{children:[N("h4",{children:"Success"}),N("p",{children:"The operation was successfull"})]})}),N("blockquote",{className:"error",children:ee("hgroup",{children:[N("p",{children:"Unknown error"}),N("p",{children:ee("code",{children:["Server response is ",N("b",{children:"Error 500"})]})})]})}),N("blockquote",{className:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),N("blockquote",{className:"secondary",children:N("hgroup",{children:ee("hgroup",{children:[N("h4",{children:"Title"}),N("p",{children:"Important Information"}),N("p",{children:N("button",{children:"Click me"})})]})})}),N("hgroup",{children:N("p",{children:ee("small",{children:["You can learn more about colors ",N("a",{href:i.doc("colors",e,t),children:"here"}),"."]})})})]}),N("div",{children:N(a,{lang:"xml",children:`<blockquote class="success">
  <hgroup>
    <h4>Success</h4>
    <p>
      The operation was successfull
    </p>
  </hgroup>
</blockquote>

<blockquote class="error">
  <hgroup>
    <p>Unknown error</p>
    <p>
      <code>
        Server sesponse is <b>Error 500</b>
      </code>
    </p>
  </hgroup>
</blockquote>

<blockquote class="primary">
  Lorem ipsum ...
</blockquote>

<blockquote class="secondary">
  <hgroup>
    <h4>Title</h4>
    <p>
      Important Information
    </p>
    <button>
      Click me
    </button>
  </hgroup>
</blockquote>`})})]})]})}l(Oe,"Blockquotes");import{jsx as be,jsxs as Be}from"https://esm.sh/react@19.2.6/jsx-runtime";function Re({theme:e}){return be(p,{theme:e,children:be("section",{children:Be("div",{className:"row",children:[Be("div",{children:[be("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),Be("p",{children:["Inline code ",be("code",{children:"console.log('abc')"})]}),Be("p",{children:["Keyboard shortcut ",be("kbd",{children:"Ctrl + S"})]}),Be("figure",{children:[be(a,{lang:"xml",children:"console.log('abc')"}),be("figcaption",{children:"Code block"})]}),Be("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",be("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",be("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),be("div",{children:be(a,{lang:"xml",children:`<p>
  Inline code <code>console.log('abc')</code>
</p>
<p>
  Keyboard shortcut <kbd>Ctrl + S</kbd>
</p>
<pre>
  <code>console.log('abc')</code>
</pre>`})})]})})})}l(Re,"Code");import{jsx as he,jsxs as ke}from"https://esm.sh/react@19.2.6/jsx-runtime";function We({theme:e}){let t=S();return ke(p,{theme:e,children:[ke("section",{className:"row",children:[ke("div",{children:[he("p",{children:"Figures can contain a single image and an associated caption."}),ke("figure",{children:[he("img",{width:"640",height:"480",src:i.resImg("16-640x480.jpg",t),alt:"header image"}),he("figcaption",{children:"Sample caption"})]})]}),he("div",{children:he(a,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),ke("section",{className:"row",children:[ke("div",{children:[he("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),ke("figure",{children:[ke("figure",{children:[he("img",{width:"200",height:"240",src:i.resImg("16-200x240.jpg",t),alt:"header image"}),he("figcaption",{children:"First image"})]}),ke("figure",{children:[he("img",{width:"240",height:"240",src:i.resImg("16-240x240.jpg",t),alt:"second image"}),he("figcaption",{children:"Second image"})]}),he("figcaption",{children:"Figure group"})]})]}),he("div",{children:he(a,{lang:"xml",children:`<figure>
  <figure>
    <img 
      width="200" 
      height="240" 
      src="..." 
      alt="first image" />
    <figcaption>
      First image
    </figcaption>
  </figure>
  
  <figure>
    <img 
      width="240" 
      height="240" 
      src="..." 
      alt="second image" />
    <figcaption>
      Second image
    </figcaption>
  </figure>
  
  <figcaption>
    Figure group
  </figcaption>
</figure>`})})]})]})}l(We,"Figures");import{jsx as ie,jsxs as Ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function Pe({theme:e}){return Ce(p,{theme:e,children:[Ce("section",{className:"row",children:[Ce("div",{children:[ie("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),Ce("ul",{children:[ie("li",{children:ie("a",{href:"",children:"website.com"})}),ie("li",{children:ie("a",{href:"",children:"email@test.com"})}),ie("li",{children:ie("a",{href:"",children:"/#location"})})]})]}),ie("div",{children:ie(a,{lang:"xml",children:`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location">
  /#location
</a>`})})]}),Ce("section",{className:"row",children:[Ce("div",{children:[ie("p",{children:"Headigns can be used together with empty fragment links to reference locations in the same document."}),Ce("h1",{"data-hover":!0,children:["Section 1",ie("a",{href:"#section_1"})]}),Ce("h2",{children:["Section 1.2",ie("a",{href:"#section_12"})]}),Ce("h3",{children:["Section 1.2.1",ie("a",{href:"#section_121"})]})]}),ie("div",{children:ie(a,{lang:"xml",children:`<h1>
  Section 1
  <a href="#section_1"></a>
</h1>
<h2>
  Section 1.2
  <a href="#section_12"></a>
</h2>
<h3>
  Section 1.2.1
  <a href="#section_121"></a>
</h3>
`})})]})]})}l(Pe,"Links");import{jsx as M,jsxs as _}from"https://esm.sh/react@19.2.6/jsx-runtime";function ze({theme:e}){let t=S();return _(p,{theme:e,children:[_("section",{className:"row",children:[_("div",{children:[M("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),_("details",{children:[M("summary",{children:"Info"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),_("details",{children:[M("summary",{children:"More info Info"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),M("div",{children:M(a,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),_("section",{className:"row",children:[_("div",{children:[_("p",{children:["This basic summary can be placed inside an ",M("code",{children:"article"})," and combined with the ",M("code",{children:"primary"}),", ",M("code",{children:"success"})," or ",M("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),M("article",{children:_("details",{open:!0,children:[M("summary",{children:"Note"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),M("article",{className:"primary",children:_("details",{children:[M("summary",{children:"Info"}),_("p",{children:["Larn more ",M("a",{href:"",children:"here"})]})]})}),M("article",{className:"success",children:_("details",{children:[M("summary",{children:"Success"}),_("p",{children:["Operation finished ",M("code",{children:"OK"})]})]})}),M("article",{className:"error",children:_("details",{children:[M("summary",{children:"Error"}),_("div",{children:[M("p",{children:"Unknown error occurred"}),M("hr",{}),M("button",{children:"Acknowledge"})]})]})}),M("p",{children:_("small",{children:["You can learn more about colors ",M("a",{href:i.doc("colors",e,t),children:"here"})," and cards ",M("a",{href:i.doc("cards",e,t),children:"here"}),"."]})})]}),M("div",{children:M(a,{lang:"xml",children:`<article>
  <details>
    <summary>Note</summary>
    <p>
      Lorem ipsum ...
    </p>
  </details>
</article>
          
<article class="primary">
  <details>
    <summary>Info</summary>
    <p>
      Learn more <a href="...">here</a>
    </p>
  </details>
</article>

<article class="success">
  <details>
    <summary>Success</summary>
    <p>
      Operation finished 
      <code>
        OK
      </code>
    </p>
  </details>
</article>
  
<article class="error">
  <details>
    <summary>Error</summary>
    <div>
      <p>
        Unknown error occurred
      </p>
      <button>Ack</button>
    </div>
  </details>
</article>`})})]}),_("section",{className:"row",children:[_("div",{children:[_("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",M("code",{children:"article"}),", you can form an accordion menu:"]}),_("article",{children:[_("details",{name:"menu",children:[M("summary",{children:"Option 1"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),_("details",{name:"menu",open:!0,children:[M("summary",{children:"Option 2"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),_("details",{name:"menu",children:[M("summary",{children:"Option 3"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),M("div",{children:M(a,{lang:"xml",children:`
<article>
  <details name="menu">
    <summary>Option 1</summary>
    <p>...</p>
  </details>

  <details name="menu">
    <summary>Option 2</summary>
    <p>...</p>
  </details>

  <details name="menu">
    <summary>Option 3</summary>
    <p>...</p>
  </details>
</article>`})})]})]})}l(ze,"Summary");import{jsx as D,jsxs as fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ge({theme:e}){let t=S();return D(p,{theme:e,children:fe("section",{className:"row",children:[fe("div",{children:[D("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),fe("table",{children:[D("thead",{children:fe("tr",{children:[D("th",{children:"Cover"}),D("th",{children:"Item"}),D("th",{children:"Value"}),D("th",{children:"Comment"})]})}),fe("tbody",{children:[fe("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:i.resImg("16-30x50.jpg",t),alt:"cover 1"})}),D("td",{children:D("a",{href:"",children:"Item 1.1"})}),D("td",{children:"20.35"}),D("td",{children:"In stock"})]}),fe("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:i.resImg("100-30x50.jpg",t),alt:"cover 2"})}),D("td",{children:D("a",{href:"",children:"Item 2.1"})}),D("td",{children:"15.99"}),D("td",{children:"Out of stock"})]}),fe("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:i.resImg("40-30x50.jpg",t),alt:"cover 3"})}),D("td",{children:D("a",{href:"",children:"Item 5.1"})}),D("td",{children:"14.23"}),D("td",{children:"In stock"})]}),fe("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:i.resImg("25-30x50.jpg",t),alt:"cover 4"})}),D("td",{children:D("a",{href:"",children:"Item 22"})}),D("td",{children:"10.11"}),D("td",{children:"In stock"})]})]}),D("tfoot",{children:fe("tr",{children:[D("td",{colSpan:2,children:D("b",{children:"Total"})}),D("td",{colSpan:2,children:D("b",{children:"60.68"})})]})})]})]}),D("div",{children:D(a,{lang:"xml",children:`<table>
  <thead>
    <tr>
      <th>Cover</th>
      <th>Item</th>
      <th>Value</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="..."/>
      </td>
      <td>
        <a href="...">
          Item 1.1
        </a>
      </td>
      <td>20.35</td>
      <td>In stock</td>
    </tr>
    ....
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">
        <b>Total</b>
      </td>
      <td colspan="2">
        <b>60.68</b>
      </td>
    </tr>
  </tfoot>
</table>`})})]})})}l(Ge,"Table");import{jsx as m,jsxs as q}from"https://esm.sh/react@19.2.6/jsx-runtime";function je({theme:e}){let t=S();return q(p,{theme:e,children:[q("section",{className:"row",children:[q("div",{children:[q("p",{children:["You can mark any text, keyword or piece of information with the ",m("code",{children:"mark"})," html tag."]}),m("p",{children:m("mark",{children:"v15.20.30"})})]}),m("div",{children:m(a,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),q("section",{className:"row",children:[q("div",{children:[m("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),q("p",{children:[q("mark",{children:[q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),m("path",{d:"m9 12 2 2 4-4"})]}),m("span",{children:"released"})]}),q("mark",{children:[m("span",{children:"error"}),q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),m("path",{d:"m9 12 2 2 4-4"})]})]})]}),m("p",{children:q("small",{children:["You can learn more about icons ",m("a",{href:i.doc("icons",e,t),children:"here"}),"."]})})]}),m("div",{children:m(a,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["You  can assign the ",m("code",{children:"primary"}),", ",m("code",{children:"secondary"}),", ",m("code",{children:"success"})," or ",m("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",m("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),q("p",{className:"flex",children:[m("mark",{className:"primary",children:"#theme"}),m("mark",{className:"secondary",children:"#second"}),m("mark",{className:"success",children:"Process OK"}),m("mark",{className:"error",children:"Error 400"})]}),q("p",{className:"flex",children:[m("mark",{className:"primary inverted",children:"#theme"}),m("mark",{className:"secondary inverted",children:"#second"}),m("mark",{className:"success inverted",children:"Process OK"}),m("mark",{className:"error inverted",children:"Error 400"})]}),m("p",{children:q("small",{children:["You can learn more about colors ",m("a",{href:i.doc("colors",e,t),children:"here"}),"."]})})]}),m("div",{children:m(a,{lang:"xml",children:`<!-- with or without -->
<!-- the inverted class -->
<mark class="primary">
  #theme
</mark>
<mark class="secondary">
  #second
</mark>
<mark class="success">
  Process OK
</mark>
<mark class="error">
  Error 400
</mark>`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",m("code",{children:"group"})," role, they will be grouped together."]}),q("p",{role:"group",children:[m("mark",{children:"npm"}),m("mark",{className:"success",children:"1.0.3"}),m("mark",{className:"error",children:q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[m("path",{d:"M18 6 6 18"}),m("path",{d:"m6 6 12 12"})]})})]}),m("p",{children:q("small",{children:["You can learn more about groups ",m("a",{href:i.doc("groups",e,t),children:"here"}),"."]})})]}),m("div",{children:m(a,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["You can use the ",m("code",{children:"mark"})," tag as standalone badges with text or with icons."]}),q("p",{children:[m("mark",{children:"1"}),m("mark",{children:"2"}),m("mark",{children:"3"}),m("mark",{children:q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),m("circle",{cx:"12",cy:"10",r:"3"})]})})]}),m("p",{children:"Or in more complex layouts."}),q("article",{children:[m("div",{role:"group",children:q("div",{className:"row",children:[m("mark",{className:"secondary",children:"1"}),q("div",{children:[m("b",{children:"Lorem ipsum dolor sit amet"}),m("br",{}),m("small",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}),m("div",{role:"group",children:q("div",{className:"row",children:[m("mark",{className:"secondary",children:"2"}),q("div",{children:[m("b",{children:"Sed ut perspiciatis unde omnis"}),m("br",{}),m("small",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."})]})]})}),m("div",{role:"group",children:q("div",{className:"row",children:[m("mark",{className:"secondary",children:"3"}),q("div",{children:[m("b",{children:"At vero eos et accusamus"}),m("br",{}),m("small",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."})]})]})})]}),m("p",{children:q("small",{children:["You can learn more about cards ",m("a",{href:i.doc("cards",e,t),children:"here"}),"."]})})]}),m("div",{children:m(a,{lang:"xml",children:`<p>
  <mark>1</mark>
  <mark>2</mark>
  <mark>3</mark>
  <mark><svg .../></svg></mark>
</p>

<article>
  <div role="group">
    <div class="row">
      <mark class="secondary">1</mark>
      <div>
        <b>Lorem ipsum ...</b>
        <br/>
        <small>>Ut enum...</small>
      </div>
    </div>

    <div class="row">
      <mark class="secondary">2</mark>
      <div>
        <b>Set ut ...</b>
        <br/>
        <small>Nemo enim...</small>
      </div>
    </div>

    ...
  </div>
</article>`})})]})]})}l(je,"Tags");import{jsx as ae,jsxs as Le}from"https://esm.sh/react@19.2.6/jsx-runtime";function _e({theme:e}){return Le(p,{theme:e,children:[Le("section",{className:"row",children:[Le("div",{children:[ae("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),ae("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),Le("ul",{children:[ae("li",{children:"Item 1"}),ae("li",{children:"Item 2"}),Le("ol",{children:[ae("li",{children:"Item 1"}),ae("li",{children:"Item 2"})]})]})]}),ae("div",{children:ae(a,{lang:"xml",children:`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`})})]}),Le("section",{className:"row",children:[Le("div",{children:[Le("p",{children:["Definition lists are styled such that ",ae("code",{children:"dd"})," elements are inlined compared to ",ae("code",{children:"dt"})," elements."]}),Le("dl",{children:[ae("dt",{children:"Coffee"}),ae("dd",{children:"Black hot drink"}),ae("dt",{children:"Milk"}),ae("dd",{children:"White cold drink"})]})]}),ae("div",{children:ae(a,{lang:"xml",children:`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`})})]})]})}l(_e,"Lists");import{useState as ft}from"https://esm.sh/react@19.2.6";import{jsx as k,jsxs as U}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ye({theme:e}){let[t,r]=ft("bread"),[F,h]=ft(!1),[b,pe]=ft(!0);return U(p,{theme:e,children:[U("section",{className:"row",children:[U("div",{children:[k("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),U("form",{children:[k("p",{children:k("b",{children:"Options"})}),U("label",{htmlFor:"egg",children:[k("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),k("span",{children:"Egg"})]}),U("label",{htmlFor:"cheese",children:[k("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),k("span",{children:"Cheese"})]}),U("label",{htmlFor:"ham",children:[k("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),k("span",{children:"Ham"})]})]}),k("p",{children:"These work well even for complex, multi-line, checkboxes"}),U("form",{children:[k("p",{children:k("b",{children:"Todos"})}),U("label",{htmlFor:"friday",children:[k("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),U("span",{children:[k("b",{children:"Friday"}),k("br",{}),k("span",{children:"- Order lunch"}),k("br",{}),k("span",{children:"- Go to work"}),k("span",{children:"- Eat lunch"})]})]}),U("label",{htmlFor:"saturday",children:[k("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),U("span",{children:[k("b",{children:"Saturday"}),k("br",{}),k("span",{children:"- Order lunch"}),k("br",{}),k("span",{children:"- Eat lunch"})]})]})]})]}),k("div",{children:k(a,{lang:"xml",children:`<form>
  <div className="row">
    <div>
      <p><b>Options</b></p>

      <label for="egg">
        <input 
          type="checkbox" 
          id="egg" 
          name="sandwich" 
          value="egg" />
        <span>Egg</span>
      </label>
      ...
    </div>
    ...
  </div>
</form>`})})]}),U("section",{className:"row",children:[U("div",{children:[k("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),U("form",{children:[k("p",{children:k("b",{children:"Wrapping"})}),U("label",{htmlFor:"bread",children:[k("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:t==="bread",onChange:ue=>r(ue.target.value)}),k("span",{children:"Bread"})]}),U("label",{htmlFor:"salad",children:[k("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:t==="salad",onChange:ue=>r(ue.target.value)}),k("span",{children:"Salad"})]})]})]}),k("div",{children:k(a,{lang:"xml",children:`<form>
  <div className="row">
    <p><b>Wrapping</b></p>

    <label for="bread">
      <input 
        type="radio" 
        id="bread" 
        name="radio" 
        value="bread" />
      <span>Bread</span>
    </label>
    ...
  </div>
</form>`})})]}),U("section",{className:"row",children:[U("div",{children:[k("p",{children:"And if you want to represent an on/off state, you can use switches."}),U("form",{children:[U("label",{htmlFor:"terms",onClick:()=>h(!F),children:[k("input",{name:"terms",type:"checkbox",role:"switch",checked:F}),k("span",{children:"I agree to the terms"})]}),U("label",{htmlFor:"updates",onClick:()=>pe(!b),children:[k("input",{name:"updates",type:"checkbox",role:"switch",checked:b}),k("span",{children:"I want to receive updates"})]})]})]}),k("div",{children:k(a,{lang:"xml",children:`<form>
  <label for="terms">
    <input 
      name="terms"
      type="checkbox"
      role="switch"${F?`
      checked/>`:"/>"}
    <span>I agree to the terms</span>
  </label>

  <label for="updates">
    <input
      name="updates"
      type="checkbox"
      role="switch"${b?`
      checked/>`:"/>"}
    <span>I want to receive updates</span>
  </label>
</form>`})})]})]})}l(Ye,"FormsCheckbox");import{jsx as de,jsxs as $e}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ve({theme:e}){return de(p,{theme:e,children:$e("section",{className:"row",children:[$e("div",{children:[$e("p",{children:["A form can have all or part of its inputs set as ",de("code",{children:"disabled"})," to prevent any user interaction."]}),de("form",{children:$e("fieldset",{children:[de("legend",{children:"Disabled form"}),$e("label",{htmlFor:"email",children:[de("span",{children:"Email"}),de("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),$e("label",{htmlFor:"address",children:[de("span",{children:"Address"}),de("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),$e("label",{htmlFor:"delivery",children:[de("span",{children:"Delivery"}),$e("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[de("option",{value:"fast",children:"Fast"}),de("option",{value:"standard",children:"Standard"})]})]}),de("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),de("div",{children:de(a,{lang:"xml",children:`<form>
  <fieldset>
    <legend>
      Disabled form
    </legend>

    <label for="email">
      <span>
        Email
      </span>
      <input 
        type="email" 
        id="email" 
        placeholder="N/A" 
        disabled/>
    </label>
        
    <label for="address">
      <span>
        Address
      </span>
      <input 
        type="text" 
        id="address" 
        placeholder="Address" 
        disabled/>
    </label>
    
    <label form="delivery">
      <span>
        Delivery
      </span>
      <select 
        id="delivery" 
        disabled>
        <option 
          value="fast" 
          selected>
          Fast
        </option>
        <option 
          value="standard">
          Standard
        </option>
      </select>
    </label>
    
    <input 
      type="submit" 
      value="Submit" 
      disabled/>
  </fieldset>
</form>`})})]})})}l(Ve,"FormsDisabled");import{jsx as y,jsxs as R}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ue({theme:e}){return R(p,{theme:e,children:[R("section",{className:"row",children:[R("div",{children:[R("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",y("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),y("form",{children:R("div",{role:"group",children:[y("input",{id:"email",type:"email",placeholder:"Email"}),y("input",{type:"submit",value:"Subscribe"})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),R("section",{className:"row",children:[R("div",{children:[y("p",{children:"This can be used to great effect for search inputs."}),y("form",{children:R("div",{role:"group",children:[y("mark",{children:R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y("path",{d:"m21 21-4.34-4.34"}),y("circle",{cx:"11",cy:"11",r:"8"})]})}),y("input",{type:"search",id:"search",placeholder:"Search"}),y("input",{type:"submit",value:"Search"})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
  <div role="group">
    <mark>
      <svg ...></svg>
    </mark>
    <input 
      id="search" 
      type="search" 
      placeholder="Search"/>
    <input 
      type="submit" 
      value="Search"/>
  </div>
</form>`})})]}),R("section",{className:"row",children:[R("div",{children:[y("p",{children:"And even use mutliple buttons:"}),y("form",{children:R("div",{role:"group",children:[y("input",{type:"search",value:"",placeholder:"e.g. SW1A 1AA"}),y("button",{type:"reset",children:R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y("circle",{cx:"12",cy:"12",r:"10"}),y("line",{x1:"22",x2:"18",y1:"12",y2:"12"}),y("line",{x1:"6",x2:"2",y1:"12",y2:"12"}),y("line",{x1:"12",x2:"12",y1:"6",y2:"2"}),y("line",{x1:"12",x2:"12",y1:"22",y2:"18"})]})}),R("button",{type:"submit",children:[y("span",{children:"Go"}),R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y("path",{d:"M5 12h14"}),y("path",{d:"m12 5 7 7-7 7"})]})]})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      type="search" 
      value="" 
      placeholder="e.g. SW1A 1AA"/>
    <button type="reset">
      <svg ...></svg>
    </button>
    <button type="submit">
      <span>Go</span>
      <svg ...></svg>
    </button> 
  </div>
</form>`})})]}),R("section",{className:"row",children:[R("div",{children:[R("p",{children:["You can still wrap form elements inside a ",y("code",{children:"fieldset"})," with an appropriate ",y("code",{children:"legend"})," tag."]}),y("form",{children:R("fieldset",{children:[y("legend",{children:"Selection"}),R("div",{role:"group",children:[R("select",{id:"delivery",defaultValue:"fast",children:[y("option",{value:"fast",children:"Fast"}),y("option",{value:"standard",children:"Standard"})]}),y("input",{type:"date",id:"delivery-date"}),y("input",{type:"submit",value:"Confirm"})]})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
  <fieldset>
    <legend>
      Selection
    </legend>
    <div role="group">
      <select id="delivery">
        <option 
          value="fast" 
          selected>
          Fast
        </option>
        <option 
          value="standard">
          Standard
        </option>
      </select>
      <input 
        type="date" 
        id="delivery-date"/>
      <input 
        type="submit" 
        value="Confirm"/>
    </div>
  </fieldset>
</form>`})})]}),R("section",{className:"row",children:[R("div",{children:[y("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),y("form",{children:R("div",{role:"group",children:[R("label",{htmlFor:"ch_1",children:[y("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),y("span",{children:"Check #1"})]}),R("label",{htmlFor:"ch_2",children:[y("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),y("span",{children:"Check #2"})]}),R("label",{htmlFor:"ch_3",children:[y("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),y("span",{children:"Check #3"})]})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
  <div role="group">
    <label for="ch_1">
      <input 
        type="checkbox" 
        id="ch_1" 
        name="check"
        value="ch_1" />
      <span>Check #1</span>
    </label>
    ...
</form>`})})]})]})}l(Ue,"FormsGrouped");import{useState as Xt}from"https://esm.sh/react@19.2.6";import{jsx as f,jsxs as H}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ke({theme:e}){let t=S(),[r,F]=Xt(50);return H(p,{theme:e,children:[H("section",{className:"row",children:[H("div",{children:[H("p",{children:["All ",f("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),H("form",{children:[H("label",{htmlFor:"email",children:[f("span",{children:"Email"}),f("input",{type:"email",placeholder:"Email Address",id:"email"})]}),H("label",{htmlFor:"password",children:[f("span",{children:"Password"}),f("input",{type:"password",id:"password",placeholder:"Password"})]}),f("input",{type:"submit",value:"Login"}),H("p",{children:["Don't have an account? ",f("a",{href:"",children:"Sign up"}),"."]})]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
  <fieldset>
    <legend>
      Login
    </legend>

    <label for="email">
      <span>
        Email
      </span>
      <input 
        type="email" 
        name="email"
        placeholder="..." 
        id="email"/>
    </label>

    <label for="password">
      <span>
        Password
      </span>
      <input 
        type="password" 
        name="password"
        id="password" 
        placeholder="..."/>  
    </label>
    
    <input 
      type="submit" 
      value="Login"/>

    <p>
      Don't have an account? <a href="...">Sign up</a>.
    </p>
  </fieldset>
</form>`})})]}),H("section",{className:"row",children:[H("div",{children:[f("p",{children:"Textareas are supported as well and by default they expand to fit the available horizontal space."}),H("form",{children:[f("textarea",{rows:4,id:"textarea",placeholder:"Write your comments..."}),f("input",{type:"submit",value:"Comment"})]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>`})})]}),H("section",{className:"row",children:[H("div",{children:[f("p",{children:"Ranged inputs are also supported."}),H("form",{children:[H("label",{htmlFor:"volume",children:[f("span",{children:"Volume (range)"}),f("input",{type:"range",id:"volume",name:"volume",min:0,max:100,step:1,value:r,onChange:h=>F(Number(h.target.value))})]}),f("input",{type:"submit",value:"Tune"})]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
  <label for="volume">
    <span>
      Volume (range)
    </span>
    <input 
      type="range" 
      id="volume" 
      name="volume" 
      min="0" 
      max="100" 
      step="1" 
      value="50"/>
  </label>
  <input 
    type="submit" 
    value="Tune"/>
</form>`})})]}),f("section",{children:H("div",{className:"row",children:[H("div",{children:[H("p",{children:["If you want your forms to stand out more, you can wrap the inputs inside a ",f("code",{children:"fieldset"})," and assign a ",f("code",{children:"legend"}),"."]}),f("form",{children:H("fieldset",{children:[f("legend",{children:"Details"}),H("div",{className:"row disable-mobile",children:[f("div",{children:H("label",{htmlFor:"first-name",children:[f("span",{children:"First name"}),f("input",{type:"text",id:"first-name",placeholder:"First name"})]})}),f("div",{children:H("label",{htmlFor:"last-name",children:[f("span",{children:"Last name"}),f("input",{type:"text",id:"last-name",placeholder:"Last name"})]})})]}),H("div",{className:"row disable-mobile",children:[f("div",{children:H("label",{htmlFor:"delivery",children:[f("span",{children:"Delivery Time"}),H("select",{id:"delivery",defaultValue:"mornibgt",children:[f("option",{value:"morning",children:"Morning"}),f("option",{value:"evening",children:"Evening"})]})]})}),f("div",{children:H("label",{htmlFor:"delivery-date",children:[f("span",{children:"Delivery Date"}),f("input",{type:"date",id:"delivery-date"})]})})]}),H("blockquote",{className:"success",children:["Order total is ",f("b",{children:"$33.59"})]}),H("div",{className:"row disable-mobile",children:[f("div",{children:f("input",{type:"reset",className:"error",value:"Reset"})}),f("div",{}),f("div",{children:f("input",{type:"submit",value:"Confirm"})})]})]})}),f("p",{children:"You can make forms as simple or as complex as you want."}),H("p",{children:["In the example above we're separating inputs into two separate ",f("a",{href:i.doc("grid",e,t),children:"columns"}),", so we can pack more information in the same space."]}),H("p",{children:["We're also using ",f("a",{href:i.doc("blockquotes",e,t),children:"blockquotes"})," to highlight important information."]}),H("p",{children:["We're using both ",f("code",{children:"submit"})," and ",f("code",{children:"reset"})," type inputs. Please note these inputs are styled to look exactly like ",f("a",{href:i.doc("blockquotes",e,t),children:"buttons"}),"."]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
  <fieldset>
    <legend>
      Order details
    </legend>

    <!-- name row -->
    <div class="row disable-mobile">
      <div>
        <label for="first-name">
          <span>
            First name
          </span>
          <input 
            type="text" 
            id="first-name" 
            placeholder="..."/>
        </label>
      </div>
      <div>
        <label for="last-name">
          <span>
            Last name
          </span>
          <input 
            type="text" 
            id="last-name" 
            placeholder="..."/>
        </label>
      </div>
    </div>

    <!-- other rows --> 
    <!-- .... -->

    <blockquote class="success">
      Order total is <b>$33.59</b>
    </blockquote>

    <div class="row disable-mobile">
      <div>
        <input 
          type="reset" 
          class="error" 
          value="Reset"//>
      </div>
      <div></div>
      <div>
        <input 
          type="submit" 
          value="Confirm"/> 
      </div>
    </div>
  </fieldset>
</form>`})})]})})]})}l(Ke,"FormsNormal");import{useState as yt}from"https://esm.sh/react@19.2.6";import{jsx as I,jsxs as re}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ze({theme:e}){let[t,r]=yt("a"),[F,h]=yt(""),[b,pe]=yt("");return re(p,{theme:e,children:[re("section",{className:"row",children:[re("div",{children:[re("p",{children:["Helper styles for form validation come out of the box for any ",I("code",{children:"input"})," and ",I("code",{children:"textarea"})," elements marked as ",I("b",{children:"required"}),"."]}),I("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),I("p",{children:"Empty inputs do not display error styles."}),re("p",{children:["Adjacent text elements with the ",I("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),I("form",{action:"",method:"post",children:re("fieldset",{children:[I("legend",{children:"Input"}),re("label",{htmlFor:"name",children:[I("span",{children:"Name"}),I("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:t,onChange:ue=>r(ue.target.value)}),I("span",{className:"error",children:I("small",{children:"Enter a name between 4 and 100 characters"})})]}),re("label",{htmlFor:"email",children:[I("span",{children:"Email"}),I("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:F,onChange:ue=>h(ue.target.value)})]}),re("label",{htmlFor:"comment",children:[I("span",{children:"Comment"}),I("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:b,onChange:ue=>pe(ue.target.value)}),I("span",{className:"error",children:I("small",{children:"Enter a meaningful comment"})})]}),I("input",{type:"submit",value:"Submit"})]})})]}),I("div",{children:I(a,{lang:"xml",children:`<form action="/" method="post">
  <fieldset>
    <legend>
      Input
    </legend>

    <label for="name">
      <span>
        Name
      </span>
      <input
        id="name"
        name="name"
        required
        placeholder="Name..."
        pattern=".{4,100}"
        title="Name ..."
        value="a"/>
      <div class="error">
        <small>
          Enter ...
        </small>
      </div>
    </label>
    
    <label for="email">
      <span>
        Email
      </span>
      <input 
        id="email" 
        name="email" 
        type="email" 
        required 
        placeholder="Email..."/>
    </label>

    <label for="comment">
      <span>
        Comment
      </span>
      <textarea
        rows="5"
        id="comment"
        name="comment"
        placeholder="..."
        required
        minLength="10"
        maxLength="500">
      </textarea>
      <div class="error">
        <small>
          Enter ...
        </small>
      </div>
    </label>
    
    <input 
      type="submit" 
      value="Submit"/>
  </fieldset>
</form>`})})]}),re("section",{className:"row",children:[re("div",{children:[re("p",{children:["Inputs that present a more limited range of options to a user, such as ",I("code",{children:"select"}),", ",I("code",{children:"radio"})," and ",I("code",{children:"check"})," buttons, won't display a error styles but can be set as required."]}),I("form",{children:re("fieldset",{children:[I("legend",{children:"Countries"}),re("select",{id:"country",name:"country",required:!0,children:[I("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please select a country"}),I("option",{value:"uk",children:"United Kingdom"}),I("option",{value:"fr",children:"France"}),I("option",{value:"de",children:"Germany"})]}),re("label",{children:[I("input",{type:"checkbox",name:"terms",required:!0}),"I accept the terms and conditions"]}),I("input",{type:"submit",value:"Submit"})]})})]}),I("div",{children:I(a,{lang:"xml",children:`<form>
  <fieldset>
    <legend>
      Countries
    </legent>
    
    <select 
      id="country" 
      name="country" 
      required>
      <option 
        value="" 
        disabled 
        selected 
        hidden>
        Please select a country
      </option>

      <option value="uk">
        United Kingdom
      </option>
      <option value="fr">
        France
      </option>
      <option value="de">
        Germany
      </option>
    </select>

    <label>
      <input 
        type="checkbox" 
        name="terms" 
        required/>
      I accept the terms and conditions
    </label>

    <input 
      type="submit" 
      value="Submit"/>
  </fieldset>
</form>`})})]})]})}l(Ze,"FormsValidation");import{useRef as eo}from"https://esm.sh/react@19.2.6";import{jsx as se,jsxs as Qe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Je({theme:e}){let t=eo(null);return se(p,{theme:e,children:Qe("section",{className:"row",children:[Qe("div",{children:[se("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),se("p",{children:"Click the button below to open the modal dialog."}),se("p",{children:se("button",{onClick:l(()=>t.current?.showModal(),"openDialog"),children:"Open modal"})}),se(to,{ref:t})]}),se("div",{children:se(a,{lang:"xml",children:`<button id="openBtn">Open modal</button>

<dialog id="modal">
  <h2>Dialog</h2>
  <p>Lorem ipsum...</p>

  <form method="dialog">
    <div role="group">
      <div class="row">
        <button 
          value="cancel" 
          class="error" 
          formNoValidate>
          Cancel
        </button>
        <div></div>
        <button value="confirm">
          Confirm
        </button>
      </div>
    </div>
  </form>
</dialog>
`})})]})})}l(Je,"Modal");function to(e){return Qe("dialog",{ref:e.ref,children:[se("h2",{children:"Dialog"}),se("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),se("form",{method:"dialog",children:se("div",{role:"group",children:Qe("div",{className:"row",children:[se("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),se("div",{}),se("button",{value:"confirm",children:"Confirm"})]})})})]})}l(to,"DialogModal");import{jsx as s,jsxs as T}from"https://esm.sh/react@19.2.6/jsx-runtime";function Xe({theme:e}){let t=S();return T(p,{theme:e,children:[T("section",{className:"row",children:[T("div",{children:[T("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",s("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),s("nav",{className:"disable-mobile",children:T("ul",{children:[s("li",{children:s("a",{href:"",children:"Item 1"})}),s("li",{children:s("a",{href:"",children:"Item 2"})}),s("li",{children:s("a",{href:"",children:"Item 3"})})]})}),s("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),s("nav",{className:"disable-mobile",children:T("ul",{children:[s("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),s("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),s("span",{children:"Home"})]})}),s("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),s("path",{d:"m18 15 4-4"}),s("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),s("span",{children:"Docs"})]})}),T("li",{children:[T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[s("circle",{cx:"12",cy:"12",r:"10"}),s("path",{d:"m10 8 4 4-4 4"})]}),s("span",{children:"More"})]}),T("ul",{children:[s("li",{children:s("a",{href:"",children:"Option 1"})}),s("li",{children:s("a",{href:"",children:"Option 2"})})]})]})]})}),T("p",{children:["Navigtion items may use the ",s("code",{children:"aria-selected"})," attribute to denote they are selected."]}),s("nav",{className:"disable-mobile",children:T("ul",{children:[s("li",{"aria-selected":!0,children:s("a",{href:"",children:"Selected"})}),s("li",{children:s("a",{href:"",children:"Unselected"})})]})})]}),s("div",{children:s(a,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <!-- simple nav item -->
      <li>
        <a href="...">
          Item 1
        </a>
      </li>
      <!-- selected -->
      <li aria-selected>
        <a href="...">
          Item 2
        </a>
      </li>
      <!-- with icon -->
      <li>
        <a href="...">
          <svg ...></svg>
          <span>
            Item 3
          </span>
        </a>
        <!-- collapsible -->
        <ul>
          <li>
            <a href="...">
              Option 1
            </a>
          </li>
          ...
        </ul>
      </li>
    </ul>
  </nav>
</header>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["You can use other elements such as ",s("code",{children:"select"}),", ",s("code",{children:"input"}),", ",s("code",{children:"img"}),", etc to add more functionality to the navigation bar."]}),s("nav",{className:"disable-mobile",children:T("ul",{children:[s("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),s("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),s("span",{children:"Home"})]})}),s("li",{children:T("select",{id:"selector",defaultValue:"opt-1",style:{minWidth:"100px"},children:[s("option",{value:"opt-1",children:"Val 1"}),s("option",{value:"opt-2",children:"Val 2"}),s("option",{value:"opt-3",children:"Val 3"})]})}),s("li",{children:s("input",{type:"search",placeholder:"Search ...",id:"search"})})]})}),s("br",{})]}),s("div",{children:s(a,{lang:"xml",children:`<li>
  <img 
    height="24" 
    src="..." 
    alt="logo"/>
</li>
<li>
  <select>...</select>
</li>
<li>
  <input 
    type="search" 
    placeholder="Search..."/>
</li>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["Navigation can be split into a left and a right section by placing an empty ",s("code",{children:"div"})," element to act as gap."]}),s("nav",{className:"disable-mobile",children:T("ul",{children:[s("li",{children:s("a",{href:"",children:"Home"})}),s("li",{children:s("a",{href:"",children:"Menu"})}),s("div",{}),s("li",{children:s("a",{href:"",children:s("button",{children:"Download"})})}),s("li",{children:s("a",{href:"",children:s("button",{type:"reset",children:T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),s("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})}),s("br",{})]}),s("div",{children:s(a,{lang:"xml",children:`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["Navigation can be placed inside an ",s("code",{children:"article"})," to create a more striking display."]}),s("article",{children:s("nav",{className:"disable-mobile",children:T("ul",{children:[s("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),s("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),s("span",{children:"Home"})]})}),s("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),s("path",{d:"m18 15 4-4"}),s("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),s("span",{children:"Docs"})]})}),s("li",{children:s("input",{type:"search",placeholder:"Search..."})}),s("div",{}),s("li",{children:s("a",{href:"",children:s("button",{type:"reset",children:T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),s("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}),s("br",{})]}),s("div",{children:s(a,{lang:"xml",children:`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[s("p",{children:"Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout."}),T("figure",{children:[s("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-nav",e,t)}),s("figcaption",{children:"Showcase of navigation on a smaller device"})]})]}),s("div",{children:s(a,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>Docs</span>
        </a>
      </li>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>More</span>
        </a>
        <ul>
          <li>
            <a href="...">
              Option 1
            </a>
          <li>
          <li>
            <a href="...">
              Option 2
            </a>
          <li>
        </ul>
      </li>
    </ul>
  </nav>
</header>`})})]})]})}l(Xe,"Navigation");import{useState as oo}from"https://esm.sh/react@19.2.6";import{Fragment as Ct,jsx as C,jsxs as oe}from"https://esm.sh/react@19.2.6/jsx-runtime";function wt(){return oe(Ct,{children:[C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),C("p",{children:C("button",{children:"Discover"})})]})}l(wt,"Tab1");function xt(){return oe(Ct,{children:[C("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),C("div",{children:C("blockquote",{children:"lorem ipsum install"})})]})}l(xt,"Tab2");function kt(){return C(Ct,{children:C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}l(kt,"Tab3");function et({theme:e}){let t=S(),[r,F]=oo("tab-1");return oe(p,{theme:e,children:[oe("section",{className:"row",children:[oe("div",{children:[oe("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",C("code",{children:"<menu>"})," element ",C("b",{children:"outside"})," of a ",C("code",{children:"nav"})," element."]}),C("div",{className:"disable-mobile",children:oe("menu",{children:[C("li",{"aria-selected":r==="tab-1",children:oe("a",{onClick:()=>F("tab-1"),children:[oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),C("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),C("span",{children:"Home"})]})}),C("li",{"aria-selected":r==="tab-2",children:oe("a",{onClick:()=>F("tab-2"),children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:C("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),C("span",{children:"Install"})]})}),C("li",{"aria-selected":r==="tab-3",children:oe("a",{onClick:()=>F("tab-3"),children:[oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("circle",{cx:"12",cy:"12",r:"10"}),C("path",{d:"M17 12h.01"}),C("path",{d:"M12 12h.01"}),C("path",{d:"M7 12h.01"})]}),C("span",{children:"More"})]})})]})}),oe("div",{children:[r==="tab-1"?C(wt,{}):null,r==="tab-2"?C(xt,{}):null,r==="tab-3"?C(kt,{}):null]})]}),C("div",{children:C(a,{lang:"xml",children:`<main>
  <menu>
    <li>
      <a onclick="...">
        <svg ...></svg>
        <span>
          Home
        </span>
      </a>
    </li>
    <li>...</li>
    <li>...</li>
  </menu>
  <div>
    <div id="content-1">
      ...
    </div>
    <div id="content-2">
      ...
    </div>
    <div id="content-3">
      ...
    </div>
  </div>
</main>`})})]}),oe("section",{className:"row",children:[oe("div",{children:[C("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),C("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-tabs-nav",e,t)}),C("p",{children:C("a",{href:i.example("mobile-tabs-nav",e,t),target:"_blank",children:"See standalone example"})})]}),C("div",{children:C(a,{lang:"xml",children:`<div class="row">
  <aside>
    <menu>
      <li>
        <a onclick="...">
          <svg ...></svg>
          <span>
            Home
          </span>
        </a>
      </li>
      <li>...</li>
      <li>...</li>
    </menu>
  </aside>
  <div>
    <div id="content-1">
      ...
    </div>
    <div id="content-2">
      ...
    </div>
    <div id="content-3">
      ...
    </div>
  </div>
</div>`})})]}),oe("section",{className:"row",children:[oe("div",{children:[oe("p",{children:["Tabs can be nested and they can be combiend with ",C("code",{children:"summary"})," elements to be collapsible."]}),C("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("mobile-tabs-exp-nav",e,t)}),C("p",{children:C("a",{href:i.example("mobile-tabs-exp-nav",e,t),target:"_blank",children:"See standalone example"})})]}),C("div",{children:C(a,{lang:"xml",children:`<menu<
  <b>Menu</b>
  <li><a>Section 1</a>
  <li>Section 2</a>
  <!-- non collapsible section -->
  <li>
    <menu>
      <li><a>Section 2.1</a>
      <li><a>Section 2.2</a>
    </menu>
  </li>
  <!-- collapsible section -->
  <li>
    <details open>
      <summary>Section 3</summary>
      <menu>
        <li><a>Section 3.1</a></li>
        <li><a>Section 3.2</a></li>
        <li><a>Section 3.3</a></li>
        <!-- sub section -->
        <li>
          <details>
            <summary>Section 3.4</summary>
            <menu>
              <li><a>Section 3.4.1</a></li>
              <li><a>Section 3.4.2</a></li>
            </menu>
          </details>
        </li>
      </menu>
    </details>
  </li>
  <li><a>Section 4</a></li>
</menu>`})})]})]})}l(et,"Tabs");import{jsx as G,jsxs as ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function tt({theme:e}){let t=S();return ce(p,{theme:e,children:[ce("section",{className:"row",children:[ce("div",{children:[G("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),G("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),G("nav",{children:ce("menu",{className:"disable-mobile",children:[G("li",{"aria-selected":!0,children:ce("a",{href:"",children:[ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),G("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),G("span",{children:"Home"})]})}),G("li",{children:ce("a",{href:"",children:[ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M4 11a9 9 0 0 1 9 9"}),G("path",{d:"M4 4a16 16 0 0 1 16 16"}),G("circle",{cx:"5",cy:"19",r:"1"})]}),G("span",{children:"Latest"})]})}),G("li",{children:ce("a",{href:"",children:[ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),G("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),G("circle",{cx:"10",cy:"7",r:"4"})]}),G("span",{children:"Profile"})]})})]})})]}),G("div",{children:G(a,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),ce("section",{className:"row",children:[ce("div",{children:[ce("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",G("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),ce("figure",{children:[G("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-menu",e,t)}),G("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),G("div",{children:G(a,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}l(tt,"Menu");import{jsx as A,jsxs as ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function ot({theme:e}){return A(p,{theme:e,children:ve("section",{className:"row",children:[ve("div",{children:[A("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),ve("p",{children:["By default you can add a ",A("b",{children:"meta"})," tag with the ",A("code",{children:"color-scheme"})," name and ",A("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),A("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),ve("table",{children:[A("thead",{children:ve("tr",{children:[A("th",{children:"Theme"}),A("th",{children:"Light"}),A("th",{children:"Dark"})]})}),ve("tbody",{children:[ve("tr",{children:[A("td",{children:"Default"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"Blog"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"App"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"Delivery"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]}),ve("tr",{children:[A("td",{children:"Landing"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]}),ve("tr",{children:[A("td",{children:"Newsletter"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]})]})]})]}),A("div",{children:A(a,{lang:"xml",children:`<html>
  <head>
    <!-- both variants -->
    <meta name="color-scheme" content="light dark"/>
    
    <!-- only dark variant -->
    <meta name="color-scheme" content="dark"/>
  </head>
</html>`})})]})})}l(ot,"DarkMode");import{jsx as me,jsxs as Ne}from"https://esm.sh/react@19.2.6/jsx-runtime";function at({theme:e}){return Ne(p,{theme:e,children:[Ne("section",{className:"row",children:[Ne("div",{children:[me("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),me("p",{children:"When inside buttons the width & height is aligned to match the font size."}),me("p",{children:Ne("button",{children:[Ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[me("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),me("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),me("span",{children:"Home"})]})})]}),me("div",{children:me(a,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),Ne("section",{className:"row",children:[Ne("div",{children:[me("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),Ne("div",{role:"group",children:[Ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[me("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),me("circle",{cx:"12",cy:"10",r:"3"})]}),me("b",{children:"Test Address, SE11 8CL"})]})]}),me("div",{children:me(a,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}l(at,"Icons");import{jsx as W,jsxs as Y}from"https://esm.sh/react@19.2.6/jsx-runtime";function it({theme:e}){let t=S();return Y(p,{theme:e,children:[Y("section",{className:"row",children:[Y("div",{children:[W("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),Y("p",{children:["The threshold between wide and narrow happens at ",W("b",{children:"600px"}),"."]}),W("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),Y("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-typography",e,t)}),Y("figcaption",{children:["More information ",W("a",{href:i.doc("typography",e,t),children:"here"})]})]})]}),W("div",{children:W(a,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[W("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),Y("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-nav",e,t)}),Y("figcaption",{children:["More information ",W("a",{href:i.doc("navigation",e,t),children:"here"})," or ",W("a",{href:i.doc("tabs",e,t),children:"here"}),"."]})]})]}),W("div",{children:W(a,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a href="...">...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[W("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),Y("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-menu",e,t)}),Y("figcaption",{children:["More information ",W("a",{href:i.doc("menu",e,t),children:"here"}),"."]})]})]}),W("div",{children:W(a,{lang:"xml",children:`<header>
  <menu>
    <li><a href="...">...</a></li>
    ....
  </menu>
</header>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["Finally, elements that have the ",W("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),Y("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-columns",e,t)}),Y("figcaption",{children:["More information ",W("a",{href:i.doc("grid",e,t),children:"here"}),"."]})]})]}),W("div",{children:W(a,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",W("code",{children:"disable-mobile"})," class."]}),Y("p",{children:["You can also instruct elements to be hidden on mobile, via the ",W("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",W("code",{children:"hiden-on-desktop"})," class."]})]}),W("div",{})]})]})}l(it,"Mobile");import{jsx as c,jsxs as B}from"https://esm.sh/react@19.2.6/jsx-runtime";function rt({theme:e}){let t=S();return B(p,{theme:e,children:[B("section",{className:"row",children:[B("div",{children:[B("p",{children:["By wrapping together a elements inside an ",c("code",{children:"article"}),", you can create a basic card-type layout."]}),B("div",{className:"row disable-mobile",children:[c("div",{children:c("article",{children:c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})}),c("div",{children:c("article",{className:"primary",children:c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
  <p>
    Lorem ipsum ...
  </p>
</article>

<article class="primary">
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),B("section",{className:"row",children:[B("div",{children:[B("p",{children:["Cards can wrap headings and paragraphs and can be styled with ",c("code",{children:"success"}),", ",c("code",{children:"error"}),", etc classes."]}),B("div",{className:"row disable-mobile",children:[c("div",{children:B("article",{children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:B("article",{className:"secondary",children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),B("div",{className:"row disable-mobile",children:[c("div",{children:B("article",{className:"success",children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:B("article",{className:"error",children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),c("p",{children:B("small",{children:["You can learn more about classes ",c("a",{href:i.doc("classes",e,t),children:"here"}),"."]})})]}),c("div",{children:c(a,{lang:"xml",children:`
<article> 
  <span>
    <b>Title</b>
  </span>
  <p>
    Lorem ipsum ...
  </p>
</article>

<article class="secondary">
  <h3>Title</h3>
  <p>
    Lorem ipsum ...
  </p>
</article>

...`})})]}),B("section",{className:"row",children:[B("div",{children:[B("p",{children:["The ",c("code",{children:"header"})," element of a card will be styled so it's more proeminent."]}),B("div",{className:"row disable-mobile",children:[c("div",{children:B("article",{children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:B("article",{className:"success",children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
  <header>Title</header>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),B("section",{className:"row",children:[B("div",{children:[c("p",{children:"Likewise, the first image tag used in a card will be styled as a header image."}),B("div",{className:"row disable-mobile",children:[c("div",{children:B("article",{children:[c("img",{height:"80",src:i.resImg("16-320x80.jpg",t),alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:B("article",{className:"error",children:[c("img",{height:"80",src:i.resImg("16-420x80.jpg",t),alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),B("section",{className:"row",children:[B("div",{children:[c("p",{children:"You can combine elements inside a card to produce quite compelx results, as the example below shows."}),c("p",{children:"By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML."}),B("article",{children:[c("img",{height:"160",src:i.resImg("16-480x160.jpg",t),alt:"header image"}),c("h4",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),c("p",{children:c("button",{children:"Button"})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
  <img 
    height="160" 
    src="..." 
    alt="..." />
  <h4>
    Title
  </h4>
  <p>
    Lorem ipsum ...
  </p>
  <p>
    <button>
      Button
    </button>
  </p>
</article>`})})]}),B("section",{className:"row",children:[B("div",{children:[c("p",{children:"If we combine groups, columns and cards, we can experiment with even more daring layouts all while using just semantic HTML and minimal classes."}),B("article",{children:[c("div",{role:"group",children:B("div",{className:"row",children:[c("img",{width:"80",height:"80",src:i.resImg("16-80x80.jpg",t),alt:"header image"}),B("div",{children:[c("b",{children:"Title"}),c("br",{}),c("span",{children:"Subtitle"})]})]})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),B("p",{children:[c("mark",{children:"v12.5.3"}),c("mark",{className:"success",children:"success"})]}),c("hr",{}),c("p",{children:c("button",{children:"Button"})})]}),c("p",{children:B("small",{children:["You can learn more about groups ",c("a",{href:i.doc("groups",e,t),children:"here"}),"."]})}),c("p",{children:B("small",{children:["You can learn more about columns ",c("a",{href:i.doc("grid",e,t),children:"here"}),"."]})})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
  <div role="group">
    <div class="row">
      <img 
        width="80" 
        height="80" 
        src="..."/>
      <div>
        <b>
          Title
        </b>
        <br/>
        <span>
          Subtitle
        </span>
      </div>
    </div>
  </div>
  <p>
    Lorem ipsum ...
  </p>
  <p>
    <mark>
      v12.5.3
    </mark>
    <mark class="success">
      success
    </mark>
  </p>
  <hr/>
  <p>
    <button>
      Button
    </button>
  </p>
</article>`})})]})]})}l(rt,"Cards");import{jsx as v,jsxs as j}from"https://esm.sh/react@19.2.6/jsx-runtime";function st({theme:e}){return v(p,{theme:e,children:v("section",{children:j("div",{children:[j("p",{children:[$t," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),j("table",{children:[v("thead",{children:j("tr",{children:[v("th",{children:"Domain"}),v("th",{children:"Class"}),v("th",{children:"Effect"})]})}),j("tbody",{children:[j("tr",{children:[v("td",{rowSpan:4,children:"Containers"}),v("td",{children:v("code",{children:"container-medium"})}),v("td",{children:"Sets the maximum size of the container to 800px."})]}),j("tr",{children:[v("td",{children:v("code",{children:"container-narrow"})}),v("td",{children:"Sets the maximum size of the container to 1200px."})]}),j("tr",{children:[v("td",{children:v("code",{children:"container-wide"})}),v("td",{children:"Sets the maximum size of the container to 1600px."})]}),j("tr",{children:[v("td",{children:v("code",{children:"container-full"})}),v("td",{children:"Sets the  maximum size of the container to 100% (width of the screen)."})]}),j("tr",{children:[v("td",{rowSpan:3,children:"Layout"}),v("td",{children:v("code",{children:"row"})}),v("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),j("tr",{children:[v("td",{children:v("code",{children:"col"})}),v("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),j("tr",{children:[v("td",{children:v("code",{children:"col-N"})}),j("td",{children:["Horizontal space is divided in 12 equal columns. From ",v("code",{children:"col-1"})," to ",v("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),j("tr",{children:[v("td",{rowSpan:4,children:"Mobile"}),v("td",{children:v("code",{children:"hide-on-mobile"})}),v("td",{children:"Hides an element if on small displays."})]}),j("tr",{children:[v("td",{children:v("code",{children:"hide-on-desktop"})}),v("td",{children:"Hides an element if on large displays."})]}),j("tr",{children:[v("td",{children:v("code",{children:"disable-mobile"})}),j("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",v("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),j("tr",{children:[v("td",{children:v("code",{children:"flex"})}),v("td",{children:"Displays content normally on wider screens but switches to a row layout on smaller devices."})]}),j("tr",{children:[v("td",{rowSpan:5,children:"Colors"}),v("td",{children:v("code",{children:"primary"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),j("tr",{children:[v("td",{children:v("code",{children:"secondary"})}),v("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),j("tr",{children:[v("td",{children:v("code",{children:"success"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),j("tr",{children:[v("td",{children:v("code",{children:"error"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),j("tr",{children:[v("td",{children:v("code",{children:"inverted"})}),v("td",{children:"Normally it inverts the text colour. Can take any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),j("tr",{children:[v("td",{rowSpan:1,children:"Alignment"}),v("td",{children:v("code",{children:"align-center"})}),v("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}l(st,"Classes");import{jsx as w,jsxs as te}from"https://esm.sh/react@19.2.6/jsx-runtime";function lt({theme:e}){let t=S();return te(p,{theme:e,children:[te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Any layout element, such as a ",w("code",{children:"div"})," or ",w("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",w("code",{children:"row"})," and ",w("code",{children:"col"})," classes."]}),te("article",{children:[te("div",{className:"row disable-mobile",children:[w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})}),w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})})]}),te("div",{className:"row disable-mobile",children:[w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})}),w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})}),w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})})]})]})]}),w("div",{children:w(a,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[w("p",{children:"Like similar CSS libraries, a grid contains 12 columns."}),te("p",{children:["An element with class ",w("code",{children:"col-1"})," will span just one column, whilst an element with class ",w("code",{children:"col-4"})," will span 4 columns (or 33.333% of the available space) and an element with ",w("code",{children:"col-12"})," will span the whole width of the grid."]}),te("p",{children:["Grids can combine columns of multiple widths. The generic ",w("code",{children:"col"})," class will fill all available space."]}),w("article",{children:te("div",{className:"row disable-mobile",children:[w("div",{className:"col-2",children:w("code",{style:{width:"100%"},children:"col-2"})}),w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})}),w("div",{className:"col-6",children:w("code",{style:{width:"100%"},children:"col-6"})})]})})]}),w("div",{children:w(a,{lang:"xml",children:`<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[w("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),te("figure",{children:[w("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-columns",e,t)}),w("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),w("div",{children:w(a,{lang:"xml",children:`<div class="row">
  <div>
    <p>
      <code>...</code>
    </p>
  </div>
  <div>
    <p>
      <code>...</code>
    </p>
  </div>
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Finally, you can even omit the ",w("code",{children:"col"})," class entirely. A ",w("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",w("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",w("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),w("article",{children:te("div",{className:"row disable-mobile",children:[w("img",{width:"80",height:"80",src:i.resImg("16-80x80.jpg",t),alt:"sample image"}),w("div",{children:w("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),w("div",{children:w(a,{lang:"xml",children:`<div class="row">
  <p width="80" height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}l(lt,"Grids");import{jsx as z,jsxs as ye}from"https://esm.sh/react@19.2.6/jsx-runtime";function nt({theme:e}){return z(p,{theme:e,children:ye("section",{className:"row",children:[ye("div",{children:[z("p",{children:"There are three classes that allow you to set different content widths:"}),ye("table",{children:[z("thead",{children:ye("tr",{children:[z("th",{children:"Class"}),z("th",{children:"Width"}),z("th",{children:"Info"})]})}),ye("tbody",{children:[ye("tr",{children:[z("td",{children:z("code",{children:"container-narrow"})}),z("td",{children:"800px"}),z("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),ye("tr",{children:[z("td",{children:z("code",{children:"container-medium"})}),z("td",{children:"1200px"}),z("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),ye("tr",{children:[z("td",{children:z("code",{children:"container-wide"})}),z("td",{children:"1600px"}),z("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]}),ye("tr",{children:[z("td",{children:z("code",{children:"container-full"})}),z("td",{children:"100%"}),ye("td",{children:["Sets the size of the container to 100%. When ",z("code",{children:"container-wide"})," is not enough."]})]})]})]}),z("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),z("div",{children:z(a,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}l(nt,"Containers");import{jsx as O,jsxs as Q}from"https://esm.sh/react@19.2.6/jsx-runtime";function dt({theme:e}){let t=S();return Q(p,{theme:e,children:[Q("section",{className:"row",children:[Q("div",{children:[Q("p",{children:["Some elements are visually meant to ",O("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",O("code",{children:"group"})," role."]}),Q("p",{children:["In the case of a group of ",O("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),Q("p",{role:"group",children:[O("button",{children:"Option 1"}),O("button",{type:"reset",children:"Option 2"})]})]}),O("div",{children:O(a,{lang:"xml",children:`<p role="group">
  <button>
    Option 1
  </button>f
  <button type="reset">
    Option 2
  </button>
</p>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[Q("p",{children:["In the case of a group of ",O("code",{children:"marks"}),", they're also pulled together and have any vertical space dissapear."]}),Q("p",{role:"group",children:[O("mark",{children:"#test"}),O("mark",{className:"success",children:"v1.0.0"})]})]}),O("div",{children:O(a,{lang:"xml",children:`<p role="group">
  <mark>
    #test
  </mark>
  <mark class="success">
    v1.0.0
  </mark>
</p>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[O("p",{children:"Grouping elements really shines in the case of forms and form inputs. You can see below an example of a compact login form."}),O("form",{children:Q("div",{role:"group",children:[O("input",{id:"email",type:"email",placeholder:"Email"}),O("input",{id:"password",type:"password",placeholder:"Password"}),O("input",{type:"submit",value:"Login"})]})})]}),O("div",{children:O(a,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      id="password" 
      type="password" 
      placeholder="Password"/>
    <input 
      type="submit" 
      value="Login"/>
  </div>
</form>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[O("p",{children:"Grouping elements can be used to style icons and text together."}),Q("div",{role:"group",children:[Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),O("circle",{cx:"12",cy:"10",r:"3"})]}),O("b",{children:"Test Address, SE11 8CL"})]})]}),O("div",{children:O(a,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...>
  </svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[O("p",{children:"Other elements, such as images, can also be grouped, although the impact isn't as pronounced."}),Q("p",{role:"group",children:[O("img",{width:"80",height:"80",src:i.resImg("16-80x80.jpg",t),alt:"image 1"}),O("img",{width:"80",height:"80",src:i.resImg("16-80x80.jpg",t),alt:"image 2"})]})]}),O("div",{children:O(a,{lang:"xml",children:`<p role="group">
  <img 
    width="80" 
    height="80" 
    src="..." 
    alt="image 1"/>
  <img 
    width="80" 
    height="80" 
    src="..." 
    alt="image 2"/>
</p>`})})]})]})}l(dt,"Groups");import{jsx as J,jsxs as we}from"https://esm.sh/react@19.2.6/jsx-runtime";function ct({theme:e}){let t=S();return we(p,{theme:e,children:[we("section",{className:"row",children:[we("div",{children:[we("p",{children:["A ",J("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",J("code",{children:"nav"})," or ",J("code",{children:"menu"}),"):"]}),J("iframe",{scrolling:"no",width:"100%",height:275,src:i.example("layout-header-simple",e,t)}),J("p",{children:J("a",{href:i.example("layout-header-simple",e,t),target:"_blank",children:"See standalone example"})})]}),J("div",{children:J(a,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          Home
        </a>
      </li>
      <li>
        <a href="...">
          About
        </a>
      </li>
    </ul>
  </nav>
</header>
<main>
  <h1>Title</h1>
  <p>Lorem ipsum...</p>
</main>`})})]}),we("section",{className:"row",children:[we("div",{children:[we("p",{children:['You create more complex "hero" layouts by placing any element, such as a ',J("code",{children:"div"}),", inside a header. Note that heroes are defined by the extra top and bottom padding child elements receive."]}),J("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("layout-header-sub",e,t)}),J("p",{children:J("a",{href:i.example("layout-header-sub",e,t),target:"_blank",children:"See standalone example"})})]}),J("div",{children:J(a,{lang:"xml",children:`<!-- nav header -->
<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          Home
        </a>
      </li>
    </ul>
  </nav>
</header>

<!-- hero header -->
<header>
  <div class="align-center">
    <h2>
      My blog
    </h2>
    <p>
      Lorem ipsum...
    </p>
    <form action="...">
      <div role="group">
        <input 
          type="email" 
          placeholder="..."/>
        <input 
          type="submit" 
          value="Subscribe"/>
      </div>
    </form>
  </div>
</header>

<!-- main content -->
<main>
  <h1>Title</h1>
  <p>Lorem ipsum...</p>
</main>`})})]}),we("section",{className:"row",children:[we("div",{children:[we("p",{children:["Finally, ",J("code",{children:"aside"}),' is another specialised element that can be used in a header in order to create a "banner" element, either to be placed at the top of the page or mid-content.']}),J("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("layout-header-section",e,t)}),J("p",{children:J("a",{href:i.example("layout-header-section",e,t),target:"_blank",children:"See standalone example"})})]}),J("div",{children:J(a,{lang:"xml",children:`<main>
  <header>
    <aside>
      <div role="group">
        <div class="row">
          <div>
            ...
          </div>
          <!-- gap -->
          <div></div>
          <button>
            Download
          </button>
        </div>
      </div>
    </aside>
  </header>
</main>`})})]})]})}l(ct,"Header");import{jsx as V,jsxs as Te}from"https://esm.sh/react@19.2.6/jsx-runtime";function mt({theme:e}){let t=S();return V(p,{theme:e,children:Te("section",{className:"row",children:[Te("div",{children:[Te("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",V("code",{children:"nav"})," element."]}),Te("p",{children:["As with unordered lists, you can denote the selected elment using the ",V("code",{children:"aria-selected"})," attribute."]}),V("nav",{className:"disable-mobile",children:Te("ol",{children:[V("li",{children:V("a",{href:"",children:"Home"})}),V("li",{children:V("a",{href:"",children:"Library"})}),V("li",{"aria-selected":!0,children:V("a",{href:"",children:"Data"})})]})}),V("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),V("nav",{className:"disable-mobile",children:Te("ol",{children:[V("li",{children:Te("a",{href:"",children:[Te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[V("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),V("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),V("span",{children:"Home"})]})}),V("li",{"aria-selected":!0,children:V("a",{href:"",children:"Folder"})})]})}),V("p",{children:"Finally, breadcrumbs are also responsive."}),Te("figure",{children:[V("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-breadcrumbs",e,t)}),V("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),V("div",{children:V(a,{lang:"xml",children:`<nav>
  <ol>
    <li>
      <a href="...">
        <svg ...></svg>
        <span>
          Home
        </span>
      </a>
    </li>
    <li>
      <a href="...">
        Library
      </a>
    </li>
    <li aria-selected>
      <a href="...">
        Data
      </a>
    </li>
  </ol>
</nav>`})})]})})}l(mt,"Breadcrumbs");import{useState as ao}from"https://esm.sh/react@19.2.6";import{jsx as X,jsxs as Ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function Lt(){let[e,t]=ao("tab-1");return X("main",{children:Ee("div",{className:"row disable-mobile",children:[X("aside",{children:X("div",{children:Ee("menu",{children:[X("li",{"aria-selected":e==="tab-1",children:Ee("a",{onClick:()=>t("tab-1"),children:[Ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),X("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),X("span",{children:"Home"})]})}),X("li",{"aria-selected":e==="tab-2",children:Ee("a",{onClick:()=>t("tab-2"),children:[X("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:X("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),X("span",{children:"Install"})]})}),X("li",{"aria-selected":e==="tab-3",children:Ee("a",{onClick:()=>t("tab-3"),children:[Ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X("circle",{cx:"12",cy:"12",r:"10"}),X("path",{d:"M17 12h.01"}),X("path",{d:"M12 12h.01"}),X("path",{d:"M7 12h.01"})]}),X("span",{children:"More"})]})})]})})}),Ee("div",{style:{flexGrow:1},children:[e==="tab-1"?X(wt,{}):null,e==="tab-2"?X(xt,{}):null,e==="tab-3"?X(kt,{}):null]})]})})}l(Lt,"MobileTabs");import{useState as io}from"https://esm.sh/react@19.2.6";import{jsx as L,jsxs as K}from"https://esm.sh/react@19.2.6/jsx-runtime";function pt({theme:e}){let[t,r]=io("primary");return L(p,{theme:e,children:K("section",{className:"row",children:[K("div",{children:[K("p",{children:["You can apply several color modes with the help of few classes like ",L("code",{children:"primary"}),", ",L("code",{children:"secondary"}),", ",L("code",{children:"success"})," and ",L("code",{children:"error"}),"."]}),K("p",{children:["You can combine them with the ",L("code",{children:"inverted"})," class to change the colors of various components."]}),L("form",{children:K("label",{children:[L("span",{children:L("b",{children:"Color mode"})}),K("select",{onChange:l(h=>r(h.target.value),"onColorClassChange"),children:[L("option",{value:"primary",children:"Primary"}),L("option",{value:"secondary",children:"Secondary"}),L("option",{value:"success",children:"Success"}),L("option",{value:"error",children:"Error"})]})]})}),L("hr",{}),K("section",{children:[K("hgroup",{children:[K("h1",{children:[L("span",{className:`${t}`,children:"Lorem ipsum dolor"}),L("br",{}),"sit amet"]}),K("h4",{children:["Lorem ipsum dolor sit amet,",L("br",{}),L("span",{className:`${t} inverted`,children:"sed do amet"})]})]}),K("p",{role:"group",children:[L("mark",{className:`${t}`,children:"v12.5.33"}),L("mark",{className:`${t} inverted`,children:"Passing"})]})]}),L("section",{children:L("form",{children:K("div",{role:"group",className:`${t}`,children:[L("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),L("input",{type:"submit",value:"Subscribe"})]})})}),K("section",{children:[K("div",{className:"row",children:[K("article",{className:`${t}`,children:[K("hgroup",{children:[L("h4",{children:"Hobby"}),L("p",{children:L("b",{children:"Free"})})]}),L("p",{children:"Includes"}),K("ul",{children:[L("li",{children:"No credit card"}),L("li",{children:"All platforms"})]})]}),K("article",{className:`${t} inverted`,children:[K("hgroup",{children:[L("h4",{children:"Enterprise"}),L("p",{children:L("b",{children:L("a",{href:"",children:"Contact us"})})})]}),L("p",{children:"Includes"}),K("ul",{children:[L("li",{children:"Everything in Hobby"}),L("li",{children:"24/7 support"})]})]})]}),L("blockquote",{className:`${t}`,children:K("hgroup",{children:[L("h4",{children:"More information"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),K("p",{children:["Link ",L("a",{href:"",children:"here"}),"."]})]})})]})]}),L("div",{children:L(a,{lang:"xml",children:`...
<h1>
  <span class="${t}">
    Lorem ipsum dolor
  </span>
  <br/>
  <span>
    sit amet
  </span>
</h1>

<h4>
  Lorem ipsum dolor sit amet,
  <br/>
  <span class="${t} inverted">
    sed do amet
  </span>
</h4>

...

<p role="group">
  <mark class="${t}">
    v12.5.33 
  </mark>
  <mark class="${t} inverted">
    Passing
  </mark>
</p>

...

<form>
  <div class="group ${t}">
    <input .../>
    <input .../>
  </div>
</form>

...

<div class="row">
  <article class="${t}">
    ...
  </article>
  <article class="${t} inverted">
    ...
  </article>
</div>
<div class="row">
  <blockquote class="${t}">
    ...
  </blockquote>
</div>
`})})]})})}l(pt,"Colors");import{jsx as ge,jsxs as Ie}from"https://esm.sh/react@19.2.6/jsx-runtime";function ut({theme:e}){let t=S();return Ie(p,{theme:e,children:[Ie("section",{className:"row",children:[Ie("div",{children:[Ie("p",{children:["A ",ge("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),ge("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("layout-footer-simple",e,t)}),ge("p",{children:ge("a",{href:i.example("layout-footer-simple",e,t),target:"_blank",children:"See standalone example"})})]}),ge("div",{children:ge(a,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer with a <a href="...">link</a>.
  </div>
</footer>`})})]}),Ie("section",{className:"row",children:[Ie("div",{children:[ge("p",{children:"More complex footers can contain information divided by columns, etc."}),ge("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("layout-footer-complex",e,t)}),ge("p",{children:ge("a",{href:i.example("layout-footer-complex",e,t),target:"_blank",children:"See standalone example"})})]}),ge("div",{children:ge(a,{lang:"xml",children:`<footer>
  <div>
    <div class="row">
      <!-- first column -->
      <div>
        <nav>
          <ul>
            <b>COMPANY</b>
            <li>...</li>
            <li>...</li>
          </ul>
        </nav>
      </div>
      <!-- second column -->
      <div>
        <nav>
          <ul>
            <b>DEVELOPERS<b/>
            <li>...</li>
          </ul>
        </nav>
      </div>
      <!-- empty column -->
      <div></div>
    </div>
  </div>
</footer>`})})]})]})}l(ut,"Footer");import{useState as ro}from"https://esm.sh/react@19.2.6";import{jsx as $,jsxs as Z}from"https://esm.sh/react@19.2.6/jsx-runtime";function ht({theme:e}){let[t,r]=ro(!0);return Z(p,{theme:e,children:[Z("section",{className:"row",children:[Z("div",{children:[Z("p",{children:["You can add a loading indicator to an element by adding the ",$("code",{children:"aria-busy"})," attribute, with ",Z("span",{role:"group",style:{display:"inline-flex"},children:[$("mark",{onClick:()=>r(!0),className:t?"success":"",children:"true"}),$("mark",{onClick:()=>r(!1),className:t?"":"success",children:"false"})]}),"."]}),$("p",{children:"For example, it can be applied to buttons (with or without exiting icons):"}),Z("p",{className:"flex",children:[$("button",{"aria-busy":t,children:Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M4 11a9 9 0 0 1 9 9"}),$("path",{d:"M4 4a16 16 0 0 1 16 16"}),$("circle",{cx:"5",cy:"19",r:"1"})]})}),$("button",{"aria-busy":t,role:"reset",children:"Button"}),Z("button",{"aria-busy":t,className:"secondary",children:[Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),$("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),$("span",{children:"Home"})]}),Z("button",{type:"reset","aria-busy":t,children:[$("span",{children:"Play"}),Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M21 4v16"}),$("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]})]}),$("div",{children:$(a,{lang:"xml",children:`<!-- icon button -->
<button${t?" aria-busy":""}>
  <svg ...></svg>
</button>
          
<!-- text button -->
<button${t?" aria-busy":""}>
  Button
</button>

<!-- left side icon -->
<button${t?" aria-busy":""}>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset"${t?" aria-busy":""}>
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[$("p",{children:"It can be applied to paragraphs or other text elements:"}),$("p",{"aria-busy":t,children:"Loading..."}),$("p",{children:$("a",{href:"","aria-busy":t,children:"Click me"})})]}),$("div",{children:$(a,{lang:"xml",children:`<p${t?" aria-busy":""}>Loading...</p>
          
<a href="..."${t?" aria-busy":""}>Click me</a>`})})]}),Z("section",{className:"row",children:[$("div",{}),$("div",{})]}),Z("section",{className:"row",children:[Z("div",{children:[$("p",{children:"Or it can be applied to block elements. In this case the whole content is hidden when loading."}),$("blockquote",{"aria-busy":t,children:Z("p",{children:["Press",$("kbd",{children:"Ctrl + Q"}),"to quit"]})})]}),$("div",{children:$(a,{lang:"xml",children:`<blockquote${t?" aria-busy":""}>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[$("p",{children:"And cards of different types, where the loading spinner is also horizontally centered."}),$("article",{"aria-busy":t,children:Z("details",{open:!0,children:[$("summary",{children:"Note"}),$("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),Z("article",{"aria-busy":t,className:"success",children:[$("span",{children:$("b",{children:"Title"})}),$("p",{children:"Lorem ipsum ..."})]})]}),$("div",{children:$(a,{lang:"xml",children:`<article${t?" aria-busy":""}>
  <details>
    <summary>...</summary>
    <p>...</p>
  </details>
</article>

<article${t?" aria-busy":""}>
  <span><b>...</b></span>
  <p>...</p>
</article>`})})]})]})}l(ht,"Loading");import{jsx as o,jsxs as g}from"https://esm.sh/react@19.2.6/jsx-runtime";function gt({theme:e}){let t=S();return g(p,{theme:e,children:[g("section",{className:"row",children:[g("div",{children:[g("p",{children:["Any element can be turned into a ",o("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels",target:"_blank",children:"carousel"})," by adding the ",o("code",{children:'aria-roledescription="carousel"'})," attribute, as recommended by ",o("a",{href:'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/"',target:"_blank",children:"the W3C"}),"."]}),g("p",{children:["Ordered or unordered lists are preffered, because they work without specifying the additional ",o("code",{children:'aria-roledescription="slide"'})," attribute on each individual slide."]}),g("p",{children:["The ",o("code",{children:"aria-label"})," attribute can be used to give information about the contents of the carousel."]}),g("ol",{"aria-roledescription":"carousel","aria-label":"Simple Carousel",children:[o("li",{children:g("div",{children:[o("h3",{children:"Page 1"}),o("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}),o("li",{children:g("div",{children:[o("h3",{children:"Page 2"}),o("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),o("div",{children:o("a",{href:"",children:"https://example.com"})})]})}),o("li",{children:g("div",{children:[o("h3",{children:"Page 3"}),o("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),o("pre",{children:o("code",{children:"d488e0a9-fd57-4876-bc57-fa373d949379"})})]})})]})]}),o("div",{children:o(a,{lang:"xml",children:`<ol aria-roledescription="carousel">
  <li>
    <div>
      <h3>Page 1</h3>
      <div>Lorem ipsum ...</div>
    </div>
  </li>
  <li>
    <div>
      <h3>Page 2</h3>
      <p>Set ut ...</p>
      <div><a href="...">...</a>
    </div>
  </li>
  <li>
    <div>
      <h3>Page 3</h3>
      <p>Nemo enum ...</p>
      <pre><code>...</code></pre>
    </div>
  </li>
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[o("p",{children:"Image carousels can be created just as easily as text ones."}),g("ol",{"aria-roledescription":"carousel","aria-label":"Image Carousel",children:[o("li",{children:o("img",{width:"100%",height:250,src:i.resImg("16-500x250.jpg",t),alt:"Slide Image 1"})}),o("li",{children:o("img",{width:"100%",height:250,src:i.resImg("100-500x250.jpg",t),alt:"Slide Image 2"})}),o("li",{children:o("img",{width:"100%",height:250,src:i.resImg("40-500x250.jpg",t),alt:"Slide Image 3"})})]}),o("figcaption",{children:"With one caption for the entire element."})]}),o("div",{children:o(a,{lang:"xml",children:`<ol aria-roledescription="carousel">
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 1"/>
  </li>
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 2"/>
  </li>
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 3"/>
  </li>
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[g("p",{children:["Carousel slides can, in fact, hold all sorts of complex components. More interestingly, they can be combined with ",o("a",{href:i.doc("grid",e,t),children:"grids"})," to produce a variety of layouts."]}),o("p",{children:"If you choose a column size that divides the available space neatly into equal parts, you can place a number of preview slides on the viewport, whilst keeping the rest hidden."}),g("table",{children:[o("thead",{children:g("tr",{children:[o("th",{children:"Class"}),o("th",{children:"Outcome"})]})}),g("tbody",{children:[g("tr",{children:[o("td",{children:o("code",{children:"col"})}),o("td",{children:"All slides will be visible"})]}),g("tr",{children:[o("td",{children:o("code",{children:"col-1"})}),o("td",{children:"The first 12 slides will be visible"})]}),g("tr",{children:[o("td",{children:o("code",{children:"col-2"})}),o("td",{children:"The first 6 slides will be visible"})]}),g("tr",{children:[o("td",{children:o("code",{children:"col-3"})}),o("td",{children:"The first 4 slides will be visible"})]}),g("tr",{children:[o("td",{children:o("code",{children:"col-4"})}),o("td",{children:"The first 3 slides will be visible"})]}),g("tr",{children:[o("td",{children:o("code",{children:"col-5"})}),o("td",{children:"The first 2 slides will be visible"})]})]})]}),g("ol",{"aria-roledescription":"carousel","aria-label":"Ordering Menu",className:"row disable-mobile",children:[o("li",{className:"col-6",children:g("article",{children:[o("img",{height:"120",src:i.resImg("216-480x120.jpg",t),alt:"header image 1"}),g("hgroup",{children:[o("h4",{children:"Botanical Garden"}),o("p",{children:"Lorem ipsum dolor sit amet"})]}),o("p",{children:o("mark",{className:"success",children:"25% off"})}),o("p",{children:o("a",{href:"",children:"Book"})})]})}),o("li",{className:"col-6",children:g("article",{children:[o("img",{height:"120",src:i.resImg("42-480x120.jpg",t),alt:"header image 2"}),g("hgroup",{children:[o("h4",{children:"Brunch"}),o("p",{children:"Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"})]}),o("p",{children:o("a",{href:"",children:"Book"})})]})}),o("li",{className:"col-6",children:g("article",{children:[o("img",{height:"120",src:i.resImg("211-480x120.jpg",t),alt:"header image 3"}),g("hgroup",{children:[o("h4",{children:"Boat trip"}),o("p",{children:"At vero eos et accusamus et iusto odio dignissimos"})]}),o("p",{children:o("a",{href:"",children:"Book"})})]})})]})]}),o("div",{children:o(a,{lang:"xml",children:`<ol aria-roledescription="carousel" class="row">
  <!-- the first two slides will be visible -->
  <li class="col-6">
    <article>
      <img height="120" src="..."/>
      <hgroup>
        <h4>Botanical Garden</h4>
        <p>Lorem ipsum ...</p>
        <p>
          <mark class="success">25% off</mark>
        </p>
        <p><a href="...">Book</a>
      </hgroup>
    </article>
  </li>
  <li class="col-6">
    <article>
      <img height="120" src="..."/>
      <hgroup>
        <h4>Brunch</h4>
        <p>Vel illum ...</p>
        <p><a href="...">Book</a>
      </hgroup>
    </article>
  </li>
  <!-- this one will be initially hidden -->
  <li class="col-6">
    <article>
      <img height="120" src="..."/>
      <hgroup>
        <h4>Boat trip</h4>
        <p>At vero eos ...</p>
        <p><a href="...">Book</a>
      </hgroup>
    </article>
  </li>
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[o("p",{children:"If you choose a column size that does not divide the avaibale space neatly, you can generate a preview of the next slides."}),g("p",{children:["Below is an example using ",o("code",{children:"col-11"}),", which will mean most on large displays the first slide will be fully visible whilst the second will peek from the right."]}),g("p",{children:["A choise of ",o("code",{children:"col-5"})," will allow two slides to be fully visible and a third to peek, whilst choices like ",o("code",{children:"col-7"}),", ",o("code",{children:"col-8"}),", etc will allow more or less of the second slide to peek through."]}),o("p",{children:"Note on smaller devices carousels are responsive, so only one slide will be visible."}),o("article",{children:g("ol",{"aria-roledescription":"carousel","aria-label":"Plane Tickets",className:"row disable-mobile",children:[o("li",{className:"col-11",children:g("article",{children:[o(_t,{src:"New York",dest:"Paris"}),o("hr",{}),o(vt,{start:"12:15",startDelay:"On time",end:"20:00",endDelay:"On time",type:"Direct"}),o(vt,{start:"13:25",startDelay:"On time",end:"21:00",endDelay:"Delayed",type:"Direct"}),o(Yt,{}),o("hr",{}),o(Vt,{})]})}),o("li",{className:"col-11",children:g("article",{children:[o(_t,{src:"Tokyo",dest:"London"}),o("hr",{}),o(vt,{start:"06:00",startDelay:"On time",end:"18:00",endDelay:"Delayed",type:"Direct"}),o(vt,{start:"06:15",startDelay:"On time",end:"18:15",endDelay:"On time",type:"Direct"}),o(Yt,{}),o("hr",{}),o(Vt,{})]})})]})})]}),o("div",{children:o(a,{lang:"xml",children:`<ol aria-roledescription="carousel" class="row">
  <li class="col-11">
    ...
  </li>
  <li class="col-11">
    ...
  </li>
  <li class="col-11">
    ...
  </li>
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[o("p",{children:"In previous examples each column also represents a single carousel slide. Using the same mechanism you can group multiple elements together on the same slide."}),g("ol",{"aria-roledescription":"carousel","aria-label":"Multi Column Example",children:[g("li",{className:"row disable-mobile",children:[g("div",{children:[o("p",{children:o("mark",{className:"primary",children:o("b",{children:"1"})})}),o("p",{children:o("b",{children:"Page 1.1"})}),o("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),g("div",{children:[o("p",{children:o("mark",{className:"success",children:o("b",{children:"2"})})}),o("p",{children:o("b",{children:"Page 1.2"})}),o("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"})]})]}),g("li",{className:"row disable-mobile",children:[g("div",{children:[o("p",{children:o("mark",{className:"secondary",children:o("b",{children:"2"})})}),o("p",{children:o("b",{children:"Page 2.1"})}),o("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]}),g("div",{children:[o("p",{children:o("mark",{className:"error",children:o("b",{children:"2"})})}),o("p",{children:o("b",{children:"Page 2.2"})}),o("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})]})]}),o("div",{children:o(a,{lang:"xml",children:`<ol aria-roledescription="carousel">
  <!-- first slide -->
  <li class="row">
    <!-- each of the two pages -->
    <div>...</div>
    <div>...</div>
  </li>
  <!-- second slide -->
  <li class="row">
    <!-- each of the two pages -->
    <div>...</div>
    <div>...</div>
  </li>
</ol>`})})]})]})}l(gt,"Carousel");function _t(e){return o("div",{role:"group",children:g("div",{className:"row disable-mobile",children:[o("mark",{children:o(so,{})}),g("div",{children:[o("b",{children:e.src}),o("br",{}),o("b",{children:e.dest})]})]})})}l(_t,"OrderingHeader");function vt(e){return g("div",{className:"row disable-mobile",children:[g("div",{children:[o("b",{children:e.start}),o("br",{}),o("i",{children:o("small",{className:e.startDelay==="Delayed"?"error":"",children:e.startDelay})})]}),o("div",{children:o(lo,{})}),g("div",{children:[o("b",{children:e.end}),o("br",{}),o("i",{children:o("small",{className:e.endDelay==="Delayed"?"error":"",children:e.endDelay})})]}),o("div",{children:o("mark",{children:e.type})})]})}l(vt,"OrderingDetails");function Yt(){return o("div",{children:o("a",{children:o("b",{children:"View more options"})})})}l(Yt,"OrderingOptions");function Vt(){return o("div",{children:g("div",{className:"row disable-mobile",children:[o("div",{}),o("button",{type:"submit",children:"Book"})]})})}l(Vt,"OrderingControl");function so(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o("path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}),o("path",{d:"M13 5v2"}),o("path",{d:"M13 17v2"}),o("path",{d:"M13 11v2"})]})}l(so,"TicketIcon");function lo(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o("path",{d:"M5 12h14"}),o("path",{d:"m12 5 7 7-7 7"})]})}l(lo,"ArrowIcon");import{jsx as De,jsxs as Ut}from"https://esm.sh/react@19.2.6/jsx-runtime";function bt({theme:e}){let t=S();return De(p,{theme:e,children:Ut("section",{className:"row",children:[Ut("div",{children:[De("p",{children:"A carousel placed inside a header element will automatically form a hero element, where each slide extends as wide as the screen whilst the content stays correctly centered."}),De("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("carousel-header",e,t)}),De("p",{children:De("a",{href:i.example("carousel-header",e,t),target:"_blank",children:"See standalone example"})})]}),De("div",{children:De(a,{lang:"xml",children:`<header>
  <ol aria-roledescription="carousel">
    <!-- the slide can have a strong, bold, colour -->
    <!-- or a background image -->
    <li class="primary inverted">
      <!-- make sure the child is a layout element -->
      <div>
        <br>
        <h1>...</h1>
        <p>...</p>
        </br>
      </div>
    </li>
    <li class="secondary inverted">
      <div>...</div>
    <li>
  </ol>
</header>`})})]})})}l(bt,"CarouselHeader");var i=class e{static{l(this,"RouteMaster")}static baseRoute="";static home(t,r){return`${e.getBase(r)}${t}/`}static showcase(t,r){return`${e.getBase(r)}${t}/showcases.html`}static doc(t,r,F){let h=e.getBase(F);switch(t){case"typography":return`${h}${r}/pages/docs/basics/${d(Ae)}`;case"buttons":return`${h}${r}/pages/docs/basics/${d(Fe)}`;case"blockquotes":return`${h}${r}/pages/docs/basics/${d(Oe)}`;case"code":return`${h}${r}/pages/docs/basics/${d(Re)}`;case"figures":return`${h}${r}/pages/docs/basics/${d(We)}`;case"lists":return`${h}${r}/pages/docs/basics/${d(_e)}`;case"links":return`${h}${r}/pages/docs/basics/${d(Pe)}`;case"summary":return`${h}${r}/pages/docs/basics/${d(ze)}`;case"table":return`${h}${r}/pages/docs/basics/${d(Ge)}`;case"tags":return`${h}${r}/pages/docs/basics/${d(je)}`;case"cards":return`${h}${r}/pages/docs/basics/${d(rt)}`;case"forms-check":return`${h}${r}/pages/docs/forms/${d(Ye)}`;case"forms-disabled":return`${h}${r}/pages/docs/forms/${d(Ve)}`;case"forms-grouped":return`${h}${r}/pages/docs/forms/${d(Ue)}`;case"forms-normal":return`${h}${r}/pages/docs/forms/${d(Ke)}`;case"forms-validation":return`${h}${r}/pages/docs/forms/${d(Ze)}`;case"header":return`${h}${r}/pages/docs/layout/${d(ct)}`;case"footer":return`${h}${r}/pages/docs/layout/${d(ut)}`;case"carousel":return`${h}${r}/pages/docs/layout/${d(gt)}`;case"carousel-header":return`${h}${r}/pages/docs/layout/${d(bt)}`;case"groups":return`${h}${r}/pages/docs/layout/${d(dt)}`;case"modal":return`${h}${r}/pages/docs/layout/${d(Je)}`;case"navigation":return`${h}${r}/pages/docs/navigation/${d(Xe)}`;case"breadcrumbs":return`${h}${r}/pages/docs/navigation/${d(mt)}`;case"tabs":return`${h}${r}/pages/docs/navigation/${d(et)}`;case"menu":return`${h}${r}/pages/docs/navigation/${d(tt)}`;case"dark-mode":return`${h}${r}/pages/docs/extra/${d(ot)}`;case"icons":return`${h}${r}/pages/docs/extra/${d(at)}`;case"loading":return`${h}${r}/pages/docs/extra/${d(ht)}`;case"mobile":return`${h}${r}/pages/docs/extra/${d(it)}`;case"classes":return`${h}${r}/pages/docs/custom/${d(st)}`;case"grid":return`${h}${r}/pages/docs/custom/${d(lt)}`;case"containers":return`${h}${r}/pages/docs/custom/${d(nt)}`;case"colors":return`${h}${r}/pages/docs/custom/${d(pt)}`;default:return"/"}}static getDocFromRoute(t){let F=t.split("/docs/").pop(),[h,b]=F?.split("/")??[];switch(h){case"basics":switch(b){case d(Ae):return"typography";case d(Fe):return"buttons";case d(Oe):return"blockquotes";case d(Re):return"code";case d(We):return"figures";case d(Pe):return"links";case d(_e):return"lists";case d(ze):return"summary";case d(Ge):return"table";case d(je):return"tags";case d(rt):return"cards"}case"forms":switch(b){case d(Ye):return"forms-check";case d(Ve):return"forms-disabled";case d(Ue):return"forms-grouped";case d(Ke):return"forms-normal";case d(Ze):return"forms-validation"}case"layout":switch(b){case d(ct):return"header";case d(ut):return"footer";case d(gt):return"carousel";case d(bt):return"carousel-header";case d(dt):return"groups";case d(Je):return"modal"}case"navigation":switch(b){case d(Xe):return"navigation";case d(mt):return"breadcrumbs";case d(et):return"tabs";case d(tt):return"menu"}case"extra":switch(b){case d(ot):return"dark-mode";case d(at):return"icons";case d(ht):return"loading";case d(it):return"mobile"}case"custom":switch(b){case d(st):return"classes";case d(lt):return"grid";case d(nt):return"containers";case d(pt):return"colors"}}}static example(t,r,F){let h=e.getBase(F);switch(t){case"desktop-menu":return`${h}${r}/pages/examples/${d(It)}`;case"layout-header-simple":return`${h}${r}/pages/examples/${d(Ft)}`;case"layout-header-sub":return`${h}${r}/pages/examples/${d(Ht)}`;case"layout-header-section":return`${h}${r}/pages/examples/${d(qt)}`;case"layout-footer-simple":return`${h}${r}/pages/examples/${d(Pt)}`;case"layout-footer-complex":return`${h}${r}/pages/examples/${d(zt)}`;case"mobile-columns":return`${h}${r}/pages/examples/${d(At)}`;case"mobile-menu":return`${h}${r}/pages/examples/${d(Ot)}`;case"mobile-nav":return`${h}${r}/pages/examples/${d(Rt)}`;case"mobile-breadcrumbs":return`${h}${r}/pages/examples/${d(Bt)}`;case"mobile-tabs-nav":return`${h}${r}/pages/examples/${d(Lt)}`;case"mobile-tabs-exp-nav":return`${h}${r}/pages/examples/${d(Gt)}`;case"mobile-typography":return`${h}${r}/pages/examples/${d(Wt)}`;case"carousel-header":return`${h}${r}/pages/examples/${d(jt)}`}}static showcases(t,r){return`${e.getBase(r)}showcase/${t}/${St(t)}.html`}static showcaseImg(t,r,F="light"){return`${e.getBase(r)}showcase/${t}/${St(t)}.${F}.png`}static resImg(t,r){return`${e.getBase(r)}res/${t}`}static getBase(t){return t?t===""?"/":`/${t}/`:"/"}};function d(e){return`${St(e.name)}.html`}l(d,"htmlName");function St(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}l(St,"toKebabCase");import{jsx as P,jsxs as Me}from"https://esm.sh/react@19.2.6/jsx-runtime";function Nt(){let e=Dt(),t=S(),r=l(F=>{let h=F.target.value;if(typeof window<"u"){let b=window.location.pathname;if(b.includes(e)){let pe=b.replace(e,h);window.location.href=pe}else if(b.includes(qe)){let pe=b.split("/"),ue=pe.indexOf(qe)+1;pe.splice(ue,0,h);let Zt=pe.join("/");window.location.href=Zt}else{let pe=`/${h}${b}`;window.location.href=pe}}},"onThemeChange");return P("nav",{children:Me("ul",{children:[P("li",{children:Me("a",{href:i.home(e,t),children:[Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),P("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),P("span",{children:"Home"})]})}),P("li",{children:Me("a",{href:i.showcase(e,t),children:[Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),P("circle",{cx:"12",cy:"12",r:"3"})]}),P("span",{children:"Showcase"})]})}),P("div",{}),P("li",{className:"hide-on-desktop",children:Me("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),P("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),P("span",{children:"GitHub"})]})}),P("li",{children:Me("select",{name:"theme-selector",onChange:r,children:[P("option",{value:"default",selected:e==="default",children:"Default"}),P("option",{value:"blog",selected:e==="blog",children:"Blog"}),P("option",{value:"app",selected:e==="app",children:"App"}),P("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),P("option",{value:"landing",selected:e==="landing",children:"Landing"}),P("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),P("li",{className:"hide-on-mobile",children:P("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:P("button",{type:"reset",children:Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),P("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}l(Nt,"TopNav");import{jsx as Tt,jsxs as no}from"https://esm.sh/react@19.2.6/jsx-runtime";function Mt({theme:e,children:t}){return no(Et,{value:e,children:[Tt("header",{children:Tt(Nt,{})}),Tt("main",{children:t})]})}l(Mt,"HomeLayout");import{jsx as n,jsxs as le}from"https://esm.sh/react@19.2.6/jsx-runtime";function p({theme:e,children:t}){let r=S(),[F,h]=Kt(!1),[b,pe]=Kt(void 0);return co(()=>{if(typeof window<"u"){let ue=i.getDocFromRoute(window.location.pathname);pe(ue)}},[]),n(Mt,{theme:e,children:le("div",{className:"row",children:[le("aside",{children:[le("div",{className:"hide-on-desktop",role:"group",children:[le("div",{className:"row",children:[n("div",{children:n("button",{onClick:()=>h(!F),children:F?le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M18 6 6 18"}),n("path",{d:"m6 6 12 12"})]}):le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n("path",{d:"M7 8h10"}),n("path",{d:"M7 12h10"}),n("path",{d:"M7 16h10"})]})})}),n("span",{children:n("b",{children:"Chapters"})})]}),n("hr",{})]}),le("div",{className:F===!1||F===void 0?"hide-on-mobile":"",children:[le("menu",{children:[n("b",{children:"Basics"}),n("li",{"aria-selected":b==="typography",children:n("a",{href:i.doc("typography",e,r),children:"Typography"})}),n("li",{"aria-selected":b==="buttons",children:n("a",{href:i.doc("buttons",e,r),children:"Buttons"})}),n("li",{"aria-selected":b==="tags",children:n("a",{href:i.doc("tags",e,r),children:"Tags"})}),n("li",{"aria-selected":b==="lists",children:n("a",{href:i.doc("lists",e,r),children:"Lists"})}),n("li",{"aria-selected":b==="links",children:n("a",{href:i.doc("links",e,r),children:"Links"})}),n("li",{"aria-selected":b==="blockquotes",children:n("a",{href:i.doc("blockquotes",e,r),children:"Blokquotes"})}),n("li",{"aria-selected":b==="summary",children:n("a",{href:i.doc("summary",e,r),children:"Summary"})}),n("li",{"aria-selected":b==="code",children:n("a",{href:i.doc("code",e,r),children:"Code"})}),n("li",{"aria-selected":b==="table",children:n("a",{href:i.doc("table",e,r),children:"Table"})}),n("li",{"aria-selected":b==="figures",children:n("a",{href:i.doc("figures",e,r),children:"Figures"})}),n("li",{"aria-selected":b==="cards",children:n("a",{href:i.doc("cards",e,r),children:"Cards"})})]}),le("menu",{children:[n("b",{children:"Forms"}),n("li",{"aria-selected":b==="forms-normal",children:n("a",{href:i.doc("forms-normal",e,r),children:"Normal"})}),n("li",{"aria-selected":b==="forms-check",children:n("a",{href:i.doc("forms-check",e,r),children:"Checks & Radios"})}),n("li",{"aria-selected":b==="forms-grouped",children:n("a",{href:i.doc("forms-grouped",e,r),children:"Grouped"})}),n("li",{"aria-selected":b==="forms-disabled",children:n("a",{href:i.doc("forms-disabled",e,r),children:"Disabled"})}),n("li",{"aria-selected":b==="forms-validation",children:n("a",{href:i.doc("forms-validation",e,r),children:"Validation"})})]}),le("menu",{children:[n("b",{children:"Layout"}),n("li",{"aria-selected":b==="header",children:n("a",{href:i.doc("header",e,r),children:"Headers"})}),n("li",{"aria-selected":b==="footer",children:n("a",{href:i.doc("footer",e,r),children:"Footers"})}),n("li",{children:le("details",{open:!0,children:[n("summary",{children:"Carousel"}),le("menu",{children:[n("li",{"aria-selected":b==="carousel",children:n("a",{href:i.doc("carousel",e,r),children:"Inline"})}),n("li",{"aria-selected":b==="carousel-header",children:n("a",{href:i.doc("carousel-header",e,r),children:"Header"})})]})]})}),n("li",{"aria-selected":b==="groups",children:n("a",{href:i.doc("groups",e,r),children:"Groups"})}),n("li",{"aria-selected":b==="modal",children:n("a",{href:i.doc("modal",e,r),children:"Modal"})})]}),le("menu",{children:[n("b",{children:"Navigation"}),n("li",{"aria-selected":b==="navigation",children:n("a",{href:i.doc("navigation",e,r),children:"Basic"})}),n("li",{"aria-selected":b==="breadcrumbs",children:n("a",{href:i.doc("breadcrumbs",e,r),children:"Breadcrumbs"})}),n("li",{"aria-selected":b==="menu",children:n("a",{href:i.doc("menu",e,r),children:"Menu"})}),n("li",{"aria-selected":b==="tabs",children:n("a",{href:i.doc("tabs",e,r),children:"Tabs"})})]}),le("menu",{children:[n("b",{children:"Extra"}),n("li",{"aria-selected":b==="dark-mode",children:n("a",{href:i.doc("dark-mode",e,r),children:"Dark Mode"})}),n("li",{"aria-selected":b==="icons",children:n("a",{href:i.doc("icons",e,r),children:"Icons"})}),n("li",{"aria-selected":b==="loading",children:n("a",{href:i.doc("loading",e,r),children:"Loading"})}),n("li",{"aria-selected":b==="mobile",children:n("a",{href:i.doc("mobile",e,r),children:"Mobile"})})]}),le("menu",{children:[n("b",{children:"Custom"}),n("li",{"aria-selected":b==="grid",children:n("a",{href:i.doc("grid",e,r),children:"Grids"})}),n("li",{"aria-selected":b==="containers",children:n("a",{href:i.doc("containers",e,r),children:"Containers"})}),n("li",{"aria-selected":b==="colors",children:n("a",{href:i.doc("colors",e,r),children:"Colors"})}),n("li",{"aria-selected":b==="classes",children:n("a",{href:i.doc("classes",e,r),children:"Classes"})})]})]})]}),n("div",{children:t})]})})}l(p,"DocLayout");export{S as a,p as b,Fe as c,Ae as d,Oe as e,Re as f,We as g,Pe as h,ze as i,Ge as j,je as k,_e as l,Ye as m,Ve as n,Ue as o,Ke as p,Ze as q,Je as r,Xe as s,et as t,tt as u,ot as v,at as w,it as x,rt as y,st as z,lt as A,nt as B,dt as C,ct as D,mt as E,Lt as F,pt as G,ut as H,ht as I,gt as J,bt as K,i as L,Nt as M,Mt as N};
