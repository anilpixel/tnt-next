"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5509],{6950:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>u,toc:()=>p,default:()=>m});var a=t(7896),l=t(31461),r=(t(2784),t(30876)),i=["components"],o={tags:["Components"],type:"Data Entry",title:"Slider"},d=void 0,u={unversionedId:"components/data-entry/slider",id:"components/data-entry/slider",isDocsHomePage:!1,title:"Slider",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-entry/slider.md",sourceDirName:"components/data-entry",slug:"/components/data-entry/slider",permalink:"/tnt-next/en/docs/components/data-entry/slider",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-entry/slider.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Entry",title:"Slider"},sidebar:"componentsSidebar",previous:{title:"Select",permalink:"/tnt-next/en/docs/components/data-entry/select"},next:{title:"Switch",permalink:"/tnt-next/en/docs/components/data-entry/switch"}},p=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Slider with InputNumber",id:"slider-with-inputnumber",children:[],level:3},{value:"Slider with icon",id:"slider-with-icon",children:[],level:3},{value:"Customize tooltip",id:"customize-tooltip",children:[],level:3},{value:"Event",id:"event",children:[],level:3},{value:"Graduated slider",id:"graduated-slider",children:[],level:3},{value:"Vertical",id:"vertical",children:[],level:3},{value:"Control visible of ToolTip",id:"control-visible-of-tooltip",children:[],level:3},{value:"Reverse",id:"reverse",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],s={toc:p};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A Slider component for displaying current value and intervals in range."),(0,r.kt)("h2",{id:"when-to-use"},"When To Use"),(0,r.kt)("p",null,"To input a value in a range."),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("p",null,"Basic slider. When ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", display as dual thumb mode. When ",(0,r.kt)("inlineCode",{parentName:"p"},"disable")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the slider will not be interactable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class Demo extends React.Component {\n  state = {\n    disabled: false,\n  };\n\n  handleDisabledChange = disabled => {\n    this.setState({ disabled });\n  };\n\n  render() {\n    const { disabled } = this.state;\n    return (\n      <div>\n        <Slider defaultValue={30} disabled={disabled} />\n        <Slider range defaultValue={[20, 50]} disabled={disabled} />\n        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,r.kt)("h3",{id:"slider-with-inputnumber"},"Slider with InputNumber"),(0,r.kt)("p",null,"Synchronize with ","[","InputNumber]","(","/components/input-number/) component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class IntegerStep extends React.Component {\n  state = {\n    inputValue: 1,\n  };\n\n  onChange = value => {\n    this.setState({\n      inputValue: value,\n    });\n  };\n\n  render() {\n    const { inputValue } = this.state;\n    return (\n      <Row>\n        <Col span={12}>\n          <Slider\n            min={1}\n            max={20}\n            onChange={this.onChange}\n            value={typeof inputValue === 'number' ? inputValue : 0}\n          />\n        </Col>\n        <Col span={4}>\n          <InputNumber\n            min={1}\n            max={20}\n            style={{ marginLeft: 16 }}\n            value={inputValue}\n            onChange={this.onChange}\n          />\n        </Col>\n      </Row>\n    );\n  }\n}\n\nclass DecimalStep extends React.Component {\n  state = {\n    inputValue: 0,\n  };\n\n  onChange = value => {\n    if (isNaN(value)) {\n      return;\n    }\n    this.setState({\n      inputValue: value,\n    });\n  };\n\n  render() {\n    const { inputValue } = this.state;\n    return (\n      <Row>\n        <Col span={12}>\n          <Slider\n            min={0}\n            max={1}\n            onChange={this.onChange}\n            value={typeof inputValue === 'number' ? inputValue : 0}\n            step={0.01}\n          />\n        </Col>\n        <Col span={4}>\n          <InputNumber\n            min={0}\n            max={1}\n            style={{ marginLeft: 16 }}\n            step={0.01}\n            value={inputValue}\n            onChange={this.onChange}\n          />\n        </Col>\n      </Row>\n    );\n  }\n}\n\nReactDOM.render(\n  <div>\n    <IntegerStep />\n    <DecimalStep />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"slider-with-icon"},"Slider with icon"),(0,r.kt)("p",null,"You can add an icon beside the slider to make it meaningful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class IconSlider extends React.Component {\n  state = {\n    value: 0,\n  };\n\n  handleChange = value => {\n    this.setState({ value });\n  };\n\n  render() {\n    const { max, min } = this.props;\n    const { value } = this.state;\n    const mid = ((max - min) / 2).toFixed(5);\n    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';\n    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';\n    return (\n      <div className=\"icon-wrapper\">\n        <Icon style={{ color: preColor }} type=\"frown-o\" />\n        <Slider {...this.props} onChange={this.handleChange} value={value} />\n        <Icon style={{ color: nextColor }} type=\"smile-o\" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<IconSlider min={0} max={20} />, mountNode);\n")),(0,r.kt)("h3",{id:"customize-tooltip"},"Customize tooltip"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"tipFormatter")," to format content of ",(0,r.kt)("inlineCode",{parentName:"p"},"Toolip"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"tipFormatter")," is null, hide it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function formatter(value) {\n  return `${value}%`;\n}\n\nReactDOM.render(\n  <div>\n    <Slider tipFormatter={formatter} />\n    <Slider tipFormatter={null} />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," callback function will fire when the user changes the slider's value. The ",(0,r.kt)("inlineCode",{parentName:"p"},"onAfterChange")," callback function will fire when ",(0,r.kt)("inlineCode",{parentName:"p"},"onmouseup")," fired."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function onChange(value) {\n  console.log('onChange: ', value);\n}\n\nfunction onAfterChange(value) {\n  console.log('onAfterChange: ', value);\n}\n\nReactDOM.render(\n  <div>\n    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />\n    <Slider\n      range\n      step={10}\n      defaultValue={[20, 50]}\n      onChange={onChange}\n      onAfterChange={onAfterChange}\n    />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"graduated-slider"},"Graduated slider"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"marks")," property to mark a graduated slider, use ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," to specify the position of thumb. When ",(0,r.kt)("inlineCode",{parentName:"p"},"included")," is false, means that different thumbs are coordinative. when ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," is null, users can only slide the thumbs onto marks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const marks = {\n  0: '0\xb0C',\n  26: '26\xb0C',\n  37: '37\xb0C',\n  100: {\n    style: {\n      color: '#f50',\n    },\n    label: <strong>100\xb0C</strong>,\n  },\n};\n\nReactDOM.render(\n  <div>\n    <h4>included=true</h4>\n    <Slider marks={marks} defaultValue={37} />\n    <Slider range marks={marks} defaultValue={[26, 37]} />\n\n    <h4>included=false</h4>\n    <Slider marks={marks} included={false} defaultValue={37} />\n\n    <h4>marks & step</h4>\n    <Slider marks={marks} step={10} defaultValue={37} />\n\n    <h4>step=null</h4>\n    <Slider marks={marks} step={null} defaultValue={37} />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"vertical"},"Vertical"),(0,r.kt)("p",null,"The vertical Slider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const style = {\n  display: 'inline-block',\n  height: 300,\n  marginLeft: 70,\n};\n\nconst marks = {\n  0: '0\xb0C',\n  26: '26\xb0C',\n  37: '37\xb0C',\n  100: {\n    style: {\n      color: '#f50',\n    },\n    label: <strong>100\xb0C</strong>,\n  },\n};\n\nReactDOM.render(\n  <div>\n    <div style={style}>\n      <Slider vertical defaultValue={30} />\n    </div>\n    <div style={style}>\n      <Slider vertical range step={10} defaultValue={[20, 50]} />\n    </div>\n    <div style={style}>\n      <Slider vertical range marks={marks} defaultValue={[26, 37]} />\n    </div>\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"control-visible-of-tooltip"},"Control visible of ToolTip"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"tooltipVisible")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ToolTip will show always, or ToolTip will not show anyway, even if dragging or hovering."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"ReactDOM.render(<Slider defaultValue={30} tooltipVisible />, mountNode);\n")),(0,r.kt)("h3",{id:"reverse"},"Reverse"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"reverse")," to render slider reversely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class Demo extends React.Component {\n  state = {\n    reverse: true,\n  };\n\n  handleReverseChange = reverse => {\n    this.setState({ reverse });\n  };\n\n  render() {\n    const { reverse } = this.state;\n    return (\n      <div>\n        <Slider defaultValue={30} reverse={reverse} />\n        <Slider range defaultValue={[20, 50]} reverse={reverse} />\n        Reversed: <Switch size="small" checked={reverse} onChange={this.handleReverseChange} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoFocus"),(0,r.kt)("td",{parentName:"tr",align:null},"get focus when component mounted"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"The default value of slider. When ",(0,r.kt)("inlineCode",{parentName:"td"},"range")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", use ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", otherwise, use ",(0,r.kt)("inlineCode",{parentName:"td"},"[number, number]")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"number","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"0 or ","[","0, 0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the slider will not be interactable."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dots"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the thumb can drag over tick only."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"included"),(0,r.kt)("td",{parentName:"tr",align:null},"Make effect when ",(0,r.kt)("inlineCode",{parentName:"td"},"marks")," not null, ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," means containment and ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," means coordinative"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"marks"),(0,r.kt)("td",{parentName:"tr",align:null},"Tick mark of Slider, type of key must be ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", and must in closed interval ","[","min, max], each mark can declare its own style."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"{ number: string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode } or { number: { style: object, label: string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum value the slider can slide to"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum value the slider can slide to."),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null},"dual thumb mode"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"reverse the component"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3.24.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"step"),(0,r.kt)("td",{parentName:"tr",align:null},"The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When ",(0,r.kt)("inlineCode",{parentName:"td"},"marks")," no null, ",(0,r.kt)("inlineCode",{parentName:"td"},"step")," can be ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tipFormatter"),(0,r.kt)("td",{parentName:"tr",align:null},"Slider will pass its value to ",(0,r.kt)("inlineCode",{parentName:"td"},"tipFormatter"),", and display its value in Tooltip, and hide Tooltip when return value is null."),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"IDENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of slider. When ",(0,r.kt)("inlineCode",{parentName:"td"},"range")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", use ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", otherwise, use ",(0,r.kt)("inlineCode",{parentName:"td"},"[number, number]")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"number","[","]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vertical"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the slider will be vertical."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onAfterChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Fire when ",(0,r.kt)("inlineCode",{parentName:"td"},"onmouseup")," is fired."),(0,r.kt)("td",{parentName:"tr",align:null},"Function(value)"),(0,r.kt)("td",{parentName:"tr",align:null},"NOOP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback function that is fired when the user changes the slider's value."),(0,r.kt)("td",{parentName:"tr",align:null},"Function(value)"),(0,r.kt)("td",{parentName:"tr",align:null},"NOOP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipPlacement"),(0,r.kt)("td",{parentName:"tr",align:null},"Set Tooltip display position. Ref ",(0,r.kt)("a",{parentName:"td",href:"/components/tooltip/"},(0,r.kt)("inlineCode",{parentName:"a"},"Tooltip")),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3.11.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getTooltipPopupContainer"),(0,r.kt)("td",{parentName:"tr",align:null},"The DOM container of the Tooltip, the default behavior is to create a div element in body."),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"() => document.body"),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blur()"),(0,r.kt)("td",{parentName:"tr",align:null},"remove focus"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"focus()"),(0,r.kt)("td",{parentName:"tr",align:null},"get focus"),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(2784);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=l,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);