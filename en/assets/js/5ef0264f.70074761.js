"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6975],{16902:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>c});var a=n(7896),r=n(31461),l=(n(2784),n(30876)),o=["components"],i={tags:["Components"],type:"Data Display",title:"Carousel"},d=void 0,p={unversionedId:"components/data-display/carousel",id:"components/data-display/carousel",isDocsHomePage:!1,title:"Carousel",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-display/carousel.md",sourceDirName:"components/data-display",slug:"/components/data-display/carousel",permalink:"/tnt-next/en/docs/components/data-display/carousel",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/carousel.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Display",title:"Carousel"},sidebar:"componentsSidebar",previous:{title:"Card",permalink:"/tnt-next/en/docs/components/data-display/card"},next:{title:"Collapse",permalink:"/tnt-next/en/docs/components/data-display/collapse"}},u=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Scroll automatically",id:"scroll-automatically",children:[],level:3},{value:"Fade in",id:"fade-in",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],s={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"A carousel component. Scales with its container."),(0,l.kt)("h2",{id:"when-to-use"},"When To Use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When there is a group of content on the same level."),(0,l.kt)("li",{parentName:"ul"},"When there is insufficient content space, it can be used to save space in the form of a revolving door."),(0,l.kt)("li",{parentName:"ul"},"Commonly used for a group of pictures/cards.")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)("p",null,"Basic usage."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function onChange(a, b, c) {\n  console.log(a, b, c);\n}\n\nReactDOM.render(\n  <Carousel afterChange={onChange}>\n    <div>\n      <h3>1</h3>\n    </div>\n    <div>\n      <h3>2</h3>\n    </div>\n    <div>\n      <h3>3</h3>\n    </div>\n    <div>\n      <h3>4</h3>\n    </div>\n  </Carousel>,\n  mountNode,\n);```\n\n### Position\n\nThere are 4 position options available.\n\n```jsx live\nclass PositionCarouselDemo extends React.Component {\n  state = {\n    dotPosition: \'top\',\n  };\n\n  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });\n\n  render() {\n    const { dotPosition } = this.state;\n    return (\n      <div>\n        <Radio.Group\n          onChange={this.handlePositionChange}\n          value={dotPosition}\n          style={{ marginBottom: 8 }}\n        >\n          <Radio.Button value="top">Top</Radio.Button>\n          <Radio.Button value="bottom">Bottom</Radio.Button>\n          <Radio.Button value="left">Left</Radio.Button>\n          <Radio.Button value="right">Right</Radio.Button>\n        </Radio.Group>\n        <Carousel dotPosition={dotPosition}>\n          <div>\n            <h3>1</h3>\n          </div>\n          <div>\n            <h3>2</h3>\n          </div>\n          <div>\n            <h3>3</h3>\n          </div>\n          <div>\n            <h3>4</h3>\n          </div>\n        </Carousel>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<PositionCarouselDemo />, mountNode);\n')),(0,l.kt)("h3",{id:"scroll-automatically"},"Scroll automatically"),(0,l.kt)("p",null,"Timing of scrolling to the next card/picture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(\n  <Carousel autoplay>\n    <div>\n      <h3>1</h3>\n    </div>\n    <div>\n      <h3>2</h3>\n    </div>\n    <div>\n      <h3>3</h3>\n    </div>\n    <div>\n      <h3>4</h3>\n    </div>\n  </Carousel>,\n  mountNode,\n);\n")),(0,l.kt)("h3",{id:"fade-in"},"Fade in"),(0,l.kt)("p",null,"Slides use fade for transition."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <Carousel effect="fade">\n    <div>\n      <h3>1</h3>\n    </div>\n    <div>\n      <h3>2</h3>\n    </div>\n    <div>\n      <h3>3</h3>\n    </div>\n    <div>\n      <h3>4</h3>\n    </div>\n  </Carousel>,\n  mountNode,\n);\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback function called after the current index changes"),(0,l.kt)("td",{parentName:"tr",align:null},"function(current)"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoplay"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to scroll automatically"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback function called before the current index changes"),(0,l.kt)("td",{parentName:"tr",align:null},"function(from, to)"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dotPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"The position of the dots, which can be one of ",(0,l.kt)("inlineCode",{parentName:"td"},"top")," ",(0,l.kt)("inlineCode",{parentName:"td"},"bottom")," ",(0,l.kt)("inlineCode",{parentName:"td"},"left")," ",(0,l.kt)("inlineCode",{parentName:"td"},"right")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"3.17.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dots"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the dots at the bottom of the gallery"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"easing"),(0,l.kt)("td",{parentName:"tr",align:null},"Transition interpolation function name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"linear")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"effect"),(0,l.kt)("td",{parentName:"tr",align:null},"Transition effect"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollx")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fade")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollx"))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goTo(slideNumber, dontAnimate)"),(0,l.kt)("td",{parentName:"tr",align:null},"Go to slide index, if dontAnimate=true, it happens without animation"),(0,l.kt)("td",{parentName:"tr",align:null},"3.9.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"next()"),(0,l.kt)("td",{parentName:"tr",align:null},"Change current slide to next slide"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prev()"),(0,l.kt)("td",{parentName:"tr",align:null},"Change current slide to previous slide"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"For more info on the parameters, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/akiran/react-slick"},"https://github.com/akiran/react-slick")))}c.isMDXComponent=!0},30876:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(h,o(o({ref:e},u),{},{components:n})):a.createElement(h,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);