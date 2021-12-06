"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4434],{95093:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>v});var o=n(7896),r=n(31461),i=(n(2784),n(30876)),l=["components"],a={tags:["Components"],type:"Data Display",title:"Popover"},p=void 0,c={unversionedId:"components/data-display/popover",id:"components/data-display/popover",isDocsHomePage:!1,title:"Popover",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-display/popover.md",sourceDirName:"components/data-display",slug:"/components/data-display/popover",permalink:"/tnt-next/en/docs/components/data-display/popover",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/popover.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Display",title:"Popover"},sidebar:"componentsSidebar",previous:{title:"List",permalink:"/tnt-next/en/docs/components/data-display/list"},next:{title:"Statistic",permalink:"/tnt-next/en/docs/components/data-display/statistic"}},s=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Three ways to trigger",id:"three-ways-to-trigger",children:[],level:3},{value:"Placement",id:"placement",children:[],level:3},{value:"Controlling the close of the dialog",id:"controlling-the-close-of-the-dialog",children:[],level:3},{value:"Arrow pointing",id:"arrow-pointing",children:[],level:3},{value:"Hover with click popover",id:"hover-with-click-popover",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2},{value:"Note",id:"note",children:[],level:2}],d={toc:s};function v(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The floating card popped by clicking or hovering."),(0,i.kt)("h2",{id:"when-to-use"},"When To Use"),(0,i.kt)("p",null,"A simple popup menu to provide extra information or operations."),(0,i.kt)("p",null,"Comparing with ",(0,i.kt)("inlineCode",{parentName:"p"},"Tooltip"),", besides information ",(0,i.kt)("inlineCode",{parentName:"p"},"Popover")," card can also provide action elements like links and buttons."),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("h3",{id:"basic"},"Basic"),(0,i.kt)("p",null,"The most basic example. The size of the floating layer depends on the contents region."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const content = (\n  <div>\n    <p>Content</p>\n    <p>Content</p>\n  </div>\n);\n\nReactDOM.render(\n  <Popover content={content} title="Title">\n    <Button type="primary">Hover me</Button>\n  </Popover>,\n  mountNode,\n);\n')),(0,i.kt)("h3",{id:"three-ways-to-trigger"},"Three ways to trigger"),(0,i.kt)("p",null,"Mouse to click, focus and move in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const content = (\n  <div>\n    <p>Content</p>\n    <p>Content</p>\n  </div>\n);\n\nReactDOM.render(\n  <div>\n    <Popover content={content} title="Title" trigger="hover">\n      <Button>Hover me</Button>\n    </Popover>\n    <Popover content={content} title="Title" trigger="focus">\n      <Button>Focus me</Button>\n    </Popover>\n    <Popover content={content} title="Title" trigger="click">\n      <Button>Click me</Button>\n    </Popover>\n  </div>,\n  mountNode,\n);\n')),(0,i.kt)("h3",{id:"placement"},"Placement"),(0,i.kt)("p",null,"There are 12 ",(0,i.kt)("inlineCode",{parentName:"p"},"placement")," options available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const text = <span>Title</span>;\nconst content = (\n  <div>\n    <p>Content</p>\n    <p>Content</p>\n  </div>\n);\n\nconst buttonWidth = 70;\n\nReactDOM.render(\n  <div className="demo">\n    <div style={{ marginLeft: buttonWidth, whiteSpace: \'nowrap\' }}>\n      <Popover placement="topLeft" title={text} content={content} trigger="click">\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="top" title={text} content={content} trigger="click">\n        <Button>Top</Button>\n      </Popover>\n      <Popover placement="topRight" title={text} content={content} trigger="click">\n        <Button>TR</Button>\n      </Popover>\n    </div>\n    <div style={{ width: buttonWidth, float: \'left\' }}>\n      <Popover placement="leftTop" title={text} content={content} trigger="click">\n        <Button>LT</Button>\n      </Popover>\n      <Popover placement="left" title={text} content={content} trigger="click">\n        <Button>Left</Button>\n      </Popover>\n      <Popover placement="leftBottom" title={text} content={content} trigger="click">\n        <Button>LB</Button>\n      </Popover>\n    </div>\n    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>\n      <Popover placement="rightTop" title={text} content={content} trigger="click">\n        <Button>RT</Button>\n      </Popover>\n      <Popover placement="right" title={text} content={content} trigger="click">\n        <Button>Right</Button>\n      </Popover>\n      <Popover placement="rightBottom" title={text} content={content} trigger="click">\n        <Button>RB</Button>\n      </Popover>\n    </div>\n    <div style={{ marginLeft: buttonWidth, clear: \'both\', whiteSpace: \'nowrap\' }}>\n      <Popover placement="bottomLeft" title={text} content={content} trigger="click">\n        <Button>BL</Button>\n      </Popover>\n      <Popover placement="bottom" title={text} content={content} trigger="click">\n        <Button>Bottom</Button>\n      </Popover>\n      <Popover placement="bottomRight" title={text} content={content} trigger="click">\n        <Button>BR</Button>\n      </Popover>\n    </div>\n  </div>,\n  mountNode,\n);\n')),(0,i.kt)("h3",{id:"controlling-the-close-of-the-dialog"},"Controlling the close of the dialog"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," prop to control the display of the card."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class App extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  hide = () => {\n    this.setState({\n      visible: false,\n    });\n  };\n\n  handleVisibleChange = visible => {\n    this.setState({ visible });\n  };\n\n  render() {\n    return (\n      <Popover\n        content={<a onClick={this.hide}>Close</a>}\n        title="Title"\n        trigger="click"\n        visible={this.state.visible}\n        onVisibleChange={this.handleVisibleChange}\n      >\n        <Button type="primary">Click me</Button>\n      </Popover>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,i.kt)("h3",{id:"arrow-pointing"},"Arrow pointing"),(0,i.kt)("p",null,"The arrow points to the center of the target element, which set ",(0,i.kt)("inlineCode",{parentName:"p"},"arrowPointAtCenter"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const text = <span>Title</span>;\nconst content = (\n  <div>\n    <p>Content</p>\n    <p>Content</p>\n  </div>\n);\n\nReactDOM.render(\n  <div>\n    <Popover placement="topLeft" title={text} content={content}>\n      <Button>Align edge / \u8fb9\u7f18\u5bf9\u9f50</Button>\n    </Popover>\n    <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>\n      <Button>Arrow points to center / \u7bad\u5934\u6307\u5411\u4e2d\u5fc3</Button>\n    </Popover>\n  </div>,\n  mountNode,\n);\n')),(0,i.kt)("h3",{id:"hover-with-click-popover"},"Hover with click popover"),(0,i.kt)("p",null,"The following example shows how to create a popover which can be hovered and clicked."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class App extends React.Component {\n  state = {\n    clicked: false,\n    hovered: false,\n  };\n\n  hide = () => {\n    this.setState({\n      clicked: false,\n      hovered: false,\n    });\n  };\n\n  handleHoverChange = visible => {\n    this.setState({\n      hovered: visible,\n      clicked: false,\n    });\n  };\n\n  handleClickChange = visible => {\n    this.setState({\n      clicked: visible,\n      hovered: false,\n    });\n  };\n\n  render() {\n    const hoverContent = <div>This is hover content.</div>;\n    const clickContent = <div>This is click content.</div>;\n    return (\n      <Popover\n        style={{ width: 500 }}\n        content={hoverContent}\n        title="Hover title"\n        trigger="hover"\n        visible={this.state.hovered}\n        onVisibleChange={this.handleHoverChange}\n      >\n        <Popover\n          content={\n            <div>\n              {clickContent}\n              <a onClick={this.hide}>Close</a>\n            </div>\n          }\n          title="Click title"\n          trigger="click"\n          visible={this.state.clicked}\n          onVisibleChange={this.handleClickChange}\n        >\n          <Button>Hover and click / \u60ac\u505c\u5e76\u5355\u51fb</Button>\n        </Popover>\n      </Popover>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"content"),(0,i.kt)("td",{parentName:"tr",align:null},"Content of the card"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"Title of the card"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("p",null,"Consult ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/tooltip/#API"},"Tooltip's documentation")," to find more APIs."),(0,i.kt)("h2",{id:"note"},"Note"),(0,i.kt)("p",null,"Please ensure that the child node of ",(0,i.kt)("inlineCode",{parentName:"p"},"Popover")," accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseEnter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseLeave"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onFocus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," events."))}v.isMDXComponent=!0},30876:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var o=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),c=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return o.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},v=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),v=c(n),u=r,m=v["".concat(p,".").concat(u)]||v[u]||d[u]||i;return n?o.createElement(m,l(l({ref:e},s),{},{components:n})):o.createElement(m,l({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=v;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);