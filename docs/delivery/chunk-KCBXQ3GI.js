import{a as At}from"./chunk-KC2WVVTY.js";import{a as Ot}from"./chunk-4F2ROYBB.js";import{a as Wt}from"./chunk-MDCAHXJR.js";import{a as Gt}from"./chunk-UPLXQAUZ.js";import{a as Rt}from"./chunk-XF2WV4YZ.js";import{a as _t}from"./chunk-ESLRQYEZ.js";import{a as Ft}from"./chunk-SVFQNSTA.js";import{a as zt}from"./chunk-PRBPLC6K.js";import{a as Pt}from"./chunk-HRT75PLO.js";import{a as It}from"./chunk-GSZ6UK6V.js";import{a as Ht}from"./chunk-6WZ2BZS5.js";import{a as qt}from"./chunk-C74J2UAQ.js";import{a as Bt}from"./chunk-K4XVBUED.js";import{b as $t,c as Et,d as Dt,e as a}from"./chunk-X3RR2HUG.js";import{a as qe}from"./chunk-7AZBNJU6.js";import{a as l}from"./chunk-7X4DHW36.js";import{useEffect as co,useState as Kt}from"https://esm.sh/react@19.2.6";import{useState as Qt,useEffect as Jt}from"https://esm.sh/react@19.2.6";function B(){let[e,o]=Qt(void 0);return Jt(()=>{if(typeof window<"u"){let H=window.location.pathname.includes(qe)?qe:"";o(H)}},[]),e}l(B,"useRoute");import{jsx as u,jsxs as $}from"https://esm.sh/react@19.2.6/jsx-runtime";function He({theme:e}){let o=B();return $(m,{theme:e,children:[$("section",{className:"row",children:[$("div",{children:[$("p",{children:["Two types of buttons styles are supported: standard and outlined (for ",u("code",{children:"reset"})," type buttons)."]}),$("p",{children:[u("button",{children:"Button"}),u("button",{type:"reset",children:"Button"})]})]}),u("div",{children:u(a,{lang:"xml",children:`<button>Button</button>
<button type="reset">
  Button
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["Both types can be marked as ",u("code",{children:"disabled"}),", meaning no interaction will be possible with them."]}),$("p",{children:[u("button",{disabled:!0,children:"Disabled"}),u("button",{type:"reset",disabled:!0,children:"Disabled"})]})]}),u("div",{children:u(a,{lang:"xml",children:`<button disabled>
  Button
</button>
<button type="reset" disabled>
  Button
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[u("p",{children:"Buttons can be improved by adding svg icons, either to the left or to the right of the main button title."}),$("p",{children:[$("button",{children:[$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),u("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),u("span",{children:"Home"})]}),$("button",{type:"reset",children:[u("span",{children:"Play"}),$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M21 4v16"}),u("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]}),u("p",{children:$("small",{children:["You can learn more about icons ",u("a",{href:s.doc("icons",e,o),children:"here"}),"."]})})]}),u("div",{children:u(a,{lang:"xml",children:`<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[u("p",{children:"You can even create icon-only buttons by completely omitting the title."}),$("p",{children:[u("button",{children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M4 11a9 9 0 0 1 9 9"}),u("path",{d:"M4 4a16 16 0 0 1 16 16"}),u("circle",{cx:"5",cy:"19",r:"1"})]})}),u("button",{type:"reset",children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u("circle",{cx:"12",cy:"12",r:"4"})]})})]})]}),u("div",{children:u(a,{lang:"xml",children:`<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["By default, buttons are styled using the ",u("b",{children:"primary"})," color, which impacts their background, border or text color. You can change that by applying classes like ",u("code",{children:"secondary"}),", ",u("code",{children:"success"})," or ",u("code",{children:"error"}),"."]}),$("p",{className:"flex",children:[u("button",{className:"secondary",children:"Action"}),u("button",{className:"success",children:"Confirm"}),$("button",{type:"reset",className:"error",children:[$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M18 6 6 18"}),u("path",{d:"m6 6 12 12"})]}),u("span",{children:"Cancel"})]})]}),u("p",{children:$("small",{children:["You can learn more about colors ",u("a",{href:s.doc("colors",e,o),children:"here"}),"."]})})]}),u("div",{children:u(a,{lang:"xml",children:`<button
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
</button>`})})]}),$("section",{className:"row",children:[$("div",{children:[$("p",{children:["Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",u("code",{children:"group"})," role."]}),$("p",{role:"group",children:[u("button",{children:"Button 1"}),u("button",{type:"reset",children:"Button 2"}),u("button",{type:"reset",children:"Button 3"})]}),$("p",{role:"group",children:[u("button",{type:"reset",children:u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u("path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"})})}),u("button",{type:"reset",children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M7 10v12"}),u("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}),u("button",{children:$("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M12 2v13"}),u("path",{d:"m16 6-4-4-4 4"}),u("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})]})})]}),$("p",{role:"group",children:[u("button",{type:"reset",children:"Prev"}),u("button",{type:"reset",children:"1"}),u("button",{type:"reset",children:"2"}),u("button",{type:"reset",children:"3"}),u("button",{type:"reset",children:"Next"})]}),u("p",{children:$("small",{children:["You can learn more about groups ",u("a",{href:s.doc("groups",e,o),children:"here"}),"."]})})]}),u("div",{children:u(a,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}l(He,"Buttons");import{jsx as k,jsxs as ne}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ae({theme:e}){return ne(m,{theme:e,children:[ne("section",{className:"row",children:[ne("div",{children:[ne("p",{children:["Typography is based purely on ",k("a",{href:"https://en.wikipedia.org/wiki/CSS#CSS_3",target:"_blank",children:"CSS3"}),", meaning it can handle everything from basic paragraphs:"]}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),k("div",{children:k(a,{lang:"xml",children:`<p>
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
</p>`})})]}),ne("section",{className:"row",children:[ne("div",{children:[ne("p",{children:["To all sorts of text modifiers, like ",k("code",{children:"b"}),", ",k("code",{children:"i"}),", ",k("code",{children:"em"})," tags and many more."]}),k("p",{children:k("i",{children:"italic"})}),k("p",{children:k("em",{children:"emphasized"})}),k("p",{children:k("dfn",{children:"definition"})}),k("p",{children:k("cite",{children:"citation"})}),k("p",{children:k("b",{children:"bold"})}),k("p",{children:k("strong",{children:"strong"})}),k("p",{children:k("del",{children:"deleted"})}),k("p",{children:k("s",{children:"corrected"})}),k("p",{children:k("u",{children:"underlined"})}),k("p",{children:k("q",{children:"quotation"})})]}),k("div",{children:k(a,{lang:"xml",children:`<i>italic</i>
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
<sup>supescript</sup>`})})]}),ne("section",{className:"row",children:[ne("div",{children:[ne("p",{children:["Finally, it supports all six ",k("code",{children:"heading"})," types."]}),k("h1",{children:"Heading 1"}),k("h2",{children:"Heading 2"}),k("h3",{children:"Heading 3"}),k("h4",{children:"Heading 4"}),k("h5",{children:"Heading 5"}),k("h6",{children:"Heading 6"})]}),k("div",{children:k(a,{lang:"xml",children:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`})})]}),ne("section",{className:"row",children:[ne("div",{children:[ne("p",{children:["As well as the ability to group headings and associated content with ",k("code",{children:"hgroup"}),"."]}),ne("hgroup",{children:[k("h1",{children:"Heading 1"}),k("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),k("div",{children:k(a,{lang:"xml",children:`<hgroup>
  <h1>Heading 1</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,
    sed do eiusmod tempor 
    incididunt ut labore et 
    dolore magna aliqua. 
  </p>
</hgroup>`})})]})]})}l(Ae,"Typography");import{jsx as S,jsxs as ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function Oe({theme:e}){let o=B();return ee(m,{theme:e,children:[ee("section",{className:"row",children:[ee("div",{children:[S("p",{children:"Blockquotes (or block quotations) are visually separate from the surrounding text."}),S("blockquote",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),S("div",{children:S(a,{lang:"xml",children:`<blockquote>
  Lorem ipsum ...
</blockquote>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[S("p",{children:"It's not just text that can be included in a blockquote element, but code, icons, and many other elements."}),S("blockquote",{children:ee("p",{children:["Press ",S("kbd",{children:"Ctrl + Q"})," to quit"]})}),S("blockquote",{children:ee("hgroup",{children:[ee("p",{role:"group",children:[ee("svg",{xmlns:" http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[S("circle",{cx:"12",cy:"12",r:"10"}),S("path",{d:"M12 16v-4"}),S("path",{d:"M12 8h.01"})]}),S("span",{children:"Information"})]}),ee("p",{children:["Delivery for ",S("b",{children:"Tuesday at 08:00."})]})]})}),S("p",{children:ee("small",{children:["You can learn more about groups ",S("a",{href:s.doc("groups",e,o),children:"here"})," and about icons ",S("a",{href:s.doc("icons",e,o),children:"here"}),"."]})})]}),S("div",{children:S(a,{lang:"xml",children:`<blockquote>
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
</blockquote>`})})]}),ee("section",{className:"row",children:[ee("div",{children:[ee("p",{children:["Blockquotes can also be styled using the ",S("code",{children:"success"}),", ",S("code",{children:"error"}),", ",S("code",{children:"primary"})," and ",S("code",{children:"secondary"})," classes."]}),S("blockquote",{className:"success",children:ee("hgroup",{children:[S("h4",{children:"Success"}),S("p",{children:"The operation was successfull"})]})}),S("blockquote",{className:"error",children:ee("hgroup",{children:[S("p",{children:"Unknown error"}),S("p",{children:ee("code",{children:["Server response is ",S("b",{children:"Error 500"})]})})]})}),S("blockquote",{className:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),S("blockquote",{className:"secondary",children:S("hgroup",{children:ee("hgroup",{children:[S("h4",{children:"Title"}),S("p",{children:"Important Information"}),S("p",{children:S("button",{children:"Click me"})})]})})}),S("hgroup",{children:S("p",{children:ee("small",{children:["You can learn more about colors ",S("a",{href:s.doc("colors",e,o),children:"here"}),"."]})})})]}),S("div",{children:S(a,{lang:"xml",children:`<blockquote class="success">
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
</blockquote>`})})]})]})}l(Oe,"Blockquotes");import{jsx as be,jsxs as Be}from"https://esm.sh/react@19.2.6/jsx-runtime";function We({theme:e}){return be(m,{theme:e,children:be("section",{children:Be("div",{className:"row",children:[Be("div",{children:[be("p",{children:"Code can be displayed both inline as well as part of a stand alone code block."}),Be("p",{children:["Inline code ",be("code",{children:"console.log('abc')"})]}),Be("p",{children:["Keyboard shortcut ",be("kbd",{children:"Ctrl + S"})]}),Be("figure",{children:[be(a,{lang:"xml",children:"console.log('abc')"}),be("figcaption",{children:"Code block"})]}),Be("p",{children:["The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",be("a",{href:"http://hilite.me/",target:"_blank",children:"hilite.me"})," or ",be("a",{href:"https://highlightjs.org/",target:"_blank",children:"higlightjs.org"}),"."]})]}),be("div",{children:be(a,{lang:"xml",children:`<p>
  Inline code <code>console.log('abc')</code>
</p>
<p>
  Keyboard shortcut <kbd>Ctrl + S</kbd>
</p>
<pre>
  <code>console.log('abc')</code>
</pre>`})})]})})})}l(We,"Code");import{jsx as he,jsxs as xe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Re({theme:e}){return xe(m,{theme:e,children:[xe("section",{className:"row",children:[xe("div",{children:[he("p",{children:"Figures can contain a single image and an associated caption."}),xe("figure",{children:[he("img",{width:"640",height:"480",src:"https://picsum.photos/id/16/640/480",alt:"ssample image "}),he("figcaption",{children:"Sample caption"})]})]}),he("div",{children:he(a,{lang:"xml",children:`<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>`})})]}),xe("section",{className:"row",children:[xe("div",{children:[he("p",{children:"Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure."}),xe("figure",{children:[xe("figure",{children:[he("img",{width:"200",height:"240",src:"https://picsum.photos/id/16/200/240",alt:"first image"}),he("figcaption",{children:"First image"})]}),xe("figure",{children:[he("img",{width:"240",height:"240",src:"https://picsum.photos/id/16/240/240",alt:"second image"}),he("figcaption",{children:"Second image"})]}),he("figcaption",{children:"Figure group"})]})]}),he("div",{children:he(a,{lang:"xml",children:`<figure>
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
</figure>`})})]})]})}l(Re,"Figures");import{jsx as ie,jsxs as Ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function Pe({theme:e}){return Ce(m,{theme:e,children:[Ce("section",{className:"row",children:[Ce("div",{children:[ie("p",{children:"Anchor elements are used to create links to other pages, email addresses, locations in the same page or anything else a URL can address."}),Ce("ul",{children:[ie("li",{children:ie("a",{href:"",children:"website.com"})}),ie("li",{children:ie("a",{href:"",children:"email@test.com"})}),ie("li",{children:ie("a",{href:"",children:"/#location"})})]})]}),ie("div",{children:ie(a,{lang:"xml",children:`<a href="https://website.com">
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
`})})]})]})}l(Pe,"Links");import{jsx as T,jsxs as Y}from"https://esm.sh/react@19.2.6/jsx-runtime";function ze({theme:e}){let o=B();return Y(m,{theme:e,children:[Y("section",{className:"row",children:[Y("div",{children:[T("p",{children:"The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights."}),Y("details",{children:[T("summary",{children:"Info"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Y("details",{children:[T("summary",{children:"More info Info"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),T("div",{children:T(a,{lang:"xml",children:`<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["This basic summary can be placed inside an ",T("code",{children:"article"})," and combined with the ",T("code",{children:"primary"}),", ",T("code",{children:"success"})," or ",T("code",{children:"error"}),", etc classes to form a more visually appealing element."]}),T("article",{children:Y("details",{open:!0,children:[T("summary",{children:"Note"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),T("article",{className:"primary",children:Y("details",{children:[T("summary",{children:"Info"}),Y("p",{children:["Larn more ",T("a",{href:"",children:"here"})]})]})}),T("article",{className:"success",children:Y("details",{children:[T("summary",{children:"Success"}),Y("p",{children:["Operation finished ",T("code",{children:"OK"})]})]})}),T("article",{className:"error",children:Y("details",{children:[T("summary",{children:"Error"}),Y("div",{children:[T("p",{children:"Unknown error occurred"}),T("hr",{}),T("button",{children:"Acknowledge"})]})]})}),T("p",{children:Y("small",{children:["You can learn more about colors ",T("a",{href:s.doc("colors",e,o),children:"here"})," and cards ",T("a",{href:s.doc("cards",e,o),children:"here"}),"."]})})]}),T("div",{children:T(a,{lang:"xml",children:`<article>
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
</article>`})})]}),Y("section",{className:"row",children:[Y("div",{children:[Y("p",{children:["Finally, by giving a group of summary elements the same name and placing them inside an ",T("code",{children:"article"}),", you can form an accordion menu:"]}),Y("article",{children:[Y("details",{name:"menu",children:[T("summary",{children:"Option 1"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Y("details",{name:"menu",open:!0,children:[T("summary",{children:"Option 2"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Y("details",{name:"menu",children:[T("summary",{children:"Option 3"}),T("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),T("div",{children:T(a,{lang:"xml",children:`
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
</article>`})})]})]})}l(ze,"Summary");import{jsx as E,jsxs as fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ge({theme:e}){return E(m,{theme:e,children:fe("section",{className:"row",children:[fe("div",{children:[E("p",{children:"Tables are given a light glow up with appropriate padding, borders and highlights. Naturally, table cells can contain anything from plain text to images or links."}),fe("table",{children:[E("thead",{children:fe("tr",{children:[E("th",{children:"Cover"}),E("th",{children:"Item"}),E("th",{children:"Value"}),E("th",{children:"Comment"})]})}),fe("tbody",{children:[fe("tr",{children:[E("td",{children:E("img",{width:"30",height:"50",src:"https://picsum.photos/id/16/30/50",alt:"cover 1"})}),E("td",{children:E("a",{href:"",children:"Item 1.1"})}),E("td",{children:"20.35"}),E("td",{children:"In stock"})]}),fe("tr",{children:[E("td",{children:E("img",{width:"30",height:"50",src:"https://picsum.photos/id/100/30/50",alt:"cover 2"})}),E("td",{children:E("a",{href:"",children:"Item 2.1"})}),E("td",{children:"15.99"}),E("td",{children:"Out of stock"})]}),fe("tr",{children:[E("td",{children:E("img",{width:"30",height:"50",src:"https://picsum.photos/id/40/30/50",alt:"cover 3"})}),E("td",{children:E("a",{href:"",children:"Item 5.1"})}),E("td",{children:"14.23"}),E("td",{children:"In stock"})]}),fe("tr",{children:[E("td",{children:E("img",{width:"30",height:"50",src:"https://picsum.photos/id/25/30/50",alt:"cover 4"})}),E("td",{children:E("a",{href:"",children:"Item 22"})}),E("td",{children:"10.11"}),E("td",{children:"In stock"})]})]}),E("tfoot",{children:fe("tr",{children:[E("td",{colSpan:2,children:E("b",{children:"Total"})}),E("td",{colSpan:2,children:E("b",{children:"60.68"})})]})})]})]}),E("div",{children:E(a,{lang:"xml",children:`<table>
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
</table>`})})]})})}l(Ge,"Table");import{jsx as p,jsxs as D}from"https://esm.sh/react@19.2.6/jsx-runtime";function _e({theme:e}){let o=B();return D(m,{theme:e,children:[D("section",{className:"row",children:[D("div",{children:[D("p",{children:["You can mark any text, keyword or piece of information with the ",p("code",{children:"mark"})," html tag."]}),p("p",{children:p("mark",{children:"v15.20.30"})})]}),p("div",{children:p(a,{lang:"xml",children:"<mark>v15.20.30</mark>"})})]}),D("section",{className:"row",children:[D("div",{children:[p("p",{children:"You can append svg icons to the start and each of each piece of highlighted content."}),D("p",{children:[D("mark",{children:[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),p("path",{d:"m9 12 2 2 4-4"})]}),p("span",{children:"released"})]}),D("mark",{children:[p("span",{children:"error"}),D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),p("path",{d:"m9 12 2 2 4-4"})]})]})]}),p("p",{children:D("small",{children:["You can learn more about icons ",p("a",{href:s.doc("icons",e,o),children:"here"}),"."]})})]}),p("div",{children:p(a,{lang:"xml",children:`<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>`})})]}),D("section",{className:"row",children:[D("div",{children:[D("p",{children:["You  can assign the ",p("code",{children:"primary"}),", ",p("code",{children:"secondary"}),", ",p("code",{children:"success"})," or ",p("code",{children:"error"})," classes to change the appearance of the highlighted content. You can add the ",p("code",{children:"inverted"})," class to each of the previous to highlight the content even more."]}),D("p",{className:"flex",children:[p("mark",{className:"primary",children:"#theme"}),p("mark",{className:"secondary",children:"#second"}),p("mark",{className:"success",children:"Process OK"}),p("mark",{className:"error",children:"Error 400"})]}),D("p",{className:"flex",children:[p("mark",{className:"primary inverted",children:"#theme"}),p("mark",{className:"secondary inverted",children:"#second"}),p("mark",{className:"success inverted",children:"Process OK"}),p("mark",{className:"error inverted",children:"Error 400"})]}),p("p",{children:D("small",{children:["You can learn more about colors ",p("a",{href:s.doc("colors",e,o),children:"here"}),"."]})})]}),p("div",{children:p(a,{lang:"xml",children:`<!-- with or without -->
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
</mark>`})})]}),D("section",{className:"row",children:[D("div",{children:[D("p",{children:["Finally, if you wrap a number of highlighted pieces of text in a html element with the ",p("code",{children:"group"})," role, they will be grouped together."]}),D("p",{role:"group",children:[p("mark",{children:"npm"}),p("mark",{className:"success",children:"1.0.3"}),p("mark",{className:"error",children:D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x-icon lucide-x",children:[p("path",{d:"M18 6 6 18"}),p("path",{d:"m6 6 12 12"})]})})]}),p("p",{children:D("small",{children:["You can learn more about groups ",p("a",{href:s.doc("groups",e,o),children:"here"}),"."]})})]}),p("div",{children:p(a,{lang:"xml",children:`<p role="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>`})})]}),D("section",{className:"row",children:[D("div",{children:[D("p",{children:["You can use the ",p("code",{children:"mark"})," tag as standalone badges with text or with icons."]}),D("p",{children:[p("mark",{children:"1"}),p("mark",{children:"2"}),p("mark",{children:"3"}),p("mark",{children:D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),p("circle",{cx:"12",cy:"10",r:"3"})]})})]}),p("p",{children:"Or in more complex layouts."}),D("article",{children:[p("div",{role:"group",children:D("div",{className:"row",children:[p("mark",{className:"secondary",children:"1"}),D("div",{children:[p("b",{children:"Lorem ipsum dolor sit amet"}),p("br",{}),p("small",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}),p("div",{role:"group",children:D("div",{className:"row",children:[p("mark",{className:"secondary",children:"2"}),D("div",{children:[p("b",{children:"Sed ut perspiciatis unde omnis"}),p("br",{}),p("small",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."})]})]})}),p("div",{role:"group",children:D("div",{className:"row",children:[p("mark",{className:"secondary",children:"3"}),D("div",{children:[p("b",{children:"At vero eos et accusamus"}),p("br",{}),p("small",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."})]})]})})]}),p("p",{children:D("small",{children:["You can learn more about cards ",p("a",{href:s.doc("cards",e,o),children:"here"}),"."]})})]}),p("div",{children:p(a,{lang:"xml",children:`<p>
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
</article>`})})]})]})}l(_e,"Tags");import{jsx as ae,jsxs as Le}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ye({theme:e}){return Le(m,{theme:e,children:[Le("section",{className:"row",children:[Le("div",{children:[ae("p",{children:"Both ordered and unordered lists are styled such that they have a bit more vertical spacing."}),ae("p",{children:"As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep."}),Le("ul",{children:[ae("li",{children:"Item 1"}),ae("li",{children:"Item 2"}),Le("ol",{children:[ae("li",{children:"Item 1"}),ae("li",{children:"Item 2"})]})]})]}),ae("div",{children:ae(a,{lang:"xml",children:`<ul>
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
</dl>`})})]})]})}l(Ye,"Lists");import{useState as ft}from"https://esm.sh/react@19.2.6";import{jsx as x,jsxs as j}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ve({theme:e}){let[o,i]=ft("bread"),[H,h]=ft(!1),[b,me]=ft(!0);return j(m,{theme:e,children:[j("section",{className:"row",children:[j("div",{children:[x("p",{children:"To allow multiple items to be selected, you can use lighlty styled checkbox inputs."}),j("form",{children:[x("p",{children:x("b",{children:"Options"})}),j("label",{htmlFor:"egg",children:[x("input",{type:"checkbox",id:"egg",name:"sandwich",value:"egg"}),x("span",{children:"Egg"})]}),j("label",{htmlFor:"cheese",children:[x("input",{type:"checkbox",id:"cheese",name:"sandwich",value:"cheese"}),x("span",{children:"Cheese"})]}),j("label",{htmlFor:"ham",children:[x("input",{type:"checkbox",id:"ham",name:"sandwich",value:"ham"}),x("span",{children:"Ham"})]})]}),x("p",{children:"These work well even for complex, multi-line, checkboxes"}),j("form",{children:[x("p",{children:x("b",{children:"Todos"})}),j("label",{htmlFor:"friday",children:[x("input",{type:"checkbox",id:"friday",name:"todos",value:"friday"}),j("span",{children:[x("b",{children:"Friday"}),x("br",{}),x("span",{children:"- Order lunch"}),x("br",{}),x("span",{children:"- Go to work"}),x("span",{children:"- Eat lunch"})]})]}),j("label",{htmlFor:"saturday",children:[x("input",{type:"checkbox",id:"saturday",name:"todos",value:"saturday"}),j("span",{children:[x("b",{children:"Saturday"}),x("br",{}),x("span",{children:"- Order lunch"}),x("br",{}),x("span",{children:"- Eat lunch"})]})]})]})]}),x("div",{children:x(a,{lang:"xml",children:`<form>
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
</form>`})})]}),j("section",{className:"row",children:[j("div",{children:[x("p",{children:"If you want only one item to be selected out of a list of multiple options, you can use radio inputs."}),j("form",{children:[x("p",{children:x("b",{children:"Wrapping"})}),j("label",{htmlFor:"bread",children:[x("input",{type:"radio",id:"bread",name:"radio",value:"bread",checked:o==="bread",onChange:ue=>i(ue.target.value)}),x("span",{children:"Bread"})]}),j("label",{htmlFor:"salad",children:[x("input",{type:"radio",id:"salad",name:"radio",value:"salad",checked:o==="salad",onChange:ue=>i(ue.target.value)}),x("span",{children:"Salad"})]})]})]}),x("div",{children:x(a,{lang:"xml",children:`<form>
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
</form>`})})]}),j("section",{className:"row",children:[j("div",{children:[x("p",{children:"And if you want to represent an on/off state, you can use switches."}),j("form",{children:[j("label",{htmlFor:"terms",onClick:()=>h(!H),children:[x("input",{name:"terms",type:"checkbox",role:"switch",checked:H}),x("span",{children:"I agree to the terms"})]}),j("label",{htmlFor:"updates",onClick:()=>me(!b),children:[x("input",{name:"updates",type:"checkbox",role:"switch",checked:b}),x("span",{children:"I want to receive updates"})]})]})]}),x("div",{children:x(a,{lang:"xml",children:`<form>
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
      role="switch"${b?`
      checked/>`:"/>"}
    <span>I want to receive updates</span>
  </label>
</form>`})})]})]})}l(Ve,"FormsCheckbox");import{jsx as de,jsxs as $e}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ue({theme:e}){return de(m,{theme:e,children:$e("section",{className:"row",children:[$e("div",{children:[$e("p",{children:["A form can have all or part of its inputs set as ",de("code",{children:"disabled"})," to prevent any user interaction."]}),de("form",{children:$e("fieldset",{children:[de("legend",{children:"Disabled form"}),$e("label",{htmlFor:"email",children:[de("span",{children:"Email"}),de("input",{type:"email",id:"email",placeholder:"N/A",disabled:!0})]}),$e("label",{htmlFor:"address",children:[de("span",{children:"Address"}),de("input",{type:"text",id:"address",placeholder:"Address",disabled:!0})]}),$e("label",{htmlFor:"delivery",children:[de("span",{children:"Delivery"}),$e("select",{id:"delivery",defaultValue:"fast",disabled:!0,children:[de("option",{value:"fast",children:"Fast"}),de("option",{value:"standard",children:"Standard"})]})]}),de("input",{type:"submit",value:"Submit",disabled:!0})]})})]}),de("div",{children:de(a,{lang:"xml",children:`<form>
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
</form>`})})]})})}l(Ue,"FormsDisabled");import{jsx as y,jsxs as W}from"https://esm.sh/react@19.2.6/jsx-runtime";function je({theme:e}){return W(m,{theme:e,children:[W("section",{className:"row",children:[W("div",{children:[W("p",{children:["Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",y("code",{children:"group"})," role to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."]}),y("form",{children:W("div",{role:"group",children:[y("input",{id:"email",type:"email",placeholder:"Email"}),y("input",{type:"submit",value:"Subscribe"})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
  <div role="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>`})})]}),W("section",{className:"row",children:[W("div",{children:[y("p",{children:"This can be used to great effect for search inputs."}),y("form",{children:W("div",{role:"group",children:[y("mark",{children:W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y("path",{d:"m21 21-4.34-4.34"}),y("circle",{cx:"11",cy:"11",r:"8"})]})}),y("input",{type:"search",id:"search",placeholder:"Search"}),y("input",{type:"submit",value:"Search"})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
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
</form>`})})]}),W("section",{className:"row",children:[W("div",{children:[y("p",{children:"And even use mutliple buttons:"}),y("form",{children:W("div",{role:"group",children:[y("input",{type:"search",value:"",placeholder:"e.g. SW1A 1AA"}),y("button",{type:"reset",children:W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y("circle",{cx:"12",cy:"12",r:"10"}),y("line",{x1:"22",x2:"18",y1:"12",y2:"12"}),y("line",{x1:"6",x2:"2",y1:"12",y2:"12"}),y("line",{x1:"12",x2:"12",y1:"6",y2:"2"}),y("line",{x1:"12",x2:"12",y1:"22",y2:"18"})]})}),W("button",{type:"submit",children:[y("span",{children:"Go"}),W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y("path",{d:"M5 12h14"}),y("path",{d:"m12 5 7 7-7 7"})]})]})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
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
</form>`})})]}),W("section",{className:"row",children:[W("div",{children:[W("p",{children:["You can still wrap form elements inside a ",y("code",{children:"fieldset"})," with an appropriate ",y("code",{children:"legend"})," tag."]}),y("form",{children:W("fieldset",{children:[y("legend",{children:"Selection"}),W("div",{role:"group",children:[W("select",{id:"delivery",defaultValue:"fast",children:[y("option",{value:"fast",children:"Fast"}),y("option",{value:"standard",children:"Standard"})]}),y("input",{type:"date",id:"delivery-date"}),y("input",{type:"submit",value:"Confirm"})]})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
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
</form>`})})]}),W("section",{className:"row",children:[W("div",{children:[y("p",{children:"And you can group checkbox and radio in order to display them horizontally as well."}),y("form",{children:W("div",{role:"group",children:[W("label",{htmlFor:"ch_1",children:[y("input",{type:"checkbox",id:"ch_1",name:"check",value:"ch_1"}),y("span",{children:"Check #1"})]}),W("label",{htmlFor:"ch_2",children:[y("input",{type:"checkbox",id:"ch_2",name:"check",value:"ch_2"}),y("span",{children:"Check #2"})]}),W("label",{htmlFor:"ch_3",children:[y("input",{type:"checkbox",id:"ch_3",name:"check",value:"ch_3"}),y("span",{children:"Check #3"})]})]})})]}),y("div",{children:y(a,{lang:"xml",children:`<form>
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
</form>`})})]})]})}l(je,"FormsGrouped");import{useState as Xt}from"https://esm.sh/react@19.2.6";import{jsx as f,jsxs as I}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ke({theme:e}){let o=B(),[i,H]=Xt(50);return I(m,{theme:e,children:[I("section",{className:"row",children:[I("div",{children:[I("p",{children:["All ",f("a",{href:"https://www.w3schools.com/html/html_forms.asp",target:"_blank",children:"HTML form elements"})," are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."]}),I("form",{children:[I("label",{htmlFor:"email",children:[f("span",{children:"Email"}),f("input",{type:"email",placeholder:"Email Address",id:"email"})]}),I("label",{htmlFor:"password",children:[f("span",{children:"Password"}),f("input",{type:"password",id:"password",placeholder:"Password"})]}),f("input",{type:"submit",value:"Login"}),I("p",{children:["Don't have an account? ",f("a",{href:"",children:"Sign up"}),"."]})]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
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
</form>`})})]}),I("section",{className:"row",children:[I("div",{children:[f("p",{children:"Textareas are supported as well and by default they expand to fit the available horizontal space."}),I("form",{children:[f("textarea",{rows:4,id:"textarea",placeholder:"Write your comments..."}),f("input",{type:"submit",value:"Comment"})]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>`})})]}),I("section",{className:"row",children:[I("div",{children:[f("p",{children:"Ranged inputs are also supported."}),I("form",{children:[I("label",{htmlFor:"volume",children:[f("span",{children:"Volume (range)"}),f("input",{type:"range",id:"volume",name:"volume",min:0,max:100,step:1,value:i,onChange:h=>H(Number(h.target.value))})]}),f("input",{type:"submit",value:"Tune"})]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
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
</form>`})})]}),f("section",{children:I("div",{className:"row",children:[I("div",{children:[I("p",{children:["If you want your forms to stand out more, you can wrap the inputs inside a ",f("code",{children:"fieldset"})," and assign a ",f("code",{children:"legend"}),"."]}),f("form",{children:I("fieldset",{children:[f("legend",{children:"Details"}),I("div",{className:"row disable-mobile",children:[f("div",{children:I("label",{htmlFor:"first-name",children:[f("span",{children:"First name"}),f("input",{type:"text",id:"first-name",placeholder:"First name"})]})}),f("div",{children:I("label",{htmlFor:"last-name",children:[f("span",{children:"Last name"}),f("input",{type:"text",id:"last-name",placeholder:"Last name"})]})})]}),I("div",{className:"row disable-mobile",children:[f("div",{children:I("label",{htmlFor:"delivery",children:[f("span",{children:"Delivery Time"}),I("select",{id:"delivery",defaultValue:"mornibgt",children:[f("option",{value:"morning",children:"Morning"}),f("option",{value:"evening",children:"Evening"})]})]})}),f("div",{children:I("label",{htmlFor:"delivery-date",children:[f("span",{children:"Delivery Date"}),f("input",{type:"date",id:"delivery-date"})]})})]}),I("blockquote",{className:"success",children:["Order total is ",f("b",{children:"$33.59"})]}),I("div",{className:"row disable-mobile",children:[f("div",{children:f("input",{type:"reset",className:"error",value:"Reset"})}),f("div",{}),f("div",{children:f("input",{type:"submit",value:"Confirm"})})]})]})}),f("p",{children:"You can make forms as simple or as complex as you want."}),I("p",{children:["In the example above we're separating inputs into two separate ",f("a",{href:s.doc("grid",e,o),children:"columns"}),", so we can pack more information in the same space."]}),I("p",{children:["We're also using ",f("a",{href:s.doc("blockquotes",e,o),children:"blockquotes"})," to highlight important information."]}),I("p",{children:["We're using both ",f("code",{children:"submit"})," and ",f("code",{children:"reset"})," type inputs. Please note these inputs are styled to look exactly like ",f("a",{href:s.doc("blockquotes",e,o),children:"buttons"}),"."]})]}),f("div",{children:f(a,{lang:"xml",children:`<form>
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
</form>`})})]})})]})}l(Ke,"FormsNormal");import{useState as yt}from"https://esm.sh/react@19.2.6";import{jsx as F,jsxs as se}from"https://esm.sh/react@19.2.6/jsx-runtime";function Ze({theme:e}){let[o,i]=yt("a"),[H,h]=yt(""),[b,me]=yt("");return se(m,{theme:e,children:[se("section",{className:"row",children:[se("div",{children:[se("p",{children:["Helper styles for form validation come out of the box for any ",F("code",{children:"input"})," and ",F("code",{children:"textarea"})," elements marked as ",F("b",{children:"required"}),"."]}),F("p",{children:"Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid."}),F("p",{children:"Empty inputs do not display error styles."}),se("p",{children:["Adjacent text elements with the ",F("code",{children:"error"})," class can also have error styles applied, so as to act as guides for the user."]}),F("form",{action:"",method:"post",children:se("fieldset",{children:[F("legend",{children:"Input"}),se("label",{htmlFor:"name",children:[F("span",{children:"Name"}),F("input",{id:"name",name:"name",required:!0,placeholder:"Name...",pattern:".{4,100}",title:"Name must be at least 4 characters",value:o,onChange:ue=>i(ue.target.value)}),F("span",{className:"error",children:F("small",{children:"Enter a name between 4 and 100 characters"})})]}),se("label",{htmlFor:"email",children:[F("span",{children:"Email"}),F("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Email...",value:H,onChange:ue=>h(ue.target.value)})]}),se("label",{htmlFor:"comment",children:[F("span",{children:"Comment"}),F("textarea",{rows:5,id:"comment",name:"comment",placeholder:"Enter your comment",required:!0,minLength:10,maxLength:500,value:b,onChange:ue=>me(ue.target.value)}),F("span",{className:"error",children:F("small",{children:"Enter a meaningful comment"})})]}),F("input",{type:"submit",value:"Submit"})]})})]}),F("div",{children:F(a,{lang:"xml",children:`<form action="/" method="post">
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
</form>`})})]}),se("section",{className:"row",children:[se("div",{children:[se("p",{children:["Inputs that present a more limited range of options to a user, such as ",F("code",{children:"select"}),", ",F("code",{children:"radio"})," and ",F("code",{children:"check"})," buttons, won't display a error styles but can be set as required."]}),F("form",{children:se("fieldset",{children:[F("legend",{children:"Countries"}),se("select",{id:"country",name:"country",required:!0,children:[F("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please select a country"}),F("option",{value:"uk",children:"United Kingdom"}),F("option",{value:"fr",children:"France"}),F("option",{value:"de",children:"Germany"})]}),se("label",{children:[F("input",{type:"checkbox",name:"terms",required:!0}),"I accept the terms and conditions"]}),F("input",{type:"submit",value:"Submit"})]})})]}),F("div",{children:F(a,{lang:"xml",children:`<form>
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
</form>`})})]})]})}l(Ze,"FormsValidation");import{useRef as eo}from"https://esm.sh/react@19.2.6";import{jsx as re,jsxs as Qe}from"https://esm.sh/react@19.2.6/jsx-runtime";function Je({theme:e}){let o=eo(null);return re(m,{theme:e,children:Qe("section",{className:"row",children:[Qe("div",{children:[re("p",{children:"Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element."}),re("p",{children:"Click the button below to open the modal dialog."}),re("p",{children:re("button",{onClick:l(()=>o.current?.showModal(),"openDialog"),children:"Open modal"})}),re(to,{ref:o})]}),re("div",{children:re(a,{lang:"xml",children:`<button id="openBtn">Open modal</button>

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
`})})]})})}l(Je,"Modal");function to(e){return Qe("dialog",{ref:e.ref,children:[re("h2",{children:"Dialog"}),re("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),re("form",{method:"dialog",children:re("div",{role:"group",children:Qe("div",{className:"row",children:[re("button",{className:"error",value:"cancel",formNoValidate:!0,children:"Cancel"}),re("div",{}),re("button",{value:"confirm",children:"Confirm"})]})})})]})}l(to,"DialogModal");import{jsx as r,jsxs as N}from"https://esm.sh/react@19.2.6/jsx-runtime";function Xe({theme:e}){let o=B();return N(m,{theme:e,children:[N("section",{className:"row",children:[N("div",{children:[N("p",{children:["The most basic navigation element is created by placing an unordered list of links within a ",r("code",{children:"nav"})," element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."]}),r("nav",{className:"disable-mobile",children:N("ul",{children:[r("li",{children:r("a",{href:"",children:"Item 1"})}),r("li",{children:r("a",{href:"",children:"Item 2"})}),r("li",{children:r("a",{href:"",children:"Item 3"})})]})}),r("p",{children:"Links may contain icons to enhance the look and feel of the navigation bar. Sub-lists are rendered as collapsible items."}),r("nav",{className:"disable-mobile",children:N("ul",{children:[r("li",{children:N("a",{href:"",children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),r("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),r("span",{children:"Home"})]})}),r("li",{children:N("a",{href:"",children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),r("path",{d:"m18 15 4-4"}),r("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),r("span",{children:"Docs"})]})}),N("li",{children:[N("a",{href:"",children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right",children:[r("circle",{cx:"12",cy:"12",r:"10"}),r("path",{d:"m10 8 4 4-4 4"})]}),r("span",{children:"More"})]}),N("ul",{children:[r("li",{children:r("a",{href:"",children:"Option 1"})}),r("li",{children:r("a",{href:"",children:"Option 2"})})]})]})]})}),N("p",{children:["Navigtion items may use the ",r("code",{children:"aria-selected"})," attribute to denote they are selected."]}),r("nav",{className:"disable-mobile",children:N("ul",{children:[r("li",{"aria-selected":!0,children:r("a",{href:"",children:"Selected"})}),r("li",{children:r("a",{href:"",children:"Unselected"})})]})})]}),r("div",{children:r(a,{lang:"xml",children:`<header>
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
</header>`})})]}),N("section",{className:"row",children:[N("div",{children:[N("p",{children:["You can use other elements such as ",r("code",{children:"select"}),", ",r("code",{children:"input"}),", ",r("code",{children:"img"}),", etc to add more functionality to the navigation bar."]}),r("nav",{className:"disable-mobile",children:N("ul",{children:[r("li",{children:N("a",{href:"",children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),r("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),r("span",{children:"Home"})]})}),r("li",{children:N("select",{id:"selector",defaultValue:"opt-1",style:{minWidth:"100px"},children:[r("option",{value:"opt-1",children:"Val 1"}),r("option",{value:"opt-2",children:"Val 2"}),r("option",{value:"opt-3",children:"Val 3"})]})}),r("li",{children:r("input",{type:"search",placeholder:"Search ...",id:"search"})})]})}),r("br",{})]}),r("div",{children:r(a,{lang:"xml",children:`<li>
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
</li>`})})]}),N("section",{className:"row",children:[N("div",{children:[N("p",{children:["Navigation can be split into a left and a right section by placing an empty ",r("code",{children:"div"})," element to act as gap."]}),r("nav",{className:"disable-mobile",children:N("ul",{children:[r("li",{children:r("a",{href:"",children:"Home"})}),r("li",{children:r("a",{href:"",children:"Menu"})}),r("div",{}),r("li",{children:r("a",{href:"",children:r("button",{children:"Download"})})}),r("li",{children:r("a",{href:"",children:r("button",{type:"reset",children:N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),r("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})}),r("br",{})]}),r("div",{children:r(a,{lang:"xml",children:`<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<div></div>

<!-- right side -->
<li>...</li>
<li>...</li>`})})]}),N("section",{className:"row",children:[N("div",{children:[N("p",{children:["Navigation can be placed inside an ",r("code",{children:"article"})," to create a more striking display."]}),r("article",{children:r("nav",{className:"disable-mobile",children:N("ul",{children:[r("li",{children:N("a",{href:"",children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),r("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),r("span",{children:"Home"})]})}),r("li",{children:N("a",{href:"",children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r("path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}),r("path",{d:"m18 15 4-4"}),r("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]}),r("span",{children:"Docs"})]})}),r("li",{children:r("input",{type:"search",placeholder:"Search..."})}),r("div",{}),r("li",{children:r("a",{href:"",children:r("button",{type:"reset",children:N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),r("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}),r("br",{})]}),r("div",{children:r(a,{lang:"xml",children:`<article>
  <nav>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <div></div>
      <li>...</li>
    </ul>
  </nav>
</article>`})})]}),N("section",{className:"row",children:[N("div",{children:[r("p",{children:"Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout."}),N("figure",{children:[r("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-nav",e,o)}),r("figcaption",{children:"Showcase of navigation on a smaller device"})]})]}),r("div",{children:r(a,{lang:"xml",children:`<header>
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
</header>`})})]})]})}l(Xe,"Navigation");import{useState as oo}from"https://esm.sh/react@19.2.6";import{Fragment as Ct,jsx as C,jsxs as oe}from"https://esm.sh/react@19.2.6/jsx-runtime";function wt(){return oe(Ct,{children:[C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),C("p",{children:C("button",{children:"Discover"})})]})}l(wt,"Tab1");function kt(){return oe(Ct,{children:[C("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),C("div",{children:C("blockquote",{children:"lorem ipsum install"})})]})}l(kt,"Tab2");function xt(){return C(Ct,{children:C("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})})}l(xt,"Tab3");function et({theme:e}){let o=B(),[i,H]=oo("tab-1");return oe(m,{theme:e,children:[oe("section",{className:"row",children:[oe("div",{children:[oe("p",{children:["Tabbed navigation is suitable for switching between various pieces of content within a particular page. It can be created by using a ",C("code",{children:"<menu>"})," element ",C("b",{children:"outside"})," of a ",C("code",{children:"nav"})," element."]}),C("div",{className:"disable-mobile",children:oe("menu",{children:[C("li",{"aria-selected":i==="tab-1",children:oe("a",{onClick:()=>H("tab-1"),children:[oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),C("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),C("span",{children:"Home"})]})}),C("li",{"aria-selected":i==="tab-2",children:oe("a",{onClick:()=>H("tab-2"),children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:C("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),C("span",{children:"Install"})]})}),C("li",{"aria-selected":i==="tab-3",children:oe("a",{onClick:()=>H("tab-3"),children:[oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("circle",{cx:"12",cy:"12",r:"10"}),C("path",{d:"M17 12h.01"}),C("path",{d:"M12 12h.01"}),C("path",{d:"M7 12h.01"})]}),C("span",{children:"More"})]})})]})}),oe("div",{children:[i==="tab-1"?C(wt,{}):null,i==="tab-2"?C(kt,{}):null,i==="tab-3"?C(xt,{}):null]})]}),C("div",{children:C(a,{lang:"xml",children:`<main>
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
</main>`})})]}),oe("section",{className:"row",children:[oe("div",{children:[C("p",{children:"Tabs are responsive. On larger screens they will expand horizontally, whilst on smaller screens (or smaller containers in general) they will expand vertically."}),C("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-tabs-nav",e,o)}),C("p",{children:C("a",{href:s.example("mobile-tabs-nav",e,o),target:"_blank",children:"See standalone example"})})]}),C("div",{children:C(a,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),oe("section",{className:"row",children:[oe("div",{children:[oe("p",{children:["Tabs can be nested and they can be combiend with ",C("code",{children:"summary"})," elements to be collapsible."]}),C("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("mobile-tabs-exp-nav",e,o)}),C("p",{children:C("a",{href:s.example("mobile-tabs-exp-nav",e,o),target:"_blank",children:"See standalone example"})})]}),C("div",{children:C(a,{lang:"xml",children:`<menu<
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
</menu>`})})]})]})}l(et,"Tabs");import{jsx as G,jsxs as ce}from"https://esm.sh/react@19.2.6/jsx-runtime";function tt({theme:e}){let o=B();return ce(m,{theme:e,children:[ce("section",{className:"row",children:[ce("div",{children:[G("p",{children:"Menu type navigation can be used both as the top level navigation as well as part of various page elements."}),G("p",{children:"It's best suited when each navigation item is paired with a specific icon."}),G("nav",{children:ce("menu",{className:"disable-mobile",children:[G("li",{"aria-selected":!0,children:ce("a",{href:"",children:[ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),G("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),G("span",{children:"Home"})]})}),G("li",{children:ce("a",{href:"",children:[ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M4 11a9 9 0 0 1 9 9"}),G("path",{d:"M4 4a16 16 0 0 1 16 16"}),G("circle",{cx:"5",cy:"19",r:"1"})]}),G("span",{children:"Latest"})]})}),G("li",{children:ce("a",{href:"",children:[ce("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G("path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}),G("path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),G("circle",{cx:"10",cy:"7",r:"4"})]}),G("span",{children:"Profile"})]})})]})})]}),G("div",{children:G(a,{lang:"xml",children:`<nav>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</nav>`})})]}),ce("section",{className:"row",children:[ce("div",{children:[ce("p",{children:["More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",G("code",{children:"header"})," element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."]}),ce("figure",{children:[G("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-menu",e,o)}),G("figcaption",{children:"Showcase of menu navigation on smaller device"})]})]}),G("div",{children:G(a,{lang:"xml",children:`<header>
  <nav>
    <menu>
      ...
    </menu>
  </nav>
</header>`})})]})]})}l(tt,"Menu");import{jsx as A,jsxs as ve}from"https://esm.sh/react@19.2.6/jsx-runtime";function ot({theme:e}){return A(m,{theme:e,children:ve("section",{className:"row",children:[ve("div",{children:[A("p",{children:`Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.`}),ve("p",{children:["By default you can add a ",A("b",{children:"meta"})," tag with the ",A("code",{children:"color-scheme"})," name and ",A("code",{children:"light dark"})," value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."]}),A("p",{children:"For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme."}),ve("table",{children:[A("thead",{children:ve("tr",{children:[A("th",{children:"Theme"}),A("th",{children:"Light"}),A("th",{children:"Dark"})]})}),ve("tbody",{children:[ve("tr",{children:[A("td",{children:"Default"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"Blog"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"App"}),A("td",{children:"\u2705"}),A("td",{children:"\u2705"})]}),ve("tr",{children:[A("td",{children:"Delivery"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]}),ve("tr",{children:[A("td",{children:"Landing"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]}),ve("tr",{children:[A("td",{children:"Newsletter"}),A("td",{children:"\u2705"}),A("td",{children:"\u274C"})]})]})]})]}),A("div",{children:A(a,{lang:"xml",children:`<html>
  <head>
    <!-- both variants -->
    <meta name="color-scheme" content="light dark"/>
    
    <!-- only dark variant -->
    <meta name="color-scheme" content="dark"/>
  </head>
</html>`})})]})})}l(ot,"DarkMode");import{jsx as pe,jsxs as Ne}from"https://esm.sh/react@19.2.6/jsx-runtime";function at({theme:e}){return Ne(m,{theme:e,children:[Ne("section",{className:"row",children:[Ne("div",{children:[pe("p",{children:"The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components."}),pe("p",{children:"When inside buttons the width & height is aligned to match the font size."}),pe("p",{children:Ne("button",{children:[Ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[pe("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),pe("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),pe("span",{children:"Home"})]})})]}),pe("div",{children:pe(a,{lang:"xml",children:`<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>`})})]}),Ne("section",{className:"row",children:[Ne("div",{children:[pe("p",{children:"If they are used in a standalone mode then they should have a clear width and height specified."}),Ne("div",{role:"group",children:[Ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[pe("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),pe("circle",{cx:"12",cy:"10",r:"3"})]}),pe("b",{children:"Test Address, SE11 8CL"})]})]}),pe("div",{children:pe(a,{lang:"xml",children:`<div role="group">
  <svg width="20" height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>`})})]})]})}l(at,"Icons");import{jsx as R,jsxs as V}from"https://esm.sh/react@19.2.6/jsx-runtime";function it({theme:e}){let o=B();return V(m,{theme:e,children:[V("section",{className:"row",children:[V("div",{children:[R("p",{children:"The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)."}),V("p",{children:["The threshold between wide and narrow happens at ",R("b",{children:"600px"}),"."]}),R("p",{children:"Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally."}),V("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-typography",e,o)}),V("figcaption",{children:["More information ",R("a",{href:s.doc("typography",e,o),children:"here"})]})]})]}),R("div",{children:R(a,{lang:"xml",children:`<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>`})})]}),V("section",{className:"row",children:[V("div",{children:[R("p",{children:"Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space."}),V("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-nav",e,o)}),V("figcaption",{children:["More information ",R("a",{href:s.doc("navigation",e,o),children:"here"})," or ",R("a",{href:s.doc("tabs",e,o),children:"here"}),"."]})]})]}),R("div",{children:R(a,{lang:"xml",children:`<header>
  <nav>
    <ul>
      <li><a href="...">...</a></li>
      ....
    </ul>
  </nav>
</header>`})})]}),V("section",{className:"row",children:[V("div",{children:[R("p",{children:"Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays."}),V("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-menu",e,o)}),V("figcaption",{children:["More information ",R("a",{href:s.doc("menu",e,o),children:"here"}),"."]})]})]}),R("div",{children:R(a,{lang:"xml",children:`<header>
  <menu>
    <li><a href="...">...</a></li>
    ....
  </menu>
</header>`})})]}),V("section",{className:"row",children:[V("div",{children:[V("p",{children:["Finally, elements that have the ",R("code",{children:"row"})," class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."]}),V("figure",{children:[R("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-columns",e,o)}),V("figcaption",{children:["More information ",R("a",{href:s.doc("grid",e,o),children:"here"}),"."]})]})]}),R("div",{children:R(a,{lang:"xml",children:`<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>`})})]}),V("section",{className:"row",children:[V("div",{children:[V("p",{children:["You can instruct an element to ignore mobile transitions by applying the ",R("code",{children:"disable-mobile"})," class."]}),V("p",{children:["You can also instruct elements to be hidden on mobile, via the ",R("code",{children:"hiden-on-mobile"})," class, or be hidden on desktop, via the ",R("code",{children:"hiden-on-desktop"})," class."]})]}),R("div",{})]})]})}l(it,"Mobile");import{jsx as c,jsxs as q}from"https://esm.sh/react@19.2.6/jsx-runtime";function st({theme:e}){let o=B();return q(m,{theme:e,children:[q("section",{className:"row",children:[q("div",{children:[q("p",{children:["By wrapping together a elements inside an ",c("code",{children:"article"}),", you can create a basic card-type layout."]}),q("div",{className:"row disable-mobile",children:[c("div",{children:c("article",{children:c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})}),c("div",{children:c("article",{className:"primary",children:c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
  <p>
    Lorem ipsum ...
  </p>
</article>

<article class="primary">
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["Cards can wrap headings and paragraphs and can be styled with ",c("code",{children:"success"}),", ",c("code",{children:"error"}),", etc classes."]}),q("div",{className:"row disable-mobile",children:[c("div",{children:q("article",{children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:q("article",{className:"secondary",children:[c("span",{children:c("b",{children:"Title"})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),q("div",{className:"row disable-mobile",children:[c("div",{children:q("article",{className:"success",children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:q("article",{className:"error",children:[c("h3",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]}),c("p",{children:q("small",{children:["You can learn more about classes ",c("a",{href:s.doc("classes",e,o),children:"here"}),"."]})})]}),c("div",{children:c(a,{lang:"xml",children:`
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

...`})})]}),q("section",{className:"row",children:[q("div",{children:[q("p",{children:["The ",c("code",{children:"header"})," element of a card will be styled so it's more proeminent."]}),q("div",{className:"row disable-mobile",children:[c("div",{children:q("article",{children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:q("article",{className:"success",children:[c("header",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
  <header>Title</header>
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),q("section",{className:"row",children:[q("div",{children:[c("p",{children:"Likewise, the first image tag used in a card will be styled as a header image."}),q("div",{className:"row disable-mobile",children:[c("div",{children:q("article",{children:[c("img",{height:"80",src:s.resImg("16-320x80.jpg",o)}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),c("div",{children:q("article",{className:"error",children:[c("img",{height:"80",src:"https://picsum.photos/id/16/420/80",alt:"header image"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</article>`})})]}),q("section",{className:"row",children:[q("div",{children:[c("p",{children:"You can combine elements inside a card to produce quite compelx results, as the example below shows."}),c("p",{children:"By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML."}),q("article",{children:[c("img",{height:"160",src:"https://picsum.photos/id/16/480/160",alt:"header image"}),c("h4",{children:"Title"}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),c("p",{children:c("button",{children:"Button"})})]})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
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
</article>`})})]}),q("section",{className:"row",children:[q("div",{children:[c("p",{children:"If we combine groups, columns and cards, we can experiment with even more daring layouts all while using just semantic HTML and minimal classes."}),q("article",{children:[c("div",{role:"group",children:q("div",{className:"row",children:[c("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"header image"}),q("div",{children:[c("b",{children:"Title"}),c("br",{}),c("span",{children:"Subtitle"})]})]})}),c("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),q("p",{children:[c("mark",{children:"v12.5.3"}),c("mark",{className:"success",children:"success"})]}),c("hr",{}),c("p",{children:c("button",{children:"Button"})})]}),c("p",{children:q("small",{children:["You can learn more about groups ",c("a",{href:s.doc("groups",e,o),children:"here"}),"."]})}),c("p",{children:q("small",{children:["You can learn more about columns ",c("a",{href:s.doc("grid",e,o),children:"here"}),"."]})})]}),c("div",{children:c(a,{lang:"xml",children:`<article>
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
</article>`})})]})]})}l(st,"Cards");import{jsx as v,jsxs as _}from"https://esm.sh/react@19.2.6/jsx-runtime";function rt({theme:e}){return v(m,{theme:e,children:v("section",{children:_("div",{children:[_("p",{children:[$t," aims to style elements purely based on their semantic meaning or on the relationships between elements. However, it also provides a limited set of classes that can be used to create more advanced layouts."]}),_("table",{children:[v("thead",{children:_("tr",{children:[v("th",{children:"Domain"}),v("th",{children:"Class"}),v("th",{children:"Effect"})]})}),_("tbody",{children:[_("tr",{children:[v("td",{rowSpan:4,children:"Containers"}),v("td",{children:v("code",{children:"container-medium"})}),v("td",{children:"Sets the maximum size of the container to 800px."})]}),_("tr",{children:[v("td",{children:v("code",{children:"container-narrow"})}),v("td",{children:"Sets the maximum size of the container to 1200px."})]}),_("tr",{children:[v("td",{children:v("code",{children:"container-wide"})}),v("td",{children:"Sets the maximum size of the container to 1600px."})]}),_("tr",{children:[v("td",{children:v("code",{children:"container-full"})}),v("td",{children:"Sets the  maximum size of the container to 100% (width of the screen)."})]}),_("tr",{children:[v("td",{rowSpan:3,children:"Layout"}),v("td",{children:v("code",{children:"row"})}),v("td",{children:"Transforms its child elements into horizontally aligned columns."})]}),_("tr",{children:[v("td",{children:v("code",{children:"col"})}),v("td",{children:"Instructs an element to occupy as much space as possible. If all elements have this class they will all have equal width."})]}),_("tr",{children:[v("td",{children:v("code",{children:"col-N"})}),_("td",{children:["Horizontal space is divided in 12 equal columns. From ",v("code",{children:"col-1"})," to ",v("code",{children:"col-12"})," we can progressively specify columns of greater and greater width."]})]}),_("tr",{children:[v("td",{rowSpan:4,children:"Mobile"}),v("td",{children:v("code",{children:"hide-on-mobile"})}),v("td",{children:"Hides an element if on small displays."})]}),_("tr",{children:[v("td",{children:v("code",{children:"hide-on-desktop"})}),v("td",{children:"Hides an element if on large displays."})]}),_("tr",{children:[v("td",{children:v("code",{children:"disable-mobile"})}),_("td",{children:["Disable layout changes on small displays. It can be applied to elements that have the ",v("code",{children:"row"})," class applied, nav bars, menus, etc to force them not to change their display on small screens."]})]}),_("tr",{children:[v("td",{children:v("code",{children:"flex"})}),v("td",{children:"Displays content normally on wider screens but switches to a row layout on smaller devices."})]}),_("tr",{children:[v("td",{rowSpan:5,children:"Colors"}),v("td",{children:v("code",{children:"primary"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's primary color."})]}),_("tr",{children:[v("td",{children:v("code",{children:"secondary"})}),v("td",{children:"Depening on context, it changes background, text or border colors to match various hues derived from the theme's secondary color."})]}),_("tr",{children:[v("td",{children:v("code",{children:"success"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's success color."})]}),_("tr",{children:[v("td",{children:v("code",{children:"error"})}),v("td",{children:"Depending on context, it changes background, text or border colors to match various hues derived from the theme's error color."})]}),_("tr",{children:[v("td",{children:v("code",{children:"inverted"})}),v("td",{children:"Takes any primary, secondary, success or error color scheme and inverts it such that the background color is a lot more proeminent and the text color is usually a contrasting one."})]}),_("tr",{children:[v("td",{rowSpan:1,children:"Alignment"}),v("td",{children:v("code",{children:"align-center"})}),v("td",{children:"Aligns elements centrally on the horizontal axis."})]})]})]})]})})})}l(rt,"Classes");import{jsx as w,jsxs as te}from"https://esm.sh/react@19.2.6/jsx-runtime";function lt({theme:e}){let o=B();return te(m,{theme:e,children:[te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Any layout element, such as a ",w("code",{children:"div"})," or ",w("code",{children:"section"}),", can be transformed into a grid with columns of equal width using the ",w("code",{children:"row"})," and ",w("code",{children:"col"})," classes."]}),te("article",{children:[te("div",{className:"row disable-mobile",children:[w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})}),w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})})]}),te("div",{className:"row disable-mobile",children:[w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})}),w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})}),w("div",{className:"col",children:w("code",{style:{width:"100%"},children:"col"})})]})]})]}),w("div",{children:w(a,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[w("p",{children:"Grids are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other."}),te("figure",{children:[w("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-columns",e,o)}),w("figcaption",{children:"Showcase of grids on a smaller device."})]})]}),w("div",{children:w(a,{lang:"xml",children:`<div class="row">
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
</div>`})})]}),te("section",{className:"row",children:[te("div",{children:[te("p",{children:["Finally, you can even omit the ",w("code",{children:"col"})," class entirely. A ",w("b",{children:"div"})," element will expand to fill as much width as available. Multiple ",w("b",{children:"divs"})," will eqpand equaly. And any other element (like an ",w("b",{children:"image"}),", etc) will expand naturally. This makes layouts like the one below possible and easy to write."]}),w("article",{children:te("div",{className:"row disable-mobile",children:[w("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"ssample image "}),w("div",{children:w("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})})]}),w("div",{children:w(a,{lang:"xml",children:`<div class="row">
  <p width="80" height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>`})})]})]})}l(lt,"Grids");import{jsx as z,jsxs as ye}from"https://esm.sh/react@19.2.6/jsx-runtime";function nt({theme:e}){return z(m,{theme:e,children:ye("section",{className:"row",children:[ye("div",{children:[z("p",{children:"There are three classes that allow you to set different content widths:"}),ye("table",{children:[z("thead",{children:ye("tr",{children:[z("th",{children:"Class"}),z("th",{children:"Width"}),z("th",{children:"Info"})]})}),ye("tbody",{children:[ye("tr",{children:[z("td",{children:z("code",{children:"container-narrow"})}),z("td",{children:"800px"}),z("td",{children:"This is the default viewport. Suitable for blogs, newsletters, etc."})]}),ye("tr",{children:[z("td",{children:z("code",{children:"container-medium"})}),z("td",{children:"1200px"}),z("td",{children:"A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it."})]}),ye("tr",{children:[z("td",{children:z("code",{children:"container-wide"})}),z("td",{children:"1600px"}),z("td",{children:"The largest viewport. Suitable for apps, dashboard, etc."})]}),ye("tr",{children:[z("td",{children:z("code",{children:"container-full"})}),z("td",{children:"100%"}),ye("td",{children:["Sets the size of the container to 100%. When ",z("code",{children:"container-wide"})," is not enough."]})]})]})]}),z("p",{children:"Of course, on mobile devices or tables, the viewport will adjust accordingly."})]}),z("div",{children:z(a,{lang:"xml",children:`<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>`})})]})})}l(nt,"Containers");import{jsx as O,jsxs as Q}from"https://esm.sh/react@19.2.6/jsx-runtime";function dt({theme:e}){return Q(m,{theme:e,children:[Q("section",{className:"row",children:[Q("div",{children:[Q("p",{children:["Some elements are visually meant to ",O("q",{children:"stick"})," together. In such a case, you can wrap them in a parent that's been given the ",O("code",{children:"group"})," role."]}),Q("p",{children:["In the case of a group of ",O("code",{children:"buttons"}),", all horizontal spacing and borders between them dissapear."]}),Q("p",{role:"group",children:[O("button",{children:"Option 1"}),O("button",{type:"reset",children:"Option 2"})]})]}),O("div",{children:O(a,{lang:"xml",children:`<p role="group">
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
</div>`})})]}),Q("section",{className:"row",children:[Q("div",{children:[O("p",{children:"Other elements, such as images, can also be grouped, although the impact isn't as pronounced."}),Q("p",{role:"group",children:[O("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/80/80",alt:"image 1"}),O("img",{width:"80",height:"80",src:"https://picsum.photos/id/16/120/120",alt:"image 2"})]})]}),O("div",{children:O(a,{lang:"xml",children:`<p role="group">
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
</p>`})})]})]})}l(dt,"Groups");import{jsx as J,jsxs as we}from"https://esm.sh/react@19.2.6/jsx-runtime";function ct({theme:e}){let o=B();return we(m,{theme:e,children:[we("section",{className:"row",children:[we("div",{children:[we("p",{children:["A ",J("code",{children:"header"})," element is used to define the introductory content of a page or a section. The simplest top level header can contain a navigation element (",J("code",{children:"nav"})," or ",J("code",{children:"menu"}),"):"]}),J("iframe",{scrolling:"no",width:"100%",height:275,src:s.example("layout-header-simple",e,o)}),J("p",{children:J("a",{href:s.example("layout-header-simple",e,o),target:"_blank",children:"See standalone example"})})]}),J("div",{children:J(a,{lang:"xml",children:`<header>
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
</main>`})})]}),we("section",{className:"row",children:[we("div",{children:[we("p",{children:['You create more complex "hero" layouts by placing any element, such as a ',J("code",{children:"div"}),", inside a header. Note that heroes are defined by the extra top and bottom padding child elements receive."]}),J("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-header-sub",e,o)}),J("p",{children:J("a",{href:s.example("layout-header-sub",e,o),target:"_blank",children:"See standalone example"})})]}),J("div",{children:J(a,{lang:"xml",children:`<!-- nav header -->
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
</main>`})})]}),we("section",{className:"row",children:[we("div",{children:[we("p",{children:["Finally, ",J("code",{children:"aside"}),' is another specialised element that can be used in a header in order to create a "banner" element, either to be placed at the top of the page or mid-content.']}),J("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-header-section",e,o)}),J("p",{children:J("a",{href:s.example("layout-header-section",e,o),target:"_blank",children:"See standalone example"})})]}),J("div",{children:J(a,{lang:"xml",children:`<main>
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
</main>`})})]})]})}l(ct,"Header");import{jsx as U,jsxs as Te}from"https://esm.sh/react@19.2.6/jsx-runtime";function pt({theme:e}){let o=B();return U(m,{theme:e,children:Te("section",{className:"row",children:[Te("div",{children:[Te("p",{children:["The breadcrumbs navigaion element is created by placing an ordered list of links inside the ",U("code",{children:"nav"})," element."]}),Te("p",{children:["As with unordered lists, you can denote the selected elment using the ",U("code",{children:"aria-selected"})," attribute."]}),U("nav",{className:"disable-mobile",children:Te("ol",{children:[U("li",{children:U("a",{href:"",children:"Home"})}),U("li",{children:U("a",{href:"",children:"Library"})}),U("li",{"aria-selected":!0,children:U("a",{href:"",children:"Data"})})]})}),U("p",{children:"Likewise, icons can be added to any link element, but unlike normal unordered navigation sub-lists will not be displayed."}),U("nav",{className:"disable-mobile",children:Te("ol",{children:[U("li",{children:Te("a",{href:"",children:[Te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[U("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),U("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),U("span",{children:"Home"})]})}),U("li",{"aria-selected":!0,children:U("a",{href:"",children:"Folder"})})]})}),U("p",{children:"Finally, breadcrumbs are also responsive."}),Te("figure",{children:[U("iframe",{scrolling:"no",width:"100%",height:300,src:s.example("mobile-breadcrumbs",e,o)}),U("figcaption",{children:"Showcase of breadcrumbs on a smaller device"})]})]}),U("div",{children:U(a,{lang:"xml",children:`<nav>
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
</nav>`})})]})})}l(pt,"Breadcrumbs");import{useState as ao}from"https://esm.sh/react@19.2.6";import{jsx as X,jsxs as Ee}from"https://esm.sh/react@19.2.6/jsx-runtime";function Lt(){let[e,o]=ao("tab-1");return X("main",{children:Ee("div",{className:"row disable-mobile",children:[X("aside",{children:X("div",{children:Ee("menu",{children:[X("li",{"aria-selected":e==="tab-1",children:Ee("a",{onClick:()=>o("tab-1"),children:[Ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),X("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),X("span",{children:"Home"})]})}),X("li",{"aria-selected":e==="tab-2",children:Ee("a",{onClick:()=>o("tab-2"),children:[X("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:X("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"})}),X("span",{children:"Install"})]})}),X("li",{"aria-selected":e==="tab-3",children:Ee("a",{onClick:()=>o("tab-3"),children:[Ee("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X("circle",{cx:"12",cy:"12",r:"10"}),X("path",{d:"M17 12h.01"}),X("path",{d:"M12 12h.01"}),X("path",{d:"M7 12h.01"})]}),X("span",{children:"More"})]})})]})})}),Ee("div",{style:{flexGrow:1},children:[e==="tab-1"?X(wt,{}):null,e==="tab-2"?X(kt,{}):null,e==="tab-3"?X(xt,{}):null]})]})})}l(Lt,"MobileTabs");import{useState as io}from"https://esm.sh/react@19.2.6";import{jsx as L,jsxs as K}from"https://esm.sh/react@19.2.6/jsx-runtime";function mt({theme:e}){let[o,i]=io("primary");return L(m,{theme:e,children:K("section",{className:"row",children:[K("div",{children:[K("p",{children:["You can apply several color modes with the help of few classes like ",L("code",{children:"primary"}),", ",L("code",{children:"secondary"}),", ",L("code",{children:"success"})," and ",L("code",{children:"error"}),"."]}),K("p",{children:["You can combine them with the ",L("code",{children:"inverted"})," class to change the colors of various components."]}),L("form",{children:K("label",{children:[L("span",{children:L("b",{children:"Color mode"})}),K("select",{onChange:l(h=>i(h.target.value),"onColorClassChange"),children:[L("option",{value:"primary",children:"Primary"}),L("option",{value:"secondary",children:"Secondary"}),L("option",{value:"success",children:"Success"}),L("option",{value:"error",children:"Error"})]})]})}),L("hr",{}),K("section",{children:[K("hgroup",{children:[K("h1",{children:[L("span",{className:`${o}`,children:"Lorem ipsum dolor"}),L("br",{}),"sit amet"]}),K("h4",{children:["Lorem ipsum dolor sit amet,",L("br",{}),L("span",{className:`${o} inverted`,children:"sed do amet"})]})]}),K("p",{role:"group",children:[L("mark",{className:`${o}`,children:"v12.5.33"}),L("mark",{className:`${o} inverted`,children:"Passing"})]})]}),L("section",{children:L("form",{children:K("div",{role:"group",className:`${o}`,children:[L("input",{type:"email",id:"subscribe",placeholder:"Enter email..."}),L("input",{type:"submit",value:"Subscribe"})]})})}),K("section",{children:[K("div",{className:"row",children:[K("article",{className:`${o}`,children:[K("hgroup",{children:[L("h4",{children:"Hobby"}),L("p",{children:L("b",{children:"Free"})})]}),L("p",{children:"Includes"}),K("ul",{children:[L("li",{children:"No credit card"}),L("li",{children:"All platforms"})]})]}),K("article",{className:`${o} inverted`,children:[K("hgroup",{children:[L("h4",{children:"Enterprise"}),L("p",{children:L("b",{children:L("a",{href:"",children:"Contact us"})})})]}),L("p",{children:"Includes"}),K("ul",{children:[L("li",{children:"Everything in Hobby"}),L("li",{children:"24/7 support"})]})]})]}),L("blockquote",{className:`${o}`,children:K("hgroup",{children:[L("h4",{children:"More information"}),L("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),K("p",{children:["Link ",L("a",{href:"",children:"here"}),"."]})]})})]})]}),L("div",{children:L(a,{lang:"xml",children:`...
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
  <blockquote class="${o}">
    ...
  </blockquote>
</div>
`})})]})})}l(mt,"Colors");import{jsx as ge,jsxs as Fe}from"https://esm.sh/react@19.2.6/jsx-runtime";function ut({theme:e}){let o=B();return Fe(m,{theme:e,children:[Fe("section",{className:"row",children:[Fe("div",{children:[Fe("p",{children:["A ",ge("code",{children:"footer"})," element is used to define the very last piece of content in a page or a section. The simplest footer can contain text, links, etc."]}),ge("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-footer-simple",e,o)}),ge("p",{children:ge("a",{href:s.example("layout-footer-simple",e,o),target:"_blank",children:"See standalone example"})})]}),ge("div",{children:ge(a,{lang:"xml",children:`<footer>
  <div>
    This is a simple footer with a <a href="...">link</a>.
  </div>
</footer>`})})]}),Fe("section",{className:"row",children:[Fe("div",{children:[ge("p",{children:"More complex footers can contain information divided by columns, etc."}),ge("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("layout-footer-complex",e,o)}),ge("p",{children:ge("a",{href:s.example("layout-footer-complex",e,o),target:"_blank",children:"See standalone example"})})]}),ge("div",{children:ge(a,{lang:"xml",children:`<footer>
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
</footer>`})})]})]})}l(ut,"Footer");import{useState as so}from"https://esm.sh/react@19.2.6";import{jsx as M,jsxs as Z}from"https://esm.sh/react@19.2.6/jsx-runtime";function ht({theme:e}){let[o,i]=so(!0);return Z(m,{theme:e,children:[Z("section",{className:"row",children:[Z("div",{children:[Z("p",{children:["You can add a loading indicator to an element by adding the ",M("code",{children:"aria-busy"})," attribute, with ",Z("span",{role:"group",style:{display:"inline-flex"},children:[M("mark",{onClick:()=>i(!0),className:o?"success":"",children:"true"}),M("mark",{onClick:()=>i(!1),className:o?"":"success",children:"false"})]}),"."]}),M("p",{children:"For example, it can be applied to buttons (with or without exiting icons):"}),Z("p",{className:"flex",children:[M("button",{"aria-busy":o,children:Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"M4 11a9 9 0 0 1 9 9"}),M("path",{d:"M4 4a16 16 0 0 1 16 16"}),M("circle",{cx:"5",cy:"19",r:"1"})]})}),M("button",{"aria-busy":o,role:"reset",children:"Button"}),Z("button",{"aria-busy":o,className:"secondary",children:[Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),M("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),M("span",{children:"Home"})]}),Z("button",{type:"reset","aria-busy":o,children:[M("span",{children:"Play"}),Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[M("path",{d:"M21 4v16"}),M("path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"})]})]})]})]}),M("div",{children:M(a,{lang:"xml",children:`<!-- icon button -->
<button${o?" aria-busy":""}>
  <svg ...></svg>
</button>
          
<!-- text button -->
<button${o?" aria-busy":""}>
  Button
</button>

<!-- left side icon -->
<button${o?" aria-busy":""}>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset"${o?" aria-busy":""}>
  <span>Play</span>
  <svg ...></svg>
</button>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[M("p",{children:"It can be applied to paragraphs or other text elements:"}),M("p",{"aria-busy":o,children:"Loading..."}),M("p",{children:M("a",{href:"","aria-busy":o,children:"Click me"})})]}),M("div",{children:M(a,{lang:"xml",children:`<p${o?" aria-busy":""}>Loading...</p>
          
<a href="..."${o?" aria-busy":""}>Click me</a>`})})]}),Z("section",{className:"row",children:[M("div",{}),M("div",{})]}),Z("section",{className:"row",children:[Z("div",{children:[M("p",{children:"Or it can be applied to block elements. In this case the whole content is hidden when loading."}),M("blockquote",{"aria-busy":o,children:Z("p",{children:["Press",M("kbd",{children:"Ctrl + Q"}),"to quit"]})})]}),M("div",{children:M(a,{lang:"xml",children:`<blockquote${o?" aria-busy":""}>
  <p>
    Press 
    <kbd>Ctrl + Q</kbd>
    to quit
  </p>
</blockquote>`})})]}),Z("section",{className:"row",children:[Z("div",{children:[M("p",{children:"And cards of different types, where the loading spinner is also horizontally centered."}),M("article",{"aria-busy":o,children:Z("details",{open:!0,children:[M("summary",{children:"Note"}),M("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),Z("article",{"aria-busy":o,className:"success",children:[M("span",{children:M("b",{children:"Title"})}),M("p",{children:"Lorem ipsum ..."})]})]}),M("div",{children:M(a,{lang:"xml",children:`<article${o?" aria-busy":""}>
  <details>
    <summary>...</summary>
    <p>...</p>
  </details>
</article>

<article${o?" aria-busy":""}>
  <span><b>...</b></span>
  <p>...</p>
</article>`})})]})]})}l(ht,"Loading");import{jsx as t,jsxs as g}from"https://esm.sh/react@19.2.6/jsx-runtime";function gt({theme:e}){let o=B();return g(m,{theme:e,children:[g("section",{className:"row",children:[g("div",{children:[g("p",{children:["Any element can be turned into a ",t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels",target:"_blank",children:"carousel"})," by adding the ",t("code",{children:'aria-roledescription="carousel"'})," attribute, as recommended by ",t("a",{href:'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/"',target:"_blank",children:"the W3C"}),"."]}),g("p",{children:["Ordered or unordered lists are preffered, because they work without specifying the additional ",t("code",{children:'aria-roledescription="slide"'})," attribute on each individual slide."]}),g("p",{children:["The ",t("code",{children:"aria-label"})," attribute can be used to give information about the contents of the carousel."]}),g("ol",{"aria-roledescription":"carousel","aria-label":"Simple Carousel",children:[t("li",{children:g("div",{children:[t("h3",{children:"Page 1"}),t("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}),t("li",{children:g("div",{children:[t("h3",{children:"Page 2"}),t("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),t("div",{children:t("a",{href:"",children:"https://example.com"})})]})}),t("li",{children:g("div",{children:[t("h3",{children:"Page 3"}),t("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),t("pre",{children:t("code",{children:"d488e0a9-fd57-4876-bc57-fa373d949379"})})]})})]})]}),t("div",{children:t(a,{lang:"xml",children:`<ol aria-roledescription="carousel">
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
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[t("p",{children:"Image carousels can be created just as easily as text ones."}),g("ol",{"aria-roledescription":"carousel","aria-label":"Image Carousel",children:[t("li",{children:t("img",{width:"100%",height:250,src:"https://picsum.photos/id/16/500/250",alt:"Slide Image 1"})}),t("li",{children:t("img",{width:"100%",height:250,src:"https://picsum.photos/id/100/500/250",alt:"Slide Image 2"})}),t("li",{children:t("img",{width:"100%",height:250,src:"https://picsum.photos/id/40/500/250",alt:"Slide Image 3"})})]}),t("figcaption",{children:"With one caption for the entire element."})]}),t("div",{children:t(a,{lang:"xml",children:`<ol aria-roledescription="carousel">
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 1"/>
  </li>
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 2"/>
  </li>
  <li>
    <img width="100%" height="250" src="..." alt="Slide Image 3"/>
  </li>
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[g("p",{children:["Carousel slides can, in fact, hold all sorts of complex components. More interestingly, they can be combined with ",t("a",{href:s.doc("grid",e,o),children:"grids"})," to produce a variety of layouts."]}),t("p",{children:"If you choose a column size that divides the available space neatly into equal parts, you can place a number of preview slides on the viewport, whilst keeping the rest hidden."}),g("table",{children:[t("thead",{children:g("tr",{children:[t("th",{children:"Class"}),t("th",{children:"Outcome"})]})}),g("tbody",{children:[g("tr",{children:[t("td",{children:t("code",{children:"col"})}),t("td",{children:"All slides will be visible"})]}),g("tr",{children:[t("td",{children:t("code",{children:"col-1"})}),t("td",{children:"The first 12 slides will be visible"})]}),g("tr",{children:[t("td",{children:t("code",{children:"col-2"})}),t("td",{children:"The first 6 slides will be visible"})]}),g("tr",{children:[t("td",{children:t("code",{children:"col-3"})}),t("td",{children:"The first 4 slides will be visible"})]}),g("tr",{children:[t("td",{children:t("code",{children:"col-4"})}),t("td",{children:"The first 3 slides will be visible"})]}),g("tr",{children:[t("td",{children:t("code",{children:"col-5"})}),t("td",{children:"The first 2 slides will be visible"})]})]})]}),g("ol",{"aria-roledescription":"carousel","aria-label":"Ordering Menu",className:"row disable-mobile",children:[t("li",{className:"col-6",children:g("article",{children:[t("img",{height:"120",src:"https://picsum.photos/id/216/480/120",alt:"header image"}),g("hgroup",{children:[t("h4",{children:"Botanical Garden"}),t("p",{children:"Lorem ipsum dolor sit amet"})]}),t("p",{children:t("mark",{className:"success",children:"25% off"})}),t("p",{children:t("a",{href:"",children:"Book"})})]})}),t("li",{className:"col-6",children:g("article",{children:[t("img",{height:"120",src:"https://picsum.photos/id/42/480/120",alt:"header image"}),g("hgroup",{children:[t("h4",{children:"Brunch"}),t("p",{children:"Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"})]}),t("p",{children:t("a",{href:"",children:"Book"})})]})}),t("li",{className:"col-6",children:g("article",{children:[t("img",{height:"120",src:"https://picsum.photos/id/211/480/120",alt:"header image"}),g("hgroup",{children:[t("h4",{children:"Boat trip"}),t("p",{children:"At vero eos et accusamus et iusto odio dignissimos"})]}),t("p",{children:t("a",{href:"",children:"Book"})})]})})]})]}),t("div",{children:t(a,{lang:"xml",children:`<ol aria-roledescription="carousel" class="row">
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
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[t("p",{children:"If you choose a column size that does not divide the avaibale space neatly, you can generate a preview of the next slides."}),g("p",{children:["Below is an example using ",t("code",{children:"col-11"}),", which will mean most on large displays the first slide will be fully visible whilst the second will peek from the right."]}),g("p",{children:["A choise of ",t("code",{children:"col-5"})," will allow two slides to be fully visible and a third to peek, whilst choices like ",t("code",{children:"col-7"}),", ",t("code",{children:"col-8"}),", etc will allow more or less of the second slide to peek through."]}),t("p",{children:"Note on smaller devices carousels are responsive, so only one slide will be visible."}),t("article",{children:g("ol",{"aria-roledescription":"carousel","aria-label":"Plane Tickets",className:"row disable-mobile",children:[t("li",{className:"col-11",children:g("article",{children:[t(Yt,{src:"New York",dest:"Paris"}),t("hr",{}),t(vt,{start:"12:15",startDelay:"On time",end:"20:00",endDelay:"On time",type:"Direct"}),t(vt,{start:"13:25",startDelay:"On time",end:"21:00",endDelay:"Delayed",type:"Direct"}),t(Vt,{}),t("hr",{}),t(Ut,{})]})}),t("li",{className:"col-11",children:g("article",{children:[t(Yt,{src:"Tokyo",dest:"London"}),t("hr",{}),t(vt,{start:"06:00",startDelay:"On time",end:"18:00",endDelay:"Delayed",type:"Direct"}),t(vt,{start:"06:15",startDelay:"On time",end:"18:15",endDelay:"On time",type:"Direct"}),t(Vt,{}),t("hr",{}),t(Ut,{})]})})]})})]}),t("div",{children:t(a,{lang:"xml",children:`<ol aria-roledescription="carousel" class="row">
  <li class="col-11">
    ...
  </li>
  <li class="col-11">
    ...
  </li>
  <li class="col-11">
    ...
  </li>
</ol>`})})]}),g("section",{className:"row",children:[g("div",{children:[t("p",{children:"In previous examples each column also represents a single carousel slide. Using the same mechanism you can group multiple elements together on the same slide."}),g("ol",{"aria-roledescription":"carousel","aria-label":"Multi Column Example",children:[g("li",{className:"row disable-mobile",children:[g("div",{children:[t("p",{children:t("mark",{className:"primary",children:t("b",{children:"1"})})}),t("p",{children:t("b",{children:"Page 1.1"})}),t("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),g("div",{children:[t("p",{children:t("mark",{className:"success",children:t("b",{children:"2"})})}),t("p",{children:t("b",{children:"Page 1.2"})}),t("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"})]})]}),g("li",{className:"row disable-mobile",children:[g("div",{children:[t("p",{children:t("mark",{className:"secondary",children:t("b",{children:"2"})})}),t("p",{children:t("b",{children:"Page 2.1"})}),t("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]}),g("div",{children:[t("p",{children:t("mark",{className:"error",children:t("b",{children:"2"})})}),t("p",{children:t("b",{children:"Page 2.2"})}),t("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})]})]}),t("div",{children:t(a,{lang:"xml",children:`<ol aria-roledescription="carousel">
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
</ol>`})})]})]})}l(gt,"Carousel");function Yt(e){return t("div",{role:"group",children:g("div",{className:"row disable-mobile",children:[t("mark",{children:t(ro,{})}),g("div",{children:[t("b",{children:e.src}),t("br",{}),t("b",{children:e.dest})]})]})})}l(Yt,"OrderingHeader");function vt(e){return g("div",{className:"row disable-mobile",children:[g("div",{children:[t("b",{children:e.start}),t("br",{}),t("i",{children:t("small",{className:e.startDelay==="Delayed"?"error":"",children:e.startDelay})})]}),t("div",{children:t(lo,{})}),g("div",{children:[t("b",{children:e.end}),t("br",{}),t("i",{children:t("small",{className:e.endDelay==="Delayed"?"error":"",children:e.endDelay})})]}),t("div",{children:t("mark",{children:e.type})})]})}l(vt,"OrderingDetails");function Vt(){return t("div",{children:t("a",{children:t("b",{children:"View more options"})})})}l(Vt,"OrderingOptions");function Ut(){return t("div",{children:g("div",{className:"row disable-mobile",children:[t("div",{}),t("button",{type:"submit",children:"Book"})]})})}l(Ut,"OrderingControl");function ro(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t("path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}),t("path",{d:"M13 5v2"}),t("path",{d:"M13 17v2"}),t("path",{d:"M13 11v2"})]})}l(ro,"TicketIcon");function lo(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t("path",{d:"M5 12h14"}),t("path",{d:"m12 5 7 7-7 7"})]})}l(lo,"ArrowIcon");import{jsx as De,jsxs as jt}from"https://esm.sh/react@19.2.6/jsx-runtime";function bt({theme:e}){let o=B();return De(m,{theme:e,children:jt("section",{className:"row",children:[jt("div",{children:[De("p",{children:"A carousel placed inside a header element will automatically form a hero element, where each slide extends as wide as the screen whilst the content stays correctly centered."}),De("iframe",{scrolling:"no",width:"100%",height:500,src:s.example("carousel-header",e,o)}),De("p",{children:De("a",{href:s.example("carousel-header",e,o),target:"_blank",children:"See standalone example"})})]}),De("div",{children:De(a,{lang:"xml",children:`<header>
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
</header>`})})]})})}l(bt,"CarouselHeader");var s=class e{static{l(this,"RouteMaster")}static baseRoute="";static home(o,i){return`${e.getBase(i)}${o}/`}static showcase(o,i){return`${e.getBase(i)}${o}/showcases.html`}static doc(o,i,H){let h=e.getBase(H);switch(o){case"typography":return`${h}${i}/pages/docs/basics/${d(Ae)}`;case"buttons":return`${h}${i}/pages/docs/basics/${d(He)}`;case"blockquotes":return`${h}${i}/pages/docs/basics/${d(Oe)}`;case"code":return`${h}${i}/pages/docs/basics/${d(We)}`;case"figures":return`${h}${i}/pages/docs/basics/${d(Re)}`;case"lists":return`${h}${i}/pages/docs/basics/${d(Ye)}`;case"links":return`${h}${i}/pages/docs/basics/${d(Pe)}`;case"summary":return`${h}${i}/pages/docs/basics/${d(ze)}`;case"table":return`${h}${i}/pages/docs/basics/${d(Ge)}`;case"tags":return`${h}${i}/pages/docs/basics/${d(_e)}`;case"cards":return`${h}${i}/pages/docs/basics/${d(st)}`;case"forms-check":return`${h}${i}/pages/docs/forms/${d(Ve)}`;case"forms-disabled":return`${h}${i}/pages/docs/forms/${d(Ue)}`;case"forms-grouped":return`${h}${i}/pages/docs/forms/${d(je)}`;case"forms-normal":return`${h}${i}/pages/docs/forms/${d(Ke)}`;case"forms-validation":return`${h}${i}/pages/docs/forms/${d(Ze)}`;case"header":return`${h}${i}/pages/docs/layout/${d(ct)}`;case"footer":return`${h}${i}/pages/docs/layout/${d(ut)}`;case"carousel":return`${h}${i}/pages/docs/layout/${d(gt)}`;case"carousel-header":return`${h}${i}/pages/docs/layout/${d(bt)}`;case"groups":return`${h}${i}/pages/docs/layout/${d(dt)}`;case"modal":return`${h}${i}/pages/docs/layout/${d(Je)}`;case"navigation":return`${h}${i}/pages/docs/navigation/${d(Xe)}`;case"breadcrumbs":return`${h}${i}/pages/docs/navigation/${d(pt)}`;case"tabs":return`${h}${i}/pages/docs/navigation/${d(et)}`;case"menu":return`${h}${i}/pages/docs/navigation/${d(tt)}`;case"dark-mode":return`${h}${i}/pages/docs/extra/${d(ot)}`;case"icons":return`${h}${i}/pages/docs/extra/${d(at)}`;case"loading":return`${h}${i}/pages/docs/extra/${d(ht)}`;case"mobile":return`${h}${i}/pages/docs/extra/${d(it)}`;case"classes":return`${h}${i}/pages/docs/custom/${d(rt)}`;case"grid":return`${h}${i}/pages/docs/custom/${d(lt)}`;case"containers":return`${h}${i}/pages/docs/custom/${d(nt)}`;case"colors":return`${h}${i}/pages/docs/custom/${d(mt)}`;default:return"/"}}static getDocFromRoute(o){let H=o.split("/docs/").pop(),[h,b]=H?.split("/")??[];switch(h){case"basics":switch(b){case d(Ae):return"typography";case d(He):return"buttons";case d(Oe):return"blockquotes";case d(We):return"code";case d(Re):return"figures";case d(Pe):return"links";case d(Ye):return"lists";case d(ze):return"summary";case d(Ge):return"table";case d(_e):return"tags";case d(st):return"cards"}case"forms":switch(b){case d(Ve):return"forms-check";case d(Ue):return"forms-disabled";case d(je):return"forms-grouped";case d(Ke):return"forms-normal";case d(Ze):return"forms-validation"}case"layout":switch(b){case d(ct):return"header";case d(ut):return"footer";case d(gt):return"carousel";case d(bt):return"carousel-header";case d(dt):return"groups";case d(Je):return"modal"}case"navigation":switch(b){case d(Xe):return"navigation";case d(pt):return"breadcrumbs";case d(et):return"tabs";case d(tt):return"menu"}case"extra":switch(b){case d(ot):return"dark-mode";case d(at):return"icons";case d(ht):return"loading";case d(it):return"mobile"}case"custom":switch(b){case d(rt):return"classes";case d(lt):return"grid";case d(nt):return"containers";case d(mt):return"colors"}}}static example(o,i,H){let h=e.getBase(H);switch(o){case"desktop-menu":return`${h}${i}/pages/examples/${d(Ft)}`;case"layout-header-simple":return`${h}${i}/pages/examples/${d(Ht)}`;case"layout-header-sub":return`${h}${i}/pages/examples/${d(It)}`;case"layout-header-section":return`${h}${i}/pages/examples/${d(qt)}`;case"layout-footer-simple":return`${h}${i}/pages/examples/${d(Pt)}`;case"layout-footer-complex":return`${h}${i}/pages/examples/${d(zt)}`;case"mobile-columns":return`${h}${i}/pages/examples/${d(At)}`;case"mobile-menu":return`${h}${i}/pages/examples/${d(Ot)}`;case"mobile-nav":return`${h}${i}/pages/examples/${d(Wt)}`;case"mobile-breadcrumbs":return`${h}${i}/pages/examples/${d(Bt)}`;case"mobile-tabs-nav":return`${h}${i}/pages/examples/${d(Lt)}`;case"mobile-tabs-exp-nav":return`${h}${i}/pages/examples/${d(Gt)}`;case"mobile-typography":return`${h}${i}/pages/examples/${d(Rt)}`;case"carousel-header":return`${h}${i}/pages/examples/${d(_t)}`}}static showcases(o,i){return`${e.getBase(i)}showcase/${o}/${St(o)}.html`}static showcaseImg(o,i,H="light"){return`${e.getBase(i)}showcase/${o}/${St(o)}.${H}.png`}static resImg(o,i){return`${e.getBase(i)}res/${o}`}static getBase(o){return o?o===""?"/":`/${o}/`:"/"}};function d(e){return`${St(e.name)}.html`}l(d,"htmlName");function St(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").toLowerCase()}l(St,"toKebabCase");import{jsx as P,jsxs as Me}from"https://esm.sh/react@19.2.6/jsx-runtime";function Nt(){let e=Dt(),o=B(),i=l(H=>{let h=H.target.value;if(typeof window<"u"){let b=window.location.pathname;if(b.includes(e)){let me=b.replace(e,h);window.location.href=me}else if(b.includes(qe)){let me=b.split("/"),ue=me.indexOf(qe)+1;me.splice(ue,0,h);let Zt=me.join("/");window.location.href=Zt}else{let me=`/${h}${b}`;window.location.href=me}}},"onThemeChange");return P("nav",{children:Me("ul",{children:[P("li",{children:Me("a",{href:s.home(e,o),children:[Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}),P("path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})]}),P("span",{children:"Home"})]})}),P("li",{children:Me("a",{href:s.showcase(e,o),children:[Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),P("circle",{cx:"12",cy:"12",r:"3"})]}),P("span",{children:"Showcase"})]})}),P("div",{}),P("li",{className:"hide-on-desktop",children:Me("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:[Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),P("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),P("span",{children:"GitHub"})]})}),P("li",{children:Me("select",{name:"theme-selector",onChange:i,children:[P("option",{value:"default",selected:e==="default",children:"Default"}),P("option",{value:"blog",selected:e==="blog",children:"Blog"}),P("option",{value:"app",selected:e==="app",children:"App"}),P("option",{value:"delivery",selected:e==="delivery",children:"Delivery"}),P("option",{value:"landing",selected:e==="landing",children:"Landing"}),P("option",{value:"newsletter",selected:e==="newsletter",children:"Newsletter"})]})}),P("li",{className:"hide-on-mobile",children:P("a",{href:"https://github.com/gobi-tools/css-theme",target:"blank",children:P("button",{type:"reset",children:Me("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[P("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),P("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})})})})]})})}l(Nt,"TopNav");import{jsx as Tt,jsxs as no}from"https://esm.sh/react@19.2.6/jsx-runtime";function Mt({theme:e,children:o}){return no(Et,{value:e,children:[Tt("header",{children:Tt(Nt,{})}),Tt("main",{children:o})]})}l(Mt,"HomeLayout");import{jsx as n,jsxs as le}from"https://esm.sh/react@19.2.6/jsx-runtime";function m({theme:e,children:o}){let i=B(),[H,h]=Kt(!1),[b,me]=Kt(void 0);return co(()=>{if(typeof window<"u"){let ue=s.getDocFromRoute(window.location.pathname);me(ue)}},[]),n(Mt,{theme:e,children:le("div",{className:"row",children:[le("aside",{children:[le("div",{className:"hide-on-desktop",role:"group",children:[le("div",{className:"row",children:[n("div",{children:n("button",{onClick:()=>h(!H),children:H?le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M18 6 6 18"}),n("path",{d:"m6 6 12 12"})]}):le("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n("path",{d:"M7 8h10"}),n("path",{d:"M7 12h10"}),n("path",{d:"M7 16h10"})]})})}),n("span",{children:n("b",{children:"Chapters"})})]}),n("hr",{})]}),le("div",{className:H===!1||H===void 0?"hide-on-mobile":"",children:[le("menu",{children:[n("b",{children:"Basics"}),n("li",{"aria-selected":b==="typography",children:n("a",{href:s.doc("typography",e,i),children:"Typography"})}),n("li",{"aria-selected":b==="buttons",children:n("a",{href:s.doc("buttons",e,i),children:"Buttons"})}),n("li",{"aria-selected":b==="tags",children:n("a",{href:s.doc("tags",e,i),children:"Tags"})}),n("li",{"aria-selected":b==="lists",children:n("a",{href:s.doc("lists",e,i),children:"Lists"})}),n("li",{"aria-selected":b==="links",children:n("a",{href:s.doc("links",e,i),children:"Links"})}),n("li",{"aria-selected":b==="blockquotes",children:n("a",{href:s.doc("blockquotes",e,i),children:"Blokquotes"})}),n("li",{"aria-selected":b==="summary",children:n("a",{href:s.doc("summary",e,i),children:"Summary"})}),n("li",{"aria-selected":b==="code",children:n("a",{href:s.doc("code",e,i),children:"Code"})}),n("li",{"aria-selected":b==="table",children:n("a",{href:s.doc("table",e,i),children:"Table"})}),n("li",{"aria-selected":b==="figures",children:n("a",{href:s.doc("figures",e,i),children:"Figures"})}),n("li",{"aria-selected":b==="cards",children:n("a",{href:s.doc("cards",e,i),children:"Cards"})})]}),le("menu",{children:[n("b",{children:"Forms"}),n("li",{"aria-selected":b==="forms-normal",children:n("a",{href:s.doc("forms-normal",e,i),children:"Normal"})}),n("li",{"aria-selected":b==="forms-check",children:n("a",{href:s.doc("forms-check",e,i),children:"Checks & Radios"})}),n("li",{"aria-selected":b==="forms-grouped",children:n("a",{href:s.doc("forms-grouped",e,i),children:"Grouped"})}),n("li",{"aria-selected":b==="forms-disabled",children:n("a",{href:s.doc("forms-disabled",e,i),children:"Disabled"})}),n("li",{"aria-selected":b==="forms-validation",children:n("a",{href:s.doc("forms-validation",e,i),children:"Validation"})})]}),le("menu",{children:[n("b",{children:"Layout"}),n("li",{"aria-selected":b==="header",children:n("a",{href:s.doc("header",e,i),children:"Headers"})}),n("li",{"aria-selected":b==="footer",children:n("a",{href:s.doc("footer",e,i),children:"Footers"})}),n("li",{children:le("details",{open:!0,children:[n("summary",{children:"Carousel"}),le("menu",{children:[n("li",{"aria-selected":b==="carousel",children:n("a",{href:s.doc("carousel",e,i),children:"Inline"})}),n("li",{"aria-selected":b==="carousel-header",children:n("a",{href:s.doc("carousel-header",e,i),children:"Header"})})]})]})}),n("li",{"aria-selected":b==="groups",children:n("a",{href:s.doc("groups",e,i),children:"Groups"})}),n("li",{"aria-selected":b==="modal",children:n("a",{href:s.doc("modal",e,i),children:"Modal"})})]}),le("menu",{children:[n("b",{children:"Navigation"}),n("li",{"aria-selected":b==="navigation",children:n("a",{href:s.doc("navigation",e,i),children:"Basic"})}),n("li",{"aria-selected":b==="breadcrumbs",children:n("a",{href:s.doc("breadcrumbs",e,i),children:"Breadcrumbs"})}),n("li",{"aria-selected":b==="menu",children:n("a",{href:s.doc("menu",e,i),children:"Menu"})}),n("li",{"aria-selected":b==="tabs",children:n("a",{href:s.doc("tabs",e,i),children:"Tabs"})})]}),le("menu",{children:[n("b",{children:"Extra"}),n("li",{"aria-selected":b==="dark-mode",children:n("a",{href:s.doc("dark-mode",e,i),children:"Dark Mode"})}),n("li",{"aria-selected":b==="icons",children:n("a",{href:s.doc("icons",e,i),children:"Icons"})}),n("li",{"aria-selected":b==="loading",children:n("a",{href:s.doc("loading",e,i),children:"Loading"})}),n("li",{"aria-selected":b==="mobile",children:n("a",{href:s.doc("mobile",e,i),children:"Mobile"})})]}),le("menu",{children:[n("b",{children:"Custom"}),n("li",{"aria-selected":b==="grid",children:n("a",{href:s.doc("grid",e,i),children:"Grids"})}),n("li",{"aria-selected":b==="containers",children:n("a",{href:s.doc("containers",e,i),children:"Containers"})}),n("li",{"aria-selected":b==="colors",children:n("a",{href:s.doc("colors",e,i),children:"Colors"})}),n("li",{"aria-selected":b==="classes",children:n("a",{href:s.doc("classes",e,i),children:"Classes"})})]})]})]}),n("div",{children:o})]})})}l(m,"DocLayout");export{B as a,m as b,He as c,Ae as d,Oe as e,We as f,Re as g,Pe as h,ze as i,Ge as j,_e as k,Ye as l,Ve as m,Ue as n,je as o,Ke as p,Ze as q,Je as r,Xe as s,et as t,tt as u,ot as v,at as w,it as x,st as y,rt as z,lt as A,nt as B,dt as C,ct as D,pt as E,Lt as F,mt as G,ut as H,ht as I,gt as J,bt as K,s as L,Nt as M,Mt as N};
