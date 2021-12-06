"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3458],{90176:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>m,metadata:()=>s,toc:()=>p,default:()=>c});var i=n(7896),l=n(31461),a=(n(2784),n(30876)),r=["components"],o={tags:["Components"],type:"Data Display",title:"Timeline"},m=void 0,s={unversionedId:"components/data-display/timeline",id:"components/data-display/timeline",isDocsHomePage:!1,title:"Timeline",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-display/timeline.md",sourceDirName:"components/data-display",slug:"/components/data-display/timeline",permalink:"/tnt-next/en/docs/components/data-display/timeline",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/timeline.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Display",title:"Timeline"},sidebar:"componentsSidebar",previous:{title:"Tag",permalink:"/tnt-next/en/docs/components/data-display/tag"},next:{title:"Tooltip",permalink:"/tnt-next/en/docs/components/data-display/tooltip"}},p=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Color",id:"color",children:[],level:3},{value:"Last node and Reversing",id:"last-node-and-reversing",children:[],level:3},{value:"Alternate",id:"alternate",children:[],level:3},{value:"Custom",id:"custom",children:[],level:3},{value:"Right alternate",id:"right-alternate",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Timeline",id:"timeline",children:[],level:3},{value:"Timeline.Item",id:"timelineitem",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Vertical display timeline."),(0,a.kt)("h2",{id:"when-to-use"},"When To Use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When a series of information needs to be ordered by time (ascending or descending)."),(0,a.kt)("li",{parentName:"ul"},"When you need a timeline to make a visual connection.")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"basic"},"Basic"),(0,a.kt)("p",null,"Basic timeline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(\n  <Timeline>\n    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\n    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n  </Timeline>,\n  mountNode,\n);\n")),(0,a.kt)("h3",{id:"color"},"Color"),(0,a.kt)("p",null,"Set the color of circles. ",(0,a.kt)("inlineCode",{parentName:"p"},"green")," means completed or success status, ",(0,a.kt)("inlineCode",{parentName:"p"},"red")," means warning or error, and ",(0,a.kt)("inlineCode",{parentName:"p"},"blue")," means ongoing or other default status, ",(0,a.kt)("inlineCode",{parentName:"p"},"gray")," for unfinished or disabled status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Timeline>\n    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>\n    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>\n    <Timeline.Item color="red">\n      <p>Solve initial network problems 1</p>\n      <p>Solve initial network problems 2</p>\n      <p>Solve initial network problems 3 2015-09-01</p>\n    </Timeline.Item>\n    <Timeline.Item>\n      <p>Technical testing 1</p>\n      <p>Technical testing 2</p>\n      <p>Technical testing 3 2015-09-01</p>\n    </Timeline.Item>\n    <Timeline.Item color="gray">\n      <p>Technical testing 1</p>\n      <p>Technical testing 2</p>\n      <p>Technical testing 3 2015-09-01</p>\n    </Timeline.Item>\n    <Timeline.Item color="gray">\n      <p>Technical testing 1</p>\n      <p>Technical testing 2</p>\n      <p>Technical testing 3 2015-09-01</p>\n    </Timeline.Item>\n  </Timeline>,\n  mountNode,\n);\n')),(0,a.kt)("h3",{id:"last-node-and-reversing"},"Last node and Reversing"),(0,a.kt)("p",null,"When the timeline is incomplete and ongoing, put a ghost node at last. Set ",(0,a.kt)("inlineCode",{parentName:"p"},"pending")," as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, ",(0,a.kt)("inlineCode",{parentName:"p"},"pendingDot={a React Element}")," is used to customize the dot of the pending item. ",(0,a.kt)("inlineCode",{parentName:"p"},"reverse={true}")," is used for reversing nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class PendingTimeLine extends React.Component {\n  state = {\n    reverse: false,\n  };\n\n  handleClick = () => {\n    this.setState({ reverse: !this.state.reverse });\n  };\n\n  render() {\n    return (\n      <div>\n        <Timeline pending="Recording..." reverse={this.state.reverse}>\n          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\n        </Timeline>\n        <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>\n          Toggle Reverse\n        </Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<PendingTimeLine />, mountNode);\n')),(0,a.kt)("h3",{id:"alternate"},"Alternate"),(0,a.kt)("p",null,"Alternate timeline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Timeline mode="alternate">\n    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>\n    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: \'16px\' }} />}>\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n      beatae vitae dicta sunt explicabo.\n    </Timeline.Item>\n    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>\n    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: \'16px\' }} />}>\n      Technical testing 2015-09-01\n    </Timeline.Item>\n  </Timeline>,\n  mountNode,\n);\n')),(0,a.kt)("h3",{id:"custom"},"Custom"),(0,a.kt)("p",null,"Set a node as an icon or other custom element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Timeline>\n    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: \'16px\' }} />} color="red">\n      Technical testing 2015-09-01\n    </Timeline.Item>\n    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n  </Timeline>,\n  mountNode,\n);\n')),(0,a.kt)("h3",{id:"right-alternate"},"Right alternate"),(0,a.kt)("p",null,"Right alternate timeline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Timeline mode="right">\n    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: \'16px\' }} />} color="red">\n      Technical testing 2015-09-01\n    </Timeline.Item>\n    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n  </Timeline>,\n  mountNode,\n);\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Timeline>\n  <Timeline.Item>step1 2015-09-01</Timeline.Item>\n  <Timeline.Item>step2 2015-09-01</Timeline.Item>\n  <Timeline.Item>step3 2015-09-01</Timeline.Item>\n  <Timeline.Item>step4 2015-09-01</Timeline.Item>\n</Timeline>\n")),(0,a.kt)("h3",{id:"timeline"},"Timeline"),(0,a.kt)("p",null,"Timeline"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pending"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the last ghost node's existence or its content"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"ReactNode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pendingDot"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the dot of the last ghost node when pending is true"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'<Icon type="loading" />'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"reverse nodes or not"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"3.5.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode"),(0,a.kt)("td",{parentName:"tr",align:null},"By sending ",(0,a.kt)("inlineCode",{parentName:"td"},"alternate")," the timeline will distribute the nodes to the left and right."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"left")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"alternate")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"right"))))),(0,a.kt)("h3",{id:"timelineitem"},"Timeline.Item"),(0,a.kt)("p",null,"Node of timeline"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"color"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the circle's color to ",(0,a.kt)("inlineCode",{parentName:"td"},"blue"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"red"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"green"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"gray")," or other custom colors"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"blue")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dot"),(0,a.kt)("td",{parentName:"tr",align:null},"Customize timeline dot"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"position"),(0,a.kt)("td",{parentName:"tr",align:null},"Customize node position"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"left")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"right")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))))}c.isMDXComponent=!0},30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=l,g=c["".concat(m,".").concat(u)]||c[u]||d[u]||a;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);