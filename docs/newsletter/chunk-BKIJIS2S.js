import{a as Bt}from"./chunk-MDCAHXJR.js";import{a as Ft}from"./chunk-XF2WV4YZ.js";import{a as It}from"./chunk-PRBPLC6K.js";import{a as Ht}from"./chunk-HRT75PLO.js";import{a as Et}from"./chunk-GSZ6UK6V.js";import{a as Mt}from"./chunk-6WZ2BZS5.js";import{a as St}from"./chunk-C74J2UAQ.js";import{a as Tt}from"./chunk-K4XVBUED.js";import{a as Dt}from"./chunk-KC2WVVTY.js";import{a as qt}from"./chunk-4F2ROYBB.js";import{b as Ct,c as Lt,d as Nt,e as o}from"./chunk-ANG52S5Y.js";import{a as $e}from"./chunk-7AZBNJU6.js";import{a as $t}from"./chunk-SVFQNSTA.js";import{a as r}from"./chunk-7X4DHW36.js";import{useEffect as Kt,useState as At}from"https://esm.sh/react@19.2.6";import{useState as Rt,useEffect as Ot}from"https://esm.sh/react@19.2.6";function B(){let[e,t]=Rt(void 0);return Ot(()=>{if(typeof window<"u"){let q=window.location.pathname.includes($e)?$e:"";t(q)}},[]),e}r(B,"useRoute");import{jsx as p,jsxs as N}from"https://esm.sh/react@19.2.6/jsx-runtime";function De({theme:e}){let t=B();return N(m,{theme:e,children:[N("section",{className:"row",children:[N("div",{children:[N("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",p("code",{children:"reset"})," type buttons)."]}),N("p",{children:[p("button",{children:"Button"}),p("button",{type:"reset",children:"Button"})]})]}),p("div",{children:p(o,{lang:"xml",children:`<button>Button</button>
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
</p>`})})]})]})}r(De,"Buttons");import{jsx as f,jsxs as ae}from"https://esm.sh/react@19.2.6/jsx-runtime";function qe({theme:e}){return ae(m,{theme:e,children:[ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["Typography is based purely on ",f("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),f("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),f("div",{children:f(o,{lang:"xml",children:`<p>
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
</p>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["To all sorts of text modifiers, like ",f("code",{children:"b"}),", ",f("code",{children:"i"}),", ",f("code",{children:"em"})," tags and many more."]}),f("p",{children:f("i",{children:"italic"})}),f("p",{children:f("em",{children:"emphasized"})}),f("p",{children:f("dfn",{children:"definition"})}),f("p",{children:f("cite",{children:"citation"})}),f("p",{children:f("b",{children:"bold"})}),f("p",{children:f("strong",{children:"strong"})}),f("p",{children:f("del",{children:"deleted"})}),f("p",{children:f("s",{children:"corrected"})}),f("p",{children:f("u",{children:"underlined"})}),f("p",{children:f("q",{children:"quotation"})})]}),f("div",{children:f(o,{lang:"xml",children:`<i>italic</i>
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
<sup>supescript</sup>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["Finally, it supports all six ",f("code",{children:"heading"})," types."]}),f("h1",{children:"Heading 1"}),f("h2",{children:"Heading 2"}),f("h3",{children:"Heading 3"}),f("h4",{children:"Heading 4"}),f("h5",{children:"Heading 5"}),f("h6",{children:"Heading 6"})]}),f("div",{children:f(o,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["As well as the ability to group headings and associated content with ",f("code",{children:"hgroup"}),"."]}),ae("hgroup",{children:[f("h1",{children:"Heading 1"}),f("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),f("div",{children:f(o,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}r(qe,"Typography");import{jsx as k,jsxs as Z}from"https://esm.sh/react@19.2.6/jsx-runtime";function Be({theme:e}){let t=B();return Z(m,{theme:e,children:[Z("section",{className:"row",children:[Z("div",{children:[k("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),k("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),k("div",{children:k(o,{lang:"xml",children:`<blockquote>
  Lorem ipsum ...
</blockquote>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[k("p",{children:"It's not just text that can be included in a blockquote element, but code, icons, and many other elements."}),k("blockquote",{children:Z("p",{children:["Press ",k("kbd",{children:"Ctrl + Q"})," to quit"]})}),k("blockquote",{children:Z("hgroup",{children:[Z("p",{role:"group",children:[Z("svg",{xmlns:" http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[k("circle",{cx:"12",cy:"12",r:"10"}),k("path",{d:"M12 16v-4"}),k("path",{d:"M12 8h.01"})]}),k("span",{children:"Information"})]}),Z("p",{children:["Delivery for ",k("b",{children:"Tuesday at 08:00."})]})]})}),k("p",{children:Z("small",{children:["You can learn more about groups ",k("a",{href:s.doc("groups",e,t),children:"here"})," and about icons ",k("a",{href:s.doc("icons",e,t),children:"here"}),"."]})})]}),k("div",{children:k(o,{lang:"xml",children:`<blockquote>
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
</blockquote>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[Z("p",{children:["Blockquotes can also be styled using the ",k("code",{children:"success"}),", ",k("code",{children:"error"}),", ",k("code",{children:"primary"})," and ",k("code",{children:"secondary"})," classes."]}),k("blockquote",{className:"success",children:Z("hgroup",{children:[k("h4",{children:"Success"}),k("p",{children:"The operation was successfull"})]})}),k("blockquote",{className:"error",children:Z("hgroup",{children:[k("p",{children:"Unknown error"}),k("p",{children:Z("code",{children:["Server response is ",k("b",{children:"Error 500"})]})})]})}),k("blockquote",{className:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),k("blockquote",{className:"secondary",children:k("hgroup",{children:Z("hgroup",{children:[k("h4",{children:"Title"}),k("p",{children:"Important Information"}),k("p",{children:k("button",{children:"Click me"})})]})})}),k("hgroup",{children:k("p",{children:Z("small",{children:["You can learn more about colors ",k("a",{href:s.doc("colors",e,t),children:"here"}),"."]})})})]}),k("div",{children:k(o,{lang:"xml",children:`<blockquote class="success">
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
</blockquote>`})})]})]})}r(Be,"Blockquotes");import{jsx as ue,jsxs as Me}from"https://esm.sh/react@19.2.6/jsx-runtime";function Fe({theme:e}){return ue(m,{theme:e,children:ue("section",{children:Me("div",{className:"row",children:[Me("div",{children:[ue("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),Me("p",{children:["Inline code ",ue("code",{children:"console.log('abc')"})]}),Me("p",{children:["Keyboard shortcut ",ue("kbd",{children:"Ctrl + S"})]}),Me("figure",{children:[ue(o,{lang:"xml",children:"console.log('abc')"}),ue("figcaption",{children:"Code block"})]}),Me("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",ue("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",ue("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),ue("div",{children:ue(o,{lang:"xml",children:`<p>
  Inline code <code>console.log('abc')</code>
</p>
<p>
  Keyboard shortcut <kbd>Ctrl + S</kbd>
</p>
<pre>
  <code>console.log('abc')</code>
</pre>`})})]})})})}r(Fe,"Code");import{jsx as ce,jsxs as fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function He({theme:e}){return fe(m,{theme:e,children:[fe("section",{className:"row",children:[fe("div",{children:[ce("p",{children:"Figures can contain a single image and an associated caption."}),fe("figure",{children:[ce("img",{width:"640",height:"480",src:"https://picsum.photos/id/16/640/480",alt:"ssample image "}),ce("figcaption",{children:"Sample caption"})]})]}),ce("div",{children:ce(o,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),fe("section",{className:"row",children:[fe("div",{children:[ce("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),fe("figure",{children:[fe("figure",{children:[ce("img",{width:"200",height:"240",src:"https://picsum.photos/id/16/200/240",alt:"first image"}),ce("figcaption",{children:"First image"})]}),fe("figure",{children:[ce("img",{width:"240",height:"240",src:"https://picsum.photos/id/16/240/240",alt:"second image"}),ce("figcaption",{children:"Second image"})]}),ce("figcaption",{children:"Figure group"})]})]}),ce("div",{children:ce(o,{lang:"xml",children:`<figure>
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
</figure>`})})]})]})}r(He,"Figures");import{jsx as he,jsxs as pt}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ie({theme:e}){return he(m,{theme:e,children:pt("section",{className:"row",children:[pt("div",{children:[he("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),pt("ul",{children:[he("li",{children:he("a",{href:"",children:"website.com"})}),he("li",{children:he("a",{href:"",children:"email@test.com"})}),he("li",{children:he("a",{href:"",children:"/#location"})})]})]}),he("div",{children:he(o,{lang:"xml",children:`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location">
  /#location
</a>
`})})]})})}r(Ie,"Links");import{jsx as C,jsxs as G}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ae({theme:e}){let t=B();return G(m,{theme:e,children:[G("section",{className:"row",children:[G("div",{children:[C("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),G("details",{children:[C("summary",{children:"Info"}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),G("details",{children:[C("summary",{children:"More info Info"}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),C("div",{children:C(o,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),G("section",{className:"row",children:[G("div",{children:[G("p",{children:["This basic summary can be placed inside an ",C("code",{children:"article"})," and combined with the ",C("code",{children:"primary"}),", ",C("code",{children:"success"})," or ",C("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),C("article",{children:G("details",{open:!0,children:[C("summary",{children:"Note"}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),C("article",{className:"primary",children:G("details",{children:[C("summary",{children:"Info"}),G("p",{children:["Larn more ",C("a",{href:"",children:"here"})]})]})}),C("article",{className:"success",children:G("details",{children:[C("summary",{children:"Success"}),G("p",{children:["Operation finished ",C("code",{children:"OK"})]})]})}),C("article",{className:"error",children:G("details",{children:[C("summary",{children:"Error"}),G("div",{children:[C("p",{children:"Unknown error occurred"}),C("hr",{}),C("button",{children:"Acknowledge"})]})]})}),C("p",{children:G("small",{children:["You can learn more about colors ",C("a",{href:s.doc("colors",e,t),children:"here"})," and cards ",C("a",{href:s.doc("cards",e,t),children:"here"}),"."]})})]}),C("div",{children:C(o,{lang:"xml",children:`<article>
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
</article>`})})]}),G("section",{className:"row",children:[G("div",{children:[G("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",C("code",{children:"article"}),", you can form an accordion menu:"]}),G("article",{children:[G("details",{name:"menu",children:[C("summary",{children:"Option 1"}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),G("details",{name:"menu",open:!0,children:[C("summary",{children:"Option 2"}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),G("details",{name:"menu",children:[C("summary",{children:"Option 3"}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),C("div",{children:C(o,{lang:"xml",children:`
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
</article>`})})]})]})}r(Ae,"Summary");import{jsx as S,jsxs as ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function We({theme:e}){return S(m,{theme:e,children:ve("section",{className:"row",children:[ve("div",{children:[S("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),ve("table",{children:[S("thead",{children:ve("tr",{children:[S("th",{children:"Cover"}),S("th",{children:"Item"}),S("th",{children:"Value"}),S("th",{children:"Comment"})]})}),ve("tbody",{children:[ve("tr",{children:[S("td",{children:S("img",{width:"30",height:"50",src:"https://picsum.photos/id/16/30/50",alt:"cover 1"})}),S("td",{children:S("a",{href:"",children:"Item 1.1"})}),S("td",{children:"20.35"}),S("td",{children:"In stock"})]}),ve("tr",{children:[S("td",{children:S("img",{width:"30",height:"50",src:"https://picsum.photos/id/100/30/50",alt:"cover 2"})}),S("td",{children:S("a",{href:"",children:"Item 2.1"})}),S("td",{children:"15.99"}),S("td",{children:"Out of stock"})]}),ve("tr",{children:[S("td",{children:S("img",{width:"30",height:"50",src:"https://picsum.photos/id/40/30/50",alt:"cover 3"})}),S("td",{children:S("a",{href:"",children:"Item 5.1"})}),S("td",{children:"14.23"}),S("td",{children:"In stock"})]}),ve("tr",{children:[S("td",{children:S("img",{width:"30",height:"50",src:"https://picsum.photos/id/25/30/50",alt:"cover 4"})}),S("td",{children:S("a",{href:"",children:"Item 22"})}),S("td",{children:"10.11"}),S("td",{children:"In stock"})]})]}),S("tfoot",{children:ve("tr",{children:[S("td",{colSpan:2,children:S("b",{children:"Total"})}),S("td",{colSpan:2,children:S("b",{children:"60.68"})})]})})]})]}),S("div",{children:S(o,{lang:"xml",children:`<table>
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
</table>`})})]})})}r(We,"Table");import{jsx as d,jsxs as T}from"https://esm.sh/react@19.2.6/jsx-runtime";function Re({theme:e}){let t=B();return T(m,{theme:e,children:[T("section",{className:"row",children:[T("div",{children:[T("p",{children:["You can mark any text, keyword or piece of information with the ",d("code",{children:"mark"})," html tag."]}),d("p",{children:d("mark",{children:"v15.20.30"})})]}),d("div",{children:d(o,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),T("section",{className:"row",children:[T("div",{children:[d("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),T("p",{children:[T("mark",{children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),d("path",{d:"m9 12 2 2 4-4"})]}),d("span",{children:"released"})]}),T("mark",{children:[d("span",{children:"error"}),T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),d("path",{d:"m9 12 2 2 4-4"})]})]})]}),d("p",{children:T("small",{children:["You can learn more about icons ",d("a",{href:s.doc("icons",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["You  can assign the ",d("code",{children:"primary"}),", ",d("code",{children:"secondary"}),", ",d("code",{children:"success"})," or ",d("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",d("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),T("p",{className:"flex",children:[d("mark",{className:"primary",children:"#theme"}),d("mark",{className:"secondary",children:"#second"}),d("mark",{className:"success",children:"Process OK"}),d("mark",{className:"error",children:"Error 400"})]}),T("p",{className:"flex",children:[d("mark",{className:"primary inverted",children:"#theme"}),d("mark",{className:"secondary inverted",children:"#second"}),d("mark",{className:"success inverted",children:"Process OK"}),d("mark",{className:"error inverted",children:"Error 400"})]}),d("p",{children:T("small",{children:["You can learn more about colors ",d("a",{href:s.doc("colors",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<!-- with or without -->
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
</mark>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",d("code",{children:"group"})," role, they will be grouped together."]}),T("p",{role:"group",children:[d("mark",{children:"npm"}),d("mark",{className:"success",children:"1.0.3"}),d("mark",{className:"error",children:T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[d("path",{d:"M18 6 6 18"}),d("path",{d:"m6 6 12 12"})]})})]}),d("p",{children:T("small",{children:["You can learn more about groups ",d("a",{href:s.doc("groups",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["You can use the ",d("code",{children:"mark"})," tag as standalone badges with text or with icons."]}),T("p",{children:[d("mark",{children:"1"}),d("mark",{children:"2"}),d("mark",{children:"3"}),d("mark",{children:T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),d("circle",{cx:"12",cy:"10",r:"3"})]})})]}),d("p",{children:"Or in more complex layouts."}),T("article",{children:[d("div",{role:"group",children:T("div",{className:"row",children:[d("mark",{className:"secondary",children:"1"}),T("div",{children:[d("b",{children:"Lorem ipsum dolor sit amet"}),d("br",{}),d("small",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}),d("div",{role:"group",children:T("div",{className:"row",children:[d("mark",{className:"secondary",children:"2"}),T("div",{children:[d("b",{children:"Sed ut perspiciatis unde omnis"}),d("br",{}),d("small",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."})]})]})}),d("div",{role:"group",children:T("div",{className:"row",children:[d("mark",{className:"secondary",children:"3"}),T("div",{children:[d("b",{children:"At vero eos et accusamus"}),d("br",{}),d("small",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."})]})]})})]}),d("p",{children:T("small",{children:["You can learn more about cards ",d("a",{href:s.doc("cards",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<p>
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
</article>`})})]})]})}r(Re,"Tags");import{jsx as X,jsxs as ye}from"https://esm.sh/react@19.2.6/jsx-runtime";function Oe({theme:e}){return ye(m,{theme:e,children:[ye("section",{className:"row",children:[ye("div",{children:[X("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),X("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),ye("ul",{children:[X("li",{children:"Item 1"}),X("li",{children:"Item 2"}),ye("ol",{children:[X("li",{children:"Item 1"}),X("li",{children:"Item 2"})]})]})]}),X("div",{children:X(o,{lang:"xml",children:`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`})})]}),ye("section",{className:"row",children:[ye("div",{children:[ye("p",{children:["Definition lists are styled such that ",X("code",{children:"dd"})," elements are inlined compared to ",X("code",{children:"dt"})," elements."]}),ye("dl",{children:[X("dt",{children:"Coffee"}),X("dd",{children:"Black hot drink"}),X("dt",{children:"Milk"}),X("dd",{children:"White cold drink"})]})]}),X("div",{children:X(o,{lang:"xml",children:`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`})})]})]})}r(Oe,"Lists");import{useState as mt}from"https://esm.sh/react@19.2.6";import{jsx as y,jsxs as V}from"https://esm.sh/react@19.2.6/jsx-runtime";function ze({theme:e}){let[t,a]=mt("bread"),[q,h]=mt(!1),[g,le]=mt(!0);return V(m,{theme:e,children:[V("section",{className:"row",children:[V("div",{children:[y("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),V("form",{children:[y("p",{children:y("b",{children:"Options"})}),V("label",{htmlFor:"egg",children:[y("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),y("span",{children:"Egg"})]}),V("label",{htmlFor:"cheese",children:[y("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),y("span",{children:"Cheese"})]}),V("label",{htmlFor:"ham",children:[y("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),y("span",{children:"Ham"})]})]}),y("p",{children:"These work well even for complex, multi-line, checkboxes"}),V("form",{children:[y("p",{children:y("b",{children:"Todos"})}),V("label",{htmlFor:"friday",children:[y("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),V("span",{children:[y("b",{children:"Friday"}),y("br",{}),y("span",{children:"- Order lunch"}),y("br",{}),y("span",{children:"- Go to work"}),y("span",{children:"- Eat lunch"})]})]}),V("label",{htmlFor:"saturday",children:[y("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),V("span",{children:[y("b",{children:"Saturday"}),y("br",{}),y("span",{children:"- Order lunch"}),y("br",{}),y("span",{children:"- Eat lunch"})]})]})]})]}),y("div",{children:y(o,{lang:"xml",children:`<form>
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
</form>`})})]}),V("section",{className:"row",children:[V("div",{children:[y("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),V("form",{children:[y("p",{children:y("b",{children:"Wrapping"})}),V("label",{htmlFor:"bread",children:[y("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:t==="bread",onChange:de=>a(de.target.value)}),y("span",{children:"Bread"})]}),V("label",{htmlFor:"salad",children:[y("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:t==="salad",onChange:de=>a(de.target.value)}),y("span",{children:"Salad"})]})]})]}),y("div",{children:y(o,{lang:"xml",children:`<form>
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
</form>`})})]}),V("section",{className:"row",children:[V("div",{children:[y("p",{children:"And if you want to represent an on/off state, you can use switches."}),V("form",{children:[V("label",{htmlFor:"terms",onClick:()=>h(!q),children:[y("input",{name:"terms",type:"checkbox",role:"switch",checked:q}),y("span",{children:"I agree to the terms"})]}),V("label",{htmlFor:"updates",onClick:()=>le(!g),children:[y("input",{name:"updates",type:"checkbox",role:"switch",checked:g}),y("span",{children:"I want to receive updates"})]})]})]}),y("div",{children:y(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}r(ze,"FormsCheckbox");import{jsx as ie,jsxs as Le}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ge({theme:e}){return ie(m,{theme:e,children:Le("section",{className:"row",children:[Le("div",{children:[Le("p",{children:["A form can have all or part of its inputs set as ",ie("code",{children:"disabled"})," to prevent any user interaction."]}),ie("form",{children:Le("fieldset",{children:[ie("legend",{children:"Disabled form"}),Le("label",{htmlFor:"email",children:[ie("span",{children:"Email"}),ie("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),Le("label",{htmlFor:"address",children:[ie("span",{children:"Address"}),ie("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),Le("label",{htmlFor:"delivery",children:[ie("span",{children:"Delivery"}),Le("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[ie("option",{value:"fast",children:"Fast"}),ie("option",{value:"standard",children:"Standard"})]})]}),ie("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),ie("div",{children:ie(o,{lang:"xml",children:`<form>
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
</form>`})})]})})}r(Ge,"FormsDisabled");import{jsx as E,jsxs as U}from"https://esm.sh/react@19.2.6/jsx-runtime";function Pe({theme:e}){return U(m,{theme:e,children:[U("section",{className:"row",children:[U("div",{children:[U("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",E("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),E("form",{children:U("div",{role:"group",children:[E("input",{id:"email",type:"email",placeholder:"Email"}),E("input",{type:"submit",value:"Subscribe"})]})})]}),E("div",{children:E(o,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),U("section",{className:"row",children:[U("div",{children:[E("p",{children:"This can be used to great effect for search inputs."}),E("form",{children:U("div",{role:"group",children:[E("button",{disabled:!0,children:U("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[E("path",{d:"m21 21-4.34-4.34"}),E("circle",{cx:"11",cy:"11",r:"8"})]})}),E("input",{type:"search",id:"search",placeholder:"Search"}),E("input",{type:"submit",value:"Search"})]})})]}),E("div",{children:E(o,{lang:"xml",children:`<form>
  <div role="group">
    <button disabled>
      <svg ...></svg>
    </button>
    <input 
      id="search" 
      type="search" 
      placeholder="Search"/>
    <input 
      type="submit" 
      value="Search"/>
  </div>
</form>`})})]}),U("section",{className:"row",children:[U("div",{children:[U("p",{children:["You can still wrap form elements inside a ",E("code",{children:"fieldset"})," with an appropriate ",E("code",{children:"legend"})," tag."]}),E("form",{children:U("fieldset",{children:[E("legend",{children:"Selection"}),U("div",{role:"group",children:[U("select",{id:"delivery",defaultValue:"fast",children:[E("option",{value:"fast",children:"Fast"}),E("option",{value:"standard",children:"Standard"})]}),E("input",{type:"date",id:"delivery-date"}),E("input",{type:"submit",value:"Confirm"})]})]})})]}),E("div",{children:E(o,{lang:"xml",children:`<form>
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
</form>`})})]}),U("section",{className:"row",children:[U("div",{children:[E("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),E("form",{children:U("div",{role:"group",children:[U("label",{htmlFor:"ch_1",children:[E("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),E("span",{children:"Check #1"})]}),U("label",{htmlFor:"ch_2",children:[E("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),E("span",{children:"Check #2"})]}),U("label",{htmlFor:"ch_3",children:[E("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),E("span",{children:"Check #3"})]})]})})]}),E("div",{children:E(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}r(Pe,"FormsGrouped");import{useState as zt}from"https://esm.sh/react@19.2.6";import{jsx as v,jsxs as F}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ye({theme:e}){let t=B(),[a,q]=zt(50);return F(m,{theme:e,children:[F("section",{className:"row",children:[F("div",{children:[F("p",{children:["All ",v("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),F("form",{children:[F("label",{htmlFor:"email",children:[v("span",{children:"Email"}),v("input",{type:"email",placeholder:"Email Address",id:"email"})]}),F("label",{htmlFor:"password",children:[v("span",{children:"Password"}),v("input",{type:"password",id:"password",placeholder:"Password"})]}),v("input",{type:"submit",value:"Login"}),F("p",{children:["Don't have an account? ",v("a",{href:"",children:"Sign up"}),"."]})]})]}),v("div",{children:v(o,{lang:"xml",children:`<form>
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
</form>`})})]})})]})}r(Ye,"FormsNormal");import{useState as ut}from"https://esm.sh/react@19.2.6";import{jsx as D,jsxs as te}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ve({theme:e}){let[t,a]=ut("a"),[q,h]=ut(""),[g,le]=ut("");return te(m,{theme:e,children:[te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Helper styles for form validation come out of the box for any ",D("code",{children:"input"})," and ",D("code",{children:"textarea"})," elements marked as ",D("b",{children:"required"}),"."]}),D("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),D("p",{children:"Empty inputs do not display error styles."}),te("p",{children:["Adjacent text elements with the ",D("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),D("form",{action:"",method:"post",children:te("fieldset",{children:[D("legend",{children:"Input"}),te("label",{htmlFor:"name",children:[D("span",{children:"Name"}),D("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:t,onChange:de=>a(de.target.value)}),D("span",{className:"error",children:D("small",{children:"Enter a name between 4 and 100 characters"})})]}),te("label",{htmlFor:"email",children:[D("span",{children:"Email"}),D("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:q,onChange:de=>h(de.target.value)})]}),te("label",{htmlFor:"comment",children:[D("span",{children:"Comment"}),D("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:g,onChange:de=>le(de.target.value)}),D("span",{className:"error",children:D("small",{children:"Enter a meaningful comment"})})]}),D("input",{type:"submit",value:"Submit"})]})})]}),D("div",{children:D(o,{lang:"xml",children:`<form action="/" method="post">
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
</form>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Inputs that present a more limited range of options to a user, such as ",D("code",{children:"select"}),", ",D("code",{children:"radio"})," and ",D("code",{children:"check"})," buttons, won't display a error styles but can be set as required."]}),D("form",{children:te("fieldset",{children:[D("legend",{children:"Countries"}),te("select",{id:"country",name:"country",required:!0,children:[D("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please select a country"}),D("option",{value:"uk",children:"United Kingdom"}),D("option",{value:"fr",children:"France"}),D("option",{value:"de",children:"Germany"})]}),te("label",{children:[D("input",{type:"checkbox",name:"terms",required:!0}),"I accept the terms and conditions"]}),D("input",{type:"submit",value:"Submit"})]})})]}),D("div",{children:D(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}r(Ve,"FormsValidation");import{useRef as Gt}from"https://esm.sh/react@19.2.6";import{jsx as oe,jsxs as _e}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ue({theme:e}){let t=Gt(null);return oe(m,{theme:e,children:_e("section",{className:"row",children:[_e("div",{children:[oe("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),oe("p",{children:"Click the button below to open the modal dialog."}),oe("p",{children:oe("button",{onClick:r(()=>t.current?.showModal(),"openDialog"),children:"Open modal"})}),oe(Pt,{ref:t})]}),oe("div",{children:oe(o,{lang:"xml",children:`<button id="openBtn">Open modal</button>

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
`})})]})})}r(Ue,"Modal");function Pt(e){return _e("dialog",{ref:e.ref,children:[oe("h2",{children:"Dialog"}),oe("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),oe("form",{method:"dialog",children:oe("div",{role:"group",children:_e("div",{className:"row",children:[oe("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),oe("div",{}),oe("button",{value:"confirm",children:"Confirm"})]})})})]})}r(Pt,"DialogModal");import{jsx as i,jsxs as x}from"https://esm.sh/react@19.2.6/jsx-runtime";function je({theme:e}){let t=B();return x(m,{theme:e,children:[x("section",{className:"row",children:[x("div",{children:[x("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",i("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:i("a",{href:"",children:"Item 1"})}),i("li",{children:i("a",{href:"",children:"Item 2"})}),i("li",{children:i("a",{href:"",children:"Item 3"})})]})}),i("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),x("li",{children:[x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("path",{d:"m10 8 4 4-4 4"})]}),i("span",{children:"More"})]}),x("ul",{children:[i("li",{children:i("a",{href:"",children:"Option 1"})}),i("li",{children:i("a",{href:"",children:"Option 2"})})]})]})]})}),x("p",{children:["Navigtion items may use the ",i("code",{children:"aria-selected"})," attribute to denote they are selected."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{"aria-selected":!0,children:i("a",{href:"",children:"Selected"})}),i("li",{children:i("a",{href:"",children:"Unselected"})})]})})]}),i("div",{children:i(o,{lang:"xml",children:`<header>
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
</header>`})})]}),x("section",{className:"row",children:[x("div",{children:[x("p",{children:["You can use other elements such as ",i("code",{children:"select"}),", ",i("code",{children:"input"}),", ",i("code",{children:"img"}),", etc to add more functionality to the navigation bar."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:x("select",{id:"selector",defaultValue:"opt-1",style:{minWidth:"100px"},children:[i("option",{value:"opt-1",children:"Val 1"}),i("option",{value:"opt-2",children:"Val 2"}),i("option",{value:"opt-3",children:"Val 3"})]})}),i("li",{children:i("input",{type:"search",placeholder:"Search ...",id:"search"})})]})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<li>
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
</li>`})})]}),x("section",{className:"row",children:[x("div",{children:[x("p",{children:["Navigation can be split into a left and a right section by placing an empty ",i("code",{children:"div"})," element to act as gap."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:i("a",{href:"",children:"Home"})}),i("li",{children:i("a",{href:"",children:"Menu"})}),i("div",{}),i("li",{children:i("a",{href:"",children:i("button",{children:"Download"})})}),i("li",{children:i("a",{href:"",children:i("button",{type:"reset",children:x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),i("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`})})]}),x("section",{className:"row",children:[x("div",{children:[x("p",{children:["Navigation can be placed inside an ",i("code",{children:"article"})," to create a more striking display."]}),i("article",{children:i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),i("li",{children:i("input",{type:"search",placeholder:"Search..."})}),i("div",{}),i("li",{children:i("a",{href:"",children:i("button",{type:"reset",children:x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),i("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`})})]}),x("section",{className:"row",children:[x("div",{children:[i("p",{children:"Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout."}),x("figure",{children:[i("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-nav",e,t)}),i("figcaption",{children:"Showcase of navigation on a smaller device"})]})]}),i("div",{children:i(o,{lang:"xml",children:`<header>
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
</header>`})})]})]})}r(je,"Navigation");import{useState as Yt}from"https://esm.sh/react@19.2.6";import{Fragment as bt,jsx as $,jsxs as ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function ht(){return ee(bt,{children:[$("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),$("p",{children:$("button",{children:"Discover"})})]})}r(ht,"Tab1");function vt(){return ee(bt,{children:[$("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),$("div",{children:$("blockquote",{children:"lorem ipsum install"})})]})}r(vt,"Tab2");function gt(){return $(bt,{children:$("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}r(gt,"Tab3");function Ke({theme:e}){let t=B(),[a,q]=Yt("tab-1");return ee(m,{theme:e,children:[ee("section",{className:"row",children:[ee("div",{children:[ee("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",$("code",{children:"<menu>"})," element ",$("b",{children:"outside"})," of a ",$("code",{children:"nav"})," element."]}),$("div",{className:"disable-mobile",children:ee("menu",{children:[$("li",{"aria-selected":a==="tab-1",children:ee("a",{onClick:()=>q("tab-1"),children:[ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),$("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),$("span",{children:"Home"})]})}),$("li",{"aria-selected":a==="tab-2",children:ee("a",{onClick:()=>q("tab-2"),children:[$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:$("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),$("span",{children:"Install"})]})}),$("li",{"aria-selected":a==="tab-3",children:ee("a",{onClick:()=>q("tab-3"),children:[ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("circle",{cx:"12",cy:"12",r:"10"}),$("path",{d:"M17 12h.01"}),$("path",{d:"M12 12h.01"}),$("path",{d:"M7 12h.01"})]}),$("span",{children:"More"})]})})]})}),ee("div",{children:[a==="tab-1"?$(ht,{}):null,a==="tab-2"?$(vt,{}):null,a==="tab-3"?$(gt,{}):null]})]}),$("div",{children:$(o,{lang:"xml",children:`<main>
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
</main>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[$("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),ee("figure",{children:[$("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-tabs-nav",e,t)}),$("figcaption",{children:"Showcase of tabbed navigation in a smaller container or device."})]})]}),$("div",{children:$(o,{lang:"xml",children:`<div class="row">
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
</div>`})})]})]})}r(Ke,"Tabs");import{jsx as O,jsxs as se}from"https://esm.sh/react@19.2.6/jsx-runtime";function Qe({theme:e}){let t=B();return se(m,{theme:e,children:[se("section",{className:"row",children:[se("div",{children:[O("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),O("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),O("nav",{children:se("menu",{className:"disable-mobile",children:[O("li",{"aria-selected":!0,children:se("a",{href:"",children:[se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),O("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),O("span",{children:"Home"})]})}),O("li",{children:se("a",{href:"",children:[se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O("path",{d:"M4 11a9 9 0 0 1 9 9"}),O("path",{d:"M4 4a16 16 0 0 1 16 16"}),O("circle",{cx:"5",cy:"19",r:"1"})]}),O("span",{children:"Latest"})]})}),O("li",{children:se("a",{href:"",children:[se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),O("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),O("circle",{cx:"10",cy:"7",r:"4"})]}),O("span",{children:"Profile"})]})})]})})]}),O("div",{children:O(o,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),se("section",{className:"row",children:[se("div",{children:[se("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",O("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),se("figure",{children:[O("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-menu",e,t)}),O("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),O("div",{children:O(o,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}r(Qe,"Menu");import{jsx as H,jsxs as me}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ze({theme:e}){return H(m,{theme:e,children:me("section",{className:"row",children:[me("div",{children:[H("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),me("p",{children:["By default you can add a ",H("b",{children:"meta"})," tag with the ",H("code",{children:"color-scheme"})," name and ",H("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),H("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),me("table",{children:[H("thead",{children:me("tr",{children:[H("th",{children:"Theme"}),H("th",{children:"Light"}),H("th",{children:"Dark"})]})}),me("tbody",{children:[me("tr",{children:[H("td",{children:"Default"}),H("td",{children:"\u2705"}),H("td",{children:"\u2705"})]}),me("tr",{children:[H("td",{children:"Blog"}),H("td",{children:"\u2705"}),H("td",{children:"\u2705"})]}),me("tr",{children:[H("td",{children:"App"}),H("td",{children:"\u2705"}),H("td",{children:"\u2705"})]}),me("tr",{children:[H("td",{children:"Delivery"}),H("td",{children:"\u2705"}),H("td",{children:"\u274C"})]}),me("tr",{children:[H("td",{children:"Landing"}),H("td",{children:"\u2705"}),H("td",{children:"\u274C"})]}),me("tr",{children:[H("td",{children:"Newsletter"}),H("td",{children:"\u2705"}),H("td",{children:"\u274C"})]})]})]})]}),H("div",{children:H(o,{lang:"xml",children:`<html>
  <head>
    <!-- both variants -->
    <meta name="color-scheme" content="light dark"/>
    
    <!-- only dark variant -->
    <meta name="color-scheme" content="dark"/>
  </head>
</html>`})})]})})}r(Ze,"DarkMode");import{jsx as re,jsxs as we}from"https://esm.sh/react@19.2.6/jsx-runtime";function Je({theme:e}){return we(m,{theme:e,children:[we("section",{className:"row",children:[we("div",{children:[re("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),re("p",{children:"When inside buttons the width & height is aligned to match the font size."}),re("p",{children:we("button",{children:[we("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),re("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),re("span",{children:"Home"})]})})]}),re("div",{children:re(o,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),we("section",{className:"row",children:[we("div",{children:[re("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),we("div",{role:"group",children:[we("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),re("circle",{cx:"12",cy:"10",r:"3"})]}),re("b",{children:"Test Address, SE11 8CL"})]})]}),re("div",{children:re(o,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}r(Je,"Icons");import{jsx as A,jsxs as P}from"https://esm.sh/react@19.2.6/jsx-runtime";function Xe({theme:e}){let t=B();return P(m,{theme:e,children:[P("section",{className:"row",children:[P("div",{children:[A("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),P("p",{children:["The threshold between wide and narrow happens at ",A("b",{children:"600px"}),"."]}),A("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),P("figure",{children:[A("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-typography",e,t)}),P("figcaption",{children:["More information ",A("a",{href:s.doc("typography",e,t),children:"here"})]})]})]}),A("div",{children:A(o,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),P("section",{className:"row",children:[P("div",{children:[A("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),P("figure",{children:[A("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-nav",e,t)}),P("figcaption",{children:["More information ",A("a",{href:s.doc("navigation",e,t),children:"here"})," or ",A("a",{href:s.doc("tabs",e,t),children:"here"}),"."]})]})]}),A("div",{children:A(o,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a href="...">...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),P("section",{className:"row",children:[P("div",{children:[A("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),P("figure",{children:[A("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-menu",e,t)}),P("figcaption",{children:["More information ",A("a",{href:s.doc("menu",e,t),children:"here"}),"."]})]})]}),A("div",{children:A(o,{lang:"xml",children:`<header>
  <menu>
    <li><a href="...">...</a></li>
    ....
  </menu>
</header>`})})]}),P("section",{className:"row",children:[P("div",{children:[P("p",{children:["Finally, elements that have the ",A("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),P("figure",{children:[A("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-columns",e,t)}),P("figcaption",{children:["More information ",A("a",{href:s.doc("grid",e,t),children:"here"}),"."]})]})]}),A("div",{children:A(o,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),P("section",{className:"row",children:[P("div",{children:[P("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",A("code",{children:"disable-mobile"})," class."]}),P("p",{children:["You can also instruct elements to be hidden on mobile, via the ",A("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",A("code",{children:"hiden-on-desktop"})," class."]})]}),A("div",{})]})]})}r(Xe,"Mobile");import{jsx as c,jsxs as M}from"https://esm.sh/react@19.2.6/jsx-runtime";function et({theme:e}){let t=B();return M(m,{theme:e,children:[M("section",{className:"row",children:[M("div",{children:[M("p",{children:["By wrapping together a number of HTML elements inside an ",c("code",{children:"article"}),", you can create a basic card-type layout."]}),M("div",{className:"row disable-mobile",children:[c("div",{children:M("article",{children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:M("article",{className:"success",children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <span>
    <b>Title</b>
  </span>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),M("section",{className:"row",children:[M("div",{children:[M("p",{children:["Cards can wrap headings and paragraphs and can be styled with ",c("code",{children:"success"})," and ",c("code",{children:"error"})," classes."]}),M("div",{className:"row disable-mobile",children:[c("div",{children:M("article",{children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:M("article",{className:"error",children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),c("p",{children:M("small",{children:["You can learn more about classes ",c("a",{href:s.doc("classes",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <h3>Title</h3>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),M("section",{className:"row",children:[M("div",{children:[M("p",{children:["The ",c("code",{children:"header"})," element of a card will be styled so it's more proeminent."]}),M("div",{className:"row disable-mobile",children:[c("div",{children:M("article",{children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:M("article",{className:"success",children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <header>Title</header>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),M("section",{className:"row",children:[M("div",{children:[c("p",{children:"Likewise, the first image tag used in a card will be styled as a header image."}),M("div",{className:"row disable-mobile",children:[c("div",{children:M("article",{children:[c("img",{height:"80",src:"https://picsum.photos/id/16/320/80",alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:M("article",{className:"error",children:[c("img",{height:"80",src:"https://picsum.photos/id/16/420/80",alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),M("section",{className:"row",children:[M("div",{children:[c("p",{children:"You can combine elements inside a card to produce quite compelx results, as the example below shows."}),c("p",{children:"By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML."}),M("article",{children:[c("img",{height:"160",src:"https://picsum.photos/id/16/480/160",alt:"header image"}),c("h4",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),c("p",{children:c("button",{children:"Button"})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
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
</article>`})})]}),M("section",{className:"row",children:[M("div",{children:[c("p",{children:"If we combine groups, columns and cards, we can experiment with even more daring layouts all while using just semantic HTML and minimal classes."}),M("article",{children:[c("div",{role:"group",children:M("div",{className:"row",children:[c("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"header image"}),M("div",{children:[c("b",{children:"Title"}),c("br",{}),c("span",{children:"Subtitle"})]})]})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),M("p",{children:[c("mark",{children:"v12.5.3"}),c("mark",{className:"success",children:"success"})]}),c("hr",{}),c("p",{children:c("button",{children:"Button"})})]}),c("p",{children:M("small",{children:["You can learn more about groups ",c("a",{href:s.doc("groups",e,t),children:"here"}),"."]})}),c("p",{children:M("small",{children:["You can learn more about columns ",c("a",{href:s.doc("grid",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
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
</article>`})})]})]})}r(et,"Cards");import{jsx as u,jsxs as z}from"https://esm.sh/react@19.2.6/jsx-runtime";function tt({theme:e}){return u(m,{theme:e,children:u("section",{children:z("div",{children:[z("p",{children:[Ct," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),z("table",{children:[u("thead",{children:z("tr",{children:[u("th",{children:"Domain"}),u("th",{children:"Class"}),u("th",{children:"Effect"})]})}),z("tbody",{children:[z("tr",{children:[u("td",{rowSpan:4,children:"Containers"}),u("td",{children:u("code",{children:"container-medium"})}),u("td",{children:"Sets the maximum size of the container to 800px."})]}),z("tr",{children:[u("td",{children:u("code",{children:"container-narrow"})}),u("td",{children:"Sets the maximum size of the container to 1200px."})]}),z("tr",{children:[u("td",{children:u("code",{children:"container-wide"})}),u("td",{children:"Sets the maximum size of the container to 1600px."})]}),z("tr",{children:[u("td",{children:u("code",{children:"container-full"})}),u("td",{children:"Sets the  maximum size of the container to 100% (width of the screen)."})]}),z("tr",{children:[u("td",{rowSpan:3,children:"Layout"}),u("td",{children:u("code",{children:"row"})}),u("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),z("tr",{children:[u("td",{children:u("code",{children:"col"})}),u("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),z("tr",{children:[u("td",{children:u("code",{children:"col-N"})}),z("td",{children:["Horizontal space is divided in 12 equal columns. From ",u("code",{children:"col-1"})," to ",u("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),z("tr",{children:[u("td",{rowSpan:4,children:"Mobile"}),u("td",{children:u("code",{children:"hide-on-mobile"})}),u("td",{children:"Hides an element if on small displays."})]}),z("tr",{children:[u("td",{children:u("code",{children:"hide-on-desktop"})}),u("td",{children:"Hides an element if on large displays."})]}),z("tr",{children:[u("td",{children:u("code",{children:"disable-mobile"})}),z("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",u("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),z("tr",{children:[u("td",{children:u("code",{children:"flex"})}),u("td",{children:"Displays content normally on wider screens but switches to a row layout on smaller devices."})]}),z("tr",{children:[u("td",{rowSpan:5,children:"Colors"}),u("td",{children:u("code",{children:"primary"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),z("tr",{children:[u("td",{children:u("code",{children:"secondary"})}),u("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),z("tr",{children:[u("td",{children:u("code",{children:"success"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),z("tr",{children:[u("td",{children:u("code",{children:"error"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),z("tr",{children:[u("td",{children:u("code",{children:"inverted"})}),u("td",{children:"Takes any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),z("tr",{children:[u("td",{rowSpan:1,children:"Alignment"}),u("td",{children:u("code",{children:"align-center"})}),u("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}r(tt,"Classes");import{jsx as b,jsxs as J}from"https://esm.sh/react@19.2.6/jsx-runtime";function ot({theme:e}){let t=B();return J(m,{theme:e,children:[J("section",{className:"row",children:[J("div",{children:[J("p",{children:["Any layout element, such as a ",b("code",{children:"div"})," or ",b("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",b("code",{children:"row"})," and ",b("code",{children:"col"})," classes."]}),J("article",{children:[J("div",{className:"row disable-mobile",children:[b("div",{className:"col",children:b("code",{style:{width:"100%"},children:"col"})}),b("div",{className:"col",children:b("code",{style:{width:"100%"},children:"col"})})]}),J("div",{className:"row disable-mobile",children:[b("div",{className:"col",children:b("code",{style:{width:"100%"},children:"col"})}),b("div",{className:"col",children:b("code",{style:{width:"100%"},children:"col"})}),b("div",{className:"col",children:b("code",{style:{width:"100%"},children:"col"})})]})]})]}),b("div",{children:b(o,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),J("section",{className:"row",children:[J("div",{children:[b("p",{children:"Like similar CSS libraries, a grid contains 12 columns."}),J("p",{children:["An element with class ",b("code",{children:"col-1"})," will span just one column, whilst an element with class ",b("code",{children:"col-4"})," will span 4 columns (or 33.333% of the available space) and an element with ",b("code",{children:"col-12"})," will span the whole width of the grid."]}),J("p",{children:["Grids can combine columns of multiple widths. The generic ",b("code",{children:"col"})," class will fill all available space."]}),b("article",{children:J("div",{className:"row disable-mobile",children:[b("div",{className:"col-2",children:b("code",{style:{width:"100%"},children:"col-2"})}),b("div",{className:"col",children:b("code",{style:{width:"100%"},children:"col"})}),b("div",{className:"col-6",children:b("code",{style:{width:"100%"},children:"col-6"})})]})})]}),b("div",{children:b(o,{lang:"xml",children:`<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`})})]}),J("section",{className:"row",children:[J("div",{children:[b("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),J("figure",{children:[b("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-columns",e,t)}),b("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),b("div",{children:b(o,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),J("section",{className:"row",children:[J("div",{children:[J("p",{children:["Finally, you can even omit the ",b("code",{children:"col"})," class entirely. A ",b("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",b("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",b("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),b("article",{children:J("div",{className:"row disable-mobile",children:[b("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"ssample image "}),b("div",{children:b("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),b("div",{children:b(o,{lang:"xml",children:`<div class="row">
  <p width="80" height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}r(ot,"Grids");import{jsx as R,jsxs as ge}from"https://esm.sh/react@19.2.6/jsx-runtime";function at({theme:e}){return R(m,{theme:e,children:ge("section",{className:"row",children:[ge("div",{children:[R("p",{children:"There are three classes that allow you to set different content widths:"}),ge("table",{children:[R("thead",{children:ge("tr",{children:[R("th",{children:"Class"}),R("th",{children:"Width"}),R("th",{children:"Info"})]})}),ge("tbody",{children:[ge("tr",{children:[R("td",{children:R("code",{children:"container-narrow"})}),R("td",{children:"800px"}),R("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),ge("tr",{children:[R("td",{children:R("code",{children:"container-medium"})}),R("td",{children:"1200px"}),R("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),ge("tr",{children:[R("td",{children:R("code",{children:"container-wide"})}),R("td",{children:"1600px"}),R("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]}),ge("tr",{children:[R("td",{children:R("code",{children:"container-full"})}),R("td",{children:"100%"}),ge("td",{children:["Sets the size of the container to 100%. When ",R("code",{children:"container-wide"})," is not enough."]})]})]})]}),R("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),R("div",{children:R(o,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}r(at,"Containers");import{jsx as I,jsxs as K}from"https://esm.sh/react@19.2.6/jsx-runtime";function it({theme:e}){return K(m,{theme:e,children:[K("section",{className:"row",children:[K("div",{children:[K("p",{children:["Some elements are visually meant to ",I("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",I("code",{children:"group"})," role."]}),K("p",{children:["In the case of a group of ",I("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),K("p",{role:"group",children:[I("button",{children:"Option 1"}),I("button",{type:"reset",children:"Option 2"})]})]}),I("div",{children:I(o,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}r(it,"Groups");import{jsx as ne,jsxs as be}from"https://esm.sh/react@19.2.6/jsx-runtime";function st({theme:e}){let t=B();return be(m,{theme:e,children:[be("section",{className:"row",children:[be("div",{children:[be("p",{children:["A ",ne("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",ne("code",{children:"nav"})," or ",ne("code",{children:"menu"}),"):"]}),ne("iframe",{scrolling:"no",width:"100%",height:275,src:s.example("layout-header-simple",e,t)})]}),ne("div",{children:ne(o,{lang:"xml",children:`<header>
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
</main>`})})]}),be("section",{className:"row",children:[be("div",{children:[be("p",{children:['You create more complex "hero" layouts by placing any element, such as a ',ne("code",{children:"div"}),", inside a header. Note that heroes are defined by the extra top and bottom padding child elements receive."]}),ne("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-header-sub",e,t)})]}),ne("div",{children:ne(o,{lang:"xml",children:`<!-- nav header -->
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
</main>`})})]}),be("section",{className:"row",children:[be("div",{children:[be("p",{children:["Finally, ",ne("code",{children:"aside"}),' is another specialised element that can be used in a header in order to create a "banner" element, either to be placed at the top of the page or mid-content.']}),ne("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-header-section",e,t)})]}),ne("div",{children:ne(o,{lang:"xml",children:`<main>
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
</main>`})})]})]})}r(st,"Header");import{jsx as Y,jsxs as ke}from"https://esm.sh/react@19.2.6/jsx-runtime";function rt({theme:e}){let t=B();return Y(m,{theme:e,children:ke("section",{className:"row",children:[ke("div",{children:[ke("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",Y("code",{children:"nav"})," element."]}),ke("p",{children:["As with unordered lists, you can denote the selected elment using the ",Y("code",{children:"aria-selected"})," attribute."]}),Y("nav",{className:"disable-mobile",children:ke("ol",{children:[Y("li",{children:Y("a",{href:"",children:"Home"})}),Y("li",{children:Y("a",{href:"",children:"Library"})}),Y("li",{"aria-selected":!0,children:Y("a",{href:"",children:"Data"})})]})}),Y("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),Y("nav",{className:"disable-mobile",children:ke("ol",{children:[Y("li",{children:ke("a",{href:"",children:[ke("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Y("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),Y("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),Y("span",{children:"Home"})]})}),Y("li",{"aria-selected":!0,children:Y("a",{href:"",children:"Folder"})})]})}),Y("p",{children:"Finally, breadcrumbs are also responsive."}),ke("figure",{children:[Y("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-breadcrumbs",e,t)}),Y("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),Y("div",{children:Y(o,{lang:"xml",children:`<nav>
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
</nav>`})})]})})}r(rt,"Breadcrumbs");import{useState as Vt}from"https://esm.sh/react@19.2.6";import{jsx as Q,jsxs as Se}from"https://esm.sh/react@19.2.6/jsx-runtime";function ft(){let[e,t]=Vt("tab-1");return Q("main",{children:Se("div",{className:"row disable-mobile",children:[Q("aside",{children:Q("div",{children:Se("menu",{children:[Q("li",{"aria-selected":e==="tab-1",children:Se("a",{onClick:()=>t("tab-1"),children:[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),Q("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),Q("span",{children:"Home"})]})}),Q("li",{"aria-selected":e==="tab-2",children:Se("a",{onClick:()=>t("tab-2"),children:[Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Q("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),Q("span",{children:"Install"})]})}),Q("li",{"aria-selected":e==="tab-3",children:Se("a",{onClick:()=>t("tab-3"),children:[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"10"}),Q("path",{d:"M17 12h.01"}),Q("path",{d:"M12 12h.01"}),Q("path",{d:"M7 12h.01"})]}),Q("span",{children:"More"})]})})]})})}),Se("div",{style:{flexGrow:1},children:[e==="tab-1"?Q(ht,{}):null,e==="tab-2"?Q(vt,{}):null,e==="tab-3"?Q(gt,{}):null]})]})})}r(ft,"MobileTabs");import{useState as _t}from"https://esm.sh/react@19.2.6";import{jsx as w,jsxs as _}from"https://esm.sh/react@19.2.6/jsx-runtime";function nt({theme:e}){let[t,a]=_t("primary");return w(m,{theme:e,children:_("section",{className:"row",children:[_("div",{children:[_("p",{children:["You can apply several color modes with the help of few classes like ",w("code",{children:"primary"}),", ",w("code",{children:"secondary"}),", ",w("code",{children:"success"})," and ",w("code",{children:"error"}),"."]}),_("p",{children:["You can combine them with the ",w("code",{children:"inverted"})," class to change the colors of various components."]}),w("form",{children:_("label",{children:[w("span",{children:w("b",{children:"Color mode"})}),_("select",{onChange:r(h=>a(h.target.value),"onColorClassChange"),children:[w("option",{value:"primary",children:"Primary"}),w("option",{value:"secondary",children:"Secondary"}),w("option",{value:"success",children:"Success"}),w("option",{value:"error",children:"Error"})]})]})}),w("hr",{}),_("section",{children:[_("hgroup",{children:[_("h1",{children:[w("span",{className:`${t}`,children:"Lorem ipsum dolor"}),w("br",{}),"sit amet"]}),_("h4",{children:["Lorem ipsum dolor sit amet,",w("br",{}),w("span",{className:`${t} inverted`,children:"sed do amet"})]})]}),_("p",{role:"group",children:[w("mark",{className:`${t}`,children:"v12.5.33"}),w("mark",{className:`${t} inverted`,children:"Passing"})]})]}),w("section",{children:w("form",{children:_("div",{role:"group",className:`${t}`,children:[w("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),w("input",{type:"submit",value:"Subscribe"})]})})}),_("section",{children:[_("div",{className:"row",children:[_("article",{className:`${t}`,children:[_("hgroup",{children:[w("h4",{children:"Hobby"}),w("p",{children:w("b",{children:"Free"})})]}),w("p",{children:"Includes"}),_("ul",{children:[w("li",{children:"No credit card"}),w("li",{children:"All platforms"})]})]}),_("article",{className:`${t} inverted`,children:[_("hgroup",{children:[w("h4",{children:"Enterprise"}),w("p",{children:w("b",{children:w("a",{href:"",children:"Contact us"})})})]}),w("p",{children:"Includes"}),_("ul",{children:[w("li",{children:"Everything in Hobby"}),w("li",{children:"24/7 support"})]})]})]}),w("blockquote",{className:`${t}`,children:_("hgroup",{children:[w("h4",{children:"More information"}),w("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),_("p",{children:["Link ",w("a",{href:"",children:"here"}),"."]})]})})]})]}),w("div",{children:w(o,{lang:"xml",children:`...
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
`})})]})})}r(nt,"Colors");import{jsx as Te,jsxs as Ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function lt({theme:e}){let t=B();return Ee(m,{theme:e,children:[Ee("section",{className:"row",children:[Ee("div",{children:[Ee("p",{children:["A ",Te("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),Te("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-footer-simple",e,t)})]}),Te("div",{children:Te(o,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer with a <a href="...">link</a>.
  </div>
</footer>`})})]}),Ee("section",{className:"row",children:[Ee("div",{children:[Te("p",{children:"More complex footers can contain information divided by columns, etc."}),Te("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-footer-complex",e,t)})]}),Te("div",{children:Te(o,{lang:"xml",children:`<footer>
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
</footer>`})})]})]})}r(lt,"Footer");import{useState as Ut}from"https://esm.sh/react@19.2.6";import{jsx as L,jsxs as j}from"https://esm.sh/react@19.2.6/jsx-runtime";function dt({theme:e}){let[t,a]=Ut(!0);return j(m,{theme:e,children:[j("section",{className:"row",children:[j("div",{children:[j("p",{children:["You can add a loading indicator to an element by adding the ",L("code",{children:"aria-busy"})," attribute, with ",j("span",{role:"group",style:{display:"inline-flex"},children:[L("mark",{onClick:()=>a(!0),className:t?"success":"",children:"true"}),L("mark",{onClick:()=>a(!1),className:t?"":"success",children:"false"})]}),"."]}),L("p",{children:"For example, it can be applied to buttons (with or without exiting icons):"}),j("p",{className:"flex",children:[L("button",{"aria-busy":t,children:j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L("path",{d:"M4 11a9 9 0 0 1 9 9"}),L("path",{d:"M4 4a16 16 0 0 1 16 16"}),L("circle",{cx:"5",cy:"19",r:"1"})]})}),L("button",{"aria-busy":t,role:"reset",children:"Button"}),j("button",{"aria-busy":t,className:"secondary",children:[j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),L("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),L("span",{children:"Home"})]}),j("button",{type:"reset","aria-busy":t,children:[L("span",{children:"Play"}),j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L("path",{d:"M21 4v16"}),L("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]})]}),L("div",{children:L(o,{lang:"xml",children:`<!-- icon button -->
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
</button>`})})]}),j("section",{className:"row",children:[j("div",{children:[L("p",{children:"It can be applied to paragraphs or other text elements:"}),L("p",{"aria-busy":t,children:"Loading..."}),L("p",{children:L("a",{href:"","aria-busy":t,children:"Click me"})})]}),L("div",{children:L(o,{lang:"xml",children:`<p${t?" aria-busy":""}>Loading...</p>
          
<a href="..."${t?" aria-busy":""}>Click me</a>`})})]}),j("section",{className:"row",children:[L("div",{}),L("div",{})]}),j("section",{className:"row",children:[j("div",{children:[L("p",{children:"Or it can be applied to block elements. In this case the whole content is hidden when loading."}),L("blockquote",{"aria-busy":t,children:j("p",{children:["Press",L("kbd",{children:"Ctrl + Q"}),"to quit"]})})]}),L("div",{children:L(o,{lang:"xml",children:`<blockquote${t?" aria-busy":""}>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>`})})]}),j("section",{className:"row",children:[j("div",{children:[L("p",{children:"And cards of different types, where the loading spinner is also horizontally centered."}),L("article",{"aria-busy":t,children:j("details",{open:!0,children:[L("summary",{children:"Note"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),j("article",{"aria-busy":t,className:"success",children:[L("span",{children:L("b",{children:"Title"})}),L("p",{children:"Lorem ipsum ..."})]})]}),L("div",{children:L(o,{lang:"xml",children:`<article${t?" aria-busy":""}>
  <details>
    <summary>...</summary>
    <p>...</p>
  </details>
</article>

<article${t?" aria-busy":""}>
  <span><b>...</b></span>
  <p>...</p>
</article>`})})]})]})}r(dt,"Loading");var s=class e{static{r(this,"RouteMaster")}static baseRoute="";static home(t,a){return`${e.getBase(a)}${t}/`}static showcase(t,a){return`${e.getBase(a)}${t}/showcases.html`}static doc(t,a,q){let h=e.getBase(q);switch(t){case"typography":return`${h}${a}/pages/docs/basics/${l(qe)}`;case"buttons":return`${h}${a}/pages/docs/basics/${l(De)}`;case"blockquotes":return`${h}${a}/pages/docs/basics/${l(Be)}`;case"code":return`${h}${a}/pages/docs/basics/${l(Fe)}`;case"figures":return`${h}${a}/pages/docs/basics/${l(He)}`;case"lists":return`${h}${a}/pages/docs/basics/${l(Oe)}`;case"links":return`${h}${a}/pages/docs/basics/${l(Ie)}`;case"summary":return`${h}${a}/pages/docs/basics/${l(Ae)}`;case"table":return`${h}${a}/pages/docs/basics/${l(We)}`;case"tags":return`${h}${a}/pages/docs/basics/${l(Re)}`;case"cards":return`${h}${a}/pages/docs/basics/${l(et)}`;case"forms-check":return`${h}${a}/pages/docs/forms/${l(ze)}`;case"forms-disabled":return`${h}${a}/pages/docs/forms/${l(Ge)}`;case"forms-grouped":return`${h}${a}/pages/docs/forms/${l(Pe)}`;case"forms-normal":return`${h}${a}/pages/docs/forms/${l(Ye)}`;case"forms-validation":return`${h}${a}/pages/docs/forms/${l(Ve)}`;case"header":return`${h}${a}/pages/docs/layout/${l(st)}`;case"footer":return`${h}${a}/pages/docs/layout/${l(lt)}`;case"groups":return`${h}${a}/pages/docs/layout/${l(it)}`;case"modal":return`${h}${a}/pages/docs/layout/${l(Ue)}`;case"navigation":return`${h}${a}/pages/docs/navigation/${l(je)}`;case"breadcrumbs":return`${h}${a}/pages/docs/navigation/${l(rt)}`;case"tabs":return`${h}${a}/pages/docs/navigation/${l(Ke)}`;case"menu":return`${h}${a}/pages/docs/navigation/${l(Qe)}`;case"dark-mode":return`${h}${a}/pages/docs/extra/${l(Ze)}`;case"icons":return`${h}${a}/pages/docs/extra/${l(Je)}`;case"loading":return`${h}${a}/pages/docs/extra/${l(dt)}`;case"mobile":return`${h}${a}/pages/docs/extra/${l(Xe)}`;case"classes":return`${h}${a}/pages/docs/custom/${l(tt)}`;case"grid":return`${h}${a}/pages/docs/custom/${l(ot)}`;case"containers":return`${h}${a}/pages/docs/custom/${l(at)}`;case"colors":return`${h}${a}/pages/docs/custom/${l(nt)}`;default:return"/"}}static getDocFromRoute(t){let q=t.split("/docs/").pop(),[h,g]=q?.split("/")??[];switch(h){case"basics":switch(g){case l(qe):return"typography";case l(De):return"buttons";case l(Be):return"blockquotes";case l(Fe):return"code";case l(He):return"figures";case l(Ie):return"links";case l(Oe):return"lists";case l(Ae):return"summary";case l(We):return"table";case l(Re):return"tags";case l(et):return"cards"}case"forms":switch(g){case l(ze):return"forms-check";case l(Ge):return"forms-disabled";case l(Pe):return"forms-grouped";case l(Ye):return"forms-normal";case l(Ve):return"forms-validation"}case"layout":switch(g){case l(st):return"header";case l(lt):return"footer";case l(it):return"groups";case l(Ue):return"modal"}case"navigation":switch(g){case l(je):return"navigation";case l(rt):return"breadcrumbs";case l(Ke):return"tabs";case l(Qe):return"menu"}case"extra":switch(g){case l(Ze):return"dark-mode";case l(Je):return"icons";case l(dt):return"loading";case l(Xe):return"mobile"}case"custom":switch(g){case l(tt):return"classes";case l(ot):return"grid";case l(at):return"containers";case l(nt):return"colors"}}}static example(t,a,q){let h=e.getBase(q);switch(t){case"desktop-menu":return`${h}${a}/pages/examples/${l($t)}`;case"layout-header-simple":return`${h}${a}/pages/examples/${l(Mt)}`;case"layout-header-sub":return`${h}${a}/pages/examples/${l(Et)}`;case"layout-header-section":return`${h}${a}/pages/examples/${l(St)}`;case"layout-footer-simple":return`${h}${a}/pages/examples/${l(Ht)}`;case"layout-footer-complex":return`${h}${a}/pages/examples/${l(It)}`;case"mobile-columns":return`${h}${a}/pages/examples/${l(Dt)}`;case"mobile-menu":return`${h}${a}/pages/examples/${l(qt)}`;case"mobile-nav":return`${h}${a}/pages/examples/${l(Bt)}`;case"mobile-breadcrumbs":return`${h}${a}/pages/examples/${l(Tt)}`;case"mobile-tabs-nav":return`${h}${a}/pages/examples/${l(ft)}`;case"mobile-typography":return`${h}${a}/pages/examples/${l(Ft)}`}}static showcases(t,a){return`${e.getBase(a)}showcase/${t}/${yt(t)}.html`}static showcaseImg(t,a,q="light"){return`${e.getBase(a)}showcase/${t}/${yt(t)}.${q}.png`}static getBase(t){return t?t===""?"/":`/${t}/`:"/"}};function l(e){return`${yt(e.name)}.html`}r(l,"htmlName");function yt(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}r(yt,"toKebabCase");import{jsx as W,jsxs as xe}from"https://esm.sh/react@19.2.6/jsx-runtime";function wt(){let e=Nt(),t=B(),a=r(q=>{let h=q.target.value;if(typeof window<"u"){let g=window.location.pathname;if(g.includes(e)){let le=g.replace(e,h);window.location.href=le}else if(g.includes($e)){let le=g.split("/"),de=le.indexOf($e)+1;le.splice(de,0,h);let Wt=le.join("/");window.location.href=Wt}else{let le=`/${h}${g}`;window.location.href=le}}},"onThemeChange");return W("nav",{children:xe("ul",{children:[W("li",{children:xe("a",{href:s.home(e,t),children:[xe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),W("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),W("span",{children:"Home"})]})}),W("li",{children:xe("a",{href:s.showcase(e,t),children:[xe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),W("circle",{cx:"12",cy:"12",r:"3"})]}),W("span",{children:"Showcase"})]})}),W("div",{}),W("li",{className:"hide-on-desktop",children:xe("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[xe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),W("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),W("span",{children:"GitHub"})]})}),W("li",{children:xe("select",{name:"theme-selector",onChange:a,children:[W("option",{value:"default",selected:e==="default",children:"Default"}),W("option",{value:"blog",selected:e==="blog",children:"Blog"}),W("option",{value:"app",selected:e==="app",children:"App"}),W("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),W("option",{value:"landing",selected:e==="landing",children:"Landing"}),W("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),W("li",{className:"hide-on-mobile",children:W("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:W("button",{type:"reset",children:xe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),W("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}r(wt,"TopNav");import{jsx as kt,jsxs as jt}from"https://esm.sh/react@19.2.6/jsx-runtime";function xt({theme:e,children:t}){return jt(Lt,{value:e,children:[kt("header",{children:kt(wt,{})}),kt("main",{children:t})]})}r(xt,"HomeLayout");import{jsx as n,jsxs as pe}from"https://esm.sh/react@19.2.6/jsx-runtime";function m({theme:e,children:t}){let a=B(),[q,h]=At(!1),[g,le]=At(void 0);return Kt(()=>{if(typeof window<"u"){let de=s.getDocFromRoute(window.location.pathname);le(de)}},[]),n(xt,{theme:e,children:pe("div",{className:"row",children:[pe("aside",{children:[pe("div",{className:"hide-on-desktop",role:"group",children:[pe("div",{className:"row",children:[n("div",{children:n("button",{onClick:()=>h(!q),children:q?pe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M18 6 6 18"}),n("path",{d:"m6 6 12 12"})]}):pe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n("path",{d:"M7 8h10"}),n("path",{d:"M7 12h10"}),n("path",{d:"M7 16h10"})]})})}),n("span",{children:n("b",{children:"Chapters"})})]}),n("hr",{})]}),pe("div",{className:q===!1||q===void 0?"hide-on-mobile":"",children:[pe("menu",{children:[n("b",{children:"Basics"}),n("li",{"aria-selected":g==="typography",children:n("a",{href:s.doc("typography",e,a),children:"Typography"})}),n("li",{"aria-selected":g==="buttons",children:n("a",{href:s.doc("buttons",e,a),children:"Buttons"})}),n("li",{"aria-selected":g==="tags",children:n("a",{href:s.doc("tags",e,a),children:"Tags"})}),n("li",{"aria-selected":g==="lists",children:n("a",{href:s.doc("lists",e,a),children:"Lists"})}),n("li",{"aria-selected":g==="links",children:n("a",{href:s.doc("links",e,a),children:"Links"})}),n("li",{"aria-selected":g==="blockquotes",children:n("a",{href:s.doc("blockquotes",e,a),children:"Blokquotes"})}),n("li",{"aria-selected":g==="summary",children:n("a",{href:s.doc("summary",e,a),children:"Summary"})}),n("li",{"aria-selected":g==="code",children:n("a",{href:s.doc("code",e,a),children:"Code"})}),n("li",{"aria-selected":g==="table",children:n("a",{href:s.doc("table",e,a),children:"Table"})}),n("li",{"aria-selected":g==="figures",children:n("a",{href:s.doc("figures",e,a),children:"Figures"})}),n("li",{"aria-selected":g==="cards",children:n("a",{href:s.doc("cards",e,a),children:"Cards"})})]}),pe("menu",{children:[n("b",{children:"Forms"}),n("li",{"aria-selected":g==="forms-normal",children:n("a",{href:s.doc("forms-normal",e,a),children:"Normal"})}),n("li",{"aria-selected":g==="forms-check",children:n("a",{href:s.doc("forms-check",e,a),children:"Checks & Radios"})}),n("li",{"aria-selected":g==="forms-grouped",children:n("a",{href:s.doc("forms-grouped",e,a),children:"Grouped"})}),n("li",{"aria-selected":g==="forms-disabled",children:n("a",{href:s.doc("forms-disabled",e,a),children:"Disabled"})}),n("li",{"aria-selected":g==="forms-validation",children:n("a",{href:s.doc("forms-validation",e,a),children:"Validation"})})]}),pe("menu",{children:[n("b",{children:"Layout"}),n("li",{"aria-selected":g==="header",children:n("a",{href:s.doc("header",e,a),children:"Headers"})}),n("li",{"aria-selected":g==="footer",children:n("a",{href:s.doc("footer",e,a),children:"Footers"})}),n("li",{"aria-selected":g==="groups",children:n("a",{href:s.doc("groups",e,a),children:"Groups"})}),n("li",{"aria-selected":g==="modal",children:n("a",{href:s.doc("modal",e,a),children:"Modal"})})]}),pe("menu",{children:[n("b",{children:"Navigation"}),n("li",{"aria-selected":g==="navigation",children:n("a",{href:s.doc("navigation",e,a),children:"Basic"})}),n("li",{"aria-selected":g==="breadcrumbs",children:n("a",{href:s.doc("breadcrumbs",e,a),children:"Breadcrumbs"})}),n("li",{"aria-selected":g==="menu",children:n("a",{href:s.doc("menu",e,a),children:"Menu"})}),n("li",{"aria-selected":g==="tabs",children:n("a",{href:s.doc("tabs",e,a),children:"Tabs"})})]}),pe("menu",{children:[n("b",{children:"Extra"}),n("li",{"aria-selected":g==="dark-mode",children:n("a",{href:s.doc("dark-mode",e,a),children:"Dark Mode"})}),n("li",{"aria-selected":g==="icons",children:n("a",{href:s.doc("icons",e,a),children:"Icons"})}),n("li",{"aria-selected":g==="loading",children:n("a",{href:s.doc("loading",e,a),children:"Loading"})}),n("li",{"aria-selected":g==="mobile",children:n("a",{href:s.doc("mobile",e,a),children:"Mobile"})})]}),pe("menu",{children:[n("b",{children:"Custom"}),n("li",{"aria-selected":g==="grid",children:n("a",{href:s.doc("grid",e,a),children:"Grids"})}),n("li",{"aria-selected":g==="containers",children:n("a",{href:s.doc("containers",e,a),children:"Containers"})}),n("li",{"aria-selected":g==="colors",children:n("a",{href:s.doc("colors",e,a),children:"Colors"})}),n("li",{"aria-selected":g==="classes",children:n("a",{href:s.doc("classes",e,a),children:"Classes"})})]})]})]}),n("div",{children:t})]})})}r(m,"DocLayout");export{B as a,m as b,De as c,qe as d,Be as e,Fe as f,He as g,Ie as h,Ae as i,We as j,Re as k,Oe as l,ze as m,Ge as n,Pe as o,Ye as p,Ve as q,Ue as r,je as s,Ke as t,Qe as u,Ze as v,Je as w,Xe as x,et as y,tt as z,ot as A,at as B,it as C,st as D,rt as E,ft as F,nt as G,lt as H,dt as I,s as J,wt as K,xt as L};
