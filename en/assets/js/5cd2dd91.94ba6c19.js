"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4485],{2487:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>m,default:()=>d});var a=n(7896),r=n(31461),i=(n(2784),n(30876)),l=["components"],o={tags:["Components"],type:"Data Display",title:"Empty",cols:1},s=void 0,p={unversionedId:"components/data-display/empty",id:"components/data-display/empty",isDocsHomePage:!1,title:"Empty",description:"--",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-display/empty.md",sourceDirName:"components/data-display",slug:"/components/data-display/empty",permalink:"/tnt-next/en/docs/components/data-display/empty",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/empty.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Display",title:"Empty",cols:1},sidebar:"componentsSidebar",previous:{title:"Descriptions",permalink:"/tnt-next/en/docs/components/data-display/descriptions"},next:{title:"List",permalink:"/tnt-next/en/docs/components/data-display/list"}},m=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Chose image",id:"chose-image",children:[],level:3},{value:"Customize",id:"customize",children:[],level:3},{value:"ConfigProvider",id:"configprovider",children:[],level:3},{value:"No description",id:"no-description",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2},{value:"Built-in images",id:"built-in-images",children:[],level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"--"),(0,i.kt)("p",null,"Empty state placeholder."),(0,i.kt)("h2",{id:"when-to-use"},"When To Use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When there is no data provided, display for friendly tips."),(0,i.kt)("li",{parentName:"ul"},"User tutorial to create something in fresh new situation.")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("h3",{id:"basic"},"Basic"),(0,i.kt)("p",null,"Simplest Usage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(<Empty />, mountNode);\n")),(0,i.kt)("h3",{id:"chose-image"},"Chose image"),(0,i.kt)("p",null,"You can choose another style of ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," by setting image to ",(0,i.kt)("inlineCode",{parentName:"p"},"Empty.PRESENTED\\_IMAGE\\_SIMPLE"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(\n  <Empty image={Illustration.PRESENTED_IMAGE_SIMPLE} />,\n  mountNode\n);\n")),(0,i.kt)("h3",{id:"customize"},"Customize"),(0,i.kt)("p",null,"Customize image source, image size, description and extra content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Empty\n    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"\n    imageStyle={{\n      height: 60,\n    }}\n    description={\n      <span>\n        Customize <a href="#API">Description</a>\n      </span>\n    }\n  >\n    <Button type="primary">Create Now</Button>\n  </Empty>,\n  mountNode\n);\n')),(0,i.kt)("h3",{id:"configprovider"},"ConfigProvider"),(0,i.kt)("p",null,"Use ConfigProvider set global Empty style."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const customizeRenderEmpty = () => (\n  <div style={{ textAlign: 'center' }}>\n    <Icon type=\"smile\" style={{ fontSize: 20 }} />\n    <p>Data Not Found</p>\n  </div>\n);\n\nconst style = { width: 200 };\n\nclass Demo extends React.Component {\n  state = {\n    customize: false,\n  };\n\n  render() {\n    const { customize } = this.state;\n    return (\n      <div>\n        <Switch\n          unCheckedChildren=\"default\"\n          checkedChildren=\"customize\"\n          checked={customize}\n          onChange={(val) => {\n            this.setState({ customize: val });\n          }}\n        />\n\n        <Divider />\n\n        <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>\n          <div className=\"config-provider\">\n            <h3>Select</h3>\n            <Select style={style} />\n\n            <h3>TreeSelect</h3>\n            <TreeSelect style={style} treeData={[]} />\n\n            <h3>Cascader</h3>\n            <Cascader style={style} options={[]} showSearch />\n\n            <h3>Transfer</h3>\n            <Transfer />\n\n            <h3>Table</h3>\n            <Table\n              style={{ marginTop: 8 }}\n              columns={[\n                {\n                  title: 'Name',\n                  dataIndex: 'name',\n                  key: 'name',\n                },\n                {\n                  title: 'Age',\n                  dataIndex: 'age',\n                  key: 'age',\n                },\n              ]}\n            />\n\n            <h3>List</h3>\n            <List />\n          </div>\n        </ConfigProvider>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n")),(0,i.kt)("h3",{id:"no-description"},"No description"),(0,i.kt)("p",null,"Simplest Usage with no description."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(<Empty description={false} />, mountNode);\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Empty>\n  <Button>Create</Button>\n</Empty>\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"description"),(0,i.kt)("td",{parentName:"tr",align:null},"Customize description"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"3.12.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"imageStyle"),(0,i.kt)("td",{parentName:"tr",align:null},"style of image"),(0,i.kt)("td",{parentName:"tr",align:null},"CSSProperties"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"3.16.0"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"image"),(0,i.kt)("td",{parentName:"tr",align:null},"Customize image. Will tread as image url when string provided."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Empty.PRESENTED_IMAGE_DEFAULT")),(0,i.kt)("td",{parentName:"tr",align:null},"3.12.0")))),(0,i.kt)("h2",{id:"built-in-images"},"Built-in images"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Empty.PRESENTED_IMAGE_SIMPLE"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png",height:"35px"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Empty.PRESENTED_IMAGE_DEFAULT"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png",height:"100px"}))))}d.isMDXComponent=!0},30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);