"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[631],{476:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>p,toc:()=>c,default:()=>d});var i=n(7896),a=n(31461),r=(n(2784),n(30876)),l=["components"],s={tags:["Components"],type:"Data Display",title:"Descriptions",cols:1},o=void 0,p={unversionedId:"components/data-display/descriptions",id:"components/data-display/descriptions",isDocsHomePage:!1,title:"Descriptions",description:"----",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-display/descriptions.md",sourceDirName:"components/data-display",slug:"/components/data-display/descriptions",permalink:"/tnt-next/en/docs/components/data-display/descriptions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/descriptions.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Display",title:"Descriptions",cols:1},sidebar:"componentsSidebar",previous:{title:"Comment",permalink:"/tnt-next/en/docs/components/data-display/comment"},next:{title:"Empty",permalink:"/tnt-next/en/docs/components/data-display/empty"}},c=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"border",id:"border",children:[],level:3},{value:"Custom size",id:"custom-size",children:[],level:3},{value:"responsive",id:"responsive",children:[],level:3},{value:"Vertical",id:"vertical",children:[],level:3},{value:"Vertical border",id:"vertical-border",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Descriptions",id:"descriptions",children:[],level:3},{value:"DescriptionItem",id:"descriptionitem",children:[],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Display multiple read-only fields in groups."),(0,r.kt)("h2",{id:"when-to-use"},"When To Use"),(0,r.kt)("p",null,"Commonly displayed on the details page."),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("p",null,"Simplest Usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Descriptions title="User Info">\n    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>\n    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>\n    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>\n    <Descriptions.Item label="Remark">empty</Descriptions.Item>\n    <Descriptions.Item label="Address">\n      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\n    </Descriptions.Item>\n  </Descriptions>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"border"},"border"),(0,r.kt)("p",null,"Descriptions with border and background color."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Descriptions title="User Info" bordered>\n    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>\n    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>\n    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>\n    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>\n    <Descriptions.Item label="Usage Time" span={2}>\n      2019-04-24 18:00:00\n    </Descriptions.Item>\n    <Descriptions.Item label="Status" span={3}>\n      <Badge status="processing" text="Running" />\n    </Descriptions.Item>\n    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>\n    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>\n    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>\n    <Descriptions.Item label="Config Info">\n      Data disk type: MongoDB\n      <br />\n      Database version: 3.4\n      <br />\n      Package: dds.mongo.mid\n      <br />\n      Storage space: 10 GB\n      <br />\n      Replication factor: 3\n      <br />\n      Region: East China 1<br />\n    </Descriptions.Item>\n  </Descriptions>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"custom-size"},"Custom size"),(0,r.kt)("p",null,"Custom sizes to fit in a variety of containers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class Demo extends React.Component {\n  state = {\n    size: \'default\',\n  };\n\n  onChange = e => {\n    console.log(\'size checked\', e.target.value);\n    this.setState({\n      size: e.target.value,\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <Radio.Group onChange={this.onChange} value={this.state.size}>\n          <Radio value="default">default</Radio>\n          <Radio value="middle">middle</Radio>\n          <Radio value="small">small</Radio>\n        </Radio.Group>\n        <br />\n        <br />\n        <Descriptions bordered title="Custom Size" size={this.state.size}>\n          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>\n          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>\n          <Descriptions.Item label="time">18:00:00</Descriptions.Item>\n          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>\n          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>\n          <Descriptions.Item label="Official">$60.00</Descriptions.Item>\n          <Descriptions.Item label="Config Info">\n            Data disk type: MongoDB\n            <br />\n            Database version: 3.4\n            <br />\n            Package: dds.mongo.mid\n            <br />\n            Storage space: 10 GB\n            <br />\n            Replication factor: 3\n            <br />\n            Region: East China 1<br />\n          </Descriptions.Item>\n        </Descriptions>\n        <br />\n        <br />\n        <Descriptions title="Custom Size" size={this.state.size}>\n          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>\n          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>\n          <Descriptions.Item label="time">18:00:00</Descriptions.Item>\n          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>\n          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>\n          <Descriptions.Item label="Official">$60.00</Descriptions.Item>\n        </Descriptions>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,r.kt)("h3",{id:"responsive"},"responsive"),(0,r.kt)("p",null,"Responsive configuration enables perfect presentation on small screen devices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const Demo = () => {\n  return (\n    <div>\n      <Descriptions\n        title="Responsive Descriptions"\n        bordered\n        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}\n      >\n        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>\n        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>\n        <Descriptions.Item label="time">18:00:00</Descriptions.Item>\n        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>\n        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>\n        <Descriptions.Item label="Official">$60.00</Descriptions.Item>\n        <Descriptions.Item label="Config Info">\n          Data disk type: MongoDB\n          <br />\n          Database version: 3.4\n          <br />\n          Package: dds.mongo.mid\n          <br />\n          Storage space: 10 GB\n          <br />\n          Replication factor: 3\n          <br />\n          Region: East China 1\n        </Descriptions.Item>\n      </Descriptions>\n    </div>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,r.kt)("h3",{id:"vertical"},"Vertical"),(0,r.kt)("p",null,"Simplest Usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Descriptions title="User Info" layout="vertical">\n    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>\n    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>\n    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>\n    <Descriptions.Item label="Address" span={2}>\n      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\n    </Descriptions.Item>\n    <Descriptions.Item label="Remark">empty</Descriptions.Item>\n  </Descriptions>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"vertical-border"},"Vertical border"),(0,r.kt)("p",null,"Descriptions with border and background color."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Descriptions title="User Info" layout="vertical" bordered>\n    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>\n    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>\n    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>\n    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>\n    <Descriptions.Item label="Usage Time" span={2}>\n      2019-04-24 18:00:00\n    </Descriptions.Item>\n    <Descriptions.Item label="Status" span={3}>\n      <Badge status="processing" text="Running" />\n    </Descriptions.Item>\n    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>\n    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>\n    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>\n    <Descriptions.Item label="Config Info">\n      Data disk type: MongoDB\n      <br />\n      Database version: 3.4\n      <br />\n      Package: dds.mongo.mid\n      <br />\n      Storage space: 10 GB\n      <br />\n      Replication factor: 3\n      <br />\n      Region: East China 1<br />\n    </Descriptions.Item>\n  </Descriptions>,\n  mountNode,\n);\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"descriptions"},"Descriptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the description list, placed at the top"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bordered"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to display the border"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"DescriptionItems")," in a row,could be a number or a object like ",(0,r.kt)("inlineCode",{parentName:"td"},"{ xs: 8, sm: 16, md: 24}"),",(Only set ",(0,r.kt)("inlineCode",{parentName:"td"},"bordered={true}")," to take effect)"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"set the size of the list. Can be set to ",(0,r.kt)("inlineCode",{parentName:"td"},"middle"),",",(0,r.kt)("inlineCode",{parentName:"td"},"small"),", or not filled"),(0,r.kt)("td",{parentName:"tr",align:null},"`default"),(0,r.kt)("td",{parentName:"tr",align:null},"middle"),(0,r.kt)("td",{parentName:"tr",align:null},"small`")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layout"),(0,r.kt)("td",{parentName:"tr",align:null},"Define description layout"),(0,r.kt)("td",{parentName:"tr",align:null},"`horizontal"),(0,r.kt)("td",{parentName:"tr",align:null},"vertical`"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"horizontal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colon"),(0,r.kt)("td",{parentName:"tr",align:null},"change default props ",(0,r.kt)("inlineCode",{parentName:"td"},"colon")," value of ",(0,r.kt)("inlineCode",{parentName:"td"},"Descriptions.Item")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"3.21.0")))),(0,r.kt)("h3",{id:"descriptionitem"},"DescriptionItem"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"description of the content"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"span"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of columns included"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The number of span Description.Item. Span={2} takes up the width of two DescriptionItems.")))}d.isMDXComponent=!0},30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,D=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(D,l(l({ref:t},c),{},{components:n})):i.createElement(D,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);