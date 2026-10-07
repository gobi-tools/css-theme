import{a as qt}from"./chunk-JVC2YUTX.js";import{a as Bt}from"./chunk-VF54OWRX.js";import{a as Ht}from"./chunk-YABYCP3C.js";import{a as Ft}from"./chunk-S2K5HKMX.js";import{a as Mt}from"./chunk-KO77FJTQ.js";import{a as $t}from"./chunk-KI47NOOC.js";import{a as Nt}from"./chunk-JESKLRVE.js";import{a as St}from"./chunk-UQHYQE3J.js";import{a as Et}from"./chunk-LBW6DUAQ.js";import{a as Dt}from"./chunk-EZPYW6B2.js";import{b as xt,c as Ct,d as Lt,e as o}from"./chunk-XTJFF2W5.js";import{a as $e}from"./chunk-7AZBNJU6.js";import{a as Tt}from"./chunk-PVS23Q4F.js";import{a as r}from"./chunk-3SPXEKH7.js";import{useEffect as Kt,useState as It}from"https://esm.sh/react@19.2.6";import{useState as Rt,useEffect as Wt}from"https://esm.sh/react@19.2.6";function q(){let[e,t]=Rt(void 0);return Wt(()=>{if(typeof window<"u"){let D=window.location.pathname.includes($e)?$e:"";t(D)}},[]),e}r(q,"useRoute");import{jsx as c,jsxs as L}from"https://esm.sh/react@19.2.6/jsx-runtime";function De({theme:e}){let t=q();return L(p,{theme:e,children:[L("section",{className:"row",children:[L("div",{children:[L("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",c("code",{children:"reset"})," type buttons)."]}),L("p",{children:[c("button",{children:"Button"}),c("button",{type:"reset",children:"Button"})]})]}),c("div",{children:c(o,{lang:"xml",children:`<button>Button</button>
<button type="reset">
  Button
</button>`})})]}),L("section",{className:"row",children:[L("div",{children:[L("p",{children:["Both types can be marked as ",c("code",{children:"disabled"}),", meaning no interaction will be possible with them."]}),L("p",{children:[c("button",{disabled:!0,children:"Disabled"}),c("button",{type:"reset",disabled:!0,children:"Disabled"})]})]}),c("div",{children:c(o,{lang:"xml",children:`<button disabled>
  Button
</button>
<button 
  type="reset" 
  disabled>
  Button
</button>`})})]}),L("section",{className:"row",children:[L("div",{children:[c("p",{children:"Buttons can be improved by adding svg icons, either to the left or to the right of the main button title."}),L("p",{children:[L("button",{children:[L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),c("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),c("span",{children:"Home"})]}),L("button",{type:"reset",children:[c("span",{children:"Play"}),L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M21 4v16"}),c("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]}),c("p",{children:L("small",{children:["You can learn more about icons ",c("a",{href:s.doc("icons",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),L("section",{className:"row",children:[L("div",{children:[c("p",{children:"You can even create icon-only buttons by completely omitting the title."}),L("p",{children:[c("button",{children:L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M4 11a9 9 0 0 1 9 9"}),c("path",{d:"M4 4a16 16 0 0 1 16 16"}),c("circle",{cx:"5",cy:"19",r:"1"})]})}),c("button",{type:"reset",children:L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),c("circle",{cx:"12",cy:"12",r:"4"})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`})})]}),L("section",{className:"row",children:[L("div",{children:[L("p",{children:["By default, buttons are styled using the ",c("b",{children:"primary"})," color, which impacts their background, border or text color. You can change that by applying classes like ",c("code",{children:"secondary"}),", ",c("code",{children:"success"})," or ",c("code",{children:"error"}),"."]}),L("p",{className:"flex",children:[c("button",{className:"secondary",children:"Action"}),c("button",{className:"success",children:"Confirm"}),L("button",{type:"reset",className:"error",children:[L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M18 6 6 18"}),c("path",{d:"m6 6 12 12"})]}),c("span",{children:"Cancel"})]})]}),c("p",{children:L("small",{children:["You can learn more about colors ",c("a",{href:s.doc("colors",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`<button
  class="secondary">
  Action
</button>

<button 
  class="success">
  Confirm
</button>

<button 
  type="reset" 
  class="error">
  <svg ...></svg>
  <span>Cancel</span>
</button>`})})]}),L("section",{className:"row",children:[L("div",{children:[L("p",{children:["Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",c("code",{children:"group"})," role."]}),L("p",{role:"group",children:[c("button",{children:"Button 1"}),c("button",{type:"reset",children:"Button 2"}),c("button",{type:"reset",children:"Button 3"})]}),L("p",{role:"group",children:[c("button",{type:"reset",children:c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}),c("button",{type:"reset",children:L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M7 10v12"}),c("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}),c("button",{children:L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M12 2v13"}),c("path",{d:"m16 6-4-4-4 4"}),c("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})]})})]}),L("p",{role:"group",children:[c("button",{type:"reset",children:"Prev"}),c("button",{type:"reset",children:"1"}),c("button",{type:"reset",children:"2"}),c("button",{type:"reset",children:"3"}),c("button",{type:"reset",children:"Next"})]}),c("p",{children:L("small",{children:["You can learn more about groups ",c("a",{href:s.doc("groups",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`<p role="group">
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
    <
  </button>
  <button type="reset">
    <svg ...></svg>
  </button>
  <button>
    >
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
</p>`})})]})]})}r(De,"Buttons");import{jsx as b,jsxs as ae}from"https://esm.sh/react@19.2.6/jsx-runtime";function qe({theme:e}){return ae(p,{theme:e,children:[ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["Typography is based purely on ",b("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),b("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),b("div",{children:b(o,{lang:"xml",children:`<p>
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
</p>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["To all sorts of text modifiers, like ",b("code",{children:"b"}),", ",b("code",{children:"i"}),", ",b("code",{children:"em"})," tags and many more."]}),b("p",{children:b("i",{children:"italic"})}),b("p",{children:b("em",{children:"emphasized"})}),b("p",{children:b("dfn",{children:"definition"})}),b("p",{children:b("cite",{children:"citation"})}),b("p",{children:b("b",{children:"bold"})}),b("p",{children:b("strong",{children:"strong"})}),b("p",{children:b("del",{children:"deleted"})}),b("p",{children:b("s",{children:"corrected"})}),b("p",{children:b("u",{children:"underlined"})}),b("p",{children:b("q",{children:"quotation"})})]}),b("div",{children:b(o,{lang:"xml",children:`<i>italic</i>
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
<sup>supescript</sup>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["Finally, it supports all six ",b("code",{children:"heading"})," types."]}),b("h1",{children:"Heading 1"}),b("h2",{children:"Heading 2"}),b("h3",{children:"Heading 3"}),b("h4",{children:"Heading 4"}),b("h5",{children:"Heading 5"}),b("h6",{children:"Heading 6"})]}),b("div",{children:b(o,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["As well as the ability to group headings and associated content with ",b("code",{children:"hgroup"}),"."]}),ae("hgroup",{children:[b("h1",{children:"Heading 1"}),b("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),b("div",{children:b(o,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}r(qe,"Typography");import{jsx as w,jsxs as Q}from"https://esm.sh/react@19.2.6/jsx-runtime";function Be({theme:e}){let t=q();return Q(p,{theme:e,children:[Q("section",{className:"row",children:[Q("div",{children:[w("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),w("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),w("div",{children:w(o,{lang:"xml",children:`<blockquote>
  Lorem ipsum ...
</blockquote>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[w("p",{children:"It's not just text that can be included in a blockquote element, but code, icons, and many other elements."}),w("blockquote",{children:Q("p",{children:["Press ",w("kbd",{children:"Ctrl + Q"})," to quit"]})}),w("blockquote",{children:Q("hgroup",{children:[Q("p",{role:"group",children:[Q("svg",{xmlns:" http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w("circle",{cx:"12",cy:"12",r:"10"}),w("path",{d:"M12 16v-4"}),w("path",{d:"M12 8h.01"})]}),w("span",{children:"Information"})]}),Q("p",{children:["Your package will be delivered on ",w("b",{children:"Tuesday at 08:00."})]})]})}),w("p",{children:Q("small",{children:["You can learn more about groups ",w("a",{href:s.doc("groups",e,t),children:"here"})," and about icons ",w("a",{href:s.doc("icons",e,t),children:"here"}),"."]})})]}),w("div",{children:w(o,{lang:"xml",children:`<blockquote>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>
            
<blockquote>
  <hgroup>
    <p role="group">
      <svg ... ></svg>
      <span>Information</span>
    </p>
    <p>
      Your package will 
      be delivered on 
      <b>Tuesday at 08:00</b>.
    </p>
  </hgroup>
</blockquote>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[Q("p",{children:["Blockquotes can also be styled using the ",w("code",{children:"success"}),", ",w("code",{children:"error"}),", ",w("code",{children:"primary"})," and ",w("code",{children:"secondary"})," classes."]}),w("blockquote",{className:"success",children:Q("hgroup",{children:[w("h4",{children:"Success"}),w("p",{children:"The operation was completed successfully"})]})}),w("blockquote",{className:"error",children:Q("hgroup",{children:[w("p",{children:"Unknown error"}),w("p",{children:Q("code",{children:["Server responsed with ",w("b",{children:"Error 500"})]})})]})}),w("blockquote",{className:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),w("blockquote",{className:"secondary",children:w("hgroup",{children:Q("hgroup",{children:[w("h4",{children:"Title"}),w("p",{children:"Important Information"}),w("p",{children:w("button",{children:"Click me"})})]})})}),w("hgroup",{children:w("p",{children:Q("small",{children:["You can learn more about colors ",w("a",{href:s.doc("colors",e,t),children:"here"}),"."]})})})]}),w("div",{children:w(o,{lang:"xml",children:`<blockquote class="success">
  <hgroup>
    <h4>Success</h4>
    <p>
      The operation was 
      completed successfully
    </p>
  </hgroup>
</blockquote>

<blockquote class="error">
  <hgroup>
    <p>Unknown error</p>
    <p>
      <code>
        Server responsed with 
        <b>Error 500</b>
      </code>
    </p>
  </hgroup>
</blockquote>

<blockquote class="primary">
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit
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
</blockquote>`})})]})]})}r(Be,"Blockquotes");import{jsx as me,jsxs as Me}from"https://esm.sh/react@19.2.6/jsx-runtime";function Fe({theme:e}){return me(p,{theme:e,children:me("section",{children:Me("div",{className:"row",children:[Me("div",{children:[me("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),Me("p",{children:["Inline code ",me("code",{children:"console.log('abc')"})]}),Me("p",{children:["Keyboard shortcut ",me("kbd",{children:"Ctrl + S"})]}),Me("figure",{children:[me(o,{lang:"xml",children:"console.log('abc')"}),me("figcaption",{children:"Code block"})]}),Me("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",me("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",me("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),me("div",{children:me(o,{lang:"xml",children:`<p>
  Inline code <code>...</code>
</p>
<p>
  Keyboard shortcut 
  <kbd>...</kbd>
</p>
<pre>
  <code>....</code>
</pre>`})})]})})})}r(Fe,"Code");import{jsx as le,jsxs as be}from"https://esm.sh/react@19.2.6/jsx-runtime";function He({theme:e}){return be(p,{theme:e,children:[be("section",{className:"row",children:[be("div",{children:[le("p",{children:"Figures can contain a single image and an associated caption."}),be("figure",{children:[le("img",{width:"640",height:"480",src:"https://picsum.photos/id/16/640/480",alt:"ssample image "}),le("figcaption",{children:"Sample caption"})]})]}),le("div",{children:le(o,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),be("section",{className:"row",children:[be("div",{children:[le("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),be("figure",{children:[be("figure",{children:[le("img",{width:"200",height:"240",src:"https://picsum.photos/id/16/200/240",alt:"first image"}),le("figcaption",{children:"Caption for the first image"})]}),be("figure",{children:[le("img",{width:"240",height:"240",src:"https://picsum.photos/id/16/240/240",alt:"second image"}),le("figcaption",{children:"Caption for the second image"})]}),le("figcaption",{children:"Caption for the figure group"})]})]}),le("div",{children:le(o,{lang:"xml",children:`<figure>
  <figure>
    <img 
      width="200" 
      height="240" 
      src="..." 
      alt="first image" />
    <figcaption>
      Caption for the 
      first image
    </figcaption>
  </figure>
  
  <figure>
    <img 
      width="240" 
      height="240" 
      src="..." 
      alt="second image" />
    <figcaption>
      Caption for the 
      second image
    </figcaption>
  </figure>
  
  <figcaption>
    Caption for the 
    figure group
  </figcaption>
</figure>`})})]})]})}r(He,"Figures");import{jsx as ue,jsxs as pt}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ie({theme:e}){return ue(p,{theme:e,children:pt("section",{className:"row",children:[pt("div",{children:[ue("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),pt("ul",{children:[ue("li",{children:ue("a",{href:"",children:"website.com"})}),ue("li",{children:ue("a",{href:"",children:"email@test.com"})}),ue("li",{children:ue("a",{href:"",children:"/#location"})})]})]}),ue("div",{children:ue(o,{lang:"xml",children:`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location>
  /#location
</a>
`})})]})})}r(Ie,"Links");import{jsx as x,jsxs as O}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ae({theme:e}){let t=q();return O(p,{theme:e,children:[O("section",{className:"row",children:[O("div",{children:[x("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),O("details",{children:[x("summary",{children:"Info"}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),O("details",{children:[x("summary",{children:"More info Info"}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),x("div",{children:x(o,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),O("section",{className:"row",children:[O("div",{children:[O("p",{children:["This basic summary can be placed inside an ",x("code",{children:"article"})," and combined with the ",x("code",{children:"primary"}),", ",x("code",{children:"success"})," or ",x("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),x("article",{children:O("details",{open:!0,children:[x("summary",{children:"Note"}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),x("article",{className:"primary",children:O("details",{children:[x("summary",{children:"Info"}),O("p",{children:["Larn more ",x("a",{href:"",children:"here"})]})]})}),x("article",{className:"success",children:O("details",{children:[x("summary",{children:"Success"}),O("p",{children:["Operation finished ",x("code",{children:"OK"})]})]})}),x("article",{className:"error",children:O("details",{children:[x("summary",{children:"Error"}),O("div",{children:[x("p",{children:"Unknown error occurred"}),x("hr",{}),x("button",{children:"Acknowledge"})]})]})}),x("p",{children:O("small",{children:["You can learn more about colors ",x("a",{href:s.doc("colors",e,t),children:"here"})," and cards ",x("a",{href:s.doc("cards",e,t),children:"here"}),"."]})})]}),x("div",{children:x(o,{lang:"xml",children:`<article>
  <details>
    <summary>Note</summary>
    <p>
      Lorem ipsum dolor sit 
      amet, consectetur 
      adipiscing elit, 
      sed do eiusmod tempor 
      incididunt ut labore 
      et dolore magna aliqua.
    </p>
  </details>
</article>
          
<article class="primary">
  <details>
    <summary>Info</summary>
    <p>
      Learn more
      <a href="...">
        here
      </a>
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
</article>`})})]}),O("section",{className:"row",children:[O("div",{children:[O("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",x("code",{children:"article"}),", you can form an accordion menu:"]}),O("article",{children:[O("details",{name:"menu",children:[x("summary",{children:"Option 1"}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),O("details",{name:"menu",open:!0,children:[x("summary",{children:"Option 2"}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),O("details",{name:"menu",children:[x("summary",{children:"Option 3"}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),x("div",{children:x(o,{lang:"xml",children:`
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
</article>`})})]})]})}r(Ae,"Summary");import{jsx as N,jsxs as he}from"https://esm.sh/react@19.2.6/jsx-runtime";function Re({theme:e}){return N(p,{theme:e,children:he("section",{className:"row",children:[he("div",{children:[N("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),he("table",{children:[N("thead",{children:he("tr",{children:[N("th",{children:"Cover"}),N("th",{children:"Item"}),N("th",{children:"Value"}),N("th",{children:"Comment"})]})}),he("tbody",{children:[he("tr",{children:[N("td",{children:N("img",{width:"30",height:"50",src:"https://picsum.photos/id/16/30/50",alt:"cover 1"})}),N("td",{children:N("a",{href:"",children:"Item 1.1"})}),N("td",{children:"20.35"}),N("td",{children:"In stock"})]}),he("tr",{children:[N("td",{children:N("img",{width:"30",height:"50",src:"https://picsum.photos/id/100/30/50",alt:"cover 2"})}),N("td",{children:N("a",{href:"",children:"Item 2.1"})}),N("td",{children:"15.99"}),N("td",{children:"Out of stock"})]}),he("tr",{children:[N("td",{children:N("img",{width:"30",height:"50",src:"https://picsum.photos/id/40/30/50",alt:"cover 3"})}),N("td",{children:N("a",{href:"",children:"Item 5.1"})}),N("td",{children:"14.23"}),N("td",{children:"In stock"})]}),he("tr",{children:[N("td",{children:N("img",{width:"30",height:"50",src:"https://picsum.photos/id/25/30/50",alt:"cover 4"})}),N("td",{children:N("a",{href:"",children:"Item 22"})}),N("td",{children:"10.11"}),N("td",{children:"In stock"})]})]}),N("tfoot",{children:he("tr",{children:[N("td",{colSpan:2,children:N("b",{children:"Total"})}),N("td",{colSpan:2,children:N("b",{children:"60.68"})})]})})]})]}),N("div",{children:N(o,{lang:"xml",children:`<table>
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
</table>`})})]})})}r(Re,"Table");import{jsx as f,jsxs as R}from"https://esm.sh/react@19.2.6/jsx-runtime";function We({theme:e}){let t=q();return R(p,{theme:e,children:[R("section",{className:"row",children:[R("div",{children:[R("p",{children:["You can mark any text, keyword or piece of information with the ",f("code",{children:"mark"})," html tag."]}),f("p",{children:f("mark",{children:"v15.20.30"})})]}),f("div",{children:f(o,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),R("section",{className:"row",children:[R("div",{children:[f("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),R("p",{children:[R("mark",{children:[R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),f("path",{d:"m9 12 2 2 4-4"})]}),f("span",{children:"released"})]}),R("mark",{children:[f("span",{children:"error"}),R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),f("path",{d:"m9 12 2 2 4-4"})]})]})]}),f("p",{children:R("small",{children:["You can learn more about icons ",f("a",{href:s.doc("icons",e,t),children:"here"}),"."]})})]}),f("div",{children:f(o,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),R("section",{className:"row",children:[R("div",{children:[R("p",{children:["You  can assign the ",f("code",{children:"primary"}),", ",f("code",{children:"secondary"}),", ",f("code",{children:"success"})," or ",f("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",f("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),R("p",{className:"flex",children:[f("mark",{className:"primary",children:"#theme"}),f("mark",{className:"secondary",children:"#second"}),f("mark",{className:"success",children:"Process OK"}),f("mark",{className:"error",children:"Error 400"})]}),R("p",{className:"flex",children:[f("mark",{className:"primary inverted",children:"#theme"}),f("mark",{className:"secondary inverted",children:"#second"}),f("mark",{className:"success inverted",children:"Process OK"}),f("mark",{className:"error inverted",children:"Error 400"})]}),f("p",{children:R("small",{children:["You can learn more about colors ",f("a",{href:s.doc("colors",e,t),children:"here"}),"."]})})]}),f("div",{children:f(o,{lang:"xml",children:`<!-- with or without -->
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
</mark>`})})]}),R("section",{className:"row",children:[R("div",{children:[R("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",f("code",{children:"group"})," role, they will be grouped together."]}),R("p",{role:"group",children:[f("mark",{children:"npm"}),f("mark",{className:"success",children:"1.0.3"}),f("mark",{className:"error",children:R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[f("path",{d:"M18 6 6 18"}),f("path",{d:"m6 6 12 12"})]})})]}),f("p",{children:R("small",{children:["You can learn more about groups ",f("a",{href:s.doc("groups",e,t),children:"here"}),"."]})})]}),f("div",{children:f(o,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]})]})}r(We,"Tags");import{jsx as X,jsxs as fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Oe({theme:e}){return fe(p,{theme:e,children:[fe("section",{className:"row",children:[fe("div",{children:[X("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),X("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),fe("ul",{children:[X("li",{children:"Item 1"}),X("li",{children:"Item 2"}),fe("ol",{children:[X("li",{children:"Item 1"}),X("li",{children:"Item 2"})]})]})]}),X("div",{children:X(o,{lang:"xml",children:`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`})})]}),fe("section",{className:"row",children:[fe("div",{children:[fe("p",{children:["Definition lists are styled such that ",X("code",{children:"dd"})," elements are inlined compared to ",X("code",{children:"dt"})," elements."]}),fe("dl",{children:[X("dt",{children:"Coffee"}),X("dd",{children:"Black hot drink"}),X("dt",{children:"Milk"}),X("dd",{children:"White cold drink"})]})]}),X("div",{children:X(o,{lang:"xml",children:`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`})})]})]})}r(Oe,"Lists");import{useState as Ot}from"https://esm.sh/react@19.2.6";import{jsx as S,jsxs as J}from"https://esm.sh/react@19.2.6/jsx-runtime";function ze({theme:e}){let[t,a]=Ot("bread");return J(p,{theme:e,children:[J("section",{className:"row",children:[J("div",{children:[S("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),J("form",{children:[S("p",{children:S("b",{children:"Options"})}),J("label",{htmlFor:"egg",children:[S("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),S("span",{children:"Egg"})]}),J("label",{htmlFor:"cheese",children:[S("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),S("span",{children:"Cheese"})]}),J("label",{htmlFor:"ham",children:[S("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),S("span",{children:"Ham"})]})]}),S("p",{children:"These work well even for complex, multi-line, checkboxes"}),J("form",{children:[S("p",{children:S("b",{children:"Todos"})}),J("label",{htmlFor:"friday",children:[S("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),J("span",{children:[S("b",{children:"Friday"}),S("br",{}),S("span",{children:"- Order lunch"}),S("br",{}),S("span",{children:"- Go to work"}),S("span",{children:"- Eat lunch"})]})]}),J("label",{htmlFor:"saturday",children:[S("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),J("span",{children:[S("b",{children:"Saturday"}),S("br",{}),S("span",{children:"- Order lunch"}),S("br",{}),S("span",{children:"- Eat lunch"})]})]})]})]}),S("div",{children:S(o,{lang:"xml",children:`<form>
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
</form>`})})]}),J("section",{className:"row",children:[J("div",{children:[S("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),J("form",{children:[S("p",{children:S("b",{children:"Wrapping"})}),J("label",{htmlFor:"bread",children:[S("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:t==="bread",onChange:D=>a(D.target.value)}),S("span",{children:"Bread"})]}),J("label",{htmlFor:"salad",children:[S("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:t==="salad",onChange:D=>a(D.target.value)}),S("span",{children:"Salad"})]})]})]}),S("div",{children:S(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}r(ze,"FormsCheckbox");import{jsx as ie,jsxs as Ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ge({theme:e}){return ie(p,{theme:e,children:Ce("section",{className:"row",children:[Ce("div",{children:[Ce("p",{children:["A form can have all or part of its inputs set as ",ie("code",{children:"disabled"})," to prevent any user interaction."]}),ie("form",{children:Ce("fieldset",{children:[ie("legend",{children:"Disabled form"}),Ce("label",{htmlFor:"email",children:[ie("span",{children:"Email"}),ie("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),Ce("label",{htmlFor:"address",children:[ie("span",{children:"Address"}),ie("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),Ce("label",{htmlFor:"delivery",children:[ie("span",{children:"Delivery"}),Ce("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[ie("option",{value:"fast",children:"Fast"}),ie("option",{value:"standard",children:"Standard"})]})]}),ie("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),ie("div",{children:ie(o,{lang:"xml",children:`<form>
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
</form>`})})]})})}r(Ge,"FormsDisabled");import{jsx as M,jsxs as V}from"https://esm.sh/react@19.2.6/jsx-runtime";function Pe({theme:e}){return V(p,{theme:e,children:[V("section",{className:"row",children:[V("div",{children:[V("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",M("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),M("form",{children:V("div",{role:"group",children:[M("input",{id:"email",type:"email",placeholder:"Email"}),M("input",{type:"submit",value:"Subscribe"})]})})]}),M("div",{children:M(o,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),V("section",{className:"row",children:[V("div",{children:[M("p",{children:"This can be used to great effect for search inputs."}),M("form",{children:V("div",{role:"group",children:[M("button",{disabled:!0,children:V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"m21 21-4.34-4.34"}),M("circle",{cx:"11",cy:"11",r:"8"})]})}),M("input",{type:"search",id:"search",placeholder:"Search"}),M("input",{type:"submit",value:"Search"})]})})]}),M("div",{children:M(o,{lang:"xml",children:`<form>
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
</form>`})})]}),V("section",{className:"row",children:[V("div",{children:[V("p",{children:["You can still wrap form elements inside a ",M("code",{children:"fieldset"})," with an appropriate ",M("code",{children:"legend"})," tag."]}),M("form",{children:V("fieldset",{children:[M("legend",{children:"Selection"}),V("div",{role:"group",children:[V("select",{id:"delivery",defaultValue:"fast",children:[M("option",{value:"fast",children:"Fast"}),M("option",{value:"standard",children:"Standard"})]}),M("input",{type:"date",id:"delivery-date"}),M("input",{type:"submit",value:"Confirm"})]})]})})]}),M("div",{children:M(o,{lang:"xml",children:`<form>
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
</form>`})})]}),V("section",{className:"row",children:[V("div",{children:[M("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),M("form",{children:V("div",{role:"group",children:[V("label",{htmlFor:"ch_1",children:[M("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),M("span",{children:"Check #1"})]}),V("label",{htmlFor:"ch_2",children:[M("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),M("span",{children:"Check #2"})]}),V("label",{htmlFor:"ch_3",children:[M("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),M("span",{children:"Check #3"})]})]})})]}),M("div",{children:M(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}r(Pe,"FormsGrouped");import{useState as zt}from"https://esm.sh/react@19.2.6";import{jsx as h,jsxs as B}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ye({theme:e}){let t=q(),[a,D]=zt(50);return B(p,{theme:e,children:[B("section",{className:"row",children:[B("div",{children:[B("p",{children:["All ",h("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),B("form",{children:[B("label",{htmlFor:"email",children:[h("span",{children:"Email"}),h("input",{type:"email",placeholder:"Email Address",id:"email"})]}),B("label",{htmlFor:"password",children:[h("span",{children:"Password"}),h("input",{type:"password",id:"password",placeholder:"Password"})]}),h("input",{type:"submit",value:"Login"}),B("p",{children:["Don't have an account? ",h("a",{href:"",children:"Sign up"}),"."]})]})]}),h("div",{children:h(o,{lang:"xml",children:`<form>
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
      Don't have an account?
      <a href="...">
        Sign up
      </a>.
    </p>
  </fieldset>
</form>`})})]}),B("section",{className:"row",children:[B("div",{children:[h("p",{children:"Textareas are supported as well and by default they expand to fit the available horizontal space."}),B("form",{children:[h("textarea",{rows:4,id:"textarea",placeholder:"Write your comments..."}),h("input",{type:"submit",value:"Comment"})]})]}),h("div",{children:h(o,{lang:"xml",children:`<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>`})})]}),B("section",{className:"row",children:[B("div",{children:[h("p",{children:"Ranged inputs are also supported."}),B("form",{children:[B("label",{htmlFor:"volume",children:[h("span",{children:"Volume (range)"}),h("input",{type:"range",id:"volume",name:"volume",min:0,max:100,step:1,value:a,onChange:m=>D(Number(m.target.value))})]}),h("input",{type:"submit",value:"Tune"})]})]}),h("div",{children:h(o,{lang:"xml",children:`<form>
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
</form>`})})]}),h("section",{children:B("div",{className:"row",children:[B("div",{children:[B("p",{children:["If you want your forms to stand out more, you can wrap the inputs inside a ",h("code",{children:"fieldset"})," and assign a ",h("code",{children:"legend"}),"."]}),h("form",{children:B("fieldset",{children:[h("legend",{children:"Details"}),B("div",{className:"row disable-mobile",children:[h("div",{children:B("label",{htmlFor:"first-name",children:[h("span",{children:"First name"}),h("input",{type:"text",id:"first-name",placeholder:"First name"})]})}),h("div",{children:B("label",{htmlFor:"last-name",children:[h("span",{children:"Last name"}),h("input",{type:"text",id:"last-name",placeholder:"Last name"})]})})]}),B("div",{className:"row disable-mobile",children:[h("div",{children:B("label",{htmlFor:"delivery",children:[h("span",{children:"Delivery Time"}),B("select",{id:"delivery",defaultValue:"mornibgt",children:[h("option",{value:"morning",children:"Morning"}),h("option",{value:"evening",children:"Evening"})]})]})}),h("div",{children:B("label",{htmlFor:"delivery-date",children:[h("span",{children:"Delivery Date"}),h("input",{type:"date",id:"delivery-date"})]})})]}),B("blockquote",{className:"success",children:["Order total is ",h("b",{children:"$33.59"})]}),B("div",{className:"row disable-mobile",children:[h("div",{children:h("input",{type:"reset",className:"error",value:"Reset"})}),h("div",{}),h("div",{children:h("input",{type:"submit",value:"Confirm"})})]})]})}),h("p",{children:"You can make forms as simple or as complex as you want."}),B("p",{children:["In the example above we're separating inputs into two separate ",h("a",{href:s.doc("grid",e,t),children:"columns"}),", so we can pack more information in the same space."]}),B("p",{children:["We're also using ",h("a",{href:s.doc("blockquotes",e,t),children:"blockquotes"})," to highlight important information."]}),B("p",{children:["We're using both ",h("code",{children:"submit"})," and ",h("code",{children:"reset"})," type inputs. Please note these inputs are styled to look exactly like ",h("a",{href:s.doc("blockquotes",e,t),children:"buttons"}),"."]})]}),h("div",{children:h(o,{lang:"xml",children:`<form>
  <fieldset>
    <legend>
      Order details
    </legend>

    <!-- name row -->
    <div 
      class="row disable-mobile">
      <div>
        <label 
          for="first-name">
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
        <label 
          for="last-name">
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
      Order total is 
      <b>$33.59</b>
    </blockquote>

    <div 
      class="row disable-mobile">
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
</form>`})})]})})]})}r(Ye,"FormsNormal");import{useState as mt}from"https://esm.sh/react@19.2.6";import{jsx as E,jsxs as te}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ve({theme:e}){let[t,a]=mt("a"),[D,m]=mt(""),[v,pe]=mt("");return te(p,{theme:e,children:[te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Helper styles for form validation come out of the box for any ",E("code",{children:"input"})," and ",E("code",{children:"textarea"})," elements marked as ",E("b",{children:"required"}),"."]}),E("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),E("p",{children:"Empty inputs do not display error styles."}),te("p",{children:["Adjacent text elements with the ",E("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),E("form",{action:"",method:"post",children:te("fieldset",{children:[E("legend",{children:"Input"}),te("label",{htmlFor:"name",children:[E("span",{children:"Name"}),E("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:t,onChange:ge=>a(ge.target.value)}),E("span",{className:"error",children:E("small",{children:"Enter a name between 4 and 100 characters"})})]}),te("label",{htmlFor:"email",children:[E("span",{children:"Email"}),E("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:D,onChange:ge=>m(ge.target.value)})]}),te("label",{htmlFor:"comment",children:[E("span",{children:"Comment"}),E("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:v,onChange:ge=>pe(ge.target.value)}),E("span",{className:"error",children:E("small",{children:"Enter a meaningful comment"})})]}),E("input",{type:"submit",value:"Submit"})]})})]}),E("div",{children:E(o,{lang:"xml",children:`<form action="/" method="post">
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
</form>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Inputs that present a more limited range of options to a user, such as ",E("code",{children:"select"}),", ",E("code",{children:"radio"})," and ",E("code",{children:"check"})," buttons, won't display a error styles but can be set as required."]}),E("form",{children:te("fieldset",{children:[E("legend",{children:"Countries"}),te("select",{id:"country",name:"country",required:!0,children:[E("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please select a country"}),E("option",{value:"uk",children:"United Kingdom"}),E("option",{value:"fr",children:"France"}),E("option",{value:"de",children:"Germany"})]}),te("label",{children:[E("input",{type:"checkbox",name:"terms",required:!0}),"I accept the terms and conditions"]}),E("input",{type:"submit",value:"Submit"})]})})]}),E("div",{children:E(o,{lang:"xml",children:`<form>
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
        Please select 
        a countrynp
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
      I accept the 
      terms and conditions
    </label>

    <input 
      type="submit" 
      value="Submit"/>
  </fieldset>
</form>`})})]})]})}r(Ve,"FormsValidation");import{useRef as Gt}from"https://esm.sh/react@19.2.6";import{jsx as oe,jsxs as _e}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ue({theme:e}){let t=Gt(null);return oe(p,{theme:e,children:_e("section",{className:"row",children:[_e("div",{children:[oe("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),oe("p",{children:"Click the button below to open the modal dialog."}),oe("p",{children:oe("button",{onClick:r(()=>t.current?.showModal(),"openDialog"),children:"Open modal"})}),oe(Pt,{ref:t})]}),oe("div",{children:oe(o,{lang:"xml",children:`<button id="openBtn">Open modal</button>

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
`})})]})})}r(Ue,"Modal");function Pt(e){return _e("dialog",{ref:e.ref,children:[oe("h2",{children:"Dialog"}),oe("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),oe("form",{method:"dialog",children:oe("div",{role:"group",children:_e("div",{className:"row",children:[oe("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),oe("div",{}),oe("button",{value:"confirm",children:"Confirm"})]})})})]})}r(Pt,"DialogModal");import{jsx as i,jsxs as k}from"https://esm.sh/react@19.2.6/jsx-runtime";function je({theme:e}){let t=q();return k(p,{theme:e,children:[k("section",{className:"row",children:[k("div",{children:[k("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",i("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),i("nav",{className:"disable-mobile",children:k("ul",{children:[i("li",{children:i("a",{href:"",children:"Item 1"})}),i("li",{children:i("a",{href:"",children:"Item 2"})}),i("li",{children:i("a",{href:"",children:"Item 3"})})]})}),i("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),i("nav",{className:"disable-mobile",children:k("ul",{children:[i("li",{children:k("a",{href:"",children:[k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:k("a",{href:"",children:[k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),k("li",{children:[k("a",{href:"",children:[k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("path",{d:"m10 8 4 4-4 4"})]}),i("span",{children:"More"})]}),k("ul",{children:[i("li",{children:i("a",{href:"",children:"Option 1"})}),i("li",{children:i("a",{href:"",children:"Option 2"})})]})]})]})}),k("p",{children:["Navigtion items may use the ",i("code",{children:"aria-selected"})," attribute to denote they are selected."]}),i("nav",{className:"disable-mobile",children:k("ul",{children:[i("li",{"aria-selected":!0,children:i("a",{href:"",children:"Selected"})}),i("li",{children:i("a",{href:"",children:"Unselected"})})]})})]}),i("div",{children:i(o,{lang:"xml",children:`<header>
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
</header>`})})]}),k("section",{className:"row",children:[k("div",{children:[k("p",{children:["You can use other elements such as ",i("code",{children:"select"}),", ",i("code",{children:"input"}),", ",i("code",{children:"img"}),", etc to add more functionality to the navigation bar."]}),i("nav",{className:"disable-mobile",children:k("ul",{children:[i("li",{children:k("a",{href:"",children:[k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:k("select",{id:"selector",defaultValue:"opt-1",style:{minWidth:"100px"},children:[i("option",{value:"opt-1",children:"Val 1"}),i("option",{value:"opt-2",children:"Val 2"}),i("option",{value:"opt-3",children:"Val 3"})]})}),i("li",{children:i("input",{type:"search",placeholder:"Search ...",id:"search"})})]})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<li>
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
</li>`})})]}),k("section",{className:"row",children:[k("div",{children:[k("p",{children:["Navigation can be split into a left and a right section by placing an empty ",i("code",{children:"div"})," element to act as gap."]}),i("nav",{className:"disable-mobile",children:k("ul",{children:[i("li",{children:i("a",{href:"",children:"Home"})}),i("li",{children:i("a",{href:"",children:"Menu"})}),i("div",{}),i("li",{children:i("a",{href:"",children:i("button",{children:"Download"})})}),i("li",{children:i("a",{href:"",children:i("button",{type:"reset",children:k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),i("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`})})]}),k("section",{className:"row",children:[k("div",{children:[k("p",{children:["Navigation can be placed inside an ",i("code",{children:"article"})," to create a more striking display."]}),i("article",{children:i("nav",{className:"disable-mobile",children:k("ul",{children:[i("li",{children:k("a",{href:"",children:[k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:k("a",{href:"",children:[k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),i("li",{children:i("input",{type:"search",placeholder:"Search..."})}),i("div",{}),i("li",{children:i("a",{href:"",children:i("button",{type:"reset",children:k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),i("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}),i("br",{})]}),i("div",{children:i(o,{lang:"xml",children:`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`})})]}),k("section",{className:"row",children:[k("div",{children:[i("p",{children:"Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout."}),k("figure",{children:[i("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-nav",e,t)}),i("figcaption",{children:"Showcase of navigation on a smaller device"})]})]}),i("div",{children:i(o,{lang:"xml",children:`<header>
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
</header>`})})]})]})}r(je,"Navigation");import{useState as Yt}from"https://esm.sh/react@19.2.6";import{Fragment as gt,jsx as T,jsxs as ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function ut(){return ee(gt,{children:[T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),T("p",{children:T("button",{children:"Discover"})})]})}r(ut,"Tab1");function ht(){return ee(gt,{children:[T("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),T("div",{children:T("blockquote",{children:"lorem ipsum install"})})]})}r(ht,"Tab2");function vt(){return T(gt,{children:T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}r(vt,"Tab3");function Ke({theme:e}){let t=q(),[a,D]=Yt("tab-1");return ee(p,{theme:e,children:[ee("section",{className:"row",children:[ee("div",{children:[ee("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",T("code",{children:"<menu>"})," element ",T("b",{children:"outside"})," of a ",T("code",{children:"nav"})," element."]}),T("div",{className:"disable-mobile",children:ee("menu",{children:[T("li",{"aria-selected":a==="tab-1",children:ee("a",{onClick:()=>D("tab-1"),children:[ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),T("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),T("span",{children:"Home"})]})}),T("li",{"aria-selected":a==="tab-2",children:ee("a",{onClick:()=>D("tab-2"),children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),T("span",{children:"Install"})]})}),T("li",{"aria-selected":a==="tab-3",children:ee("a",{onClick:()=>D("tab-3"),children:[ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T("circle",{cx:"12",cy:"12",r:"10"}),T("path",{d:"M17 12h.01"}),T("path",{d:"M12 12h.01"}),T("path",{d:"M7 12h.01"})]}),T("span",{children:"More"})]})})]})}),ee("div",{children:[a==="tab-1"?T(ut,{}):null,a==="tab-2"?T(ht,{}):null,a==="tab-3"?T(vt,{}):null]})]}),T("div",{children:T(o,{lang:"xml",children:`<main>
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
</main>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[T("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),ee("figure",{children:[T("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-tabs-nav",e,t)}),T("figcaption",{children:"Showcase of tabbed navigation in a smaller container or device."})]})]}),T("div",{children:T(o,{lang:"xml",children:`<div className="row">
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
</div>`})})]})]})}r(Ke,"Tabs");import{jsx as W,jsxs as se}from"https://esm.sh/react@19.2.6/jsx-runtime";function Qe({theme:e}){let t=q();return se(p,{theme:e,children:[se("section",{className:"row",children:[se("div",{children:[W("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),W("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),W("nav",{children:se("menu",{className:"disable-mobile",children:[W("li",{"aria-selected":!0,children:se("a",{href:"",children:[se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),W("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),W("span",{children:"Home"})]})}),W("li",{children:se("a",{href:"",children:[se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W("path",{d:"M4 11a9 9 0 0 1 9 9"}),W("path",{d:"M4 4a16 16 0 0 1 16 16"}),W("circle",{cx:"5",cy:"19",r:"1"})]}),W("span",{children:"Latest"})]})}),W("li",{children:se("a",{href:"",children:[se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),W("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),W("circle",{cx:"10",cy:"7",r:"4"})]}),W("span",{children:"Profile"})]})})]})})]}),W("div",{children:W(o,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),se("section",{className:"row",children:[se("div",{children:[se("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",W("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),se("figure",{children:[W("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-menu",e,t)}),W("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),W("div",{children:W(o,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}r(Qe,"Menu");import{jsx as F,jsxs as ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ze({theme:e}){return F(p,{theme:e,children:ce("section",{className:"row",children:[ce("div",{children:[F("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),ce("p",{children:["By default you can add a ",F("b",{children:"meta"})," tag with the ",F("code",{children:"color-scheme"})," name and ",F("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),F("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),ce("table",{children:[F("thead",{children:ce("tr",{children:[F("th",{children:"Theme"}),F("th",{children:"Light"}),F("th",{children:"Dark"})]})}),ce("tbody",{children:[ce("tr",{children:[F("td",{children:"Default"}),F("td",{children:"\u2705"}),F("td",{children:"\u2705"})]}),ce("tr",{children:[F("td",{children:"Blog"}),F("td",{children:"\u2705"}),F("td",{children:"\u2705"})]}),ce("tr",{children:[F("td",{children:"App"}),F("td",{children:"\u2705"}),F("td",{children:"\u2705"})]}),ce("tr",{children:[F("td",{children:"Delivery"}),F("td",{children:"\u2705"}),F("td",{children:"\u274C"})]}),ce("tr",{children:[F("td",{children:"Landing"}),F("td",{children:"\u2705"}),F("td",{children:"\u274C"})]}),ce("tr",{children:[F("td",{children:"Newsletter"}),F("td",{children:"\u2705"}),F("td",{children:"\u274C"})]})]})]})]}),F("div",{children:F(o,{lang:"xml",children:`<html>
  <head>
    <!-- both variants -->
    <meta 
      name="color-scheme" 
      content="light dark"/>
    
    <!-- only dark variant -->
    <meta 
      name="color-scheme" 
      content="dark"/>
  </head>
</html>`})})]})})}r(Ze,"DarkMode");import{jsx as re,jsxs as ye}from"https://esm.sh/react@19.2.6/jsx-runtime";function Je({theme:e}){return ye(p,{theme:e,children:[ye("section",{className:"row",children:[ye("div",{children:[re("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),re("p",{children:"When inside buttons the width & height is aligned to match the font size."}),re("p",{children:ye("button",{children:[ye("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),re("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),re("span",{children:"Home"})]})})]}),re("div",{children:re(o,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),ye("section",{className:"row",children:[ye("div",{children:[re("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),ye("div",{role:"group",children:[ye("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),re("circle",{cx:"12",cy:"10",r:"3"})]}),re("b",{children:"Test Address, SE11 8CL"})]})]}),re("div",{children:re(o,{lang:"xml",children:`<div role="group">
  <svg 
    width="20" 
    height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}r(Je,"Icons");import{jsx as I,jsxs as z}from"https://esm.sh/react@19.2.6/jsx-runtime";function Xe({theme:e}){let t=q();return z(p,{theme:e,children:[z("section",{className:"row",children:[z("div",{children:[I("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),z("p",{children:["The threshold between wide and narrow happens at ",I("b",{children:"600px"}),"."]}),I("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),z("figure",{children:[I("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-typography",e,t)}),z("figcaption",{children:["More information ",I("a",{href:s.doc("typography",e,t),children:"here"})]})]})]}),I("div",{children:I(o,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),z("section",{className:"row",children:[z("div",{children:[I("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),z("figure",{children:[I("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-nav",e,t)}),z("figcaption",{children:["More information ",I("a",{href:s.doc("navigation",e,t),children:"here"})," or ",I("a",{href:s.doc("tabs",e,t),children:"here"}),"."]})]})]}),I("div",{children:I(o,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a ...>...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),z("section",{className:"row",children:[z("div",{children:[I("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),z("figure",{children:[I("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-menu",e,t)}),z("figcaption",{children:["More information ",I("a",{href:s.doc("menu",e,t),children:"here"}),"."]})]})]}),I("div",{children:I(o,{lang:"xml",children:`<header>
  <menu>
    <li><a ...>...</a></li>
    ....
  </menu>
</header>`})})]}),z("section",{className:"row",children:[z("div",{children:[z("p",{children:["Finally, elements that have the ",I("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),z("figure",{children:[I("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-columns",e,t)}),z("figcaption",{children:["More information ",I("a",{href:s.doc("grid",e,t),children:"here"}),"."]})]})]}),I("div",{children:I(o,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),z("section",{className:"row",children:[z("div",{children:[z("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",I("code",{children:"disable-mobile"})," class."]}),z("p",{children:["You can also instruct elements to be hidden on mobile, via the ",I("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",I("code",{children:"hiden-on-desktop"})," class."]})]}),I("div",{})]})]})}r(Xe,"Mobile");import{jsx as d,jsxs as $}from"https://esm.sh/react@19.2.6/jsx-runtime";function et({theme:e}){let t=q();return $(p,{theme:e,children:[$("section",{className:"row",children:[$("div",{children:[$("p",{children:["By wrapping together a number of HTML elements inside an ",d("code",{children:"article"}),", you can create a basic card-type layout."]}),$("div",{className:"row disable-mobile",children:[d("div",{children:$("article",{children:[d("span",{children:d("b",{children:"Title"})}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),d("div",{children:$("article",{className:"success",children:[d("span",{children:d("b",{children:"Title"})}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),d("div",{children:d(o,{lang:"xml",children:`<article>
  <span>
    <b>Title</b>
  </span>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["Cards can wrap headings and paragraphs and can be styled with ",d("code",{children:"success"})," and ",d("code",{children:"error"})," classes."]}),$("div",{className:"row disable-mobile",children:[d("div",{children:$("article",{children:[d("h3",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),d("div",{children:$("article",{className:"error",children:[d("h3",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),d("p",{children:$("small",{children:["You can learn more about classes ",d("a",{href:s.doc("classes",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<article>
  <h3>Title</h3>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["The ",d("code",{children:"header"})," element of a card will be styled so it's more proeminent."]}),$("div",{className:"row disable-mobile",children:[d("div",{children:$("article",{children:[d("header",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),d("div",{children:$("article",{className:"success",children:[d("header",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),d("div",{children:d(o,{lang:"xml",children:`<article>
  <header>Title</header>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),$("section",{className:"row",children:[$("div",{children:[d("p",{children:"Likewise, the first image tag used in a card will be styled as a header image."}),$("div",{className:"row disable-mobile",children:[d("div",{children:$("article",{children:[d("img",{height:"80",src:"https://picsum.photos/id/16/320/80",alt:"header image"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),d("div",{children:$("article",{className:"error",children:[d("img",{height:"80",src:"https://picsum.photos/id/16/420/80",alt:"header image"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),d("div",{children:d(o,{lang:"xml",children:`<article>
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),$("section",{className:"row",children:[$("div",{children:[d("p",{children:"You can combine elements inside a card to produce quite compelx results, as the example below shows."}),d("p",{children:"By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML."}),$("article",{children:[d("img",{height:"160",src:"https://picsum.photos/id/16/480/160",alt:"header image"}),d("h4",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),d("p",{children:d("button",{children:"Button"})})]})]}),d("div",{children:d(o,{lang:"xml",children:`<article>
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
</article>`})})]}),$("section",{className:"row",children:[$("div",{children:[d("p",{children:"If we combine groups, columns and cards, we can experiment with even more daring layouts all while using just semantic HTML and minimal classes."}),$("article",{children:[d("div",{role:"group",children:$("div",{className:"row",children:[d("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"header image"}),$("div",{children:[d("b",{children:"Title"}),d("br",{}),d("span",{children:"Subtitle"})]})]})}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),$("p",{children:[d("mark",{children:"v12.5.3"}),d("mark",{className:"success",children:"success"})]}),d("hr",{}),d("p",{children:d("button",{children:"Button"})})]}),d("p",{children:$("small",{children:["You can learn more about groups ",d("a",{href:s.doc("groups",e,t),children:"here"}),"."]})}),d("p",{children:$("small",{children:["You can learn more about columns ",d("a",{href:s.doc("grid",e,t),children:"here"}),"."]})})]}),d("div",{children:d(o,{lang:"xml",children:`<article>
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
</article>`})})]})]})}r(et,"Cards");import{jsx as u,jsxs as G}from"https://esm.sh/react@19.2.6/jsx-runtime";function tt({theme:e}){return u(p,{theme:e,children:u("section",{children:G("div",{children:[G("p",{children:[xt," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),G("table",{children:[u("thead",{children:G("tr",{children:[u("th",{children:"Domain"}),u("th",{children:"Class"}),u("th",{children:"Effect"})]})}),G("tbody",{children:[G("tr",{children:[u("td",{rowSpan:3,children:"Containers"}),u("td",{children:u("code",{children:"container-medium"})}),u("td",{children:"Sets the maximum size of the container to 800px."})]}),G("tr",{children:[u("td",{children:u("code",{children:"container-narrow"})}),u("td",{children:"Sets the maximum size of the container to 1200px."})]}),G("tr",{children:[u("td",{children:u("code",{children:"container-wide"})}),u("td",{children:"Sets the maximum size of the container to 1600px."})]}),G("tr",{children:[u("td",{rowSpan:3,children:"Layout"}),u("td",{children:u("code",{children:"row"})}),u("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),G("tr",{children:[u("td",{children:u("code",{children:"col"})}),u("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),G("tr",{children:[u("td",{children:u("code",{children:"col-N"})}),G("td",{children:["Horizontal space is divided in 12 equal columns. From ",u("code",{children:"col-1"})," to ",u("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),G("tr",{children:[u("td",{rowSpan:4,children:"Mobile"}),u("td",{children:u("code",{children:"hide-on-mobile"})}),u("td",{children:"Hides an element if on small displays."})]}),G("tr",{children:[u("td",{children:u("code",{children:"hide-on-desktop"})}),u("td",{children:"Hides an element if on large displays."})]}),G("tr",{children:[u("td",{children:u("code",{children:"disable-mobile"})}),G("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",u("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),G("tr",{children:[u("td",{children:u("code",{children:"flex"})}),u("td",{children:"Displays content normally on wider screens but switches to a row layout on smaller devices."})]}),G("tr",{children:[u("td",{rowSpan:5,children:"Colors"}),u("td",{children:u("code",{children:"primary"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),G("tr",{children:[u("td",{children:u("code",{children:"secondary"})}),u("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),G("tr",{children:[u("td",{children:u("code",{children:"success"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),G("tr",{children:[u("td",{children:u("code",{children:"error"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),G("tr",{children:[u("td",{children:u("code",{children:"inverted"})}),u("td",{children:"Takes any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),G("tr",{children:[u("td",{rowSpan:1,children:"Alignment"}),u("td",{children:u("code",{children:"align-center"})}),u("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}r(tt,"Classes");import{jsx as g,jsxs as Z}from"https://esm.sh/react@19.2.6/jsx-runtime";function ot({theme:e}){let t=q();return Z(p,{theme:e,children:[Z("section",{className:"row",children:[Z("div",{children:[Z("p",{children:["Any layout element, such as a ",g("code",{children:"div"})," or ",g("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",g("code",{children:"row"})," and ",g("code",{children:"col"})," classes."]}),Z("article",{children:[Z("div",{className:"row disable-mobile",children:[g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})}),g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})})]}),Z("div",{className:"row disable-mobile",children:[g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})}),g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})}),g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})})]})]})]}),g("div",{children:g(o,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[g("p",{children:"Like similar CSS libraries, a grid contains 12 columns."}),Z("p",{children:["An element with class ",g("code",{children:"col-1"})," will span just one column, whilst an element with class ",g("code",{children:"col-4"})," will span 4 columns (or 33.333% of the available space) and an element with ",g("code",{children:"col-12"})," will span the whole width of the grid."]}),Z("p",{children:["Grids can combine columns of multiple widths. The generic ",g("code",{children:"col"})," class will fill all available space."]}),g("article",{children:Z("div",{className:"row disable-mobile",children:[g("div",{className:"col-2",children:g("code",{style:{width:"100%"},children:"col-2"})}),g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})}),g("div",{className:"col-6",children:g("code",{style:{width:"100%"},children:"col-6"})})]})})]}),g("div",{children:g(o,{lang:"xml",children:`<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[g("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),Z("figure",{children:[g("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-columns",e,t)}),g("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),g("div",{children:g(o,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[Z("p",{children:["Finally, you can even omit the ",g("code",{children:"col"})," class entirely. A ",g("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",g("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",g("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),g("article",{children:Z("div",{className:"row disable-mobile",children:[g("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"ssample image "}),g("div",{children:g("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),g("div",{children:g(o,{lang:"xml",children:`<div class="row">
  <p 
    width="80" 
    height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}r(ot,"Grids");import{jsx as _,jsxs as Ne}from"https://esm.sh/react@19.2.6/jsx-runtime";function at({theme:e}){return _(p,{theme:e,children:Ne("section",{className:"row",children:[Ne("div",{children:[_("p",{children:"There are three classes that allow you to set different content widths:"}),Ne("table",{children:[_("thead",{children:Ne("tr",{children:[_("th",{children:"Class"}),_("th",{children:"Width"}),_("th",{children:"Info"})]})}),Ne("tbody",{children:[Ne("tr",{children:[_("td",{children:_("code",{children:"container-narrow"})}),_("td",{children:"800px"}),_("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),Ne("tr",{children:[_("td",{children:_("code",{children:"container-medium"})}),_("td",{children:"1200px"}),_("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),Ne("tr",{children:[_("td",{children:_("code",{children:"container-wide"})}),_("td",{children:"1600px"}),_("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]})]})]}),_("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),_("div",{children:_(o,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}r(at,"Containers");import{jsx as H,jsxs as j}from"https://esm.sh/react@19.2.6/jsx-runtime";function it({theme:e}){return j(p,{theme:e,children:[j("section",{className:"row",children:[j("div",{children:[j("p",{children:["Some elements are visually meant to ",H("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",H("code",{children:"group"})," role."]}),j("p",{children:["In the case of a group of ",H("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),j("p",{role:"group",children:[H("button",{children:"Option 1"}),H("button",{type:"reset",children:"Option 2"})]})]}),H("div",{children:H(o,{lang:"xml",children:`<p role="group">
  <button>
    Option 1
  </button>f
  <button type="reset">
    Option 2
  </button>
</p>`})})]}),j("section",{className:"row",children:[j("div",{children:[j("p",{children:["In the case of a group of ",H("code",{children:"marks"}),", they're also pulled together and have any vertical space dissapear."]}),j("p",{role:"group",children:[H("mark",{children:"#test"}),H("mark",{className:"success",children:"v1.0.0"})]})]}),H("div",{children:H(o,{lang:"xml",children:`<p role="group">
  <mark>
    #test
  </mark>
  <mark 
    class="success">
    v1.0.0
  </mark>
</p>`})})]}),j("section",{className:"row",children:[j("div",{children:[H("p",{children:"Grouping elements really shines in the case of forms and form inputs. You can see below an example of a compact login form."}),H("form",{children:j("div",{role:"group",children:[H("input",{id:"email",type:"email",placeholder:"Email"}),H("input",{id:"password",type:"password",placeholder:"Password"}),H("input",{type:"submit",value:"Login"})]})})]}),H("div",{children:H(o,{lang:"xml",children:`<form>
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
      value={"Login"}/>
  </div>
</form>`})})]}),j("section",{className:"row",children:[j("div",{children:[H("p",{children:"Grouping elements can be used to style icons and text together."}),j("div",{role:"group",children:[j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[H("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),H("circle",{cx:"12",cy:"10",r:"3"})]}),H("b",{children:"Test Address, SE11 8CL"})]})]}),H("div",{children:H(o,{lang:"xml",children:`<div role="group">
  <svg 
    width="20" 
    height="20" ...>
  </svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]}),j("section",{className:"row",children:[j("div",{children:[H("p",{children:"Other elements, such as images, can also be grouped, although the impact isn't as pronounced."}),j("p",{role:"group",children:[H("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"image 1"}),H("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/120/120",alt:"image 2"})]})]}),H("div",{children:H(o,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}r(it,"Groups");import{jsx as ne,jsxs as ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function st({theme:e}){let t=q();return ve(p,{theme:e,children:[ve("section",{className:"row",children:[ve("div",{children:[ve("p",{children:["A ",ne("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",ne("code",{children:"nav"})," or ",ne("code",{children:"menu"}),"):"]}),ne("iframe",{scrolling:"no",width:"100%",height:275,src:s.example("layout-header-simple",e,t)})]}),ne("div",{children:ne(o,{lang:"xml",children:`<header>
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
</main>`})})]}),ve("section",{className:"row",children:[ve("div",{children:[ve("p",{children:['You create more complex "hero" layouts by placing any element, such as a ',ne("code",{children:"div"}),", inside a header. Note that heroes are defined by the extra top and bottom padding child elements receive."]}),ne("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-header-sub",e,t)})]}),ne("div",{children:ne(o,{lang:"xml",children:`<!-- nav header -->
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
<main>
  <h1>Title</h1>
  <p>Lorem ipsum...</p>
</main>`})})]}),ve("section",{className:"row",children:[ve("div",{children:[ve("p",{children:["Finally, ",ne("code",{children:"aside"}),' is another specialised element that can be used in a header in order to create a "banner" element, either to be placed at the top of the page or mid-content.']}),ne("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-header-section",e,t)})]}),ne("div",{children:ne(o,{lang:"xml",children:`<main>
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
            ...
          </button>
        </div>
      </div>
    </aside>
  </header>
</main>`})})]})]})}r(st,"Header");import{jsx as P,jsxs as we}from"https://esm.sh/react@19.2.6/jsx-runtime";function rt({theme:e}){let t=q();return P(p,{theme:e,children:we("section",{className:"row",children:[we("div",{children:[we("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",P("code",{children:"nav"})," element."]}),we("p",{children:["As with unordered lists, you can denote the selected elment using the ",P("code",{children:"aria-selected"})," attribute."]}),P("nav",{className:"disable-mobile",children:we("ol",{children:[P("li",{children:P("a",{href:"",children:"Home"})}),P("li",{children:P("a",{href:"",children:"Library"})}),P("li",{"aria-selected":!0,children:P("a",{href:"",children:"Data"})})]})}),P("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),P("nav",{className:"disable-mobile",children:we("ol",{children:[P("li",{children:we("a",{href:"",children:[we("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),P("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),P("span",{children:"Home"})]})}),P("li",{"aria-selected":!0,children:P("a",{href:"",children:"Folder"})})]})}),P("p",{children:"Finally, breadcrumbs are also responsive."}),we("figure",{children:[P("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-breadcrumbs",e,t)}),P("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),P("div",{children:P(o,{lang:"xml",children:`<nav>
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
</nav>`})})]})})}r(rt,"Breadcrumbs");import{useState as Vt}from"https://esm.sh/react@19.2.6";import{jsx as K,jsxs as Se}from"https://esm.sh/react@19.2.6/jsx-runtime";function bt(){let[e,t]=Vt("tab-1");return K("main",{children:Se("div",{className:"row disable-mobile",children:[K("aside",{children:K("div",{children:Se("menu",{children:[K("li",{"aria-selected":e==="tab-1",children:Se("a",{onClick:()=>t("tab-1"),children:[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[K("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),K("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),K("span",{children:"Home"})]})}),K("li",{"aria-selected":e==="tab-2",children:Se("a",{onClick:()=>t("tab-2"),children:[K("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:K("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),K("span",{children:"Install"})]})}),K("li",{"aria-selected":e==="tab-3",children:Se("a",{onClick:()=>t("tab-3"),children:[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[K("circle",{cx:"12",cy:"12",r:"10"}),K("path",{d:"M17 12h.01"}),K("path",{d:"M12 12h.01"}),K("path",{d:"M7 12h.01"})]}),K("span",{children:"More"})]})})]})})}),Se("div",{style:{flexGrow:1},children:[e==="tab-1"?K(ut,{}):null,e==="tab-2"?K(ht,{}):null,e==="tab-3"?K(vt,{}):null]})]})})}r(bt,"MobileTabs");import{useState as _t}from"https://esm.sh/react@19.2.6";import{jsx as y,jsxs as Y}from"https://esm.sh/react@19.2.6/jsx-runtime";function nt({theme:e}){let[t,a]=_t("primary");return y(p,{theme:e,children:Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["You can apply several color modes with the help of few classes like ",y("code",{children:"primary"}),", ",y("code",{children:"secondary"}),", ",y("code",{children:"success"})," and ",y("code",{children:"error"}),"."]}),Y("p",{children:["You can combine them with the ",y("code",{children:"inverted"})," class to change the colors of various components."]}),y("form",{children:Y("label",{children:[y("span",{children:y("b",{children:"Color mode"})}),Y("select",{onChange:r(m=>a(m.target.value),"onColorClassChange"),children:[y("option",{value:"primary",children:"Primary"}),y("option",{value:"secondary",children:"Secondary"}),y("option",{value:"success",children:"Success"}),y("option",{value:"error",children:"Error"})]})]})}),y("hr",{}),Y("section",{children:[Y("hgroup",{children:[Y("h1",{children:[y("span",{className:`${t}`,children:"Lorem ipsum dolor"}),y("br",{}),"sit amet"]}),Y("h4",{children:["Lorem ipsum dolor sit amet,",y("br",{}),y("span",{className:`${t} inverted`,children:"sed do amet"})]})]}),Y("p",{role:"group",children:[y("mark",{className:`${t}`,children:"v12.5.33"}),y("mark",{className:`${t} inverted`,children:"Passing"})]})]}),y("section",{children:y("form",{children:Y("div",{role:"group",className:`${t}`,children:[y("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),y("input",{type:"submit",value:"Subscribe"})]})})}),Y("section",{children:[Y("div",{className:"row",children:[Y("article",{className:`${t}`,children:[Y("hgroup",{children:[y("h4",{children:"Hobby"}),y("p",{children:y("b",{children:"Free"})})]}),y("p",{children:"Includes"}),Y("ul",{children:[y("li",{children:"No credit card"}),y("li",{children:"All platforms"})]})]}),Y("article",{className:`${t} inverted`,children:[Y("hgroup",{children:[y("h4",{children:"Enterprise"}),y("p",{children:y("b",{children:y("a",{href:"",children:"Contact us"})})})]}),y("p",{children:"Includes"}),Y("ul",{children:[y("li",{children:"Everything in Hobby"}),y("li",{children:"24/7 support"})]})]})]}),y("blockquote",{className:`${t}`,children:Y("hgroup",{children:[y("h4",{children:"More information"}),y("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),Y("p",{children:["Link ",y("a",{href:"",children:"here"}),"."]})]})})]})]}),y("div",{children:y(o,{lang:"xml",children:`...
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
  <blockquote class="${t}>
    ...
  </blockquote>
</div>
`})})]})})}r(nt,"Colors");import{jsx as Te,jsxs as Ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function lt({theme:e}){let t=q();return Ee(p,{theme:e,children:[Ee("section",{className:"row",children:[Ee("div",{children:[Ee("p",{children:["A ",Te("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),Te("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-footer-simple",e,t)})]}),Te("div",{children:Te(o,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer
    with a <a href="...">link</a>.
  </div>
</footer>`})})]}),Ee("section",{className:"row",children:[Ee("div",{children:[Te("p",{children:"More complex footers can contain information divided by columns, etc."}),Te("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-footer-complex",e,t)})]}),Te("div",{children:Te(o,{lang:"xml",children:`<footer>
  <div>
    <div class="row">
      <div>
        <nav>
          <ul>...</ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>...</ul>
        </nav>
      </div>
      <div></div>
    </div>
  </div>
</footer>`})})]})]})}r(lt,"Footer");import{useState as Ut}from"https://esm.sh/react@19.2.6";import{jsx as C,jsxs as U}from"https://esm.sh/react@19.2.6/jsx-runtime";function dt({theme:e}){let[t,a]=Ut(!0);return U(p,{theme:e,children:[U("section",{className:"row",children:[U("div",{children:[U("p",{children:["You can add a loading indicator to an element by adding the ",C("code",{children:"aria-busy"})," attribute, with ",U("span",{role:"group",style:{display:"inline-flex"},children:[C("mark",{onClick:()=>a(!0),className:t?"success":"",children:"true"}),C("mark",{onClick:()=>a(!1),className:t?"":"success",children:"false"})]}),"."]}),C("p",{children:"For example, it can be applied to buttons (with or without exiting icons):"}),U("p",{className:"flex",children:[C("button",{"aria-busy":t,children:U("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("path",{d:"M4 11a9 9 0 0 1 9 9"}),C("path",{d:"M4 4a16 16 0 0 1 16 16"}),C("circle",{cx:"5",cy:"19",r:"1"})]})}),C("button",{"aria-busy":t,role:"reset",children:"Button"}),U("button",{"aria-busy":t,className:"secondary",children:[U("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),C("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),C("span",{children:"Home"})]}),U("button",{type:"reset","aria-busy":t,children:[C("span",{children:"Play"}),U("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("path",{d:"M21 4v16"}),C("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]})]}),C("div",{children:C(o,{lang:"xml",children:`<!-- icon button -->
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
</button>`})})]}),U("section",{className:"row",children:[U("div",{children:[C("p",{children:"It can be applied to paragraphs or other text elements:"}),C("p",{"aria-busy":t,children:"Loading..."}),C("p",{children:C("a",{href:"","aria-busy":t,children:"Click me"})})]}),C("div",{children:C(o,{lang:"xml",children:`<p${t?" aria-busy":""}>Loading...</p>
          
<a href="..."${t?" aria-busy":""}>Click me</a>`})})]}),U("section",{className:"row",children:[C("div",{}),C("div",{})]}),U("section",{className:"row",children:[U("div",{children:[C("p",{children:"Or it can be applied to block elements. In this case the whole content is hidden when loading."}),C("blockquote",{"aria-busy":t,children:U("p",{children:["Press",C("kbd",{children:"Ctrl + Q"}),"to quit"]})})]}),C("div",{children:C(o,{lang:"xml",children:`<blockquote${t?" aria-busy":""}>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>`})})]}),U("section",{className:"row",children:[U("div",{children:[C("p",{children:"And cards of different types, where the loading spinner is also horizontally centered."}),C("article",{"aria-busy":t,children:U("details",{open:!0,children:[C("summary",{children:"Note"}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),U("article",{"aria-busy":t,className:"success",children:[C("span",{children:C("b",{children:"Title"})}),C("p",{children:"Lorem ipsum ..."})]})]}),C("div",{children:C(o,{lang:"xml",children:`<article${t?" aria-busy":""}>
  <details>
    <summary>...</summary>
    <p>...</p>
  </details>
</article>

<article${t?" aria-busy":""}>
  <span><b>...</b></span>
  <p>...</p>
</article>`})})]})]})}r(dt,"Loading");var s=class e{static{r(this,"RouteMaster")}static baseRoute="";static home(t,a){return`${e.getBase(a)}${t}/`}static showcase(t,a){return`${e.getBase(a)}${t}/showcases.html`}static doc(t,a,D){let m=e.getBase(D);switch(t){case"typography":return`${m}${a}/pages/docs/basics/${l(qe)}`;case"buttons":return`${m}${a}/pages/docs/basics/${l(De)}`;case"blockquotes":return`${m}${a}/pages/docs/basics/${l(Be)}`;case"code":return`${m}${a}/pages/docs/basics/${l(Fe)}`;case"figures":return`${m}${a}/pages/docs/basics/${l(He)}`;case"lists":return`${m}${a}/pages/docs/basics/${l(Oe)}`;case"links":return`${m}${a}/pages/docs/basics/${l(Ie)}`;case"summary":return`${m}${a}/pages/docs/basics/${l(Ae)}`;case"table":return`${m}${a}/pages/docs/basics/${l(Re)}`;case"tags":return`${m}${a}/pages/docs/basics/${l(We)}`;case"cards":return`${m}${a}/pages/docs/basics/${l(et)}`;case"forms-check":return`${m}${a}/pages/docs/forms/${l(ze)}`;case"forms-disabled":return`${m}${a}/pages/docs/forms/${l(Ge)}`;case"forms-grouped":return`${m}${a}/pages/docs/forms/${l(Pe)}`;case"forms-normal":return`${m}${a}/pages/docs/forms/${l(Ye)}`;case"forms-validation":return`${m}${a}/pages/docs/forms/${l(Ve)}`;case"header":return`${m}${a}/pages/docs/layout/${l(st)}`;case"footer":return`${m}${a}/pages/docs/layout/${l(lt)}`;case"groups":return`${m}${a}/pages/docs/layout/${l(it)}`;case"modal":return`${m}${a}/pages/docs/layout/${l(Ue)}`;case"navigation":return`${m}${a}/pages/docs/navigation/${l(je)}`;case"breadcrumbs":return`${m}${a}/pages/docs/navigation/${l(rt)}`;case"tabs":return`${m}${a}/pages/docs/navigation/${l(Ke)}`;case"menu":return`${m}${a}/pages/docs/navigation/${l(Qe)}`;case"dark-mode":return`${m}${a}/pages/docs/extra/${l(Ze)}`;case"icons":return`${m}${a}/pages/docs/extra/${l(Je)}`;case"loading":return`${m}${a}/pages/docs/extra/${l(dt)}`;case"mobile":return`${m}${a}/pages/docs/extra/${l(Xe)}`;case"classes":return`${m}${a}/pages/docs/custom/${l(tt)}`;case"grid":return`${m}${a}/pages/docs/custom/${l(ot)}`;case"containers":return`${m}${a}/pages/docs/custom/${l(at)}`;case"colors":return`${m}${a}/pages/docs/custom/${l(nt)}`;default:return"/"}}static getDocFromRoute(t){let D=t.split("/docs/").pop(),[m,v]=D?.split("/")??[];switch(m){case"basics":switch(v){case l(qe):return"typography";case l(De):return"buttons";case l(Be):return"blockquotes";case l(Fe):return"code";case l(He):return"figures";case l(Ie):return"links";case l(Oe):return"lists";case l(Ae):return"summary";case l(Re):return"table";case l(We):return"tags";case l(et):return"cards"}case"forms":switch(v){case l(ze):return"forms-check";case l(Ge):return"forms-disabled";case l(Pe):return"forms-grouped";case l(Ye):return"forms-normal";case l(Ve):return"forms-validation"}case"layout":switch(v){case l(st):return"header";case l(lt):return"footer";case l(it):return"groups";case l(Ue):return"modal"}case"navigation":switch(v){case l(je):return"navigation";case l(rt):return"breadcrumbs";case l(Ke):return"tabs";case l(Qe):return"menu"}case"extra":switch(v){case l(Ze):return"dark-mode";case l(Je):return"icons";case l(dt):return"loading";case l(Xe):return"mobile"}case"custom":switch(v){case l(tt):return"classes";case l(ot):return"grid";case l(at):return"containers";case l(nt):return"colors"}}}static example(t,a,D){let m=e.getBase(D);switch(t){case"desktop-menu":return`${m}${a}/pages/examples/${l(Tt)}`;case"layout-header-simple":return`${m}${a}/pages/examples/${l($t)}`;case"layout-header-sub":return`${m}${a}/pages/examples/${l(Mt)}`;case"layout-header-section":return`${m}${a}/pages/examples/${l(Nt)}`;case"layout-footer-simple":return`${m}${a}/pages/examples/${l(Ft)}`;case"layout-footer-complex":return`${m}${a}/pages/examples/${l(Ht)}`;case"mobile-columns":return`${m}${a}/pages/examples/${l(Et)}`;case"mobile-menu":return`${m}${a}/pages/examples/${l(Dt)}`;case"mobile-nav":return`${m}${a}/pages/examples/${l(qt)}`;case"mobile-breadcrumbs":return`${m}${a}/pages/examples/${l(St)}`;case"mobile-tabs-nav":return`${m}${a}/pages/examples/${l(bt)}`;case"mobile-typography":return`${m}${a}/pages/examples/${l(Bt)}`}}static showcases(t,a){return`${e.getBase(a)}showcase/${t}/${ft(t)}.html`}static showcaseImg(t,a,D="light"){return`${e.getBase(a)}showcase/${t}/${ft(t)}.${D}.png`}static getBase(t){return t?t===""?"/":`/${t}/`:"/"}};function l(e){return`${ft(e.name)}.html`}r(l,"htmlName");function ft(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}r(ft,"toKebabCase");import{jsx as A,jsxs as ke}from"https://esm.sh/react@19.2.6/jsx-runtime";function yt(){let e=Lt(),t=q(),a=r(D=>{let m=D.target.value;if(typeof window<"u"){let v=window.location.pathname;if(v.includes(e)){let pe=v.replace(e,m);window.location.href=pe}else if(v.includes($e)){let pe=v.split("/"),ge=pe.indexOf($e)+1;pe.splice(ge,0,m);let At=pe.join("/");window.location.href=At}else{let pe=`/${m}${v}`;window.location.href=pe}}},"onThemeChange");return A("nav",{children:ke("ul",{children:[A("li",{children:ke("a",{href:s.home(e,t),children:[ke("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),A("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),A("span",{children:"Home"})]})}),A("li",{children:ke("a",{href:s.showcase(e,t),children:[ke("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),A("circle",{cx:"12",cy:"12",r:"3"})]}),A("span",{children:"Showcase"})]})}),A("div",{}),A("li",{className:"hide-on-desktop",children:ke("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[ke("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),A("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),A("span",{children:"GitHub"})]})}),A("li",{children:ke("select",{name:"theme-selector",onChange:a,children:[A("option",{value:"default",selected:e==="default",children:"Default"}),A("option",{value:"blog",selected:e==="blog",children:"Blog"}),A("option",{value:"app",selected:e==="app",children:"App"}),A("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),A("option",{value:"landing",selected:e==="landing",children:"Landing"}),A("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),A("li",{className:"hide-on-mobile",children:A("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:A("button",{type:"reset",children:ke("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),A("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}r(yt,"TopNav");import{jsx as wt,jsxs as jt}from"https://esm.sh/react@19.2.6/jsx-runtime";function kt({theme:e,children:t}){return jt(Ct,{value:e,children:[wt("header",{children:wt(yt,{})}),wt("main",{children:t})]})}r(kt,"HomeLayout");import{jsx as n,jsxs as de}from"https://esm.sh/react@19.2.6/jsx-runtime";function p({theme:e,children:t}){let a=q(),[D,m]=It(!1),[v,pe]=It(void 0);return Kt(()=>{if(typeof window<"u"){let ge=s.getDocFromRoute(window.location.pathname);pe(ge)}},[]),n(kt,{theme:e,children:de("div",{className:"row",children:[de("aside",{children:[de("div",{className:"hide-on-desktop",role:"group",children:[de("div",{className:"row",children:[n("div",{children:n("button",{onClick:()=>m(!D),children:D?de("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M18 6 6 18"}),n("path",{d:"m6 6 12 12"})]}):de("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n("path",{d:"M7 8h10"}),n("path",{d:"M7 12h10"}),n("path",{d:"M7 16h10"})]})})}),n("span",{children:n("b",{children:"Chapters"})})]}),n("hr",{})]}),de("div",{className:D===!1||D===void 0?"hide-on-mobile":"",children:[de("menu",{children:[n("b",{children:"Basics"}),n("li",{"aria-selected":v==="typography",children:n("a",{href:s.doc("typography",e,a),children:"Typography"})}),n("li",{"aria-selected":v==="buttons",children:n("a",{href:s.doc("buttons",e,a),children:"Buttons"})}),n("li",{"aria-selected":v==="tags",children:n("a",{href:s.doc("tags",e,a),children:"Tags"})}),n("li",{"aria-selected":v==="lists",children:n("a",{href:s.doc("lists",e,a),children:"Lists"})}),n("li",{"aria-selected":v==="links",children:n("a",{href:s.doc("links",e,a),children:"Links"})}),n("li",{"aria-selected":v==="blockquotes",children:n("a",{href:s.doc("blockquotes",e,a),children:"Blokquotes"})}),n("li",{"aria-selected":v==="summary",children:n("a",{href:s.doc("summary",e,a),children:"Summary"})}),n("li",{"aria-selected":v==="code",children:n("a",{href:s.doc("code",e,a),children:"Code"})}),n("li",{"aria-selected":v==="table",children:n("a",{href:s.doc("table",e,a),children:"Table"})}),n("li",{"aria-selected":v==="figures",children:n("a",{href:s.doc("figures",e,a),children:"Figures"})}),n("li",{"aria-selected":v==="cards",children:n("a",{href:s.doc("cards",e,a),children:"Cards"})})]}),de("menu",{children:[n("b",{children:"Forms"}),n("li",{"aria-selected":v==="forms-normal",children:n("a",{href:s.doc("forms-normal",e,a),children:"Normal"})}),n("li",{"aria-selected":v==="forms-check",children:n("a",{href:s.doc("forms-check",e,a),children:"Checks & Radios"})}),n("li",{"aria-selected":v==="forms-grouped",children:n("a",{href:s.doc("forms-grouped",e,a),children:"Grouped"})}),n("li",{"aria-selected":v==="forms-disabled",children:n("a",{href:s.doc("forms-disabled",e,a),children:"Disabled"})}),n("li",{"aria-selected":v==="forms-validation",children:n("a",{href:s.doc("forms-validation",e,a),children:"Validation"})})]}),de("menu",{children:[n("b",{children:"Layout"}),n("li",{"aria-selected":v==="header",children:n("a",{href:s.doc("header",e,a),children:"Headers"})}),n("li",{"aria-selected":v==="footer",children:n("a",{href:s.doc("footer",e,a),children:"Footers"})}),n("li",{"aria-selected":v==="groups",children:n("a",{href:s.doc("groups",e,a),children:"Groups"})}),n("li",{"aria-selected":v==="modal",children:n("a",{href:s.doc("modal",e,a),children:"Modal"})})]}),de("menu",{children:[n("b",{children:"Navigation"}),n("li",{"aria-selected":v==="navigation",children:n("a",{href:s.doc("navigation",e,a),children:"Basic"})}),n("li",{"aria-selected":v==="breadcrumbs",children:n("a",{href:s.doc("breadcrumbs",e,a),children:"Breadcrumbs"})}),n("li",{"aria-selected":v==="menu",children:n("a",{href:s.doc("menu",e,a),children:"Menu"})}),n("li",{"aria-selected":v==="tabs",children:n("a",{href:s.doc("tabs",e,a),children:"Tabs"})})]}),de("menu",{children:[n("b",{children:"Extra"}),n("li",{"aria-selected":v==="dark-mode",children:n("a",{href:s.doc("dark-mode",e,a),children:"Dark Mode"})}),n("li",{"aria-selected":v==="icons",children:n("a",{href:s.doc("icons",e,a),children:"Icons"})}),n("li",{"aria-selected":v==="loading",children:n("a",{href:s.doc("loading",e,a),children:"Loading"})}),n("li",{"aria-selected":v==="mobile",children:n("a",{href:s.doc("mobile",e,a),children:"Mobile"})})]}),de("menu",{children:[n("b",{children:"Custom"}),n("li",{"aria-selected":v==="grid",children:n("a",{href:s.doc("grid",e,a),children:"Grids"})}),n("li",{"aria-selected":v==="containers",children:n("a",{href:s.doc("containers",e,a),children:"Containers"})}),n("li",{"aria-selected":v==="colors",children:n("a",{href:s.doc("colors",e,a),children:"Colors"})}),n("li",{"aria-selected":v==="classes",children:n("a",{href:s.doc("classes",e,a),children:"Classes"})})]})]})]}),n("div",{children:t})]})})}r(p,"DocLayout");export{q as a,p as b,De as c,qe as d,Be as e,Fe as f,He as g,Ie as h,Ae as i,Re as j,We as k,Oe as l,ze as m,Ge as n,Pe as o,Ye as p,Ve as q,Ue as r,je as s,Ke as t,Qe as u,Ze as v,Je as w,Xe as x,et as y,tt as z,ot as A,at as B,it as C,st as D,rt as E,bt as F,nt as G,lt as H,dt as I,s as J,yt as K,kt as L};
