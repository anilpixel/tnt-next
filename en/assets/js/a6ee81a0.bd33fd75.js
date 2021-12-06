"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2203],{57939:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>m});var a=t(7896),o=t(31461),r=(t(2784),t(30876)),l=["components"],i={tags:["Components"],type:"General",title:"Icon",toc:!1},c=void 0,p={unversionedId:"components/general/icon",id:"components/general/icon",isDocsHomePage:!1,title:"Icon",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/general/icon.md",sourceDirName:"components/general",slug:"/components/general/icon",permalink:"/tnt-next/en/docs/components/general/icon",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/general/icon.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"General",title:"Icon",toc:!1},sidebar:"componentsSidebar",previous:{title:"Button",permalink:"/tnt-next/en/docs/components/general/button"},next:{title:"Typography",permalink:"/tnt-next/en/docs/components/general/typography"}},s=[{value:"List of icons",id:"list-of-icons",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Two-tone icon and colorful icon",id:"two-tone-icon-and-colorful-icon",children:[],level:3},{value:"Custom Icon",id:"custom-icon",children:[],level:3},{value:"Use iconfont.cn",id:"use-iconfontcn",children:[],level:3},{value:"Test old icons",id:"test-old-icons",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"SVG icons",id:"svg-icons",children:[],level:3},{value:"Set TwoTone Color",id:"set-twotone-color",children:[],level:3},{value:"Custom Font Icon",id:"custom-font-icon",children:[],level:3},{value:"Custom SVG Icon",id:"custom-svg-icon",children:[],level:3}],level:2}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Semantic vector graphics."),(0,r.kt)("h2",{id:"list-of-icons"},"List of icons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-__react"},"import IconDisplay from 'site/theme/template/IconDisplay';\nReactDOM.render(<IconDisplay />, mountNode);\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("p",null,"Use tag ",(0,r.kt)("inlineCode",{parentName:"p"},"\\<Icon />")," to create an icon and set its type in the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," prop. Specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"spin")," property to show spinning animation and the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," property to switch between different themes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <div className="icons-list">\n    <Icon type="home" />\n    <Icon type="setting" theme="filled" />\n    <Icon type="smile" theme="outlined" />\n    <Icon type="sync" spin />\n    <Icon type="smile" rotate={180} />\n    <Icon type="loading" />\n  </div>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"two-tone-icon-and-colorful-icon"},"Two-tone icon and colorful icon"),(0,r.kt)("p",null,"Specify the property ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"twoTone")," to render two-tone icons. You can also set the primary color."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'ReactDOM.render(\n  <div className="icons-list">\n    <Icon type="smile" theme="twoTone" />\n    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />\n    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />\n  </div>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"custom-icon"},"Custom Icon"),(0,r.kt)("p",null,"Create a reusable React component by using ",(0,r.kt)("inlineCode",{parentName:"p"},"\\<Icon component={...} />"),". The property ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," takes a React component that renders to ",(0,r.kt)("inlineCode",{parentName:"p"},"svg")," element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},".custom-icons-list > .anticon {\n  margin-right: 6px;\n}\n")),(0,r.kt)("h3",{id:"use-iconfontcn"},"Use iconfont.cn"),(0,r.kt)("p",null,"If you are using ","[","iconfont.cn]","(",(0,r.kt)("a",{parentName:"p",href:"http://iconfont.cn/"},"http://iconfont.cn/"),"), you can use the icons in your project gracefully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const IconFont = Icon.createFromIconfontCN({\n  scriptUrl: \'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js\',\n});\n\nReactDOM.render(\n  <div className="icons-list">\n    <IconFont type="icon-tuichu" />\n    <IconFont type="icon-facebook" />\n    <IconFont type="icon-twitter" />\n  </div>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"test-old-icons"},"Test old icons"),(0,r.kt)("p",null,"Test old icons before ",(0,r.kt)("inlineCode",{parentName:"p"},"3.9.0"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const icons = [\n  'step-backward',\n  'step-forward',\n  'fast-backward',\n  'fast-forward',\n  'shrink',\n  'arrows-alt',\n  'down',\n  'up',\n  'left',\n  'right',\n  'caret-up',\n  'caret-down',\n  'caret-left',\n  'caret-right',\n  'up-circle',\n  'down-circle',\n  'left-circle',\n  'right-circle',\n  'up-circle-o',\n  'down-circle-o',\n  'right-circle-o',\n  'left-circle-o',\n  'double-right',\n  'double-left',\n  'verticle-left',\n  'verticle-right',\n  'forward',\n  'backward',\n  'rollback',\n  'enter',\n  'retweet',\n  'swap',\n  'swap-left',\n  'swap-right',\n  'arrow-up',\n  'arrow-down',\n  'arrow-left',\n  'arrow-right',\n  'play-circle',\n  'play-circle-o',\n  'up-square',\n  'down-square',\n  'left-square',\n  'right-square',\n  'up-square-o',\n  'down-square-o',\n  'left-square-o',\n  'right-square-o',\n  'login',\n  'logout',\n  'menu-fold',\n  'menu-unfold',\n  'question',\n  'question-circle-o',\n  'question-circle',\n  'plus',\n  'plus-circle-o',\n  'plus-circle',\n  'pause',\n  'pause-circle-o',\n  'pause-circle',\n  'minus',\n  'minus-circle-o',\n  'minus-circle',\n  'plus-square',\n  'plus-square-o',\n  'minus-square',\n  'minus-square-o',\n  'info',\n  'info-circle-o',\n  'info-circle',\n  'exclamation',\n  'exclamation-circle-o',\n  'exclamation-circle',\n  'close',\n  'cross',\n  'close-circle',\n  'close-circle-o',\n  'close-square',\n  'close-square-o',\n  'check',\n  'check-circle',\n  'check-circle-o',\n  'check-square',\n  'check-square-o',\n  'clock-circle-o',\n  'clock-circle',\n  'warning',\n  'lock',\n  'unlock',\n  'area-chart',\n  'pie-chart',\n  'bar-chart',\n  'dot-chart',\n  'bars',\n  'book',\n  'calendar',\n  'cloud',\n  'cloud-download',\n  'code',\n  'code-o',\n  'copy',\n  'credit-card',\n  'delete',\n  'desktop',\n  'download',\n  'edit',\n  'ellipsis',\n  'file',\n  'file-text',\n  'file-unknown',\n  'file-pdf',\n  'file-word',\n  'file-excel',\n  'file-jpg',\n  'file-ppt',\n  'file-markdown',\n  'file-add',\n  'folder',\n  'folder-open',\n  'folder-add',\n  'hdd',\n  'frown',\n  'frown-o',\n  'meh',\n  'meh-o',\n  'smile',\n  'smile-o',\n  'inbox',\n  'laptop',\n  'appstore-o',\n  'appstore',\n  'line-chart',\n  'link',\n  'mail',\n  'mobile',\n  'notification',\n  'paper-clip',\n  'picture',\n  'poweroff',\n  'reload',\n  'search',\n  'setting',\n  'share-alt',\n  'shopping-cart',\n  'tablet',\n  'tag',\n  'tag-o',\n  'tags',\n  'tags-o',\n  'to-top',\n  'upload',\n  'user',\n  'video-camera',\n  'home',\n  'loading',\n  'loading-3-quarters',\n  'cloud-upload-o',\n  'cloud-download-o',\n  'cloud-upload',\n  'cloud-o',\n  'star-o',\n  'star',\n  'heart-o',\n  'heart',\n  'environment',\n  'environment-o',\n  'eye',\n  'eye-o',\n  'camera',\n  'camera-o',\n  'save',\n  'team',\n  'solution',\n  'phone',\n  'filter',\n  'exception',\n  'export',\n  'customer-service',\n  'qrcode',\n  'scan',\n  'like',\n  'like-o',\n  'dislike',\n  'dislike-o',\n  'message',\n  'pay-circle',\n  'pay-circle-o',\n  'calculator',\n  'pushpin',\n  'pushpin-o',\n  'bulb',\n  'select',\n  'switcher',\n  'rocket',\n  'bell',\n  'disconnect',\n  'database',\n  'compass',\n  'barcode',\n  'hourglass',\n  'key',\n  'flag',\n  'layout',\n  'printer',\n  'sound',\n  'usb',\n  'skin',\n  'tool',\n  'sync',\n  'wifi',\n  'car',\n  'schedule',\n  'user-add',\n  'user-delete',\n  'usergroup-add',\n  'usergroup-delete',\n  'man',\n  'woman',\n  'shop',\n  'gift',\n  'idcard',\n  'medicine-box',\n  'red-envelope',\n  'coffee',\n  'copyright',\n  'trademark',\n  'safety',\n  'wallet',\n  'bank',\n  'trophy',\n  'contacts',\n  'global',\n  'shake',\n  'api',\n  'fork',\n  'dashboard',\n  'form',\n  'table',\n  'profile',\n  'android',\n  'android-o',\n  'apple',\n  'apple-o',\n  'windows',\n  'windows-o',\n  'ie',\n  'chrome',\n  'github',\n  'aliwangwang',\n  'aliwangwang-o',\n  'dingding',\n  'dingding-o',\n  'weibo-square',\n  'weibo-circle',\n  'taobao-circle',\n  'html5',\n  'weibo',\n  'twitter',\n  'wechat',\n  'youtube',\n  'alipay-circle',\n  'taobao',\n  'skype',\n  'qq',\n  'medium-workmark',\n  'gitlab',\n  'medium',\n  'linkedin',\n  'google-plus',\n  'dropbox',\n  'facebook',\n  'codepen',\n  'amazon',\n  'google',\n  'codepen-circle',\n  'alipay',\n  'ant-design',\n  'aliyun',\n  'zhihu',\n  'slack',\n  'slack-square',\n  'behance',\n  'behance-square',\n  'dribbble',\n  'dribbble-square',\n  'instagram',\n  'yuque',\n];\n\nReactDOM.render(\n  <div>\n    {icons.map(icon => (\n      <Icon key={icon} type={icon} />\n    ))}\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the icon"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"style"),(0,r.kt)("td",{parentName:"tr",align:null},"Style properties of icon, like ",(0,r.kt)("inlineCode",{parentName:"td"},"fontSize")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"CSSProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"theme"),(0,r.kt)("td",{parentName:"tr",align:null},"Theme variant of the icon"),(0,r.kt)("td",{parentName:"tr",align:null},"'filled'"),(0,r.kt)("td",{parentName:"tr",align:null},"'outlined'"),(0,r.kt)("td",{parentName:"tr",align:null},"'twoTone'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spin"),(0,r.kt)("td",{parentName:"tr",align:null},"Rotate icon with animation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rotate"),(0,r.kt)("td",{parentName:"tr",align:null},"Rotate by n degrees (added in 3.13.0, not working in IE9)"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.13.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"component"),(0,r.kt)("td",{parentName:"tr",align:null},"The component used for the root node. This will override the ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"type"))," property."),(0,r.kt)("td",{parentName:"tr",align:null},"ComponentType\\<CustomIconComponentProps",">"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"twoToneColor"),(0,r.kt)("td",{parentName:"tr",align:null},"Only supports the two-tone icon. Specify the primary color."),(0,r.kt)("td",{parentName:"tr",align:null},"string (hex color)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9.0")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: icon rendering priority of the Icon component is component > children > type. When props is passed, the higher priority item will work, and the lower priority item will be invalid.")),(0,r.kt)("h3",{id:"svg-icons"},"SVG icons"),(0,r.kt)("p",null,"We introduced SVG icons in version ",(0,r.kt)("inlineCode",{parentName:"p"},"3.9.0"),", replacing font icons. This has the following benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete offline usage of icons, without dependency on a CDN-hosted font icon file (No more empty square during downloading and no need to deploy icon font files locally either!)"),(0,r.kt)("li",{parentName:"ul"},"Much more display accuracy on lower-resolution screens"),(0,r.kt)("li",{parentName:"ul"},"The ability to choose icon color"),(0,r.kt)("li",{parentName:"ul"},"No need to change built-in icons with overriding styles by providing more props in component")),(0,r.kt)("p",null,"More discussion of SVG icon reference at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ant-design/ant-design/issues/10353"},"#10353"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Given the extra bundle size caused by all SVG icons imported in 3.9.0, we will provide a new API to allow developers to import icons as needed, you can track ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ant-design/ant-design/issues/12011"},"#12011")," for updates."),(0,r.kt)("p",{parentName:"blockquote"},"While you wait, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Beven91/webpack-ant-icon-loader"},"webpack plugin")," from the community to chunk the icon file.")),(0,r.kt)("p",null,"The properties ",(0,r.kt)("inlineCode",{parentName:"p"},"theme"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"twoToneColor")," were added in ",(0,r.kt)("inlineCode",{parentName:"p"},"3.9.0"),". The best practice is to pass the property ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," to every ",(0,r.kt)("inlineCode",{parentName:"p"},"<Icon />")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Icon type="star" theme="filled" />\n')),(0,r.kt)("p",null,"All the icons will render to ",(0,r.kt)("inlineCode",{parentName:"p"},"<svg>"),". You can still set ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," for size and color of icons."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Icon type=\"message\" style={{ fontSize: '16px', color: '#08c' }} theme=\"outlined\" />\n")),(0,r.kt)("h3",{id:"set-twotone-color"},"Set TwoTone Color"),(0,r.kt)("p",null,"When using the two-tone icons, you can use the static methods ",(0,r.kt)("inlineCode",{parentName:"p"},"Icon.getTwoToneColor()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Icon.setTwoToneColor(colorString)")," to specify the primary color."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"Icon.setTwoToneColor('#eb2f96');\nIcon.getTwoToneColor(); // #eb2f96\n")),(0,r.kt)("h3",{id:"custom-font-icon"},"Custom Font Icon"),(0,r.kt)("p",null,"We added a ",(0,r.kt)("inlineCode",{parentName:"p"},"createFromIconfontCN")," function to help developer use their own icons deployed at ",(0,r.kt)("a",{parentName:"p",href:"http://iconfont.cn/"},"iconfont.cn")," in a convenient way."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This method is specified for ",(0,r.kt)("a",{parentName:"p",href:"http://iconfont.cn/"},"iconfont.cn"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const MyIcon = Icon.createFromIconfontCN({\n  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // generated by iconfont.cn\n});\n\nReactDOM.render(<MyIcon type=\"icon-example\" />, mountedNode);\n")),(0,r.kt)("p",null,"It creates a component that uses SVG sprites in essence."),(0,r.kt)("p",null,"The following options are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scriptUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL generated by ",(0,r.kt)("a",{parentName:"td",href:"http://iconfont.cn/"},"iconfont.cn")," project."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extraCommonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Define extra properties to the component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ [key: string]: any }")),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9.3")))),(0,r.kt)("p",null,"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptUrl")," should be set to import the SVG sprite symbols."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15%5C&helptype=code"},"iconfont.cn documents")," to learn about how to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptUrl"),"."),(0,r.kt)("h3",{id:"custom-svg-icon"},"Custom SVG Icon"),(0,r.kt)("p",null,"You can import SVG icon as a react component by using ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@svgr/webpack"},(0,r.kt)("inlineCode",{parentName:"a"},"@svgr/webpack")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"@svgr/webpack"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/smooth-code/svgr#options"},"reference"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\n{\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  use: [\n    {\n      loader: 'babel-loader',\n    },\n    {\n      loader: '@svgr/webpack',\n      options: {\n        babel: false,\n        icon: true,\n      },\n    },\n  ],\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Icon } from 'antd';\nimport MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.\n\nReactDOM.render(<Icon component={MessageSvg} />, mountNode);\n")),(0,r.kt)("p",null,"The following properties are available for the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Readonly"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"The width of the ",(0,r.kt)("inlineCode",{parentName:"td"},"svg")," element"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"'1em'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"The height of the ",(0,r.kt)("inlineCode",{parentName:"td"},"svg")," element"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"'1em'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fill"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the color used to paint the ",(0,r.kt)("inlineCode",{parentName:"td"},"svg")," element"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"'currentColor'"),(0,r.kt)("td",{parentName:"tr",align:null},"3.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"The computed class name of the ",(0,r.kt)("inlineCode",{parentName:"td"},"svg")," element"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"style"),(0,r.kt)("td",{parentName:"tr",align:null},"The computed style of the ",(0,r.kt)("inlineCode",{parentName:"td"},"svg")," element"),(0,r.kt)("td",{parentName:"tr",align:null},"CSSProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.10.0")))))}m.isMDXComponent=!0},30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);