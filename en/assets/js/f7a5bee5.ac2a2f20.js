"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5481],{50158:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>m});var r=t(7896),a=t(31461),l=(t(2784),t(30876)),o=["components"],i={tags:["Components"],type:"Feedback",title:"Alert"},s=void 0,c={unversionedId:"components/feedback/alert",id:"components/feedback/alert",isDocsHomePage:!1,title:"Alert",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/feedback/alert.md",sourceDirName:"components/feedback",slug:"/components/feedback/alert",permalink:"/tnt-next/en/docs/components/feedback/alert",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/feedback/alert.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Feedback",title:"Alert"},sidebar:"componentsSidebar",previous:{title:"Tree",permalink:"/tnt-next/en/docs/components/data-display/tree"},next:{title:"Drawer",permalink:"/tnt-next/en/docs/components/feedback/drawer"}},p=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"More types",id:"more-types",children:[],level:3},{value:"Closable",id:"closable",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Icon",id:"icon",children:[],level:3},{value:"Customized Close Text",id:"customized-close-text",children:[],level:3},{value:"Banner",id:"banner",children:[],level:3},{value:"Smoothly Unmount",id:"smoothly-unmount",children:[],level:3},{value:"Custom Icon",id:"custom-icon",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Alert component for feedback."),(0,l.kt)("h2",{id:"when-to-use"},"When To Use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When you need to show alert messages to users."),(0,l.kt)("li",{parentName:"ul"},"When you need a persistent static container which is closable by user actions.")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)("p",null,"The simplest usage for short messages."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(<Alert message="Success Text" type="success" />, mountNode);\n')),(0,l.kt)("h3",{id:"more-types"},"More types"),(0,l.kt)("p",null,"There are 4 types of Alert: ",(0,l.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"warning"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <div>\n    <Alert message="Success Text" type="success" />\n    <Alert message="Info Text" type="info" />\n    <Alert message="Warning Text" type="warning" />\n    <Alert message="Error Text" type="error" />\n  </div>,\n  mountNode,\n);\n')),(0,l.kt)("h3",{id:"closable"},"Closable"),(0,l.kt)("p",null,"To show close button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const onClose = e => {\n  console.log(e, \'I was closed.\');\n};\n\nReactDOM.render(\n  <div>\n    <Alert\n      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"\n      type="warning"\n      closable\n      onClose={onClose}\n    />\n    <Alert\n      message="Error Text"\n      description="Error Description Error Description Error Description Error Description Error Description Error Description"\n      type="error"\n      closable\n      onClose={onClose}\n    />\n  </div>,\n  mountNode,\n);\n')),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Additional description for alert message."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <div>\n    <Alert\n      message="Success Text"\n      description="Success Description Success Description Success Description"\n      type="success"\n    />\n    <Alert\n      message="Info Text"\n      description="Info Description Info Description Info Description Info Description"\n      type="info"\n    />\n    <Alert\n      message="Warning Text"\n      description="Warning Description Warning Description Warning Description Warning Description"\n      type="warning"\n    />\n    <Alert\n      message="Error Text"\n      description="Error Description Error Description Error Description Error Description"\n      type="error"\n    />\n  </div>,\n  mountNode,\n);\n')),(0,l.kt)("h3",{id:"icon"},"Icon"),(0,l.kt)("p",null,"A relevant icon will make information clearer and more friendly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <div>\n    <Alert message="Success Tips" type="success" showIcon />\n    <Alert message="Informational Notes" type="info" showIcon />\n    <Alert message="Warning" type="warning" showIcon />\n    <Alert message="Error" type="error" showIcon />\n    <Alert\n      message="Success Tips"\n      description="Detailed description and advice about successful copywriting."\n      type="success"\n      showIcon\n    />\n    <Alert\n      message="Informational Notes"\n      description="Additional description and information about copywriting."\n      type="info"\n      showIcon\n    />\n    <Alert\n      message="Warning"\n      description="This is a warning notice about copywriting."\n      type="warning"\n      showIcon\n    />\n    <Alert\n      message="Error"\n      description="This is an error message about copywriting."\n      type="error"\n      showIcon\n    />\n  </div>,\n  mountNode,\n);\n')),(0,l.kt)("h3",{id:"customized-close-text"},"Customized Close Text"),(0,l.kt)("p",null,"Replace the default icon with customized text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(<Alert message="Info Text" type="info" closeText="Close Now" />, mountNode);\n')),(0,l.kt)("h3",{id:"banner"},"Banner"),(0,l.kt)("p",null,"Display Alert as a banner at top of page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <div>\n    <Alert message="Warning text" banner />\n    <br />\n    <Alert\n      message="Very long warning text warning text text text text text text text"\n      banner\n      closable\n    />\n    <br />\n    <Alert showIcon={false} message="Warning text without icon" banner />\n    <br />\n    <Alert type="error" message="Error text" banner />\n  </div>,\n  mountNode,\n);\n')),(0,l.kt)("h3",{id:"smoothly-unmount"},"Smoothly Unmount"),(0,l.kt)("p",null,"Smoothly unmount Alert upon close."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class App extends React.Component {\n  state = {\n    visible: true,\n  };\n\n  handleClose = () => {\n    this.setState({ visible: false });\n  };\n\n  render() {\n    return (\n      <div>\n        {this.state.visible ? (\n          <Alert\n            message="Alert Message Text"\n            type="success"\n            closable\n            afterClose={this.handleClose}\n          />\n        ) : null}\n        <p>placeholder text here</p>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,l.kt)("h3",{id:"custom-icon"},"Custom Icon"),(0,l.kt)("p",null,"A relevant icon makes information clearer and more friendly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const icon = <Icon type="smile" />;\n\nReactDOM.render(\n  <div>\n    <Alert icon={icon} message="showIcon = false" type="success" />\n    <Alert icon={icon} message="Success Tips" type="success" showIcon />\n    <Alert icon={icon} message="Informational Notes" type="info" showIcon />\n    <Alert icon={icon} message="Warning" type="warning" showIcon />\n    <Alert icon={icon} message="Error" type="error" showIcon />\n    <Alert\n      icon={icon}\n      message="Success Tips"\n      description="Detailed description and advices about successful copywriting."\n      type="success"\n      showIcon\n    />\n    <Alert\n      icon={icon}\n      message="Informational Notes"\n      description="Additional description and informations about copywriting."\n      type="info"\n      showIcon\n    />\n    <Alert\n      icon={icon}\n      message="Warning"\n      description="This is a warning notice about copywriting."\n      type="warning"\n      showIcon\n    />\n    <Alert\n      icon={icon}\n      message="Error"\n      description="This is an error message about copywriting."\n      type="error"\n      showIcon\n    />\n  </div>,\n  mountNode,\n);\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when close animation is finished"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.3.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"banner"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show as banner"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closable"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether Alert can be closed"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closeText"),(0,l.kt)("td",{parentName:"tr",align:null},"Close text to show"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional content of Alert"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom icon, effective when ",(0,l.kt)("inlineCode",{parentName:"td"},"showIcon")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.10.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Content of Alert"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show icon"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false, in ",(0,l.kt)("inlineCode",{parentName:"td"},"banner")," mode default is true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of Alert styles, options: ",(0,l.kt)("inlineCode",{parentName:"td"},"success"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"info"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"warning"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info"),", in ",(0,l.kt)("inlineCode",{parentName:"td"},"banner")," mode default is ",(0,l.kt)("inlineCode",{parentName:"td"},"warning")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when Alert is closed"),(0,l.kt)("td",{parentName:"tr",align:null},"(e: MouseEvent) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);