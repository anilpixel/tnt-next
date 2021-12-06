"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[193],{64857:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(7896),a=n(31461),o=(n(2784),n(30876)),i=["components"],l={tags:["Components"],type:"Navigation",title:"Breadcrumb"},m=void 0,p={unversionedId:"components/navigation/breadcrumb",id:"components/navigation/breadcrumb",isDocsHomePage:!1,title:"Breadcrumb",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/navigation/breadcrumb.md",sourceDirName:"components/navigation",slug:"/components/navigation/breadcrumb",permalink:"/tnt-next/en/docs/components/navigation/breadcrumb",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/navigation/breadcrumb.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Navigation",title:"Breadcrumb"},sidebar:"componentsSidebar",previous:{title:"Affix",permalink:"/tnt-next/en/docs/components/navigation/affix"},next:{title:"Dropdown",permalink:"/tnt-next/en/docs/components/navigation/dropdown"}},u=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic Usage",id:"basic-usage",children:[],level:3},{value:"With an Icon",id:"with-an-icon",children:[],level:3},{value:"React Router Integration",id:"react-router-integration",children:[],level:3},{value:"Other Router Integration",id:"other-router-integration",children:[],level:3},{value:"Configuring the Separator",id:"configuring-the-separator",children:[],level:3},{value:"Bread crumbs with drop down menu",id:"bread-crumbs-with-drop-down-menu",children:[],level:3},{value:"Configuring the Separator",id:"configuring-the-separator-1",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Use with browserHistory",id:"use-with-browserhistory",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."),(0,o.kt)("h2",{id:"when-to-use"},"When To Use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the system has more than two layers in a hierarchy."),(0,o.kt)("li",{parentName:"ul"},"When you need to inform the user of where they are."),(0,o.kt)("li",{parentName:"ul"},"When the user may need to navigate back to a higher level."),(0,o.kt)("li",{parentName:"ul"},"When the application has multi-layer architecture.")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"The simplest use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Breadcrumb>\n    <Breadcrumb.Item>Home</Breadcrumb.Item>\n    <Breadcrumb.Item>\n      <a href="">Application Center</a>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item>\n      <a href="">Application List</a>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item>An Application</Breadcrumb.Item>\n  </Breadcrumb>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"with-an-icon"},"With an Icon"),(0,o.kt)("p",null,"The icon should be placed in front of the text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Breadcrumb>\n    <Breadcrumb.Item href="">\n      <Icon type="home" />\n    </Breadcrumb.Item>\n    <Breadcrumb.Item href="">\n      <Icon type="user" />\n      <span>Application List</span>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item>Application</Breadcrumb.Item>\n  </Breadcrumb>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"react-router-integration"},"React Router Integration"),(0,o.kt)("p",null,"Used together with ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router@2")," ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router@3"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Router, Route, Link, hashHistory } from \'react-router\';\nimport { Breadcrumb, Alert } from \'antd\';\n\nconst Apps = () => (\n  <ul className="app-list">\n    <li>\n      <Link to="/apps/1">Application1</Link>\uff1a<Link to="/apps/1/detail">Detail</Link>\n    </li>\n    <li>\n      <Link to="/apps/2">Application2</Link>\uff1a<Link to="/apps/2/detail">Detail</Link>\n    </li>\n  </ul>\n);\n\nconst Home = ({ routes, params, children }) => (\n  <div className="demo">\n    <div className="demo-nav">\n      <Link to="/">Home</Link>\n      <Link to="/apps">Application List</Link>\n    </div>\n    {children || \'Home Page\'}\n    <Alert style={{ margin: \'16px 0\' }} message="Click the navigation above to switch:" />\n    <Breadcrumb routes={routes} params={params} />\n  </div>\n);\n\nReactDOM.render(\n  <Router history={hashHistory}>\n    <Route name="home" breadcrumbName="Home" path="/" component={Home}>\n      <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>\n        <Route name="app" breadcrumbName="Application:id" path=":id">\n          <Route name="detail" breadcrumbName="Detail" path="detail" />\n        </Route>\n      </Route>\n    </Route>\n  </Router>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"other-router-integration"},"Other Router Integration"),(0,o.kt)("p",null,"Used together with ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router@4")," or other router."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Router, Route, Link, hashHistory } from \'react-router\';\nimport { Breadcrumb, Alert } from \'antd\';\n\nconst Apps = () => (\n  <ul className="app-list">\n    <li>\n      <Link to="/apps/1">Application1</Link>\uff1a<Link to="/apps/1/detail">Detail</Link>\n    </li>\n    <li>\n      <Link to="/apps/2">Application2</Link>\uff1a<Link to="/apps/2/detail">Detail</Link>\n    </li>\n  </ul>\n);\n\nconst Home = ({ routes, params, children }) => (\n  <div className="demo">\n    <div className="demo-nav">\n      <Link to="/">Home</Link>\n      <Link to="/apps">Application List</Link>\n    </div>\n    {children || \'Home Page\'}\n    <Alert style={{ margin: \'16px 0\' }} message="Click the navigation above to switch:" />\n    <Breadcrumb routes={routes} params={params} />\n  </div>\n);\n\nReactDOM.render(\n  <Router history={hashHistory}>\n    <Route name="home" breadcrumbName="Home" path="/" component={Home}>\n      <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>\n        <Route name="app" breadcrumbName="Application:id" path=":id">\n          <Route name="detail" breadcrumbName="Detail" path="detail" />\n        </Route>\n      </Route>\n    </Route>\n  </Router>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"configuring-the-separator"},"Configuring the Separator"),(0,o.kt)("p",null,'The separator can be customized by setting the separator property: separator=">"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Breadcrumb separator=">">\n    <Breadcrumb.Item>Home</Breadcrumb.Item>\n    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>\n    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>\n    <Breadcrumb.Item>An Application</Breadcrumb.Item>\n  </Breadcrumb>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"bread-crumbs-with-drop-down-menu"},"Bread crumbs with drop down menu"),(0,o.kt)("p",null,"Breadcrumbs support drop down menu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const menu = (\n  <Menu>\n    <Menu.Item>\n      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">\n        General\n      </a>\n    </Menu.Item>\n    <Menu.Item>\n      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">\n        Layout\n      </a>\n    </Menu.Item>\n    <Menu.Item>\n      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">\n        Navigation\n      </a>\n    </Menu.Item>\n  </Menu>\n);\n\nReactDOM.render(\n  <Breadcrumb>\n    <Breadcrumb.Item>Ant Design</Breadcrumb.Item>\n    <Breadcrumb.Item>\n      <a href="">Component</a>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item overlay={menu}>\n      <a href="">General</a>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item>Button</Breadcrumb.Item>\n  </Breadcrumb>,\n  mountNode,\n);\n')),(0,o.kt)("h3",{id:"configuring-the-separator-1"},"Configuring the Separator"),(0,o.kt)("p",null,"The separator can be customized by setting the separator property: ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb.Separator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Breadcrumb separator="">\n    <Breadcrumb.Item>Location</Breadcrumb.Item>\n    <Breadcrumb.Separator>:</Breadcrumb.Separator>\n    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>\n    <Breadcrumb.Separator />\n    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>\n    <Breadcrumb.Separator />\n    <Breadcrumb.Item>An Application</Breadcrumb.Item>\n  </Breadcrumb>,\n  mountNode,\n);\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"itemRender"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom item renderer"),(0,o.kt)("td",{parentName:"tr",align:null},"(route, params, routes, paths) => ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"Routing parameters"),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"routes"),(0,o.kt)("td",{parentName:"tr",align:null},"The routing stack information of router"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#routes"},"routes","[","]")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"separator"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom separator"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/"))))),(0,o.kt)("h3",{id:"use-with-browserhistory"},"Use with browserHistory"),(0,o.kt)("p",null,"The link of Breadcrumb item targets ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," by default, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"itemRender")," to make a ",(0,o.kt)("inlineCode",{parentName:"p"},"browserHistory")," Link."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Link } from 'react-router';\n\nconst routes = [\n  {\n    path: 'index',\n    breadcrumbName: 'home',\n  },\n  {\n    path: 'first',\n    breadcrumbName: 'first',\n    children: [\n      {\n        path: '/general',\n        breadcrumbName: 'General',\n      },\n      {\n        path: '/layout',\n        breadcrumbName: 'Layout',\n      },\n      {\n        path: '/navigation',\n        breadcrumbName: 'Navigation',\n      },\n    ],\n  },\n  {\n    path: 'second',\n    breadcrumbName: 'second',\n  },\n];\nfunction itemRender(route, params, routes, paths) {\n  const last = routes.indexOf(route) === routes.length - 1;\n  return last ? (\n    <span>{route.breadcrumbName}</span>\n  ) : (\n    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>\n  );\n}\n\nreturn <Breadcrumb itemRender={itemRender} routes={routes} />;\n")))}d.isMDXComponent=!0},30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,b=d["".concat(m,".").concat(s)]||d[s]||c[s]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);