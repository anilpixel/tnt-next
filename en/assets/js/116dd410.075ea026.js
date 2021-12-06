"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8466],{26143:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>d,toc:()=>m,default:()=>s});var a=n(7896),l=n(31461),o=(n(2784),n(30876)),r=["components"],i={tags:["Components"],type:"Data Display",title:"Tooltip"},p=void 0,d={unversionedId:"components/data-display/tooltip",id:"components/data-display/tooltip",isDocsHomePage:!1,title:"Tooltip",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-display/tooltip.md",sourceDirName:"components/data-display",slug:"/components/data-display/tooltip",permalink:"/tnt-next/en/docs/components/data-display/tooltip",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/tooltip.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Display",title:"Tooltip"},sidebar:"componentsSidebar",previous:{title:"Timeline",permalink:"/tnt-next/en/docs/components/data-display/timeline"},next:{title:"Tree",permalink:"/tnt-next/en/docs/components/data-display/tree"}},m=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Placement",id:"placement",children:[],level:3},{value:"Arrow pointing at the center",id:"arrow-pointing-at-the-center",children:[],level:3},{value:"Adjust placement automatically",id:"adjust-placement-automatically",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Common API",id:"common-api",children:[],level:3}],level:2},{value:"Note",id:"note",children:[],level:2}],u={toc:m};function s(t){var e=t.components,n=(0,l.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A simple text popup tip."),(0,o.kt)("h2",{id:"when-to-use"},"When To Use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations."),(0,o.kt)("li",{parentName:"ul"},"To provide an explanation of a ",(0,o.kt)("inlineCode",{parentName:"li"},"button/text/operation"),". It's often used instead of the html ",(0,o.kt)("inlineCode",{parentName:"li"},"title")," attribute.")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"basic"},"Basic"),(0,o.kt)("p",null,"The simplest usage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Tooltip title="prompt text">\n    <span>Tooltip will show on mouse enter.</span>\n  </Tooltip>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"placement"},"Placement"),(0,o.kt)("p",null,"There are 12 placement options available."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const text = <span>prompt text</span>;\n\nconst buttonWidth = 70;\n\nReactDOM.render(\n  <div className="demo">\n    <div style={{ marginLeft: buttonWidth, whiteSpace: \'nowrap\' }}>\n      <Tooltip placement="topLeft" title={text}>\n        <Button>TL</Button>\n      </Tooltip>\n      <Tooltip placement="top" title={text}>\n        <Button>Top</Button>\n      </Tooltip>\n      <Tooltip placement="topRight" title={text}>\n        <Button>TR</Button>\n      </Tooltip>\n    </div>\n    <div style={{ width: buttonWidth, float: \'left\' }}>\n      <Tooltip placement="leftTop" title={text}>\n        <Button>LT</Button>\n      </Tooltip>\n      <Tooltip placement="left" title={text}>\n        <Button>Left</Button>\n      </Tooltip>\n      <Tooltip placement="leftBottom" title={text}>\n        <Button>LB</Button>\n      </Tooltip>\n    </div>\n    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>\n      <Tooltip placement="rightTop" title={text}>\n        <Button>RT</Button>\n      </Tooltip>\n      <Tooltip placement="right" title={text}>\n        <Button>Right</Button>\n      </Tooltip>\n      <Tooltip placement="rightBottom" title={text}>\n        <Button>RB</Button>\n      </Tooltip>\n    </div>\n    <div style={{ marginLeft: buttonWidth, clear: \'both\', whiteSpace: \'nowrap\' }}>\n      <Tooltip placement="bottomLeft" title={text}>\n        <Button>BL</Button>\n      </Tooltip>\n      <Tooltip placement="bottom" title={text}>\n        <Button>Bottom</Button>\n      </Tooltip>\n      <Tooltip placement="bottomRight" title={text}>\n        <Button>BR</Button>\n      </Tooltip>\n    </div>\n  </div>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"arrow-pointing-at-the-center"},"Arrow pointing at the center"),(0,o.kt)("p",null,"By specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"arrowPointAtCenter")," prop, the arrow will point to the center of the target element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <div>\n    <Tooltip placement="topLeft" title="Prompt Text">\n      <Button>Align edge / \u8fb9\u7f18\u5bf9\u9f50</Button>\n    </Tooltip>\n    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>\n      <Button>Arrow points to center / \u7bad\u5934\u6307\u5411\u4e2d\u5fc3</Button>\n    </Tooltip>\n  </div>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"adjust-placement-automatically"},"Adjust placement automatically"),(0,o.kt)("p",null,"Adjust placement automatically when tooltip is invisible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const wrapStyles = {\n  overflow: 'hidden',\n  position: 'relative',\n  padding: '24px',\n  border: '1px solid #e9e9e9',\n};\n\nReactDOM.render(\n  <div style={wrapStyles}>\n    <Tooltip\n      placement=\"left\"\n      title=\"Prompt Text\"\n      getPopupContainer={trigger => trigger.parentElement}\n    >\n      <Button>Adjust automatically / \u81ea\u52a8\u8c03\u6574</Button>\n    </Tooltip>\n    <br />\n    <Tooltip\n      placement=\"left\"\n      title=\"Prompt Text\"\n      getPopupContainer={trigger => trigger.parentElement}\n      autoAdjustOverflow={false}\n    >\n      <Button>Ignore / \u4e0d\u5904\u7406</Button>\n    </Tooltip>\n  </div>,\n  mountNode,\n);\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"The text shown in the tooltip"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null},"() => ReactNode")))),(0,o.kt)("h3",{id:"common-api"},"Common API"),(0,o.kt)("p",null,"The following APIs are shared by Tooltip, Popconfirm, Popover."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arrowPointAtCenter"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the arrow is pointed at the center of target, supported after ",(0,o.kt)("inlineCode",{parentName:"td"},"antd@1.11+")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"autoAdjustOverflow"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to adjust popup placement automatically when popup is off screen"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultVisible"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the floating tooltip card is visible by default"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"getPopupContainer"),(0,o.kt)("td",{parentName:"tr",align:null},"The DOM container of the tip, the default behavior is to create a ",(0,o.kt)("inlineCode",{parentName:"td"},"div")," element in ",(0,o.kt)("inlineCode",{parentName:"td"},"body")),(0,o.kt)("td",{parentName:"tr",align:null},"Function(triggerNode)"),(0,o.kt)("td",{parentName:"tr",align:null},"() => document.body"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mouseEnterDelay"),(0,o.kt)("td",{parentName:"tr",align:null},"Delay in seconds, before tooltip is shown on mouse enter"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"0.1"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mouseLeaveDelay"),(0,o.kt)("td",{parentName:"tr",align:null},"Delay in seconds, before tooltip is hidden on mouse leave"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"0.1"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"overlayClassName"),(0,o.kt)("td",{parentName:"tr",align:null},"Class name of the tooltip card"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"overlayStyle"),(0,o.kt)("td",{parentName:"tr",align:null},"Style of the tooltip card"),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"placement"),(0,o.kt)("td",{parentName:"tr",align:null},"The position of the tooltip relative to the target, which can be one of ",(0,o.kt)("inlineCode",{parentName:"td"},"top")," ",(0,o.kt)("inlineCode",{parentName:"td"},"left")," ",(0,o.kt)("inlineCode",{parentName:"td"},"right")," ",(0,o.kt)("inlineCode",{parentName:"td"},"bottom")," ",(0,o.kt)("inlineCode",{parentName:"td"},"topLeft")," ",(0,o.kt)("inlineCode",{parentName:"td"},"topRight")," ",(0,o.kt)("inlineCode",{parentName:"td"},"bottomLeft")," ",(0,o.kt)("inlineCode",{parentName:"td"},"bottomRight")," ",(0,o.kt)("inlineCode",{parentName:"td"},"leftTop")," ",(0,o.kt)("inlineCode",{parentName:"td"},"leftBottom")," ",(0,o.kt)("inlineCode",{parentName:"td"},"rightTop")," ",(0,o.kt)("inlineCode",{parentName:"td"},"rightBottom")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"top")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"trigger"),(0,o.kt)("td",{parentName:"tr",align:null},"Tooltip trigger mode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hover")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"focus")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"click"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"visible"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the floating tooltip card is visible or not"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,o.kt)("td",{parentName:"tr",align:null},"Callback executed when visibility of the tooltip card is changed"),(0,o.kt)("td",{parentName:"tr",align:null},"(visible) => void"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"align"),(0,o.kt)("td",{parentName:"tr",align:null},"this value will be merged into placement's config, please refer to the settings ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/react-component/tooltip"},"rc-tooltip")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"3.10.0")))),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,"Please ensure that the child node of ",(0,o.kt)("inlineCode",{parentName:"p"},"Tooltip")," accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"onMouseEnter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onMouseLeave"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onFocus"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," events."))}s.isMDXComponent=!0},30876:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(2784);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(n),c=l,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||o;return n?a.createElement(k,r(r({ref:e},m),{},{components:n})):a.createElement(k,r({ref:e},m))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,r=new Array(o);r[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,r[1]=i;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);