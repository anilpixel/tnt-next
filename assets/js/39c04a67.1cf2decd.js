"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6899],{83593:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>m});var a=n(7896),r=n(31461),i=(n(2784),n(30876)),l=["components"],o={tags:["Components"],subtitle:"\u56fa\u9489",type:"\u5bfc\u822a",title:"Affix \u56fa\u9489"},p=void 0,s={unversionedId:"components/navigation/affix",id:"components/navigation/affix",isDocsHomePage:!1,title:"Affix \u56fa\u9489",description:"---",source:"@site/docs/components/navigation/affix.md",sourceDirName:"components/navigation",slug:"/components/navigation/affix",permalink:"/tnt-next/docs/components/navigation/affix",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/navigation/affix.md",tags:[{label:"Components",permalink:"/tnt-next/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],subtitle:"\u56fa\u9489",type:"\u5bfc\u822a",title:"Affix \u56fa\u9489"},sidebar:"componentsSidebar",previous:{title:"Layout \u5e03\u5c40",permalink:"/tnt-next/docs/components/layout/layout"},next:{title:"Breadcrumb \u9762\u5305\u5c51",permalink:"/tnt-next/docs/components/navigation/breadcrumb"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c",id:"\u57fa\u672c",children:[],level:3},{value:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03",id:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03",children:[],level:3},{value:"\u6eda\u52a8\u5bb9\u5668",id:"\u6eda\u52a8\u5bb9\u5668",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"Affix \u4f7f\u7528 <code>target</code> \u7ed1\u5b9a\u5bb9\u5668\u65f6\uff0c\u5143\u7d20\u4f1a\u8dd1\u5230\u5bb9\u5668\u5916\u3002",id:"affix-\u4f7f\u7528-target-\u7ed1\u5b9a\u5bb9\u5668\u65f6\u5143\u7d20\u4f1a\u8dd1\u5230\u5bb9\u5668\u5916",children:[],level:3}],level:2}],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u5c06\u9875\u9762\u5143\u7d20\u9489\u5728\u53ef\u89c6\u8303\u56f4\u3002"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("p",null,"\u5f53\u5185\u5bb9\u533a\u57df\u6bd4\u8f83\u957f\uff0c\u9700\u8981\u6eda\u52a8\u9875\u9762\u65f6\uff0c\u8fd9\u90e8\u5206\u5185\u5bb9\u5bf9\u5e94\u7684\u64cd\u4f5c\u6216\u8005\u5bfc\u822a\u9700\u8981\u5728\u6eda\u52a8\u8303\u56f4\u5185\u59cb\u7ec8\u5c55\u73b0\u3002\u5e38\u7528\u4e8e\u4fa7\u8fb9\u83dc\u5355\u548c\u6309\u94ae\u7ec4\u5408\u3002"),(0,i.kt)("p",null,"\u9875\u9762\u53ef\u89c6\u8303\u56f4\u8fc7\u5c0f\u65f6\uff0c\u614e\u7528\u6b64\u529f\u80fd\u4ee5\u514d\u906e\u6321\u9875\u9762\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("h3",{id:"\u57fa\u672c"},"\u57fa\u672c"),(0,i.kt)("p",null,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class Demo extends React.Component {\n  state = {\n    top: 10,\n    bottom: 10,\n  };\n\n  render() {\n    return (\n      <div>\n        <Affix offsetTop={this.state.top}>\n          <Button\n            type="primary"\n            onClick={() => {\n              this.setState({\n                top: this.state.top + 10,\n              });\n            }}\n          >\n            Affix top\n          </Button>\n        </Affix>\n        <br />\n        <Affix offsetBottom={this.state.bottom}>\n          <Button\n            type="primary"\n            onClick={() => {\n              this.setState({\n                bottom: this.state.bottom + 10,\n              });\n            }}\n          >\n            Affix bottom\n          </Button>\n        </Affix>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,i.kt)("h3",{id:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03"},"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03"),(0,i.kt)("p",null,"\u53ef\u4ee5\u83b7\u5f97\u662f\u5426\u56fa\u5b9a\u7684\u72b6\u6001\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(\n  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>\n    <Button>120px to affix top</Button>\n  </Affix>,\n  mountNode,\n);\n")),(0,i.kt)("h3",{id:"\u6eda\u52a8\u5bb9\u5668"},"\u6eda\u52a8\u5bb9\u5668"),(0,i.kt)("p",null,"\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," \u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"Affix")," \u9700\u8981\u76d1\u542c\u5176\u6eda\u52a8\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"window"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class Demo extends React.Component {\n  render() {\n    return (\n      <div\n        className="scrollable-container"\n        ref={node => {\n          this.container = node;\n        }}\n      >\n        <div className="background">\n          <Affix target={() => this.container}>\n            <Button type="primary">Fixed at the top of container</Button>\n          </Affix>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u6210\u5458"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"offsetBottom"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8ddd\u79bb\u7a97\u53e3\u5e95\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"offsetTop"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"target"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"Affix")," \u9700\u8981\u76d1\u542c\u5176\u6eda\u52a8\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u503c\u4e3a\u4e00\u4e2a\u8fd4\u56de\u5bf9\u5e94 DOM \u5143\u7d20\u7684\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},"() => HTMLElement"),(0,i.kt)("td",{parentName:"tr",align:null},"() => window"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onChange"),(0,i.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},"Function(affixed)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),(0,i.kt)("inlineCode",{parentName:"p"},"Affix")," \u5185\u7684\u5143\u7d20\u4e0d\u8981\u4f7f\u7528\u7edd\u5bf9\u5b9a\u4f4d\uff0c\u5982\u9700\u8981\u7edd\u5bf9\u5b9a\u4f4d\u7684\u6548\u679c\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"Affix")," \u4e3a\u7edd\u5bf9\u5b9a\u4f4d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"affix-\u4f7f\u7528-target-\u7ed1\u5b9a\u5bb9\u5668\u65f6\u5143\u7d20\u4f1a\u8dd1\u5230\u5bb9\u5668\u5916"},"Affix \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h3"},"target")," \u7ed1\u5b9a\u5bb9\u5668\u65f6\uff0c\u5143\u7d20\u4f1a\u8dd1\u5230\u5bb9\u5668\u5916\u3002"),(0,i.kt)("p",null,"\u4ece\u6027\u80fd\u89d2\u5ea6\u8003\u8651\uff0c\u6211\u4eec\u53ea\u76d1\u542c\u5bb9\u5668\u6eda\u52a8\u4e8b\u4ef6\u3002\u5982\u679c\u5e0c\u671b\u4efb\u610f\u6eda\u52a8\uff0c\u4f60\u53ef\u4ee5\u5728\u7a97\u4f53\u6dfb\u52a0\u6eda\u52a8\u76d1\u542c\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/2xyj5zr85p"},"https://codesandbox.io/s/2xyj5zr85p")),(0,i.kt)("p",null,"\u76f8\u5173 issue\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ant-design/ant-design/issues/3938"},"#3938")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ant-design/ant-design/issues/5642"},"#5642")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ant-design/ant-design/issues/16120"},"#16120")))}m.isMDXComponent=!0},30876:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(f,l(l({ref:e},u),{},{components:n})):a.createElement(f,l({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);