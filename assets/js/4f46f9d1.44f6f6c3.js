"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2806],{64444:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>o,metadata:()=>p,toc:()=>u,default:()=>s});var a=t(7896),l=t(31461),r=(t(2784),t(30876)),i=["components"],d={tags:["Components"],subtitle:"\u6ed1\u52a8\u8f93\u5165\u6761",type:"\u6570\u636e\u5f55\u5165",title:"Slider \u6ed1\u52a8\u8f93\u5165\u6761"},o=void 0,p={unversionedId:"components/data-entry/slider",id:"components/data-entry/slider",isDocsHomePage:!1,title:"Slider \u6ed1\u52a8\u8f93\u5165\u6761",description:"---",source:"@site/docs/components/data-entry/slider.md",sourceDirName:"components/data-entry",slug:"/components/data-entry/slider",permalink:"/tnt-next/docs/components/data-entry/slider",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-entry/slider.md",tags:[{label:"Components",permalink:"/tnt-next/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],subtitle:"\u6ed1\u52a8\u8f93\u5165\u6761",type:"\u6570\u636e\u5f55\u5165",title:"Slider \u6ed1\u52a8\u8f93\u5165\u6761"},sidebar:"componentsSidebar",previous:{title:"Select \u9009\u62e9\u5668",permalink:"/tnt-next/docs/components/data-entry/select"},next:{title:"Switch \u5f00\u5173",permalink:"/tnt-next/docs/components/data-entry/switch"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c",id:"\u57fa\u672c",children:[],level:3},{value:"\u5e26\u8f93\u5165\u6846\u7684\u6ed1\u5757",id:"\u5e26\u8f93\u5165\u6846\u7684\u6ed1\u5757",children:[],level:3},{value:"\u5e26 icon \u7684\u6ed1\u5757",id:"\u5e26-icon-\u7684\u6ed1\u5757",children:[],level:3},{value:"\u81ea\u5b9a\u4e49\u63d0\u793a",id:"\u81ea\u5b9a\u4e49\u63d0\u793a",children:[],level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",children:[],level:3},{value:"\u5e26\u6807\u7b7e\u7684\u6ed1\u5757",id:"\u5e26\u6807\u7b7e\u7684\u6ed1\u5757",children:[],level:3},{value:"\u5782\u76f4",id:"\u5782\u76f4",children:[],level:3},{value:"\u63a7\u5236 ToolTip \u7684\u663e\u793a",id:"\u63a7\u5236-tooltip-\u7684\u663e\u793a",children:[],level:3},{value:"\u53cd\u5411",id:"\u53cd\u5411",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[],level:2}],m={toc:u};function s(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6ed1\u52a8\u578b\u8f93\u5165\u5668\uff0c\u5c55\u793a\u5f53\u524d\u503c\u548c\u53ef\u9009\u8303\u56f4\u3002"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u9700\u8981\u5728\u6570\u503c\u533a\u95f4/\u81ea\u5b9a\u4e49\u533a\u95f4\u5185\u8fdb\u884c\u9009\u62e9\u65f6\uff0c\u53ef\u4e3a\u8fde\u7eed\u6216\u79bb\u6563\u503c\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u57fa\u672c"},"\u57fa\u672c"),(0,r.kt)("p",null,"\u57fa\u672c\u6ed1\u52a8\u6761\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u6e32\u67d3\u4e3a\u53cc\u6ed1\u5757\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u6ed1\u5757\u5904\u4e8e\u4e0d\u53ef\u7528\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class Demo extends React.Component {\n  state = {\n    disabled: false,\n  };\n\n  handleDisabledChange = disabled => {\n    this.setState({ disabled });\n  };\n\n  render() {\n    const { disabled } = this.state;\n    return (\n      <div>\n        <Slider defaultValue={30} disabled={disabled} />\n        <Slider range defaultValue={[20, 50]} disabled={disabled} />\n        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,r.kt)("h3",{id:"\u5e26\u8f93\u5165\u6846\u7684\u6ed1\u5757"},"\u5e26\u8f93\u5165\u6846\u7684\u6ed1\u5757"),(0,r.kt)("p",null,"\u548c ","[","\u6570\u5b57\u8f93\u5165\u6846]","(","/components/input-number/) \u7ec4\u4ef6\u4fdd\u6301\u540c\u6b65\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class IntegerStep extends React.Component {\n  state = {\n    inputValue: 1,\n  };\n\n  onChange = value => {\n    this.setState({\n      inputValue: value,\n    });\n  };\n\n  render() {\n    const { inputValue } = this.state;\n    return (\n      <Row>\n        <Col span={12}>\n          <Slider\n            min={1}\n            max={20}\n            onChange={this.onChange}\n            value={typeof inputValue === 'number' ? inputValue : 0}\n          />\n        </Col>\n        <Col span={4}>\n          <InputNumber\n            min={1}\n            max={20}\n            style={{ marginLeft: 16 }}\n            value={inputValue}\n            onChange={this.onChange}\n          />\n        </Col>\n      </Row>\n    );\n  }\n}\n\nclass DecimalStep extends React.Component {\n  state = {\n    inputValue: 0,\n  };\n\n  onChange = value => {\n    if (isNaN(value)) {\n      return;\n    }\n    this.setState({\n      inputValue: value,\n    });\n  };\n\n  render() {\n    const { inputValue } = this.state;\n    return (\n      <Row>\n        <Col span={12}>\n          <Slider\n            min={0}\n            max={1}\n            onChange={this.onChange}\n            value={typeof inputValue === 'number' ? inputValue : 0}\n            step={0.01}\n          />\n        </Col>\n        <Col span={4}>\n          <InputNumber\n            min={0}\n            max={1}\n            style={{ marginLeft: 16 }}\n            step={0.01}\n            value={inputValue}\n            onChange={this.onChange}\n          />\n        </Col>\n      </Row>\n    );\n  }\n}\n\nReactDOM.render(\n  <div>\n    <IntegerStep />\n    <DecimalStep />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u5e26-icon-\u7684\u6ed1\u5757"},"\u5e26 icon \u7684\u6ed1\u5757"),(0,r.kt)("p",null,"\u6ed1\u5757\u5de6\u53f3\u53ef\u4ee5\u8bbe\u7f6e\u56fe\u6807\u6765\u8868\u8fbe\u4e1a\u52a1\u542b\u4e49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class IconSlider extends React.Component {\n  state = {\n    value: 0,\n  };\n\n  handleChange = value => {\n    this.setState({ value });\n  };\n\n  render() {\n    const { max, min } = this.props;\n    const { value } = this.state;\n    const mid = ((max - min) / 2).toFixed(5);\n    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';\n    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';\n    return (\n      <div className=\"icon-wrapper\">\n        <Icon style={{ color: preColor }} type=\"frown-o\" />\n        <Slider {...this.props} onChange={this.handleChange} value={value} />\n        <Icon style={{ color: nextColor }} type=\"smile-o\" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<IconSlider min={0} max={20} />, mountNode);\n")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u63d0\u793a"},"\u81ea\u5b9a\u4e49\u63d0\u793a"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"tipFormatter")," \u53ef\u4ee5\u683c\u5f0f\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tooltip")," \u7684\u5185\u5bb9\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"tipFormatter={null}"),"\uff0c\u5219\u9690\u85cf ",(0,r.kt)("inlineCode",{parentName:"p"},"Tooltip"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function formatter(value) {\n  return `${value}%`;\n}\n\nReactDOM.render(\n  <div>\n    <Slider tipFormatter={formatter} />\n    <Slider tipFormatter={null} />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5f53 Slider \u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," \u4e8b\u4ef6\uff0c\u5e76\u628a\u6539\u53d8\u540e\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"onmouseup")," \u65f6\uff0c\u4f1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"onAfterChange")," \u4e8b\u4ef6\uff0c\u5e76\u628a\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function onChange(value) {\n  console.log('onChange: ', value);\n}\n\nfunction onAfterChange(value) {\n  console.log('onAfterChange: ', value);\n}\n\nReactDOM.render(\n  <div>\n    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />\n    <Slider\n      range\n      step={10}\n      defaultValue={[20, 50]}\n      onChange={onChange}\n      onAfterChange={onAfterChange}\n    />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u5e26\u6807\u7b7e\u7684\u6ed1\u5757"},"\u5e26\u6807\u7b7e\u7684\u6ed1\u5757"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"marks")," \u5c5e\u6027\u6807\u6ce8\u5206\u6bb5\u5f0f\u6ed1\u5757\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," \u6307\u5b9a\u6ed1\u5757\u4f4d\u7f6e\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"included=false")," \u65f6\uff0c\u8868\u660e\u4e0d\u540c\u6807\u8bb0\u95f4\u4e3a\u5e76\u5217\u5173\u7cfb\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"step=null")," \u65f6\uff0cSlider \u7684\u53ef\u9009\u503c\u4ec5\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"marks")," \u6807\u51fa\u6765\u7684\u90e8\u5206\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const marks = {\n  0: '0\xb0C',\n  26: '26\xb0C',\n  37: '37\xb0C',\n  100: {\n    style: {\n      color: '#f50',\n    },\n    label: <strong>100\xb0C</strong>,\n  },\n};\n\nReactDOM.render(\n  <div>\n    <h4>included=true</h4>\n    <Slider marks={marks} defaultValue={37} />\n    <Slider range marks={marks} defaultValue={[26, 37]} />\n\n    <h4>included=false</h4>\n    <Slider marks={marks} included={false} defaultValue={37} />\n\n    <h4>marks & step</h4>\n    <Slider marks={marks} step={10} defaultValue={37} />\n\n    <h4>step=null</h4>\n    <Slider marks={marks} step={null} defaultValue={37} />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u5782\u76f4"},"\u5782\u76f4"),(0,r.kt)("p",null,"\u5782\u76f4\u65b9\u5411\u7684 Slider\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const style = {\n  display: 'inline-block',\n  height: 300,\n  marginLeft: 70,\n};\n\nconst marks = {\n  0: '0\xb0C',\n  26: '26\xb0C',\n  37: '37\xb0C',\n  100: {\n    style: {\n      color: '#f50',\n    },\n    label: <strong>100\xb0C</strong>,\n  },\n};\n\nReactDOM.render(\n  <div>\n    <div style={style}>\n      <Slider vertical defaultValue={30} />\n    </div>\n    <div style={style}>\n      <Slider vertical range step={10} defaultValue={[20, 50]} />\n    </div>\n    <div style={style}>\n      <Slider vertical range marks={marks} defaultValue={[26, 37]} />\n    </div>\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u63a7\u5236-tooltip-\u7684\u663e\u793a"},"\u63a7\u5236 ToolTip \u7684\u663e\u793a"),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"tooltipVisible")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5c06\u59cb\u7ec8\u663e\u793a ToolTip\uff1b\u53cd\u4e4b\u5219\u59cb\u7ec8\u4e0d\u663e\u793a\uff0c\u5373\u4f7f\u5728\u62d6\u52a8\u3001\u79fb\u5165\u65f6\u4e5f\u662f\u5982\u6b64\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(<Slider defaultValue={30} tooltipVisible />, mountNode);\n")),(0,r.kt)("h3",{id:"\u53cd\u5411"},"\u53cd\u5411"),(0,r.kt)("p",null,"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"reverse")," \u53ef\u4ee5\u5c06\u6ed1\u52a8\u6761\u7f6e\u53cd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class Demo extends React.Component {\n  state = {\n    reverse: true,\n  };\n\n  handleReverseChange = reverse => {\n    this.setState({ reverse });\n  };\n\n  render() {\n    const { reverse } = this.state;\n    return (\n      <div>\n        <Slider defaultValue={30} reverse={reverse} />\n        <Slider range defaultValue={[20, 50]} reverse={reverse} />\n        Reversed: <Switch size="small" checked={reverse} onChange={this.handleReverseChange} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowClear"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u6e05\u9664, \u5355\u9009\u6a21\u5f0f\u6709\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u521d\u59cb\u53d6\u503c\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"range")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),"\uff0c\u5426\u5219\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"[number, number]")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"number","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"0 or ","[","0, 0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u6ed1\u5757\u4e3a\u7981\u7528\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dots"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ea\u80fd\u62d6\u62fd\u5230\u523b\u5ea6\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"included"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"marks")," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\u6709\u6548\uff0c\u503c\u4e3a true \u65f6\u8868\u793a\u503c\u4e3a\u5305\u542b\u5173\u7cfb\uff0cfalse \u8868\u793a\u5e76\u5217"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"marks"),(0,r.kt)("td",{parentName:"tr",align:null},"\u523b\u5ea6\u6807\u8bb0\uff0ckey \u7684\u7c7b\u578b\u5fc5\u987b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," \u4e14\u53d6\u503c\u5728\u95ed\u533a\u95f4 ","[","min, max] \u5185\uff0c\u6bcf\u4e2a\u6807\u7b7e\u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"{ number: string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode } or { number: { style: object, label: string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53cc\u6ed1\u5757\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u5750\u6807\u8f74"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.24.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"step"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b65\u957f\uff0c\u53d6\u503c\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5e76\u4e14\u53ef\u88ab (max - min) \u6574\u9664\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"marks")," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"step")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),"\uff0c\u6b64\u65f6 Slider \u7684\u53ef\u9009\u503c\u4ec5\u6709 marks \u6807\u51fa\u6765\u7684\u90e8\u5206\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tipFormatter"),(0,r.kt)("td",{parentName:"tr",align:null},"Slider \u4f1a\u628a\u5f53\u524d\u503c\u4f20\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"td"},"tipFormatter"),"\uff0c\u5e76\u5728 Tooltip \u4e2d\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"td"},"tipFormatter")," \u7684\u8fd4\u56de\u503c\uff0c\u82e5\u4e3a null\uff0c\u5219\u9690\u85cf Tooltip\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"IDENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5f53\u524d\u53d6\u503c\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"range")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),"\uff0c\u5426\u5219\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"[number, number]")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"number","[","]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vertical"),(0,r.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0cSlider \u4e3a\u5782\u76f4\u65b9\u5411"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onAfterChange"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"onmouseup")," \u89e6\u53d1\u65f6\u673a\u4e00\u81f4\uff0c\u628a\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"Function(value)"),(0,r.kt)("td",{parentName:"tr",align:null},"NOOP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 Slider \u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f1a\u89e6\u53d1 onChange \u4e8b\u4ef6\uff0c\u5e76\u628a\u6539\u53d8\u540e\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"Function(value)"),(0,r.kt)("td",{parentName:"tr",align:null},"NOOP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipPlacement"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e Tooltip \u5c55\u793a\u4f4d\u7f6e\u3002\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"/components/tooltip/"},(0,r.kt)("inlineCode",{parentName:"a"},"Tooltip")),"\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\u65f6\uff0cTooltip \u5c06\u4f1a\u59cb\u7ec8\u663e\u793a\uff1b\u5426\u5219\u59cb\u7ec8\u4e0d\u663e\u793a\uff0c\u54ea\u6015\u5728\u62d6\u62fd\u53ca\u79fb\u5165\u65f6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3.11.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getTooltipPopupContainer"),(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip \u6e32\u67d3\u7236\u8282\u70b9\uff0c\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"() => document.body"),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")))),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blur()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664\u7126\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"focus()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7126\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(2784);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(t),k=l,g=s["".concat(o,".").concat(k)]||s[k]||m[k]||r;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,i[1]=d;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);