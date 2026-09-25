import{a as Mt}from"./chunk-OJJZ7I35.js";import{a as $t}from"./chunk-6GSCAXFL.js";import{a as Dt}from"./chunk-5FO5LKGV.js";import{a as Et}from"./chunk-BFLHTRDP.js";import{a as St}from"./chunk-KVSCSCQE.js";import{a as Lt}from"./chunk-ASN7Q573.js";import{a as xt}from"./chunk-M6F2RLSF.js";import{a as kt}from"./chunk-KT2LLLXB.js";import{a as Nt}from"./chunk-IZYG7KBP.js";import{a as Tt}from"./chunk-E42SUDRF.js";import{b as ft,c as yt,d as wt,e as t}from"./chunk-BC44PYCY.js";import{a as Se}from"./chunk-7AZBNJU6.js";import{a as Ct}from"./chunk-VAA7G7I3.js";import{useEffect as Pt,useState as Bt}from"https://esm.sh/react@19.2.0";import{useState as Ft,useEffect as Ht}from"https://esm.sh/react@19.2.0";function D(){let[e,o]=Ft(void 0);return Ht(()=>{if(typeof window<"u"){let E=window.location.pathname.includes(Se)?Se:"";o(E)}},[]),e}import{jsx as d,jsxs as C}from"https://esm.sh/react@19.2.0/jsx-runtime";function Me({theme:e}){let o=D();return C(c,{theme:e,children:[C("section",{className:"row",children:[C("div",{children:[C("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",d("code",{children:"reset"})," type buttons)."]}),C("p",{children:[d("button",{children:"Button"}),d("button",{type:"reset",children:"Button"})]})]}),d("div",{children:d(t,{lang:"xml",children:`<button>Button</button>
<button type="reset">
  Button
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["Both types can be marked as ",d("code",{children:"disabled"}),", meaning no interaction will be possible with them."]}),C("p",{children:[d("button",{disabled:!0,children:"Disabled"}),d("button",{type:"reset",disabled:!0,children:"Disabled"})]})]}),d("div",{children:d(t,{lang:"xml",children:`<button disabled>
  Button
</button>
<button 
  type="reset" 
  disabled>
  Button
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[d("p",{children:"Buttons can be improved by adding svg icons, either to the left or to the right of the main button title."}),C("p",{children:[C("button",{children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),d("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),d("span",{children:"Home"})]}),C("button",{type:"reset",children:[d("span",{children:"Play"}),C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M21 4v16"}),d("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]}),d("p",{children:C("small",{children:["You can learn more about icons ",d("a",{href:r.doc("icons",e,o),children:"here"}),"."]})})]}),d("div",{children:d(t,{lang:"xml",children:`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[d("p",{children:"You can even create icon-only buttons by completely omitting the title."}),C("p",{children:[d("button",{children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M4 11a9 9 0 0 1 9 9"}),d("path",{d:"M4 4a16 16 0 0 1 16 16"}),d("circle",{cx:"5",cy:"19",r:"1"})]})}),d("button",{type:"reset",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),d("circle",{cx:"12",cy:"12",r:"4"})]})})]})]}),d("div",{children:d(t,{lang:"xml",children:`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["By default, buttons are styled using the ",d("b",{children:"primary"})," color, which impacts their background, border or text color. You can change that by applying classes like ",d("code",{children:"secondary"}),", ",d("code",{children:"success"})," or ",d("code",{children:"error"}),"."]}),C("p",{children:[d("button",{className:"secondary",children:"Action"}),d("button",{className:"success",children:"Confirm"}),C("button",{type:"reset",className:"error",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M18 6 6 18"}),d("path",{d:"m6 6 12 12"})]}),d("span",{children:"Cancel"})]})]}),d("p",{children:C("small",{children:["You can learn more about colors ",d("a",{href:r.doc("colors",e,o),children:"here"}),"."]})})]}),d("div",{children:d(t,{lang:"xml",children:`<button
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
</button>`})})]}),C("section",{className:"row",children:[C("div",{children:[C("p",{children:["Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",d("code",{children:"group"})," role."]}),C("p",{role:"group",children:[d("button",{children:"Button 1"}),d("button",{type:"reset",children:"Button 2"}),d("button",{type:"reset",children:"Button 3"})]}),C("p",{role:"group",children:[d("button",{type:"reset",children:d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}),d("button",{type:"reset",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M7 10v12"}),d("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}),d("button",{children:C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M12 2v13"}),d("path",{d:"m16 6-4-4-4 4"}),d("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})]})})]}),C("p",{role:"group",children:[d("button",{type:"reset",children:"Prev"}),d("button",{type:"reset",children:"1"}),d("button",{type:"reset",children:"2"}),d("button",{type:"reset",children:"3"}),d("button",{type:"reset",children:"Next"})]}),d("p",{children:C("small",{children:["You can learn more about groups ",d("a",{href:r.doc("groups",e,o),children:"here"}),"."]})})]}),d("div",{children:d(t,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}import{jsx as g,jsxs as te}from"https://esm.sh/react@19.2.0/jsx-runtime";function $e({theme:e}){return te(c,{theme:e,children:[te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Typography is based purely on ",g("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),g("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),g("div",{children:g(t,{lang:"xml",children:`<p>
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
</p>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["To all sorts of text modifiers, like ",g("code",{children:"b"}),", ",g("code",{children:"i"}),", ",g("code",{children:"em"})," tags and many more."]}),g("p",{children:g("i",{children:"italic"})}),g("p",{children:g("em",{children:"emphasized"})}),g("p",{children:g("dfn",{children:"definition"})}),g("p",{children:g("cite",{children:"citation"})}),g("p",{children:g("b",{children:"bold"})}),g("p",{children:g("strong",{children:"strong"})}),g("p",{children:g("del",{children:"deleted"})}),g("p",{children:g("s",{children:"corrected"})}),g("p",{children:g("u",{children:"underlined"})}),g("p",{children:g("q",{children:"quotation"})})]}),g("div",{children:g(t,{lang:"xml",children:`<i>italic</i>
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
<sup>supescript</sup>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Finally, it supports all six ",g("code",{children:"heading"})," types."]}),g("h1",{children:"Heading 1"}),g("h2",{children:"Heading 2"}),g("h3",{children:"Heading 3"}),g("h4",{children:"Heading 4"}),g("h5",{children:"Heading 5"}),g("h6",{children:"Heading 6"})]}),g("div",{children:g(t,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["As well as the ability to group headings and associated content with ",g("code",{children:"hgroup"}),"."]}),te("hgroup",{children:[g("h1",{children:"Heading 1"}),g("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),g("div",{children:g(t,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}import{jsx as w,jsxs as U}from"https://esm.sh/react@19.2.0/jsx-runtime";function Ee({theme:e}){let o=D();return U(c,{theme:e,children:[U("section",{className:"row",children:[U("div",{children:[w("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),w("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),w("div",{children:w(t,{lang:"xml",children:`<blockquote>
  Lorem ipsum ...
</blockquote>`})})]}),U("section",{className:"row",children:[U("div",{children:[w("p",{children:"It's not just text that can be included in a blockquote element, but code, icons, and many other elements."}),w("blockquote",{children:U("p",{children:["Press ",w("kbd",{children:"Ctrl + Q"})," to quit"]})}),w("blockquote",{children:U("hgroup",{children:[U("p",{role:"group",children:[U("svg",{xmlns:" http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w("circle",{cx:"12",cy:"12",r:"10"}),w("path",{d:"M12 16v-4"}),w("path",{d:"M12 8h.01"})]}),w("span",{children:"Information"})]}),U("p",{children:["Your package will be delivered on ",w("b",{children:"Tuesday at 08:00."})]})]})}),w("p",{children:U("small",{children:["You can learn more about groups ",w("a",{href:r.doc("groups",e,o),children:"here"})," and about icons ",w("a",{href:r.doc("icons",e,o),children:"here"}),"."]})})]}),w("div",{children:w(t,{lang:"xml",children:`<blockquote>
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
</blockquote>`})})]}),U("section",{className:"row",children:[U("div",{children:[U("p",{children:["Blockquotes can also be styled using the ",w("code",{children:"success"}),", ",w("code",{children:"error"}),", ",w("code",{children:"primary"})," and ",w("code",{children:"secondary"})," classes."]}),w("blockquote",{className:"success",children:U("hgroup",{children:[w("h4",{children:"Success"}),w("p",{children:"The operation was completed successfully"})]})}),w("blockquote",{className:"error",children:U("hgroup",{children:[w("p",{children:"Unknown error"}),w("p",{children:U("code",{children:["Server responsed with ",w("b",{children:"Error 500"})]})})]})}),w("blockquote",{className:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),w("blockquote",{className:"secondary",children:w("hgroup",{children:U("hgroup",{children:[w("h4",{children:"Title"}),w("p",{children:"Important Information"}),w("p",{children:w("button",{children:"Click me"})})]})})}),w("hgroup",{children:w("p",{children:U("small",{children:["You can learn more about colors ",w("a",{href:r.doc("colors",e,o),children:"here"}),"."]})})})]}),w("div",{children:w(t,{lang:"xml",children:`<blockquote class="success">
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
</blockquote>`})})]})]})}import{jsx as de,jsxs as Ne}from"https://esm.sh/react@19.2.0/jsx-runtime";function De({theme:e}){return de(c,{theme:e,children:de("section",{children:Ne("div",{className:"row",children:[Ne("div",{children:[de("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),Ne("p",{children:["Inline code ",de("code",{children:"console.log('abc')"})]}),Ne("p",{children:["Keyboard shortcut ",de("kbd",{children:"Ctrl + S"})]}),Ne("figure",{children:[de(t,{lang:"xml",children:"console.log('abc')"}),de("figcaption",{children:"Code block"})]}),Ne("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",de("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",de("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),de("div",{children:de(t,{lang:"xml",children:`<p>
  Inline code <code>...</code>
</p>
<p>
  Keyboard shortcut 
  <kbd>...</kbd>
</p>
<pre>
  <code>....</code>
</pre>`})})]})})})}import{jsx as se,jsxs as he}from"https://esm.sh/react@19.2.0/jsx-runtime";function Be({theme:e}){return he(c,{theme:e,children:[he("section",{className:"row",children:[he("div",{children:[se("p",{children:"Figures can contain a single image and an associated caption."}),he("figure",{children:[se("img",{width:"640",height:"480",src:"https://picsum.photos/id/16/640/480",alt:"ssample image "}),se("figcaption",{children:"Sample caption"})]})]}),se("div",{children:se(t,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),he("section",{className:"row",children:[he("div",{children:[se("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),he("figure",{children:[he("figure",{children:[se("img",{width:"200",height:"240",src:"https://picsum.photos/id/16/200/240",alt:"first image"}),se("figcaption",{children:"Caption for the first image"})]}),he("figure",{children:[se("img",{width:"240",height:"240",src:"https://picsum.photos/id/16/240/240",alt:"second image"}),se("figcaption",{children:"Caption for the second image"})]}),se("figcaption",{children:"Caption for the figure group"})]})]}),se("div",{children:se(t,{lang:"xml",children:`<figure>
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
</figure>`})})]})]})}import{jsx as ce,jsxs as nt}from"https://esm.sh/react@19.2.0/jsx-runtime";function qe({theme:e}){return ce(c,{theme:e,children:nt("section",{className:"row",children:[nt("div",{children:[ce("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),nt("ul",{children:[ce("li",{children:ce("a",{href:"",children:"website.com"})}),ce("li",{children:ce("a",{href:"",children:"email@test.com"})}),ce("li",{children:ce("a",{href:"",children:"/#location"})})]})]}),ce("div",{children:ce(t,{lang:"xml",children:`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location>
  /#location
</a>
`})})]})})}import{jsx as k,jsxs as R}from"https://esm.sh/react@19.2.0/jsx-runtime";function Fe({theme:e}){let o=D();return R(c,{theme:e,children:[R("section",{className:"row",children:[R("div",{children:[k("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),R("details",{children:[k("summary",{children:"Info"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),R("details",{children:[k("summary",{children:"More info Info"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),k("div",{children:k(t,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),R("section",{className:"row",children:[R("div",{children:[R("p",{children:["This basic summary can be placed inside an ",k("code",{children:"article"})," and combined with the ",k("code",{children:"primary"}),", ",k("code",{children:"success"})," or ",k("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),k("article",{children:R("details",{open:!0,children:[k("summary",{children:"Note"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),k("article",{className:"primary",children:R("details",{children:[k("summary",{children:"Info"}),R("p",{children:["Larn more ",k("a",{href:"",children:"here"})]})]})}),k("article",{className:"success",children:R("details",{children:[k("summary",{children:"Success"}),R("p",{children:["Operation finished ",k("code",{children:"OK"})]})]})}),k("article",{className:"error",children:R("details",{children:[k("summary",{children:"Error"}),R("div",{children:[k("p",{children:"Unknown error occurred"}),k("hr",{}),k("button",{children:"Acknowledge"})]})]})}),k("p",{children:R("small",{children:["You can learn more about colors ",k("a",{href:r.doc("colors",e,o),children:"here"})," and cards ",k("a",{href:r.doc("cards",e,o),children:"here"}),"."]})})]}),k("div",{children:k(t,{lang:"xml",children:`<article>
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
</article>`})})]}),R("section",{className:"row",children:[R("div",{children:[R("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",k("code",{children:"article"}),", you can form an accordion menu:"]}),R("article",{children:[R("details",{name:"menu",children:[k("summary",{children:"Option 1"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),R("details",{name:"menu",open:!0,children:[k("summary",{children:"Option 2"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),R("details",{name:"menu",children:[k("summary",{children:"Option 3"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),k("div",{children:k(t,{lang:"xml",children:`
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
</article>`})})]})]})}import{jsx as L,jsxs as pe}from"https://esm.sh/react@19.2.0/jsx-runtime";function He({theme:e}){return L(c,{theme:e,children:pe("section",{className:"row",children:[pe("div",{children:[L("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),pe("table",{children:[L("thead",{children:pe("tr",{children:[L("th",{children:"Cover"}),L("th",{children:"Item"}),L("th",{children:"Value"}),L("th",{children:"Comment"})]})}),pe("tbody",{children:[pe("tr",{children:[L("td",{children:L("img",{width:"30",height:"50",src:"https://picsum.photos/id/16/30/50",alt:"cover 1"})}),L("td",{children:L("a",{href:"",children:"Item 1.1"})}),L("td",{children:"20.35"}),L("td",{children:"In stock"})]}),pe("tr",{children:[L("td",{children:L("img",{width:"30",height:"50",src:"https://picsum.photos/id/100/30/50",alt:"cover 2"})}),L("td",{children:L("a",{href:"",children:"Item 2.1"})}),L("td",{children:"15.99"}),L("td",{children:"Out of stock"})]}),pe("tr",{children:[L("td",{children:L("img",{width:"30",height:"50",src:"https://picsum.photos/id/40/30/50",alt:"cover 3"})}),L("td",{children:L("a",{href:"",children:"Item 5.1"})}),L("td",{children:"14.23"}),L("td",{children:"In stock"})]}),pe("tr",{children:[L("td",{children:L("img",{width:"30",height:"50",src:"https://picsum.photos/id/25/30/50",alt:"cover 4"})}),L("td",{children:L("a",{href:"",children:"Item 22"})}),L("td",{children:"10.11"}),L("td",{children:"In stock"})]})]}),L("tfoot",{children:pe("tr",{children:[L("td",{colSpan:2,children:L("b",{children:"Total"})}),L("td",{colSpan:2,children:L("b",{children:"60.68"})})]})})]})]}),L("div",{children:L(t,{lang:"xml",children:`<table>
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
</table>`})})]})})}import{jsx as b,jsxs as I}from"https://esm.sh/react@19.2.0/jsx-runtime";function Ie({theme:e}){let o=D();return I(c,{theme:e,children:[I("section",{className:"row",children:[I("div",{children:[I("p",{children:["You can mark any text, keyword or piece of information with the ",b("code",{children:"mark"})," html tag."]}),b("p",{children:b("mark",{children:"v15.20.30"})})]}),b("div",{children:b(t,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),I("section",{className:"row",children:[I("div",{children:[b("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),I("p",{children:[I("mark",{children:[I("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),b("path",{d:"m9 12 2 2 4-4"})]}),b("span",{children:"released"})]}),I("mark",{children:[b("span",{children:"error"}),I("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),b("path",{d:"m9 12 2 2 4-4"})]})]})]}),b("p",{children:I("small",{children:["You can learn more about icons ",b("a",{href:r.doc("icons",e,o),children:"here"}),"."]})})]}),b("div",{children:b(t,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),I("section",{className:"row",children:[I("div",{children:[I("p",{children:["You  can assign the ",b("code",{children:"primary"}),", ",b("code",{children:"secondary"}),", ",b("code",{children:"success"})," or ",b("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",b("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),I("p",{children:[b("mark",{className:"primary",children:"#theme"}),b("mark",{className:"secondary",children:"#second"}),b("mark",{className:"success",children:"Process OK"}),b("mark",{className:"error",children:"Error 400"})]}),I("p",{children:[b("mark",{className:"primary inverted",children:"#theme"}),b("mark",{className:"secondary inverted",children:"#second"}),b("mark",{className:"success inverted",children:"Process OK"}),b("mark",{className:"error inverted",children:"Error 400"})]}),b("p",{children:I("small",{children:["You can learn more about colors ",b("a",{href:r.doc("colors",e,o),children:"here"}),"."]})})]}),b("div",{children:b(t,{lang:"xml",children:`<!-- with or without -->
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
</mark>`})})]}),I("section",{className:"row",children:[I("div",{children:[I("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",b("code",{children:"group"})," role, they will be grouped together."]}),I("p",{role:"group",children:[b("mark",{children:"npm"}),b("mark",{className:"success",children:"1.0.3"}),b("mark",{className:"error",children:I("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[b("path",{d:"M18 6 6 18"}),b("path",{d:"m6 6 12 12"})]})})]}),b("p",{children:I("small",{children:["You can learn more about groups ",b("a",{href:r.doc("groups",e,o),children:"here"}),"."]})})]}),b("div",{children:b(t,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]})]})}import{jsx as Z,jsxs as ve}from"https://esm.sh/react@19.2.0/jsx-runtime";function Ae({theme:e}){return ve(c,{theme:e,children:[ve("section",{className:"row",children:[ve("div",{children:[Z("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),Z("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),ve("ul",{children:[Z("li",{children:"Item 1"}),Z("li",{children:"Item 2"}),ve("ol",{children:[Z("li",{children:"Item 1"}),Z("li",{children:"Item 2"})]})]})]}),Z("div",{children:Z(t,{lang:"xml",children:`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`})})]}),ve("section",{className:"row",children:[ve("div",{children:[ve("p",{children:["Definition lists are styled such that ",Z("code",{children:"dd"})," elements are inlined compared to ",Z("code",{children:"dt"})," elements."]}),ve("dl",{children:[Z("dt",{children:"Coffee"}),Z("dd",{children:"Black hot drink"}),Z("dt",{children:"Milk"}),Z("dd",{children:"White cold drink"})]})]}),Z("div",{children:Z(t,{lang:"xml",children:`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`})})]})]})}import{useState as It}from"https://esm.sh/react@19.2.0";import{jsx as S,jsxs as K}from"https://esm.sh/react@19.2.0/jsx-runtime";function Re({theme:e}){let[o,a]=It("bread");return K(c,{theme:e,children:[K("section",{className:"row",children:[K("div",{children:[S("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),K("form",{children:[S("p",{children:S("b",{children:"Options"})}),K("label",{htmlFor:"egg",children:[S("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),S("span",{children:"Egg"})]}),K("label",{htmlFor:"cheese",children:[S("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),S("span",{children:"Cheese"})]}),K("label",{htmlFor:"ham",children:[S("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),S("span",{children:"Ham"})]})]}),S("p",{children:"These work well even for complex, multi-line, checkboxes"}),K("form",{children:[S("p",{children:S("b",{children:"Todos"})}),K("label",{htmlFor:"friday",children:[S("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),K("span",{children:[S("b",{children:"Friday"}),S("br",{}),S("span",{children:"- Order lunch"}),S("br",{}),S("span",{children:"- Go to work"}),S("span",{children:"- Eat lunch"})]})]}),K("label",{htmlFor:"saturday",children:[S("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),K("span",{children:[S("b",{children:"Saturday"}),S("br",{}),S("span",{children:"- Order lunch"}),S("br",{}),S("span",{children:"- Eat lunch"})]})]})]})]}),S("div",{children:S(t,{lang:"xml",children:`<form>
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
</form>`})})]}),K("section",{className:"row",children:[K("div",{children:[S("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),K("form",{children:[S("p",{children:S("b",{children:"Wrapping"})}),K("label",{htmlFor:"bread",children:[S("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:o==="bread",onChange:E=>a(E.target.value)}),S("span",{children:"Bread"})]}),K("label",{htmlFor:"salad",children:[S("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:o==="salad",onChange:E=>a(E.target.value)}),S("span",{children:"Salad"})]})]})]}),S("div",{children:S(t,{lang:"xml",children:`<form>
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
</form>`})})]})]})}import{jsx as oe,jsxs as we}from"https://esm.sh/react@19.2.0/jsx-runtime";function We({theme:e}){return oe(c,{theme:e,children:we("section",{className:"row",children:[we("div",{children:[we("p",{children:["A form can have all or part of its inputs set as ",oe("code",{children:"disabled"})," to prevent any user interaction."]}),oe("form",{children:we("fieldset",{children:[oe("legend",{children:"Disabled form"}),we("label",{htmlFor:"email",children:[oe("span",{children:"Email"}),oe("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),we("label",{htmlFor:"address",children:[oe("span",{children:"Address"}),oe("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),we("label",{htmlFor:"delivery",children:[oe("span",{children:"Delivery"}),we("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[oe("option",{value:"fast",children:"Fast"}),oe("option",{value:"standard",children:"Standard"})]})]}),oe("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),oe("div",{children:oe(t,{lang:"xml",children:`<form>
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
</form>`})})]})})}import{jsx as M,jsxs as z}from"https://esm.sh/react@19.2.0/jsx-runtime";function Oe({theme:e}){return z(c,{theme:e,children:[z("section",{className:"row",children:[z("div",{children:[z("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",M("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),M("form",{children:z("div",{role:"group",children:[M("input",{id:"email",type:"email",placeholder:"Email"}),M("input",{type:"submit",value:"Subscribe"})]})})]}),M("div",{children:M(t,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),z("section",{className:"row",children:[z("div",{children:[M("p",{children:"This can be used to great effect for search inputs."}),M("form",{children:z("div",{role:"group",children:[M("button",{disabled:!0,children:z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"m21 21-4.34-4.34"}),M("circle",{cx:"11",cy:"11",r:"8"})]})}),M("input",{type:"search",id:"search",placeholder:"Search"}),M("input",{type:"submit",value:"Search"})]})})]}),M("div",{children:M(t,{lang:"xml",children:`<form>
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
</form>`})})]}),z("section",{className:"row",children:[z("div",{children:[z("p",{children:["You can still wrap form elements inside a ",M("code",{children:"fieldset"})," with an appropriate ",M("code",{children:"legend"})," tag."]}),M("form",{children:z("fieldset",{children:[M("legend",{children:"Selection"}),z("div",{role:"group",children:[z("select",{id:"delivery",defaultValue:"fast",children:[M("option",{value:"fast",children:"Fast"}),M("option",{value:"standard",children:"Standard"})]}),M("input",{type:"date",id:"delivery-date"}),M("input",{type:"submit",value:"Confirm"})]})]})})]}),M("div",{children:M(t,{lang:"xml",children:`<form>
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
</form>`})})]}),z("section",{className:"row",children:[z("div",{children:[M("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),M("form",{children:z("div",{role:"group",children:[z("label",{htmlFor:"ch_1",children:[M("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),M("span",{children:"Check #1"})]}),z("label",{htmlFor:"ch_2",children:[M("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),M("span",{children:"Check #2"})]}),z("label",{htmlFor:"ch_3",children:[M("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),M("span",{children:"Check #3"})]})]})})]}),M("div",{children:M(t,{lang:"xml",children:`<form>
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
</form>`})})]})]})}import{useState as At}from"https://esm.sh/react@19.2.0";import{jsx as u,jsxs as B}from"https://esm.sh/react@19.2.0/jsx-runtime";function Ge({theme:e}){let o=D(),[a,E]=At(50);return B(c,{theme:e,children:[B("section",{className:"row",children:[B("div",{children:[B("p",{children:["All ",u("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),B("form",{children:[B("label",{htmlFor:"email",children:[u("span",{children:"Email"}),u("input",{type:"email",placeholder:"Email Address",id:"email"})]}),B("label",{htmlFor:"password",children:[u("span",{children:"Password"}),u("input",{type:"password",id:"password",placeholder:"Password"})]}),u("input",{type:"submit",value:"Login"}),B("p",{children:["Don't have an account? ",u("a",{href:"",children:"Sign up"}),"."]})]})]}),u("div",{children:u(t,{lang:"xml",children:`<form>
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
</form>`})})]}),B("section",{className:"row",children:[B("div",{children:[u("p",{children:"Textareas are supported as well and by default they expand to fit the available horizontal space."}),B("form",{children:[u("textarea",{rows:4,id:"textarea",placeholder:"Write your comments..."}),u("input",{type:"submit",value:"Comment"})]})]}),u("div",{children:u(t,{lang:"xml",children:`<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>`})})]}),B("section",{className:"row",children:[B("div",{children:[u("p",{children:"Ranged inputs are also supported."}),B("form",{children:[B("label",{htmlFor:"volume",children:[u("span",{children:"Volume (range)"}),u("input",{type:"range",id:"volume",name:"volume",min:0,max:100,step:1,value:a,onChange:p=>E(Number(p.target.value))})]}),u("input",{type:"submit",value:"Tune"})]})]}),u("div",{children:u(t,{lang:"xml",children:`<form>
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
</form>`})})]}),u("section",{children:B("div",{className:"row",children:[B("div",{children:[B("p",{children:["If you want your forms to stand out more, you can wrap the inputs inside a ",u("code",{children:"fieldset"})," and assign a ",u("code",{children:"legend"}),"."]}),u("form",{children:B("fieldset",{children:[u("legend",{children:"Details"}),B("div",{className:"row disable-mobile",children:[u("div",{children:B("label",{htmlFor:"first-name",children:[u("span",{children:"First name"}),u("input",{type:"text",id:"first-name",placeholder:"First name"})]})}),u("div",{children:B("label",{htmlFor:"last-name",children:[u("span",{children:"Last name"}),u("input",{type:"text",id:"last-name",placeholder:"Last name"})]})})]}),B("div",{className:"row disable-mobile",children:[u("div",{children:B("label",{htmlFor:"delivery",children:[u("span",{children:"Delivery Time"}),B("select",{id:"delivery",defaultValue:"mornibgt",children:[u("option",{value:"morning",children:"Morning"}),u("option",{value:"evening",children:"Evening"})]})]})}),u("div",{children:B("label",{htmlFor:"delivery-date",children:[u("span",{children:"Delivery Date"}),u("input",{type:"date",id:"delivery-date"})]})})]}),B("blockquote",{className:"success",children:["Order total is ",u("b",{children:"$33.59"})]}),B("div",{className:"row disable-mobile",children:[u("div",{children:u("input",{type:"reset",className:"error",value:"Reset"})}),u("div",{}),u("div",{children:u("input",{type:"submit",value:"Confirm"})})]})]})}),u("p",{children:"You can make forms as simple or as complex as you want."}),B("p",{children:["In the example above we're separating inputs into two separate ",u("a",{href:r.doc("grid",e,o),children:"columns"}),", so we can pack more information in the same space."]}),B("p",{children:["We're also using ",u("a",{href:r.doc("blockquotes",e,o),children:"blockquotes"})," to highlight important information."]}),B("p",{children:["We're using both ",u("code",{children:"submit"})," and ",u("code",{children:"reset"})," type inputs. Please note these inputs are styled to look exactly like ",u("a",{href:r.doc("blockquotes",e,o),children:"buttons"}),"."]})]}),u("div",{children:u(t,{lang:"xml",children:`<form>
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
</form>`})})]})})]})}import{useState as lt}from"https://esm.sh/react@19.2.0";import{jsx as $,jsxs as X}from"https://esm.sh/react@19.2.0/jsx-runtime";function ze({theme:e}){let[o,a]=lt("a"),[E,p]=lt(""),[h,le]=lt("");return X(c,{theme:e,children:[X("section",{className:"row",children:[X("div",{children:[X("p",{children:["Helper styles for form validation come out of the box for any ",$("code",{children:"input"})," and ",$("code",{children:"textarea"})," elements marked as ",$("b",{children:"required"}),"."]}),$("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),$("p",{children:"Empty inputs do not display error styles."}),X("p",{children:["Adjacent text elements with the ",$("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),$("form",{action:"",method:"post",children:X("fieldset",{children:[$("legend",{children:"Input"}),X("label",{htmlFor:"name",children:[$("span",{children:"Name"}),$("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:o,onChange:ue=>a(ue.target.value)}),$("span",{className:"error",children:$("small",{children:"Enter a name between 4 and 100 characters"})})]}),X("label",{htmlFor:"email",children:[$("span",{children:"Email"}),$("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:E,onChange:ue=>p(ue.target.value)})]}),X("label",{htmlFor:"comment",children:[$("span",{children:"Comment"}),$("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:h,onChange:ue=>le(ue.target.value)}),$("span",{className:"error",children:$("small",{children:"Enter a meaningful comment"})})]}),$("input",{type:"submit",value:"Submit"})]})})]}),$("div",{children:$(t,{lang:"xml",children:`<form action="/" method="post">
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
</form>`})})]})]})}import{useRef as Rt}from"https://esm.sh/react@19.2.0";import{jsx as ee,jsxs as Ye}from"https://esm.sh/react@19.2.0/jsx-runtime";function Pe({theme:e}){let o=Rt(null);return ee(c,{theme:e,children:Ye("section",{className:"row",children:[Ye("div",{children:[ee("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),ee("p",{children:"Click the button below to open the modal dialog."}),ee("p",{children:ee("button",{onClick:()=>o.current?.showModal(),children:"Open modal"})}),ee(Wt,{ref:o})]}),ee("div",{children:ee(t,{lang:"xml",children:`<button id="openBtn">Open modal</button>

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
`})})]})})}function Wt(e){return Ye("dialog",{ref:e.ref,children:[ee("h2",{children:"Dialog"}),ee("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),ee("form",{method:"dialog",children:ee("div",{role:"group",children:Ye("div",{className:"row",children:[ee("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),ee("div",{}),ee("button",{value:"confirm",children:"Confirm"})]})})})]})}import{jsx as i,jsxs as x}from"https://esm.sh/react@19.2.0/jsx-runtime";function Ve({theme:e}){let o=D();return x(c,{theme:e,children:[x("section",{className:"row",children:[x("div",{children:[x("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",i("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:i("a",{href:"",children:"Item 1"})}),i("li",{children:i("a",{href:"",children:"Item 2"})}),i("li",{children:i("a",{href:"",children:"Item 3"})})]})}),i("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),i("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),i("span",{children:"Home"})]})}),i("li",{children:x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),i("path",{d:"m18 15 4-4"}),i("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),i("span",{children:"Docs"})]})}),x("li",{children:[x("a",{href:"",children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("path",{d:"m10 8 4 4-4 4"})]}),i("span",{children:"More"})]}),x("ul",{children:[i("li",{children:i("a",{href:"",children:"Option 1"})}),i("li",{children:i("a",{href:"",children:"Option 2"})})]})]})]})}),x("p",{children:["Navigtion items may use the ",i("code",{children:"aria-selected"})," attribute to denote they are selected."]}),i("nav",{className:"disable-mobile",children:x("ul",{children:[i("li",{"aria-selected":!0,children:i("a",{href:"",children:"Selected"})}),i("li",{children:i("a",{href:"",children:"Unselected"})})]})})]}),i("div",{children:i(t,{lang:"xml",children:`<header>
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
</header>`})})]})]})}import{useState as Ot}from"https://esm.sh/react@19.2.0";import{Fragment as mt,jsx as N,jsxs as J}from"https://esm.sh/react@19.2.0/jsx-runtime";function dt(){return J(mt,{children:[N("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),N("p",{children:N("button",{children:"Discover"})})]})}function ct(){return J(mt,{children:[N("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),N("div",{children:N("blockquote",{children:"lorem ipsum install"})})]})}function pt(){return N(mt,{children:N("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}function _e({theme:e}){let o=D(),[a,E]=Ot("tab-1");return J(c,{theme:e,children:[J("section",{className:"row",children:[J("div",{children:[J("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",N("code",{children:"<menu>"})," element ",N("b",{children:"outside"})," of a ",N("code",{children:"nav"})," element."]}),N("div",{className:"disable-mobile",children:J("menu",{children:[N("li",{"aria-selected":a==="tab-1",children:J("a",{onClick:()=>E("tab-1"),children:[J("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),N("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),N("span",{children:"Home"})]})}),N("li",{"aria-selected":a==="tab-2",children:J("a",{onClick:()=>E("tab-2"),children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:N("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),N("span",{children:"Install"})]})}),N("li",{"aria-selected":a==="tab-3",children:J("a",{onClick:()=>E("tab-3"),children:[J("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N("circle",{cx:"12",cy:"12",r:"10"}),N("path",{d:"M17 12h.01"}),N("path",{d:"M12 12h.01"}),N("path",{d:"M7 12h.01"})]}),N("span",{children:"More"})]})})]})}),J("div",{children:[a==="tab-1"?N(dt,{}):null,a==="tab-2"?N(ct,{}):null,a==="tab-3"?N(pt,{}):null]})]}),N("div",{children:N(t,{lang:"xml",children:`<main>
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
</main>`})})]}),J("section",{className:"row",children:[J("div",{children:[N("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),J("figure",{children:[N("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-tabs-nav",e,o)}),N("figcaption",{children:"Showcase of tabbed navigation in a smaller container or device."})]})]}),N("div",{children:N(t,{lang:"xml",children:`<div className="row">
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
</div>`})})]})]})}import{jsx as A,jsxs as ae}from"https://esm.sh/react@19.2.0/jsx-runtime";function Ue({theme:e}){let o=D();return ae(c,{theme:e,children:[ae("section",{className:"row",children:[ae("div",{children:[A("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),A("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),A("nav",{children:ae("menu",{className:"disable-mobile",children:[A("li",{"aria-selected":!0,children:ae("a",{href:"",children:[ae("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),A("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),A("span",{children:"Home"})]})}),A("li",{children:ae("a",{href:"",children:[ae("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A("path",{d:"M4 11a9 9 0 0 1 9 9"}),A("path",{d:"M4 4a16 16 0 0 1 16 16"}),A("circle",{cx:"5",cy:"19",r:"1"})]}),A("span",{children:"Latest"})]})}),A("li",{children:ae("a",{href:"",children:[ae("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),A("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),A("circle",{cx:"10",cy:"7",r:"4"})]}),A("span",{children:"Profile"})]})})]})})]}),A("div",{children:A(t,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",A("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),ae("figure",{children:[A("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-menu",e,o)}),A("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),A("div",{children:A(t,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}import{jsx as f,jsxs as Q}from"https://esm.sh/react@19.2.0/jsx-runtime";function je({theme:e}){return f(c,{theme:e,children:Q("section",{className:"row",children:[Q("div",{children:[f("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),Q("p",{children:["By default you can add a ",f("b",{children:"meta"})," tag with the ",f("code",{children:"color-scheme"})," name and ",f("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),f("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),Q("table",{children:[f("thead",{children:Q("tr",{children:[f("th",{children:"Theme"}),f("th",{children:"Light"}),f("th",{children:"Dark"})]})}),Q("tbody",{children:[Q("tr",{children:[f("td",{children:"Default"}),f("td",{children:"\u2705"}),f("td",{children:"\u2705"})]}),Q("tr",{children:[f("td",{children:"App"}),f("td",{children:"\u2705"}),f("td",{children:"\u2705"})]}),Q("tr",{children:[f("td",{children:"Writing"}),f("td",{children:"\u2705"}),f("td",{children:"\u2705"})]}),Q("tr",{children:[f("td",{children:"Scholar"}),f("td",{children:"\u2705"}),f("td",{children:"\u2705"})]}),Q("tr",{children:[f("td",{children:"Bold"}),f("td",{children:"\u2705"}),f("td",{children:"\u274C"})]}),Q("tr",{children:[f("td",{children:"Sunset"}),f("td",{children:"\u2705"}),f("td",{children:"\u274C"})]}),Q("tr",{children:[f("td",{children:"Sunset"}),f("td",{children:"\u2705"}),f("td",{children:"\u274C"})]}),Q("tr",{children:[f("td",{children:"Green"}),f("td",{children:"\u274C"}),f("td",{children:"\u2705"})]}),Q("tr",{children:[f("td",{children:"Betty"}),f("td",{children:"\u274C"}),f("td",{children:"\u2705"})]}),Q("tr",{children:[f("td",{children:"Gold"}),f("td",{children:"\u274C"}),f("td",{children:"\u2705"})]})]})]})]}),f("div",{children:f(t,{lang:"xml",children:`<html>
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
</html>`})})]})})}import{jsx as ie,jsxs as ge}from"https://esm.sh/react@19.2.0/jsx-runtime";function Ke({theme:e}){return ge(c,{theme:e,children:[ge("section",{className:"row",children:[ge("div",{children:[ie("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),ie("p",{children:"When inside buttons the width & height is aligned to match the font size."}),ie("p",{children:ge("button",{children:[ge("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ie("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),ie("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),ie("span",{children:"Home"})]})})]}),ie("div",{children:ie(t,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),ge("section",{className:"row",children:[ge("div",{children:[ie("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),ge("div",{role:"group",children:[ge("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ie("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),ie("circle",{cx:"12",cy:"10",r:"3"})]}),ie("b",{children:"Test Address, SE11 8CL"})]})]}),ie("div",{children:ie(t,{lang:"xml",children:`<div role="group">
  <svg 
    width="20" 
    height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}import{jsx as F,jsxs as W}from"https://esm.sh/react@19.2.0/jsx-runtime";function Ze({theme:e}){let o=D();return W(c,{theme:e,children:[W("section",{className:"row",children:[W("div",{children:[F("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),W("p",{children:["The threshold between wide and narrow happens at ",F("b",{children:"600px"}),"."]}),F("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),W("figure",{children:[F("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-typography",e,o)}),W("figcaption",{children:["More information ",F("a",{href:r.doc("typography",e,o),children:"here"})]})]})]}),F("div",{children:F(t,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),W("section",{className:"row",children:[W("div",{children:[F("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),W("figure",{children:[F("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-nav",e,o)}),W("figcaption",{children:["More information ",F("a",{href:r.doc("navigation",e,o),children:"here"})," or ",F("a",{href:r.doc("tabs",e,o),children:"here"}),"."]})]})]}),F("div",{children:F(t,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a ...>...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),W("section",{className:"row",children:[W("div",{children:[F("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),W("figure",{children:[F("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-menu",e,o)}),W("figcaption",{children:["More information ",F("a",{href:r.doc("menu",e,o),children:"here"}),"."]})]})]}),F("div",{children:F(t,{lang:"xml",children:`<header>
  <menu>
    <li><a ...>...</a></li>
    ....
  </menu>
</header>`})})]}),W("section",{className:"row",children:[W("div",{children:[W("p",{children:["Finally, elements that have the ",F("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),W("figure",{children:[F("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-columns",e,o)}),W("figcaption",{children:["More information ",F("a",{href:r.doc("grid",e,o),children:"here"}),"."]})]})]}),F("div",{children:F(t,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),W("section",{className:"row",children:[W("div",{children:[W("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",F("code",{children:"disable-mobile"})," class."]}),W("p",{children:["You can also instruct elements to be hidden on mobile, via the ",F("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",F("code",{children:"hiden-on-desktop"})," class."]})]}),F("div",{})]})]})}import{jsx as l,jsxs as T}from"https://esm.sh/react@19.2.0/jsx-runtime";function Je({theme:e}){let o=D();return T(c,{theme:e,children:[T("section",{className:"row",children:[T("div",{children:[T("p",{children:["By wrapping together a number of HTML elements inside an ",l("code",{children:"article"}),", you can create a basic card-type layout."]}),T("div",{className:"row disable-mobile",children:[l("div",{children:T("article",{children:[l("span",{children:l("b",{children:"Title"})}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),l("div",{children:T("article",{className:"success",children:[l("span",{children:l("b",{children:"Title"})}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),l("div",{children:l(t,{lang:"xml",children:`<article>
  <span>
    <b>Title</b>
  </span>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["Cards can wrap headings and paragraphs and can be styled with ",l("code",{children:"success"})," and ",l("code",{children:"error"})," classes."]}),T("div",{className:"row disable-mobile",children:[l("div",{children:T("article",{children:[l("h3",{children:"Title"}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),l("div",{children:T("article",{className:"error",children:[l("h3",{children:"Title"}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),l("p",{children:T("small",{children:["You can learn more about classes ",l("a",{href:r.doc("classes",e,o),children:"here"}),"."]})})]}),l("div",{children:l(t,{lang:"xml",children:`<article>
  <h3>Title</h3>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["The ",l("code",{children:"header"})," element of a card will be styled so it's more proeminent."]}),T("div",{className:"row disable-mobile",children:[l("div",{children:T("article",{children:[l("header",{children:"Title"}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),l("div",{children:T("article",{className:"success",children:[l("header",{children:"Title"}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),l("div",{children:l(t,{lang:"xml",children:`<article>
  <header>Title</header>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[l("p",{children:"Likewise, the first image tag used in a card will be styled as a header image."}),T("div",{className:"row disable-mobile",children:[l("div",{children:T("article",{children:[l("img",{height:"80",src:"https://picsum.photos/id/16/320/80",alt:"header image"}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),l("div",{children:T("article",{className:"error",children:[l("img",{height:"80",src:"https://picsum.photos/id/16/420/80",alt:"header image"}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),l("div",{children:l(t,{lang:"xml",children:`<article>
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[l("p",{children:"You can combine elements inside a card to produce quite compelx results, as the example below shows."}),l("p",{children:"By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML."}),T("article",{children:[l("img",{height:"160",src:"https://picsum.photos/id/16/480/160",alt:"header image"}),l("h4",{children:"Title"}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),l("p",{children:l("button",{children:"Button"})})]})]}),l("div",{children:l(t,{lang:"xml",children:`<article>
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
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[l("p",{children:"If we combine groups, columns and cards, we can experiment with even more daring layouts all while using just semantic HTML and minimal classes."}),T("article",{children:[l("div",{role:"group",children:T("div",{className:"row",children:[l("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"header image"}),T("div",{children:[l("b",{children:"Title"}),l("br",{}),l("span",{children:"Subtitle"})]})]})}),l("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),T("p",{children:[l("mark",{children:"v12.5.3"}),l("mark",{className:"success",children:"success"})]}),l("hr",{}),l("p",{children:l("button",{children:"Button"})})]}),l("p",{children:T("small",{children:["You can learn more about groups ",l("a",{href:r.doc("groups",e,o),children:"here"}),"."]})}),l("p",{children:T("small",{children:["You can learn more about columns ",l("a",{href:r.doc("grid",e,o),children:"here"}),"."]})})]}),l("div",{children:l(t,{lang:"xml",children:`<article>
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
</article>`})})]})]})}import{jsx as m,jsxs as G}from"https://esm.sh/react@19.2.0/jsx-runtime";function Qe({theme:e}){return m(c,{theme:e,children:m("section",{children:G("div",{children:[G("p",{children:[ft," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),G("table",{children:[m("thead",{children:G("tr",{children:[m("th",{children:"Domain"}),m("th",{children:"Class"}),m("th",{children:"Effect"})]})}),G("tbody",{children:[G("tr",{children:[m("td",{rowSpan:3,children:"Containers"}),m("td",{children:m("code",{children:"container-medium"})}),m("td",{children:"Sets the maximum size of the container to 800px."})]}),G("tr",{children:[m("td",{children:m("code",{children:"container-narrow"})}),m("td",{children:"Sets the maximum size of the container to 1200px."})]}),G("tr",{children:[m("td",{children:m("code",{children:"container-wide"})}),m("td",{children:"Sets the maximum size of the container to 1600px."})]}),G("tr",{children:[m("td",{rowSpan:3,children:"Layout"}),m("td",{children:m("code",{children:"row"})}),m("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),G("tr",{children:[m("td",{children:m("code",{children:"col"})}),m("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),G("tr",{children:[m("td",{children:m("code",{children:"col-N"})}),G("td",{children:["Horizontal space is divided in 12 equal columns. From ",m("code",{children:"col-1"})," to ",m("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),G("tr",{children:[m("td",{rowSpan:3,children:"Mobile"}),m("td",{children:m("code",{children:"hide-on-mobile"})}),m("td",{children:"Hides an element if on small displays."})]}),G("tr",{children:[m("td",{children:m("code",{children:"hide-on-desktop"})}),m("td",{children:"Hides an element if on large displays."})]}),G("tr",{children:[m("td",{children:m("code",{children:"disable-mobile"})}),G("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",m("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),G("tr",{children:[m("td",{rowSpan:5,children:"Colors"}),m("td",{children:m("code",{children:"primary"})}),m("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),G("tr",{children:[m("td",{children:m("code",{children:"secondary"})}),m("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),G("tr",{children:[m("td",{children:m("code",{children:"success"})}),m("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),G("tr",{children:[m("td",{children:m("code",{children:"error"})}),m("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),G("tr",{children:[m("td",{children:m("code",{children:"inverted"})}),m("td",{children:"Takes any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),G("tr",{children:[m("td",{rowSpan:1,children:"Alignment"}),m("td",{children:m("code",{children:"align-center"})}),m("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}import{jsx as v,jsxs as j}from"https://esm.sh/react@19.2.0/jsx-runtime";function Xe({theme:e}){let o=D();return j(c,{theme:e,children:[j("section",{className:"row",children:[j("div",{children:[j("p",{children:["Any layout element, such as a ",v("code",{children:"div"})," or ",v("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",v("code",{children:"row"})," and ",v("code",{children:"col"})," classes."]}),j("article",{children:[j("div",{className:"row disable-mobile",children:[v("div",{className:"col",children:v("code",{style:{width:"100%"},children:"col"})}),v("div",{className:"col",children:v("code",{style:{width:"100%"},children:"col"})})]}),j("div",{className:"row disable-mobile",children:[v("div",{className:"col",children:v("code",{style:{width:"100%"},children:"col"})}),v("div",{className:"col",children:v("code",{style:{width:"100%"},children:"col"})}),v("div",{className:"col",children:v("code",{style:{width:"100%"},children:"col"})})]})]})]}),v("div",{children:v(t,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),j("section",{className:"row",children:[j("div",{children:[v("p",{children:"Like similar CSS libraries, a grid contains 12 columns."}),j("p",{children:["An element with class ",v("code",{children:"col-1"})," will span just one column, whilst an element with class ",v("code",{children:"col-4"})," will span 4 columns (or 33.333% of the available space) and an element with ",v("code",{children:"col-12"})," will span the whole width of the grid."]}),j("p",{children:["Grids can combine columns of multiple widths. The generic ",v("code",{children:"col"})," class will fill all available space."]}),v("article",{children:j("div",{className:"row disable-mobile",children:[v("div",{className:"col-2",children:v("code",{style:{width:"100%"},children:"col-2"})}),v("div",{className:"col",children:v("code",{style:{width:"100%"},children:"col"})}),v("div",{className:"col-6",children:v("code",{style:{width:"100%"},children:"col-6"})})]})})]}),v("div",{children:v(t,{lang:"xml",children:`<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`})})]}),j("section",{className:"row",children:[j("div",{children:[v("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),j("figure",{children:[v("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-columns",e,o)}),v("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),v("div",{children:v(t,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),j("section",{className:"row",children:[j("div",{children:[j("p",{children:["Finally, you can even omit the ",v("code",{children:"col"})," class entirely. A ",v("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",v("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",v("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),v("article",{children:j("div",{className:"row disable-mobile",children:[v("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"ssample image "}),v("div",{children:v("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),v("div",{children:v(t,{lang:"xml",children:`<div class="row">
  <p 
    width="80" 
    height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}import{jsx as Y,jsxs as ke}from"https://esm.sh/react@19.2.0/jsx-runtime";function et({theme:e}){return Y(c,{theme:e,children:ke("section",{className:"row",children:[ke("div",{children:[Y("p",{children:"There are three classes that allow you to set different content widths:"}),ke("table",{children:[Y("thead",{children:ke("tr",{children:[Y("th",{children:"Class"}),Y("th",{children:"Width"}),Y("th",{children:"Info"})]})}),ke("tbody",{children:[ke("tr",{children:[Y("td",{children:Y("code",{children:"container-narrow"})}),Y("td",{children:"800px"}),Y("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),ke("tr",{children:[Y("td",{children:Y("code",{children:"container-medium"})}),Y("td",{children:"1200px"}),Y("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),ke("tr",{children:[Y("td",{children:Y("code",{children:"container-wide"})}),Y("td",{children:"1600px"}),Y("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]})]})]}),Y("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),Y("div",{children:Y(t,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}import{jsx as q,jsxs as V}from"https://esm.sh/react@19.2.0/jsx-runtime";function tt({theme:e}){return V(c,{theme:e,children:[V("section",{className:"row",children:[V("div",{children:[V("p",{children:["Some elements are visually meant to ",q("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",q("code",{children:"group"})," role."]}),V("p",{children:["In the case of a group of ",q("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),V("p",{role:"group",children:[q("button",{children:"Option 1"}),q("button",{type:"reset",children:"Option 2"})]})]}),q("div",{children:q(t,{lang:"xml",children:`<p role="group">
  <button>
    Option 1
  </button>f
  <button type="reset">
    Option 2
  </button>
</p>`})})]}),V("section",{className:"row",children:[V("div",{children:[V("p",{children:["In the case of a group of ",q("code",{children:"marks"}),", they're also pulled together and have any vertical space dissapear."]}),V("p",{role:"group",children:[q("mark",{children:"#test"}),q("mark",{className:"success",children:"v1.0.0"})]})]}),q("div",{children:q(t,{lang:"xml",children:`<p role="group">
  <mark>
    #test
  </mark>
  <mark 
    class="success">
    v1.0.0
  </mark>
</p>`})})]}),V("section",{className:"row",children:[V("div",{children:[q("p",{children:"Grouping elements really shines in the case of forms and form inputs. You can see below an example of a compact login form."}),q("form",{children:V("div",{role:"group",children:[q("input",{id:"email",type:"email",placeholder:"Email"}),q("input",{id:"password",type:"password",placeholder:"Password"}),q("input",{type:"submit",value:"Login"})]})})]}),q("div",{children:q(t,{lang:"xml",children:`<form>
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
</form>`})})]}),V("section",{className:"row",children:[V("div",{children:[q("p",{children:"Grouping elements can be used to style icons and text together."}),V("div",{role:"group",children:[V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[q("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),q("circle",{cx:"12",cy:"10",r:"3"})]}),q("b",{children:"Test Address, SE11 8CL"})]})]}),q("div",{children:q(t,{lang:"xml",children:`<div role="group">
  <svg 
    width="20" 
    height="20" ...>
  </svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]}),V("section",{className:"row",children:[V("div",{children:[q("p",{children:"Other elements, such as images, can also be grouped, although the impact isn't as pronounced."}),V("p",{role:"group",children:[q("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"image 1"}),q("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/120/120",alt:"image 2"})]})]}),q("div",{children:q(t,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}import{jsx as re,jsxs as me}from"https://esm.sh/react@19.2.0/jsx-runtime";function ot({theme:e}){let o=D();return me(c,{theme:e,children:[me("section",{className:"row",children:[me("div",{children:[me("p",{children:["A ",re("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",re("code",{children:"nav"})," or ",re("code",{children:"menu"}),"):"]}),re("iframe",{scrolling:"no",width:"100%",height:275,src:r.example("layout-header-simple",e,o)})]}),re("div",{children:re(t,{lang:"xml",children:`<header>
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
</main>`})})]}),me("section",{className:"row",children:[me("div",{children:[me("p",{children:['You create more complex "hero" layouts by placing any element, such as a ',re("code",{children:"div"}),", inside a header. Note that heroes are defined by the extra top and bottom padding child elements receive."]}),re("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-header-sub",e,o)})]}),re("div",{children:re(t,{lang:"xml",children:`<!-- nav header -->
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
</main>`})})]}),me("section",{className:"row",children:[me("div",{children:[me("p",{children:["Finally, ",re("code",{children:"aside"}),' is another specialised element that can be used in a header in order to create a "banner" element, either to be placed at the top of the page or mid-content.']}),re("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-header-section",e,o)})]}),re("div",{children:re(t,{lang:"xml",children:`<main>
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
</main>`})})]})]})}import{jsx as O,jsxs as be}from"https://esm.sh/react@19.2.0/jsx-runtime";function at({theme:e}){let o=D();return O(c,{theme:e,children:be("section",{className:"row",children:[be("div",{children:[be("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",O("code",{children:"nav"})," element."]}),be("p",{children:["As with unordered lists, you can denote the selected elment using the ",O("code",{children:"aria-selected"})," attribute."]}),O("nav",{className:"disable-mobile",children:be("ol",{children:[O("li",{children:O("a",{href:"",children:"Home"})}),O("li",{children:O("a",{href:"",children:"Library"})}),O("li",{"aria-selected":!0,children:O("a",{href:"",children:"Data"})})]})}),O("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),O("nav",{className:"disable-mobile",children:be("ol",{children:[O("li",{children:be("a",{href:"",children:[be("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),O("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),O("span",{children:"Home"})]})}),O("li",{"aria-selected":!0,children:O("a",{href:"",children:"Folder"})})]})}),O("p",{children:"Finally, breadcrumbs are also responsive."}),be("figure",{children:[O("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-breadcrumbs",e,o)}),O("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),O("div",{children:O(t,{lang:"xml",children:`<nav>
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
</nav>`})})]})})}import{useState as Gt}from"https://esm.sh/react@19.2.0";import{jsx as _,jsxs as Ce}from"https://esm.sh/react@19.2.0/jsx-runtime";function ut(){let[e,o]=Gt("tab-1");return _("main",{children:Ce("div",{className:"row disable-mobile",children:[_("aside",{children:_("div",{children:Ce("menu",{children:[_("li",{"aria-selected":e==="tab-1",children:Ce("a",{onClick:()=>o("tab-1"),children:[Ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),_("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),_("span",{children:"Home"})]})}),_("li",{"aria-selected":e==="tab-2",children:Ce("a",{onClick:()=>o("tab-2"),children:[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:_("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),_("span",{children:"Install"})]})}),_("li",{"aria-selected":e==="tab-3",children:Ce("a",{onClick:()=>o("tab-3"),children:[Ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_("circle",{cx:"12",cy:"12",r:"10"}),_("path",{d:"M17 12h.01"}),_("path",{d:"M12 12h.01"}),_("path",{d:"M7 12h.01"})]}),_("span",{children:"More"})]})})]})})}),Ce("div",{style:{flexGrow:1},children:[e==="tab-1"?_(dt,{}):null,e==="tab-2"?_(ct,{}):null,e==="tab-3"?_(pt,{}):null]})]})})}import{useState as zt}from"https://esm.sh/react@19.2.0";import{jsx as y,jsxs as P}from"https://esm.sh/react@19.2.0/jsx-runtime";function it({theme:e}){let[o,a]=zt("primary");return y(c,{theme:e,children:P("section",{className:"row",children:[P("div",{children:[P("p",{children:["You can apply several color modes with the help of few classes like ",y("code",{children:"primary"}),", ",y("code",{children:"secondary"}),", ",y("code",{children:"success"})," and ",y("code",{children:"error"}),"."]}),P("p",{children:["You can combine them with the ",y("code",{children:"inverted"})," class to change the colors of various components."]}),y("form",{children:P("label",{children:[y("span",{children:y("b",{children:"Color mode"})}),P("select",{onChange:p=>a(p.target.value),children:[y("option",{value:"primary",children:"Primary"}),y("option",{value:"secondary",children:"Secondary"}),y("option",{value:"success",children:"Success"}),y("option",{value:"error",children:"Error"})]})]})}),y("hr",{}),P("section",{children:[P("hgroup",{children:[P("h1",{children:[y("span",{className:`${o}`,children:"Lorem ipsum dolor"}),y("br",{}),"sit amet"]}),P("h4",{children:["Lorem ipsum dolor sit amet,",y("br",{}),y("span",{className:`${o} inverted`,children:"sed do amet"})]})]}),P("p",{role:"group",children:[y("mark",{className:`${o}`,children:"v12.5.33"}),y("mark",{className:`${o} inverted`,children:"Passing"})]})]}),y("section",{children:y("form",{children:P("div",{role:"group",className:`${o}`,children:[y("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),y("input",{type:"submit",value:"Subscribe"})]})})}),P("section",{children:[P("div",{className:"row",children:[P("article",{className:`${o}`,children:[P("hgroup",{children:[y("h4",{children:"Hobby"}),y("p",{children:y("b",{children:"Free"})})]}),y("p",{children:"Includes"}),P("ul",{children:[y("li",{children:"No credit card"}),y("li",{children:"All platforms"})]})]}),P("article",{className:`${o} inverted`,children:[P("hgroup",{children:[y("h4",{children:"Enterprise"}),y("p",{children:y("b",{children:y("a",{href:"",children:"Contact us"})})})]}),y("p",{children:"Includes"}),P("ul",{children:[y("li",{children:"Everything in Hobby"}),y("li",{children:"24/7 support"})]})]})]}),y("blockquote",{className:`${o}`,children:P("hgroup",{children:[y("h4",{children:"More information"}),y("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]})})]})]}),y("div",{children:y(t,{lang:"xml",children:`...
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
`})})]})})}import{jsx as Le,jsxs as Te}from"https://esm.sh/react@19.2.0/jsx-runtime";function rt({theme:e}){let o=D();return Te(c,{theme:e,children:[Te("section",{className:"row",children:[Te("div",{children:[Te("p",{children:["A ",Le("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),Le("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-footer-simple",e,o)})]}),Le("div",{children:Le(t,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer
    with a <a href="...">link</a>.
  </div>
</footer>`})})]}),Te("section",{className:"row",children:[Te("div",{children:[Le("p",{children:"More complex footers can contain information divided by columns, etc."}),Le("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-footer-complex",e,o)})]}),Le("div",{children:Le(t,{lang:"xml",children:`<footer>
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
</footer>`})})]})]})}var r=class e{static baseRoute="";static home(o,a){return`${e.getBase(a)}${o}/`}static showcase(o,a){return`${e.getBase(a)}${o}/showcases.html`}static doc(o,a,E){let p=e.getBase(E);switch(o){case"typography":return`${p}${a}/pages/docs/basics/${n($e)}`;case"buttons":return`${p}${a}/pages/docs/basics/${n(Me)}`;case"blockquotes":return`${p}${a}/pages/docs/basics/${n(Ee)}`;case"code":return`${p}${a}/pages/docs/basics/${n(De)}`;case"figures":return`${p}${a}/pages/docs/basics/${n(Be)}`;case"lists":return`${p}${a}/pages/docs/basics/${n(Ae)}`;case"links":return`${p}${a}/pages/docs/basics/${n(qe)}`;case"summary":return`${p}${a}/pages/docs/basics/${n(Fe)}`;case"table":return`${p}${a}/pages/docs/basics/${n(He)}`;case"tags":return`${p}${a}/pages/docs/basics/${n(Ie)}`;case"cards":return`${p}${a}/pages/docs/basics/${n(Je)}`;case"forms-check":return`${p}${a}/pages/docs/forms/${n(Re)}`;case"forms-disabled":return`${p}${a}/pages/docs/forms/${n(We)}`;case"forms-grouped":return`${p}${a}/pages/docs/forms/${n(Oe)}`;case"forms-normal":return`${p}${a}/pages/docs/forms/${n(Ge)}`;case"forms-validation":return`${p}${a}/pages/docs/forms/${n(ze)}`;case"header":return`${p}${a}/pages/docs/layout/${n(ot)}`;case"footer":return`${p}${a}/pages/docs/layout/${n(rt)}`;case"groups":return`${p}${a}/pages/docs/layout/${n(tt)}`;case"modal":return`${p}${a}/pages/docs/layout/${n(Pe)}`;case"navigation":return`${p}${a}/pages/docs/navigation/${n(Ve)}`;case"breadcrumbs":return`${p}${a}/pages/docs/navigation/${n(at)}`;case"tabs":return`${p}${a}/pages/docs/navigation/${n(_e)}`;case"menu":return`${p}${a}/pages/docs/navigation/${n(Ue)}`;case"dark-mode":return`${p}${a}/pages/docs/extra/${n(je)}`;case"icons":return`${p}${a}/pages/docs/extra/${n(Ke)}`;case"mobile":return`${p}${a}/pages/docs/extra/${n(Ze)}`;case"classes":return`${p}${a}/pages/docs/custom/${n(Qe)}`;case"grid":return`${p}${a}/pages/docs/custom/${n(Xe)}`;case"containers":return`${p}${a}/pages/docs/custom/${n(et)}`;case"colors":return`${p}${a}/pages/docs/custom/${n(it)}`;default:return"/"}}static getDocFromRoute(o){let E=o.split("/docs/").pop(),[p,h]=E?.split("/")??[];switch(p){case"basics":switch(h){case n($e):return"typography";case n(Me):return"buttons";case n(Ee):return"blockquotes";case n(De):return"code";case n(Be):return"figures";case n(qe):return"links";case n(Ae):return"lists";case n(Fe):return"summary";case n(He):return"table";case n(Ie):return"tags";case n(Je):return"cards"}case"forms":switch(h){case n(Re):return"forms-check";case n(We):return"forms-disabled";case n(Oe):return"forms-grouped";case n(Ge):return"forms-normal";case n(ze):return"forms-validation"}case"layout":switch(h){case n(ot):return"header";case n(rt):return"footer";case n(tt):return"groups";case n(Pe):return"modal"}case"navigation":switch(h){case n(Ve):return"navigation";case n(at):return"breadcrumbs";case n(_e):return"tabs";case n(Ue):return"menu"}case"extra":switch(h){case n(je):return"dark-mode";case n(Ke):return"icons";case n(Ze):return"mobile"}case"custom":switch(h){case n(Qe):return"classes";case n(Xe):return"grid";case n(et):return"containers";case n(it):return"colors"}}}static example(o,a,E){let p=e.getBase(E);switch(o){case"desktop-menu":return`${p}${a}/pages/examples/${n(Ct)}`;case"layout-header-simple":return`${p}${a}/pages/examples/${n(Lt)}`;case"layout-header-sub":return`${p}${a}/pages/examples/${n(St)}`;case"layout-header-section":return`${p}${a}/pages/examples/${n(xt)}`;case"layout-footer-simple":return`${p}${a}/pages/examples/${n(Et)}`;case"layout-footer-complex":return`${p}${a}/pages/examples/${n(Dt)}`;case"mobile-columns":return`${p}${a}/pages/examples/${n(Nt)}`;case"mobile-menu":return`${p}${a}/pages/examples/${n(Tt)}`;case"mobile-nav":return`${p}${a}/pages/examples/${n(Mt)}`;case"mobile-breadcrumbs":return`${p}${a}/pages/examples/${n(kt)}`;case"mobile-tabs-nav":return`${p}${a}/pages/examples/${n(ut)}`;case"mobile-typography":return`${p}${a}/pages/examples/${n($t)}`}}static showcases(o,a){return`${e.getBase(a)}showcase/${o}/${ht(o)}.html`}static showcaseImg(o,a,E="light"){return`${e.getBase(a)}showcase/${o}/${ht(o)}.${E}.png`}static getBase(o){return o?o===""?"/":`/${o}/`:"/"}};function n(e){return`${ht(e.name)}.html`}function ht(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}import{jsx as H,jsxs as fe}from"https://esm.sh/react@19.2.0/jsx-runtime";function vt(){let e=wt(),o=D(),a=E=>{let p=E.target.value;if(typeof window<"u"){let h=window.location.pathname;if(h.includes(e)){let le=h.replace(e,p);window.location.href=le}else if(h.includes(Se)){let le=h.split("/"),ue=le.indexOf(Se)+1;le.splice(ue,0,p);let qt=le.join("/");window.location.href=qt}else{let le=`/${p}${h}`;window.location.href=le}}};return H("nav",{children:fe("ul",{children:[H("li",{children:fe("a",{href:r.home(e,o),children:[fe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[H("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),H("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),H("span",{children:"Home"})]})}),H("li",{children:fe("a",{href:r.showcase(e,o),children:[fe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[H("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),H("circle",{cx:"12",cy:"12",r:"3"})]}),H("span",{children:"Showcase"})]})}),H("div",{}),H("li",{className:"hide-on-desktop",children:fe("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[fe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[H("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),H("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),H("span",{children:"GitHub"})]})}),H("li",{children:fe("select",{name:"theme-selector",onChange:a,children:[H("option",{value:"default",selected:e==="default",children:"Default"}),H("option",{value:"blog",selected:e==="blog",children:"Blog"}),H("option",{value:"app",selected:e==="app",children:"App"}),H("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),H("option",{value:"landing",selected:e==="landing",children:"Landing"}),H("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),H("li",{className:"hide-on-mobile",children:H("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:H("button",{type:"reset",children:fe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[H("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),H("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}import{jsx as gt,jsxs as Yt}from"https://esm.sh/react@19.2.0/jsx-runtime";function bt({theme:e,children:o}){return Yt(yt,{value:e,children:[gt("header",{children:gt(vt,{})}),gt("main",{children:o})]})}import{jsx as s,jsxs as ne}from"https://esm.sh/react@19.2.0/jsx-runtime";function c({theme:e,children:o}){let a=D(),[E,p]=Bt(!1),[h,le]=Bt(void 0);return Pt(()=>{if(typeof window<"u"){let ue=r.getDocFromRoute(window.location.pathname);le(ue)}},[]),s(bt,{theme:e,children:ne("div",{className:"row",children:[ne("aside",{children:[ne("div",{className:"hide-on-desktop",role:"group",children:[ne("div",{className:"row",children:[s("div",{children:s("button",{onClick:()=>p(!E),children:E?ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M18 6 6 18"}),s("path",{d:"m6 6 12 12"})]}):ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),s("path",{d:"M7 8h10"}),s("path",{d:"M7 12h10"}),s("path",{d:"M7 16h10"})]})})}),s("span",{children:s("b",{children:"Chapters"})})]}),s("hr",{})]}),ne("div",{className:E===!1||E===void 0?"hide-on-mobile":"",children:[ne("menu",{children:[s("b",{children:"Basics"}),s("li",{"aria-selected":h==="typography",children:s("a",{href:r.doc("typography",e,a),children:"Typography"})}),s("li",{"aria-selected":h==="buttons",children:s("a",{href:r.doc("buttons",e,a),children:"Buttons"})}),s("li",{"aria-selected":h==="tags",children:s("a",{href:r.doc("tags",e,a),children:"Tags"})}),s("li",{"aria-selected":h==="lists",children:s("a",{href:r.doc("lists",e,a),children:"Lists"})}),s("li",{"aria-selected":h==="links",children:s("a",{href:r.doc("links",e,a),children:"Links"})}),s("li",{"aria-selected":h==="blockquotes",children:s("a",{href:r.doc("blockquotes",e,a),children:"Blokquotes"})}),s("li",{"aria-selected":h==="summary",children:s("a",{href:r.doc("summary",e,a),children:"Summary"})}),s("li",{"aria-selected":h==="code",children:s("a",{href:r.doc("code",e,a),children:"Code"})}),s("li",{"aria-selected":h==="table",children:s("a",{href:r.doc("table",e,a),children:"Table"})}),s("li",{"aria-selected":h==="figures",children:s("a",{href:r.doc("figures",e,a),children:"Figures"})}),s("li",{"aria-selected":h==="cards",children:s("a",{href:r.doc("cards",e,a),children:"Cards"})})]}),ne("menu",{children:[s("b",{children:"Forms"}),s("li",{"aria-selected":h==="forms-normal",children:s("a",{href:r.doc("forms-normal",e,a),children:"Normal"})}),s("li",{"aria-selected":h==="forms-check",children:s("a",{href:r.doc("forms-check",e,a),children:"Checks & Radios"})}),s("li",{"aria-selected":h==="forms-grouped",children:s("a",{href:r.doc("forms-grouped",e,a),children:"Grouped"})}),s("li",{"aria-selected":h==="forms-disabled",children:s("a",{href:r.doc("forms-disabled",e,a),children:"Disabled"})}),s("li",{"aria-selected":h==="forms-validation",children:s("a",{href:r.doc("forms-validation",e,a),children:"Validation"})})]}),ne("menu",{children:[s("b",{children:"Layout"}),s("li",{"aria-selected":h==="header",children:s("a",{href:r.doc("header",e,a),children:"Headers"})}),s("li",{"aria-selected":h==="footer",children:s("a",{href:r.doc("footer",e,a),children:"Footers"})}),s("li",{"aria-selected":h==="groups",children:s("a",{href:r.doc("groups",e,a),children:"Groups"})}),s("li",{"aria-selected":h==="modal",children:s("a",{href:r.doc("modal",e,a),children:"Modal"})})]}),ne("menu",{children:[s("b",{children:"Navigation"}),s("li",{"aria-selected":h==="navigation",children:s("a",{href:r.doc("navigation",e,a),children:"Basic"})}),s("li",{"aria-selected":h==="breadcrumbs",children:s("a",{href:r.doc("breadcrumbs",e,a),children:"Breadcrumbs"})}),s("li",{"aria-selected":h==="menu",children:s("a",{href:r.doc("menu",e,a),children:"Menu"})}),s("li",{"aria-selected":h==="tabs",children:s("a",{href:r.doc("tabs",e,a),children:"Tabs"})})]}),ne("menu",{children:[s("b",{children:"Extra"}),s("li",{"aria-selected":h==="dark-mode",children:s("a",{href:r.doc("dark-mode",e,a),children:"Dark Mode"})}),s("li",{"aria-selected":h==="icons",children:s("a",{href:r.doc("icons",e,a),children:"Icons"})}),s("li",{"aria-selected":h==="mobile",children:s("a",{href:r.doc("mobile",e,a),children:"Mobile"})})]}),ne("menu",{children:[s("b",{children:"Custom"}),s("li",{"aria-selected":h==="grid",children:s("a",{href:r.doc("grid",e,a),children:"Grids"})}),s("li",{"aria-selected":h==="containers",children:s("a",{href:r.doc("containers",e,a),children:"Containers"})}),s("li",{"aria-selected":h==="colors",children:s("a",{href:r.doc("colors",e,a),children:"Colors"})}),s("li",{"aria-selected":h==="classes",children:s("a",{href:r.doc("classes",e,a),children:"Classes"})})]})]})]}),s("div",{children:o})]})})}export{D as a,c as b,Me as c,$e as d,Ee as e,De as f,Be as g,qe as h,Fe as i,He as j,Ie as k,Ae as l,Re as m,We as n,Oe as o,Ge as p,ze as q,Pe as r,Ve as s,_e as t,Ue as u,je as v,Ke as w,Ze as x,Je as y,Qe as z,Xe as A,et as B,tt as C,ot as D,at as E,ut as F,it as G,rt as H,r as I,vt as J,bt as K};
