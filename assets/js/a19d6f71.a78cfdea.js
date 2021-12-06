"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9046],{14140:(t,n,e)=>{e.r(n),e.d(n,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>o,toc:()=>g,default:()=>m});var a=e(7896),l=e(31461),r=(e(2784),e(30876)),i=["components"],p={tags:["Components"],subtitle:"\u6392\u7248",type:"\u901a\u7528",title:"Typography \u6392\u7248",cols:1},d=void 0,o={unversionedId:"components/general/typography",id:"components/general/typography",isDocsHomePage:!1,title:"Typography \u6392\u7248",description:"----",source:"@site/docs/components/general/typography.md",sourceDirName:"components/general",slug:"/components/general/typography",permalink:"/tnt-next/docs/components/general/typography",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/general/typography.md",tags:[{label:"Components",permalink:"/tnt-next/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],subtitle:"\u6392\u7248",type:"\u901a\u7528",title:"Typography \u6392\u7248",cols:1},sidebar:"componentsSidebar",previous:{title:"Icon \u56fe\u6807",permalink:"/tnt-next/docs/components/general/icon"},next:{title:"Grid \u6805\u683c",permalink:"/tnt-next/docs/components/layout/grid"}},g=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c",id:"\u57fa\u672c",children:[],level:3},{value:"\u6807\u9898\u7ec4\u4ef6",id:"\u6807\u9898\u7ec4\u4ef6",children:[],level:3},{value:"\u6587\u672c\u7ec4\u4ef6",id:"\u6587\u672c\u7ec4\u4ef6",children:[],level:3},{value:"\u53ef\u4ea4\u4e92",id:"\u53ef\u4ea4\u4e92",children:[],level:3},{value:"\u7701\u7565\u53f7",id:"\u7701\u7565\u53f7",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Typography.Text",id:"typographytext",children:[],level:3},{value:"Typography.Title",id:"typographytitle",children:[],level:3},{value:"Typography.Paragraph",id:"typographyparagraph",children:[],level:3}],level:2}],u={toc:g};function m(t){var n=t.components,e=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6587\u672c\u7684\u57fa\u672c\u683c\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u5c55\u793a\u6807\u9898\u3001\u6bb5\u843d\u3001\u5217\u8868\u5185\u5bb9\u65f6\u4f7f\u7528\uff0c\u5982\u6587\u7ae0/\u535a\u5ba2/\u65e5\u5fd7\u7684\u6587\u672c\u6837\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u4e00\u5217\u57fa\u4e8e\u6587\u672c\u7684\u57fa\u7840\u64cd\u4f5c\u65f6\uff0c\u5982\u62f7\u8d1d/\u7701\u7565/\u53ef\u7f16\u8f91\u3002")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u57fa\u672c"},"\u57fa\u672c"),(0,r.kt)("p",null,"\u5c55\u793a\u6587\u6863\u6837\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Title, Paragraph, Text } = Typography;\n\nReactDOM.render(\n  <Typography>\n    <Title>Introduction</Title>\n    <Paragraph>\n      In the process of internal desktop applications development, many different design specs and\n      implementations would be involved, which might cause designers and developers difficulties and\n      duplication and reduce the efficiency of development.\n    </Paragraph>\n    <Paragraph>\n      After massive project practice and summaries, Ant Design, a design language for background\n      applications, is refined by Ant UED Team, which aims to \n      <Text strong>\n        uniform the user interface specs for internal background projects, lower the unnecessary\n        cost of design differences and implementation and liberate the resources of design and\n        front-end development\n      </Text>\n      .\n    </Paragraph>\n    <Title level={2}>Guidelines and Resources</Title>\n    <Paragraph>\n      We supply a series of design principles, practical patterns and high quality design resources\n      (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product\n      prototypes beautifully and efficiently.\n    </Paragraph>\n\n    <Paragraph>\n      <ul>\n        <li>\n          <a href="/docs/spec/proximity">Principles</a>\n        </li>\n        <li>\n          <a href="/docs/pattern/navigation">Patterns</a>\n        </li>\n        <li>\n          <a href="/docs/resource/download">Resource Download</a>\n        </li>\n      </ul>\n    </Paragraph>\n\n    <Divider />\n\n    <Title>\u4ecb\u7ecd</Title>\n    <Paragraph>\n      \u8682\u8681\u7684\u4f01\u4e1a\u7ea7\u4ea7\u54c1\u662f\u4e00\u4e2a\u5e9e\u5927\u4e14\u590d\u6742\u7684\u4f53\u7cfb\u3002\u8fd9\u7c7b\u4ea7\u54c1\u4e0d\u4ec5\u91cf\u7ea7\u5de8\u5927\u4e14\u529f\u80fd\u590d\u6742\uff0c\u800c\u4e14\u53d8\u52a8\u548c\u5e76\u53d1\u9891\u7e41\uff0c\u5e38\u5e38\u9700\u8981\u8bbe\u8ba1\u4e0e\u5f00\u53d1\u80fd\u591f\u5feb\u901f\u7684\u505a\u51fa\u54cd\u5e94\u3002\u540c\u65f6\u8fd9\u7c7b\u4ea7\u54c1\u4e2d\u6709\u5b58\u5728\u5f88\u591a\u7c7b\u4f3c\u7684\u9875\u9762\u4ee5\u53ca\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u62bd\u8c61\u5f97\u5230\u4e00\u4e9b\u7a33\u5b9a\u4e14\u9ad8\u590d\u7528\u6027\u7684\u5185\u5bb9\u3002\n    </Paragraph>\n    <Paragraph>\n      \u968f\u7740\u5546\u4e1a\u5316\u7684\u8d8b\u52bf\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4f01\u4e1a\u7ea7\u4ea7\u54c1\u5bf9\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u6709\u4e86\u8fdb\u4e00\u6b65\u7684\u8981\u6c42\u3002\u5e26\u7740\u8fd9\u6837\u7684\u4e00\u4e2a\u7ec8\u6781\u76ee\u6807\uff0c\u6211\u4eec\uff08\u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\uff09\u7ecf\u8fc7\u5927\u91cf\u7684\u9879\u76ee\u5b9e\u8df5\u548c\u603b\u7ed3\uff0c\u9010\u6b65\u6253\u78e8\u51fa\u4e00\u4e2a\u670d\u52a1\u4e8e\u4f01\u4e1a\u7ea7\u4ea7\u54c1\u7684\u8bbe\u8ba1\u4f53\u7cfb\n      Ant Design\u3002\u57fa\u4e8e<Text mark>\u300e\u786e\u5b9a\u300f\u548c\u300e\u81ea\u7136\u300f</Text>\n      \u7684\u8bbe\u8ba1\u4ef7\u503c\u89c2\uff0c\u901a\u8fc7\u6a21\u5757\u5316\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u964d\u4f4e\u5197\u4f59\u7684\u751f\u4ea7\u6210\u672c\uff0c\u8ba9\u8bbe\u8ba1\u8005\u4e13\u6ce8\u4e8e\n      <Text strong>\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c</Text>\u3002\n    </Paragraph>\n    <Title level={2}>\u8bbe\u8ba1\u8d44\u6e90</Title>\n    <Paragraph>\n      \u6211\u4eec\u63d0\u4f9b\u5b8c\u5584\u7684\u8bbe\u8ba1\u539f\u5219\u3001\u6700\u4f73\u5b9e\u8df5\u548c\u8bbe\u8ba1\u8d44\u6e90\u6587\u4ef6\uff08<Text code>Sketch</Text> \u548c\n      <Text code>Axure</Text>\uff09\uff0c\u6765\u5e2e\u52a9\u4e1a\u52a1\u5feb\u901f\u8bbe\u8ba1\u51fa\u9ad8\u8d28\u91cf\u7684\u4ea7\u54c1\u539f\u578b\u3002\n    </Paragraph>\n\n    <Paragraph>\n      <ul>\n        <li>\n          <a href="/docs/spec/proximity">\u8bbe\u8ba1\u539f\u5219</a>\n        </li>\n        <li>\n          <a href="/docs/pattern/navigation">\u8bbe\u8ba1\u6a21\u5f0f</a>\n        </li>\n        <li>\n          <a href="/docs/resource/download">\u8bbe\u8ba1\u8d44\u6e90</a>\n        </li>\n      </ul>\n    </Paragraph>\n  </Typography>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"\u6807\u9898\u7ec4\u4ef6"},"\u6807\u9898\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5c55\u793a\u4e0d\u540c\u7ea7\u522b\u7684\u6807\u9898\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const { Title } = Typography;\n\nReactDOM.render(\n  <div>\n    <Title>h1. Ant Design</Title>\n    <Title level={2}>h2. Ant Design</Title>\n    <Title level={3}>h3. Ant Design</Title>\n    <Title level={4}>h4. Ant Design</Title>\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u6587\u672c\u7ec4\u4ef6"},"\u6587\u672c\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5185\u7f6e\u4e0d\u540c\u6837\u5f0f\u7684\u6587\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Text } = Typography;\n\nReactDOM.render(\n  <div>\n    <Text>Ant Design</Text>\n    <br />\n    <Text type="secondary">Ant Design</Text>\n    <br />\n    <Text type="warning">Ant Design</Text>\n    <br />\n    <Text type="danger">Ant Design</Text>\n    <br />\n    <Text disabled>Ant Design</Text>\n    <br />\n    <Text mark>Ant Design</Text>\n    <br />\n    <Text code>Ant Design</Text>\n    <br />\n    <Text underline>Ant Design</Text>\n    <br />\n    <Text delete>Ant Design</Text>\n    <br />\n    <Text strong>Ant Design</Text>\n  </div>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"\u53ef\u4ea4\u4e92"},"\u53ef\u4ea4\u4e92"),(0,r.kt)("p",null,"\u63d0\u4f9b\u53ef\u7f16\u8f91\u548c\u53ef\u590d\u5236\u7b49\u989d\u5916\u7684\u4ea4\u4e92\u80fd\u529b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const { Paragraph } = Typography;\n\nclass Demo extends React.Component {\n  state = {\n    str: 'This is an editable text.',\n  };\n\n  onChange = str => {\n    console.log('Content change:', str);\n    this.setState({ str });\n  };\n\n  render() {\n    return (\n      <div>\n        <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>\n        <Paragraph copyable>This is a copyable text.</Paragraph>\n        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n")),(0,r.kt)("h3",{id:"\u7701\u7565\u53f7"},"\u7701\u7565\u53f7"),(0,r.kt)("p",null,"\u591a\u884c\u6587\u672c\u7701\u7565\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const { Paragraph } = Typography;\n\nReactDOM.render(\n  <div>\n    <Paragraph ellipsis>\n      Ant Design, a design language for background applications, is refined by Ant UED Team. Ant\n      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,\n      a design language for background applications, is refined by Ant UED Team. Ant Design, a\n      design language for background applications, is refined by Ant UED Team. Ant Design, a design\n      language for background applications, is refined by Ant UED Team. Ant Design, a design\n      language for background applications, is refined by Ant UED Team.\n    </Paragraph>\n\n    <Paragraph ellipsis={{ rows: 3, expandable: true }}>\n      Ant Design, a design language for background applications, is refined by Ant UED Team. Ant\n      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,\n      a design language for background applications, is refined by Ant UED Team. Ant Design, a\n      design language for background applications, is refined by Ant UED Team. Ant Design, a design\n      language for background applications, is refined by Ant UED Team. Ant Design, a design\n      language for background applications, is refined by Ant UED Team.\n    </Paragraph>\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"typographytext"},"Typography.Text"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u62f7\u8d1d\uff0c\u4e3a\u5bf9\u8c61\u65f6\u53ef\u8bbe\u7f6e\u590d\u5236\u6587\u672c\u4ee5\u56de\u8c03\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"{ text: string, onCopy: Function }"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u5220\u9664\u7ebf\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u6587\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u7f16\u8f91\uff0c\u4e3a\u5bf9\u8c61\u65f6\u53ef\u5bf9\u7f16\u8f91\u8fdb\u884c\u63a7\u5236"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"{ editing: boolean, onStart: Function, onChange: Function(string) }"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u81ea\u52a8\u6ea2\u51fa\u7701\u7565"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mark"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6807\u8bb0\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4ee3\u7801\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"underline"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4e0b\u5212\u7ebf\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strong"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u52a0\u7c97"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secondary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"warning"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"danger")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")))),(0,r.kt)("h3",{id:"typographytitle"},"Typography.Title"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u62f7\u8d1d\uff0c\u4e3a\u5bf9\u8c61\u65f6\u53ef\u8bbe\u7f6e\u590d\u5236\u6587\u672c\u4ee5\u56de\u8c03\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"{ text: string, onCopy: Function }"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u5220\u9664\u7ebf\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u6587\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u7f16\u8f91\uff0c\u4e3a\u5bf9\u8c61\u65f6\u53ef\u5bf9\u7f16\u8f91\u8fdb\u884c\u63a7\u5236"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"{ editing: boolean, onStart: Function, onChange: Function(string) }"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u6ea2\u51fa\u7701\u7565\uff0c\u4e3a\u5bf9\u8c61\u65f6\u53ef\u8bbe\u7f6e\u7701\u7565\u884c\u6570\u4e0e\u662f\u5426\u53ef\u5c55\u5f00\u7b49"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"{ rows: number, expandable: boolean, onExpand: Function }"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"level"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91cd\u8981\u7a0b\u5ea6\uff0c\u76f8\u5f53\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"h1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"h2"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"h3"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"h4")),(0,r.kt)("td",{parentName:"tr",align:null},"number: ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"4")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mark"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6807\u8bb0\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"underline"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4e0b\u5212\u7ebf\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u7528\u6237\u63d0\u4ea4\u7f16\u8f91\u5185\u5bb9\u65f6\u89e6\u53d1"),(0,r.kt)("td",{parentName:"tr",align:null},"Function(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secondary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"warning"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"danger")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")))),(0,r.kt)("h3",{id:"typographyparagraph"},"Typography.Paragraph"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u62f7\u8d1d\uff0c\u4e3a\u5bf9\u8c61\u65f6\u53ef\u8bbe\u7f6e\u590d\u5236\u6587\u672c\u4ee5\u56de\u8c03\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"{ text: string, onCopy: Function }"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u5220\u9664\u7ebf\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u6587\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u7f16\u8f91\uff0c\u4e3a\u5bf9\u8c61\u65f6\u53ef\u5bf9\u7f16\u8f91\u8fdb\u884c\u63a7\u5236"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"{ editing: boolean, onStart: Function, onChange: Function(string) }"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u6ea2\u51fa\u7701\u7565\uff0c\u4e3a\u5bf9\u8c61\u65f6\u53ef\u8bbe\u7f6e\u7701\u7565\u884c\u6570\u4e0e\u662f\u5426\u53ef\u5c55\u5f00\u7b49"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"{ rows: number, expandable: boolean, onExpand: Function }"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mark"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6807\u8bb0\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"underline"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4e0b\u5212\u7ebf\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u7528\u6237\u63d0\u4ea4\u7f16\u8f91\u5185\u5bb9\u65f6\u89e6\u53d1"),(0,r.kt)("td",{parentName:"tr",align:null},"Function(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strong"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u52a0\u7c97"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secondary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"warning"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"danger")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.14.0")))))}m.isMDXComponent=!0},30876:(t,n,e)=>{e.d(n,{Zo:()=>g,kt:()=>s});var a=e(2784);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var d=a.createContext({}),o=function(t){var n=a.useContext(d),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},g=function(t){var n=o(t.components);return a.createElement(d.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),m=o(e),s=l,k=m["".concat(d,".").concat(s)]||m[s]||u[s]||r;return e?a.createElement(k,i(i({ref:n},g),{},{components:e})):a.createElement(k,i({ref:n},g))}));function s(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=m;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=e[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"}}]);