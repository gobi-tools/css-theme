import{a as At}from"./chunk-MDCAHXJR.js";import{a as Pt}from"./chunk-UPLXQAUZ.js";import{a as Wt}from"./chunk-XF2WV4YZ.js";import{a as Rt}from"./chunk-PRBPLC6K.js";import{a as Ot}from"./chunk-HRT75PLO.js";import{a as Ft}from"./chunk-GSZ6UK6V.js";import{a as Bt}from"./chunk-6WZ2BZS5.js";import{a as Dt}from"./chunk-C74J2UAQ.js";import{a as Et}from"./chunk-K4XVBUED.js";import{a as Ht}from"./chunk-KC2WVVTY.js";import{a as It}from"./chunk-4F2ROYBB.js";import{b as Fe,c as Mt,d as $t,e as o}from"./chunk-43BMFOT6.js";import{a as Ee}from"./chunk-7AZBNJU6.js";import{a as qt}from"./chunk-SVFQNSTA.js";import{a as n}from"./chunk-7X4DHW36.js";import{useEffect as ao,useState as _t}from"https://esm.sh/react@19.2.6";import{useState as jt,useEffect as Ut}from"https://esm.sh/react@19.2.6";function B(){let[e,t]=jt(void 0);return Ut(()=>{if(typeof window<"u"){let H=window.location.pathname.includes(Ee)?Ee:"";t(H)}},[]),e}n(B,"useRoute");import{jsx as m,jsxs as $}from"https://esm.sh/react@19.2.6/jsx-runtime";function He({theme:e}){let t=B();return $(u,{theme:e,children:[$("section",{className:"row",children:[$("div",{children:[$("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",m("code",{children:"reset"})," type buttons)."]}),$("p",{children:[m("button",{children:"Button"}),m("button",{type:"reset",children:"Button"})]})]}),m("div",{children:m(o,{lang:"xml",children:`<button>Button</button>
<button type="reset">
  Button
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["Both types can be marked as ",m("code",{children:"disabled"}),", meaning no interaction will be possible with them."]}),$("p",{children:[m("button",{disabled:!0,children:"Disabled"}),m("button",{type:"reset",disabled:!0,children:"Disabled"})]})]}),m("div",{children:m(o,{lang:"xml",children:`<button disabled>
  Button
</button>
<button type="reset" disabled>
  Button
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[m("p",{children:"Buttons can be improved by adding svg icons, either to the left or to the right of the main button title."}),$("p",{children:[$("button",{children:[$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),m("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),m("span",{children:"Home"})]}),$("button",{type:"reset",children:[m("span",{children:"Play"}),$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M21 4v16"}),m("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]}),m("p",{children:$("small",{children:["You can learn more about icons ",m("a",{href:r.doc("icons",e,t),children:"here"}),"."]})})]}),m("div",{children:m(o,{lang:"xml",children:`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[m("p",{children:"You can even create icon-only buttons by completely omitting the title."}),$("p",{children:[m("button",{children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M4 11a9 9 0 0 1 9 9"}),m("path",{d:"M4 4a16 16 0 0 1 16 16"}),m("circle",{cx:"5",cy:"19",r:"1"})]})}),m("button",{type:"reset",children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),m("circle",{cx:"12",cy:"12",r:"4"})]})})]})]}),m("div",{children:m(o,{lang:"xml",children:`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["By default, buttons are styled using the ",m("b",{children:"primary"})," color, which impacts their background, border or text color. You can change that by applying classes like ",m("code",{children:"secondary"}),", ",m("code",{children:"success"})," or ",m("code",{children:"error"}),"."]}),$("p",{className:"flex",children:[m("button",{className:"secondary",children:"Action"}),m("button",{className:"success",children:"Confirm"}),$("button",{type:"reset",className:"error",children:[$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M18 6 6 18"}),m("path",{d:"m6 6 12 12"})]}),m("span",{children:"Cancel"})]})]}),m("p",{children:$("small",{children:["You can learn more about colors ",m("a",{href:r.doc("colors",e,t),children:"here"}),"."]})})]}),m("div",{children:m(o,{lang:"xml",children:`<button
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
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",m("code",{children:"group"})," role."]}),$("p",{role:"group",children:[m("button",{children:"Button 1"}),m("button",{type:"reset",children:"Button 2"}),m("button",{type:"reset",children:"Button 3"})]}),$("p",{role:"group",children:[m("button",{type:"reset",children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:m("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}),m("button",{type:"reset",children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M7 10v12"}),m("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}),m("button",{children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m("path",{d:"M12 2v13"}),m("path",{d:"m16 6-4-4-4 4"}),m("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})]})})]}),$("p",{role:"group",children:[m("button",{type:"reset",children:"Prev"}),m("button",{type:"reset",children:"1"}),m("button",{type:"reset",children:"2"}),m("button",{type:"reset",children:"3"}),m("button",{type:"reset",children:"Next"})]}),m("p",{children:$("small",{children:["You can learn more about groups ",m("a",{href:r.doc("groups",e,t),children:"here"}),"."]})})]}),m("div",{children:m(o,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}n(He,"Buttons");import{jsx as w,jsxs as re}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ae({theme:e}){return re(u,{theme:e,children:[re("section",{className:"row",children:[re("div",{children:[re("p",{children:["Typography is based purely on ",w("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),w("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),w("div",{children:w(o,{lang:"xml",children:`<p>
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
</p>`})})]}),re("section",{className:"row",children:[re("div",{children:[re("p",{children:["To all sorts of text modifiers, like ",w("code",{children:"b"}),", ",w("code",{children:"i"}),", ",w("code",{children:"em"})," tags and many more."]}),w("p",{children:w("i",{children:"italic"})}),w("p",{children:w("em",{children:"emphasized"})}),w("p",{children:w("dfn",{children:"definition"})}),w("p",{children:w("cite",{children:"citation"})}),w("p",{children:w("b",{children:"bold"})}),w("p",{children:w("strong",{children:"strong"})}),w("p",{children:w("del",{children:"deleted"})}),w("p",{children:w("s",{children:"corrected"})}),w("p",{children:w("u",{children:"underlined"})}),w("p",{children:w("q",{children:"quotation"})})]}),w("div",{children:w(o,{lang:"xml",children:`<i>italic</i>
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
<sup>supescript</sup>`})})]}),re("section",{className:"row",children:[re("div",{children:[re("p",{children:["Finally, it supports all six ",w("code",{children:"heading"})," types."]}),w("h1",{children:"Heading 1"}),w("h2",{children:"Heading 2"}),w("h3",{children:"Heading 3"}),w("h4",{children:"Heading 4"}),w("h5",{children:"Heading 5"}),w("h6",{children:"Heading 6"})]}),w("div",{children:w(o,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),re("section",{className:"row",children:[re("div",{children:[re("p",{children:["As well as the ability to group headings and associated content with ",w("code",{children:"hgroup"}),"."]}),re("hgroup",{children:[w("h1",{children:"Heading 1"}),w("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),w("div",{children:w(o,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}n(Ae,"Typography");import{jsx as C,jsxs as ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function We({theme:e}){let t=B();return ee(u,{theme:e,children:[ee("section",{className:"row",children:[ee("div",{children:[C("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),C("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),C("div",{children:C(o,{lang:"xml",children:`<blockquote>
  Lorem ipsum ...
</blockquote>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[C("p",{children:"It's not just text that can be included in a blockquote element, but code, icons, and many other elements."}),C("blockquote",{children:ee("p",{children:["Press ",C("kbd",{children:"Ctrl + Q"})," to quit"]})}),C("blockquote",{children:ee("hgroup",{children:[ee("p",{role:"group",children:[ee("svg",{xmlns:" http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("circle",{cx:"12",cy:"12",r:"10"}),C("path",{d:"M12 16v-4"}),C("path",{d:"M12 8h.01"})]}),C("span",{children:"Information"})]}),ee("p",{children:["Delivery for ",C("b",{children:"Tuesday at 08:00."})]})]})}),C("p",{children:ee("small",{children:["You can learn more about groups ",C("a",{href:r.doc("groups",e,t),children:"here"})," and about icons ",C("a",{href:r.doc("icons",e,t),children:"here"}),"."]})})]}),C("div",{children:C(o,{lang:"xml",children:`<blockquote>
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
</blockquote>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[ee("p",{children:["Blockquotes can also be styled using the ",C("code",{children:"success"}),", ",C("code",{children:"error"}),", ",C("code",{children:"primary"})," and ",C("code",{children:"secondary"})," classes."]}),C("blockquote",{className:"success",children:ee("hgroup",{children:[C("h4",{children:"Success"}),C("p",{children:"The operation was successfull"})]})}),C("blockquote",{className:"error",children:ee("hgroup",{children:[C("p",{children:"Unknown error"}),C("p",{children:ee("code",{children:["Server response is ",C("b",{children:"Error 500"})]})})]})}),C("blockquote",{className:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),C("blockquote",{className:"secondary",children:C("hgroup",{children:ee("hgroup",{children:[C("h4",{children:"Title"}),C("p",{children:"Important Information"}),C("p",{children:C("button",{children:"Click me"})})]})})}),C("hgroup",{children:C("p",{children:ee("small",{children:["You can learn more about colors ",C("a",{href:r.doc("colors",e,t),children:"here"}),"."]})})})]}),C("div",{children:C(o,{lang:"xml",children:`<blockquote class="success">
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
</blockquote>`})})]})]})}n(We,"Blockquotes");import{jsx as ge,jsxs as qe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Oe({theme:e}){return ge(u,{theme:e,children:ge("section",{children:qe("div",{className:"row",children:[qe("div",{children:[ge("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),qe("p",{children:["Inline code ",ge("code",{children:"console.log('abc')"})]}),qe("p",{children:["Keyboard shortcut ",ge("kbd",{children:"Ctrl + S"})]}),qe("figure",{children:[ge(o,{lang:"xml",children:"console.log('abc')"}),ge("figcaption",{children:"Code block"})]}),qe("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",ge("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",ge("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),ge("div",{children:ge(o,{lang:"xml",children:`<p>
  Inline code <code>console.log('abc')</code>
</p>
<p>
  Keyboard shortcut <kbd>Ctrl + S</kbd>
</p>
<pre>
  <code>console.log('abc')</code>
</pre>`})})]})})})}n(Oe,"Code");import{jsx as ue,jsxs as we}from"https://esm.sh/react@19.2.6/jsx-runtime";function Re({theme:e}){return we(u,{theme:e,children:[we("section",{className:"row",children:[we("div",{children:[ue("p",{children:"Figures can contain a single image and an associated caption."}),we("figure",{children:[ue("img",{width:"640",height:"480",src:"https://picsum.photos/id/16/640/480",alt:"ssample image "}),ue("figcaption",{children:"Sample caption"})]})]}),ue("div",{children:ue(o,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),we("section",{className:"row",children:[we("div",{children:[ue("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),we("figure",{children:[we("figure",{children:[ue("img",{width:"200",height:"240",src:"https://picsum.photos/id/16/200/240",alt:"first image"}),ue("figcaption",{children:"First image"})]}),we("figure",{children:[ue("img",{width:"240",height:"240",src:"https://picsum.photos/id/16/240/240",alt:"second image"}),ue("figcaption",{children:"Second image"})]}),ue("figcaption",{children:"Figure group"})]})]}),ue("div",{children:ue(o,{lang:"xml",children:`<figure>
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
</figure>`})})]})]})}n(Re,"Figures");import{jsx as ae,jsxs as ke}from"https://esm.sh/react@19.2.6/jsx-runtime";function Pe({theme:e}){return ke(u,{theme:e,children:[ke("section",{className:"row",children:[ke("div",{children:[ae("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),ke("ul",{children:[ae("li",{children:ae("a",{href:"",children:"website.com"})}),ae("li",{children:ae("a",{href:"",children:"email@test.com"})}),ae("li",{children:ae("a",{href:"",children:"/#location"})})]})]}),ae("div",{children:ae(o,{lang:"xml",children:`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location">
  /#location
</a>`})})]}),ke("section",{className:"row",children:[ke("div",{children:[ae("p",{children:"Headigns can be used together with empty fragment links to reference locations in the same document."}),ke("h1",{"data-hover":!0,children:["Section 1",ae("a",{href:"#section_1"})]}),ke("h2",{children:["Section 1.2",ae("a",{href:"#section_12"})]}),ke("h3",{children:["Section 1.2.1",ae("a",{href:"#section_121"})]})]}),ae("div",{children:ae(o,{lang:"xml",children:`<h1>
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
`})})]})]})}n(Pe,"Links");import{jsx as T,jsxs as _}from"https://esm.sh/react@19.2.6/jsx-runtime";function ze({theme:e}){let t=B();return _(u,{theme:e,children:[_("section",{className:"row",children:[_("div",{children:[T("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),_("details",{children:[T("summary",{children:"Info"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),_("details",{children:[T("summary",{children:"More info Info"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),T("div",{children:T(o,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),_("section",{className:"row",children:[_("div",{children:[_("p",{children:["This basic summary can be placed inside an ",T("code",{children:"article"})," and combined with the ",T("code",{children:"primary"}),", ",T("code",{children:"success"})," or ",T("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),T("article",{children:_("details",{open:!0,children:[T("summary",{children:"Note"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),T("article",{className:"primary",children:_("details",{children:[T("summary",{children:"Info"}),_("p",{children:["Larn more ",T("a",{href:"",children:"here"})]})]})}),T("article",{className:"success",children:_("details",{children:[T("summary",{children:"Success"}),_("p",{children:["Operation finished ",T("code",{children:"OK"})]})]})}),T("article",{className:"error",children:_("details",{children:[T("summary",{children:"Error"}),_("div",{children:[T("p",{children:"Unknown error occurred"}),T("hr",{}),T("button",{children:"Acknowledge"})]})]})}),T("p",{children:_("small",{children:["You can learn more about colors ",T("a",{href:r.doc("colors",e,t),children:"here"})," and cards ",T("a",{href:r.doc("cards",e,t),children:"here"}),"."]})})]}),T("div",{children:T(o,{lang:"xml",children:`<article>
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
</article>`})})]}),_("section",{className:"row",children:[_("div",{children:[_("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",T("code",{children:"article"}),", you can form an accordion menu:"]}),_("article",{children:[_("details",{name:"menu",children:[T("summary",{children:"Option 1"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),_("details",{name:"menu",open:!0,children:[T("summary",{children:"Option 2"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),_("details",{name:"menu",children:[T("summary",{children:"Option 3"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),T("div",{children:T(o,{lang:"xml",children:`
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
</article>`})})]})]})}n(ze,"Summary");import{jsx as D,jsxs as be}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ge({theme:e}){return D(u,{theme:e,children:be("section",{className:"row",children:[be("div",{children:[D("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),be("table",{children:[D("thead",{children:be("tr",{children:[D("th",{children:"Cover"}),D("th",{children:"Item"}),D("th",{children:"Value"}),D("th",{children:"Comment"})]})}),be("tbody",{children:[be("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:"https://picsum.photos/id/16/30/50",alt:"cover 1"})}),D("td",{children:D("a",{href:"",children:"Item 1.1"})}),D("td",{children:"20.35"}),D("td",{children:"In stock"})]}),be("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:"https://picsum.photos/id/100/30/50",alt:"cover 2"})}),D("td",{children:D("a",{href:"",children:"Item 2.1"})}),D("td",{children:"15.99"}),D("td",{children:"Out of stock"})]}),be("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:"https://picsum.photos/id/40/30/50",alt:"cover 3"})}),D("td",{children:D("a",{href:"",children:"Item 5.1"})}),D("td",{children:"14.23"}),D("td",{children:"In stock"})]}),be("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:"https://picsum.photos/id/25/30/50",alt:"cover 4"})}),D("td",{children:D("a",{href:"",children:"Item 22"})}),D("td",{children:"10.11"}),D("td",{children:"In stock"})]})]}),D("tfoot",{children:be("tr",{children:[D("td",{colSpan:2,children:D("b",{children:"Total"})}),D("td",{colSpan:2,children:D("b",{children:"60.68"})})]})})]})]}),D("div",{children:D(o,{lang:"xml",children:`<table>
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
</table>`})})]})})}n(Ge,"Table");import{jsx as p,jsxs as E}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ye({theme:e}){let t=B();return E(u,{theme:e,children:[E("section",{className:"row",children:[E("div",{children:[E("p",{children:["You can mark any text, keyword or piece of information with the ",p("code",{children:"mark"})," html tag."]}),p("p",{children:p("mark",{children:"v15.20.30"})})]}),p("div",{children:p(o,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),E("section",{className:"row",children:[E("div",{children:[p("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),E("p",{children:[E("mark",{children:[E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),p("path",{d:"m9 12 2 2 4-4"})]}),p("span",{children:"released"})]}),E("mark",{children:[p("span",{children:"error"}),E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),p("path",{d:"m9 12 2 2 4-4"})]})]})]}),p("p",{children:E("small",{children:["You can learn more about icons ",p("a",{href:r.doc("icons",e,t),children:"here"}),"."]})})]}),p("div",{children:p(o,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["You  can assign the ",p("code",{children:"primary"}),", ",p("code",{children:"secondary"}),", ",p("code",{children:"success"})," or ",p("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",p("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),E("p",{className:"flex",children:[p("mark",{className:"primary",children:"#theme"}),p("mark",{className:"secondary",children:"#second"}),p("mark",{className:"success",children:"Process OK"}),p("mark",{className:"error",children:"Error 400"})]}),E("p",{className:"flex",children:[p("mark",{className:"primary inverted",children:"#theme"}),p("mark",{className:"secondary inverted",children:"#second"}),p("mark",{className:"success inverted",children:"Process OK"}),p("mark",{className:"error inverted",children:"Error 400"})]}),p("p",{children:E("small",{children:["You can learn more about colors ",p("a",{href:r.doc("colors",e,t),children:"here"}),"."]})})]}),p("div",{children:p(o,{lang:"xml",children:`<!-- with or without -->
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
</mark>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",p("code",{children:"group"})," role, they will be grouped together."]}),E("p",{role:"group",children:[p("mark",{children:"npm"}),p("mark",{className:"success",children:"1.0.3"}),p("mark",{className:"error",children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[p("path",{d:"M18 6 6 18"}),p("path",{d:"m6 6 12 12"})]})})]}),p("p",{children:E("small",{children:["You can learn more about groups ",p("a",{href:r.doc("groups",e,t),children:"here"}),"."]})})]}),p("div",{children:p(o,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["You can use the ",p("code",{children:"mark"})," tag as standalone badges with text or with icons."]}),E("p",{children:[p("mark",{children:"1"}),p("mark",{children:"2"}),p("mark",{children:"3"}),p("mark",{children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),p("circle",{cx:"12",cy:"10",r:"3"})]})})]}),p("p",{children:"Or in more complex layouts."}),E("article",{children:[p("div",{role:"group",children:E("div",{className:"row",children:[p("mark",{className:"secondary",children:"1"}),E("div",{children:[p("b",{children:"Lorem ipsum dolor sit amet"}),p("br",{}),p("small",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}),p("div",{role:"group",children:E("div",{className:"row",children:[p("mark",{className:"secondary",children:"2"}),E("div",{children:[p("b",{children:"Sed ut perspiciatis unde omnis"}),p("br",{}),p("small",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."})]})]})}),p("div",{role:"group",children:E("div",{className:"row",children:[p("mark",{className:"secondary",children:"3"}),E("div",{children:[p("b",{children:"At vero eos et accusamus"}),p("br",{}),p("small",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."})]})]})})]}),p("p",{children:E("small",{children:["You can learn more about cards ",p("a",{href:r.doc("cards",e,t),children:"here"}),"."]})})]}),p("div",{children:p(o,{lang:"xml",children:`<p>
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
</article>`})})]})]})}n(Ye,"Tags");import{jsx as oe,jsxs as xe}from"https://esm.sh/react@19.2.6/jsx-runtime";function _e({theme:e}){return xe(u,{theme:e,children:[xe("section",{className:"row",children:[xe("div",{children:[oe("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),oe("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),xe("ul",{children:[oe("li",{children:"Item 1"}),oe("li",{children:"Item 2"}),xe("ol",{children:[oe("li",{children:"Item 1"}),oe("li",{children:"Item 2"})]})]})]}),oe("div",{children:oe(o,{lang:"xml",children:`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`})})]}),xe("section",{className:"row",children:[xe("div",{children:[xe("p",{children:["Definition lists are styled such that ",oe("code",{children:"dd"})," elements are inlined compared to ",oe("code",{children:"dt"})," elements."]}),xe("dl",{children:[oe("dt",{children:"Coffee"}),oe("dd",{children:"Black hot drink"}),oe("dt",{children:"Milk"}),oe("dd",{children:"White cold drink"})]})]}),oe("div",{children:oe(o,{lang:"xml",children:`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`})})]})]})}n(_e,"Lists");import{useState as bt}from"https://esm.sh/react@19.2.6";import{jsx as k,jsxs as U}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ve({theme:e}){let[t,i]=bt("bread"),[H,h]=bt(!1),[g,pe]=bt(!0);return U(u,{theme:e,children:[U("section",{className:"row",children:[U("div",{children:[k("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),U("form",{children:[k("p",{children:k("b",{children:"Options"})}),U("label",{htmlFor:"egg",children:[k("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),k("span",{children:"Egg"})]}),U("label",{htmlFor:"cheese",children:[k("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),k("span",{children:"Cheese"})]}),U("label",{htmlFor:"ham",children:[k("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),k("span",{children:"Ham"})]})]}),k("p",{children:"These work well even for complex, multi-line, checkboxes"}),U("form",{children:[k("p",{children:k("b",{children:"Todos"})}),U("label",{htmlFor:"friday",children:[k("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),U("span",{children:[k("b",{children:"Friday"}),k("br",{}),k("span",{children:"- Order lunch"}),k("br",{}),k("span",{children:"- Go to work"}),k("span",{children:"- Eat lunch"})]})]}),U("label",{htmlFor:"saturday",children:[k("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),U("span",{children:[k("b",{children:"Saturday"}),k("br",{}),k("span",{children:"- Order lunch"}),k("br",{}),k("span",{children:"- Eat lunch"})]})]})]})]}),k("div",{children:k(o,{lang:"xml",children:`<form>
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
</form>`})})]}),U("section",{className:"row",children:[U("div",{children:[k("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),U("form",{children:[k("p",{children:k("b",{children:"Wrapping"})}),U("label",{htmlFor:"bread",children:[k("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:t==="bread",onChange:me=>i(me.target.value)}),k("span",{children:"Bread"})]}),U("label",{htmlFor:"salad",children:[k("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:t==="salad",onChange:me=>i(me.target.value)}),k("span",{children:"Salad"})]})]})]}),k("div",{children:k(o,{lang:"xml",children:`<form>
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
</form>`})})]}),U("section",{className:"row",children:[U("div",{children:[k("p",{children:"And if you want to represent an on/off state, you can use switches."}),U("form",{children:[U("label",{htmlFor:"terms",onClick:()=>h(!H),children:[k("input",{name:"terms",type:"checkbox",role:"switch",checked:H}),k("span",{children:"I agree to the terms"})]}),U("label",{htmlFor:"updates",onClick:()=>pe(!g),children:[k("input",{name:"updates",type:"checkbox",role:"switch",checked:g}),k("span",{children:"I want to receive updates"})]})]})]}),k("div",{children:k(o,{lang:"xml",children:`<form>
  <label for="terms">
    <input 
      name="terms"
      type="checkbox"
      role="switch"${H?`
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
</form>`})})]})]})}n(Ve,"FormsCheckbox");import{jsx as ne,jsxs as Te}from"https://esm.sh/react@19.2.6/jsx-runtime";function je({theme:e}){return ne(u,{theme:e,children:Te("section",{className:"row",children:[Te("div",{children:[Te("p",{children:["A form can have all or part of its inputs set as ",ne("code",{children:"disabled"})," to prevent any user interaction."]}),ne("form",{children:Te("fieldset",{children:[ne("legend",{children:"Disabled form"}),Te("label",{htmlFor:"email",children:[ne("span",{children:"Email"}),ne("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),Te("label",{htmlFor:"address",children:[ne("span",{children:"Address"}),ne("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),Te("label",{htmlFor:"delivery",children:[ne("span",{children:"Delivery"}),Te("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[ne("option",{value:"fast",children:"Fast"}),ne("option",{value:"standard",children:"Standard"})]})]}),ne("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),ne("div",{children:ne(o,{lang:"xml",children:`<form>
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
</form>`})})]})})}n(je,"FormsDisabled");import{jsx as f,jsxs as O}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ue({theme:e}){return O(u,{theme:e,children:[O("section",{className:"row",children:[O("div",{children:[O("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",f("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),f("form",{children:O("div",{role:"group",children:[f("input",{id:"email",type:"email",placeholder:"Email"}),f("input",{type:"submit",value:"Subscribe"})]})})]}),f("div",{children:f(o,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),O("section",{className:"row",children:[O("div",{children:[f("p",{children:"This can be used to great effect for search inputs."}),f("form",{children:O("div",{role:"group",children:[f("mark",{children:O("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("path",{d:"m21 21-4.34-4.34"}),f("circle",{cx:"11",cy:"11",r:"8"})]})}),f("input",{type:"search",id:"search",placeholder:"Search"}),f("input",{type:"submit",value:"Search"})]})})]}),f("div",{children:f(o,{lang:"xml",children:`<form>
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
</form>`})})]}),O("section",{className:"row",children:[O("div",{children:[f("p",{children:"And even use mutliple buttons:"}),f("form",{children:O("div",{role:"group",children:[f("input",{type:"search",value:"",placeholder:"e.g. SW1A 1AA"}),f("button",{type:"reset",children:O("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("circle",{cx:"12",cy:"12",r:"10"}),f("line",{x1:"22",x2:"18",y1:"12",y2:"12"}),f("line",{x1:"6",x2:"2",y1:"12",y2:"12"}),f("line",{x1:"12",x2:"12",y1:"6",y2:"2"}),f("line",{x1:"12",x2:"12",y1:"22",y2:"18"})]})}),O("button",{type:"submit",children:[f("span",{children:"Go"}),O("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("path",{d:"M5 12h14"}),f("path",{d:"m12 5 7 7-7 7"})]})]})]})})]}),f("div",{children:f(o,{lang:"xml",children:`<form>
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
</form>`})})]}),O("section",{className:"row",children:[O("div",{children:[O("p",{children:["You can still wrap form elements inside a ",f("code",{children:"fieldset"})," with an appropriate ",f("code",{children:"legend"})," tag."]}),f("form",{children:O("fieldset",{children:[f("legend",{children:"Selection"}),O("div",{role:"group",children:[O("select",{id:"delivery",defaultValue:"fast",children:[f("option",{value:"fast",children:"Fast"}),f("option",{value:"standard",children:"Standard"})]}),f("input",{type:"date",id:"delivery-date"}),f("input",{type:"submit",value:"Confirm"})]})]})})]}),f("div",{children:f(o,{lang:"xml",children:`<form>
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
</form>`})})]}),O("section",{className:"row",children:[O("div",{children:[f("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),f("form",{children:O("div",{role:"group",children:[O("label",{htmlFor:"ch_1",children:[f("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),f("span",{children:"Check #1"})]}),O("label",{htmlFor:"ch_2",children:[f("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),f("span",{children:"Check #2"})]}),O("label",{htmlFor:"ch_3",children:[f("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),f("span",{children:"Check #3"})]})]})})]}),f("div",{children:f(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}n(Ue,"FormsGrouped");import{useState as Kt}from"https://esm.sh/react@19.2.6";import{jsx as b,jsxs as I}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ke({theme:e}){let t=B(),[i,H]=Kt(50);return I(u,{theme:e,children:[I("section",{className:"row",children:[I("div",{children:[I("p",{children:["All ",b("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),I("form",{children:[I("label",{htmlFor:"email",children:[b("span",{children:"Email"}),b("input",{type:"email",placeholder:"Email Address",id:"email"})]}),I("label",{htmlFor:"password",children:[b("span",{children:"Password"}),b("input",{type:"password",id:"password",placeholder:"Password"})]}),b("input",{type:"submit",value:"Login"}),I("p",{children:["Don't have an account? ",b("a",{href:"",children:"Sign up"}),"."]})]})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
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
</form>`})})]}),I("section",{className:"row",children:[I("div",{children:[b("p",{children:"Textareas are supported as well and by default they expand to fit the available horizontal space."}),I("form",{children:[b("textarea",{rows:4,id:"textarea",placeholder:"Write your comments..."}),b("input",{type:"submit",value:"Comment"})]})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>`})})]}),I("section",{className:"row",children:[I("div",{children:[b("p",{children:"Ranged inputs are also supported."}),I("form",{children:[I("label",{htmlFor:"volume",children:[b("span",{children:"Volume (range)"}),b("input",{type:"range",id:"volume",name:"volume",min:0,max:100,step:1,value:i,onChange:h=>H(Number(h.target.value))})]}),b("input",{type:"submit",value:"Tune"})]})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
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
</form>`})})]}),b("section",{children:I("div",{className:"row",children:[I("div",{children:[I("p",{children:["If you want your forms to stand out more, you can wrap the inputs inside a ",b("code",{children:"fieldset"})," and assign a ",b("code",{children:"legend"}),"."]}),b("form",{children:I("fieldset",{children:[b("legend",{children:"Details"}),I("div",{className:"row disable-mobile",children:[b("div",{children:I("label",{htmlFor:"first-name",children:[b("span",{children:"First name"}),b("input",{type:"text",id:"first-name",placeholder:"First name"})]})}),b("div",{children:I("label",{htmlFor:"last-name",children:[b("span",{children:"Last name"}),b("input",{type:"text",id:"last-name",placeholder:"Last name"})]})})]}),I("div",{className:"row disable-mobile",children:[b("div",{children:I("label",{htmlFor:"delivery",children:[b("span",{children:"Delivery Time"}),I("select",{id:"delivery",defaultValue:"mornibgt",children:[b("option",{value:"morning",children:"Morning"}),b("option",{value:"evening",children:"Evening"})]})]})}),b("div",{children:I("label",{htmlFor:"delivery-date",children:[b("span",{children:"Delivery Date"}),b("input",{type:"date",id:"delivery-date"})]})})]}),I("blockquote",{className:"success",children:["Order total is ",b("b",{children:"$33.59"})]}),I("div",{className:"row disable-mobile",children:[b("div",{children:b("input",{type:"reset",className:"error",value:"Reset"})}),b("div",{}),b("div",{children:b("input",{type:"submit",value:"Confirm"})})]})]})}),b("p",{children:"You can make forms as simple or as complex as you want."}),I("p",{children:["In the example above we're separating inputs into two separate ",b("a",{href:r.doc("grid",e,t),children:"columns"}),", so we can pack more information in the same space."]}),I("p",{children:["We're also using ",b("a",{href:r.doc("blockquotes",e,t),children:"blockquotes"})," to highlight important information."]}),I("p",{children:["We're using both ",b("code",{children:"submit"})," and ",b("code",{children:"reset"})," type inputs. Please note these inputs are styled to look exactly like ",b("a",{href:r.doc("blockquotes",e,t),children:"buttons"}),"."]})]}),b("div",{children:b(o,{lang:"xml",children:`<form>
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
</form>`})})]})})]})}n(Ke,"FormsNormal");import{useState as ft}from"https://esm.sh/react@19.2.6";import{jsx as F,jsxs as ie}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ze({theme:e}){let[t,i]=ft("a"),[H,h]=ft(""),[g,pe]=ft("");return ie(u,{theme:e,children:[ie("section",{className:"row",children:[ie("div",{children:[ie("p",{children:["Helper styles for form validation come out of the box for any ",F("code",{children:"input"})," and ",F("code",{children:"textarea"})," elements marked as ",F("b",{children:"required"}),"."]}),F("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),F("p",{children:"Empty inputs do not display error styles."}),ie("p",{children:["Adjacent text elements with the ",F("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),F("form",{action:"",method:"post",children:ie("fieldset",{children:[F("legend",{children:"Input"}),ie("label",{htmlFor:"name",children:[F("span",{children:"Name"}),F("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:t,onChange:me=>i(me.target.value)}),F("span",{className:"error",children:F("small",{children:"Enter a name between 4 and 100 characters"})})]}),ie("label",{htmlFor:"email",children:[F("span",{children:"Email"}),F("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:H,onChange:me=>h(me.target.value)})]}),ie("label",{htmlFor:"comment",children:[F("span",{children:"Comment"}),F("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:g,onChange:me=>pe(me.target.value)}),F("span",{className:"error",children:F("small",{children:"Enter a meaningful comment"})})]}),F("input",{type:"submit",value:"Submit"})]})})]}),F("div",{children:F(o,{lang:"xml",children:`<form action="/" method="post">
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
</form>`})})]}),ie("section",{className:"row",children:[ie("div",{children:[ie("p",{children:["Inputs that present a more limited range of options to a user, such as ",F("code",{children:"select"}),", ",F("code",{children:"radio"})," and ",F("code",{children:"check"})," buttons, won't display a error styles but can be set as required."]}),F("form",{children:ie("fieldset",{children:[F("legend",{children:"Countries"}),ie("select",{id:"country",name:"country",required:!0,children:[F("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please select a country"}),F("option",{value:"uk",children:"United Kingdom"}),F("option",{value:"fr",children:"France"}),F("option",{value:"de",children:"Germany"})]}),ie("label",{children:[F("input",{type:"checkbox",name:"terms",required:!0}),"I accept the terms and conditions"]}),F("input",{type:"submit",value:"Submit"})]})})]}),F("div",{children:F(o,{lang:"xml",children:`<form>
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
</form>`})})]})]})}n(Ze,"FormsValidation");import{useRef as Zt}from"https://esm.sh/react@19.2.6";import{jsx as se,jsxs as Qe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Je({theme:e}){let t=Zt(null);return se(u,{theme:e,children:Qe("section",{className:"row",children:[Qe("div",{children:[se("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),se("p",{children:"Click the button below to open the modal dialog."}),se("p",{children:se("button",{onClick:n(()=>t.current?.showModal(),"openDialog"),children:"Open modal"})}),se(Qt,{ref:t})]}),se("div",{children:se(o,{lang:"xml",children:`<button id="openBtn">Open modal</button>

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
`})})]})})}n(Je,"Modal");function Qt(e){return Qe("dialog",{ref:e.ref,children:[se("h2",{children:"Dialog"}),se("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),se("form",{method:"dialog",children:se("div",{role:"group",children:Qe("div",{className:"row",children:[se("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),se("div",{}),se("button",{value:"confirm",children:"Confirm"})]})})})]})}n(Qt,"DialogModal");import{jsx as s,jsxs as S}from"https://esm.sh/react@19.2.6/jsx-runtime";function Xe({theme:e}){let t=B();return S(u,{theme:e,children:[S("section",{className:"row",children:[S("div",{children:[S("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",s("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),s("nav",{className:"disable-mobile",children:S("ul",{children:[s("li",{children:s("a",{href:"",children:"Item 1"})}),s("li",{children:s("a",{href:"",children:"Item 2"})}),s("li",{children:s("a",{href:"",children:"Item 3"})})]})}),s("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),s("nav",{className:"disable-mobile",children:S("ul",{children:[s("li",{children:S("a",{href:"",children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),s("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),s("span",{children:"Home"})]})}),s("li",{children:S("a",{href:"",children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),s("path",{d:"m18 15 4-4"}),s("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),s("span",{children:"Docs"})]})}),S("li",{children:[S("a",{href:"",children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[s("circle",{cx:"12",cy:"12",r:"10"}),s("path",{d:"m10 8 4 4-4 4"})]}),s("span",{children:"More"})]}),S("ul",{children:[s("li",{children:s("a",{href:"",children:"Option 1"})}),s("li",{children:s("a",{href:"",children:"Option 2"})})]})]})]})}),S("p",{children:["Navigtion items may use the ",s("code",{children:"aria-selected"})," attribute to denote they are selected."]}),s("nav",{className:"disable-mobile",children:S("ul",{children:[s("li",{"aria-selected":!0,children:s("a",{href:"",children:"Selected"})}),s("li",{children:s("a",{href:"",children:"Unselected"})})]})})]}),s("div",{children:s(o,{lang:"xml",children:`<header>
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
</header>`})})]}),S("section",{className:"row",children:[S("div",{children:[S("p",{children:["You can use other elements such as ",s("code",{children:"select"}),", ",s("code",{children:"input"}),", ",s("code",{children:"img"}),", etc to add more functionality to the navigation bar."]}),s("nav",{className:"disable-mobile",children:S("ul",{children:[s("li",{children:S("a",{href:"",children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),s("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),s("span",{children:"Home"})]})}),s("li",{children:S("select",{id:"selector",defaultValue:"opt-1",style:{minWidth:"100px"},children:[s("option",{value:"opt-1",children:"Val 1"}),s("option",{value:"opt-2",children:"Val 2"}),s("option",{value:"opt-3",children:"Val 3"})]})}),s("li",{children:s("input",{type:"search",placeholder:"Search ...",id:"search"})})]})}),s("br",{})]}),s("div",{children:s(o,{lang:"xml",children:`<li>
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
</li>`})})]}),S("section",{className:"row",children:[S("div",{children:[S("p",{children:["Navigation can be split into a left and a right section by placing an empty ",s("code",{children:"div"})," element to act as gap."]}),s("nav",{className:"disable-mobile",children:S("ul",{children:[s("li",{children:s("a",{href:"",children:"Home"})}),s("li",{children:s("a",{href:"",children:"Menu"})}),s("div",{}),s("li",{children:s("a",{href:"",children:s("button",{children:"Download"})})}),s("li",{children:s("a",{href:"",children:s("button",{type:"reset",children:S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),s("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})}),s("br",{})]}),s("div",{children:s(o,{lang:"xml",children:`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`})})]}),S("section",{className:"row",children:[S("div",{children:[S("p",{children:["Navigation can be placed inside an ",s("code",{children:"article"})," to create a more striking display."]}),s("article",{children:s("nav",{className:"disable-mobile",children:S("ul",{children:[s("li",{children:S("a",{href:"",children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),s("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),s("span",{children:"Home"})]})}),s("li",{children:S("a",{href:"",children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),s("path",{d:"m18 15 4-4"}),s("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),s("span",{children:"Docs"})]})}),s("li",{children:s("input",{type:"search",placeholder:"Search..."})}),s("div",{}),s("li",{children:s("a",{href:"",children:s("button",{type:"reset",children:S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),s("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}),s("br",{})]}),s("div",{children:s(o,{lang:"xml",children:`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`})})]}),S("section",{className:"row",children:[S("div",{children:[s("p",{children:"Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout."}),S("figure",{children:[s("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-nav",e,t)}),s("figcaption",{children:"Showcase of navigation on a smaller device"})]})]}),s("div",{children:s(o,{lang:"xml",children:`<header>
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
</header>`})})]})]})}n(Xe,"Navigation");import{useState as Jt}from"https://esm.sh/react@19.2.6";import{Fragment as xt,jsx as L,jsxs as Q}from"https://esm.sh/react@19.2.6/jsx-runtime";function yt(){return Q(xt,{children:[L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),L("p",{children:L("button",{children:"Discover"})})]})}n(yt,"Tab1");function wt(){return Q(xt,{children:[L("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),L("div",{children:L("blockquote",{children:"lorem ipsum install"})})]})}n(wt,"Tab2");function kt(){return L(xt,{children:L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}n(kt,"Tab3");function et({theme:e}){let t=B(),[i,H]=Jt("tab-1");return Q(u,{theme:e,children:[Q("section",{className:"row",children:[Q("div",{children:[Q("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",L("code",{children:"<menu>"})," element ",L("b",{children:"outside"})," of a ",L("code",{children:"nav"})," element."]}),L("div",{className:"disable-mobile",children:Q("menu",{children:[L("li",{"aria-selected":i==="tab-1",children:Q("a",{onClick:()=>H("tab-1"),children:[Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),L("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),L("span",{children:"Home"})]})}),L("li",{"aria-selected":i==="tab-2",children:Q("a",{onClick:()=>H("tab-2"),children:[L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:L("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),L("span",{children:"Install"})]})}),L("li",{"aria-selected":i==="tab-3",children:Q("a",{onClick:()=>H("tab-3"),children:[Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L("circle",{cx:"12",cy:"12",r:"10"}),L("path",{d:"M17 12h.01"}),L("path",{d:"M12 12h.01"}),L("path",{d:"M7 12h.01"})]}),L("span",{children:"More"})]})})]})}),Q("div",{children:[i==="tab-1"?L(yt,{}):null,i==="tab-2"?L(wt,{}):null,i==="tab-3"?L(kt,{}):null]})]}),L("div",{children:L(o,{lang:"xml",children:`<main>
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
</main>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[L("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),Q("figure",{children:[L("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-tabs-nav",e,t)}),L("figcaption",{children:"Showcase of tabbed navigation in a smaller container or device."})]})]}),L("div",{children:L(o,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[Q("p",{children:["Tabs can be nested and they can be combiend with ",L("code",{children:"summary"})," elements to be collapsible."]}),Q("figure",{children:[L("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("mobile-tabs-exp-nav",e,t)}),L("figcaption",{children:"Showcase of tabbed navigation with detail and colapsible sections"})]})]}),L("div",{children:L(o,{lang:"xml",children:`<menu<
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
</menu>`})})]})]})}n(et,"Tabs");import{jsx as G,jsxs as le}from"https://esm.sh/react@19.2.6/jsx-runtime";function tt({theme:e}){let t=B();return le(u,{theme:e,children:[le("section",{className:"row",children:[le("div",{children:[G("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),G("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),G("nav",{children:le("menu",{className:"disable-mobile",children:[G("li",{"aria-selected":!0,children:le("a",{href:"",children:[le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),G("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),G("span",{children:"Home"})]})}),G("li",{children:le("a",{href:"",children:[le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M4 11a9 9 0 0 1 9 9"}),G("path",{d:"M4 4a16 16 0 0 1 16 16"}),G("circle",{cx:"5",cy:"19",r:"1"})]}),G("span",{children:"Latest"})]})}),G("li",{children:le("a",{href:"",children:[le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),G("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),G("circle",{cx:"10",cy:"7",r:"4"})]}),G("span",{children:"Profile"})]})})]})})]}),G("div",{children:G(o,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),le("section",{className:"row",children:[le("div",{children:[le("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",G("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),le("figure",{children:[G("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-menu",e,t)}),G("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),G("div",{children:G(o,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}n(tt,"Menu");import{jsx as A,jsxs as ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function ot({theme:e}){return A(u,{theme:e,children:ve("section",{className:"row",children:[ve("div",{children:[A("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),ve("p",{children:["By default you can add a ",A("b",{children:"meta"})," tag with the ",A("code",{children:"color-scheme"})," name and ",A("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),A("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),ve("table",{children:[A("thead",{children:ve("tr",{children:[A("th",{children:"Theme"}),A("th",{children:"Light"}),A("th",{children:"Dark"})]})}),ve("tbody",{children:[ve("tr",{children:[A("td",{children:"Default"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"Blog"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"App"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"Delivery"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]}),ve("tr",{children:[A("td",{children:"Landing"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]}),ve("tr",{children:[A("td",{children:"Newsletter"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]})]})]})]}),A("div",{children:A(o,{lang:"xml",children:`<html>
  <head>
    <!-- both variants -->
    <meta name="color-scheme" content="light dark"/>
    
    <!-- only dark variant -->
    <meta name="color-scheme" content="dark"/>
  </head>
</html>`})})]})})}n(ot,"DarkMode");import{jsx as de,jsxs as Ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function at({theme:e}){return Ce(u,{theme:e,children:[Ce("section",{className:"row",children:[Ce("div",{children:[de("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),de("p",{children:"When inside buttons the width & height is aligned to match the font size."}),de("p",{children:Ce("button",{children:[Ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[de("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),de("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),de("span",{children:"Home"})]})})]}),de("div",{children:de(o,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),Ce("section",{className:"row",children:[Ce("div",{children:[de("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),Ce("div",{role:"group",children:[Ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[de("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),de("circle",{cx:"12",cy:"10",r:"3"})]}),de("b",{children:"Test Address, SE11 8CL"})]})]}),de("div",{children:de(o,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}n(at,"Icons");import{jsx as R,jsxs as V}from"https://esm.sh/react@19.2.6/jsx-runtime";function it({theme:e}){let t=B();return V(u,{theme:e,children:[V("section",{className:"row",children:[V("div",{children:[R("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),V("p",{children:["The threshold between wide and narrow happens at ",R("b",{children:"600px"}),"."]}),R("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),V("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-typography",e,t)}),V("figcaption",{children:["More information ",R("a",{href:r.doc("typography",e,t),children:"here"})]})]})]}),R("div",{children:R(o,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),V("section",{className:"row",children:[V("div",{children:[R("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),V("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-nav",e,t)}),V("figcaption",{children:["More information ",R("a",{href:r.doc("navigation",e,t),children:"here"})," or ",R("a",{href:r.doc("tabs",e,t),children:"here"}),"."]})]})]}),R("div",{children:R(o,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a href="...">...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),V("section",{className:"row",children:[V("div",{children:[R("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),V("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-menu",e,t)}),V("figcaption",{children:["More information ",R("a",{href:r.doc("menu",e,t),children:"here"}),"."]})]})]}),R("div",{children:R(o,{lang:"xml",children:`<header>
  <menu>
    <li><a href="...">...</a></li>
    ....
  </menu>
</header>`})})]}),V("section",{className:"row",children:[V("div",{children:[V("p",{children:["Finally, elements that have the ",R("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),V("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-columns",e,t)}),V("figcaption",{children:["More information ",R("a",{href:r.doc("grid",e,t),children:"here"}),"."]})]})]}),R("div",{children:R(o,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),V("section",{className:"row",children:[V("div",{children:[V("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",R("code",{children:"disable-mobile"})," class."]}),V("p",{children:["You can also instruct elements to be hidden on mobile, via the ",R("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",R("code",{children:"hiden-on-desktop"})," class."]})]}),R("div",{})]})]})}n(it,"Mobile");import{jsx as c,jsxs as q}from"https://esm.sh/react@19.2.6/jsx-runtime";function st({theme:e}){let t=B();return q(u,{theme:e,children:[q("section",{className:"row",children:[q("div",{children:[q("p",{children:["By wrapping together a elements inside an ",c("code",{children:"article"}),", you can create a basic card-type layout."]}),q("div",{className:"row disable-mobile",children:[c("div",{children:c("article",{children:c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})}),c("div",{children:c("article",{className:"primary",children:c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <p>
    Lorem ipsum ...
  </p>
</article>

<article class="primary">
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["Cards can wrap headings and paragraphs and can be styled with ",c("code",{children:"success"}),", ",c("code",{children:"error"}),", etc classes."]}),q("div",{className:"row disable-mobile",children:[c("div",{children:q("article",{children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:q("article",{className:"secondary",children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),q("div",{className:"row disable-mobile",children:[c("div",{children:q("article",{className:"success",children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:q("article",{className:"error",children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),c("p",{children:q("small",{children:["You can learn more about classes ",c("a",{href:r.doc("classes",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`
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

...`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["The ",c("code",{children:"header"})," element of a card will be styled so it's more proeminent."]}),q("div",{className:"row disable-mobile",children:[c("div",{children:q("article",{children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:q("article",{className:"success",children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <header>Title</header>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),q("section",{className:"row",children:[q("div",{children:[c("p",{children:"Likewise, the first image tag used in a card will be styled as a header image."}),q("div",{className:"row disable-mobile",children:[c("div",{children:q("article",{children:[c("img",{height:"80",src:"https://picsum.photos/id/16/320/80",alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:q("article",{className:"error",children:[c("img",{height:"80",src:"https://picsum.photos/id/16/420/80",alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),q("section",{className:"row",children:[q("div",{children:[c("p",{children:"You can combine elements inside a card to produce quite compelx results, as the example below shows."}),c("p",{children:"By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML."}),q("article",{children:[c("img",{height:"160",src:"https://picsum.photos/id/16/480/160",alt:"header image"}),c("h4",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),c("p",{children:c("button",{children:"Button"})})]})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
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
</article>`})})]}),q("section",{className:"row",children:[q("div",{children:[c("p",{children:"If we combine groups, columns and cards, we can experiment with even more daring layouts all while using just semantic HTML and minimal classes."}),q("article",{children:[c("div",{role:"group",children:q("div",{className:"row",children:[c("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"header image"}),q("div",{children:[c("b",{children:"Title"}),c("br",{}),c("span",{children:"Subtitle"})]})]})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),q("p",{children:[c("mark",{children:"v12.5.3"}),c("mark",{className:"success",children:"success"})]}),c("hr",{}),c("p",{children:c("button",{children:"Button"})})]}),c("p",{children:q("small",{children:["You can learn more about groups ",c("a",{href:r.doc("groups",e,t),children:"here"}),"."]})}),c("p",{children:q("small",{children:["You can learn more about columns ",c("a",{href:r.doc("grid",e,t),children:"here"}),"."]})})]}),c("div",{children:c(o,{lang:"xml",children:`<article>
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
</article>`})})]})]})}n(st,"Cards");import{jsx as v,jsxs as Y}from"https://esm.sh/react@19.2.6/jsx-runtime";function rt({theme:e}){return v(u,{theme:e,children:v("section",{children:Y("div",{children:[Y("p",{children:[Fe," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),Y("table",{children:[v("thead",{children:Y("tr",{children:[v("th",{children:"Domain"}),v("th",{children:"Class"}),v("th",{children:"Effect"})]})}),Y("tbody",{children:[Y("tr",{children:[v("td",{rowSpan:4,children:"Containers"}),v("td",{children:v("code",{children:"container-medium"})}),v("td",{children:"Sets the maximum size of the container to 800px."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"container-narrow"})}),v("td",{children:"Sets the maximum size of the container to 1200px."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"container-wide"})}),v("td",{children:"Sets the maximum size of the container to 1600px."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"container-full"})}),v("td",{children:"Sets the  maximum size of the container to 100% (width of the screen)."})]}),Y("tr",{children:[v("td",{rowSpan:3,children:"Layout"}),v("td",{children:v("code",{children:"row"})}),v("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"col"})}),v("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"col-N"})}),Y("td",{children:["Horizontal space is divided in 12 equal columns. From ",v("code",{children:"col-1"})," to ",v("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),Y("tr",{children:[v("td",{rowSpan:4,children:"Mobile"}),v("td",{children:v("code",{children:"hide-on-mobile"})}),v("td",{children:"Hides an element if on small displays."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"hide-on-desktop"})}),v("td",{children:"Hides an element if on large displays."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"disable-mobile"})}),Y("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",v("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),Y("tr",{children:[v("td",{children:v("code",{children:"flex"})}),v("td",{children:"Displays content normally on wider screens but switches to a row layout on smaller devices."})]}),Y("tr",{children:[v("td",{rowSpan:5,children:"Colors"}),v("td",{children:v("code",{children:"primary"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"secondary"})}),v("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"success"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"error"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),Y("tr",{children:[v("td",{children:v("code",{children:"inverted"})}),v("td",{children:"Takes any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),Y("tr",{children:[v("td",{rowSpan:1,children:"Alignment"}),v("td",{children:v("code",{children:"align-center"})}),v("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}n(rt,"Classes");import{jsx as y,jsxs as te}from"https://esm.sh/react@19.2.6/jsx-runtime";function nt({theme:e}){let t=B();return te(u,{theme:e,children:[te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Any layout element, such as a ",y("code",{children:"div"})," or ",y("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",y("code",{children:"row"})," and ",y("code",{children:"col"})," classes."]}),te("article",{children:[te("div",{className:"row disable-mobile",children:[y("div",{className:"col",children:y("code",{style:{width:"100%"},children:"col"})}),y("div",{className:"col",children:y("code",{style:{width:"100%"},children:"col"})})]}),te("div",{className:"row disable-mobile",children:[y("div",{className:"col",children:y("code",{style:{width:"100%"},children:"col"})}),y("div",{className:"col",children:y("code",{style:{width:"100%"},children:"col"})}),y("div",{className:"col",children:y("code",{style:{width:"100%"},children:"col"})})]})]})]}),y("div",{children:y(o,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[y("p",{children:"Like similar CSS libraries, a grid contains 12 columns."}),te("p",{children:["An element with class ",y("code",{children:"col-1"})," will span just one column, whilst an element with class ",y("code",{children:"col-4"})," will span 4 columns (or 33.333% of the available space) and an element with ",y("code",{children:"col-12"})," will span the whole width of the grid."]}),te("p",{children:["Grids can combine columns of multiple widths. The generic ",y("code",{children:"col"})," class will fill all available space."]}),y("article",{children:te("div",{className:"row disable-mobile",children:[y("div",{className:"col-2",children:y("code",{style:{width:"100%"},children:"col-2"})}),y("div",{className:"col",children:y("code",{style:{width:"100%"},children:"col"})}),y("div",{className:"col-6",children:y("code",{style:{width:"100%"},children:"col-6"})})]})})]}),y("div",{children:y(o,{lang:"xml",children:`<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[y("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),te("figure",{children:[y("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-columns",e,t)}),y("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),y("div",{children:y(o,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Finally, you can even omit the ",y("code",{children:"col"})," class entirely. A ",y("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",y("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",y("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),y("article",{children:te("div",{className:"row disable-mobile",children:[y("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"ssample image "}),y("div",{children:y("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),y("div",{children:y(o,{lang:"xml",children:`<div class="row">
  <p width="80" height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}n(nt,"Grids");import{jsx as z,jsxs as fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function lt({theme:e}){return z(u,{theme:e,children:fe("section",{className:"row",children:[fe("div",{children:[z("p",{children:"There are three classes that allow you to set different content widths:"}),fe("table",{children:[z("thead",{children:fe("tr",{children:[z("th",{children:"Class"}),z("th",{children:"Width"}),z("th",{children:"Info"})]})}),fe("tbody",{children:[fe("tr",{children:[z("td",{children:z("code",{children:"container-narrow"})}),z("td",{children:"800px"}),z("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),fe("tr",{children:[z("td",{children:z("code",{children:"container-medium"})}),z("td",{children:"1200px"}),z("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),fe("tr",{children:[z("td",{children:z("code",{children:"container-wide"})}),z("td",{children:"1600px"}),z("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]}),fe("tr",{children:[z("td",{children:z("code",{children:"container-full"})}),z("td",{children:"100%"}),fe("td",{children:["Sets the size of the container to 100%. When ",z("code",{children:"container-wide"})," is not enough."]})]})]})]}),z("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),z("div",{children:z(o,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}n(lt,"Containers");import{jsx as W,jsxs as J}from"https://esm.sh/react@19.2.6/jsx-runtime";function dt({theme:e}){return J(u,{theme:e,children:[J("section",{className:"row",children:[J("div",{children:[J("p",{children:["Some elements are visually meant to ",W("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",W("code",{children:"group"})," role."]}),J("p",{children:["In the case of a group of ",W("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),J("p",{role:"group",children:[W("button",{children:"Option 1"}),W("button",{type:"reset",children:"Option 2"})]})]}),W("div",{children:W(o,{lang:"xml",children:`<p role="group">
  <button>
    Option 1
  </button>f
  <button type="reset">
    Option 2
  </button>
</p>`})})]}),J("section",{className:"row",children:[J("div",{children:[J("p",{children:["In the case of a group of ",W("code",{children:"marks"}),", they're also pulled together and have any vertical space dissapear."]}),J("p",{role:"group",children:[W("mark",{children:"#test"}),W("mark",{className:"success",children:"v1.0.0"})]})]}),W("div",{children:W(o,{lang:"xml",children:`<p role="group">
  <mark>
    #test
  </mark>
  <mark class="success">
    v1.0.0
  </mark>
</p>`})})]}),J("section",{className:"row",children:[J("div",{children:[W("p",{children:"Grouping elements really shines in the case of forms and form inputs. You can see below an example of a compact login form."}),W("form",{children:J("div",{role:"group",children:[W("input",{id:"email",type:"email",placeholder:"Email"}),W("input",{id:"password",type:"password",placeholder:"Password"}),W("input",{type:"submit",value:"Login"})]})})]}),W("div",{children:W(o,{lang:"xml",children:`<form>
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
</form>`})})]}),J("section",{className:"row",children:[J("div",{children:[W("p",{children:"Grouping elements can be used to style icons and text together."}),J("div",{role:"group",children:[J("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),W("circle",{cx:"12",cy:"10",r:"3"})]}),W("b",{children:"Test Address, SE11 8CL"})]})]}),W("div",{children:W(o,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...>
  </svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]}),J("section",{className:"row",children:[J("div",{children:[W("p",{children:"Other elements, such as images, can also be grouped, although the impact isn't as pronounced."}),J("p",{role:"group",children:[W("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"image 1"}),W("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/120/120",alt:"image 2"})]})]}),W("div",{children:W(o,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}n(dt,"Groups");import{jsx as ce,jsxs as ye}from"https://esm.sh/react@19.2.6/jsx-runtime";function ct({theme:e}){let t=B();return ye(u,{theme:e,children:[ye("section",{className:"row",children:[ye("div",{children:[ye("p",{children:["A ",ce("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",ce("code",{children:"nav"})," or ",ce("code",{children:"menu"}),"):"]}),ce("iframe",{scrolling:"no",width:"100%",height:275,src:r.example("layout-header-simple",e,t)})]}),ce("div",{children:ce(o,{lang:"xml",children:`<header>
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
</main>`})})]}),ye("section",{className:"row",children:[ye("div",{children:[ye("p",{children:['You create more complex "hero" layouts by placing any element, such as a ',ce("code",{children:"div"}),", inside a header. Note that heroes are defined by the extra top and bottom padding child elements receive."]}),ce("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-header-sub",e,t)})]}),ce("div",{children:ce(o,{lang:"xml",children:`<!-- nav header -->
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
</main>`})})]}),ye("section",{className:"row",children:[ye("div",{children:[ye("p",{children:["Finally, ",ce("code",{children:"aside"}),' is another specialised element that can be used in a header in order to create a "banner" element, either to be placed at the top of the page or mid-content.']}),ce("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-header-section",e,t)})]}),ce("div",{children:ce(o,{lang:"xml",children:`<main>
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
</main>`})})]})]})}n(ct,"Header");import{jsx as j,jsxs as Le}from"https://esm.sh/react@19.2.6/jsx-runtime";function pt({theme:e}){let t=B();return j(u,{theme:e,children:Le("section",{className:"row",children:[Le("div",{children:[Le("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",j("code",{children:"nav"})," element."]}),Le("p",{children:["As with unordered lists, you can denote the selected elment using the ",j("code",{children:"aria-selected"})," attribute."]}),j("nav",{className:"disable-mobile",children:Le("ol",{children:[j("li",{children:j("a",{href:"",children:"Home"})}),j("li",{children:j("a",{href:"",children:"Library"})}),j("li",{"aria-selected":!0,children:j("a",{href:"",children:"Data"})})]})}),j("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),j("nav",{className:"disable-mobile",children:Le("ol",{children:[j("li",{children:Le("a",{href:"",children:[Le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[j("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),j("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),j("span",{children:"Home"})]})}),j("li",{"aria-selected":!0,children:j("a",{href:"",children:"Folder"})})]})}),j("p",{children:"Finally, breadcrumbs are also responsive."}),Le("figure",{children:[j("iframe",{scrolling:"no",width:"100%",height:300,src:r.example("mobile-breadcrumbs",e,t)}),j("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),j("div",{children:j(o,{lang:"xml",children:`<nav>
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
</nav>`})})]})})}n(pt,"Breadcrumbs");import{useState as Xt}from"https://esm.sh/react@19.2.6";import{jsx as X,jsxs as $e}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ct(){let[e,t]=Xt("tab-1");return X("main",{children:$e("div",{className:"row disable-mobile",children:[X("aside",{children:X("div",{children:$e("menu",{children:[X("li",{"aria-selected":e==="tab-1",children:$e("a",{onClick:()=>t("tab-1"),children:[$e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),X("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),X("span",{children:"Home"})]})}),X("li",{"aria-selected":e==="tab-2",children:$e("a",{onClick:()=>t("tab-2"),children:[X("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:X("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),X("span",{children:"Install"})]})}),X("li",{"aria-selected":e==="tab-3",children:$e("a",{onClick:()=>t("tab-3"),children:[$e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X("circle",{cx:"12",cy:"12",r:"10"}),X("path",{d:"M17 12h.01"}),X("path",{d:"M12 12h.01"}),X("path",{d:"M7 12h.01"})]}),X("span",{children:"More"})]})})]})})}),$e("div",{style:{flexGrow:1},children:[e==="tab-1"?X(yt,{}):null,e==="tab-2"?X(wt,{}):null,e==="tab-3"?X(kt,{}):null]})]})})}n(Ct,"MobileTabs");import{useState as eo}from"https://esm.sh/react@19.2.6";import{jsx as x,jsxs as K}from"https://esm.sh/react@19.2.6/jsx-runtime";function mt({theme:e}){let[t,i]=eo("primary");return x(u,{theme:e,children:K("section",{className:"row",children:[K("div",{children:[K("p",{children:["You can apply several color modes with the help of few classes like ",x("code",{children:"primary"}),", ",x("code",{children:"secondary"}),", ",x("code",{children:"success"})," and ",x("code",{children:"error"}),"."]}),K("p",{children:["You can combine them with the ",x("code",{children:"inverted"})," class to change the colors of various components."]}),x("form",{children:K("label",{children:[x("span",{children:x("b",{children:"Color mode"})}),K("select",{onChange:n(h=>i(h.target.value),"onColorClassChange"),children:[x("option",{value:"primary",children:"Primary"}),x("option",{value:"secondary",children:"Secondary"}),x("option",{value:"success",children:"Success"}),x("option",{value:"error",children:"Error"})]})]})}),x("hr",{}),K("section",{children:[K("hgroup",{children:[K("h1",{children:[x("span",{className:`${t}`,children:"Lorem ipsum dolor"}),x("br",{}),"sit amet"]}),K("h4",{children:["Lorem ipsum dolor sit amet,",x("br",{}),x("span",{className:`${t} inverted`,children:"sed do amet"})]})]}),K("p",{role:"group",children:[x("mark",{className:`${t}`,children:"v12.5.33"}),x("mark",{className:`${t} inverted`,children:"Passing"})]})]}),x("section",{children:x("form",{children:K("div",{role:"group",className:`${t}`,children:[x("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),x("input",{type:"submit",value:"Subscribe"})]})})}),K("section",{children:[K("div",{className:"row",children:[K("article",{className:`${t}`,children:[K("hgroup",{children:[x("h4",{children:"Hobby"}),x("p",{children:x("b",{children:"Free"})})]}),x("p",{children:"Includes"}),K("ul",{children:[x("li",{children:"No credit card"}),x("li",{children:"All platforms"})]})]}),K("article",{className:`${t} inverted`,children:[K("hgroup",{children:[x("h4",{children:"Enterprise"}),x("p",{children:x("b",{children:x("a",{href:"",children:"Contact us"})})})]}),x("p",{children:"Includes"}),K("ul",{children:[x("li",{children:"Everything in Hobby"}),x("li",{children:"24/7 support"})]})]})]}),x("blockquote",{className:`${t}`,children:K("hgroup",{children:[x("h4",{children:"More information"}),x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),K("p",{children:["Link ",x("a",{href:"",children:"here"}),"."]})]})})]})]}),x("div",{children:x(o,{lang:"xml",children:`...
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
`})})]})})}n(mt,"Colors");import{jsx as De,jsxs as Be}from"https://esm.sh/react@19.2.6/jsx-runtime";function ut({theme:e}){let t=B();return Be(u,{theme:e,children:[Be("section",{className:"row",children:[Be("div",{children:[Be("p",{children:["A ",De("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),De("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-footer-simple",e,t)})]}),De("div",{children:De(o,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer with a <a href="...">link</a>.
  </div>
</footer>`})})]}),Be("section",{className:"row",children:[Be("div",{children:[De("p",{children:"More complex footers can contain information divided by columns, etc."}),De("iframe",{scrolling:"no",width:"100%",height:500,src:r.example("layout-footer-complex",e,t)})]}),De("div",{children:De(o,{lang:"xml",children:`<footer>
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
</footer>`})})]})]})}n(ut,"Footer");import{useState as to}from"https://esm.sh/react@19.2.6";import{jsx as M,jsxs as Z}from"https://esm.sh/react@19.2.6/jsx-runtime";function ht({theme:e}){let[t,i]=to(!0);return Z(u,{theme:e,children:[Z("section",{className:"row",children:[Z("div",{children:[Z("p",{children:["You can add a loading indicator to an element by adding the ",M("code",{children:"aria-busy"})," attribute, with ",Z("span",{role:"group",style:{display:"inline-flex"},children:[M("mark",{onClick:()=>i(!0),className:t?"success":"",children:"true"}),M("mark",{onClick:()=>i(!1),className:t?"":"success",children:"false"})]}),"."]}),M("p",{children:"For example, it can be applied to buttons (with or without exiting icons):"}),Z("p",{className:"flex",children:[M("button",{"aria-busy":t,children:Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"M4 11a9 9 0 0 1 9 9"}),M("path",{d:"M4 4a16 16 0 0 1 16 16"}),M("circle",{cx:"5",cy:"19",r:"1"})]})}),M("button",{"aria-busy":t,role:"reset",children:"Button"}),Z("button",{"aria-busy":t,className:"secondary",children:[Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),M("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),M("span",{children:"Home"})]}),Z("button",{type:"reset","aria-busy":t,children:[M("span",{children:"Play"}),Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"M21 4v16"}),M("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]})]}),M("div",{children:M(o,{lang:"xml",children:`<!-- icon button -->
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
</button>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[M("p",{children:"It can be applied to paragraphs or other text elements:"}),M("p",{"aria-busy":t,children:"Loading..."}),M("p",{children:M("a",{href:"","aria-busy":t,children:"Click me"})})]}),M("div",{children:M(o,{lang:"xml",children:`<p${t?" aria-busy":""}>Loading...</p>
          
<a href="..."${t?" aria-busy":""}>Click me</a>`})})]}),Z("section",{className:"row",children:[M("div",{}),M("div",{})]}),Z("section",{className:"row",children:[Z("div",{children:[M("p",{children:"Or it can be applied to block elements. In this case the whole content is hidden when loading."}),M("blockquote",{"aria-busy":t,children:Z("p",{children:["Press",M("kbd",{children:"Ctrl + Q"}),"to quit"]})})]}),M("div",{children:M(o,{lang:"xml",children:`<blockquote${t?" aria-busy":""}>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[M("p",{children:"And cards of different types, where the loading spinner is also horizontally centered."}),M("article",{"aria-busy":t,children:Z("details",{open:!0,children:[M("summary",{children:"Note"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),Z("article",{"aria-busy":t,className:"success",children:[M("span",{children:M("b",{children:"Title"})}),M("p",{children:"Lorem ipsum ..."})]})]}),M("div",{children:M(o,{lang:"xml",children:`<article${t?" aria-busy":""}>
  <details>
    <summary>...</summary>
    <p>...</p>
  </details>
</article>

<article${t?" aria-busy":""}>
  <span><b>...</b></span>
  <p>...</p>
</article>`})})]})]})}n(ht,"Loading");import{jsx as a,jsxs as N}from"https://esm.sh/react@19.2.6/jsx-runtime";function gt({theme:e}){let t=B();return N(u,{theme:e,children:[N("section",{className:"row",children:[N("div",{children:[N("p",{children:[Fe," supports ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels",target:"_blank",children:"CSS carousels"})," with sensible defaults. Any element can be turned into a carousel by adding the ",a("code",{children:'aria-roledescription="carousel"'})," attribute (as recommended by ",a("a",{href:'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/"',target:"_blank",children:"the W3C"}),"), alongside an optional ",a("code",{children:"aria-label"}),", and a single child unordered list (",a("code",{children:"ol"}),")."]}),a("div",{"aria-roledescription":"carousel","aria-label":"Simple Carousel",children:N("ol",{children:[a("li",{children:N("div",{children:[a("h3",{children:"Page 1"}),a("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}),a("li",{children:N("div",{children:[a("h3",{children:"Page 2"}),a("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),a("div",{children:a("a",{href:"",children:"https://example.com"})})]})}),a("li",{children:N("div",{children:[a("h3",{children:"Page 3"}),a("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),a("pre",{children:a("code",{children:"d488e0a9-fd57-4876-bc57-fa373d949379"})})]})})]})})]}),a("div",{children:a(o,{lang:"xml",children:""})})]}),N("section",{className:"row",children:[N("div",{children:[a("p",{children:"Carousels can be comprised just of images."}),a("div",{"aria-roledescription":"carousel","aria-label":"Image Carousel",children:N("ol",{children:[a("li",{children:a("img",{width:"100%",height:250,src:"https://picsum.photos/id/16/500/250",alt:"Slide Image 1"})}),a("li",{children:a("img",{width:"100%",height:250,src:"https://picsum.photos/id/100/500/250",alt:"Slide Image 2"})}),a("li",{children:a("img",{width:"100%",height:250,src:"https://picsum.photos/id/40/500/250",alt:"Slide Image 3"})})]})}),a("figcaption",{children:"With one caption for the entire element."})]}),a("div",{children:a(o,{lang:"xml",children:""})})]}),N("section",{className:"row",children:[N("div",{children:[a("p",{children:"Complex cards"}),a("div",{"aria-roledescription":"carousel","aria-label":"Ordering Menu",children:N("ol",{className:"row",children:[a("li",{className:"col-6",children:N("article",{children:[a("img",{height:"120",src:"https://picsum.photos/id/16/480/120",alt:"header image"}),N("hgroup",{children:[a("h4",{children:"Tortilla Buritos"}),a("p",{children:"Lorem ipsum dolor sit amet"})]}),a("p",{children:a("mark",{className:"success",children:"25% off"})})]})}),a("li",{className:"col-6",children:N("article",{children:[a("img",{height:"120",src:"https://picsum.photos/id/35/480/120",alt:"header image"}),N("hgroup",{children:[a("h4",{children:"Honest Burgers"}),a("p",{children:"Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"})]})]})}),a("li",{className:"col-6"}),a("li",{className:"col-6"})]})})]}),a("div",{children:a(o,{lang:"xml",children:""})})]}),N("section",{className:"row",children:[N("div",{children:[a("p",{children:"Pictures"}),a("article",{"aria-roledescription":"carousel","aria-label":"Plane Tickets",children:N("ol",{className:"row",children:[a("li",{className:"col-11",children:N("article",{children:[a(zt,{src:"New York",dest:"Paris"}),a("hr",{}),a(vt,{start:"12:15",startDelay:"On time",end:"20:00",endDelay:"On time",type:"Direct"}),a(vt,{start:"13:25",startDelay:"On time",end:"21:00",endDelay:"Delayed",type:"Direct"}),a(Gt,{}),a("hr",{}),a(Yt,{})]})}),a("li",{className:"col-11",children:N("article",{children:[a(zt,{src:"Tokyo",dest:"London"}),a("hr",{}),a(vt,{start:"06:00",startDelay:"On time",end:"18:00",endDelay:"Delayed",type:"Direct"}),a(vt,{start:"06:15",startDelay:"On time",end:"18:15",endDelay:"On time",type:"Direct"}),a(Gt,{}),a("hr",{}),a(Yt,{})]})})]})})]}),a("div",{})]}),N("section",{className:"row",children:[N("div",{children:[a("p",{children:"Carousel with multi-page"}),a("div",{"aria-roledescription":"carousel","aria-label":"Multi Column Example",children:N("ol",{children:[a("li",{children:N("div",{className:"row",children:[a("div",{children:"Page 1.1"}),a("div",{children:"Page 1.2"})]})}),a("li",{children:N("div",{className:"row",children:[a("div",{children:"Page 2.1"}),a("div",{children:"Page 2.2"})]})})]})})]}),a("div",{})]})]})}n(gt,"Carousel");function zt(e){return a("div",{role:"group",children:N("div",{className:"row",children:[a("mark",{children:N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a("path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}),a("path",{d:"M13 5v2"}),a("path",{d:"M13 17v2"}),a("path",{d:"M13 11v2"})]})}),N("div",{children:[a("b",{children:e.src}),a("br",{}),a("b",{children:e.dest})]})]})})}n(zt,"OrderingHeader");function vt(e){return N("div",{className:"row",children:[N("div",{children:[a("b",{children:e.start}),a("br",{}),a("i",{children:a("small",{className:e.startDelay==="Delayed"?"error":"",children:e.startDelay})})]}),a("div",{children:N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a("path",{d:"M5 12h14"}),a("path",{d:"m12 5 7 7-7 7"})]})}),N("div",{children:[a("b",{children:e.end}),a("br",{}),a("i",{children:a("small",{className:e.endDelay==="Delayed"?"error":"",children:e.endDelay})})]}),a("div",{children:a("mark",{children:e.type})})]})}n(vt,"OrderingDetails");function Gt(){return a("div",{children:a("a",{children:a("b",{children:"View more options"})})})}n(Gt,"OrderingOptions");function Yt(){return a("div",{children:a("form",{children:N("div",{className:"row",children:[N("select",{children:[a("option",{children:"Single"}),a("option",{children:"Return"})]}),N("select",{children:[a("option",{children:"1"}),a("option",{children:"2"}),a("option",{children:"3"}),a("option",{children:"4"})]}),N("button",{type:"reset",children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a("path",{d:"M13 19a4 4 0 00-8 0"}),a("path",{d:"M16 10h2"}),a("path",{d:"M16 14h2"}),a("circle",{cx:"9",cy:"12",r:"3"}),a("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"})]}),a("span",{children:"Clubcard"})]}),a("button",{type:"submit",children:"Go"})]})})})}n(Yt,"OrderingControl");var r=class e{static{n(this,"RouteMaster")}static baseRoute="";static home(t,i){return`${e.getBase(i)}${t}/`}static showcase(t,i){return`${e.getBase(i)}${t}/showcases.html`}static doc(t,i,H){let h=e.getBase(H);switch(t){case"typography":return`${h}${i}/pages/docs/basics/${d(Ae)}`;case"buttons":return`${h}${i}/pages/docs/basics/${d(He)}`;case"blockquotes":return`${h}${i}/pages/docs/basics/${d(We)}`;case"code":return`${h}${i}/pages/docs/basics/${d(Oe)}`;case"figures":return`${h}${i}/pages/docs/basics/${d(Re)}`;case"lists":return`${h}${i}/pages/docs/basics/${d(_e)}`;case"links":return`${h}${i}/pages/docs/basics/${d(Pe)}`;case"summary":return`${h}${i}/pages/docs/basics/${d(ze)}`;case"table":return`${h}${i}/pages/docs/basics/${d(Ge)}`;case"tags":return`${h}${i}/pages/docs/basics/${d(Ye)}`;case"cards":return`${h}${i}/pages/docs/basics/${d(st)}`;case"forms-check":return`${h}${i}/pages/docs/forms/${d(Ve)}`;case"forms-disabled":return`${h}${i}/pages/docs/forms/${d(je)}`;case"forms-grouped":return`${h}${i}/pages/docs/forms/${d(Ue)}`;case"forms-normal":return`${h}${i}/pages/docs/forms/${d(Ke)}`;case"forms-validation":return`${h}${i}/pages/docs/forms/${d(Ze)}`;case"header":return`${h}${i}/pages/docs/layout/${d(ct)}`;case"footer":return`${h}${i}/pages/docs/layout/${d(ut)}`;case"carousel":return`${h}${i}/pages/docs/layout/${d(gt)}`;case"groups":return`${h}${i}/pages/docs/layout/${d(dt)}`;case"modal":return`${h}${i}/pages/docs/layout/${d(Je)}`;case"navigation":return`${h}${i}/pages/docs/navigation/${d(Xe)}`;case"breadcrumbs":return`${h}${i}/pages/docs/navigation/${d(pt)}`;case"tabs":return`${h}${i}/pages/docs/navigation/${d(et)}`;case"menu":return`${h}${i}/pages/docs/navigation/${d(tt)}`;case"dark-mode":return`${h}${i}/pages/docs/extra/${d(ot)}`;case"icons":return`${h}${i}/pages/docs/extra/${d(at)}`;case"loading":return`${h}${i}/pages/docs/extra/${d(ht)}`;case"mobile":return`${h}${i}/pages/docs/extra/${d(it)}`;case"classes":return`${h}${i}/pages/docs/custom/${d(rt)}`;case"grid":return`${h}${i}/pages/docs/custom/${d(nt)}`;case"containers":return`${h}${i}/pages/docs/custom/${d(lt)}`;case"colors":return`${h}${i}/pages/docs/custom/${d(mt)}`;default:return"/"}}static getDocFromRoute(t){let H=t.split("/docs/").pop(),[h,g]=H?.split("/")??[];switch(h){case"basics":switch(g){case d(Ae):return"typography";case d(He):return"buttons";case d(We):return"blockquotes";case d(Oe):return"code";case d(Re):return"figures";case d(Pe):return"links";case d(_e):return"lists";case d(ze):return"summary";case d(Ge):return"table";case d(Ye):return"tags";case d(st):return"cards"}case"forms":switch(g){case d(Ve):return"forms-check";case d(je):return"forms-disabled";case d(Ue):return"forms-grouped";case d(Ke):return"forms-normal";case d(Ze):return"forms-validation"}case"layout":switch(g){case d(ct):return"header";case d(ut):return"footer";case d(gt):return"carousel";case d(dt):return"groups";case d(Je):return"modal"}case"navigation":switch(g){case d(Xe):return"navigation";case d(pt):return"breadcrumbs";case d(et):return"tabs";case d(tt):return"menu"}case"extra":switch(g){case d(ot):return"dark-mode";case d(at):return"icons";case d(ht):return"loading";case d(it):return"mobile"}case"custom":switch(g){case d(rt):return"classes";case d(nt):return"grid";case d(lt):return"containers";case d(mt):return"colors"}}}static example(t,i,H){let h=e.getBase(H);switch(t){case"desktop-menu":return`${h}${i}/pages/examples/${d(qt)}`;case"layout-header-simple":return`${h}${i}/pages/examples/${d(Bt)}`;case"layout-header-sub":return`${h}${i}/pages/examples/${d(Ft)}`;case"layout-header-section":return`${h}${i}/pages/examples/${d(Dt)}`;case"layout-footer-simple":return`${h}${i}/pages/examples/${d(Ot)}`;case"layout-footer-complex":return`${h}${i}/pages/examples/${d(Rt)}`;case"mobile-columns":return`${h}${i}/pages/examples/${d(Ht)}`;case"mobile-menu":return`${h}${i}/pages/examples/${d(It)}`;case"mobile-nav":return`${h}${i}/pages/examples/${d(At)}`;case"mobile-breadcrumbs":return`${h}${i}/pages/examples/${d(Et)}`;case"mobile-tabs-nav":return`${h}${i}/pages/examples/${d(Ct)}`;case"mobile-tabs-exp-nav":return`${h}${i}/pages/examples/${d(Pt)}`;case"mobile-typography":return`${h}${i}/pages/examples/${d(Wt)}`}}static showcases(t,i){return`${e.getBase(i)}showcase/${t}/${Lt(t)}.html`}static showcaseImg(t,i,H="light"){return`${e.getBase(i)}showcase/${t}/${Lt(t)}.${H}.png`}static getBase(t){return t?t===""?"/":`/${t}/`:"/"}};function d(e){return`${Lt(e.name)}.html`}n(d,"htmlName");function Lt(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}n(Lt,"toKebabCase");import{jsx as P,jsxs as Se}from"https://esm.sh/react@19.2.6/jsx-runtime";function St(){let e=$t(),t=B(),i=n(H=>{let h=H.target.value;if(typeof window<"u"){let g=window.location.pathname;if(g.includes(e)){let pe=g.replace(e,h);window.location.href=pe}else if(g.includes(Ee)){let pe=g.split("/"),me=pe.indexOf(Ee)+1;pe.splice(me,0,h);let Vt=pe.join("/");window.location.href=Vt}else{let pe=`/${h}${g}`;window.location.href=pe}}},"onThemeChange");return P("nav",{children:Se("ul",{children:[P("li",{children:Se("a",{href:r.home(e,t),children:[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),P("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),P("span",{children:"Home"})]})}),P("li",{children:Se("a",{href:r.showcase(e,t),children:[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),P("circle",{cx:"12",cy:"12",r:"3"})]}),P("span",{children:"Showcase"})]})}),P("div",{}),P("li",{className:"hide-on-desktop",children:Se("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),P("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),P("span",{children:"GitHub"})]})}),P("li",{children:Se("select",{name:"theme-selector",onChange:i,children:[P("option",{value:"default",selected:e==="default",children:"Default"}),P("option",{value:"blog",selected:e==="blog",children:"Blog"}),P("option",{value:"app",selected:e==="app",children:"App"}),P("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),P("option",{value:"landing",selected:e==="landing",children:"Landing"}),P("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),P("li",{className:"hide-on-mobile",children:P("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:P("button",{type:"reset",children:Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),P("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}n(St,"TopNav");import{jsx as Nt,jsxs as oo}from"https://esm.sh/react@19.2.6/jsx-runtime";function Tt({theme:e,children:t}){return oo(Mt,{value:e,children:[Nt("header",{children:Nt(St,{})}),Nt("main",{children:t})]})}n(Tt,"HomeLayout");import{jsx as l,jsxs as he}from"https://esm.sh/react@19.2.6/jsx-runtime";function u({theme:e,children:t}){let i=B(),[H,h]=_t(!1),[g,pe]=_t(void 0);return ao(()=>{if(typeof window<"u"){let me=r.getDocFromRoute(window.location.pathname);pe(me)}},[]),l(Tt,{theme:e,children:he("div",{className:"row",children:[he("aside",{children:[he("div",{className:"hide-on-desktop",role:"group",children:[he("div",{className:"row",children:[l("div",{children:l("button",{onClick:()=>h(!H),children:H?he("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{d:"M18 6 6 18"}),l("path",{d:"m6 6 12 12"})]}):he("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),l("path",{d:"M7 8h10"}),l("path",{d:"M7 12h10"}),l("path",{d:"M7 16h10"})]})})}),l("span",{children:l("b",{children:"Chapters"})})]}),l("hr",{})]}),he("div",{className:H===!1||H===void 0?"hide-on-mobile":"",children:[he("menu",{children:[l("b",{children:"Basics"}),l("li",{"aria-selected":g==="typography",children:l("a",{href:r.doc("typography",e,i),children:"Typography"})}),l("li",{"aria-selected":g==="buttons",children:l("a",{href:r.doc("buttons",e,i),children:"Buttons"})}),l("li",{"aria-selected":g==="tags",children:l("a",{href:r.doc("tags",e,i),children:"Tags"})}),l("li",{"aria-selected":g==="lists",children:l("a",{href:r.doc("lists",e,i),children:"Lists"})}),l("li",{"aria-selected":g==="links",children:l("a",{href:r.doc("links",e,i),children:"Links"})}),l("li",{"aria-selected":g==="blockquotes",children:l("a",{href:r.doc("blockquotes",e,i),children:"Blokquotes"})}),l("li",{"aria-selected":g==="summary",children:l("a",{href:r.doc("summary",e,i),children:"Summary"})}),l("li",{"aria-selected":g==="code",children:l("a",{href:r.doc("code",e,i),children:"Code"})}),l("li",{"aria-selected":g==="table",children:l("a",{href:r.doc("table",e,i),children:"Table"})}),l("li",{"aria-selected":g==="figures",children:l("a",{href:r.doc("figures",e,i),children:"Figures"})}),l("li",{"aria-selected":g==="cards",children:l("a",{href:r.doc("cards",e,i),children:"Cards"})})]}),he("menu",{children:[l("b",{children:"Forms"}),l("li",{"aria-selected":g==="forms-normal",children:l("a",{href:r.doc("forms-normal",e,i),children:"Normal"})}),l("li",{"aria-selected":g==="forms-check",children:l("a",{href:r.doc("forms-check",e,i),children:"Checks & Radios"})}),l("li",{"aria-selected":g==="forms-grouped",children:l("a",{href:r.doc("forms-grouped",e,i),children:"Grouped"})}),l("li",{"aria-selected":g==="forms-disabled",children:l("a",{href:r.doc("forms-disabled",e,i),children:"Disabled"})}),l("li",{"aria-selected":g==="forms-validation",children:l("a",{href:r.doc("forms-validation",e,i),children:"Validation"})})]}),he("menu",{children:[l("b",{children:"Layout"}),l("li",{"aria-selected":g==="header",children:l("a",{href:r.doc("header",e,i),children:"Headers"})}),l("li",{"aria-selected":g==="footer",children:l("a",{href:r.doc("footer",e,i),children:"Footers"})}),l("li",{"aria-selected":g==="carousel",children:l("a",{href:r.doc("carousel",e,i),children:"Carousel"})}),l("li",{"aria-selected":g==="groups",children:l("a",{href:r.doc("groups",e,i),children:"Groups"})}),l("li",{"aria-selected":g==="modal",children:l("a",{href:r.doc("modal",e,i),children:"Modal"})})]}),he("menu",{children:[l("b",{children:"Navigation"}),l("li",{"aria-selected":g==="navigation",children:l("a",{href:r.doc("navigation",e,i),children:"Basic"})}),l("li",{"aria-selected":g==="breadcrumbs",children:l("a",{href:r.doc("breadcrumbs",e,i),children:"Breadcrumbs"})}),l("li",{"aria-selected":g==="menu",children:l("a",{href:r.doc("menu",e,i),children:"Menu"})}),l("li",{"aria-selected":g==="tabs",children:l("a",{href:r.doc("tabs",e,i),children:"Tabs"})})]}),he("menu",{children:[l("b",{children:"Extra"}),l("li",{"aria-selected":g==="dark-mode",children:l("a",{href:r.doc("dark-mode",e,i),children:"Dark Mode"})}),l("li",{"aria-selected":g==="icons",children:l("a",{href:r.doc("icons",e,i),children:"Icons"})}),l("li",{"aria-selected":g==="loading",children:l("a",{href:r.doc("loading",e,i),children:"Loading"})}),l("li",{"aria-selected":g==="mobile",children:l("a",{href:r.doc("mobile",e,i),children:"Mobile"})})]}),he("menu",{children:[l("b",{children:"Custom"}),l("li",{"aria-selected":g==="grid",children:l("a",{href:r.doc("grid",e,i),children:"Grids"})}),l("li",{"aria-selected":g==="containers",children:l("a",{href:r.doc("containers",e,i),children:"Containers"})}),l("li",{"aria-selected":g==="colors",children:l("a",{href:r.doc("colors",e,i),children:"Colors"})}),l("li",{"aria-selected":g==="classes",children:l("a",{href:r.doc("classes",e,i),children:"Classes"})})]})]})]}),l("div",{children:t})]})})}n(u,"DocLayout");export{B as a,u as b,He as c,Ae as d,We as e,Oe as f,Re as g,Pe as h,ze as i,Ge as j,Ye as k,_e as l,Ve as m,je as n,Ue as o,Ke as p,Ze as q,Je as r,Xe as s,et as t,tt as u,ot as v,at as w,it as x,st as y,rt as z,nt as A,lt as B,dt as C,ct as D,pt as E,Ct as F,mt as G,ut as H,ht as I,gt as J,r as K,St as L,Tt as M};
