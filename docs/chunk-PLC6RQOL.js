import{a as Bt}from"./chunk-MDCAHXJR.js";import{a as Ft}from"./chunk-XF2WV4YZ.js";import{a as It}from"./chunk-PRBPLC6K.js";import{a as Ht}from"./chunk-HRT75PLO.js";import{a as Et}from"./chunk-GSZ6UK6V.js";import{a as Mt}from"./chunk-6WZ2BZS5.js";import{a as Nt}from"./chunk-C74J2UAQ.js";import{a as Tt}from"./chunk-K4XVBUED.js";import{a as Dt}from"./chunk-KC2WVVTY.js";import{a as qt}from"./chunk-4F2ROYBB.js";import{b as Ct,c as Lt,d as St,e as o}from"./chunk-ANG52S5Y.js";import{a as Me}from"./chunk-7AZBNJU6.js";import{a as $t}from"./chunk-SVFQNSTA.js";import{a as r}from"./chunk-7X4DHW36.js";import{useEffect as Kt,useState as At}from"https://esm.sh/react@19.2.6";import{useState as Rt,useEffect as Ot}from"https://esm.sh/react@19.2.6";function B(){let[e,t]=Rt(void 0);return Ot(()=>{if(typeof window<"u"){let q=window.location.pathname.includes(Me)?Me:"";t(q)}},[]),e}r(B,"useRoute");import{jsx as p,jsxs as N}from"https://esm.sh/react@19.2.6/jsx-runtime";function qe({theme:e}){let t=B();return N(m,{theme:e,children:[N("section",{className:"row",children:[N("div",{children:[N("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",p("code",{children:"reset"})," type buttons)."]}),N("p",{children:[p("button",{children:"Button"}),p("button",{type:"reset",children:"Button"})]})]}),p("div",{children:p(o,{lang:"xml",children:`<button>Button</button>
<button type="reset">
  Button
</button>`})})]}),N("section",{className:"row",children:[N("div",{children:[N("p",{children:["Both types can be marked as ",p("code",{children:"disabled"}),", meaning no interaction will be possible with them."]}),N("p",{children:[p("button",{disabled:!0,children:"Disabled"}),p("button",{type:"reset",disabled:!0,children:"Disabled"})]})]}),p("div",{children:p(o,{lang:"xml",children:`<button disabled>
  Button
</button>
<button type="reset" disabled>
  Button
</button>`})})]}),N("section",{className:"row",children:[N("div",{children:[p("p",{children:"Buttons can be improved by adding svg icons, either to the left or to the right of the main button title."}),N("p",{children:[N("button",{children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),p("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),p("span",{children:"Home"})]}),N("button",{type:"reset",children:[p("span",{children:"Play"}),N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M21 4v16"}),p("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]}),p("p",{children:N("small",{children:["You can learn more about icons ",p("a",{href:s.doc("icons",e,t),children:"here"}),"."]})})]}),p("div",{children:p(o,{lang:"xml",children:`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),N("section",{className:"row",children:[N("div",{children:[p("p",{children:"You can even create icon-only buttons by completely omitting the title."}),N("p",{children:[p("button",{children:N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M4 11a9 9 0 0 1 9 9"}),p("path",{d:"M4 4a16 16 0 0 1 16 16"}),p("circle",{cx:"5",cy:"19",r:"1"})]})}),p("button",{type:"reset",children:N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),p("circle",{cx:"12",cy:"12",r:"4"})]})})]})]}),p("div",{children:p(o,{lang:"xml",children:`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`})})]}),N("section",{className:"row",children:[N("div",{children:[N("p",{children:["By default, buttons are styled using the ",p("b",{children:"primary"})," color, which impacts their background, border or text color. You can change that by applying classes like ",p("code",{children:"secondary"}),", ",p("code",{children:"success"})," or ",p("code",{children:"error"}),"."]}),N("p",{className:"flex",children:[p("button",{className:"secondary",children:"Action"}),p("button",{className:"success",children:"Confirm"}),N("button",{type:"reset",className:"error",children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M18 6 6 18"}),p("path",{d:"m6 6 12 12"})]}),p("span",{children:"Cancel"})]})]}),p("p",{children:N("small",{children:["You can learn more about colors ",p("a",{href:s.doc("colors",e,t),children:"here"}),"."]})})]}),p("div",{children:p(o,{lang:"xml",children:`<button
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
</button>`})})]}),N("section",{className:"row",children:[N("div",{children:[N("p",{children:["Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",p("code",{children:"group"})," role."]}),N("p",{role:"group",children:[p("button",{children:"Button 1"}),p("button",{type:"reset",children:"Button 2"}),p("button",{type:"reset",children:"Button 3"})]}),N("p",{role:"group",children:[p("button",{type:"reset",children:p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}),p("button",{type:"reset",children:N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M7 10v12"}),p("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}),p("button",{children:N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M12 2v13"}),p("path",{d:"m16 6-4-4-4 4"}),p("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})]})})]}),N("p",{role:"group",children:[p("button",{type:"reset",children:"Prev"}),p("button",{type:"reset",children:"1"}),p("button",{type:"reset",children:"2"}),p("button",{type:"reset",children:"3"}),p("button",{type:"reset",children:"Next"})]}),p("p",{children:N("small",{children:["You can learn more about groups ",p("a",{href:s.doc("groups",e,t),children:"here"}),"."]})})]}),p("div",{children:p(o,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}r(qe,"Buttons");import{jsx as y,jsxs as ie}from"https://esm.sh/react@19.2.6/jsx-runtime";function Be({theme:e}){return ie(m,{theme:e,children:[ie("section",{className:"row",children:[ie("div",{children:[ie("p",{children:["Typography is based purely on ",y("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),y("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),y("div",{children:y(o,{lang:"xml",children:`<p>
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
</p>`})})]}),ie("section",{className:"row",children:[ie("div",{children:[ie("p",{children:["To all sorts of text modifiers, like ",y("code",{children:"b"}),", ",y("code",{children:"i"}),", ",y("code",{children:"em"})," tags and many more."]}),y("p",{children:y("i",{children:"italic"})}),y("p",{children:y("em",{children:"emphasized"})}),y("p",{children:y("dfn",{children:"definition"})}),y("p",{children:y("cite",{children:"citation"})}),y("p",{children:y("b",{children:"bold"})}),y("p",{children:y("strong",{children:"strong"})}),y("p",{children:y("del",{children:"deleted"})}),y("p",{children:y("s",{children:"corrected"})}),y("p",{children:y("u",{children:"underlined"})}),y("p",{children:y("q",{children:"quotation"})})]}),y("div",{children:y(o,{lang:"xml",children:`<i>italic</i>
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
<sup>supescript</sup>`})})]}),ie("section",{className:"row",children:[ie("div",{children:[ie("p",{children:["Finally, it supports all six ",y("code",{children:"heading"})," types."]}),y("h1",{children:"Heading 1"}),y("h2",{children:"Heading 2"}),y("h3",{children:"Heading 3"}),y("h4",{children:"Heading 4"}),y("h5",{children:"Heading 5"}),y("h6",{children:"Heading 6"})]}),y("div",{children:y(o,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),ie("section",{className:"row",children:[ie("div",{children:[ie("p",{children:["As well as the ability to group headings and associated content with ",y("code",{children:"hgroup"}),"."]}),ie("hgroup",{children:[y("h1",{children:"Heading 1"}),y("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),y("div",{children:y(o,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}r(Be,"Typography");import{jsx as x,jsxs as Z}from"https://esm.sh/react@19.2.6/jsx-runtime";function Fe({theme:e}){let t=B();return Z(m,{theme:e,children:[Z("section",{className:"row",children:[Z("div",{children:[x("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),x("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),x("div",{children:x(o,{lang:"xml",children:`<blockquote>
  Lorem ipsum ...
</blockquote>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[x("p",{children:"It's not just text that can be included in a blockquote element, but code, icons, and many other elements."}),x("blockquote",{children:Z("p",{children:["Press ",x("kbd",{children:"Ctrl + Q"})," to quit"]})}),x("blockquote",{children:Z("hgroup",{children:[Z("p",{role:"group",children:[Z("svg",{xmlns:" http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x("circle",{cx:"12",cy:"12",r:"10"}),x("path",{d:"M12 16v-4"}),x("path",{d:"M12 8h.01"})]}),x("span",{children:"Information"})]}),Z("p",{children:["Delivery for ",x("b",{children:"Tuesday at 08:00."})]})]})}),x("p",{children:Z("small",{children:["You can learn more about groups ",x("a",{href:s.doc("groups",e,t),children:"here"})," and about icons ",x("a",{href:s.doc("icons",e,t),children:"here"}),"."]})})]}),x("div",{children:x(o,{lang:"xml",children:`<blockquote>
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
</blockquote>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[Z("p",{children:["Blockquotes can also be styled using the ",x("code",{children:"success"}),", ",x("code",{children:"error"}),", ",x("code",{children:"primary"})," and ",x("code",{children:"secondary"})," classes."]}),x("blockquote",{className:"success",children:Z("hgroup",{children:[x("h4",{children:"Success"}),x("p",{children:"The operation was successfull"})]})}),x("blockquote",{className:"error",children:Z("hgroup",{children:[x("p",{children:"Unknown error"}),x("p",{children:Z("code",{children:["Server response is ",x("b",{children:"Error 500"})]})})]})}),x("blockquote",{className:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),x("blockquote",{className:"secondary",children:x("hgroup",{children:Z("hgroup",{children:[x("h4",{children:"Title"}),x("p",{children:"Important Information"}),x("p",{children:x("button",{children:"Click me"})})]})})}),x("hgroup",{children:x("p",{children:Z("small",{children:["You can learn more about colors ",x("a",{href:s.doc("colors",e,t),children:"here"}),"."]})})})]}),x("div",{children:x(o,{lang:"xml",children:`<blockquote class="success">
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
</blockquote>`})})]})]})}r(Fe,"Blockquotes");import{jsx as he,jsxs as Ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function He({theme:e}){return he(m,{theme:e,children:he("section",{children:Ee("div",{className:"row",children:[Ee("div",{children:[he("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),Ee("p",{children:["Inline code ",he("code",{children:"console.log('abc')"})]}),Ee("p",{children:["Keyboard shortcut ",he("kbd",{children:"Ctrl + S"})]}),Ee("figure",{children:[he(o,{lang:"xml",children:"console.log('abc')"}),he("figcaption",{children:"Code block"})]}),Ee("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",he("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",he("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),he("div",{children:he(o,{lang:"xml",children:`<p>
  Inline code <code>console.log('abc')</code>
</p>
<p>
  Keyboard shortcut <kbd>Ctrl + S</kbd>
</p>
<pre>
  <code>console.log('abc')</code>
</pre>`})})]})})})}r(He,"Code");import{jsx as pe,jsxs as fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ie({theme:e}){return fe(m,{theme:e,children:[fe("section",{className:"row",children:[fe("div",{children:[pe("p",{children:"Figures can contain a single image and an associated caption."}),fe("figure",{children:[pe("img",{width:"640",height:"480",src:"https://picsum.photos/id/16/640/480",alt:"ssample image "}),pe("figcaption",{children:"Sample caption"})]})]}),pe("div",{children:pe(o,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),fe("section",{className:"row",children:[fe("div",{children:[pe("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),fe("figure",{children:[fe("figure",{children:[pe("img",{width:"200",height:"240",src:"https://picsum.photos/id/16/200/240",alt:"first image"}),pe("figcaption",{children:"First image"})]}),fe("figure",{children:[pe("img",{width:"240",height:"240",src:"https://picsum.photos/id/16/240/240",alt:"second image"}),pe("figcaption",{children:"Second image"})]}),pe("figcaption",{children:"Figure group"})]})]}),pe("div",{children:pe(o,{lang:"xml",children:`<figure>
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
</figure>`})})]})]})}r(Ie,"Figures");import{jsx as te,jsxs as ye}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ae({theme:e}){return ye(m,{theme:e,children:[ye("section",{className:"row",children:[ye("div",{children:[te("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),ye("ul",{children:[te("li",{children:te("a",{href:"",children:"website.com"})}),te("li",{children:te("a",{href:"",children:"email@test.com"})}),te("li",{children:te("a",{href:"",children:"/#location"})})]})]}),te("div",{children:te(o,{lang:"xml",children:`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location">
  /#location
</a>`})})]}),ye("section",{className:"row",children:[ye("div",{children:[te("p",{children:"Headigns can be used together with empty fragment links to reference locations in the same document."}),ye("h1",{"data-hover":!0,children:["Section 1",te("a",{href:"#section_1"})]}),ye("h2",{children:["Section 1.2",te("a",{href:"#section_12"})]}),ye("h3",{children:["Section 1.2.1",te("a",{href:"#section_121"})]})]}),te("div",{children:te(o,{lang:"xml",children:`<h1>
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
`})})]})]})}r(Ae,"Links");import{jsx as L,jsxs as P}from"https://esm.sh/react@19.2.6/jsx-runtime";function We({theme:e}){let t=B();return P(m,{theme:e,children:[P("section",{className:"row",children:[P("div",{children:[L("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),P("details",{children:[L("summary",{children:"Info"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),P("details",{children:[L("summary",{children:"More info Info"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),L("div",{children:L(o,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),P("section",{className:"row",children:[P("div",{children:[P("p",{children:["This basic summary can be placed inside an ",L("code",{children:"article"})," and combined with the ",L("code",{children:"primary"}),", ",L("code",{children:"success"})," or ",L("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),L("article",{children:P("details",{open:!0,children:[L("summary",{children:"Note"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),L("article",{className:"primary",children:P("details",{children:[L("summary",{children:"Info"}),P("p",{children:["Larn more ",L("a",{href:"",children:"here"})]})]})}),L("article",{className:"success",children:P("details",{children:[L("summary",{children:"Success"}),P("p",{children:["Operation finished ",L("code",{children:"OK"})]})]})}),L("article",{className:"error",children:P("details",{children:[L("summary",{children:"Error"}),P("div",{children:[L("p",{children:"Unknown error occurred"}),L("hr",{}),L("button",{children:"Acknowledge"})]})]})}),L("p",{children:P("small",{children:["You can learn more about colors ",L("a",{href:s.doc("colors",e,t),children:"here"})," and cards ",L("a",{href:s.doc("cards",e,t),children:"here"}),"."]})})]}),L("div",{children:L(o,{lang:"xml",children:`<article>
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
</article>`})})]}),P("section",{className:"row",children:[P("div",{children:[P("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",L("code",{children:"article"}),", you can form an accordion menu:"]}),P("article",{children:[P("details",{name:"menu",children:[L("summary",{children:"Option 1"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),P("details",{name:"menu",open:!0,children:[L("summary",{children:"Option 2"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),P("details",{name:"menu",children:[L("summary",{children:"Option 3"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),L("div",{children:L(o,{lang:"xml",children:`
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
</article>`})})]})]})}r(We,"Summary");import{jsx as T,jsxs as ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function Re({theme:e}){return T(m,{theme:e,children:ve("section",{className:"row",children:[ve("div",{children:[T("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),ve("table",{children:[T("thead",{children:ve("tr",{children:[T("th",{children:"Cover"}),T("th",{children:"Item"}),T("th",{children:"Value"}),T("th",{children:"Comment"})]})}),ve("tbody",{children:[ve("tr",{children:[T("td",{children:T("img",{width:"30",height:"50",src:"https://picsum.photos/id/16/30/50",alt:"cover 1"})}),T("td",{children:T("a",{href:"",children:"Item 1.1"})}),T("td",{children:"20.35"}),T("td",{children:"In stock"})]}),ve("tr",{children:[T("td",{children:T("img",{width:"30",height:"50",src:"https://picsum.photos/id/100/30/50",alt:"cover 2"})}),T("td",{children:T("a",{href:"",children:"Item 2.1"})}),T("td",{children:"15.99"}),T("td",{children:"Out of stock"})]}),ve("tr",{children:[T("td",{children:T("img",{width:"30",height:"50",src:"https://picsum.photos/id/40/30/50",alt:"cover 3"})}),T("td",{children:T("a",{href:"",children:"Item 5.1"})}),T("td",{children:"14.23"}),T("td",{children:"In stock"})]}),ve("tr",{children:[T("td",{children:T("img",{width:"30",height:"50",src:"https://picsum.photos/id/25/30/50",alt:"cover 4"})}),T("td",{children:T("a",{href:"",children:"Item 22"})}),T("td",{children:"10.11"}),T("td",{children:"In stock"})]})]}),T("tfoot",{children:ve("tr",{children:[T("td",{colSpan:2,children:T("b",{children:"Total"})}),T("td",{colSpan:2,children:T("b",{children:"60.68"})})]})})]})]}),T("div",{children:T(o,{lang:"xml",children:`<table>
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
</table>`})})]})})}r(Re,"Table");import{jsx as d,jsxs as $}from"https://esm.sh/react@19.2.6/jsx-runtime";function Oe({theme:e}){let t=B();return $(m,{theme:e,children:[$("section",{className:"row",children:[$("div",{children:[$("p",{children:["You can mark any text, keyword or piece of information with the ",d("code",{children:"mark"})," html tag."]}),d("p",{children:d("mark",{children:"v15.20.30"})})]}),d("div",{children:d(o,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),$("section",{className:"row",children:[$("div",{children:[d("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),$("p",{children:[$("mark",{children:[$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),d("path",{d:"m9 12 2 2 4-4"})]}),d("span",{children:"released"})]}),$("mark",{children:[d("span",{children:"error"}),$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),d("path",{d:"m9 12 2 2 4-4"})]})]})]}),d("p",{children:$("small",{children:["You can learn more about icons ",d("a",{href:s.doc("icons",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["You  can assign the ",d("code",{children:"primary"}),", ",d("code",{children:"secondary"}),", ",d("code",{children:"success"})," or ",d("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",d("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),$("p",{className:"flex",children:[d("mark",{className:"primary",children:"#theme"}),d("mark",{className:"secondary",children:"#second"}),d("mark",{className:"success",children:"Process OK"}),d("mark",{className:"error",children:"Error 400"})]}),$("p",{className:"flex",children:[d("mark",{className:"primary inverted",children:"#theme"}),d("mark",{className:"secondary inverted",children:"#second"}),d("mark",{className:"success inverted",children:"Process OK"}),d("mark",{className:"error inverted",children:"Error 400"})]}),d("p",{children:$("small",{children:["You can learn more about colors ",d("a",{href:s.doc("colors",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<!-- with or without -->
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
</mark>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",d("code",{children:"group"})," role, they will be grouped together."]}),$("p",{role:"group",children:[d("mark",{children:"npm"}),d("mark",{className:"success",children:"1.0.3"}),d("mark",{className:"error",children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[d("path",{d:"M18 6 6 18"}),d("path",{d:"m6 6 12 12"})]})})]}),d("p",{children:$("small",{children:["You can learn more about groups ",d("a",{href:s.doc("groups",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["You can use the ",d("code",{children:"mark"})," tag as standalone badges with text or with icons."]}),$("p",{children:[d("mark",{children:"1"}),d("mark",{children:"2"}),d("mark",{children:"3"}),d("mark",{children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),d("circle",{cx:"12",cy:"10",r:"3"})]})})]}),d("p",{children:"Or in more complex layouts."}),$("article",{children:[d("div",{role:"group",children:$("div",{className:"row",children:[d("mark",{className:"secondary",children:"1"}),$("div",{children:[d("b",{children:"Lorem ipsum dolor sit amet"}),d("br",{}),d("small",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}),d("div",{role:"group",children:$("div",{className:"row",children:[d("mark",{className:"secondary",children:"2"}),$("div",{children:[d("b",{children:"Sed ut perspiciatis unde omnis"}),d("br",{}),d("small",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."})]})]})}),d("div",{role:"group",children:$("div",{className:"row",children:[d("mark",{className:"secondary",children:"3"}),$("div",{children:[d("b",{children:"At vero eos et accusamus"}),d("br",{}),d("small",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."})]})]})})]}),d("p",{children:$("small",{children:["You can learn more about cards ",d("a",{href:s.doc("cards",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<p>
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
</article>`})})]})]})}r(Oe,"Tags");import{jsx as X,jsxs as we}from"https://esm.sh/react@19.2.6/jsx-runtime";function ze({theme:e}){return we(m,{theme:e,children:[we("section",{className:"row",children:[we("div",{children:[X("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),X("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),we("ul",{children:[X("li",{children:"Item 1"}),X("li",{children:"Item 2"}),we("ol",{children:[X("li",{children:"Item 1"}),X("li",{children:"Item 2"})]})]})]}),X("div",{children:X(o,{lang:"xml",children:`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`})})]}),we("section",{className:"row",children:[we("div",{children:[we("p",{children:["Definition lists are styled such that ",X("code",{children:"dd"})," elements are inlined compared to ",X("code",{children:"dt"})," elements."]}),we("dl",{children:[X("dt",{children:"Coffee"}),X("dd",{children:"Black hot drink"}),X("dt",{children:"Milk"}),X("dd",{children:"White cold drink"})]})]}),X("div",{children:X(o,{lang:"xml",children:`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`})})]})]})}r(ze,"Lists");import{useState as mt}from"https://esm.sh/react@19.2.6";import{jsx as w,jsxs as V}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ge({theme:e}){let[t,a]=mt("bread"),[q,h]=mt(!1),[g,de]=mt(!0);return V(m,{theme:e,children:[V("section",{className:"row",children:[V("div",{children:[w("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),V("form",{children:[w("p",{children:w("b",{children:"Options"})}),V("label",{htmlFor:"egg",children:[w("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),w("span",{children:"Egg"})]}),V("label",{htmlFor:"cheese",children:[w("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),w("span",{children:"Cheese"})]}),V("label",{htmlFor:"ham",children:[w("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),w("span",{children:"Ham"})]})]}),w("p",{children:"These work well even for complex, multi-line, checkboxes"}),V("form",{children:[w("p",{children:w("b",{children:"Todos"})}),V("label",{htmlFor:"friday",children:[w("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),V("span",{children:[w("b",{children:"Friday"}),w("br",{}),w("span",{children:"- Order lunch"}),w("br",{}),w("span",{children:"- Go to work"}),w("span",{children:"- Eat lunch"})]})]}),V("label",{htmlFor:"saturday",children:[w("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),V("span",{children:[w("b",{children:"Saturday"}),w("br",{}),w("span",{children:"- Order lunch"}),w("br",{}),w("span",{children:"- Eat lunch"})]})]})]})]}),w("div",{children:w(o,{lang:"xml",children:`<form>
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
</form>`})})]}),V("section",{className:"row",children:[V("div",{children:[w("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),V("form",{children:[w("p",{children:w("b",{children:"Wrapping"})}),V("label",{htmlFor:"bread",children:[w("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:t==="bread",onChange:ce=>a(ce.target.value)}),w("span",{children:"Bread"})]}),V("label",{htmlFor:"salad",children:[w("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:t==="salad",onChange:ce=>a(ce.target.value)}),w("span",{children:"Salad"})]})]})]}),w("div",{children:w(o,{lang:"xml",children:`<form>
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
</form>`})})]}),V("section",{className:"row",children:[V("div",{children:[w("p",{children:"And if you want to represent an on/off state, you can use switches."}),V("form",{children:[V("label",{htmlFor:"terms",onClick:()=>h(!q),children:[w("input",{name:"terms",type:"checkbox",role:"switch",checked:q}),w("span",{children:"I agree to the terms"})]}),V("label",{htmlFor:"updates",onClick:()=>de(!g),children:[w("input",{name:"updates",type:"checkbox",role:"switch",checked:g}),w("span",{children:"I want to receive updates"})]})]})]}),w("div",{children:w(o,{lang:"xml",children:`<form>
  <label for="terms">
    <input 
      name="terms"
      type="checkbox"
      role="switch"${q?`
      checked/>`:"/>"}
    <span>I agree to the terms</span>
  </label>

  <label for="updates">
    <input
      name="updates"
      type="checkbox"
      role="switch"${g?`
      checked/>`:"/>"}
    <span>I want to receive updates</span>
  </label>
</form>`})})]})]})}r(Ge,"FormsCheckbox");import{jsx as se,jsxs as Se}from"https://esm.sh/react@19.2.6/jsx-runtime";function Pe({theme:e}){return se(m,{theme:e,children:Se("section",{className:"row",children:[Se("div",{children:[Se("p",{children:["A form can have all or part of its inputs set as ",se("code",{children:"disabled"})," to prevent any user interaction."]}),se("form",{children:Se("fieldset",{children:[se("legend",{children:"Disabled form"}),Se("label",{htmlFor:"email",children:[se("span",{children:"Email"}),se("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),Se("label",{htmlFor:"address",children:[se("span",{children:"Address"}),se("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),Se("label",{htmlFor:"delivery",children:[se("span",{children:"Delivery"}),Se("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[se("option",{value:"fast",children:"Fast"}),se("option",{value:"standard",children:"Standard"})]})]}),se("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),se("div",{children:se(o,{lang:"xml",children:`<form>
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
</form>`})})]})})}r(Pe,"FormsDisabled");import{jsx as b,jsxs as A}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ye({theme:e}){return A(m,{theme:e,children:[A("section",{className:"row",children:[A("div",{children:[A("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",b("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),b("form",{children:A("div",{role:"group",children:[b("input",{id:"email",type:"email",placeholder:"Email"}),b("input",{type:"submit",value:"Subscribe"})]})})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),A("section",{className:"row",children:[A("div",{children:[b("p",{children:"This can be used to great effect for search inputs."}),b("form",{children:A("div",{role:"group",children:[b("mark",{children:A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b("path",{d:"m21 21-4.34-4.34"}),b("circle",{cx:"11",cy:"11",r:"8"})]})}),b("input",{type:"search",id:"search",placeholder:"Search"}),b("input",{type:"submit",value:"Search"})]})})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
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
</form>`})})]}),A("section",{className:"row",children:[A("div",{children:[b("p",{children:"And even use mutliple buttons:"}),b("form",{children:A("div",{role:"group",children:[b("input",{type:"search",value:"",placeholder:"e.g. SW1A 1AA"}),b("button",{type:"reset",children:A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b("circle",{cx:"12",cy:"12",r:"10"}),b("line",{x1:"22",x2:"18",y1:"12",y2:"12"}),b("line",{x1:"6",x2:"2",y1:"12",y2:"12"}),b("line",{x1:"12",x2:"12",y1:"6",y2:"2"}),b("line",{x1:"12",x2:"12",y1:"22",y2:"18"})]})}),A("button",{type:"submit",children:[b("span",{children:"Go"}),A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b("path",{d:"M5 12h14"}),b("path",{d:"m12 5 7 7-7 7"})]})]})]})})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
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
</form>`})})]}),A("section",{className:"row",children:[A("div",{children:[A("p",{children:["You can still wrap form elements inside a ",b("code",{children:"fieldset"})," with an appropriate ",b("code",{children:"legend"})," tag."]}),b("form",{children:A("fieldset",{children:[b("legend",{children:"Selection"}),A("div",{role:"group",children:[A("select",{id:"delivery",defaultValue:"fast",children:[b("option",{value:"fast",children:"Fast"}),b("option",{value:"standard",children:"Standard"})]}),b("input",{type:"date",id:"delivery-date"}),b("input",{type:"submit",value:"Confirm"})]})]})})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
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
</form>`})})]}),A("section",{className:"row",children:[A("div",{children:[b("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),b("form",{children:A("div",{role:"group",children:[A("label",{htmlFor:"ch_1",children:[b("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),b("span",{children:"Check #1"})]}),A("label",{htmlFor:"ch_2",children:[b("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),b("span",{children:"Check #2"})]}),A("label",{htmlFor:"ch_3",children:[b("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),b("span",{children:"Check #3"})]})]})})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}r(Ye,"FormsGrouped");import{useState as zt}from"https://esm.sh/react@19.2.6";import{jsx as v,jsxs as F}from"https://esm.sh/react@19.2.6/jsx-runtime";function _e({theme:e}){let t=B(),[a,q]=zt(50);return F(m,{theme:e,children:[F("section",{className:"row",children:[F("div",{children:[F("p",{children:["All ",v("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),F("form",{children:[F("label",{htmlFor:"email",children:[v("span",{children:"Email"}),v("input",{type:"email",placeholder:"Email Address",id:"email"})]}),F("label",{htmlFor:"password",children:[v("span",{children:"Password"}),v("input",{type:"password",id:"password",placeholder:"Password"})]}),v("input",{type:"submit",value:"Login"}),F("p",{children:["Don't have an account? ",v("a",{href:"",children:"Sign up"}),"."]})]})]}),v("div",{children:v(o,{lang:"xml",children:`<form>
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
</form>`})})]}),F("section",{className:"row",children:[F("div",{children:[v("p",{children:"Textareas are supported as well and by default they expand to fit the available horizontal space."}),F("form",{children:[v("textarea",{rows:4,id:"textarea",placeholder:"Write your comments..."}),v("input",{type:"submit",value:"Comment"})]})]}),v("div",{children:v(o,{lang:"xml",children:`<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>`})})]}),F("section",{className:"row",children:[F("div",{children:[v("p",{children:"Ranged inputs are also supported."}),F("form",{children:[F("label",{htmlFor:"volume",children:[v("span",{children:"Volume (range)"}),v("input",{type:"range",id:"volume",name:"volume",min:0,max:100,step:1,value:a,onChange:h=>q(Number(h.target.value))})]}),v("input",{type:"submit",value:"Tune"})]})]}),v("div",{children:v(o,{lang:"xml",children:`<form>
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
</form>`})})]}),v("section",{children:F("div",{className:"row",children:[F("div",{children:[F("p",{children:["If you want your forms to stand out more, you can wrap the inputs inside a ",v("code",{children:"fieldset"})," and assign a ",v("code",{children:"legend"}),"."]}),v("form",{children:F("fieldset",{children:[v("legend",{children:"Details"}),F("div",{className:"row disable-mobile",children:[v("div",{children:F("label",{htmlFor:"first-name",children:[v("span",{children:"First name"}),v("input",{type:"text",id:"first-name",placeholder:"First name"})]})}),v("div",{children:F("label",{htmlFor:"last-name",children:[v("span",{children:"Last name"}),v("input",{type:"text",id:"last-name",placeholder:"Last name"})]})})]}),F("div",{className:"row disable-mobile",children:[v("div",{children:F("label",{htmlFor:"delivery",children:[v("span",{children:"Delivery Time"}),F("select",{id:"delivery",defaultValue:"mornibgt",children:[v("option",{value:"morning",children:"Morning"}),v("option",{value:"evening",children:"Evening"})]})]})}),v("div",{children:F("label",{htmlFor:"delivery-date",children:[v("span",{children:"Delivery Date"}),v("input",{type:"date",id:"delivery-date"})]})})]}),F("blockquote",{className:"success",children:["Order total is ",v("b",{children:"$33.59"})]}),F("div",{className:"row disable-mobile",children:[v("div",{children:v("input",{type:"reset",className:"error",value:"Reset"})}),v("div",{}),v("div",{children:v("input",{type:"submit",value:"Confirm"})})]})]})}),v("p",{children:"You can make forms as simple or as complex as you want."}),F("p",{children:["In the example above we're separating inputs into two separate ",v("a",{href:s.doc("grid",e,t),children:"columns"}),", so we can pack more information in the same space."]}),F("p",{children:["We're also using ",v("a",{href:s.doc("blockquotes",e,t),children:"blockquotes"})," to highlight important information."]}),F("p",{children:["We're using both ",v("code",{children:"submit"})," and ",v("code",{children:"reset"})," type inputs. Please note these inputs are styled to look exactly like ",v("a",{href:s.doc("blockquotes",e,t),children:"buttons"}),"."]})]}),v("div",{children:v(o,{lang:"xml",children:`<form>
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
</form>`})})]})})]})}r(_e,"FormsNormal");import{useState as ut}from"https://esm.sh/react@19.2.6";import{jsx as D,jsxs as oe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ve({theme:e}){let[t,a]=ut("a"),[q,h]=ut(""),[g,de]=ut("");return oe(m,{theme:e,children:[oe("section",{className:"row",children:[oe("div",{children:[oe("p",{children:["Helper styles for form validation come out of the box for any ",D("code",{children:"input"})," and ",D("code",{children:"textarea"})," elements marked as ",D("b",{children:"required"}),"."]}),D("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),D("p",{children:"Empty inputs do not display error styles."}),oe("p",{children:["Adjacent text elements with the ",D("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),D("form",{action:"",method:"post",children:oe("fieldset",{children:[D("legend",{children:"Input"}),oe("label",{htmlFor:"name",children:[D("span",{children:"Name"}),D("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:t,onChange:ce=>a(ce.target.value)}),D("span",{className:"error",children:D("small",{children:"Enter a name between 4 and 100 characters"})})]}),oe("label",{htmlFor:"email",children:[D("span",{children:"Email"}),D("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:q,onChange:ce=>h(ce.target.value)})]}),oe("label",{htmlFor:"comment",children:[D("span",{children:"Comment"}),D("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:g,onChange:ce=>de(ce.target.value)}),D("span",{className:"error",children:D("small",{children:"Enter a meaningful comment"})})]}),D("input",{type:"submit",value:"Submit"})]})})]}),D("div",{children:D(o,{lang:"xml",children:`<form action="/" method="post">
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
</form>`})})]}),oe("section",{className:"row",children:[oe("div",{children:[oe("p",{children:["Inputs that present a more limited range of options to a user, such as ",D("code",{children:"select"}),", ",D("code",{children:"radio"})," and ",D("code",{children:"check"})," buttons, won't display a error styles but can be set as required."]}),D("form",{children:oe("fieldset",{children:[D("legend",{children:"Countries"}),oe("select",{id:"country",name:"country",required:!0,children:[D("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please select a country"}),D("option",{value:"uk",children:"United Kingdom"}),D("option",{value:"fr",children:"France"}),D("option",{value:"de",children:"Germany"})]}),oe("label",{children:[D("input",{type:"checkbox",name:"terms",required:!0}),"I accept the terms and conditions"]}),D("input",{type:"submit",value:"Submit"})]})})]}),D("div",{children:D(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}r(Ve,"FormsValidation");import{useRef as Gt}from"https://esm.sh/react@19.2.6";import{jsx as ae,jsxs as Ue}from"https://esm.sh/react@19.2.6/jsx-runtime";function je({theme:e}){let t=Gt(null);return ae(m,{theme:e,children:Ue("section",{className:"row",children:[Ue("div",{children:[ae("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),ae("p",{children:"Click the button below to open the modal dialog."}),ae("p",{children:ae("button",{onClick:r(()=>t.current?.showModal(),"openDialog"),children:"Open modal"})}),ae(Pt,{ref:t})]}),ae("div",{children:ae(o,{lang:"xml",children:`<button id="openBtn">Open modal</button>

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
`})})]})})}r(je,"Modal");function Pt(e){return Ue("dialog",{ref:e.ref,children:[ae("h2",{children:"Dialog"}),ae("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),ae("form",{method:"dialog",children:ae("div",{role:"group",children:Ue("div",{className:"row",children:[ae("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),ae("div",{}),ae("button",{value:"confirm",children:"Confirm"})]})})})]})}r(Pt,"DialogModal");import{jsx as i,jsxs as C}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ke({theme:e}){let t=B();return C(m,{theme:e,children:[C("section",{className:"row",children:[C("div",{children:[C("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",i("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),i("nav",{className:"disable-mobile",children:C("ul",{children:[i("li",{children:i("a",{href:"",children:"Item 1"})}),i("li",{children:i("a",{href:"",children:"Item 2"})}),i("li",{children:i("a",{href:"",children:"Item 3"})})]})}),i("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),i("nav",{className:"disable-mobile",children:C("ul",{children:[i("li",{children:C("a",{href:"",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:C("a",{href:"",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),C("li",{children:[C("a",{href:"",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("path",{d:"m10 8 4 4-4 4"})]}),i("span",{children:"More"})]}),C("ul",{children:[i("li",{children:i("a",{href:"",children:"Option 1"})}),i("li",{children:i("a",{href:"",children:"Option 2"})})]})]})]})}),C("p",{children:["Navigtion items may use the ",i("code",{children:"aria-selected"})," attribute to denote they are selected."]}),i("nav",{className:"disable-mobile",children:C("ul",{children:[i("li",{"aria-selected":!0,children:i("a",{href:"",children:"Selected"})}),i("li",{children:i("a",{href:"",children:"Unselected"})})]})})]}),i("div",{children:i(o,{lang:"xml",children:`<header>
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
</header>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["You can use other elements such as ",i("code",{children:"select"}),", ",i("code",{children:"input"}),", ",i("code",{children:"img"}),", etc to add more functionality to the navigation bar."]}),i("nav",{className:"disable-mobile",children:C("ul",{children:[i("li",{children:C("a",{href:"",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:C("select",{id:"selector",defaultValue:"opt-1",style:{minWidth:"100px"},children:[i("option",{value:"opt-1",children:"Val 1"}),i("option",{value:"opt-2",children:"Val 2"}),i("option",{value:"opt-3",children:"Val 3"})]})}),i("li",{children:i("input",{type:"search",placeholder:"Search ...",id:"search"})})]})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<li>
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
</li>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["Navigation can be split into a left and a right section by placing an empty ",i("code",{children:"div"})," element to act as gap."]}),i("nav",{className:"disable-mobile",children:C("ul",{children:[i("li",{children:i("a",{href:"",children:"Home"})}),i("li",{children:i("a",{href:"",children:"Menu"})}),i("div",{}),i("li",{children:i("a",{href:"",children:i("button",{children:"Download"})})}),i("li",{children:i("a",{href:"",children:i("button",{type:"reset",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),i("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["Navigation can be placed inside an ",i("code",{children:"article"})," to create a more striking display."]}),i("article",{children:i("nav",{className:"disable-mobile",children:C("ul",{children:[i("li",{children:C("a",{href:"",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:C("a",{href:"",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),i("li",{children:i("input",{type:"search",placeholder:"Search..."})}),i("div",{}),i("li",{children:i("a",{href:"",children:i("button",{type:"reset",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),i("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`})})]}),C("section",{className:"row",children:[C("div",{children:[i("p",{children:"Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout."}),C("figure",{children:[i("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-nav",e,t)}),i("figcaption",{children:"Showcase of navigation on a smaller device"})]})]}),i("div",{children:i(o,{lang:"xml",children:`<header>
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
</header>`})})]})]})}r(Ke,"Navigation");import{useState as Yt}from"https://esm.sh/react@19.2.6";import{Fragment as bt,jsx as M,jsxs as ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function ht(){return ee(bt,{children:[M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),M("p",{children:M("button",{children:"Discover"})})]})}r(ht,"Tab1");function vt(){return ee(bt,{children:[M("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),M("div",{children:M("blockquote",{children:"lorem ipsum install"})})]})}r(vt,"Tab2");function gt(){return M(bt,{children:M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}r(gt,"Tab3");function Qe({theme:e}){let t=B(),[a,q]=Yt("tab-1");return ee(m,{theme:e,children:[ee("section",{className:"row",children:[ee("div",{children:[ee("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",M("code",{children:"<menu>"})," element ",M("b",{children:"outside"})," of a ",M("code",{children:"nav"})," element."]}),M("div",{className:"disable-mobile",children:ee("menu",{children:[M("li",{"aria-selected":a==="tab-1",children:ee("a",{onClick:()=>q("tab-1"),children:[ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),M("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),M("span",{children:"Home"})]})}),M("li",{"aria-selected":a==="tab-2",children:ee("a",{onClick:()=>q("tab-2"),children:[M("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:M("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),M("span",{children:"Install"})]})}),M("li",{"aria-selected":a==="tab-3",children:ee("a",{onClick:()=>q("tab-3"),children:[ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("circle",{cx:"12",cy:"12",r:"10"}),M("path",{d:"M17 12h.01"}),M("path",{d:"M12 12h.01"}),M("path",{d:"M7 12h.01"})]}),M("span",{children:"More"})]})})]})}),ee("div",{children:[a==="tab-1"?M(ht,{}):null,a==="tab-2"?M(vt,{}):null,a==="tab-3"?M(gt,{}):null]})]}),M("div",{children:M(o,{lang:"xml",children:`<main>
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
</main>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[M("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),ee("figure",{children:[M("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-tabs-nav",e,t)}),M("figcaption",{children:"Showcase of tabbed navigation in a smaller container or device."})]})]}),M("div",{children:M(o,{lang:"xml",children:`<div class="row">
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
</div>`})})]})]})}r(Qe,"Tabs");import{jsx as z,jsxs as re}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ze({theme:e}){let t=B();return re(m,{theme:e,children:[re("section",{className:"row",children:[re("div",{children:[z("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),z("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),z("nav",{children:re("menu",{className:"disable-mobile",children:[z("li",{"aria-selected":!0,children:re("a",{href:"",children:[re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),z("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),z("span",{children:"Home"})]})}),z("li",{children:re("a",{href:"",children:[re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z("path",{d:"M4 11a9 9 0 0 1 9 9"}),z("path",{d:"M4 4a16 16 0 0 1 16 16"}),z("circle",{cx:"5",cy:"19",r:"1"})]}),z("span",{children:"Latest"})]})}),z("li",{children:re("a",{href:"",children:[re("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),z("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),z("circle",{cx:"10",cy:"7",r:"4"})]}),z("span",{children:"Profile"})]})})]})})]}),z("div",{children:z(o,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),re("section",{className:"row",children:[re("div",{children:[re("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",z("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),re("figure",{children:[z("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-menu",e,t)}),z("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),z("div",{children:z(o,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}r(Ze,"Menu");import{jsx as H,jsxs as ue}from"https://esm.sh/react@19.2.6/jsx-runtime";function Je({theme:e}){return H(m,{theme:e,children:ue("section",{className:"row",children:[ue("div",{children:[H("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),ue("p",{children:["By default you can add a ",H("b",{children:"meta"})," tag with the ",H("code",{children:"color-scheme"})," name and ",H("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),H("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),ue("table",{children:[H("thead",{children:ue("tr",{children:[H("th",{children:"Theme"}),H("th",{children:"Light"}),H("th",{children:"Dark"})]})}),ue("tbody",{children:[ue("tr",{children:[H("td",{children:"Default"}),H("td",{children:"\u2705"}),H("td",{children:"\u2705"})]}),ue("tr",{children:[H("td",{children:"Blog"}),H("td",{children:"\u2705"}),H("td",{children:"\u2705"})]}),ue("tr",{children:[H("td",{children:"App"}),H("td",{children:"\u2705"}),H("td",{children:"\u2705"})]}),ue("tr",{children:[H("td",{children:"Delivery"}),H("td",{children:"\u2705"}),H("td",{children:"\u274C"})]}),ue("tr",{children:[H("td",{children:"Landing"}),H("td",{children:"\u2705"}),H("td",{children:"\u274C"})]}),ue("tr",{children:[H("td",{children:"Newsletter"}),H("td",{children:"\u2705"}),H("td",{children:"\u274C"})]})]})]})]}),H("div",{children:H(o,{lang:"xml",children:`<html>
  <head>
    <!-- both variants -->
    <meta name="color-scheme" content="light dark"/>
    
    <!-- only dark variant -->
    <meta name="color-scheme" content="dark"/>
  </head>
</html>`})})]})})}r(Je,"DarkMode");import{jsx as ne,jsxs as ke}from"https://esm.sh/react@19.2.6/jsx-runtime";function Xe({theme:e}){return ke(m,{theme:e,children:[ke("section",{className:"row",children:[ke("div",{children:[ne("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),ne("p",{children:"When inside buttons the width & height is aligned to match the font size."}),ne("p",{children:ke("button",{children:[ke("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ne("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),ne("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),ne("span",{children:"Home"})]})})]}),ne("div",{children:ne(o,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),ke("section",{className:"row",children:[ke("div",{children:[ne("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),ke("div",{role:"group",children:[ke("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ne("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),ne("circle",{cx:"12",cy:"10",r:"3"})]}),ne("b",{children:"Test Address, SE11 8CL"})]})]}),ne("div",{children:ne(o,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}r(Xe,"Icons");import{jsx as W,jsxs as Y}from"https://esm.sh/react@19.2.6/jsx-runtime";function et({theme:e}){let t=B();return Y(m,{theme:e,children:[Y("section",{className:"row",children:[Y("div",{children:[W("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),Y("p",{children:["The threshold between wide and narrow happens at ",W("b",{children:"600px"}),"."]}),W("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),Y("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-typography",e,t)}),Y("figcaption",{children:["More information ",W("a",{href:s.doc("typography",e,t),children:"here"})]})]})]}),W("div",{children:W(o,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[W("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),Y("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-nav",e,t)}),Y("figcaption",{children:["More information ",W("a",{href:s.doc("navigation",e,t),children:"here"})," or ",W("a",{href:s.doc("tabs",e,t),children:"here"}),"."]})]})]}),W("div",{children:W(o,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a href="...">...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[W("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),Y("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-menu",e,t)}),Y("figcaption",{children:["More information ",W("a",{href:s.doc("menu",e,t),children:"here"}),"."]})]})]}),W("div",{children:W(o,{lang:"xml",children:`<header>
  <menu>
    <li><a href="...">...</a></li>
    ....
  </menu>
</header>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["Finally, elements that have the ",W("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),Y("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-columns",e,t)}),Y("figcaption",{children:["More information ",W("a",{href:s.doc("grid",e,t),children:"here"}),"."]})]})]}),W("div",{children:W(o,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",W("code",{children:"disable-mobile"})," class."]}),Y("p",{children:["You can also instruct elements to be hidden on mobile, via the ",W("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",W("code",{children:"hiden-on-desktop"})," class."]})]}),W("div",{})]})]})}r(et,"Mobile");import{jsx as c,jsxs as E}from"https://esm.sh/react@19.2.6/jsx-runtime";function tt({theme:e}){let t=B();return E(m,{theme:e,children:[E("section",{className:"row",children:[E("div",{children:[E("p",{children:["By wrapping together a number of HTML elements inside an ",c("code",{children:"article"}),", you can create a basic card-type layout."]}),E("div",{className:"row disable-mobile",children:[c("div",{children:E("article",{children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:E("article",{className:"success",children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <span>
    <b>Title</b>
  </span>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["Cards can wrap headings and paragraphs and can be styled with ",c("code",{children:"success"})," and ",c("code",{children:"error"})," classes."]}),E("div",{className:"row disable-mobile",children:[c("div",{children:E("article",{children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:E("article",{className:"error",children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),c("p",{children:E("small",{children:["You can learn more about classes ",c("a",{href:s.doc("classes",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <h3>Title</h3>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["The ",c("code",{children:"header"})," element of a card will be styled so it's more proeminent."]}),E("div",{className:"row disable-mobile",children:[c("div",{children:E("article",{children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:E("article",{className:"success",children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <header>Title</header>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),E("section",{className:"row",children:[E("div",{children:[c("p",{children:"Likewise, the first image tag used in a card will be styled as a header image."}),E("div",{className:"row disable-mobile",children:[c("div",{children:E("article",{children:[c("img",{height:"80",src:"https://picsum.photos/id/16/320/80",alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:E("article",{className:"error",children:[c("img",{height:"80",src:"https://picsum.photos/id/16/420/80",alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),E("section",{className:"row",children:[E("div",{children:[c("p",{children:"You can combine elements inside a card to produce quite compelx results, as the example below shows."}),c("p",{children:"By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML."}),E("article",{children:[c("img",{height:"160",src:"https://picsum.photos/id/16/480/160",alt:"header image"}),c("h4",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),c("p",{children:c("button",{children:"Button"})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
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
</article>`})})]}),E("section",{className:"row",children:[E("div",{children:[c("p",{children:"If we combine groups, columns and cards, we can experiment with even more daring layouts all while using just semantic HTML and minimal classes."}),E("article",{children:[c("div",{role:"group",children:E("div",{className:"row",children:[c("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"header image"}),E("div",{children:[c("b",{children:"Title"}),c("br",{}),c("span",{children:"Subtitle"})]})]})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),E("p",{children:[c("mark",{children:"v12.5.3"}),c("mark",{className:"success",children:"success"})]}),c("hr",{}),c("p",{children:c("button",{children:"Button"})})]}),c("p",{children:E("small",{children:["You can learn more about groups ",c("a",{href:s.doc("groups",e,t),children:"here"}),"."]})}),c("p",{children:E("small",{children:["You can learn more about columns ",c("a",{href:s.doc("grid",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
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
</article>`})})]})]})}r(tt,"Cards");import{jsx as u,jsxs as G}from"https://esm.sh/react@19.2.6/jsx-runtime";function ot({theme:e}){return u(m,{theme:e,children:u("section",{children:G("div",{children:[G("p",{children:[Ct," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),G("table",{children:[u("thead",{children:G("tr",{children:[u("th",{children:"Domain"}),u("th",{children:"Class"}),u("th",{children:"Effect"})]})}),G("tbody",{children:[G("tr",{children:[u("td",{rowSpan:4,children:"Containers"}),u("td",{children:u("code",{children:"container-medium"})}),u("td",{children:"Sets the maximum size of the container to 800px."})]}),G("tr",{children:[u("td",{children:u("code",{children:"container-narrow"})}),u("td",{children:"Sets the maximum size of the container to 1200px."})]}),G("tr",{children:[u("td",{children:u("code",{children:"container-wide"})}),u("td",{children:"Sets the maximum size of the container to 1600px."})]}),G("tr",{children:[u("td",{children:u("code",{children:"container-full"})}),u("td",{children:"Sets the  maximum size of the container to 100% (width of the screen)."})]}),G("tr",{children:[u("td",{rowSpan:3,children:"Layout"}),u("td",{children:u("code",{children:"row"})}),u("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),G("tr",{children:[u("td",{children:u("code",{children:"col"})}),u("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),G("tr",{children:[u("td",{children:u("code",{children:"col-N"})}),G("td",{children:["Horizontal space is divided in 12 equal columns. From ",u("code",{children:"col-1"})," to ",u("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),G("tr",{children:[u("td",{rowSpan:4,children:"Mobile"}),u("td",{children:u("code",{children:"hide-on-mobile"})}),u("td",{children:"Hides an element if on small displays."})]}),G("tr",{children:[u("td",{children:u("code",{children:"hide-on-desktop"})}),u("td",{children:"Hides an element if on large displays."})]}),G("tr",{children:[u("td",{children:u("code",{children:"disable-mobile"})}),G("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",u("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),G("tr",{children:[u("td",{children:u("code",{children:"flex"})}),u("td",{children:"Displays content normally on wider screens but switches to a row layout on smaller devices."})]}),G("tr",{children:[u("td",{rowSpan:5,children:"Colors"}),u("td",{children:u("code",{children:"primary"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),G("tr",{children:[u("td",{children:u("code",{children:"secondary"})}),u("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),G("tr",{children:[u("td",{children:u("code",{children:"success"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),G("tr",{children:[u("td",{children:u("code",{children:"error"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),G("tr",{children:[u("td",{children:u("code",{children:"inverted"})}),u("td",{children:"Takes any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),G("tr",{children:[u("td",{rowSpan:1,children:"Alignment"}),u("td",{children:u("code",{children:"align-center"})}),u("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}r(ot,"Classes");import{jsx as f,jsxs as J}from"https://esm.sh/react@19.2.6/jsx-runtime";function at({theme:e}){let t=B();return J(m,{theme:e,children:[J("section",{className:"row",children:[J("div",{children:[J("p",{children:["Any layout element, such as a ",f("code",{children:"div"})," or ",f("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",f("code",{children:"row"})," and ",f("code",{children:"col"})," classes."]}),J("article",{children:[J("div",{className:"row disable-mobile",children:[f("div",{className:"col",children:f("code",{style:{width:"100%"},children:"col"})}),f("div",{className:"col",children:f("code",{style:{width:"100%"},children:"col"})})]}),J("div",{className:"row disable-mobile",children:[f("div",{className:"col",children:f("code",{style:{width:"100%"},children:"col"})}),f("div",{className:"col",children:f("code",{style:{width:"100%"},children:"col"})}),f("div",{className:"col",children:f("code",{style:{width:"100%"},children:"col"})})]})]})]}),f("div",{children:f(o,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),J("section",{className:"row",children:[J("div",{children:[f("p",{children:"Like similar CSS libraries, a grid contains 12 columns."}),J("p",{children:["An element with class ",f("code",{children:"col-1"})," will span just one column, whilst an element with class ",f("code",{children:"col-4"})," will span 4 columns (or 33.333% of the available space) and an element with ",f("code",{children:"col-12"})," will span the whole width of the grid."]}),J("p",{children:["Grids can combine columns of multiple widths. The generic ",f("code",{children:"col"})," class will fill all available space."]}),f("article",{children:J("div",{className:"row disable-mobile",children:[f("div",{className:"col-2",children:f("code",{style:{width:"100%"},children:"col-2"})}),f("div",{className:"col",children:f("code",{style:{width:"100%"},children:"col"})}),f("div",{className:"col-6",children:f("code",{style:{width:"100%"},children:"col-6"})})]})})]}),f("div",{children:f(o,{lang:"xml",children:`<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`})})]}),J("section",{className:"row",children:[J("div",{children:[f("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),J("figure",{children:[f("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-columns",e,t)}),f("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),f("div",{children:f(o,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),J("section",{className:"row",children:[J("div",{children:[J("p",{children:["Finally, you can even omit the ",f("code",{children:"col"})," class entirely. A ",f("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",f("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",f("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),f("article",{children:J("div",{className:"row disable-mobile",children:[f("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"ssample image "}),f("div",{children:f("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),f("div",{children:f(o,{lang:"xml",children:`<div class="row">
  <p width="80" height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}r(at,"Grids");import{jsx as O,jsxs as ge}from"https://esm.sh/react@19.2.6/jsx-runtime";function it({theme:e}){return O(m,{theme:e,children:ge("section",{className:"row",children:[ge("div",{children:[O("p",{children:"There are three classes that allow you to set different content widths:"}),ge("table",{children:[O("thead",{children:ge("tr",{children:[O("th",{children:"Class"}),O("th",{children:"Width"}),O("th",{children:"Info"})]})}),ge("tbody",{children:[ge("tr",{children:[O("td",{children:O("code",{children:"container-narrow"})}),O("td",{children:"800px"}),O("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),ge("tr",{children:[O("td",{children:O("code",{children:"container-medium"})}),O("td",{children:"1200px"}),O("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),ge("tr",{children:[O("td",{children:O("code",{children:"container-wide"})}),O("td",{children:"1600px"}),O("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]}),ge("tr",{children:[O("td",{children:O("code",{children:"container-full"})}),O("td",{children:"100%"}),ge("td",{children:["Sets the size of the container to 100%. When ",O("code",{children:"container-wide"})," is not enough."]})]})]})]}),O("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),O("div",{children:O(o,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}r(it,"Containers");import{jsx as I,jsxs as K}from"https://esm.sh/react@19.2.6/jsx-runtime";function st({theme:e}){return K(m,{theme:e,children:[K("section",{className:"row",children:[K("div",{children:[K("p",{children:["Some elements are visually meant to ",I("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",I("code",{children:"group"})," role."]}),K("p",{children:["In the case of a group of ",I("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),K("p",{role:"group",children:[I("button",{children:"Option 1"}),I("button",{type:"reset",children:"Option 2"})]})]}),I("div",{children:I(o,{lang:"xml",children:`<p role="group">
  <button>
    Option 1
  </button>f
  <button type="reset">
    Option 2
  </button>
</p>`})})]}),K("section",{className:"row",children:[K("div",{children:[K("p",{children:["In the case of a group of ",I("code",{children:"marks"}),", they're also pulled together and have any vertical space dissapear."]}),K("p",{role:"group",children:[I("mark",{children:"#test"}),I("mark",{className:"success",children:"v1.0.0"})]})]}),I("div",{children:I(o,{lang:"xml",children:`<p role="group">
  <mark>
    #test
  </mark>
  <mark class="success">
    v1.0.0
  </mark>
</p>`})})]}),K("section",{className:"row",children:[K("div",{children:[I("p",{children:"Grouping elements really shines in the case of forms and form inputs. You can see below an example of a compact login form."}),I("form",{children:K("div",{role:"group",children:[I("input",{id:"email",type:"email",placeholder:"Email"}),I("input",{id:"password",type:"password",placeholder:"Password"}),I("input",{type:"submit",value:"Login"})]})})]}),I("div",{children:I(o,{lang:"xml",children:`<form>
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
</form>`})})]}),K("section",{className:"row",children:[K("div",{children:[I("p",{children:"Grouping elements can be used to style icons and text together."}),K("div",{role:"group",children:[K("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),I("circle",{cx:"12",cy:"10",r:"3"})]}),I("b",{children:"Test Address, SE11 8CL"})]})]}),I("div",{children:I(o,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...>
  </svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]}),K("section",{className:"row",children:[K("div",{children:[I("p",{children:"Other elements, such as images, can also be grouped, although the impact isn't as pronounced."}),K("p",{role:"group",children:[I("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"image 1"}),I("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/120/120",alt:"image 2"})]})]}),I("div",{children:I(o,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}r(st,"Groups");import{jsx as le,jsxs as be}from"https://esm.sh/react@19.2.6/jsx-runtime";function rt({theme:e}){let t=B();return be(m,{theme:e,children:[be("section",{className:"row",children:[be("div",{children:[be("p",{children:["A ",le("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",le("code",{children:"nav"})," or ",le("code",{children:"menu"}),"):"]}),le("iframe",{scrolling:"no",width:"100%",height:275,src:s.example("layout-header-simple",e,t)})]}),le("div",{children:le(o,{lang:"xml",children:`<header>
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
</main>`})})]}),be("section",{className:"row",children:[be("div",{children:[be("p",{children:['You create more complex "hero" layouts by placing any element, such as a ',le("code",{children:"div"}),", inside a header. Note that heroes are defined by the extra top and bottom padding child elements receive."]}),le("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-header-sub",e,t)})]}),le("div",{children:le(o,{lang:"xml",children:`<!-- nav header -->
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
</main>`})})]}),be("section",{className:"row",children:[be("div",{children:[be("p",{children:["Finally, ",le("code",{children:"aside"}),' is another specialised element that can be used in a header in order to create a "banner" element, either to be placed at the top of the page or mid-content.']}),le("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-header-section",e,t)})]}),le("div",{children:le(o,{lang:"xml",children:`<main>
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
</main>`})})]})]})}r(rt,"Header");import{jsx as _,jsxs as xe}from"https://esm.sh/react@19.2.6/jsx-runtime";function nt({theme:e}){let t=B();return _(m,{theme:e,children:xe("section",{className:"row",children:[xe("div",{children:[xe("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",_("code",{children:"nav"})," element."]}),xe("p",{children:["As with unordered lists, you can denote the selected elment using the ",_("code",{children:"aria-selected"})," attribute."]}),_("nav",{className:"disable-mobile",children:xe("ol",{children:[_("li",{children:_("a",{href:"",children:"Home"})}),_("li",{children:_("a",{href:"",children:"Library"})}),_("li",{"aria-selected":!0,children:_("a",{href:"",children:"Data"})})]})}),_("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),_("nav",{className:"disable-mobile",children:xe("ol",{children:[_("li",{children:xe("a",{href:"",children:[xe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),_("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),_("span",{children:"Home"})]})}),_("li",{"aria-selected":!0,children:_("a",{href:"",children:"Folder"})})]})}),_("p",{children:"Finally, breadcrumbs are also responsive."}),xe("figure",{children:[_("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-breadcrumbs",e,t)}),_("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),_("div",{children:_(o,{lang:"xml",children:`<nav>
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
</nav>`})})]})})}r(nt,"Breadcrumbs");import{useState as _t}from"https://esm.sh/react@19.2.6";import{jsx as Q,jsxs as Te}from"https://esm.sh/react@19.2.6/jsx-runtime";function ft(){let[e,t]=_t("tab-1");return Q("main",{children:Te("div",{className:"row disable-mobile",children:[Q("aside",{children:Q("div",{children:Te("menu",{children:[Q("li",{"aria-selected":e==="tab-1",children:Te("a",{onClick:()=>t("tab-1"),children:[Te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),Q("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),Q("span",{children:"Home"})]})}),Q("li",{"aria-selected":e==="tab-2",children:Te("a",{onClick:()=>t("tab-2"),children:[Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Q("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),Q("span",{children:"Install"})]})}),Q("li",{"aria-selected":e==="tab-3",children:Te("a",{onClick:()=>t("tab-3"),children:[Te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"10"}),Q("path",{d:"M17 12h.01"}),Q("path",{d:"M12 12h.01"}),Q("path",{d:"M7 12h.01"})]}),Q("span",{children:"More"})]})})]})})}),Te("div",{style:{flexGrow:1},children:[e==="tab-1"?Q(ht,{}):null,e==="tab-2"?Q(vt,{}):null,e==="tab-3"?Q(gt,{}):null]})]})})}r(ft,"MobileTabs");import{useState as Vt}from"https://esm.sh/react@19.2.6";import{jsx as k,jsxs as U}from"https://esm.sh/react@19.2.6/jsx-runtime";function lt({theme:e}){let[t,a]=Vt("primary");return k(m,{theme:e,children:U("section",{className:"row",children:[U("div",{children:[U("p",{children:["You can apply several color modes with the help of few classes like ",k("code",{children:"primary"}),", ",k("code",{children:"secondary"}),", ",k("code",{children:"success"})," and ",k("code",{children:"error"}),"."]}),U("p",{children:["You can combine them with the ",k("code",{children:"inverted"})," class to change the colors of various components."]}),k("form",{children:U("label",{children:[k("span",{children:k("b",{children:"Color mode"})}),U("select",{onChange:r(h=>a(h.target.value),"onColorClassChange"),children:[k("option",{value:"primary",children:"Primary"}),k("option",{value:"secondary",children:"Secondary"}),k("option",{value:"success",children:"Success"}),k("option",{value:"error",children:"Error"})]})]})}),k("hr",{}),U("section",{children:[U("hgroup",{children:[U("h1",{children:[k("span",{className:`${t}`,children:"Lorem ipsum dolor"}),k("br",{}),"sit amet"]}),U("h4",{children:["Lorem ipsum dolor sit amet,",k("br",{}),k("span",{className:`${t} inverted`,children:"sed do amet"})]})]}),U("p",{role:"group",children:[k("mark",{className:`${t}`,children:"v12.5.33"}),k("mark",{className:`${t} inverted`,children:"Passing"})]})]}),k("section",{children:k("form",{children:U("div",{role:"group",className:`${t}`,children:[k("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),k("input",{type:"submit",value:"Subscribe"})]})})}),U("section",{children:[U("div",{className:"row",children:[U("article",{className:`${t}`,children:[U("hgroup",{children:[k("h4",{children:"Hobby"}),k("p",{children:k("b",{children:"Free"})})]}),k("p",{children:"Includes"}),U("ul",{children:[k("li",{children:"No credit card"}),k("li",{children:"All platforms"})]})]}),U("article",{className:`${t} inverted`,children:[U("hgroup",{children:[k("h4",{children:"Enterprise"}),k("p",{children:k("b",{children:k("a",{href:"",children:"Contact us"})})})]}),k("p",{children:"Includes"}),U("ul",{children:[k("li",{children:"Everything in Hobby"}),k("li",{children:"24/7 support"})]})]})]}),k("blockquote",{className:`${t}`,children:U("hgroup",{children:[k("h4",{children:"More information"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),U("p",{children:["Link ",k("a",{href:"",children:"here"}),"."]})]})})]})]}),k("div",{children:k(o,{lang:"xml",children:`...
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
`})})]})})}r(lt,"Colors");import{jsx as $e,jsxs as De}from"https://esm.sh/react@19.2.6/jsx-runtime";function dt({theme:e}){let t=B();return De(m,{theme:e,children:[De("section",{className:"row",children:[De("div",{children:[De("p",{children:["A ",$e("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),$e("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-footer-simple",e,t)})]}),$e("div",{children:$e(o,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer with a <a href="...">link</a>.
  </div>
</footer>`})})]}),De("section",{className:"row",children:[De("div",{children:[$e("p",{children:"More complex footers can contain information divided by columns, etc."}),$e("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-footer-complex",e,t)})]}),$e("div",{children:$e(o,{lang:"xml",children:`<footer>
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
</footer>`})})]})]})}r(dt,"Footer");import{useState as Ut}from"https://esm.sh/react@19.2.6";import{jsx as S,jsxs as j}from"https://esm.sh/react@19.2.6/jsx-runtime";function ct({theme:e}){let[t,a]=Ut(!0);return j(m,{theme:e,children:[j("section",{className:"row",children:[j("div",{children:[j("p",{children:["You can add a loading indicator to an element by adding the ",S("code",{children:"aria-busy"})," attribute, with ",j("span",{role:"group",style:{display:"inline-flex"},children:[S("mark",{onClick:()=>a(!0),className:t?"success":"",children:"true"}),S("mark",{onClick:()=>a(!1),className:t?"":"success",children:"false"})]}),"."]}),S("p",{children:"For example, it can be applied to buttons (with or without exiting icons):"}),j("p",{className:"flex",children:[S("button",{"aria-busy":t,children:j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[S("path",{d:"M4 11a9 9 0 0 1 9 9"}),S("path",{d:"M4 4a16 16 0 0 1 16 16"}),S("circle",{cx:"5",cy:"19",r:"1"})]})}),S("button",{"aria-busy":t,role:"reset",children:"Button"}),j("button",{"aria-busy":t,className:"secondary",children:[j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[S("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),S("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),S("span",{children:"Home"})]}),j("button",{type:"reset","aria-busy":t,children:[S("span",{children:"Play"}),j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[S("path",{d:"M21 4v16"}),S("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]})]}),S("div",{children:S(o,{lang:"xml",children:`<!-- icon button -->
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
</button>`})})]}),j("section",{className:"row",children:[j("div",{children:[S("p",{children:"It can be applied to paragraphs or other text elements:"}),S("p",{"aria-busy":t,children:"Loading..."}),S("p",{children:S("a",{href:"","aria-busy":t,children:"Click me"})})]}),S("div",{children:S(o,{lang:"xml",children:`<p${t?" aria-busy":""}>Loading...</p>
          
<a href="..."${t?" aria-busy":""}>Click me</a>`})})]}),j("section",{className:"row",children:[S("div",{}),S("div",{})]}),j("section",{className:"row",children:[j("div",{children:[S("p",{children:"Or it can be applied to block elements. In this case the whole content is hidden when loading."}),S("blockquote",{"aria-busy":t,children:j("p",{children:["Press",S("kbd",{children:"Ctrl + Q"}),"to quit"]})})]}),S("div",{children:S(o,{lang:"xml",children:`<blockquote${t?" aria-busy":""}>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>`})})]}),j("section",{className:"row",children:[j("div",{children:[S("p",{children:"And cards of different types, where the loading spinner is also horizontally centered."}),S("article",{"aria-busy":t,children:j("details",{open:!0,children:[S("summary",{children:"Note"}),S("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),j("article",{"aria-busy":t,className:"success",children:[S("span",{children:S("b",{children:"Title"})}),S("p",{children:"Lorem ipsum ..."})]})]}),S("div",{children:S(o,{lang:"xml",children:`<article${t?" aria-busy":""}>
  <details>
    <summary>...</summary>
    <p>...</p>
  </details>
</article>

<article${t?" aria-busy":""}>
  <span><b>...</b></span>
  <p>...</p>
</article>`})})]})]})}r(ct,"Loading");var s=class e{static{r(this,"RouteMaster")}static baseRoute="";static home(t,a){return`${e.getBase(a)}${t}/`}static showcase(t,a){return`${e.getBase(a)}${t}/showcases.html`}static doc(t,a,q){let h=e.getBase(q);switch(t){case"typography":return`${h}${a}/pages/docs/basics/${l(Be)}`;case"buttons":return`${h}${a}/pages/docs/basics/${l(qe)}`;case"blockquotes":return`${h}${a}/pages/docs/basics/${l(Fe)}`;case"code":return`${h}${a}/pages/docs/basics/${l(He)}`;case"figures":return`${h}${a}/pages/docs/basics/${l(Ie)}`;case"lists":return`${h}${a}/pages/docs/basics/${l(ze)}`;case"links":return`${h}${a}/pages/docs/basics/${l(Ae)}`;case"summary":return`${h}${a}/pages/docs/basics/${l(We)}`;case"table":return`${h}${a}/pages/docs/basics/${l(Re)}`;case"tags":return`${h}${a}/pages/docs/basics/${l(Oe)}`;case"cards":return`${h}${a}/pages/docs/basics/${l(tt)}`;case"forms-check":return`${h}${a}/pages/docs/forms/${l(Ge)}`;case"forms-disabled":return`${h}${a}/pages/docs/forms/${l(Pe)}`;case"forms-grouped":return`${h}${a}/pages/docs/forms/${l(Ye)}`;case"forms-normal":return`${h}${a}/pages/docs/forms/${l(_e)}`;case"forms-validation":return`${h}${a}/pages/docs/forms/${l(Ve)}`;case"header":return`${h}${a}/pages/docs/layout/${l(rt)}`;case"footer":return`${h}${a}/pages/docs/layout/${l(dt)}`;case"groups":return`${h}${a}/pages/docs/layout/${l(st)}`;case"modal":return`${h}${a}/pages/docs/layout/${l(je)}`;case"navigation":return`${h}${a}/pages/docs/navigation/${l(Ke)}`;case"breadcrumbs":return`${h}${a}/pages/docs/navigation/${l(nt)}`;case"tabs":return`${h}${a}/pages/docs/navigation/${l(Qe)}`;case"menu":return`${h}${a}/pages/docs/navigation/${l(Ze)}`;case"dark-mode":return`${h}${a}/pages/docs/extra/${l(Je)}`;case"icons":return`${h}${a}/pages/docs/extra/${l(Xe)}`;case"loading":return`${h}${a}/pages/docs/extra/${l(ct)}`;case"mobile":return`${h}${a}/pages/docs/extra/${l(et)}`;case"classes":return`${h}${a}/pages/docs/custom/${l(ot)}`;case"grid":return`${h}${a}/pages/docs/custom/${l(at)}`;case"containers":return`${h}${a}/pages/docs/custom/${l(it)}`;case"colors":return`${h}${a}/pages/docs/custom/${l(lt)}`;default:return"/"}}static getDocFromRoute(t){let q=t.split("/docs/").pop(),[h,g]=q?.split("/")??[];switch(h){case"basics":switch(g){case l(Be):return"typography";case l(qe):return"buttons";case l(Fe):return"blockquotes";case l(He):return"code";case l(Ie):return"figures";case l(Ae):return"links";case l(ze):return"lists";case l(We):return"summary";case l(Re):return"table";case l(Oe):return"tags";case l(tt):return"cards"}case"forms":switch(g){case l(Ge):return"forms-check";case l(Pe):return"forms-disabled";case l(Ye):return"forms-grouped";case l(_e):return"forms-normal";case l(Ve):return"forms-validation"}case"layout":switch(g){case l(rt):return"header";case l(dt):return"footer";case l(st):return"groups";case l(je):return"modal"}case"navigation":switch(g){case l(Ke):return"navigation";case l(nt):return"breadcrumbs";case l(Qe):return"tabs";case l(Ze):return"menu"}case"extra":switch(g){case l(Je):return"dark-mode";case l(Xe):return"icons";case l(ct):return"loading";case l(et):return"mobile"}case"custom":switch(g){case l(ot):return"classes";case l(at):return"grid";case l(it):return"containers";case l(lt):return"colors"}}}static example(t,a,q){let h=e.getBase(q);switch(t){case"desktop-menu":return`${h}${a}/pages/examples/${l($t)}`;case"layout-header-simple":return`${h}${a}/pages/examples/${l(Mt)}`;case"layout-header-sub":return`${h}${a}/pages/examples/${l(Et)}`;case"layout-header-section":return`${h}${a}/pages/examples/${l(Nt)}`;case"layout-footer-simple":return`${h}${a}/pages/examples/${l(Ht)}`;case"layout-footer-complex":return`${h}${a}/pages/examples/${l(It)}`;case"mobile-columns":return`${h}${a}/pages/examples/${l(Dt)}`;case"mobile-menu":return`${h}${a}/pages/examples/${l(qt)}`;case"mobile-nav":return`${h}${a}/pages/examples/${l(Bt)}`;case"mobile-breadcrumbs":return`${h}${a}/pages/examples/${l(Tt)}`;case"mobile-tabs-nav":return`${h}${a}/pages/examples/${l(ft)}`;case"mobile-typography":return`${h}${a}/pages/examples/${l(Ft)}`}}static showcases(t,a){return`${e.getBase(a)}showcase/${t}/${yt(t)}.html`}static showcaseImg(t,a,q="light"){return`${e.getBase(a)}showcase/${t}/${yt(t)}.${q}.png`}static getBase(t){return t?t===""?"/":`/${t}/`:"/"}};function l(e){return`${yt(e.name)}.html`}r(l,"htmlName");function yt(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}r(yt,"toKebabCase");import{jsx as R,jsxs as Ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function wt(){let e=St(),t=B(),a=r(q=>{let h=q.target.value;if(typeof window<"u"){let g=window.location.pathname;if(g.includes(e)){let de=g.replace(e,h);window.location.href=de}else if(g.includes(Me)){let de=g.split("/"),ce=de.indexOf(Me)+1;de.splice(ce,0,h);let Wt=de.join("/");window.location.href=Wt}else{let de=`/${h}${g}`;window.location.href=de}}},"onThemeChange");return R("nav",{children:Ce("ul",{children:[R("li",{children:Ce("a",{href:s.home(e,t),children:[Ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),R("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),R("span",{children:"Home"})]})}),R("li",{children:Ce("a",{href:s.showcase(e,t),children:[Ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),R("circle",{cx:"12",cy:"12",r:"3"})]}),R("span",{children:"Showcase"})]})}),R("div",{}),R("li",{className:"hide-on-desktop",children:Ce("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[Ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),R("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),R("span",{children:"GitHub"})]})}),R("li",{children:Ce("select",{name:"theme-selector",onChange:a,children:[R("option",{value:"default",selected:e==="default",children:"Default"}),R("option",{value:"blog",selected:e==="blog",children:"Blog"}),R("option",{value:"app",selected:e==="app",children:"App"}),R("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),R("option",{value:"landing",selected:e==="landing",children:"Landing"}),R("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),R("li",{className:"hide-on-mobile",children:R("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:R("button",{type:"reset",children:Ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),R("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}r(wt,"TopNav");import{jsx as kt,jsxs as jt}from"https://esm.sh/react@19.2.6/jsx-runtime";function xt({theme:e,children:t}){return jt(Lt,{value:e,children:[kt("header",{children:kt(wt,{})}),kt("main",{children:t})]})}r(xt,"HomeLayout");import{jsx as n,jsxs as me}from"https://esm.sh/react@19.2.6/jsx-runtime";function m({theme:e,children:t}){let a=B(),[q,h]=At(!1),[g,de]=At(void 0);return Kt(()=>{if(typeof window<"u"){let ce=s.getDocFromRoute(window.location.pathname);de(ce)}},[]),n(xt,{theme:e,children:me("div",{className:"row",children:[me("aside",{children:[me("div",{className:"hide-on-desktop",role:"group",children:[me("div",{className:"row",children:[n("div",{children:n("button",{onClick:()=>h(!q),children:q?me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M18 6 6 18"}),n("path",{d:"m6 6 12 12"})]}):me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n("path",{d:"M7 8h10"}),n("path",{d:"M7 12h10"}),n("path",{d:"M7 16h10"})]})})}),n("span",{children:n("b",{children:"Chapters"})})]}),n("hr",{})]}),me("div",{className:q===!1||q===void 0?"hide-on-mobile":"",children:[me("menu",{children:[n("b",{children:"Basics"}),n("li",{"aria-selected":g==="typography",children:n("a",{href:s.doc("typography",e,a),children:"Typography"})}),n("li",{"aria-selected":g==="buttons",children:n("a",{href:s.doc("buttons",e,a),children:"Buttons"})}),n("li",{"aria-selected":g==="tags",children:n("a",{href:s.doc("tags",e,a),children:"Tags"})}),n("li",{"aria-selected":g==="lists",children:n("a",{href:s.doc("lists",e,a),children:"Lists"})}),n("li",{"aria-selected":g==="links",children:n("a",{href:s.doc("links",e,a),children:"Links"})}),n("li",{"aria-selected":g==="blockquotes",children:n("a",{href:s.doc("blockquotes",e,a),children:"Blokquotes"})}),n("li",{"aria-selected":g==="summary",children:n("a",{href:s.doc("summary",e,a),children:"Summary"})}),n("li",{"aria-selected":g==="code",children:n("a",{href:s.doc("code",e,a),children:"Code"})}),n("li",{"aria-selected":g==="table",children:n("a",{href:s.doc("table",e,a),children:"Table"})}),n("li",{"aria-selected":g==="figures",children:n("a",{href:s.doc("figures",e,a),children:"Figures"})}),n("li",{"aria-selected":g==="cards",children:n("a",{href:s.doc("cards",e,a),children:"Cards"})})]}),me("menu",{children:[n("b",{children:"Forms"}),n("li",{"aria-selected":g==="forms-normal",children:n("a",{href:s.doc("forms-normal",e,a),children:"Normal"})}),n("li",{"aria-selected":g==="forms-check",children:n("a",{href:s.doc("forms-check",e,a),children:"Checks & Radios"})}),n("li",{"aria-selected":g==="forms-grouped",children:n("a",{href:s.doc("forms-grouped",e,a),children:"Grouped"})}),n("li",{"aria-selected":g==="forms-disabled",children:n("a",{href:s.doc("forms-disabled",e,a),children:"Disabled"})}),n("li",{"aria-selected":g==="forms-validation",children:n("a",{href:s.doc("forms-validation",e,a),children:"Validation"})})]}),me("menu",{children:[n("b",{children:"Layout"}),n("li",{"aria-selected":g==="header",children:n("a",{href:s.doc("header",e,a),children:"Headers"})}),n("li",{"aria-selected":g==="footer",children:n("a",{href:s.doc("footer",e,a),children:"Footers"})}),n("li",{"aria-selected":g==="groups",children:n("a",{href:s.doc("groups",e,a),children:"Groups"})}),n("li",{"aria-selected":g==="modal",children:n("a",{href:s.doc("modal",e,a),children:"Modal"})})]}),me("menu",{children:[n("b",{children:"Navigation"}),n("li",{"aria-selected":g==="navigation",children:n("a",{href:s.doc("navigation",e,a),children:"Basic"})}),n("li",{"aria-selected":g==="breadcrumbs",children:n("a",{href:s.doc("breadcrumbs",e,a),children:"Breadcrumbs"})}),n("li",{"aria-selected":g==="menu",children:n("a",{href:s.doc("menu",e,a),children:"Menu"})}),n("li",{"aria-selected":g==="tabs",children:n("a",{href:s.doc("tabs",e,a),children:"Tabs"})})]}),me("menu",{children:[n("b",{children:"Extra"}),n("li",{"aria-selected":g==="dark-mode",children:n("a",{href:s.doc("dark-mode",e,a),children:"Dark Mode"})}),n("li",{"aria-selected":g==="icons",children:n("a",{href:s.doc("icons",e,a),children:"Icons"})}),n("li",{"aria-selected":g==="loading",children:n("a",{href:s.doc("loading",e,a),children:"Loading"})}),n("li",{"aria-selected":g==="mobile",children:n("a",{href:s.doc("mobile",e,a),children:"Mobile"})})]}),me("menu",{children:[n("b",{children:"Custom"}),n("li",{"aria-selected":g==="grid",children:n("a",{href:s.doc("grid",e,a),children:"Grids"})}),n("li",{"aria-selected":g==="containers",children:n("a",{href:s.doc("containers",e,a),children:"Containers"})}),n("li",{"aria-selected":g==="colors",children:n("a",{href:s.doc("colors",e,a),children:"Colors"})}),n("li",{"aria-selected":g==="classes",children:n("a",{href:s.doc("classes",e,a),children:"Classes"})})]})]})]}),n("div",{children:t})]})})}r(m,"DocLayout");export{B as a,m as b,qe as c,Be as d,Fe as e,He as f,Ie as g,Ae as h,We as i,Re as j,Oe as k,ze as l,Ge as m,Pe as n,Ye as o,_e as p,Ve as q,je as r,Ke as s,Qe as t,Ze as u,Je as v,Xe as w,et as x,tt as y,ot as z,at as A,it as B,st as C,rt as D,nt as E,ft as F,lt as G,dt as H,ct as I,s as J,wt as K,xt as L};
