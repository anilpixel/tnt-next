"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3378],{71995:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>u});var a=n(7896),l=n(31461),r=(n(2784),n(30876)),i=["components"],o={tags:["Components"],type:"Feedback",title:"Skeleton",cols:1},p=void 0,s={unversionedId:"components/feedback/skeleton",id:"components/feedback/skeleton",isDocsHomePage:!1,title:"Skeleton",description:"----",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/feedback/skeleton.md",sourceDirName:"components/feedback",slug:"/components/feedback/skeleton",permalink:"/tnt-next/en/docs/components/feedback/skeleton",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/feedback/skeleton.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Feedback",title:"Skeleton",cols:1},sidebar:"componentsSidebar",previous:{title:"Result",permalink:"/tnt-next/en/docs/components/feedback/result"},next:{title:"Spin",permalink:"/tnt-next/en/docs/components/feedback/spin"}},d=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Complex combination",id:"complex-combination",children:[],level:3},{value:"Active Animation",id:"active-animation",children:[],level:3},{value:"Contains sub component",id:"contains-sub-component",children:[],level:3},{value:"List",id:"list",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Skeleton",id:"skeleton",children:[],level:3},{value:"SkeletonAvatarProps",id:"skeletonavatarprops",children:[],level:3},{value:"SkeletonTitleProps",id:"skeletontitleprops",children:[],level:3},{value:"SkeletonParagraphProps",id:"skeletonparagraphprops",children:[],level:3}],level:2}],c={toc:d};function u(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet."),(0,r.kt)("h2",{id:"when-to-use"},"When To Use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a resource needs long time to load."),(0,r.kt)("li",{parentName:"ul"},"When the component contains lots of information, such as List or Card."),(0,r.kt)("li",{parentName:"ul"},"Only works when loading data for the first time."),(0,r.kt)("li",{parentName:"ul"},"Could be replaced by Spin in any situation, but can provide a better user experience.")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("p",null,"Simplest Skeleton usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(<Skeleton />, mountNode);\n")),(0,r.kt)("h3",{id:"complex-combination"},"Complex combination"),(0,r.kt)("p",null,"Complex combination with avatar and multiple paragraphs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(<Skeleton avatar paragraph={{ rows: 4 }} />, mountNode);\n")),(0,r.kt)("h3",{id:"active-animation"},"Active Animation"),(0,r.kt)("p",null,"Display active animation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(<Skeleton active />, mountNode);\n")),(0,r.kt)("h3",{id:"contains-sub-component"},"Contains sub component"),(0,r.kt)("p",null,"Skeleton contains sub component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class Demo extends React.Component {\n  state = {\n    loading: false,\n  };\n\n  showSkeleton = () => {\n    this.setState({ loading: true });\n    setTimeout(() => {\n      this.setState({ loading: false });\n    }, 3000);\n  };\n\n  render() {\n    return (\n      <div className="article">\n        <Skeleton loading={this.state.loading}>\n          <div>\n            <h4>Ant Design, a design language</h4>\n            <p>\n              We supply a series of design principles, practical patterns and high quality design\n              resources (Sketch and Axure), to help people create their product prototypes\n              beautifully and efficiently.\n            </p>\n          </div>\n        </Skeleton>\n        <Button onClick={this.showSkeleton} disabled={this.state.loading}>\n          Show Skeleton\n        </Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"Use skeleton in list component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const listData = [];\nfor (let i = 0; i < 3; i++) {\n  listData.push({\n    href: \'http://ant.design\',\n    title: `ant design part ${i}`,\n    avatar: \'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\',\n    description:\n      \'Ant Design, a design language for background applications, is refined by Ant UED Team.\',\n    content:\n      \'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\',\n  });\n}\n\nconst IconText = ({ type, text }) => (\n  <span>\n    <Icon type={type} style={{ marginRight: 8 }} />\n    {text}\n  </span>\n);\n\nclass App extends React.Component {\n  state = {\n    loading: true,\n  };\n\n  onChange = checked => {\n    this.setState({ loading: !checked });\n  };\n\n  render() {\n    const { loading } = this.state;\n\n    return (\n      <div>\n        <Switch checked={!loading} onChange={this.onChange} />\n\n        <List\n          itemLayout="vertical"\n          size="large"\n          dataSource={listData}\n          renderItem={item => (\n            <List.Item\n              key={item.title}\n              actions={\n                !loading && [\n                  <IconText type="star-o" text="156" key="skeleton-star-o" />,\n                  <IconText type="like-o" text="156" key="skeleton-like-o" />,\n                  <IconText type="message" text="2" key="skeleton-message" />,\n                ]\n              }\n              extra={\n                !loading && (\n                  <img\n                    width={272}\n                    alt="logo"\n                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"\n                  />\n                )\n              }\n            >\n              <Skeleton loading={loading} active avatar>\n                <List.Item.Meta\n                  avatar={<Avatar src={item.avatar} />}\n                  title={<a href={item.href}>{item.title}</a>}\n                  description={item.description}\n                />\n                {item.content}\n              </Skeleton>\n            </List.Item>\n          )}\n        />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"skeleton"},"Skeleton"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active"),(0,r.kt)("td",{parentName:"tr",align:null},"Show animation effect"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"Show avatar placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#SkeletonAvatarProps"},"SkeletonAvatarProps")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"Display the skeleton when ",(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paragraph"),(0,r.kt)("td",{parentName:"tr",align:null},"Show paragraph placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#SkeletonParagraphProps"},"SkeletonParagraphProps")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Show title placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#SkeletonTitleProps"},"SkeletonTitleProps")),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"skeletonavatarprops"},"SkeletonAvatarProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the size of avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Enum{ 'large', 'small', 'default' }"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shape"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the shape of avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"Enum{ 'circle', 'square' }"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9.0")))),(0,r.kt)("h3",{id:"skeletontitleprops"},"SkeletonTitleProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the width of title"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"skeletonparagraphprops"},"SkeletonParagraphProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rows"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the row count of paragraph"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Array\\<number")))))}u.isMDXComponent=!0},30876:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(2784);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);