"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3835],{86496:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>s});var a=n(7896),r=n(31461),l=(n(2784),n(30876)),o=["components"],i={tags:["Components"],type:"\u6570\u636e\u5c55\u793a",title:"Carousel \u8d70\u9a6c\u706f"},d=void 0,p={unversionedId:"components/data-display/carousel",id:"components/data-display/carousel",isDocsHomePage:!1,title:"Carousel \u8d70\u9a6c\u706f",description:"---",source:"@site/docs/components/data-display/carousel.md",sourceDirName:"components/data-display",slug:"/components/data-display/carousel",permalink:"/tnt-next/docs/components/data-display/carousel",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/carousel.md",tags:[{label:"Components",permalink:"/tnt-next/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"\u6570\u636e\u5c55\u793a",title:"Carousel \u8d70\u9a6c\u706f"},sidebar:"componentsSidebar",previous:{title:"Card \u5361\u7247",permalink:"/tnt-next/docs/components/data-display/card"},next:{title:"Collapse \u6298\u53e0\u9762\u677f",permalink:"/tnt-next/docs/components/data-display/collapse"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c",id:"\u57fa\u672c",children:[],level:3},{value:"\u4f4d\u7f6e",id:"\u4f4d\u7f6e",children:[],level:3},{value:"\u81ea\u52a8\u5207\u6362",id:"\u81ea\u52a8\u5207\u6362",children:[],level:3},{value:"\u6e10\u663e",id:"\u6e10\u663e",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[],level:2}],m={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u65cb\u8f6c\u6728\u9a6c\uff0c\u4e00\u7ec4\u8f6e\u64ad\u7684\u533a\u57df\u3002"),(0,l.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6709\u4e00\u7ec4\u5e73\u7ea7\u7684\u5185\u5bb9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5185\u5bb9\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u53ef\u4ee5\u7528\u8d70\u9a6c\u706f\u7684\u5f62\u5f0f\u8fdb\u884c\u6536\u7eb3\uff0c\u8fdb\u884c\u8f6e\u64ad\u5c55\u73b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u7528\u4e8e\u4e00\u7ec4\u56fe\u7247\u6216\u5361\u7247\u8f6e\u64ad\u3002")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u57fa\u672c"},"\u57fa\u672c"),(0,l.kt)("p",null,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function onChange(a, b, c) {\n  console.log(a, b, c);\n}\n\nReactDOM.render(\n  <Carousel afterChange={onChange}>\n    <div>\n      <h3>1</h3>\n    </div>\n    <div>\n      <h3>2</h3>\n    </div>\n    <div>\n      <h3>3</h3>\n    </div>\n    <div>\n      <h3>4</h3>\n    </div>\n  </Carousel>,\n  mountNode,\n);\n")),(0,l.kt)("h3",{id:"\u4f4d\u7f6e"},"\u4f4d\u7f6e"),(0,l.kt)("p",null,"\u4f4d\u7f6e\u6709 4 \u4e2a\u65b9\u5411\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class PositionCarouselDemo extends React.Component {\n  state = {\n    dotPosition: \'top\',\n  };\n\n  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });\n\n  render() {\n    const { dotPosition } = this.state;\n    return (\n      <div>\n        <Radio.Group\n          onChange={this.handlePositionChange}\n          value={dotPosition}\n          style={{ marginBottom: 8 }}\n        >\n          <Radio.Button value="top">Top</Radio.Button>\n          <Radio.Button value="bottom">Bottom</Radio.Button>\n          <Radio.Button value="left">Left</Radio.Button>\n          <Radio.Button value="right">Right</Radio.Button>\n        </Radio.Group>\n        <Carousel dotPosition={dotPosition}>\n          <div>\n            <h3>1</h3>\n          </div>\n          <div>\n            <h3>2</h3>\n          </div>\n          <div>\n            <h3>3</h3>\n          </div>\n          <div>\n            <h3>4</h3>\n          </div>\n        </Carousel>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<PositionCarouselDemo />, mountNode);\n')),(0,l.kt)("h3",{id:"\u81ea\u52a8\u5207\u6362"},"\u81ea\u52a8\u5207\u6362"),(0,l.kt)("p",null,"\u5b9a\u65f6\u5207\u6362\u4e0b\u4e00\u5f20\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(\n  <Carousel autoplay>\n    <div>\n      <h3>1</h3>\n    </div>\n    <div>\n      <h3>2</h3>\n    </div>\n    <div>\n      <h3>3</h3>\n    </div>\n    <div>\n      <h3>4</h3>\n    </div>\n  </Carousel>,\n  mountNode,\n);\n")),(0,l.kt)("h3",{id:"\u6e10\u663e"},"\u6e10\u663e"),(0,l.kt)("p",null,"\u5207\u6362\u6548\u679c\u4e3a\u6e10\u663e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Carousel effect="fade">\n    <div>\n      <h3>1</h3>\n    </div>\n    <div>\n      <h3>2</h3>\n    </div>\n    <div>\n      <h3>3</h3>\n    </div>\n    <div>\n      <h3>4</h3>\n    </div>\n  </Carousel>,\n  mountNode,\n);\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterChange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"function(current)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoplay"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u5207\u6362"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeChange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"function(from, to)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dotPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9762\u677f\u6307\u793a\u70b9\u4f4d\u7f6e\uff0c\u53ef\u9009 ",(0,l.kt)("inlineCode",{parentName:"td"},"top")," ",(0,l.kt)("inlineCode",{parentName:"td"},"bottom")," ",(0,l.kt)("inlineCode",{parentName:"td"},"left")," ",(0,l.kt)("inlineCode",{parentName:"td"},"right")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"3.17.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dots"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u9762\u677f\u6307\u793a\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"easing"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u753b\u6548\u679c"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"linear"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"effect"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u753b\u6548\u679c\u51fd\u6570\uff0c\u53ef\u53d6 scrollx, fade"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"scrollx"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goTo(slideNumber, dontAnimate)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5207\u6362\u5230\u6307\u5b9a\u9762\u677f, dontAnimate = true \u65f6\uff0c\u4e0d\u4f7f\u7528\u52a8\u753b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"next()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5207\u6362\u5230\u4e0b\u4e00\u9762\u677f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prev()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5207\u6362\u5230\u4e0a\u4e00\u9762\u677f")))),(0,l.kt)("p",null,"\u66f4\u591a\u53c2\u6570\u53ef\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/akiran/react-slick"},"https://github.com/akiran/react-slick")))}s.isMDXComponent=!0},30876:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);