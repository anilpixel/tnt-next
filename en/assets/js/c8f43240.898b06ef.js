"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2448],{31794:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>m});var r=n(7896),o=n(31461),a=(n(2784),n(30876)),l=["components"],i={tags:["Components"],type:"Other",title:"BackTop"},c=void 0,p={unversionedId:"components/other/back-top",id:"components/other/back-top",isDocsHomePage:!1,title:"BackTop",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/other/back-top.md",sourceDirName:"components/other",slug:"/components/other/back-top",permalink:"/tnt-next/en/docs/components/other/back-top",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/other/back-top.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Other",title:"BackTop"},sidebar:"componentsSidebar",previous:{title:"Anchor",permalink:"/tnt-next/en/docs/components/other/anchor"},next:{title:"ConfigProvider",permalink:"/tnt-next/en/docs/components/other/config-provider"}},s=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Custom style",id:"custom-style",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BackTop")," makes it easy to go back to the top of the page."),(0,a.kt)("h2",{id:"when-to-use"},"When To Use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When the page content is very long."),(0,a.kt)("li",{parentName:"ul"},"When you need to go back to the top very frequently in order to view the contents.")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"basic"},"Basic"),(0,a.kt)("p",null,"The most basic usage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(\n  <div>\n    <BackTop />\n    Scroll down to see the bottom-right\n    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>\n    button.\n  </div>,\n  mountNode,\n);\n")),(0,a.kt)("h3",{id:"custom-style"},"Custom style"),(0,a.kt)("p",null,"You can customize the style of the button, just note the size limit: no more than ",(0,a.kt)("inlineCode",{parentName:"p"},"40px \\* 40px"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(\n  <div>\n    <BackTop>\n      <div className=\"ant-back-top-inner\">UP</div>\n    </BackTop>\n    Scroll down to see the bottom-right\n    <strong style={{ color: '#1088e9' }}> blue </strong>\n    button.\n  </div>,\n  mountNode,\n);\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The distance to the bottom is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"50px")," by default, which is overridable."),(0,a.kt)("p",{parentName:"blockquote"},"If you decide to use custom styles, please note the size limit: no more than ",(0,a.kt)("inlineCode",{parentName:"p"},"40px * 40px"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target"),(0,a.kt)("td",{parentName:"tr",align:null},"specifies the scrollable area dom node"),(0,a.kt)("td",{parentName:"tr",align:null},"() => HTMLElement"),(0,a.kt)("td",{parentName:"tr",align:null},"() => window"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"visibilityHeight"),(0,a.kt)("td",{parentName:"tr",align:null},"the ",(0,a.kt)("inlineCode",{parentName:"td"},"BackTop")," button will not show until the scroll height reaches this value"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"400"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onClick"),(0,a.kt)("td",{parentName:"tr",align:null},"a callback function, which can be executed when you click the button"),(0,a.kt)("td",{parentName:"tr",align:null},"Function"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);