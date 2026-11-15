import{a as zt}from"./chunk-KC2WVVTY.js";import{a as Gt}from"./chunk-4F2ROYBB.js";import{a as jt}from"./chunk-MDCAHXJR.js";import{a as Ut}from"./chunk-UPLXQAUZ.js";import{a as _t}from"./chunk-XF2WV4YZ.js";import{a as Kt}from"./chunk-VTRTOU7H.js";import{a as Rt}from"./chunk-SVFQNSTA.js";import{a as Vt}from"./chunk-PRBPLC6K.js";import{a as Yt}from"./chunk-HRT75PLO.js";import{a as Pt}from"./chunk-GSZ6UK6V.js";import{a as Wt}from"./chunk-6WZ2BZS5.js";import{a as At}from"./chunk-C74J2UAQ.js";import{a as Ot}from"./chunk-K4XVBUED.js";import{b as It,c as Ft,d as Ht,e as a}from"./chunk-X3RR2HUG.js";import{a as Ie}from"./chunk-7AZBNJU6.js";import{a as s}from"./chunk-7X4DHW36.js";import{useEffect as ho,useState as eo}from"https://esm.sh/react@19.2.6";import{useState as to,useEffect as oo}from"https://esm.sh/react@19.2.6";function k(){let[e,t]=to(void 0);return oo(()=>{if(typeof window<"u"){let F=window.location.pathname.includes(Ie)?Ie:"";t(F)}},[]),e}s(k,"useRoute");import{jsx as h,jsxs as E}from"https://esm.sh/react@19.2.6/jsx-runtime";function Oe({theme:e}){let t=k();return E(m,{theme:e,children:[E("section",{className:"row",children:[E("div",{children:[E("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",h("code",{children:"reset"})," type buttons)."]}),E("p",{children:[h("button",{children:"Button"}),h("button",{type:"reset",children:"Button"})]})]}),h("div",{children:h(a,{lang:"xml",children:`<button>Button</button>
<button type="reset">
  Button
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["Both types can be marked as ",h("code",{children:"disabled"}),", meaning no interaction will be possible with them."]}),E("p",{children:[h("button",{disabled:!0,children:"Disabled"}),h("button",{type:"reset",disabled:!0,children:"Disabled"})]})]}),h("div",{children:h(a,{lang:"xml",children:`<button disabled>
  Button
</button>
<button type="reset" disabled>
  Button
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[h("p",{children:"Buttons can be improved by adding svg icons, either to the left or to the right of the main button title."}),E("p",{children:[E("button",{children:[E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),h("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),h("span",{children:"Home"})]}),E("button",{type:"reset",children:[h("span",{children:"Play"}),E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h("path",{d:"M21 4v16"}),h("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]}),h("p",{children:E("small",{children:["You can learn more about icons ",h("a",{href:i.doc("icons",e,t),children:"here"}),"."]})})]}),h("div",{children:h(a,{lang:"xml",children:`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[h("p",{children:"You can even create icon-only buttons by completely omitting the title."}),E("p",{children:[h("button",{children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h("path",{d:"M4 11a9 9 0 0 1 9 9"}),h("path",{d:"M4 4a16 16 0 0 1 16 16"}),h("circle",{cx:"5",cy:"19",r:"1"})]})}),h("button",{type:"reset",children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),h("circle",{cx:"12",cy:"12",r:"4"})]})})]})]}),h("div",{children:h(a,{lang:"xml",children:`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["By default, buttons are styled using the ",h("b",{children:"primary"})," color, which impacts their background, border or text color. You can change that by applying classes like ",h("code",{children:"secondary"}),", ",h("code",{children:"success"})," or ",h("code",{children:"error"}),"."]}),E("p",{className:"flex",children:[h("button",{className:"secondary",children:"Action"}),h("button",{className:"success",children:"Confirm"}),E("button",{type:"reset",className:"error",children:[E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h("path",{d:"M18 6 6 18"}),h("path",{d:"m6 6 12 12"})]}),h("span",{children:"Cancel"})]})]}),h("p",{children:E("small",{children:["You can learn more about colors ",h("a",{href:i.doc("colors",e,t),children:"here"}),"."]})})]}),h("div",{children:h(a,{lang:"xml",children:`<button
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
</button>`})})]}),E("section",{className:"row",children:[E("div",{children:[E("p",{children:["Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",h("code",{children:"group"})," role."]}),E("p",{role:"group",children:[h("button",{children:"Button 1"}),h("button",{type:"reset",children:"Button 2"}),h("button",{type:"reset",children:"Button 3"})]}),E("p",{role:"group",children:[h("button",{type:"reset",children:h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}),h("button",{type:"reset",children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h("path",{d:"M7 10v12"}),h("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}),h("button",{children:E("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h("path",{d:"M12 2v13"}),h("path",{d:"m16 6-4-4-4 4"}),h("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})]})})]}),E("p",{role:"group",children:[h("button",{type:"reset",children:"Prev"}),h("button",{type:"reset",children:"1"}),h("button",{type:"reset",children:"2"}),h("button",{type:"reset",children:"3"}),h("button",{type:"reset",children:"Next"})]}),h("p",{children:E("small",{children:["You can learn more about groups ",h("a",{href:i.doc("groups",e,t),children:"here"}),"."]})})]}),h("div",{children:h(a,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}s(Oe,"Buttons");import{jsx as C,jsxs as de}from"https://esm.sh/react@19.2.6/jsx-runtime";function We({theme:e}){return de(m,{theme:e,children:[de("section",{className:"row",children:[de("div",{children:[de("p",{children:["Typography is based purely on ",C("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),C("div",{children:C(a,{lang:"xml",children:`<p>
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
</p>`})})]}),de("section",{className:"row",children:[de("div",{children:[de("p",{children:["To all sorts of text modifiers, like ",C("code",{children:"b"}),", ",C("code",{children:"i"}),", ",C("code",{children:"em"})," tags and many more."]}),C("p",{children:C("i",{children:"italic"})}),C("p",{children:C("em",{children:"emphasized"})}),C("p",{children:C("dfn",{children:"definition"})}),C("p",{children:C("cite",{children:"citation"})}),C("p",{children:C("b",{children:"bold"})}),C("p",{children:C("strong",{children:"strong"})}),C("p",{children:C("del",{children:"deleted"})}),C("p",{children:C("s",{children:"corrected"})}),C("p",{children:C("u",{children:"underlined"})}),C("p",{children:C("q",{children:"quotation"})})]}),C("div",{children:C(a,{lang:"xml",children:`<i>italic</i>
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
<sup>supescript</sup>`})})]}),de("section",{className:"row",children:[de("div",{children:[de("p",{children:["Finally, it supports all six ",C("code",{children:"heading"})," types."]}),C("h1",{children:"Heading 1"}),C("h2",{children:"Heading 2"}),C("h3",{children:"Heading 3"}),C("h4",{children:"Heading 4"}),C("h5",{children:"Heading 5"}),C("h6",{children:"Heading 6"})]}),C("div",{children:C(a,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),de("section",{className:"row",children:[de("div",{children:[de("p",{children:["As well as the ability to group headings and associated content with ",C("code",{children:"hgroup"}),"."]}),de("hgroup",{children:[C("h1",{children:"Heading 1"}),C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),C("div",{children:C(a,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}s(We,"Typography");import{jsx as N,jsxs as ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function Pe({theme:e}){let t=k();return ee(m,{theme:e,children:[ee("section",{className:"row",children:[ee("div",{children:[N("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),N("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),N("div",{children:N(a,{lang:"xml",children:`<blockquote>
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
</blockquote>`})})]})]})}s(Pe,"Blockquotes");import{jsx as be,jsxs as Fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function ze({theme:e}){return be(m,{theme:e,children:be("section",{children:Fe("div",{className:"row",children:[Fe("div",{children:[be("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),Fe("p",{children:["Inline code ",be("code",{children:"console.log('abc')"})]}),Fe("p",{children:["Keyboard shortcut ",be("kbd",{children:"Ctrl + S"})]}),Fe("figure",{children:[be(a,{lang:"xml",children:"console.log('abc')"}),be("figcaption",{children:"Code block"})]}),Fe("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",be("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",be("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),be("div",{children:be(a,{lang:"xml",children:`<p>
  Inline code <code>console.log('abc')</code>
</p>
<p>
  Keyboard shortcut <kbd>Ctrl + S</kbd>
</p>
<pre>
  <code>console.log('abc')</code>
</pre>`})})]})})})}s(ze,"Code");import{jsx as he,jsxs as Ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ge({theme:e}){let t=k();return Ce(m,{theme:e,children:[Ce("section",{className:"row",children:[Ce("div",{children:[he("p",{children:"Figures can contain a single image and an associated caption."}),Ce("figure",{children:[he("img",{width:"640",height:"480",src:i.resImg("16-640x480.jpg",t),alt:"header image"}),he("figcaption",{children:"Sample caption"})]})]}),he("div",{children:he(a,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),Ce("section",{className:"row",children:[Ce("div",{children:[he("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),Ce("figure",{children:[Ce("figure",{children:[he("img",{width:"200",height:"240",src:i.resImg("16-200x240.jpg",t),alt:"header image"}),he("figcaption",{children:"First image"})]}),Ce("figure",{children:[he("img",{width:"240",height:"240",src:i.resImg("16-240x240.jpg",t),alt:"second image"}),he("figcaption",{children:"Second image"})]}),he("figcaption",{children:"Figure group"})]})]}),he("div",{children:he(a,{lang:"xml",children:`<figure>
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
</figure>`})})]})]})}s(Ge,"Figures");import{jsx as re,jsxs as Le}from"https://esm.sh/react@19.2.6/jsx-runtime";function je({theme:e}){return Le(m,{theme:e,children:[Le("section",{className:"row",children:[Le("div",{children:[re("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),Le("ul",{children:[re("li",{children:re("a",{href:"",children:"website.com"})}),re("li",{children:re("a",{href:"",children:"email@test.com"})}),re("li",{children:re("a",{href:"",children:"/#location"})})]})]}),re("div",{children:re(a,{lang:"xml",children:`<a href="https://website.com">
  website.com
</a>

<a href="mailto:email@test.com">
  email@test.com
</a>

<a href="/#location">
  /#location
</a>`})})]}),Le("section",{className:"row",children:[Le("div",{children:[re("p",{children:"Headigns can be used together with empty fragment links to reference locations in the same document."}),Le("h1",{"data-hover":!0,children:["Section 1",re("a",{href:"#section_1"})]}),Le("h2",{children:["Section 1.2",re("a",{href:"#section_12"})]}),Le("h3",{children:["Section 1.2.1",re("a",{href:"#section_121"})]})]}),re("div",{children:re(a,{lang:"xml",children:`<h1>
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
`})})]})]})}s(je,"Links");import{jsx as M,jsxs as Y}from"https://esm.sh/react@19.2.6/jsx-runtime";function _e({theme:e}){let t=k();return Y(m,{theme:e,children:[Y("section",{className:"row",children:[Y("div",{children:[M("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),Y("details",{children:[M("summary",{children:"Info"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Y("details",{children:[M("summary",{children:"More info Info"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),M("div",{children:M(a,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["This basic summary can be placed inside an ",M("code",{children:"article"})," and combined with the ",M("code",{children:"primary"}),", ",M("code",{children:"success"})," or ",M("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),M("article",{children:Y("details",{open:!0,children:[M("summary",{children:"Note"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),M("article",{className:"primary",children:Y("details",{children:[M("summary",{children:"Info"}),Y("p",{children:["Larn more ",M("a",{href:"",children:"here"})]})]})}),M("article",{className:"success",children:Y("details",{children:[M("summary",{children:"Success"}),Y("p",{children:["Operation finished ",M("code",{children:"OK"})]})]})}),M("article",{className:"error",children:Y("details",{children:[M("summary",{children:"Error"}),Y("div",{children:[M("p",{children:"Unknown error occurred"}),M("hr",{}),M("button",{children:"Acknowledge"})]})]})}),M("p",{children:Y("small",{children:["You can learn more about colors ",M("a",{href:i.doc("colors",e,t),children:"here"})," and cards ",M("a",{href:i.doc("cards",e,t),children:"here"}),"."]})})]}),M("div",{children:M(a,{lang:"xml",children:`<article>
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
</article>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",M("code",{children:"article"}),", you can form an accordion menu:"]}),Y("article",{children:[Y("details",{name:"menu",children:[M("summary",{children:"Option 1"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Y("details",{name:"menu",open:!0,children:[M("summary",{children:"Option 2"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Y("details",{name:"menu",children:[M("summary",{children:"Option 3"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),M("div",{children:M(a,{lang:"xml",children:`
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
</article>`})})]})]})}s(_e,"Summary");import{jsx as D,jsxs as fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ye({theme:e}){let t=k();return D(m,{theme:e,children:fe("section",{className:"row",children:[fe("div",{children:[D("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),fe("table",{children:[D("thead",{children:fe("tr",{children:[D("th",{children:"Cover"}),D("th",{children:"Item"}),D("th",{children:"Value"}),D("th",{children:"Comment"})]})}),fe("tbody",{children:[fe("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:i.resImg("16-30x50.jpg",t),alt:"cover 1"})}),D("td",{children:D("a",{href:"",children:"Item 1.1"})}),D("td",{children:"20.35"}),D("td",{children:"In stock"})]}),fe("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:i.resImg("100-30x50.jpg",t),alt:"cover 2"})}),D("td",{children:D("a",{href:"",children:"Item 2.1"})}),D("td",{children:"15.99"}),D("td",{children:"Out of stock"})]}),fe("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:i.resImg("40-30x50.jpg",t),alt:"cover 3"})}),D("td",{children:D("a",{href:"",children:"Item 5.1"})}),D("td",{children:"14.23"}),D("td",{children:"In stock"})]}),fe("tr",{children:[D("td",{children:D("img",{width:"30",height:"50",src:i.resImg("25-30x50.jpg",t),alt:"cover 4"})}),D("td",{children:D("a",{href:"",children:"Item 22"})}),D("td",{children:"10.11"}),D("td",{children:"In stock"})]})]}),D("tfoot",{children:fe("tr",{children:[D("td",{colSpan:2,children:D("b",{children:"Total"})}),D("td",{colSpan:2,children:D("b",{children:"60.68"})})]})})]})]}),D("div",{children:D(a,{lang:"xml",children:`<table>
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
</table>`})})]})})}s(Ye,"Table");import{jsx as p,jsxs as q}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ve({theme:e}){let t=k();return q(m,{theme:e,children:[q("section",{className:"row",children:[q("div",{children:[q("p",{children:["You can mark any text, keyword or piece of information with the ",p("code",{children:"mark"})," html tag."]}),p("p",{children:p("mark",{children:"v15.20.30"})})]}),p("div",{children:p(a,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),q("section",{className:"row",children:[q("div",{children:[p("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),q("p",{children:[q("mark",{children:[q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),p("path",{d:"m9 12 2 2 4-4"})]}),p("span",{children:"released"})]}),q("mark",{children:[p("span",{children:"error"}),q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),p("path",{d:"m9 12 2 2 4-4"})]})]})]}),p("p",{children:q("small",{children:["You can learn more about icons ",p("a",{href:i.doc("icons",e,t),children:"here"}),"."]})})]}),p("div",{children:p(a,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["You  can assign the ",p("code",{children:"primary"}),", ",p("code",{children:"secondary"}),", ",p("code",{children:"success"})," or ",p("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",p("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),q("p",{className:"flex",children:[p("mark",{className:"primary",children:"#theme"}),p("mark",{className:"secondary",children:"#second"}),p("mark",{className:"success",children:"Process OK"}),p("mark",{className:"error",children:"Error 400"})]}),q("p",{className:"flex",children:[p("mark",{className:"primary inverted",children:"#theme"}),p("mark",{className:"secondary inverted",children:"#second"}),p("mark",{className:"success inverted",children:"Process OK"}),p("mark",{className:"error inverted",children:"Error 400"})]}),p("p",{children:q("small",{children:["You can learn more about colors ",p("a",{href:i.doc("colors",e,t),children:"here"}),"."]})})]}),p("div",{children:p(a,{lang:"xml",children:`<!-- with or without -->
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
</mark>`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",p("code",{children:"group"})," role, they will be grouped together."]}),q("p",{role:"group",children:[p("mark",{children:"npm"}),p("mark",{className:"success",children:"1.0.3"}),p("mark",{className:"error",children:q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[p("path",{d:"M18 6 6 18"}),p("path",{d:"m6 6 12 12"})]})})]}),p("p",{children:q("small",{children:["You can learn more about groups ",p("a",{href:i.doc("groups",e,t),children:"here"}),"."]})})]}),p("div",{children:p(a,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["You can use the ",p("code",{children:"mark"})," tag as standalone badges with text or with icons."]}),q("p",{children:[p("mark",{children:"1"}),p("mark",{children:"2"}),p("mark",{children:"3"}),p("mark",{children:q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),p("circle",{cx:"12",cy:"10",r:"3"})]})})]}),p("p",{children:"Or in more complex layouts."}),q("article",{children:[p("div",{role:"group",children:q("div",{className:"row",children:[p("mark",{className:"secondary",children:"1"}),q("div",{children:[p("b",{children:"Lorem ipsum dolor sit amet"}),p("br",{}),p("small",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}),p("div",{role:"group",children:q("div",{className:"row",children:[p("mark",{className:"secondary",children:"2"}),q("div",{children:[p("b",{children:"Sed ut perspiciatis unde omnis"}),p("br",{}),p("small",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."})]})]})}),p("div",{role:"group",children:q("div",{className:"row",children:[p("mark",{className:"secondary",children:"3"}),q("div",{children:[p("b",{children:"At vero eos et accusamus"}),p("br",{}),p("small",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."})]})]})})]}),p("p",{children:q("small",{children:["You can learn more about cards ",p("a",{href:i.doc("cards",e,t),children:"here"}),"."]})})]}),p("div",{children:p(a,{lang:"xml",children:`<p>
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
</article>`})})]})]})}s(Ve,"Tags");import{jsx as ie,jsxs as Se}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ue({theme:e}){return Se(m,{theme:e,children:[Se("section",{className:"row",children:[Se("div",{children:[ie("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),ie("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),Se("ul",{children:[ie("li",{children:"Item 1"}),ie("li",{children:"Item 2"}),Se("ol",{children:[ie("li",{children:"Item 1"}),ie("li",{children:"Item 2"})]})]})]}),ie("div",{children:ie(a,{lang:"xml",children:`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>`})})]}),Se("section",{className:"row",children:[Se("div",{children:[Se("p",{children:["Definition lists are styled such that ",ie("code",{children:"dd"})," elements are inlined compared to ",ie("code",{children:"dt"})," elements."]}),Se("dl",{children:[ie("dt",{children:"Coffee"}),ie("dd",{children:"Black hot drink"}),ie("dt",{children:"Milk"}),ie("dd",{children:"White cold drink"})]})]}),ie("div",{children:ie(a,{lang:"xml",children:`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`})})]})]})}s(Ue,"Lists");import{useState as Ke}from"https://esm.sh/react@19.2.6";import{jsx as y,jsxs as R}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ze({theme:e}){let[t,r]=Ke("bread"),[F,u]=Ke(!1),[b,ue]=Ke(!0),[oe,Ae]=Ke("free");return R(m,{theme:e,children:[R("section",{className:"row",children:[R("div",{children:[y("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),R("form",{children:[y("p",{children:y("b",{children:"Options"})}),R("label",{htmlFor:"egg",children:[y("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),y("span",{children:"Egg"})]}),R("label",{htmlFor:"cheese",children:[y("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),y("span",{children:"Cheese"})]}),R("label",{htmlFor:"ham",children:[y("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),y("span",{children:"Ham"})]})]}),y("p",{children:"These work well even for complex, multi-line, checkboxes"}),R("form",{children:[y("p",{children:y("b",{children:"Todos"})}),R("label",{htmlFor:"friday",children:[y("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),R("span",{children:[y("b",{children:"Friday"}),y("br",{}),y("span",{children:"- Order lunch"}),y("br",{}),y("span",{children:"- Go to work"}),y("span",{children:"- Eat lunch"})]})]}),R("label",{htmlFor:"saturday",children:[y("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),R("span",{children:[y("b",{children:"Saturday"}),y("br",{}),y("span",{children:"- Order lunch"}),y("br",{}),y("span",{children:"- Eat lunch"})]})]})]})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
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
</form>`})})]}),R("section",{className:"row",children:[R("div",{children:[y("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),R("form",{children:[y("p",{children:y("b",{children:"Wrapping"})}),R("label",{htmlFor:"bread",children:[y("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:t==="bread",onChange:Ct=>r(Ct.target.value)}),y("span",{children:"Bread"})]}),R("label",{htmlFor:"salad",children:[y("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:t==="salad",onChange:Ct=>r(Ct.target.value)}),y("span",{children:"Salad"})]})]})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
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
</form>`})})]}),R("section",{className:"row",children:[R("div",{children:[y("p",{children:"If you want to represent an on/off state, you can use switches."}),R("form",{children:[R("label",{htmlFor:"terms",onClick:()=>u(!F),children:[y("input",{name:"terms",type:"checkbox",role:"switch",checked:F}),y("span",{children:"I agree to the terms"})]}),R("label",{htmlFor:"updates",onClick:()=>ue(!b),children:[y("input",{name:"updates",type:"checkbox",role:"switch",checked:b}),y("span",{children:"I want to receive updates"})]})]})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
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
</form>`})})]}),R("section",{className:"row",children:[R("div",{children:[R("p",{children:["And if you want to represent a group of buttons acting as a radio selector, you can combine the ",y("code",{children:"group"})," role and a hidden ",y("code",{children:"input"}),"."]}),R("form",{children:[R("div",{role:"group",children:[y("button",{className:"primary",type:oe==="free"?"button":"reset",onClick:()=>Ae("free"),children:"Free"}),y("button",{className:"primary",type:oe==="premium"?"button":"reset",onClick:()=>Ae("premium"),children:"Premium"}),y("button",{className:"primary",type:oe==="founder"?"button":"reset",onClick:()=>Ae("founder"),children:"Founder"})]}),y("input",{id:"group",name:"group",type:"hidden",value:oe})]})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
  <div role="group">
    <button class="primary" type="${oe==="free"?"button":"reset"}">Free</button>
    <button class="primary" type="${oe==="premium"?"button":"reset"}">Premium</button>
    <button class="primary" type="${oe==="founder"?"button":"reset"}">Founder</button>
  </div>
  <input id="group" name="group" type="hidden" value="${oe}"/>
</form>`})})]})]})}s(Ze,"FormsCheckbox");import{jsx as ce,jsxs as Ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function Qe({theme:e}){return ce(m,{theme:e,children:Ee("section",{className:"row",children:[Ee("div",{children:[Ee("p",{children:["A form can have all or part of its inputs set as ",ce("code",{children:"disabled"})," to prevent any user interaction."]}),ce("form",{children:Ee("fieldset",{children:[ce("legend",{children:"Disabled form"}),Ee("label",{htmlFor:"email",children:[ce("span",{children:"Email"}),ce("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),Ee("label",{htmlFor:"address",children:[ce("span",{children:"Address"}),ce("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),Ee("label",{htmlFor:"delivery",children:[ce("span",{children:"Delivery"}),Ee("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[ce("option",{value:"fast",children:"Fast"}),ce("option",{value:"standard",children:"Standard"})]})]}),ce("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),ce("div",{children:ce(a,{lang:"xml",children:`<form>
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
</form>`})})]})})}s(Qe,"FormsDisabled");import{jsx as w,jsxs as W}from"https://esm.sh/react@19.2.6/jsx-runtime";function Je({theme:e}){return W(m,{theme:e,children:[W("section",{className:"row",children:[W("div",{children:[W("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",w("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),w("form",{children:W("div",{role:"group",children:[w("input",{id:"email",type:"email",placeholder:"Email"}),w("input",{type:"submit",value:"Subscribe"})]})})]}),w("div",{children:w(a,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),W("section",{className:"row",children:[W("div",{children:[w("p",{children:"This can be used to great effect for search inputs."}),w("form",{children:W("div",{role:"group",children:[w("mark",{children:W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w("path",{d:"m21 21-4.34-4.34"}),w("circle",{cx:"11",cy:"11",r:"8"})]})}),w("input",{type:"search",id:"search",placeholder:"Search"}),w("input",{type:"submit",value:"Search"})]})})]}),w("div",{children:w(a,{lang:"xml",children:`<form>
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
</form>`})})]}),W("section",{className:"row",children:[W("div",{children:[w("p",{children:"And even use mutliple buttons:"}),w("form",{children:W("div",{role:"group",children:[w("input",{type:"search",value:"",placeholder:"e.g. SW1A 1AA"}),w("button",{type:"reset",children:W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w("circle",{cx:"12",cy:"12",r:"10"}),w("line",{x1:"22",x2:"18",y1:"12",y2:"12"}),w("line",{x1:"6",x2:"2",y1:"12",y2:"12"}),w("line",{x1:"12",x2:"12",y1:"6",y2:"2"}),w("line",{x1:"12",x2:"12",y1:"22",y2:"18"})]})}),W("button",{type:"submit",children:[w("span",{children:"Go"}),W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w("path",{d:"M5 12h14"}),w("path",{d:"m12 5 7 7-7 7"})]})]})]})})]}),w("div",{children:w(a,{lang:"xml",children:`<form>
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
</form>`})})]}),W("section",{className:"row",children:[W("div",{children:[W("p",{children:["You can still wrap form elements inside a ",w("code",{children:"fieldset"})," with an appropriate ",w("code",{children:"legend"})," tag."]}),w("form",{children:W("fieldset",{children:[w("legend",{children:"Selection"}),W("div",{role:"group",children:[W("select",{id:"delivery",defaultValue:"fast",children:[w("option",{value:"fast",children:"Fast"}),w("option",{value:"standard",children:"Standard"})]}),w("input",{type:"date",id:"delivery-date"}),w("input",{type:"submit",value:"Confirm"})]})]})})]}),w("div",{children:w(a,{lang:"xml",children:`<form>
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
</form>`})})]}),W("section",{className:"row",children:[W("div",{children:[w("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),w("form",{children:W("div",{role:"group",children:[W("label",{htmlFor:"ch_1",children:[w("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),w("span",{children:"Check #1"})]}),W("label",{htmlFor:"ch_2",children:[w("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),w("span",{children:"Check #2"})]}),W("label",{htmlFor:"ch_3",children:[w("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),w("span",{children:"Check #3"})]})]})})]}),w("div",{children:w(a,{lang:"xml",children:`<form>
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
</form>`})})]})]})}s(Je,"FormsGrouped");import{useState as ao}from"https://esm.sh/react@19.2.6";import{jsx as f,jsxs as H}from"https://esm.sh/react@19.2.6/jsx-runtime";function Xe({theme:e}){let t=k(),[r,F]=ao(50);return H(m,{theme:e,children:[H("section",{className:"row",children:[H("div",{children:[H("p",{children:["All ",f("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),H("form",{children:[H("label",{htmlFor:"email",children:[f("span",{children:"Email"}),f("input",{type:"email",placeholder:"Email Address",id:"email"})]}),H("label",{htmlFor:"password",children:[f("span",{children:"Password"}),f("input",{type:"password",id:"password",placeholder:"Password"})]}),f("input",{type:"submit",value:"Login"}),H("p",{children:["Don't have an account? ",f("a",{href:"",children:"Sign up"}),"."]})]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
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
</form>`})})]}),H("section",{className:"row",children:[H("div",{children:[f("p",{children:"Ranged inputs are also supported."}),H("form",{children:[H("label",{htmlFor:"volume",children:[f("span",{children:"Volume (range)"}),f("input",{type:"range",id:"volume",name:"volume",min:0,max:100,step:1,value:r,onChange:u=>F(Number(u.target.value))})]}),f("input",{type:"submit",value:"Tune"})]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
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
</form>`})})]})})]})}s(Xe,"FormsNormal");import{useState as Lt}from"https://esm.sh/react@19.2.6";import{jsx as I,jsxs as se}from"https://esm.sh/react@19.2.6/jsx-runtime";function et({theme:e}){let[t,r]=Lt("a"),[F,u]=Lt(""),[b,ue]=Lt("");return se(m,{theme:e,children:[se("section",{className:"row",children:[se("div",{children:[se("p",{children:["Helper styles for form validation come out of the box for any ",I("code",{children:"input"})," and ",I("code",{children:"textarea"})," elements marked as ",I("b",{children:"required"}),"."]}),I("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),I("p",{children:"Empty inputs do not display error styles."}),se("p",{children:["Adjacent text elements with the ",I("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),I("form",{action:"",method:"post",children:se("fieldset",{children:[I("legend",{children:"Input"}),se("label",{htmlFor:"name",children:[I("span",{children:"Name"}),I("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:t,onChange:oe=>r(oe.target.value)}),I("span",{className:"error",children:I("small",{children:"Enter a name between 4 and 100 characters"})})]}),se("label",{htmlFor:"email",children:[I("span",{children:"Email"}),I("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:F,onChange:oe=>u(oe.target.value)})]}),se("label",{htmlFor:"comment",children:[I("span",{children:"Comment"}),I("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:b,onChange:oe=>ue(oe.target.value)}),I("span",{className:"error",children:I("small",{children:"Enter a meaningful comment"})})]}),I("input",{type:"submit",value:"Submit"})]})})]}),I("div",{children:I(a,{lang:"xml",children:`<form action="/" method="post">
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
</form>`})})]}),se("section",{className:"row",children:[se("div",{children:[se("p",{children:["Inputs that present a more limited range of options to a user, such as ",I("code",{children:"select"}),", ",I("code",{children:"radio"})," and ",I("code",{children:"check"})," buttons, won't display a error styles but can be set as required."]}),I("form",{children:se("fieldset",{children:[I("legend",{children:"Countries"}),se("select",{id:"country",name:"country",required:!0,children:[I("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please select a country"}),I("option",{value:"uk",children:"United Kingdom"}),I("option",{value:"fr",children:"France"}),I("option",{value:"de",children:"Germany"})]}),se("label",{children:[I("input",{type:"checkbox",name:"terms",required:!0}),"I accept the terms and conditions"]}),I("input",{type:"submit",value:"Submit"})]})})]}),I("div",{children:I(a,{lang:"xml",children:`<form>
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
</form>`})})]})]})}s(et,"FormsValidation");import{useRef as io}from"https://esm.sh/react@19.2.6";import{jsx as le,jsxs as tt}from"https://esm.sh/react@19.2.6/jsx-runtime";function ot({theme:e}){let t=io(null);return le(m,{theme:e,children:tt("section",{className:"row",children:[tt("div",{children:[le("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),le("p",{children:"Click the button below to open the modal dialog."}),le("p",{children:le("button",{onClick:s(()=>t.current?.showModal(),"openDialog"),children:"Open modal"})}),le(ro,{ref:t})]}),le("div",{children:le(a,{lang:"xml",children:`<button id="openBtn">Open modal</button>

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
`})})]})})}s(ot,"Modal");function ro(e){return tt("dialog",{ref:e.ref,children:[le("h2",{children:"Dialog"}),le("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),le("form",{method:"dialog",children:le("div",{role:"group",children:tt("div",{className:"row",children:[le("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),le("div",{}),le("button",{value:"confirm",children:"Confirm"})]})})})]})}s(ro,"DialogModal");import{jsx as l,jsxs as T}from"https://esm.sh/react@19.2.6/jsx-runtime";function at({theme:e}){let t=k();return T(m,{theme:e,children:[T("section",{className:"row",children:[T("div",{children:[T("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",l("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),l("nav",{className:"disable-mobile",children:T("ul",{children:[l("li",{children:l("a",{href:"",children:"Item 1"})}),l("li",{children:l("a",{href:"",children:"Item 2"})}),l("li",{children:l("a",{href:"",children:"Item 3"})})]})}),l("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),l("nav",{className:"disable-mobile",children:T("ul",{children:[l("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),l("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),l("span",{children:"Home"})]})}),l("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),l("path",{d:"m18 15 4-4"}),l("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),l("span",{children:"Docs"})]})}),T("li",{children:[T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[l("circle",{cx:"12",cy:"12",r:"10"}),l("path",{d:"m10 8 4 4-4 4"})]}),l("span",{children:"More"})]}),T("ul",{children:[l("li",{children:l("a",{href:"",children:"Option 1"})}),l("li",{children:l("a",{href:"",children:"Option 2"})})]})]})]})}),T("p",{children:["Navigtion items may use the ",l("code",{children:"aria-selected"})," attribute to denote they are selected."]}),l("nav",{className:"disable-mobile",children:T("ul",{children:[l("li",{"aria-selected":!0,children:l("a",{href:"",children:"Selected"})}),l("li",{children:l("a",{href:"",children:"Unselected"})})]})})]}),l("div",{children:l(a,{lang:"xml",children:`<header>
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
</header>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["You can use other elements such as ",l("code",{children:"select"}),", ",l("code",{children:"input"}),", ",l("code",{children:"img"}),", etc to add more functionality to the navigation bar."]}),l("nav",{className:"disable-mobile",children:T("ul",{children:[l("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),l("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),l("span",{children:"Home"})]})}),l("li",{children:T("select",{id:"selector",defaultValue:"opt-1",style:{minWidth:"100px"},children:[l("option",{value:"opt-1",children:"Val 1"}),l("option",{value:"opt-2",children:"Val 2"}),l("option",{value:"opt-3",children:"Val 3"})]})}),l("li",{children:l("input",{type:"search",placeholder:"Search ...",id:"search"})})]})}),l("br",{})]}),l("div",{children:l(a,{lang:"xml",children:`<li>
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
</li>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["Navigation can be split into a left and a right section by placing an empty ",l("code",{children:"div"})," element to act as gap."]}),l("nav",{className:"disable-mobile",children:T("ul",{children:[l("li",{children:l("a",{href:"",children:"Home"})}),l("li",{children:l("a",{href:"",children:"Menu"})}),l("div",{}),l("li",{children:l("a",{href:"",children:l("button",{children:"Download"})})}),l("li",{children:l("a",{href:"",children:l("button",{type:"reset",children:T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),l("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})}),l("br",{})]}),l("div",{children:l(a,{lang:"xml",children:`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`})})]}),T("section",{className:"row",children:[T("div",{children:[T("p",{children:["Navigation can be placed inside an ",l("code",{children:"article"})," to create a more striking display."]}),l("article",{children:l("nav",{className:"disable-mobile",children:T("ul",{children:[l("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),l("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),l("span",{children:"Home"})]})}),l("li",{children:T("a",{href:"",children:[T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),l("path",{d:"m18 15 4-4"}),l("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),l("span",{children:"Docs"})]})}),l("li",{children:l("input",{type:"search",placeholder:"Search..."})}),l("div",{}),l("li",{children:l("a",{href:"",children:l("button",{type:"reset",children:T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),l("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}),l("br",{})]}),l("div",{children:l(a,{lang:"xml",children:`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`})})]}),T("section",{className:"row",children:[T("div",{children:[l("p",{children:"Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout."}),T("figure",{children:[l("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-nav",e,t)}),l("figcaption",{children:"Showcase of navigation on a smaller device"})]})]}),l("div",{children:l(a,{lang:"xml",children:`<header>
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
</header>`})})]})]})}s(at,"Navigation");import{useState as so}from"https://esm.sh/react@19.2.6";import{Fragment as Mt,jsx as L,jsxs as ae}from"https://esm.sh/react@19.2.6/jsx-runtime";function St(){return ae(Mt,{children:[L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),L("p",{children:L("button",{children:"Discover"})})]})}s(St,"Tab1");function Nt(){return ae(Mt,{children:[L("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),L("div",{children:L("blockquote",{children:"lorem ipsum install"})})]})}s(Nt,"Tab2");function Tt(){return L(Mt,{children:L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}s(Tt,"Tab3");function it({theme:e}){let t=k(),[r,F]=so("tab-1");return ae(m,{theme:e,children:[ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",L("code",{children:"<menu>"})," element ",L("b",{children:"outside"})," of a ",L("code",{children:"nav"})," element."]}),L("div",{className:"disable-mobile",children:ae("menu",{children:[L("li",{"aria-selected":r==="tab-1",children:ae("a",{onClick:()=>F("tab-1"),children:[ae("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),L("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),L("span",{children:"Home"})]})}),L("li",{"aria-selected":r==="tab-2",children:ae("a",{onClick:()=>F("tab-2"),children:[L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:L("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),L("span",{children:"Install"})]})}),L("li",{"aria-selected":r==="tab-3",children:ae("a",{onClick:()=>F("tab-3"),children:[ae("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L("circle",{cx:"12",cy:"12",r:"10"}),L("path",{d:"M17 12h.01"}),L("path",{d:"M12 12h.01"}),L("path",{d:"M7 12h.01"})]}),L("span",{children:"More"})]})})]})}),ae("div",{children:[r==="tab-1"?L(St,{}):null,r==="tab-2"?L(Nt,{}):null,r==="tab-3"?L(Tt,{}):null]})]}),L("div",{children:L(a,{lang:"xml",children:`<main>
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
</main>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[L("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),L("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-tabs-nav",e,t)}),L("p",{children:L("a",{href:i.example("mobile-tabs-nav",e,t),target:"_blank",children:"See standalone example"})})]}),L("div",{children:L(a,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),ae("section",{className:"row",children:[ae("div",{children:[ae("p",{children:["Tabs can be nested and they can be combiend with ",L("code",{children:"summary"})," elements to be collapsible."]}),L("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("mobile-tabs-exp-nav",e,t)}),L("p",{children:L("a",{href:i.example("mobile-tabs-exp-nav",e,t),target:"_blank",children:"See standalone example"})})]}),L("div",{children:L(a,{lang:"xml",children:`<menu<
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
</menu>`})})]})]})}s(it,"Tabs");import{jsx as j,jsxs as me}from"https://esm.sh/react@19.2.6/jsx-runtime";function rt({theme:e}){let t=k();return me(m,{theme:e,children:[me("section",{className:"row",children:[me("div",{children:[j("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),j("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),j("nav",{children:me("menu",{className:"disable-mobile",children:[j("li",{"aria-selected":!0,children:me("a",{href:"",children:[me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[j("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),j("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),j("span",{children:"Home"})]})}),j("li",{children:me("a",{href:"",children:[me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[j("path",{d:"M4 11a9 9 0 0 1 9 9"}),j("path",{d:"M4 4a16 16 0 0 1 16 16"}),j("circle",{cx:"5",cy:"19",r:"1"})]}),j("span",{children:"Latest"})]})}),j("li",{children:me("a",{href:"",children:[me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[j("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),j("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),j("circle",{cx:"10",cy:"7",r:"4"})]}),j("span",{children:"Profile"})]})})]})})]}),j("div",{children:j(a,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),me("section",{className:"row",children:[me("div",{children:[me("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",j("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),me("figure",{children:[j("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-menu",e,t)}),j("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),j("div",{children:j(a,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}s(rt,"Menu");import{jsx as A,jsxs as ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function st({theme:e}){return A(m,{theme:e,children:ve("section",{className:"row",children:[ve("div",{children:[A("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),ve("p",{children:["By default you can add a ",A("b",{children:"meta"})," tag with the ",A("code",{children:"color-scheme"})," name and ",A("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),A("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),ve("table",{children:[A("thead",{children:ve("tr",{children:[A("th",{children:"Theme"}),A("th",{children:"Light"}),A("th",{children:"Dark"})]})}),ve("tbody",{children:[ve("tr",{children:[A("td",{children:"Default"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"Blog"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"App"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"Delivery"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]}),ve("tr",{children:[A("td",{children:"Landing"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]}),ve("tr",{children:[A("td",{children:"Newsletter"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]})]})]})]}),A("div",{children:A(a,{lang:"xml",children:`<html>
  <head>
    <!-- both variants -->
    <meta name="color-scheme" content="light dark"/>
    
    <!-- only dark variant -->
    <meta name="color-scheme" content="dark"/>
  </head>
</html>`})})]})})}s(st,"DarkMode");import{jsx as pe,jsxs as Te}from"https://esm.sh/react@19.2.6/jsx-runtime";function lt({theme:e}){return Te(m,{theme:e,children:[Te("section",{className:"row",children:[Te("div",{children:[pe("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),pe("p",{children:"When inside buttons the width & height is aligned to match the font size."}),pe("p",{children:Te("button",{children:[Te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[pe("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),pe("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),pe("span",{children:"Home"})]})})]}),pe("div",{children:pe(a,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),Te("section",{className:"row",children:[Te("div",{children:[pe("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),Te("div",{role:"group",children:[Te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[pe("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),pe("circle",{cx:"12",cy:"10",r:"3"})]}),pe("b",{children:"Test Address, SE11 8CL"})]})]}),pe("div",{children:pe(a,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}s(lt,"Icons");import{jsx as P,jsxs as V}from"https://esm.sh/react@19.2.6/jsx-runtime";function nt({theme:e}){let t=k();return V(m,{theme:e,children:[V("section",{className:"row",children:[V("div",{children:[P("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),V("p",{children:["The threshold between wide and narrow happens at ",P("b",{children:"600px"}),"."]}),P("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),V("figure",{children:[P("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-typography",e,t)}),V("figcaption",{children:["More information ",P("a",{href:i.doc("typography",e,t),children:"here"})]})]})]}),P("div",{children:P(a,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),V("section",{className:"row",children:[V("div",{children:[P("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),V("figure",{children:[P("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-nav",e,t)}),V("figcaption",{children:["More information ",P("a",{href:i.doc("navigation",e,t),children:"here"})," or ",P("a",{href:i.doc("tabs",e,t),children:"here"}),"."]})]})]}),P("div",{children:P(a,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a href="...">...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),V("section",{className:"row",children:[V("div",{children:[P("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),V("figure",{children:[P("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-menu",e,t)}),V("figcaption",{children:["More information ",P("a",{href:i.doc("menu",e,t),children:"here"}),"."]})]})]}),P("div",{children:P(a,{lang:"xml",children:`<header>
  <menu>
    <li><a href="...">...</a></li>
    ....
  </menu>
</header>`})})]}),V("section",{className:"row",children:[V("div",{children:[V("p",{children:["Finally, elements that have the ",P("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),V("figure",{children:[P("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-columns",e,t)}),V("figcaption",{children:["More information ",P("a",{href:i.doc("grid",e,t),children:"here"}),"."]})]})]}),P("div",{children:P(a,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),V("section",{className:"row",children:[V("div",{children:[V("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",P("code",{children:"disable-mobile"})," class."]}),V("p",{children:["You can also instruct elements to be hidden on mobile, via the ",P("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",P("code",{children:"hiden-on-desktop"})," class."]})]}),P("div",{})]})]})}s(nt,"Mobile");import{jsx as c,jsxs as B}from"https://esm.sh/react@19.2.6/jsx-runtime";function dt({theme:e}){let t=k();return B(m,{theme:e,children:[B("section",{className:"row",children:[B("div",{children:[B("p",{children:["By wrapping together a elements inside an ",c("code",{children:"article"}),", you can create a basic card-type layout."]}),B("div",{className:"row disable-mobile",children:[c("div",{children:c("article",{children:c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})}),c("div",{children:c("article",{className:"primary",children:c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
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
</article>`})})]})]})}s(dt,"Cards");import{jsx as v,jsxs as _}from"https://esm.sh/react@19.2.6/jsx-runtime";function ct({theme:e}){return v(m,{theme:e,children:v("section",{children:_("div",{children:[_("p",{children:[It," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),_("table",{children:[v("thead",{children:_("tr",{children:[v("th",{children:"Domain"}),v("th",{children:"Class"}),v("th",{children:"Effect"})]})}),_("tbody",{children:[_("tr",{children:[v("td",{rowSpan:4,children:"Containers"}),v("td",{children:v("code",{children:"container-medium"})}),v("td",{children:"Sets the maximum size of the container to 800px."})]}),_("tr",{children:[v("td",{children:v("code",{children:"container-narrow"})}),v("td",{children:"Sets the maximum size of the container to 1200px."})]}),_("tr",{children:[v("td",{children:v("code",{children:"container-wide"})}),v("td",{children:"Sets the maximum size of the container to 1600px."})]}),_("tr",{children:[v("td",{children:v("code",{children:"container-full"})}),v("td",{children:"Sets the  maximum size of the container to 100% (width of the screen)."})]}),_("tr",{children:[v("td",{rowSpan:3,children:"Layout"}),v("td",{children:v("code",{children:"row"})}),v("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),_("tr",{children:[v("td",{children:v("code",{children:"col"})}),v("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),_("tr",{children:[v("td",{children:v("code",{children:"col-N"})}),_("td",{children:["Horizontal space is divided in 12 equal columns. From ",v("code",{children:"col-1"})," to ",v("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),_("tr",{children:[v("td",{rowSpan:4,children:"Mobile"}),v("td",{children:v("code",{children:"hide-on-mobile"})}),v("td",{children:"Hides an element if on small displays."})]}),_("tr",{children:[v("td",{children:v("code",{children:"hide-on-desktop"})}),v("td",{children:"Hides an element if on large displays."})]}),_("tr",{children:[v("td",{children:v("code",{children:"disable-mobile"})}),_("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",v("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),_("tr",{children:[v("td",{children:v("code",{children:"flex"})}),v("td",{children:"Displays content normally on wider screens but switches to a row layout on smaller devices."})]}),_("tr",{children:[v("td",{rowSpan:5,children:"Colors"}),v("td",{children:v("code",{children:"primary"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),_("tr",{children:[v("td",{children:v("code",{children:"secondary"})}),v("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),_("tr",{children:[v("td",{children:v("code",{children:"success"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),_("tr",{children:[v("td",{children:v("code",{children:"error"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),_("tr",{children:[v("td",{children:v("code",{children:"inverted"})}),v("td",{children:"Normally it inverts the text colour. Can take any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),_("tr",{children:[v("td",{rowSpan:1,children:"Alignment"}),v("td",{children:v("code",{children:"align-center"})}),v("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}s(ct,"Classes");import{jsx as x,jsxs as te}from"https://esm.sh/react@19.2.6/jsx-runtime";function mt({theme:e}){let t=k();return te(m,{theme:e,children:[te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Any layout element, such as a ",x("code",{children:"div"})," or ",x("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",x("code",{children:"row"})," and ",x("code",{children:"col"})," classes."]}),te("article",{children:[te("div",{className:"row disable-mobile",children:[x("div",{className:"col",children:x("code",{style:{width:"100%"},children:"col"})}),x("div",{className:"col",children:x("code",{style:{width:"100%"},children:"col"})})]}),te("div",{className:"row disable-mobile",children:[x("div",{className:"col",children:x("code",{style:{width:"100%"},children:"col"})}),x("div",{className:"col",children:x("code",{style:{width:"100%"},children:"col"})}),x("div",{className:"col",children:x("code",{style:{width:"100%"},children:"col"})})]})]})]}),x("div",{children:x(a,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[x("p",{children:"Like similar CSS libraries, a grid contains 12 columns."}),te("p",{children:["An element with class ",x("code",{children:"col-1"})," will span just one column, whilst an element with class ",x("code",{children:"col-4"})," will span 4 columns (or 33.333% of the available space) and an element with ",x("code",{children:"col-12"})," will span the whole width of the grid."]}),te("p",{children:["Grids can combine columns of multiple widths. The generic ",x("code",{children:"col"})," class will fill all available space."]}),x("article",{children:te("div",{className:"row disable-mobile",children:[x("div",{className:"col-2",children:x("code",{style:{width:"100%"},children:"col-2"})}),x("div",{className:"col",children:x("code",{style:{width:"100%"},children:"col"})}),x("div",{className:"col-6",children:x("code",{style:{width:"100%"},children:"col-6"})})]})})]}),x("div",{children:x(a,{lang:"xml",children:`<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[x("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),te("figure",{children:[x("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-columns",e,t)}),x("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),x("div",{children:x(a,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Finally, you can even omit the ",x("code",{children:"col"})," class entirely. A ",x("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",x("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",x("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),x("article",{children:te("div",{className:"row disable-mobile",children:[x("img",{width:"80",height:"80",src:i.resImg("16-80x80.jpg",t),alt:"sample image"}),x("div",{children:x("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),x("div",{children:x(a,{lang:"xml",children:`<div class="row">
  <p width="80" height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}s(mt,"Grids");import{jsx as G,jsxs as ye}from"https://esm.sh/react@19.2.6/jsx-runtime";function pt({theme:e}){return G(m,{theme:e,children:ye("section",{className:"row",children:[ye("div",{children:[G("p",{children:"There are three classes that allow you to set different content widths:"}),ye("table",{children:[G("thead",{children:ye("tr",{children:[G("th",{children:"Class"}),G("th",{children:"Width"}),G("th",{children:"Info"})]})}),ye("tbody",{children:[ye("tr",{children:[G("td",{children:G("code",{children:"container-narrow"})}),G("td",{children:"800px"}),G("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),ye("tr",{children:[G("td",{children:G("code",{children:"container-medium"})}),G("td",{children:"1200px"}),G("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),ye("tr",{children:[G("td",{children:G("code",{children:"container-wide"})}),G("td",{children:"1600px"}),G("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]}),ye("tr",{children:[G("td",{children:G("code",{children:"container-full"})}),G("td",{children:"100%"}),ye("td",{children:["Sets the size of the container to 100%. When ",G("code",{children:"container-wide"})," is not enough."]})]})]})]}),G("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),G("div",{children:G(a,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}s(pt,"Containers");import{jsx as O,jsxs as Q}from"https://esm.sh/react@19.2.6/jsx-runtime";function ut({theme:e}){let t=k();return Q(m,{theme:e,children:[Q("section",{className:"row",children:[Q("div",{children:[Q("p",{children:["Some elements are visually meant to ",O("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",O("code",{children:"group"})," role."]}),Q("p",{children:["In the case of a group of ",O("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),Q("p",{role:"group",children:[O("button",{children:"Option 1"}),O("button",{type:"reset",children:"Option 2"})]})]}),O("div",{children:O(a,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}s(ut,"Groups");import{jsx as J,jsxs as we}from"https://esm.sh/react@19.2.6/jsx-runtime";function ht({theme:e}){let t=k();return we(m,{theme:e,children:[we("section",{className:"row",children:[we("div",{children:[we("p",{children:["A ",J("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",J("code",{children:"nav"})," or ",J("code",{children:"menu"}),"):"]}),J("iframe",{scrolling:"no",width:"100%",height:275,src:i.example("layout-header-simple",e,t)}),J("p",{children:J("a",{href:i.example("layout-header-simple",e,t),target:"_blank",children:"See standalone example"})})]}),J("div",{children:J(a,{lang:"xml",children:`<header>
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
</main>`})})]})]})}s(ht,"Header");import{jsx as U,jsxs as Me}from"https://esm.sh/react@19.2.6/jsx-runtime";function vt({theme:e}){let t=k();return U(m,{theme:e,children:Me("section",{className:"row",children:[Me("div",{children:[Me("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",U("code",{children:"nav"})," element."]}),Me("p",{children:["As with unordered lists, you can denote the selected elment using the ",U("code",{children:"aria-selected"})," attribute."]}),U("nav",{className:"disable-mobile",children:Me("ol",{children:[U("li",{children:U("a",{href:"",children:"Home"})}),U("li",{children:U("a",{href:"",children:"Library"})}),U("li",{"aria-selected":!0,children:U("a",{href:"",children:"Data"})})]})}),U("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),U("nav",{className:"disable-mobile",children:Me("ol",{children:[U("li",{children:Me("a",{href:"",children:[Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[U("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),U("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),U("span",{children:"Home"})]})}),U("li",{"aria-selected":!0,children:U("a",{href:"",children:"Folder"})})]})}),U("p",{children:"Finally, breadcrumbs are also responsive."}),Me("figure",{children:[U("iframe",{scrolling:"no",width:"100%",height:300,src:i.example("mobile-breadcrumbs",e,t)}),U("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),U("div",{children:U(a,{lang:"xml",children:`<nav>
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
</nav>`})})]})})}s(vt,"Breadcrumbs");import{useState as lo}from"https://esm.sh/react@19.2.6";import{jsx as X,jsxs as De}from"https://esm.sh/react@19.2.6/jsx-runtime";function $t(){let[e,t]=lo("tab-1");return X("main",{children:De("div",{className:"row disable-mobile",children:[X("aside",{children:X("div",{children:De("menu",{children:[X("li",{"aria-selected":e==="tab-1",children:De("a",{onClick:()=>t("tab-1"),children:[De("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),X("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),X("span",{children:"Home"})]})}),X("li",{"aria-selected":e==="tab-2",children:De("a",{onClick:()=>t("tab-2"),children:[X("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:X("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),X("span",{children:"Install"})]})}),X("li",{"aria-selected":e==="tab-3",children:De("a",{onClick:()=>t("tab-3"),children:[De("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X("circle",{cx:"12",cy:"12",r:"10"}),X("path",{d:"M17 12h.01"}),X("path",{d:"M12 12h.01"}),X("path",{d:"M7 12h.01"})]}),X("span",{children:"More"})]})})]})})}),De("div",{style:{flexGrow:1},children:[e==="tab-1"?X(St,{}):null,e==="tab-2"?X(Nt,{}):null,e==="tab-3"?X(Tt,{}):null]})]})})}s($t,"MobileTabs");import{useState as no}from"https://esm.sh/react@19.2.6";import{jsx as S,jsxs as K}from"https://esm.sh/react@19.2.6/jsx-runtime";function gt({theme:e}){let[t,r]=no("primary");return S(m,{theme:e,children:K("section",{className:"row",children:[K("div",{children:[K("p",{children:["You can apply several color modes with the help of few classes like ",S("code",{children:"primary"}),", ",S("code",{children:"secondary"}),", ",S("code",{children:"success"})," and ",S("code",{children:"error"}),"."]}),K("p",{children:["You can combine them with the ",S("code",{children:"inverted"})," class to change the colors of various components."]}),S("form",{children:K("label",{children:[S("span",{children:S("b",{children:"Color mode"})}),K("select",{onChange:s(u=>r(u.target.value),"onColorClassChange"),children:[S("option",{value:"primary",children:"Primary"}),S("option",{value:"secondary",children:"Secondary"}),S("option",{value:"success",children:"Success"}),S("option",{value:"error",children:"Error"})]})]})}),S("hr",{}),K("section",{children:[K("hgroup",{children:[K("h1",{children:[S("span",{className:`${t}`,children:"Lorem ipsum dolor"}),S("br",{}),"sit amet"]}),K("h4",{children:["Lorem ipsum dolor sit amet,",S("br",{}),S("span",{className:`${t} inverted`,children:"sed do amet"})]})]}),K("p",{role:"group",children:[S("mark",{className:`${t}`,children:"v12.5.33"}),S("mark",{className:`${t} inverted`,children:"Passing"})]})]}),S("section",{children:S("form",{children:K("div",{role:"group",className:`${t}`,children:[S("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),S("input",{type:"submit",value:"Subscribe"})]})})}),K("section",{children:[K("div",{className:"row",children:[K("article",{className:`${t}`,children:[K("hgroup",{children:[S("h4",{children:"Hobby"}),S("p",{children:S("b",{children:"Free"})})]}),S("p",{children:"Includes"}),K("ul",{children:[S("li",{children:"No credit card"}),S("li",{children:"All platforms"})]})]}),K("article",{className:`${t} inverted`,children:[K("hgroup",{children:[S("h4",{children:"Enterprise"}),S("p",{children:S("b",{children:S("a",{href:"",children:"Contact us"})})})]}),S("p",{children:"Includes"}),K("ul",{children:[S("li",{children:"Everything in Hobby"}),S("li",{children:"24/7 support"})]})]})]}),S("blockquote",{className:`${t}`,children:K("hgroup",{children:[S("h4",{children:"More information"}),S("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),K("p",{children:["Link ",S("a",{href:"",children:"here"}),"."]})]})})]})]}),S("div",{children:S(a,{lang:"xml",children:`...
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
`})})]})})}s(gt,"Colors");import{jsx as ge,jsxs as He}from"https://esm.sh/react@19.2.6/jsx-runtime";function bt({theme:e}){let t=k();return He(m,{theme:e,children:[He("section",{className:"row",children:[He("div",{children:[He("p",{children:["A ",ge("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),ge("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("layout-footer-simple",e,t)}),ge("p",{children:ge("a",{href:i.example("layout-footer-simple",e,t),target:"_blank",children:"See standalone example"})})]}),ge("div",{children:ge(a,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer with a <a href="...">link</a>.
  </div>
</footer>`})})]}),He("section",{className:"row",children:[He("div",{children:[ge("p",{children:"More complex footers can contain information divided by columns, etc."}),ge("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("layout-footer-complex",e,t)}),ge("p",{children:ge("a",{href:i.example("layout-footer-complex",e,t),target:"_blank",children:"See standalone example"})})]}),ge("div",{children:ge(a,{lang:"xml",children:`<footer>
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
</footer>`})})]})]})}s(bt,"Footer");import{useState as co}from"https://esm.sh/react@19.2.6";import{jsx as $,jsxs as Z}from"https://esm.sh/react@19.2.6/jsx-runtime";function ft({theme:e}){let[t,r]=co(!0);return Z(m,{theme:e,children:[Z("section",{className:"row",children:[Z("div",{children:[Z("p",{children:["You can add a loading indicator to an element by adding the ",$("code",{children:"aria-busy"})," attribute, with ",Z("span",{role:"group",style:{display:"inline-flex"},children:[$("mark",{onClick:()=>r(!0),className:t?"success":"",children:"true"}),$("mark",{onClick:()=>r(!1),className:t?"":"success",children:"false"})]}),"."]}),$("p",{children:"For example, it can be applied to buttons (with or without exiting icons):"}),Z("p",{className:"flex",children:[$("button",{"aria-busy":t,children:Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M4 11a9 9 0 0 1 9 9"}),$("path",{d:"M4 4a16 16 0 0 1 16 16"}),$("circle",{cx:"5",cy:"19",r:"1"})]})}),$("button",{"aria-busy":t,role:"reset",children:"Button"}),Z("button",{"aria-busy":t,className:"secondary",disabled:!0,children:[Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),$("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),$("span",{children:"Home"})]}),Z("button",{type:"reset","aria-busy":t,children:[$("span",{children:"Play"}),Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M21 4v16"}),$("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]})]}),$("div",{children:$(a,{lang:"xml",children:`<!-- icon button -->
<button${t?" aria-busy":""}>
  <svg ...></svg>
</button>
          
<!-- text button -->
<button${t?" aria-busy":""}>
  Button
</button>

<!-- left side icon (with "disabled" attribute) -->
<button disabled${t?" aria-busy":""}>
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
</article>`})})]})]})}s(ft,"Loading");import{jsx as o,jsxs as g}from"https://esm.sh/react@19.2.6/jsx-runtime";function wt({theme:e}){let t=k();return g(m,{theme:e,children:[g("section",{className:"row",children:[g("div",{children:[g("p",{children:["Any element can be turned into a ",o("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels",target:"_blank",children:"carousel"})," by adding the ",o("code",{children:'aria-roledescription="carousel"'})," attribute, as recommended by ",o("a",{href:'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/"',target:"_blank",children:"the W3C"}),"."]}),g("p",{children:["Ordered or unordered lists are preffered, because they work without specifying the additional ",o("code",{children:'aria-roledescription="slide"'})," attribute on each individual slide."]}),g("p",{children:["The ",o("code",{children:"aria-label"})," attribute can be used to give information about the contents of the carousel."]}),g("ol",{"aria-roledescription":"carousel","aria-label":"Simple Carousel",children:[o("li",{children:g("div",{children:[o("h3",{children:"Page 1"}),o("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}),o("li",{children:g("div",{children:[o("h3",{children:"Page 2"}),o("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),o("div",{children:o("a",{href:"",children:"https://example.com"})})]})}),o("li",{children:g("div",{children:[o("h3",{children:"Page 3"}),o("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),o("pre",{children:o("code",{children:"d488e0a9-fd57-4876-bc57-fa373d949379"})})]})})]})]}),o("div",{children:o(a,{lang:"xml",children:`<ol aria-roledescription="carousel">
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
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[o("p",{children:"If you choose a column size that does not divide the avaibale space neatly, you can generate a preview of the next slides."}),g("p",{children:["Below is an example using ",o("code",{children:"col-11"}),", which will mean most on large displays the first slide will be fully visible whilst the second will peek from the right."]}),g("p",{children:["A choise of ",o("code",{children:"col-5"})," will allow two slides to be fully visible and a third to peek, whilst choices like ",o("code",{children:"col-7"}),", ",o("code",{children:"col-8"}),", etc will allow more or less of the second slide to peek through."]}),o("p",{children:"Note on smaller devices carousels are responsive, so only one slide will be visible."}),o("article",{children:g("ol",{"aria-roledescription":"carousel","aria-label":"Plane Tickets",className:"row disable-mobile",children:[o("li",{className:"col-11",children:g("article",{children:[o(Zt,{src:"New York",dest:"Paris"}),o("hr",{}),o(yt,{start:"12:15",startDelay:"On time",end:"20:00",endDelay:"On time",type:"Direct"}),o(yt,{start:"13:25",startDelay:"On time",end:"21:00",endDelay:"Delayed",type:"Direct"}),o(Qt,{}),o("hr",{}),o(Jt,{})]})}),o("li",{className:"col-11",children:g("article",{children:[o(Zt,{src:"Tokyo",dest:"London"}),o("hr",{}),o(yt,{start:"06:00",startDelay:"On time",end:"18:00",endDelay:"Delayed",type:"Direct"}),o(yt,{start:"06:15",startDelay:"On time",end:"18:15",endDelay:"On time",type:"Direct"}),o(Qt,{}),o("hr",{}),o(Jt,{})]})})]})})]}),o("div",{children:o(a,{lang:"xml",children:`<ol aria-roledescription="carousel" class="row">
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
</ol>`})})]})]})}s(wt,"Carousel");function Zt(e){return o("div",{role:"group",children:g("div",{className:"row disable-mobile",children:[o("mark",{children:o(mo,{})}),g("div",{children:[o("b",{children:e.src}),o("br",{}),o("b",{children:e.dest})]})]})})}s(Zt,"OrderingHeader");function yt(e){return g("div",{className:"row disable-mobile",children:[g("div",{children:[o("b",{children:e.start}),o("br",{}),o("i",{children:o("small",{className:e.startDelay==="Delayed"?"error":"",children:e.startDelay})})]}),o("div",{children:o(po,{})}),g("div",{children:[o("b",{children:e.end}),o("br",{}),o("i",{children:o("small",{className:e.endDelay==="Delayed"?"error":"",children:e.endDelay})})]}),o("div",{children:o("mark",{children:e.type})})]})}s(yt,"OrderingDetails");function Qt(){return o("div",{children:o("a",{children:o("b",{children:"View more options"})})})}s(Qt,"OrderingOptions");function Jt(){return o("div",{children:g("div",{className:"row disable-mobile",children:[o("div",{}),o("button",{type:"submit",children:"Book"})]})})}s(Jt,"OrderingControl");function mo(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o("path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}),o("path",{d:"M13 5v2"}),o("path",{d:"M13 17v2"}),o("path",{d:"M13 11v2"})]})}s(mo,"TicketIcon");function po(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o("path",{d:"M5 12h14"}),o("path",{d:"m12 5 7 7-7 7"})]})}s(po,"ArrowIcon");import{jsx as qe,jsxs as Xt}from"https://esm.sh/react@19.2.6/jsx-runtime";function xt({theme:e}){let t=k();return qe(m,{theme:e,children:Xt("section",{className:"row",children:[Xt("div",{children:[qe("p",{children:"A carousel placed inside a header element will automatically form a hero element, where each slide extends as wide as the screen whilst the content stays correctly centered."}),qe("iframe",{scrolling:"no",width:"100%",height:500,src:i.example("carousel-header",e,t)}),qe("p",{children:qe("a",{href:i.example("carousel-header",e,t),target:"_blank",children:"See standalone example"})})]}),qe("div",{children:qe(a,{lang:"xml",children:`<header>
  <ol aria-roledescription="carousel">
    <!-- the slide can have a strong, bold, colour -->
    <!-- or a background image -->
    <li class="primary inverted">
      <!-- make sure the child is a layout element -->
      <div>
        <h1>...</h1>
        <p>...</p>
      </div>
    </li>
    <li class="secondary inverted">
      <div>...</div>
    <li>
  </ol>
</header>`})})]})})}s(xt,"CarouselHeader");import{jsx as xe,jsxs as Be}from"https://esm.sh/react@19.2.6/jsx-runtime";function kt({theme:e}){let t=k();return Be(m,{theme:e,children:[Be("section",{className:"row",children:[Be("div",{children:[xe("p",{children:"The HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar."}),Be("label",{htmlFor:"progress",children:[xe("span",{children:"Progress"}),xe("progress",{id:"progress",max:100,value:30})]})]}),xe("div",{children:xe(a,{lang:"xml",children:`<label for="progress">
  <span>Progress</span>
  <progress id="progress" max="100" value="30" />
</label>`})})]}),Be("section",{className:"row",children:[Be("div",{children:[xe("p",{children:"The HTML element represents either a scalar value within a known range or a fractional value."}),Be("label",{htmlFor:"meter",children:[xe("span",{children:"Fuel level:"}),xe("meter",{id:"meter",min:"0",max:"100",low:33,high:66,optimum:80,value:"50",children:"at 50/100"})]})]}),xe("div",{children:xe(a,{lang:"xml",children:`<label html="meter">
  <span>Fuel level:</span>

  <meter id="meter" min="0" max="5" value="3">
    at 3/5
  </meter>
</label>`})})]})]})}s(kt,"Meters");var i=class e{static{s(this,"RouteMaster")}static baseRoute="";static home(t,r){return`${e.getBase(r)}${t}/`}static showcase(t,r){return`${e.getBase(r)}${t}/showcases.html`}static doc(t,r,F){let u=e.getBase(F);switch(t){case"typography":return`${u}${r}/pages/docs/basics/${d(We)}`;case"buttons":return`${u}${r}/pages/docs/basics/${d(Oe)}`;case"blockquotes":return`${u}${r}/pages/docs/basics/${d(Pe)}`;case"code":return`${u}${r}/pages/docs/basics/${d(ze)}`;case"figures":return`${u}${r}/pages/docs/basics/${d(Ge)}`;case"lists":return`${u}${r}/pages/docs/basics/${d(Ue)}`;case"links":return`${u}${r}/pages/docs/basics/${d(je)}`;case"summary":return`${u}${r}/pages/docs/basics/${d(_e)}`;case"table":return`${u}${r}/pages/docs/basics/${d(Ye)}`;case"tags":return`${u}${r}/pages/docs/basics/${d(Ve)}`;case"cards":return`${u}${r}/pages/docs/basics/${d(dt)}`;case"meters":return`${u}${r}/pages/docs/basics/${d(kt)}`;case"forms-check":return`${u}${r}/pages/docs/forms/${d(Ze)}`;case"forms-disabled":return`${u}${r}/pages/docs/forms/${d(Qe)}`;case"forms-grouped":return`${u}${r}/pages/docs/forms/${d(Je)}`;case"forms-normal":return`${u}${r}/pages/docs/forms/${d(Xe)}`;case"forms-validation":return`${u}${r}/pages/docs/forms/${d(et)}`;case"header":return`${u}${r}/pages/docs/layout/${d(ht)}`;case"footer":return`${u}${r}/pages/docs/layout/${d(bt)}`;case"carousel":return`${u}${r}/pages/docs/layout/${d(wt)}`;case"carousel-header":return`${u}${r}/pages/docs/layout/${d(xt)}`;case"groups":return`${u}${r}/pages/docs/layout/${d(ut)}`;case"modal":return`${u}${r}/pages/docs/layout/${d(ot)}`;case"navigation":return`${u}${r}/pages/docs/navigation/${d(at)}`;case"breadcrumbs":return`${u}${r}/pages/docs/navigation/${d(vt)}`;case"tabs":return`${u}${r}/pages/docs/navigation/${d(it)}`;case"menu":return`${u}${r}/pages/docs/navigation/${d(rt)}`;case"dark-mode":return`${u}${r}/pages/docs/extra/${d(st)}`;case"icons":return`${u}${r}/pages/docs/extra/${d(lt)}`;case"loading":return`${u}${r}/pages/docs/extra/${d(ft)}`;case"mobile":return`${u}${r}/pages/docs/extra/${d(nt)}`;case"classes":return`${u}${r}/pages/docs/custom/${d(ct)}`;case"grid":return`${u}${r}/pages/docs/custom/${d(mt)}`;case"containers":return`${u}${r}/pages/docs/custom/${d(pt)}`;case"colors":return`${u}${r}/pages/docs/custom/${d(gt)}`;default:return"/"}}static getDocFromRoute(t){let F=t.split("/docs/").pop(),[u,b]=F?.split("/")??[];switch(u){case"basics":switch(b){case d(We):return"typography";case d(Oe):return"buttons";case d(Pe):return"blockquotes";case d(ze):return"code";case d(Ge):return"figures";case d(je):return"links";case d(Ue):return"lists";case d(_e):return"summary";case d(Ye):return"table";case d(Ve):return"tags";case d(dt):return"cards";case d(kt):return"meters"}case"forms":switch(b){case d(Ze):return"forms-check";case d(Qe):return"forms-disabled";case d(Je):return"forms-grouped";case d(Xe):return"forms-normal";case d(et):return"forms-validation"}case"layout":switch(b){case d(ht):return"header";case d(bt):return"footer";case d(wt):return"carousel";case d(xt):return"carousel-header";case d(ut):return"groups";case d(ot):return"modal"}case"navigation":switch(b){case d(at):return"navigation";case d(vt):return"breadcrumbs";case d(it):return"tabs";case d(rt):return"menu"}case"extra":switch(b){case d(st):return"dark-mode";case d(lt):return"icons";case d(ft):return"loading";case d(nt):return"mobile"}case"custom":switch(b){case d(ct):return"classes";case d(mt):return"grid";case d(pt):return"containers";case d(gt):return"colors"}}}static example(t,r,F){let u=e.getBase(F);switch(t){case"desktop-menu":return`${u}${r}/pages/examples/${d(Rt)}`;case"layout-header-simple":return`${u}${r}/pages/examples/${d(Wt)}`;case"layout-header-sub":return`${u}${r}/pages/examples/${d(Pt)}`;case"layout-header-section":return`${u}${r}/pages/examples/${d(At)}`;case"layout-footer-simple":return`${u}${r}/pages/examples/${d(Yt)}`;case"layout-footer-complex":return`${u}${r}/pages/examples/${d(Vt)}`;case"mobile-columns":return`${u}${r}/pages/examples/${d(zt)}`;case"mobile-menu":return`${u}${r}/pages/examples/${d(Gt)}`;case"mobile-nav":return`${u}${r}/pages/examples/${d(jt)}`;case"mobile-breadcrumbs":return`${u}${r}/pages/examples/${d(Ot)}`;case"mobile-tabs-nav":return`${u}${r}/pages/examples/${d($t)}`;case"mobile-tabs-exp-nav":return`${u}${r}/pages/examples/${d(Ut)}`;case"mobile-typography":return`${u}${r}/pages/examples/${d(_t)}`;case"carousel-header":return`${u}${r}/pages/examples/${d(Kt)}`}}static showcases(t,r){return`${e.getBase(r)}showcase/${t}/${Et(t)}.html`}static showcaseImg(t,r,F="light"){return`${e.getBase(r)}showcase/${t}/${Et(t)}.${F}.png`}static resImg(t,r){return`${e.getBase(r)}res/${t}`}static getBase(t){return t?t===""?"/":`/${t}/`:"/"}};function d(e){return`${Et(e.name)}.html`}s(d,"htmlName");function Et(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}s(Et,"toKebabCase");import{jsx as z,jsxs as $e}from"https://esm.sh/react@19.2.6/jsx-runtime";function Dt(){let e=Ht(),t=k(),r=s(F=>{let u=F.target.value;if(typeof window<"u"){let b=window.location.pathname;if(b.includes(e)){let ue=b.replace(e,u);window.location.href=ue}else if(b.includes(Ie)){let ue=b.split("/"),oe=ue.indexOf(Ie)+1;ue.splice(oe,0,u);let Ae=ue.join("/");window.location.href=Ae}else{let ue=`/${u}${b}`;window.location.href=ue}}},"onThemeChange");return z("nav",{children:$e("ul",{children:[z("li",{children:$e("a",{href:i.home(e,t),children:[$e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),z("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),z("span",{children:"Home"})]})}),z("li",{children:$e("a",{href:i.showcase(e,t),children:[$e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),z("circle",{cx:"12",cy:"12",r:"3"})]}),z("span",{children:"Showcase"})]})}),z("div",{}),z("li",{className:"hide-on-desktop",children:$e("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[$e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),z("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),z("span",{children:"GitHub"})]})}),z("li",{children:$e("select",{name:"theme-selector",onChange:r,children:[z("option",{value:"default",selected:e==="default",children:"Default"}),z("option",{value:"blog",selected:e==="blog",children:"Blog"}),z("option",{value:"app",selected:e==="app",children:"App"}),z("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),z("option",{value:"landing",selected:e==="landing",children:"Landing"}),z("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),z("li",{className:"hide-on-mobile",children:z("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:z("button",{type:"reset",children:$e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),z("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}s(Dt,"TopNav");import{jsx as qt,jsxs as uo}from"https://esm.sh/react@19.2.6/jsx-runtime";function Bt({theme:e,children:t}){return uo(Ft,{value:e,children:[qt("header",{children:qt(Dt,{})}),qt("main",{children:t})]})}s(Bt,"HomeLayout");import{jsx as n,jsxs as ne}from"https://esm.sh/react@19.2.6/jsx-runtime";function m({theme:e,children:t}){let r=k(),[F,u]=eo(!1),[b,ue]=eo(void 0);return ho(()=>{if(typeof window<"u"){let oe=i.getDocFromRoute(window.location.pathname);ue(oe)}},[]),n(Bt,{theme:e,children:ne("div",{className:"row",children:[ne("aside",{children:[ne("div",{className:"hide-on-desktop",role:"group",children:[ne("div",{className:"row",children:[n("div",{children:n("button",{onClick:()=>u(!F),children:F?ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M18 6 6 18"}),n("path",{d:"m6 6 12 12"})]}):ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n("path",{d:"M7 8h10"}),n("path",{d:"M7 12h10"}),n("path",{d:"M7 16h10"})]})})}),n("span",{children:n("b",{children:"Chapters"})})]}),n("hr",{})]}),ne("div",{className:F===!1||F===void 0?"hide-on-mobile":"",children:[ne("menu",{children:[n("b",{children:"Basics"}),n("li",{"aria-selected":b==="typography",children:n("a",{href:i.doc("typography",e,r),children:"Typography"})}),n("li",{"aria-selected":b==="buttons",children:n("a",{href:i.doc("buttons",e,r),children:"Buttons"})}),n("li",{"aria-selected":b==="tags",children:n("a",{href:i.doc("tags",e,r),children:"Tags"})}),n("li",{"aria-selected":b==="lists",children:n("a",{href:i.doc("lists",e,r),children:"Lists"})}),n("li",{"aria-selected":b==="links",children:n("a",{href:i.doc("links",e,r),children:"Links"})}),n("li",{"aria-selected":b==="blockquotes",children:n("a",{href:i.doc("blockquotes",e,r),children:"Blokquotes"})}),n("li",{"aria-selected":b==="summary",children:n("a",{href:i.doc("summary",e,r),children:"Summary"})}),n("li",{"aria-selected":b==="code",children:n("a",{href:i.doc("code",e,r),children:"Code"})}),n("li",{"aria-selected":b==="table",children:n("a",{href:i.doc("table",e,r),children:"Table"})}),n("li",{"aria-selected":b==="figures",children:n("a",{href:i.doc("figures",e,r),children:"Figures"})}),n("li",{"aria-selected":b==="cards",children:n("a",{href:i.doc("cards",e,r),children:"Cards"})}),n("li",{"aria-selected":b==="meters",children:n("a",{href:i.doc("meters",e,r),children:"Meters"})})]}),ne("menu",{children:[n("b",{children:"Forms"}),n("li",{"aria-selected":b==="forms-normal",children:n("a",{href:i.doc("forms-normal",e,r),children:"Normal"})}),n("li",{"aria-selected":b==="forms-check",children:n("a",{href:i.doc("forms-check",e,r),children:"Checks & Radios"})}),n("li",{"aria-selected":b==="forms-grouped",children:n("a",{href:i.doc("forms-grouped",e,r),children:"Grouped"})}),n("li",{"aria-selected":b==="forms-disabled",children:n("a",{href:i.doc("forms-disabled",e,r),children:"Disabled"})}),n("li",{"aria-selected":b==="forms-validation",children:n("a",{href:i.doc("forms-validation",e,r),children:"Validation"})})]}),ne("menu",{children:[n("b",{children:"Layout"}),n("li",{"aria-selected":b==="header",children:n("a",{href:i.doc("header",e,r),children:"Headers"})}),n("li",{"aria-selected":b==="footer",children:n("a",{href:i.doc("footer",e,r),children:"Footers"})}),n("li",{children:ne("details",{open:!0,children:[n("summary",{children:"Carousel"}),ne("menu",{children:[n("li",{"aria-selected":b==="carousel",children:n("a",{href:i.doc("carousel",e,r),children:"Inline"})}),n("li",{"aria-selected":b==="carousel-header",children:n("a",{href:i.doc("carousel-header",e,r),children:"Header"})})]})]})}),n("li",{"aria-selected":b==="groups",children:n("a",{href:i.doc("groups",e,r),children:"Groups"})}),n("li",{"aria-selected":b==="modal",children:n("a",{href:i.doc("modal",e,r),children:"Modal"})})]}),ne("menu",{children:[n("b",{children:"Navigation"}),n("li",{"aria-selected":b==="navigation",children:n("a",{href:i.doc("navigation",e,r),children:"Basic"})}),n("li",{"aria-selected":b==="breadcrumbs",children:n("a",{href:i.doc("breadcrumbs",e,r),children:"Breadcrumbs"})}),n("li",{"aria-selected":b==="menu",children:n("a",{href:i.doc("menu",e,r),children:"Menu"})}),n("li",{"aria-selected":b==="tabs",children:n("a",{href:i.doc("tabs",e,r),children:"Tabs"})})]}),ne("menu",{children:[n("b",{children:"Extra"}),n("li",{"aria-selected":b==="dark-mode",children:n("a",{href:i.doc("dark-mode",e,r),children:"Dark Mode"})}),n("li",{"aria-selected":b==="icons",children:n("a",{href:i.doc("icons",e,r),children:"Icons"})}),n("li",{"aria-selected":b==="loading",children:n("a",{href:i.doc("loading",e,r),children:"Loading"})}),n("li",{"aria-selected":b==="mobile",children:n("a",{href:i.doc("mobile",e,r),children:"Mobile"})})]}),ne("menu",{children:[n("b",{children:"Custom"}),n("li",{"aria-selected":b==="grid",children:n("a",{href:i.doc("grid",e,r),children:"Grids"})}),n("li",{"aria-selected":b==="containers",children:n("a",{href:i.doc("containers",e,r),children:"Containers"})}),n("li",{"aria-selected":b==="colors",children:n("a",{href:i.doc("colors",e,r),children:"Colors"})}),n("li",{"aria-selected":b==="classes",children:n("a",{href:i.doc("classes",e,r),children:"Classes"})})]})]})]}),n("div",{children:t})]})})}s(m,"DocLayout");export{k as a,m as b,Oe as c,We as d,Pe as e,ze as f,Ge as g,je as h,_e as i,Ye as j,Ve as k,Ue as l,Ze as m,Qe as n,Je as o,Xe as p,et as q,ot as r,at as s,it as t,rt as u,st as v,lt as w,nt as x,dt as y,ct as z,mt as A,pt as B,ut as C,ht as D,vt as E,$t as F,gt as G,bt as H,ft as I,wt as J,xt as K,kt as L,i as M,Dt as N,Bt as O};
