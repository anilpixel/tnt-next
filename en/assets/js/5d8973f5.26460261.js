"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9668],{76830:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>p,toc:()=>s,default:()=>u});var a=t(7896),l=t(31461),r=(t(2784),t(30876)),o=["components"],i={tags:["Components"],type:"Data Display",title:"Collapse",cols:1},d=void 0,p={unversionedId:"components/data-display/collapse",id:"components/data-display/collapse",isDocsHomePage:!1,title:"Collapse",description:"----",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-display/collapse.md",sourceDirName:"components/data-display",slug:"/components/data-display/collapse",permalink:"/tnt-next/en/docs/components/data-display/collapse",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/collapse.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Display",title:"Collapse",cols:1},sidebar:"componentsSidebar",previous:{title:"Carousel",permalink:"/tnt-next/en/docs/components/data-display/carousel"},next:{title:"Comment",permalink:"/tnt-next/en/docs/components/data-display/comment"}},s=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Collapse",id:"collapse",children:[],level:3},{value:"Accordion",id:"accordion",children:[],level:3},{value:"Nested panel",id:"nested-panel",children:[],level:3},{value:"Borderless",id:"borderless",children:[],level:3},{value:"Custom Panel",id:"custom-panel",children:[],level:3},{value:"No arrow",id:"no-arrow",children:[],level:3},{value:"Extra node",id:"extra-node",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Collapse",id:"collapse-1",children:[],level:3},{value:"Collapse.Panel",id:"collapsepanel",children:[],level:3}],level:2}],c={toc:s};function u(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A content area which can be collapsed and expanded."),(0,r.kt)("h2",{id:"when-to-use"},"When To Use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can be used to group or hide complex regions to keep the page clean."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Accordion")," is a special kind of ",(0,r.kt)("inlineCode",{parentName:"li"},"Collapse"),", which allows only one panel to be expanded at a time.")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"collapse"},"Collapse"),(0,r.kt)("p",null,"By default, any number of panels can be expanded at a time. The first panel is expanded in this example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Panel } = Collapse;\n\nfunction callback(key) {\n  console.log(key);\n}\n\nconst text = `\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`;\n\nReactDOM.render(\n  <Collapse defaultActiveKey={[\'1\']} onChange={callback}>\n    <Panel header="This is panel header 1" key="1">\n      <p>{text}</p>\n    </Panel>\n    <Panel header="This is panel header 2" key="2">\n      <p>{text}</p>\n    </Panel>\n    <Panel header="This is panel header 3" key="3" disabled>\n      <p>{text}</p>\n    </Panel>\n  </Collapse>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"accordion"},"Accordion"),(0,r.kt)("p",null,"In accordion mode, only one panel can be expanded at a time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Panel } = Collapse;\n\nconst text = `\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`;\n\nReactDOM.render(\n  <Collapse accordion>\n    <Panel header="This is panel header 1" key="1">\n      <p>{text}</p>\n    </Panel>\n    <Panel header="This is panel header 2" key="2">\n      <p>{text}</p>\n    </Panel>\n    <Panel header="This is panel header 3" key="3">\n      <p>{text}</p>\n    </Panel>\n  </Collapse>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"nested-panel"},"Nested panel"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Collapse")," is nested inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Collapse"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Panel } = Collapse;\n\nfunction callback(key) {\n  console.log(key);\n}\n\nconst text = `\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`;\n\nReactDOM.render(\n  <Collapse onChange={callback}>\n    <Panel header="This is panel header 1" key="1">\n      <Collapse defaultActiveKey="1">\n        <Panel header="This is panel nest panel" key="1">\n          <p>{text}</p>\n        </Panel>\n      </Collapse>\n    </Panel>\n    <Panel header="This is panel header 2" key="2">\n      <p>{text}</p>\n    </Panel>\n    <Panel header="This is panel header 3" key="3">\n      <p>{text}</p>\n    </Panel>\n  </Collapse>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"borderless"},"Borderless"),(0,r.kt)("p",null,"A borderless style of Collapse."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Panel } = Collapse;\n\nconst text = (\n  <p style={{ paddingLeft: 24 }}>\n    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found\n    as a welcome guest in many households across the world.\n  </p>\n);\n\nReactDOM.render(\n  <Collapse bordered={false} defaultActiveKey={[\'1\']}>\n    <Panel header="This is panel header 1" key="1">\n      {text}\n    </Panel>\n    <Panel header="This is panel header 2" key="2">\n      {text}\n    </Panel>\n    <Panel header="This is panel header 3" key="3">\n      {text}\n    </Panel>\n  </Collapse>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"custom-panel"},"Custom Panel"),(0,r.kt)("p",null,"Customize the background, border, margin styles and icon for each panel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Panel } = Collapse;\n\nconst text = `\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`;\n\nconst customPanelStyle = {\n  background: \'#f7f7f7\',\n  borderRadius: 4,\n  marginBottom: 24,\n  border: 0,\n  overflow: \'hidden\',\n};\n\nReactDOM.render(\n  <Collapse\n    bordered={false}\n    defaultActiveKey={[\'1\']}\n    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}\n  >\n    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>\n      <p>{text}</p>\n    </Panel>\n    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>\n      <p>{text}</p>\n    </Panel>\n    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>\n      <p>{text}</p>\n    </Panel>\n  </Collapse>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"no-arrow"},"No arrow"),(0,r.kt)("p",null,"You can hide the arrow icon by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"showArrow={false}")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"CollapsePanel")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Panel } = Collapse;\n\nfunction callback(key) {\n  console.log(key);\n}\n\nconst text = `\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`;\n\nReactDOM.render(\n  <Collapse defaultActiveKey={[\'1\']} onChange={callback}>\n    <Panel header="This is panel header with arrow icon" key="1">\n      <p>{text}</p>\n    </Panel>\n    <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">\n      <p>{text}</p>\n    </Panel>\n  </Collapse>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"extra-node"},"Extra node"),(0,r.kt)("p",null,"More than one panel can be expanded at a time, the first panel is initialized to be active in this case."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Panel } = Collapse;\nconst { Option } = Select;\n\nfunction callback(key) {\n  console.log(key);\n}\n\nconst text = `\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`;\n\nconst genExtra = () => (\n  <Icon\n    type="setting"\n    onClick={event => {\n      // If you don\'t want click extra trigger collapse, you can prevent this:\n      event.stopPropagation();\n    }}\n  />\n);\n\nclass Demo extends React.Component {\n  state = {\n    expandIconPosition: \'left\',\n  };\n\n  onPositionChange = expandIconPosition => {\n    this.setState({ expandIconPosition });\n  };\n\n  render() {\n    const { expandIconPosition } = this.state;\n    return (\n      <div>\n        <Collapse\n          defaultActiveKey={[\'1\']}\n          onChange={callback}\n          expandIconPosition={expandIconPosition}\n        >\n          <Panel header="This is panel header 1" key="1" extra={genExtra()}>\n            <div>{text}</div>\n          </Panel>\n          <Panel header="This is panel header 2" key="2" extra={genExtra()}>\n            <div>{text}</div>\n          </Panel>\n          <Panel header="This is panel header 3" key="3" extra={genExtra()}>\n            <div>{text}</div>\n          </Panel>\n        </Collapse>\n        <br />\n        <span>Expand Icon Position: </span>\n        <Select value={expandIconPosition} onChange={this.onPositionChange}>\n          <Option value="left">left</Option>\n          <Option value="right">right</Option>\n        </Select>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"collapse-1"},"Collapse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"activeKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Key of the active panel"),(0,r.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"number","[","]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultActiveKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Key of the initial active panel"),(0,r.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"number","[","]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bordered"),(0,r.kt)("td",{parentName:"tr",align:null},"Toggles rendering of the border around the collapse block"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accordion"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Collapse")," renders as ",(0,r.kt)("inlineCode",{parentName:"td"},"Accordion")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback function executed when active panel is changed"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expandIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"allow to customize collapse icon"),(0,r.kt)("td",{parentName:"tr",align:null},"(panelProps) => ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.13.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expandIconPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"Set expand icon position: ",(0,r.kt)("inlineCode",{parentName:"td"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"right")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"left")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.17.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"destroyInactivePanel"),(0,r.kt)("td",{parentName:"tr",align:null},"Destroy Inactive Panel"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.5")))),(0,r.kt)("h3",{id:"collapsepanel"},"Collapse.Panel"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", panel cannot be opened or closed"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceRender"),(0,r.kt)("td",{parentName:"tr",align:null},"Forced render of content on panel, instead of lazy rending after clicking on header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"3.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"Title of the panel"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique key identifying the panel from among its siblings"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showArrow"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", panel will not show arrow icon"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"3.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extra"),(0,r.kt)("td",{parentName:"tr",align:null},"extra element in the corner"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")))))}u.isMDXComponent=!0},30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(2784);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);