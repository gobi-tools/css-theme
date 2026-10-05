import{a as Bt}from"./chunk-JVC2YUTX.js";import{a as qt}from"./chunk-VF54OWRX.js";import{a as Ht}from"./chunk-YABYCP3C.js";import{a as Ft}from"./chunk-S2K5HKMX.js";import{a as $t}from"./chunk-KO77FJTQ.js";import{a as Mt}from"./chunk-KI47NOOC.js";import{a as St}from"./chunk-JESKLRVE.js";import{a as Nt}from"./chunk-UQHYQE3J.js";import{a as Et}from"./chunk-LBW6DUAQ.js";import{a as Dt}from"./chunk-EZPYW6B2.js";import{b as kt,c as Ct,d as Lt,e as t}from"./chunk-XTJFF2W5.js";import{a as Ne}from"./chunk-7AZBNJU6.js";import{a as Tt}from"./chunk-PVS23Q4F.js";import{a as s}from"./chunk-3SPXEKH7.js";import{useEffect as jt,useState as It}from"https://esm.sh/react@19.2.6";import{useState as Rt,useEffect as Wt}from"https://esm.sh/react@19.2.6";function D(){let[e,o]=Rt(void 0);return Wt(()=>{if(typeof window<"u"){let E=window.location.pathname.includes(Ne)?Ne:"";o(E)}},[]),e}s(D,"useRoute");import{jsx as c,jsxs as C}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ee({theme:e}){let o=D();return C(p,{theme:e,children:[C("section",{className:"row",children:[C("div",{children:[C("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",c("code",{children:"reset"})," type buttons)."]}),C("p",{children:[c("button",{children:"Button"}),c("button",{type:"reset",children:"Button"})]})]}),c("div",{children:c(t,{lang:"xml",children:`<button>Button</button>
<button type="reset">
  Button
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["Both types can be marked as ",c("code",{children:"disabled"}),", meaning no interaction will be possible with them."]}),C("p",{children:[c("button",{disabled:!0,children:"Disabled"}),c("button",{type:"reset",disabled:!0,children:"Disabled"})]})]}),c("div",{children:c(t,{lang:"xml",children:`<button disabled>
  Button
</button>
<button 
  type="reset" 
  disabled>
  Button
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[c("p",{children:"Buttons can be improved by adding svg icons, either to the left or to the right of the main button title."}),C("p",{children:[C("button",{children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),c("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),c("span",{children:"Home"})]}),C("button",{type:"reset",children:[c("span",{children:"Play"}),C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M21 4v16"}),c("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]}),c("p",{children:C("small",{children:["You can learn more about icons ",c("a",{href:r.doc("icons",e,o),children:"here"}),"."]})})]}),c("div",{children:c(t,{lang:"xml",children:`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[c("p",{children:"You can even create icon-only buttons by completely omitting the title."}),C("p",{children:[c("button",{children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M4 11a9 9 0 0 1 9 9"}),c("path",{d:"M4 4a16 16 0 0 1 16 16"}),c("circle",{cx:"5",cy:"19",r:"1"})]})}),c("button",{type:"reset",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),c("circle",{cx:"12",cy:"12",r:"4"})]})})]})]}),c("div",{children:c(t,{lang:"xml",children:`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["By default, buttons are styled using the ",c("b",{children:"primary"})," color, which impacts their background, border or text color. You can change that by applying classes like ",c("code",{children:"secondary"}),", ",c("code",{children:"success"})," or ",c("code",{children:"error"}),"."]}),C("p",{children:[c("button",{className:"secondary",children:"Action"}),c("button",{className:"success",children:"Confirm"}),C("button",{type:"reset",className:"error",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M18 6 6 18"}),c("path",{d:"m6 6 12 12"})]}),c("span",{children:"Cancel"})]})]}),c("p",{children:C("small",{children:["You can learn more about colors ",c("a",{href:r.doc("colors",e,o),children:"here"}),"."]})})]}),c("div",{children:c(t,{lang:"xml",children:`<button
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
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",c("code",{children:"group"})," role."]}),C("p",{role:"group",children:[c("button",{children:"Button 1"}),c("button",{type:"reset",children:"Button 2"}),c("button",{type:"reset",children:"Button 3"})]}),C("p",{role:"group",children:[c("button",{type:"reset",children:c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}),c("button",{type:"reset",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M7 10v12"}),c("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}),c("button",{children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M12 2v13"}),c("path",{d:"m16 6-4-4-4 4"}),c("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})]})})]}),C("p",{role:"group",children:[c("button",{type:"reset",children:"Prev"}),c("button",{type:"reset",children:"1"}),c("button",{type:"reset",children:"2"}),c("button",{type:"reset",children:"3"}),c("button",{type:"reset",children:"Next"})]}),c("p",{children:C("small",{children:["You can learn more about groups ",c("a",{href:r.doc("groups",e,o),children:"here"}),"."]})})]}),c("div",{children:c(t,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}s(Ee,"Buttons");import{jsx as b,jsxs as te}from"https://esm.sh/react@19.2.6/jsx-runtime";function De({theme:e}){return te(p,{theme:e,children:[te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Typography is based purely on ",b("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),b("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),b("div",{children:b(t,{lang:"xml",children:`<p>
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
</p>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["To all sorts of text modifiers, like ",b("code",{children:"b"}),", ",b("code",{children:"i"}),", ",b("code",{children:"em"})," tags and many more."]}),b("p",{children:b("i",{children:"italic"})}),b("p",{children:b("em",{children:"emphasized"})}),b("p",{children:b("dfn",{children:"definition"})}),b("p",{children:b("cite",{children:"citation"})}),b("p",{children:b("b",{children:"bold"})}),b("p",{children:b("strong",{children:"strong"})}),b("p",{children:b("del",{children:"deleted"})}),b("p",{children:b("s",{children:"corrected"})}),b("p",{children:b("u",{children:"underlined"})}),b("p",{children:b("q",{children:"quotation"})})]}),b("div",{children:b(t,{lang:"xml",children:`<i>italic</i>
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
<sup>supescript</sup>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Finally, it supports all six ",b("code",{children:"heading"})," types."]}),b("h1",{children:"Heading 1"}),b("h2",{children:"Heading 2"}),b("h3",{children:"Heading 3"}),b("h4",{children:"Heading 4"}),b("h5",{children:"Heading 5"}),b("h6",{children:"Heading 6"})]}),b("div",{children:b(t,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["As well as the ability to group headings and associated content with ",b("code",{children:"hgroup"}),"."]}),te("hgroup",{children:[b("h1",{children:"Heading 1"}),b("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),b("div",{children:b(t,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}s(De,"Typography");import{jsx as w,jsxs as j}from"https://esm.sh/react@19.2.6/jsx-runtime";function Be({theme:e}){let o=D();return j(p,{theme:e,children:[j("section",{className:"row",children:[j("div",{children:[w("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),w("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),w("div",{children:w(t,{lang:"xml",children:`<blockquote>
  Lorem ipsum ...
</blockquote>`})})]}),j("section",{className:"row",children:[j("div",{children:[w("p",{children:"It's not just text that can be included in a blockquote element, but code, icons, and many other elements."}),w("blockquote",{children:j("p",{children:["Press ",w("kbd",{children:"Ctrl + Q"})," to quit"]})}),w("blockquote",{children:j("hgroup",{children:[j("p",{role:"group",children:[j("svg",{xmlns:" http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w("circle",{cx:"12",cy:"12",r:"10"}),w("path",{d:"M12 16v-4"}),w("path",{d:"M12 8h.01"})]}),w("span",{children:"Information"})]}),j("p",{children:["Your package will be delivered on ",w("b",{children:"Tuesday at 08:00."})]})]})}),w("p",{children:j("small",{children:["You can learn more about groups ",w("a",{href:r.doc("groups",e,o),children:"here"})," and about icons ",w("a",{href:r.doc("icons",e,o),children:"here"}),"."]})})]}),w("div",{children:w(t,{lang:"xml",children:`<blockquote>
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
</blockquote>`})})]}),j("section",{className:"row",children:[j("div",{children:[j("p",{children:["Blockquotes can also be styled using the ",w("code",{children:"success"}),", ",w("code",{children:"error"}),", ",w("code",{children:"primary"})," and ",w("code",{children:"secondary"})," classes."]}),w("blockquote",{className:"success",children:j("hgroup",{children:[w("h4",{children:"Success"}),w("p",{children:"The operation was completed successfully"})]})}),w("blockquote",{className:"error",children:j("hgroup",{children:[w("p",{children:"Unknown error"}),w("p",{children:j("code",{children:["Server responsed with ",w("b",{children:"Error 500"})]})})]})}),w("blockquote",{className:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),w("blockquote",{className:"secondary",children:w("hgroup",{children:j("hgroup",{children:[w("h4",{children:"Title"}),w("p",{children:"Important Information"}),w("p",{children:w("button",{children:"Click me"})})]})})}),w("hgroup",{children:w("p",{children:j("small",{children:["You can learn more about colors ",w("a",{href:r.doc("colors",e,o),children:"here"}),"."]})})})]}),w("div",{children:w(t,{lang:"xml",children:`<blockquote class="success">
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
</blockquote>`})})]})]})}s(Be,"Blockquotes");import{jsx as ce,jsxs as Te}from"https://esm.sh/react@19.2.6/jsx-runtime";function qe({theme:e}){return ce(p,{theme:e,children:ce("section",{children:Te("div",{className:"row",children:[Te("div",{children:[ce("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),Te("p",{children:["Inline code ",ce("code",{children:"console.log('abc')"})]}),Te("p",{children:["Keyboard shortcut ",ce("kbd",{children:"Ctrl + S"})]}),Te("figure",{children:[ce(t,{lang:"xml",children:"console.log('abc')"}),ce("figcaption",{children:"Code block"})]}),Te("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",ce("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",ce("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),ce("div",{children:ce(t,{lang:"xml",children:`<p>
  Inline code <code>...</code>
</p>
<p>
  Keyboard shortcut 
  <kbd>...</kbd>
</p>
<pre>
  <code>....</code>
</pre>`})})]})})})}s(qe,"Code");import{jsx as se,jsxs as ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function Fe({theme:e}){return ve(p,{theme:e,children:[ve("section",{className:"row",children:[ve("div",{children:[se("p",{children:"Figures can contain a single image and an associated caption."}),ve("figure",{children:[se("img",{width:"640",height:"480",src:"https://picsum.photos/id/16/640/480",alt:"ssample image "}),se("figcaption",{children:"Sample caption"})]})]}),se("div",{children:se(t,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),ve("section",{className:"row",children:[ve("div",{children:[se("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),ve("figure",{children:[ve("figure",{children:[se("img",{width:"200",height:"240",src:"https://picsum.photos/id/16/200/240",alt:"first image"}),se("figcaption",{children:"Caption for the first image"})]}),ve("figure",{children:[se("img",{width:"240",height:"240",src:"https://picsum.photos/id/16/240/240",alt:"second image"}),se("figcaption",{children:"Caption for the second image"})]}),se("figcaption",{children:"Caption for the figure group"})]})]}),se("div",{children:se(t,{lang:"xml",children:`<figure>
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
</figure>`})})]})]})}s(Fe,"Figures");import{jsx as pe,jsxs as ct}from"https://esm.sh/react@19.2.6/jsx-runtime";function He({theme:e}){return pe(p,{theme:e,children:ct("section",{className:"row",children:[ct("div",{children:[pe("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),ct("ul",{children:[pe("li",{children:pe("a",{href:"",children:"website.com"})}),pe("li",{children:pe("a",{href:"",children:"email@test.com"})}),pe("li",{children:pe("a",{href:"",children:"/#location"})})]})]}),pe("div",{children:pe(t,{lang:"xml",children:`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location>
  /#location
</a>
`})})]})})}s(He,"Links");import{jsx as k,jsxs as W}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ie({theme:e}){let o=D();return W(p,{theme:e,children:[W("section",{className:"row",children:[W("div",{children:[k("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),W("details",{children:[k("summary",{children:"Info"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),W("details",{children:[k("summary",{children:"More info Info"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),k("div",{children:k(t,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),W("section",{className:"row",children:[W("div",{children:[W("p",{children:["This basic summary can be placed inside an ",k("code",{children:"article"})," and combined with the ",k("code",{children:"primary"}),", ",k("code",{children:"success"})," or ",k("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),k("article",{children:W("details",{open:!0,children:[k("summary",{children:"Note"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),k("article",{className:"primary",children:W("details",{children:[k("summary",{children:"Info"}),W("p",{children:["Larn more ",k("a",{href:"",children:"here"})]})]})}),k("article",{className:"success",children:W("details",{children:[k("summary",{children:"Success"}),W("p",{children:["Operation finished ",k("code",{children:"OK"})]})]})}),k("article",{className:"error",children:W("details",{children:[k("summary",{children:"Error"}),W("div",{children:[k("p",{children:"Unknown error occurred"}),k("hr",{}),k("button",{children:"Acknowledge"})]})]})}),k("p",{children:W("small",{children:["You can learn more about colors ",k("a",{href:r.doc("colors",e,o),children:"here"})," and cards ",k("a",{href:r.doc("cards",e,o),children:"here"}),"."]})})]}),k("div",{children:k(t,{lang:"xml",children:`<article>
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
</article>`})})]}),W("section",{className:"row",children:[W("div",{children:[W("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",k("code",{children:"article"}),", you can form an accordion menu:"]}),W("article",{children:[W("details",{name:"menu",children:[k("summary",{children:"Option 1"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),W("details",{name:"menu",open:!0,children:[k("summary",{children:"Option 2"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),W("details",{name:"menu",children:[k("summary",{children:"Option 3"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),k("div",{children:k(t,{lang:"xml",children:`
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
</article>`})})]})]})}s(Ie,"Summary");import{jsx as L,jsxs as me}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ae({theme:e}){return L(p,{theme:e,children:me("section",{className:"row",children:[me("div",{children:[L("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),me("table",{children:[L("thead",{children:me("tr",{children:[L("th",{children:"Cover"}),L("th",{children:"Item"}),L("th",{children:"Value"}),L("th",{children:"Comment"})]})}),me("tbody",{children:[me("tr",{children:[L("td",{children:L("img",{width:"30",height:"50",src:"https://picsum.photos/id/16/30/50",alt:"cover 1"})}),L("td",{children:L("a",{href:"",children:"Item 1.1"})}),L("td",{children:"20.35"}),L("td",{children:"In stock"})]}),me("tr",{children:[L("td",{children:L("img",{width:"30",height:"50",src:"https://picsum.photos/id/100/30/50",alt:"cover 2"})}),L("td",{children:L("a",{href:"",children:"Item 2.1"})}),L("td",{children:"15.99"}),L("td",{children:"Out of stock"})]}),me("tr",{children:[L("td",{children:L("img",{width:"30",height:"50",src:"https://picsum.photos/id/40/30/50",alt:"cover 3"})}),L("td",{children:L("a",{href:"",children:"Item 5.1"})}),L("td",{children:"14.23"}),L("td",{children:"In stock"})]}),me("tr",{children:[L("td",{children:L("img",{width:"30",height:"50",src:"https://picsum.photos/id/25/30/50",alt:"cover 4"})}),L("td",{children:L("a",{href:"",children:"Item 22"})}),L("td",{children:"10.11"}),L("td",{children:"In stock"})]})]}),L("tfoot",{children:me("tr",{children:[L("td",{colSpan:2,children:L("b",{children:"Total"})}),L("td",{colSpan:2,children:L("b",{children:"60.68"})})]})})]})]}),L("div",{children:L(t,{lang:"xml",children:`<table>
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
</table>`})})]})})}s(Ae,"Table");import{jsx as f,jsxs as A}from"https://esm.sh/react@19.2.6/jsx-runtime";function Re({theme:e}){let o=D();return A(p,{theme:e,children:[A("section",{className:"row",children:[A("div",{children:[A("p",{children:["You can mark any text, keyword or piece of information with the ",f("code",{children:"mark"})," html tag."]}),f("p",{children:f("mark",{children:"v15.20.30"})})]}),f("div",{children:f(t,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),A("section",{className:"row",children:[A("div",{children:[f("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),A("p",{children:[A("mark",{children:[A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),f("path",{d:"m9 12 2 2 4-4"})]}),f("span",{children:"released"})]}),A("mark",{children:[f("span",{children:"error"}),A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),f("path",{d:"m9 12 2 2 4-4"})]})]})]}),f("p",{children:A("small",{children:["You can learn more about icons ",f("a",{href:r.doc("icons",e,o),children:"here"}),"."]})})]}),f("div",{children:f(t,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),A("section",{className:"row",children:[A("div",{children:[A("p",{children:["You  can assign the ",f("code",{children:"primary"}),", ",f("code",{children:"secondary"}),", ",f("code",{children:"success"})," or ",f("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",f("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),A("p",{children:[f("mark",{className:"primary",children:"#theme"}),f("mark",{className:"secondary",children:"#second"}),f("mark",{className:"success",children:"Process OK"}),f("mark",{className:"error",children:"Error 400"})]}),A("p",{children:[f("mark",{className:"primary inverted",children:"#theme"}),f("mark",{className:"secondary inverted",children:"#second"}),f("mark",{className:"success inverted",children:"Process OK"}),f("mark",{className:"error inverted",children:"Error 400"})]}),f("p",{children:A("small",{children:["You can learn more about colors ",f("a",{href:r.doc("colors",e,o),children:"here"}),"."]})})]}),f("div",{children:f(t,{lang:"xml",children:`<!-- with or without -->
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
</mark>`})})]}),A("section",{className:"row",children:[A("div",{children:[A("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",f("code",{children:"group"})," role, they will be grouped together."]}),A("p",{role:"group",children:[f("mark",{children:"npm"}),f("mark",{className:"success",children:"1.0.3"}),f("mark",{className:"error",children:A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[f("path",{d:"M18 6 6 18"}),f("path",{d:"m6 6 12 12"})]})})]}),f("p",{children:A("small",{children:["You can learn more about groups ",f("a",{href:r.doc("groups",e,o),children:"here"}),"."]})})]}),f("div",{children:f(t,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]})]})}s(Re,"Tags");import{jsx as J,jsxs as ge}from"https://esm.sh/react@19.2.6/jsx-runtime";function We({theme:e}){return ge(p,{theme:e,children:[ge("section",{className:"row",children:[ge("div",{children:[J("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),J("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),ge("ul",{children:[J("li",{children:"Item 1"}),J("li",{children:"Item 2"}),ge("ol",{children:[J("li",{children:"Item 1"}),J("li",{children:"Item 2"})]})]})]}),J("div",{children:J(t,{lang:"xml",children:`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`})})]}),ge("section",{className:"row",children:[ge("div",{children:[ge("p",{children:["Definition lists are styled such that ",J("code",{children:"dd"})," elements are inlined compared to ",J("code",{children:"dt"})," elements."]}),ge("dl",{children:[J("dt",{children:"Coffee"}),J("dd",{children:"Black hot drink"}),J("dt",{children:"Milk"}),J("dd",{children:"White cold drink"})]})]}),J("div",{children:J(t,{lang:"xml",children:`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`})})]})]})}s(We,"Lists");import{useState as Ot}from"https://esm.sh/react@19.2.6";import{jsx as S,jsxs as Z}from"https://esm.sh/react@19.2.6/jsx-runtime";function Oe({theme:e}){let[o,a]=Ot("bread");return Z(p,{theme:e,children:[Z("section",{className:"row",children:[Z("div",{children:[S("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),Z("form",{children:[S("p",{children:S("b",{children:"Options"})}),Z("label",{htmlFor:"egg",children:[S("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),S("span",{children:"Egg"})]}),Z("label",{htmlFor:"cheese",children:[S("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),S("span",{children:"Cheese"})]}),Z("label",{htmlFor:"ham",children:[S("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),S("span",{children:"Ham"})]})]}),S("p",{children:"These work well even for complex, multi-line, checkboxes"}),Z("form",{children:[S("p",{children:S("b",{children:"Todos"})}),Z("label",{htmlFor:"friday",children:[S("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),Z("span",{children:[S("b",{children:"Friday"}),S("br",{}),S("span",{children:"- Order lunch"}),S("br",{}),S("span",{children:"- Go to work"}),S("span",{children:"- Eat lunch"})]})]}),Z("label",{htmlFor:"saturday",children:[S("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),Z("span",{children:[S("b",{children:"Saturday"}),S("br",{}),S("span",{children:"- Order lunch"}),S("br",{}),S("span",{children:"- Eat lunch"})]})]})]})]}),S("div",{children:S(t,{lang:"xml",children:`<form>
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
</form>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[S("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),Z("form",{children:[S("p",{children:S("b",{children:"Wrapping"})}),Z("label",{htmlFor:"bread",children:[S("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:o==="bread",onChange:E=>a(E.target.value)}),S("span",{children:"Bread"})]}),Z("label",{htmlFor:"salad",children:[S("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:o==="salad",onChange:E=>a(E.target.value)}),S("span",{children:"Salad"})]})]})]}),S("div",{children:S(t,{lang:"xml",children:`<form>
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
</form>`})})]})]})}s(Oe,"FormsCheckbox");import{jsx as oe,jsxs as xe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ge({theme:e}){return oe(p,{theme:e,children:xe("section",{className:"row",children:[xe("div",{children:[xe("p",{children:["A form can have all or part of its inputs set as ",oe("code",{children:"disabled"})," to prevent any user interaction."]}),oe("form",{children:xe("fieldset",{children:[oe("legend",{children:"Disabled form"}),xe("label",{htmlFor:"email",children:[oe("span",{children:"Email"}),oe("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),xe("label",{htmlFor:"address",children:[oe("span",{children:"Address"}),oe("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),xe("label",{htmlFor:"delivery",children:[oe("span",{children:"Delivery"}),xe("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[oe("option",{value:"fast",children:"Fast"}),oe("option",{value:"standard",children:"Standard"})]})]}),oe("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),oe("div",{children:oe(t,{lang:"xml",children:`<form>
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
</form>`})})]})})}s(Ge,"FormsDisabled");import{jsx as M,jsxs as P}from"https://esm.sh/react@19.2.6/jsx-runtime";function ze({theme:e}){return P(p,{theme:e,children:[P("section",{className:"row",children:[P("div",{children:[P("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",M("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),M("form",{children:P("div",{role:"group",children:[M("input",{id:"email",type:"email",placeholder:"Email"}),M("input",{type:"submit",value:"Subscribe"})]})})]}),M("div",{children:M(t,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),P("section",{className:"row",children:[P("div",{children:[M("p",{children:"This can be used to great effect for search inputs."}),M("form",{children:P("div",{role:"group",children:[M("button",{disabled:!0,children:P("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"m21 21-4.34-4.34"}),M("circle",{cx:"11",cy:"11",r:"8"})]})}),M("input",{type:"search",id:"search",placeholder:"Search"}),M("input",{type:"submit",value:"Search"})]})})]}),M("div",{children:M(t,{lang:"xml",children:`<form>
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
</form>`})})]}),P("section",{className:"row",children:[P("div",{children:[P("p",{children:["You can still wrap form elements inside a ",M("code",{children:"fieldset"})," with an appropriate ",M("code",{children:"legend"})," tag."]}),M("form",{children:P("fieldset",{children:[M("legend",{children:"Selection"}),P("div",{role:"group",children:[P("select",{id:"delivery",defaultValue:"fast",children:[M("option",{value:"fast",children:"Fast"}),M("option",{value:"standard",children:"Standard"})]}),M("input",{type:"date",id:"delivery-date"}),M("input",{type:"submit",value:"Confirm"})]})]})})]}),M("div",{children:M(t,{lang:"xml",children:`<form>
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
</form>`})})]}),P("section",{className:"row",children:[P("div",{children:[M("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),M("form",{children:P("div",{role:"group",children:[P("label",{htmlFor:"ch_1",children:[M("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),M("span",{children:"Check #1"})]}),P("label",{htmlFor:"ch_2",children:[M("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),M("span",{children:"Check #2"})]}),P("label",{htmlFor:"ch_3",children:[M("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),M("span",{children:"Check #3"})]})]})})]}),M("div",{children:M(t,{lang:"xml",children:`<form>
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
</form>`})})]})]})}s(ze,"FormsGrouped");import{useState as Gt}from"https://esm.sh/react@19.2.6";import{jsx as h,jsxs as B}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ye({theme:e}){let o=D(),[a,E]=Gt(50);return B(p,{theme:e,children:[B("section",{className:"row",children:[B("div",{children:[B("p",{children:["All ",h("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),B("form",{children:[B("label",{htmlFor:"email",children:[h("span",{children:"Email"}),h("input",{type:"email",placeholder:"Email Address",id:"email"})]}),B("label",{htmlFor:"password",children:[h("span",{children:"Password"}),h("input",{type:"password",id:"password",placeholder:"Password"})]}),h("input",{type:"submit",value:"Login"}),B("p",{children:["Don't have an account? ",h("a",{href:"",children:"Sign up"}),"."]})]})]}),h("div",{children:h(t,{lang:"xml",children:`<form>
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
</form>`})})]}),B("section",{className:"row",children:[B("div",{children:[h("p",{children:"Textareas are supported as well and by default they expand to fit the available horizontal space."}),B("form",{children:[h("textarea",{rows:4,id:"textarea",placeholder:"Write your comments..."}),h("input",{type:"submit",value:"Comment"})]})]}),h("div",{children:h(t,{lang:"xml",children:`<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>`})})]}),B("section",{className:"row",children:[B("div",{children:[h("p",{children:"Ranged inputs are also supported."}),B("form",{children:[B("label",{htmlFor:"volume",children:[h("span",{children:"Volume (range)"}),h("input",{type:"range",id:"volume",name:"volume",min:0,max:100,step:1,value:a,onChange:m=>E(Number(m.target.value))})]}),h("input",{type:"submit",value:"Tune"})]})]}),h("div",{children:h(t,{lang:"xml",children:`<form>
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
</form>`})})]}),h("section",{children:B("div",{className:"row",children:[B("div",{children:[B("p",{children:["If you want your forms to stand out more, you can wrap the inputs inside a ",h("code",{children:"fieldset"})," and assign a ",h("code",{children:"legend"}),"."]}),h("form",{children:B("fieldset",{children:[h("legend",{children:"Details"}),B("div",{className:"row disable-mobile",children:[h("div",{children:B("label",{htmlFor:"first-name",children:[h("span",{children:"First name"}),h("input",{type:"text",id:"first-name",placeholder:"First name"})]})}),h("div",{children:B("label",{htmlFor:"last-name",children:[h("span",{children:"Last name"}),h("input",{type:"text",id:"last-name",placeholder:"Last name"})]})})]}),B("div",{className:"row disable-mobile",children:[h("div",{children:B("label",{htmlFor:"delivery",children:[h("span",{children:"Delivery Time"}),B("select",{id:"delivery",defaultValue:"mornibgt",children:[h("option",{value:"morning",children:"Morning"}),h("option",{value:"evening",children:"Evening"})]})]})}),h("div",{children:B("label",{htmlFor:"delivery-date",children:[h("span",{children:"Delivery Date"}),h("input",{type:"date",id:"delivery-date"})]})})]}),B("blockquote",{className:"success",children:["Order total is ",h("b",{children:"$33.59"})]}),B("div",{className:"row disable-mobile",children:[h("div",{children:h("input",{type:"reset",className:"error",value:"Reset"})}),h("div",{}),h("div",{children:h("input",{type:"submit",value:"Confirm"})})]})]})}),h("p",{children:"You can make forms as simple or as complex as you want."}),B("p",{children:["In the example above we're separating inputs into two separate ",h("a",{href:r.doc("grid",e,o),children:"columns"}),", so we can pack more information in the same space."]}),B("p",{children:["We're also using ",h("a",{href:r.doc("blockquotes",e,o),children:"blockquotes"})," to highlight important information."]}),B("p",{children:["We're using both ",h("code",{children:"submit"})," and ",h("code",{children:"reset"})," type inputs. Please note these inputs are styled to look exactly like ",h("a",{href:r.doc("blockquotes",e,o),children:"buttons"}),"."]})]}),h("div",{children:h(t,{lang:"xml",children:`<form>
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
</form>`})})]})})]})}s(Ye,"FormsNormal");import{useState as pt}from"https://esm.sh/react@19.2.6";import{jsx as $,jsxs as X}from"https://esm.sh/react@19.2.6/jsx-runtime";function Pe({theme:e}){let[o,a]=pt("a"),[E,m]=pt(""),[v,de]=pt("");return X(p,{theme:e,children:[X("section",{className:"row",children:[X("div",{children:[X("p",{children:["Helper styles for form validation come out of the box for any ",$("code",{children:"input"})," and ",$("code",{children:"textarea"})," elements marked as ",$("b",{children:"required"}),"."]}),$("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),$("p",{children:"Empty inputs do not display error styles."}),X("p",{children:["Adjacent text elements with the ",$("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),$("form",{action:"",method:"post",children:X("fieldset",{children:[$("legend",{children:"Input"}),X("label",{htmlFor:"name",children:[$("span",{children:"Name"}),$("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:o,onChange:he=>a(he.target.value)}),$("span",{className:"error",children:$("small",{children:"Enter a name between 4 and 100 characters"})})]}),X("label",{htmlFor:"email",children:[$("span",{children:"Email"}),$("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:E,onChange:he=>m(he.target.value)})]}),X("label",{htmlFor:"comment",children:[$("span",{children:"Comment"}),$("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:v,onChange:he=>de(he.target.value)}),$("span",{className:"error",children:$("small",{children:"Enter a meaningful comment"})})]}),$("input",{type:"submit",value:"Submit"})]})})]}),$("div",{children:$(t,{lang:"xml",children:`<form action="/" method="post">
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
</form>`})})]}),X("section",{className:"row",children:[X("div",{children:[X("p",{children:["Inputs that present a more limited range of options to a user, such as ",$("code",{children:"select"}),", ",$("code",{children:"radio"})," and ",$("code",{children:"check"})," buttons, won't display a error styles but can be set as required."]}),$("form",{children:X("fieldset",{children:[$("legend",{children:"Countries"}),X("select",{id:"country",name:"country",required:!0,children:[$("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please select a country"}),$("option",{value:"uk",children:"United Kingdom"}),$("option",{value:"fr",children:"France"}),$("option",{value:"de",children:"Germany"})]}),X("label",{children:[$("input",{type:"checkbox",name:"terms",required:!0}),"I accept the terms and conditions"]}),$("input",{type:"submit",value:"Submit"})]})})]}),$("div",{children:$(t,{lang:"xml",children:`<form>
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
</form>`})})]})]})}s(Pe,"FormsValidation");import{useRef as zt}from"https://esm.sh/react@19.2.6";import{jsx as ee,jsxs as Ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function _e({theme:e}){let o=zt(null);return ee(p,{theme:e,children:Ve("section",{className:"row",children:[Ve("div",{children:[ee("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),ee("p",{children:"Click the button below to open the modal dialog."}),ee("p",{children:ee("button",{onClick:s(()=>o.current?.showModal(),"openDialog"),children:"Open modal"})}),ee(Yt,{ref:o})]}),ee("div",{children:ee(t,{lang:"xml",children:`<button id="openBtn">Open modal</button>

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
`})})]})})}s(_e,"Modal");function Yt(e){return Ve("dialog",{ref:e.ref,children:[ee("h2",{children:"Dialog"}),ee("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),ee("form",{method:"dialog",children:ee("div",{role:"group",children:Ve("div",{className:"row",children:[ee("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),ee("div",{}),ee("button",{value:"confirm",children:"Confirm"})]})})})]})}s(Yt,"DialogModal");import{jsx as i,jsxs as x}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ue({theme:e}){let o=D();return x(p,{theme:e,children:[x("section",{className:"row",children:[x("div",{children:[x("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",i("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:i("a",{href:"",children:"Item 1"})}),i("li",{children:i("a",{href:"",children:"Item 2"})}),i("li",{children:i("a",{href:"",children:"Item 3"})})]})}),i("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),x("li",{children:[x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("path",{d:"m10 8 4 4-4 4"})]}),i("span",{children:"More"})]}),x("ul",{children:[i("li",{children:i("a",{href:"",children:"Option 1"})}),i("li",{children:i("a",{href:"",children:"Option 2"})})]})]})]})}),x("p",{children:["Navigtion items may use the ",i("code",{children:"aria-selected"})," attribute to denote they are selected."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{"aria-selected":!0,children:i("a",{href:"",children:"Selected"})}),i("li",{children:i("a",{href:"",children:"Unselected"})})]})})]}),i("div",{children:i(t,{lang:"xml",children:`<header>
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
</header>`})})]}),x("section",{className:"row",children:[x("div",{children:[x("p",{children:["You can use other elements such as ",i("code",{children:"select"}),", ",i("code",{children:"input"}),", ",i("code",{children:"img"}),", etc to add more functionality to the navigation bar."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:x("select",{id:"selector",defaultValue:"opt-1",style:{minWidth:"100px"},children:[i("option",{value:"opt-1",children:"Val 1"}),i("option",{value:"opt-2",children:"Val 2"}),i("option",{value:"opt-3",children:"Val 3"})]})}),i("li",{children:i("input",{type:"search",placeholder:"Search ...",id:"search"})})]})}),i("br",{})]}),i("div",{children:i(t,{lang:"xml",children:`<li>
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
</li>`})})]}),x("section",{className:"row",children:[x("div",{children:[x("p",{children:["Navigation can be split into a left and a right section by placing an empty ",i("code",{children:"div"})," element to act as gap."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:i("a",{href:"",children:"Home"})}),i("li",{children:i("a",{href:"",children:"Menu"})}),i("div",{}),i("li",{children:i("a",{href:"",children:i("button",{children:"Download"})})}),i("li",{children:i("a",{href:"",children:i("button",{type:"reset",children:x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),i("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})}),i("br",{})]}),i("div",{children:i(t,{lang:"xml",children:`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`})})]}),x("section",{className:"row",children:[x("div",{children:[x("p",{children:["Navigation can be placed inside an ",i("code",{children:"article"})," to create a more striking display."]}),i("article",{children:i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),i("li",{children:i("input",{type:"search",placeholder:"Search..."})}),i("div",{}),i("li",{children:i("a",{href:"",children:i("button",{type:"reset",children:x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),i("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}),i("br",{})]}),i("div",{children:i(t,{lang:"xml",children:`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`})})]}),x("section",{className:"row",children:[x("div",{children:[i("p",{children:"Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout."}),x("figure",{children:[i("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-nav",e,o)}),i("figcaption",{children:"Showcase of navigation on a smaller device"})]})]}),i("div",{children:i(t,{lang:"xml",children:`<header>
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
</header>`})})]})]})}s(Ue,"Navigation");import{useState as Pt}from"https://esm.sh/react@19.2.6";import{Fragment as vt,jsx as N,jsxs as Q}from"https://esm.sh/react@19.2.6/jsx-runtime";function mt(){return Q(vt,{children:[N("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),N("p",{children:N("button",{children:"Discover"})})]})}s(mt,"Tab1");function ut(){return Q(vt,{children:[N("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),N("div",{children:N("blockquote",{children:"lorem ipsum install"})})]})}s(ut,"Tab2");function ht(){return N(vt,{children:N("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}s(ht,"Tab3");function je({theme:e}){let o=D(),[a,E]=Pt("tab-1");return Q(p,{theme:e,children:[Q("section",{className:"row",children:[Q("div",{children:[Q("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",N("code",{children:"<menu>"})," element ",N("b",{children:"outside"})," of a ",N("code",{children:"nav"})," element."]}),N("div",{className:"disable-mobile",children:Q("menu",{children:[N("li",{"aria-selected":a==="tab-1",children:Q("a",{onClick:()=>E("tab-1"),children:[Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),N("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),N("span",{children:"Home"})]})}),N("li",{"aria-selected":a==="tab-2",children:Q("a",{onClick:()=>E("tab-2"),children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:N("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),N("span",{children:"Install"})]})}),N("li",{"aria-selected":a==="tab-3",children:Q("a",{onClick:()=>E("tab-3"),children:[Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N("circle",{cx:"12",cy:"12",r:"10"}),N("path",{d:"M17 12h.01"}),N("path",{d:"M12 12h.01"}),N("path",{d:"M7 12h.01"})]}),N("span",{children:"More"})]})})]})}),Q("div",{children:[a==="tab-1"?N(mt,{}):null,a==="tab-2"?N(ut,{}):null,a==="tab-3"?N(ht,{}):null]})]}),N("div",{children:N(t,{lang:"xml",children:`<main>
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
</main>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[N("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),Q("figure",{children:[N("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-tabs-nav",e,o)}),N("figcaption",{children:"Showcase of tabbed navigation in a smaller container or device."})]})]}),N("div",{children:N(t,{lang:"xml",children:`<div className="row">
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
</div>`})})]})]})}s(je,"Tabs");import{jsx as R,jsxs as ae}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ke({theme:e}){let o=D();return ae(p,{theme:e,children:[ae("section",{className:"row",children:[ae("div",{children:[R("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),R("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),R("nav",{children:ae("menu",{className:"disable-mobile",children:[R("li",{"aria-selected":!0,children:ae("a",{href:"",children:[ae("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),R("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),R("span",{children:"Home"})]})}),R("li",{children:ae("a",{href:"",children:[ae("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R("path",{d:"M4 11a9 9 0 0 1 9 9"}),R("path",{d:"M4 4a16 16 0 0 1 16 16"}),R("circle",{cx:"5",cy:"19",r:"1"})]}),R("span",{children:"Latest"})]})}),R("li",{children:ae("a",{href:"",children:[ae("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[R("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),R("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),R("circle",{cx:"10",cy:"7",r:"4"})]}),R("span",{children:"Profile"})]})})]})})]}),R("div",{children:R(t,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",R("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),ae("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-menu",e,o)}),R("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),R("div",{children:R(t,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}s(Ke,"Menu");import{jsx as q,jsxs as le}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ze({theme:e}){return q(p,{theme:e,children:le("section",{className:"row",children:[le("div",{children:[q("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),le("p",{children:["By default you can add a ",q("b",{children:"meta"})," tag with the ",q("code",{children:"color-scheme"})," name and ",q("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),q("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),le("table",{children:[q("thead",{children:le("tr",{children:[q("th",{children:"Theme"}),q("th",{children:"Light"}),q("th",{children:"Dark"})]})}),le("tbody",{children:[le("tr",{children:[q("td",{children:"Default"}),q("td",{children:"\u2705"}),q("td",{children:"\u2705"})]}),le("tr",{children:[q("td",{children:"Blog"}),q("td",{children:"\u2705"}),q("td",{children:"\u2705"})]}),le("tr",{children:[q("td",{children:"App"}),q("td",{children:"\u2705"}),q("td",{children:"\u2705"})]}),le("tr",{children:[q("td",{children:"Delivery"}),q("td",{children:"\u2705"}),q("td",{children:"\u274C"})]}),le("tr",{children:[q("td",{children:"Landing"}),q("td",{children:"\u2705"}),q("td",{children:"\u274C"})]}),le("tr",{children:[q("td",{children:"Newsletter"}),q("td",{children:"\u2705"}),q("td",{children:"\u274C"})]})]})]})]}),q("div",{children:q(t,{lang:"xml",children:`<html>
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
</html>`})})]})})}s(Ze,"DarkMode");import{jsx as ie,jsxs as be}from"https://esm.sh/react@19.2.6/jsx-runtime";function Je({theme:e}){return be(p,{theme:e,children:[be("section",{className:"row",children:[be("div",{children:[ie("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),ie("p",{children:"When inside buttons the width & height is aligned to match the font size."}),ie("p",{children:be("button",{children:[be("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ie("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),ie("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),ie("span",{children:"Home"})]})})]}),ie("div",{children:ie(t,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),be("section",{className:"row",children:[be("div",{children:[ie("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),be("div",{role:"group",children:[be("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ie("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),ie("circle",{cx:"12",cy:"10",r:"3"})]}),ie("b",{children:"Test Address, SE11 8CL"})]})]}),ie("div",{children:ie(t,{lang:"xml",children:`<div role="group">
  <svg 
    width="20" 
    height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}s(Je,"Icons");import{jsx as H,jsxs as O}from"https://esm.sh/react@19.2.6/jsx-runtime";function Qe({theme:e}){let o=D();return O(p,{theme:e,children:[O("section",{className:"row",children:[O("div",{children:[H("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),O("p",{children:["The threshold between wide and narrow happens at ",H("b",{children:"600px"}),"."]}),H("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),O("figure",{children:[H("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-typography",e,o)}),O("figcaption",{children:["More information ",H("a",{href:r.doc("typography",e,o),children:"here"})]})]})]}),H("div",{children:H(t,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),O("section",{className:"row",children:[O("div",{children:[H("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),O("figure",{children:[H("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-nav",e,o)}),O("figcaption",{children:["More information ",H("a",{href:r.doc("navigation",e,o),children:"here"})," or ",H("a",{href:r.doc("tabs",e,o),children:"here"}),"."]})]})]}),H("div",{children:H(t,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a ...>...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),O("section",{className:"row",children:[O("div",{children:[H("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),O("figure",{children:[H("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-menu",e,o)}),O("figcaption",{children:["More information ",H("a",{href:r.doc("menu",e,o),children:"here"}),"."]})]})]}),H("div",{children:H(t,{lang:"xml",children:`<header>
  <menu>
    <li><a ...>...</a></li>
    ....
  </menu>
</header>`})})]}),O("section",{className:"row",children:[O("div",{children:[O("p",{children:["Finally, elements that have the ",H("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),O("figure",{children:[H("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-columns",e,o)}),O("figcaption",{children:["More information ",H("a",{href:r.doc("grid",e,o),children:"here"}),"."]})]})]}),H("div",{children:H(t,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),O("section",{className:"row",children:[O("div",{children:[O("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",H("code",{children:"disable-mobile"})," class."]}),O("p",{children:["You can also instruct elements to be hidden on mobile, via the ",H("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",H("code",{children:"hiden-on-desktop"})," class."]})]}),H("div",{})]})]})}s(Qe,"Mobile");import{jsx as d,jsxs as T}from"https://esm.sh/react@19.2.6/jsx-runtime";function Xe({theme:e}){let o=D();return T(p,{theme:e,children:[T("section",{className:"row",children:[T("div",{children:[T("p",{children:["By wrapping together a number of HTML elements inside an ",d("code",{children:"article"}),", you can create a basic card-type layout."]}),T("div",{className:"row disable-mobile",children:[d("div",{children:T("article",{children:[d("span",{children:d("b",{children:"Title"})}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),d("div",{children:T("article",{className:"success",children:[d("span",{children:d("b",{children:"Title"})}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),d("div",{children:d(t,{lang:"xml",children:`<article>
  <span>
    <b>Title</b>
  </span>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["Cards can wrap headings and paragraphs and can be styled with ",d("code",{children:"success"})," and ",d("code",{children:"error"})," classes."]}),T("div",{className:"row disable-mobile",children:[d("div",{children:T("article",{children:[d("h3",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),d("div",{children:T("article",{className:"error",children:[d("h3",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),d("p",{children:T("small",{children:["You can learn more about classes ",d("a",{href:r.doc("classes",e,o),children:"here"}),"."]})})]}),d("div",{children:d(t,{lang:"xml",children:`<article>
  <h3>Title</h3>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["The ",d("code",{children:"header"})," element of a card will be styled so it's more proeminent."]}),T("div",{className:"row disable-mobile",children:[d("div",{children:T("article",{children:[d("header",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),d("div",{children:T("article",{className:"success",children:[d("header",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),d("div",{children:d(t,{lang:"xml",children:`<article>
  <header>Title</header>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[d("p",{children:"Likewise, the first image tag used in a card will be styled as a header image."}),T("div",{className:"row disable-mobile",children:[d("div",{children:T("article",{children:[d("img",{height:"80",src:"https://picsum.photos/id/16/320/80",alt:"header image"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),d("div",{children:T("article",{className:"error",children:[d("img",{height:"80",src:"https://picsum.photos/id/16/420/80",alt:"header image"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),d("div",{children:d(t,{lang:"xml",children:`<article>
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[d("p",{children:"You can combine elements inside a card to produce quite compelx results, as the example below shows."}),d("p",{children:"By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML."}),T("article",{children:[d("img",{height:"160",src:"https://picsum.photos/id/16/480/160",alt:"header image"}),d("h4",{children:"Title"}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),d("p",{children:d("button",{children:"Button"})})]})]}),d("div",{children:d(t,{lang:"xml",children:`<article>
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
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[d("p",{children:"If we combine groups, columns and cards, we can experiment with even more daring layouts all while using just semantic HTML and minimal classes."}),T("article",{children:[d("div",{role:"group",children:T("div",{className:"row",children:[d("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"header image"}),T("div",{children:[d("b",{children:"Title"}),d("br",{}),d("span",{children:"Subtitle"})]})]})}),d("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),T("p",{children:[d("mark",{children:"v12.5.3"}),d("mark",{className:"success",children:"success"})]}),d("hr",{}),d("p",{children:d("button",{children:"Button"})})]}),d("p",{children:T("small",{children:["You can learn more about groups ",d("a",{href:r.doc("groups",e,o),children:"here"}),"."]})}),d("p",{children:T("small",{children:["You can learn more about columns ",d("a",{href:r.doc("grid",e,o),children:"here"}),"."]})})]}),d("div",{children:d(t,{lang:"xml",children:`<article>
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
</article>`})})]})]})}s(Xe,"Cards");import{jsx as u,jsxs as z}from"https://esm.sh/react@19.2.6/jsx-runtime";function et({theme:e}){return u(p,{theme:e,children:u("section",{children:z("div",{children:[z("p",{children:[kt," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),z("table",{children:[u("thead",{children:z("tr",{children:[u("th",{children:"Domain"}),u("th",{children:"Class"}),u("th",{children:"Effect"})]})}),z("tbody",{children:[z("tr",{children:[u("td",{rowSpan:3,children:"Containers"}),u("td",{children:u("code",{children:"container-medium"})}),u("td",{children:"Sets the maximum size of the container to 800px."})]}),z("tr",{children:[u("td",{children:u("code",{children:"container-narrow"})}),u("td",{children:"Sets the maximum size of the container to 1200px."})]}),z("tr",{children:[u("td",{children:u("code",{children:"container-wide"})}),u("td",{children:"Sets the maximum size of the container to 1600px."})]}),z("tr",{children:[u("td",{rowSpan:3,children:"Layout"}),u("td",{children:u("code",{children:"row"})}),u("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),z("tr",{children:[u("td",{children:u("code",{children:"col"})}),u("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),z("tr",{children:[u("td",{children:u("code",{children:"col-N"})}),z("td",{children:["Horizontal space is divided in 12 equal columns. From ",u("code",{children:"col-1"})," to ",u("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),z("tr",{children:[u("td",{rowSpan:3,children:"Mobile"}),u("td",{children:u("code",{children:"hide-on-mobile"})}),u("td",{children:"Hides an element if on small displays."})]}),z("tr",{children:[u("td",{children:u("code",{children:"hide-on-desktop"})}),u("td",{children:"Hides an element if on large displays."})]}),z("tr",{children:[u("td",{children:u("code",{children:"disable-mobile"})}),z("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",u("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),z("tr",{children:[u("td",{rowSpan:5,children:"Colors"}),u("td",{children:u("code",{children:"primary"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),z("tr",{children:[u("td",{children:u("code",{children:"secondary"})}),u("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),z("tr",{children:[u("td",{children:u("code",{children:"success"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),z("tr",{children:[u("td",{children:u("code",{children:"error"})}),u("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),z("tr",{children:[u("td",{children:u("code",{children:"inverted"})}),u("td",{children:"Takes any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),z("tr",{children:[u("td",{rowSpan:1,children:"Alignment"}),u("td",{children:u("code",{children:"align-center"})}),u("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}s(et,"Classes");import{jsx as g,jsxs as K}from"https://esm.sh/react@19.2.6/jsx-runtime";function tt({theme:e}){let o=D();return K(p,{theme:e,children:[K("section",{className:"row",children:[K("div",{children:[K("p",{children:["Any layout element, such as a ",g("code",{children:"div"})," or ",g("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",g("code",{children:"row"})," and ",g("code",{children:"col"})," classes."]}),K("article",{children:[K("div",{className:"row disable-mobile",children:[g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})}),g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})})]}),K("div",{className:"row disable-mobile",children:[g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})}),g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})}),g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})})]})]})]}),g("div",{children:g(t,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),K("section",{className:"row",children:[K("div",{children:[g("p",{children:"Like similar CSS libraries, a grid contains 12 columns."}),K("p",{children:["An element with class ",g("code",{children:"col-1"})," will span just one column, whilst an element with class ",g("code",{children:"col-4"})," will span 4 columns (or 33.333% of the available space) and an element with ",g("code",{children:"col-12"})," will span the whole width of the grid."]}),K("p",{children:["Grids can combine columns of multiple widths. The generic ",g("code",{children:"col"})," class will fill all available space."]}),g("article",{children:K("div",{className:"row disable-mobile",children:[g("div",{className:"col-2",children:g("code",{style:{width:"100%"},children:"col-2"})}),g("div",{className:"col",children:g("code",{style:{width:"100%"},children:"col"})}),g("div",{className:"col-6",children:g("code",{style:{width:"100%"},children:"col-6"})})]})})]}),g("div",{children:g(t,{lang:"xml",children:`<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`})})]}),K("section",{className:"row",children:[K("div",{children:[g("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),K("figure",{children:[g("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-columns",e,o)}),g("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),g("div",{children:g(t,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),K("section",{className:"row",children:[K("div",{children:[K("p",{children:["Finally, you can even omit the ",g("code",{children:"col"})," class entirely. A ",g("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",g("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",g("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),g("article",{children:K("div",{className:"row disable-mobile",children:[g("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"ssample image "}),g("div",{children:g("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),g("div",{children:g(t,{lang:"xml",children:`<div class="row">
  <p 
    width="80" 
    height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}s(tt,"Grids");import{jsx as V,jsxs as Ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function ot({theme:e}){return V(p,{theme:e,children:Ce("section",{className:"row",children:[Ce("div",{children:[V("p",{children:"There are three classes that allow you to set different content widths:"}),Ce("table",{children:[V("thead",{children:Ce("tr",{children:[V("th",{children:"Class"}),V("th",{children:"Width"}),V("th",{children:"Info"})]})}),Ce("tbody",{children:[Ce("tr",{children:[V("td",{children:V("code",{children:"container-narrow"})}),V("td",{children:"800px"}),V("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),Ce("tr",{children:[V("td",{children:V("code",{children:"container-medium"})}),V("td",{children:"1200px"}),V("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),Ce("tr",{children:[V("td",{children:V("code",{children:"container-wide"})}),V("td",{children:"1600px"}),V("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]})]})]}),V("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),V("div",{children:V(t,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}s(ot,"Containers");import{jsx as F,jsxs as _}from"https://esm.sh/react@19.2.6/jsx-runtime";function at({theme:e}){return _(p,{theme:e,children:[_("section",{className:"row",children:[_("div",{children:[_("p",{children:["Some elements are visually meant to ",F("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",F("code",{children:"group"})," role."]}),_("p",{children:["In the case of a group of ",F("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),_("p",{role:"group",children:[F("button",{children:"Option 1"}),F("button",{type:"reset",children:"Option 2"})]})]}),F("div",{children:F(t,{lang:"xml",children:`<p role="group">
  <button>
    Option 1
  </button>f
  <button type="reset">
    Option 2
  </button>
</p>`})})]}),_("section",{className:"row",children:[_("div",{children:[_("p",{children:["In the case of a group of ",F("code",{children:"marks"}),", they're also pulled together and have any vertical space dissapear."]}),_("p",{role:"group",children:[F("mark",{children:"#test"}),F("mark",{className:"success",children:"v1.0.0"})]})]}),F("div",{children:F(t,{lang:"xml",children:`<p role="group">
  <mark>
    #test
  </mark>
  <mark 
    class="success">
    v1.0.0
  </mark>
</p>`})})]}),_("section",{className:"row",children:[_("div",{children:[F("p",{children:"Grouping elements really shines in the case of forms and form inputs. You can see below an example of a compact login form."}),F("form",{children:_("div",{role:"group",children:[F("input",{id:"email",type:"email",placeholder:"Email"}),F("input",{id:"password",type:"password",placeholder:"Password"}),F("input",{type:"submit",value:"Login"})]})})]}),F("div",{children:F(t,{lang:"xml",children:`<form>
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
</form>`})})]}),_("section",{className:"row",children:[_("div",{children:[F("p",{children:"Grouping elements can be used to style icons and text together."}),_("div",{role:"group",children:[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[F("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),F("circle",{cx:"12",cy:"10",r:"3"})]}),F("b",{children:"Test Address, SE11 8CL"})]})]}),F("div",{children:F(t,{lang:"xml",children:`<div role="group">
  <svg 
    width="20" 
    height="20" ...>
  </svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]}),_("section",{className:"row",children:[_("div",{children:[F("p",{children:"Other elements, such as images, can also be grouped, although the impact isn't as pronounced."}),_("p",{role:"group",children:[F("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"image 1"}),F("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/120/120",alt:"image 2"})]})]}),F("div",{children:F(t,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}s(at,"Groups");import{jsx as re,jsxs as ue}from"https://esm.sh/react@19.2.6/jsx-runtime";function it({theme:e}){let o=D();return ue(p,{theme:e,children:[ue("section",{className:"row",children:[ue("div",{children:[ue("p",{children:["A ",re("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",re("code",{children:"nav"})," or ",re("code",{children:"menu"}),"):"]}),re("iframe",{scrolling:"no",width:"100%",height:275,src:r.example("layout-header-simple",e,o)})]}),re("div",{children:re(t,{lang:"xml",children:`<header>
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
</main>`})})]}),ue("section",{className:"row",children:[ue("div",{children:[ue("p",{children:['You create more complex "hero" layouts by placing any element, such as a ',re("code",{children:"div"}),", inside a header. Note that heroes are defined by the extra top and bottom padding child elements receive."]}),re("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-header-sub",e,o)})]}),re("div",{children:re(t,{lang:"xml",children:`<!-- nav header -->
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
</main>`})})]}),ue("section",{className:"row",children:[ue("div",{children:[ue("p",{children:["Finally, ",re("code",{children:"aside"}),' is another specialised element that can be used in a header in order to create a "banner" element, either to be placed at the top of the page or mid-content.']}),re("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-header-section",e,o)})]}),re("div",{children:re(t,{lang:"xml",children:`<main>
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
</main>`})})]})]})}s(it,"Header");import{jsx as G,jsxs as fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function rt({theme:e}){let o=D();return G(p,{theme:e,children:fe("section",{className:"row",children:[fe("div",{children:[fe("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",G("code",{children:"nav"})," element."]}),fe("p",{children:["As with unordered lists, you can denote the selected elment using the ",G("code",{children:"aria-selected"})," attribute."]}),G("nav",{className:"disable-mobile",children:fe("ol",{children:[G("li",{children:G("a",{href:"",children:"Home"})}),G("li",{children:G("a",{href:"",children:"Library"})}),G("li",{"aria-selected":!0,children:G("a",{href:"",children:"Data"})})]})}),G("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),G("nav",{className:"disable-mobile",children:fe("ol",{children:[G("li",{children:fe("a",{href:"",children:[fe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),G("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),G("span",{children:"Home"})]})}),G("li",{"aria-selected":!0,children:G("a",{href:"",children:"Folder"})})]})}),G("p",{children:"Finally, breadcrumbs are also responsive."}),fe("figure",{children:[G("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-breadcrumbs",e,o)}),G("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),G("div",{children:G(t,{lang:"xml",children:`<nav>
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
</nav>`})})]})})}s(rt,"Breadcrumbs");import{useState as Vt}from"https://esm.sh/react@19.2.6";import{jsx as U,jsxs as Le}from"https://esm.sh/react@19.2.6/jsx-runtime";function gt(){let[e,o]=Vt("tab-1");return U("main",{children:Le("div",{className:"row disable-mobile",children:[U("aside",{children:U("div",{children:Le("menu",{children:[U("li",{"aria-selected":e==="tab-1",children:Le("a",{onClick:()=>o("tab-1"),children:[Le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[U("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),U("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),U("span",{children:"Home"})]})}),U("li",{"aria-selected":e==="tab-2",children:Le("a",{onClick:()=>o("tab-2"),children:[U("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:U("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),U("span",{children:"Install"})]})}),U("li",{"aria-selected":e==="tab-3",children:Le("a",{onClick:()=>o("tab-3"),children:[Le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[U("circle",{cx:"12",cy:"12",r:"10"}),U("path",{d:"M17 12h.01"}),U("path",{d:"M12 12h.01"}),U("path",{d:"M7 12h.01"})]}),U("span",{children:"More"})]})})]})})}),Le("div",{style:{flexGrow:1},children:[e==="tab-1"?U(mt,{}):null,e==="tab-2"?U(ut,{}):null,e==="tab-3"?U(ht,{}):null]})]})})}s(gt,"MobileTabs");import{useState as _t}from"https://esm.sh/react@19.2.6";import{jsx as y,jsxs as Y}from"https://esm.sh/react@19.2.6/jsx-runtime";function st({theme:e}){let[o,a]=_t("primary");return y(p,{theme:e,children:Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["You can apply several color modes with the help of few classes like ",y("code",{children:"primary"}),", ",y("code",{children:"secondary"}),", ",y("code",{children:"success"})," and ",y("code",{children:"error"}),"."]}),Y("p",{children:["You can combine them with the ",y("code",{children:"inverted"})," class to change the colors of various components."]}),y("form",{children:Y("label",{children:[y("span",{children:y("b",{children:"Color mode"})}),Y("select",{onChange:s(m=>a(m.target.value),"onColorClassChange"),children:[y("option",{value:"primary",children:"Primary"}),y("option",{value:"secondary",children:"Secondary"}),y("option",{value:"success",children:"Success"}),y("option",{value:"error",children:"Error"})]})]})}),y("hr",{}),Y("section",{children:[Y("hgroup",{children:[Y("h1",{children:[y("span",{className:`${o}`,children:"Lorem ipsum dolor"}),y("br",{}),"sit amet"]}),Y("h4",{children:["Lorem ipsum dolor sit amet,",y("br",{}),y("span",{className:`${o} inverted`,children:"sed do amet"})]})]}),Y("p",{role:"group",children:[y("mark",{className:`${o}`,children:"v12.5.33"}),y("mark",{className:`${o} inverted`,children:"Passing"})]})]}),y("section",{children:y("form",{children:Y("div",{role:"group",className:`${o}`,children:[y("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),y("input",{type:"submit",value:"Subscribe"})]})})}),Y("section",{children:[Y("div",{className:"row",children:[Y("article",{className:`${o}`,children:[Y("hgroup",{children:[y("h4",{children:"Hobby"}),y("p",{children:y("b",{children:"Free"})})]}),y("p",{children:"Includes"}),Y("ul",{children:[y("li",{children:"No credit card"}),y("li",{children:"All platforms"})]})]}),Y("article",{className:`${o} inverted`,children:[Y("hgroup",{children:[y("h4",{children:"Enterprise"}),y("p",{children:y("b",{children:y("a",{href:"",children:"Contact us"})})})]}),y("p",{children:"Includes"}),Y("ul",{children:[y("li",{children:"Everything in Hobby"}),y("li",{children:"24/7 support"})]})]})]}),y("blockquote",{className:`${o}`,children:Y("hgroup",{children:[y("h4",{children:"More information"}),y("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),Y("p",{children:["Link ",y("a",{href:"",children:"here"}),"."]})]})})]})]}),y("div",{children:y(t,{lang:"xml",children:`...
<h1>
  <span class="${o}">
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
  <span class="${o} inverted">
    sed do amet
  </span>
</h4>

...

<p role="group">
  <mark class="${o}">
    v12.5.33 
  </mark>
  <mark class="${o} inverted">
    Passing
  </mark>
</p>

...

<form>
  <div class="group ${o}">
    <input .../>
    <input .../>
  </div>
</form>

...

<div class="row">
  <article class="${o}">
    ...
  </article>
  <article class="${o} inverted">
    ...
  </article>
</div>
<div class="row">
  <blockquote class="${o}>
    ...
  </blockquote>
</div>
`})})]})})}s(st,"Colors");import{jsx as Se,jsxs as Me}from"https://esm.sh/react@19.2.6/jsx-runtime";function nt({theme:e}){let o=D();return Me(p,{theme:e,children:[Me("section",{className:"row",children:[Me("div",{children:[Me("p",{children:["A ",Se("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),Se("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-footer-simple",e,o)})]}),Se("div",{children:Se(t,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer
    with a <a href="...">link</a>.
  </div>
</footer>`})})]}),Me("section",{className:"row",children:[Me("div",{children:[Se("p",{children:"More complex footers can contain information divided by columns, etc."}),Se("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-footer-complex",e,o)})]}),Se("div",{children:Se(t,{lang:"xml",children:`<footer>
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
</footer>`})})]})]})}s(nt,"Footer");import{jsx as $e,jsxs as bt}from"https://esm.sh/react@19.2.6/jsx-runtime";function lt({theme:e}){return $e(p,{theme:e,children:$e("section",{className:"row",children:bt("div",{children:[bt("p",{children:["You can add a loading indicator to an element by adding the ",$e("code",{children:'aria-busy="true"'})," attribute."]}),bt("p",{children:[$e("button",{"aria-busy":"true"}),$e("button",{"aria-busy":"true",role:"reset",children:"Loading"})]})]})})})}s(lt,"Loading");var r=class e{static{s(this,"RouteMaster")}static baseRoute="";static home(o,a){return`${e.getBase(a)}${o}/`}static showcase(o,a){return`${e.getBase(a)}${o}/showcases.html`}static doc(o,a,E){let m=e.getBase(E);switch(o){case"typography":return`${m}${a}/pages/docs/basics/${l(De)}`;case"buttons":return`${m}${a}/pages/docs/basics/${l(Ee)}`;case"blockquotes":return`${m}${a}/pages/docs/basics/${l(Be)}`;case"code":return`${m}${a}/pages/docs/basics/${l(qe)}`;case"figures":return`${m}${a}/pages/docs/basics/${l(Fe)}`;case"lists":return`${m}${a}/pages/docs/basics/${l(We)}`;case"links":return`${m}${a}/pages/docs/basics/${l(He)}`;case"summary":return`${m}${a}/pages/docs/basics/${l(Ie)}`;case"table":return`${m}${a}/pages/docs/basics/${l(Ae)}`;case"tags":return`${m}${a}/pages/docs/basics/${l(Re)}`;case"cards":return`${m}${a}/pages/docs/basics/${l(Xe)}`;case"forms-check":return`${m}${a}/pages/docs/forms/${l(Oe)}`;case"forms-disabled":return`${m}${a}/pages/docs/forms/${l(Ge)}`;case"forms-grouped":return`${m}${a}/pages/docs/forms/${l(ze)}`;case"forms-normal":return`${m}${a}/pages/docs/forms/${l(Ye)}`;case"forms-validation":return`${m}${a}/pages/docs/forms/${l(Pe)}`;case"header":return`${m}${a}/pages/docs/layout/${l(it)}`;case"footer":return`${m}${a}/pages/docs/layout/${l(nt)}`;case"groups":return`${m}${a}/pages/docs/layout/${l(at)}`;case"modal":return`${m}${a}/pages/docs/layout/${l(_e)}`;case"navigation":return`${m}${a}/pages/docs/navigation/${l(Ue)}`;case"breadcrumbs":return`${m}${a}/pages/docs/navigation/${l(rt)}`;case"tabs":return`${m}${a}/pages/docs/navigation/${l(je)}`;case"menu":return`${m}${a}/pages/docs/navigation/${l(Ke)}`;case"dark-mode":return`${m}${a}/pages/docs/extra/${l(Ze)}`;case"icons":return`${m}${a}/pages/docs/extra/${l(Je)}`;case"loading":return`${m}${a}/pages/docs/extra/${l(lt)}`;case"mobile":return`${m}${a}/pages/docs/extra/${l(Qe)}`;case"classes":return`${m}${a}/pages/docs/custom/${l(et)}`;case"grid":return`${m}${a}/pages/docs/custom/${l(tt)}`;case"containers":return`${m}${a}/pages/docs/custom/${l(ot)}`;case"colors":return`${m}${a}/pages/docs/custom/${l(st)}`;default:return"/"}}static getDocFromRoute(o){let E=o.split("/docs/").pop(),[m,v]=E?.split("/")??[];switch(m){case"basics":switch(v){case l(De):return"typography";case l(Ee):return"buttons";case l(Be):return"blockquotes";case l(qe):return"code";case l(Fe):return"figures";case l(He):return"links";case l(We):return"lists";case l(Ie):return"summary";case l(Ae):return"table";case l(Re):return"tags";case l(Xe):return"cards"}case"forms":switch(v){case l(Oe):return"forms-check";case l(Ge):return"forms-disabled";case l(ze):return"forms-grouped";case l(Ye):return"forms-normal";case l(Pe):return"forms-validation"}case"layout":switch(v){case l(it):return"header";case l(nt):return"footer";case l(at):return"groups";case l(_e):return"modal"}case"navigation":switch(v){case l(Ue):return"navigation";case l(rt):return"breadcrumbs";case l(je):return"tabs";case l(Ke):return"menu"}case"extra":switch(v){case l(Ze):return"dark-mode";case l(Je):return"icons";case l(lt):return"loading";case l(Qe):return"mobile"}case"custom":switch(v){case l(et):return"classes";case l(tt):return"grid";case l(ot):return"containers";case l(st):return"colors"}}}static example(o,a,E){let m=e.getBase(E);switch(o){case"desktop-menu":return`${m}${a}/pages/examples/${l(Tt)}`;case"layout-header-simple":return`${m}${a}/pages/examples/${l(Mt)}`;case"layout-header-sub":return`${m}${a}/pages/examples/${l($t)}`;case"layout-header-section":return`${m}${a}/pages/examples/${l(St)}`;case"layout-footer-simple":return`${m}${a}/pages/examples/${l(Ft)}`;case"layout-footer-complex":return`${m}${a}/pages/examples/${l(Ht)}`;case"mobile-columns":return`${m}${a}/pages/examples/${l(Et)}`;case"mobile-menu":return`${m}${a}/pages/examples/${l(Dt)}`;case"mobile-nav":return`${m}${a}/pages/examples/${l(Bt)}`;case"mobile-breadcrumbs":return`${m}${a}/pages/examples/${l(Nt)}`;case"mobile-tabs-nav":return`${m}${a}/pages/examples/${l(gt)}`;case"mobile-typography":return`${m}${a}/pages/examples/${l(qt)}`}}static showcases(o,a){return`${e.getBase(a)}showcase/${o}/${ft(o)}.html`}static showcaseImg(o,a,E="light"){return`${e.getBase(a)}showcase/${o}/${ft(o)}.${E}.png`}static getBase(o){return o?o===""?"/":`/${o}/`:"/"}};function l(e){return`${ft(e.name)}.html`}s(l,"htmlName");function ft(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}s(ft,"toKebabCase");import{jsx as I,jsxs as ye}from"https://esm.sh/react@19.2.6/jsx-runtime";function yt(){let e=Lt(),o=D(),a=s(E=>{let m=E.target.value;if(typeof window<"u"){let v=window.location.pathname;if(v.includes(e)){let de=v.replace(e,m);window.location.href=de}else if(v.includes(Ne)){let de=v.split("/"),he=de.indexOf(Ne)+1;de.splice(he,0,m);let At=de.join("/");window.location.href=At}else{let de=`/${m}${v}`;window.location.href=de}}},"onThemeChange");return I("nav",{children:ye("ul",{children:[I("li",{children:ye("a",{href:r.home(e,o),children:[ye("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),I("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),I("span",{children:"Home"})]})}),I("li",{children:ye("a",{href:r.showcase(e,o),children:[ye("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),I("circle",{cx:"12",cy:"12",r:"3"})]}),I("span",{children:"Showcase"})]})}),I("div",{}),I("li",{className:"hide-on-desktop",children:ye("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[ye("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),I("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),I("span",{children:"GitHub"})]})}),I("li",{children:ye("select",{name:"theme-selector",onChange:a,children:[I("option",{value:"default",selected:e==="default",children:"Default"}),I("option",{value:"blog",selected:e==="blog",children:"Blog"}),I("option",{value:"app",selected:e==="app",children:"App"}),I("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),I("option",{value:"landing",selected:e==="landing",children:"Landing"}),I("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),I("li",{className:"hide-on-mobile",children:I("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:I("button",{type:"reset",children:ye("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),I("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}s(yt,"TopNav");import{jsx as wt,jsxs as Ut}from"https://esm.sh/react@19.2.6/jsx-runtime";function xt({theme:e,children:o}){return Ut(Ct,{value:e,children:[wt("header",{children:wt(yt,{})}),wt("main",{children:o})]})}s(xt,"HomeLayout");import{jsx as n,jsxs as ne}from"https://esm.sh/react@19.2.6/jsx-runtime";function p({theme:e,children:o}){let a=D(),[E,m]=It(!1),[v,de]=It(void 0);return jt(()=>{if(typeof window<"u"){let he=r.getDocFromRoute(window.location.pathname);de(he)}},[]),n(xt,{theme:e,children:ne("div",{className:"row",children:[ne("aside",{children:[ne("div",{className:"hide-on-desktop",role:"group",children:[ne("div",{className:"row",children:[n("div",{children:n("button",{onClick:()=>m(!E),children:E?ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M18 6 6 18"}),n("path",{d:"m6 6 12 12"})]}):ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n("path",{d:"M7 8h10"}),n("path",{d:"M7 12h10"}),n("path",{d:"M7 16h10"})]})})}),n("span",{children:n("b",{children:"Chapters"})})]}),n("hr",{})]}),ne("div",{className:E===!1||E===void 0?"hide-on-mobile":"",children:[ne("menu",{children:[n("b",{children:"Basics"}),n("li",{"aria-selected":v==="typography",children:n("a",{href:r.doc("typography",e,a),children:"Typography"})}),n("li",{"aria-selected":v==="buttons",children:n("a",{href:r.doc("buttons",e,a),children:"Buttons"})}),n("li",{"aria-selected":v==="tags",children:n("a",{href:r.doc("tags",e,a),children:"Tags"})}),n("li",{"aria-selected":v==="lists",children:n("a",{href:r.doc("lists",e,a),children:"Lists"})}),n("li",{"aria-selected":v==="links",children:n("a",{href:r.doc("links",e,a),children:"Links"})}),n("li",{"aria-selected":v==="blockquotes",children:n("a",{href:r.doc("blockquotes",e,a),children:"Blokquotes"})}),n("li",{"aria-selected":v==="summary",children:n("a",{href:r.doc("summary",e,a),children:"Summary"})}),n("li",{"aria-selected":v==="code",children:n("a",{href:r.doc("code",e,a),children:"Code"})}),n("li",{"aria-selected":v==="table",children:n("a",{href:r.doc("table",e,a),children:"Table"})}),n("li",{"aria-selected":v==="figures",children:n("a",{href:r.doc("figures",e,a),children:"Figures"})}),n("li",{"aria-selected":v==="cards",children:n("a",{href:r.doc("cards",e,a),children:"Cards"})})]}),ne("menu",{children:[n("b",{children:"Forms"}),n("li",{"aria-selected":v==="forms-normal",children:n("a",{href:r.doc("forms-normal",e,a),children:"Normal"})}),n("li",{"aria-selected":v==="forms-check",children:n("a",{href:r.doc("forms-check",e,a),children:"Checks & Radios"})}),n("li",{"aria-selected":v==="forms-grouped",children:n("a",{href:r.doc("forms-grouped",e,a),children:"Grouped"})}),n("li",{"aria-selected":v==="forms-disabled",children:n("a",{href:r.doc("forms-disabled",e,a),children:"Disabled"})}),n("li",{"aria-selected":v==="forms-validation",children:n("a",{href:r.doc("forms-validation",e,a),children:"Validation"})})]}),ne("menu",{children:[n("b",{children:"Layout"}),n("li",{"aria-selected":v==="header",children:n("a",{href:r.doc("header",e,a),children:"Headers"})}),n("li",{"aria-selected":v==="footer",children:n("a",{href:r.doc("footer",e,a),children:"Footers"})}),n("li",{"aria-selected":v==="groups",children:n("a",{href:r.doc("groups",e,a),children:"Groups"})}),n("li",{"aria-selected":v==="modal",children:n("a",{href:r.doc("modal",e,a),children:"Modal"})})]}),ne("menu",{children:[n("b",{children:"Navigation"}),n("li",{"aria-selected":v==="navigation",children:n("a",{href:r.doc("navigation",e,a),children:"Basic"})}),n("li",{"aria-selected":v==="breadcrumbs",children:n("a",{href:r.doc("breadcrumbs",e,a),children:"Breadcrumbs"})}),n("li",{"aria-selected":v==="menu",children:n("a",{href:r.doc("menu",e,a),children:"Menu"})}),n("li",{"aria-selected":v==="tabs",children:n("a",{href:r.doc("tabs",e,a),children:"Tabs"})})]}),ne("menu",{children:[n("b",{children:"Extra"}),n("li",{"aria-selected":v==="dark-mode",children:n("a",{href:r.doc("dark-mode",e,a),children:"Dark Mode"})}),n("li",{"aria-selected":v==="icons",children:n("a",{href:r.doc("icons",e,a),children:"Icons"})}),n("li",{"aria-selected":v==="loading",children:n("a",{href:r.doc("loading",e,a),children:"Loading"})}),n("li",{"aria-selected":v==="mobile",children:n("a",{href:r.doc("mobile",e,a),children:"Mobile"})})]}),ne("menu",{children:[n("b",{children:"Custom"}),n("li",{"aria-selected":v==="grid",children:n("a",{href:r.doc("grid",e,a),children:"Grids"})}),n("li",{"aria-selected":v==="containers",children:n("a",{href:r.doc("containers",e,a),children:"Containers"})}),n("li",{"aria-selected":v==="colors",children:n("a",{href:r.doc("colors",e,a),children:"Colors"})}),n("li",{"aria-selected":v==="classes",children:n("a",{href:r.doc("classes",e,a),children:"Classes"})})]})]})]}),n("div",{children:o})]})})}s(p,"DocLayout");export{D as a,p as b,Ee as c,De as d,Be as e,qe as f,Fe as g,He as h,Ie as i,Ae as j,Re as k,We as l,Oe as m,Ge as n,ze as o,Ye as p,Pe as q,_e as r,Ue as s,je as t,Ke as u,Ze as v,Je as w,Qe as x,Xe as y,et as z,tt as A,ot as B,at as C,it as D,rt as E,gt as F,st as G,nt as H,lt as I,r as J,yt as K,xt as L};
