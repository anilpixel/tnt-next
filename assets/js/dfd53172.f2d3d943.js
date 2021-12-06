"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4193],{97512:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>m,toc:()=>u,default:()=>s});var a=t(7896),l=t(31461),r=(t(2784),t(30876)),o=["components"],i={tags:["Components"],type:"\u6570\u636e\u5c55\u793a",subtitle:"\u65e5\u5386",cols:1,title:"Calendar \u65e5\u5386"},d=void 0,m={unversionedId:"components/data-display/calendar",id:"components/data-display/calendar",isDocsHomePage:!1,title:"Calendar \u65e5\u5386",description:"---",source:"@site/docs/components/data-display/calendar.md",sourceDirName:"components/data-display",slug:"/components/data-display/calendar",permalink:"/tnt-next/docs/components/data-display/calendar",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/calendar.md",tags:[{label:"Components",permalink:"/tnt-next/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"\u6570\u636e\u5c55\u793a",subtitle:"\u65e5\u5386",cols:1,title:"Calendar \u65e5\u5386"},sidebar:"componentsSidebar",previous:{title:"Badge \u5fbd\u6807\u6570",permalink:"/tnt-next/docs/components/data-display/badge"},next:{title:"Card \u5361\u7247",permalink:"/tnt-next/docs/components/data-display/card"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c",id:"\u57fa\u672c",children:[],level:3},{value:"\u901a\u77e5\u4e8b\u9879\u65e5\u5386",id:"\u901a\u77e5\u4e8b\u9879\u65e5\u5386",children:[],level:3},{value:"\u5361\u7247\u6a21\u5f0f",id:"\u5361\u7247\u6a21\u5f0f",children:[],level:3},{value:"\u9009\u62e9\u529f\u80fd",id:"\u9009\u62e9\u529f\u80fd",children:[],level:3},{value:"\u81ea\u5b9a\u4e49\u5934\u90e8",id:"\u81ea\u5b9a\u4e49\u5934\u90e8",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2}],p={toc:u};function s(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6309\u7167\u65e5\u5386\u5f62\u5f0f\u5c55\u793a\u6570\u636e\u7684\u5bb9\u5668\u3002"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u5f53\u6570\u636e\u662f\u65e5\u671f\u6216\u6309\u7167\u65e5\u671f\u5212\u5206\u65f6\uff0c\u4f8b\u5982\u65e5\u7a0b\u3001\u8bfe\u8868\u3001\u4ef7\u683c\u65e5\u5386\u7b49\uff0c\u519c\u5386\u7b49\u3002\u76ee\u524d\u652f\u6301\u5e74/\u6708\u5207\u6362\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u57fa\u672c"},"\u57fa\u672c"),(0,r.kt)("p",null,"\u4e00\u4e2a\u901a\u7528\u7684\u65e5\u5386\u9762\u677f\uff0c\u652f\u6301\u5e74/\u6708\u5207\u6362\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function onPanelChange(value, mode) {\n  console.log(value, mode);\n}\n\nReactDOM.render(<Calendar onPanelChange={onPanelChange} />, mountNode);\n")),(0,r.kt)("h3",{id:"\u901a\u77e5\u4e8b\u9879\u65e5\u5386"},"\u901a\u77e5\u4e8b\u9879\u65e5\u5386"),(0,r.kt)("p",null,"\u4e00\u4e2a\u590d\u6742\u7684\u5e94\u7528\u793a\u4f8b\uff0c\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dateCellRender")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"monthCellRender")," \u51fd\u6570\u6765\u81ea\u5b9a\u4e49\u9700\u8981\u6e32\u67d3\u7684\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function getListData(value) {\n  let listData;\n  switch (value.date()) {\n    case 8:\n      listData = [\n        { type: 'warning', content: 'This is warning event.' },\n        { type: 'success', content: 'This is usual event.' },\n      ];\n      break;\n    case 10:\n      listData = [\n        { type: 'warning', content: 'This is warning event.' },\n        { type: 'success', content: 'This is usual event.' },\n        { type: 'error', content: 'This is error event.' },\n      ];\n      break;\n    case 15:\n      listData = [\n        { type: 'warning', content: 'This is warning event' },\n        { type: 'success', content: 'This is very long usual event\u3002\u3002....' },\n        { type: 'error', content: 'This is error event 1.' },\n        { type: 'error', content: 'This is error event 2.' },\n        { type: 'error', content: 'This is error event 3.' },\n        { type: 'error', content: 'This is error event 4.' },\n      ];\n      break;\n    default:\n  }\n  return listData || [];\n}\n\nfunction dateCellRender(value) {\n  const listData = getListData(value);\n  return (\n    <ul className=\"events\">\n      {listData.map(item => (\n        <li key={item.content}>\n          <Badge status={item.type} text={item.content} />\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nfunction getMonthData(value) {\n  if (value.month() === 8) {\n    return 1394;\n  }\n}\n\nfunction monthCellRender(value) {\n  const num = getMonthData(value);\n  return num ? (\n    <div className=\"notes-month\">\n      <section>{num}</section>\n      <span>Backlog number</span>\n    </div>\n  ) : null;\n}\n\nReactDOM.render(\n  <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u5361\u7247\u6a21\u5f0f"},"\u5361\u7247\u6a21\u5f0f"),(0,r.kt)("p",null,"\u7528\u4e8e\u5d4c\u5957\u5728\u7a7a\u95f4\u6709\u9650\u7684\u5bb9\u5668\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function onPanelChange(value, mode) {\n  console.log(value, mode);\n}\n\nReactDOM.render(\n  <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>\n    <Calendar fullscreen={false} onPanelChange={onPanelChange} />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u9009\u62e9\u529f\u80fd"},"\u9009\u62e9\u529f\u80fd"),(0,r.kt)("p",null,"\u4e00\u4e2a\u901a\u7528\u7684\u65e5\u5386\u9762\u677f\uff0c\u652f\u6301\u5e74/\u6708\u5207\u6362\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"\nclass App extends React.Component {\n  state = {\n    value: moment('2017-01-25'),\n    selectedValue: moment('2017-01-25'),\n  };\n\n  onSelect = value => {\n    this.setState({\n      value,\n      selectedValue: value,\n    });\n  };\n\n  onPanelChange = value => {\n    this.setState({ value });\n  };\n\n  render() {\n    const { value, selectedValue } = this.state;\n    return (\n      <div>\n        <Alert\n          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}\n        />\n        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u5934\u90e8"},"\u81ea\u5b9a\u4e49\u5934\u90e8"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u65e5\u5386\u5934\u90e8\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Group, Button } = Radio;\n\nfunction onPanelChange(value, mode) {\n  console.log(value, mode);\n}\n\nReactDOM.render(\n  <div style={{ width: 300, border: \'1px solid #d9d9d9\', borderRadius: 4 }}>\n    <Calendar\n      fullscreen={false}\n      headerRender={({ value, type, onChange, onTypeChange }) => {\n        const start = 0;\n        const end = 12;\n        const monthOptions = [];\n\n        const current = value.clone();\n        const localeData = value.localeData();\n        const months = [];\n        for (let i = 0; i < 12; i++) {\n          current.month(i);\n          months.push(localeData.monthsShort(current));\n        }\n\n        for (let index = start; index < end; index++) {\n          monthOptions.push(\n            <Select.Option className="month-item" key={`${index}`}>\n              {months[index]}\n            </Select.Option>,\n          );\n        }\n        const month = value.month();\n\n        const year = value.year();\n        const options = [];\n        for (let i = year - 10; i < year + 10; i += 1) {\n          options.push(\n            <Select.Option key={i} value={i} className="year-item">\n              {i}\n            </Select.Option>,\n          );\n        }\n        return (\n          <div style={{ padding: 10 }}>\n            <div style={{ marginBottom: \'10px\' }}>Custom header </div>\n            <Row type="flex" justify="space-between">\n              <Col>\n                <Group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>\n                  <Button value="month">Month</Button>\n                  <Button value="year">Year</Button>\n                </Group>\n              </Col>\n              <Col>\n                <Select\n                  size="small"\n                  dropdownMatchSelectWidth={false}\n                  className="my-year-select"\n                  onChange={newYear => {\n                    const now = value.clone().year(newYear);\n                    onChange(now);\n                  }}\n                  value={String(year)}\n                >\n                  {options}\n                </Select>\n              </Col>\n              <Col>\n                <Select\n                  size="small"\n                  dropdownMatchSelectWidth={false}\n                  value={String(month)}\n                  onChange={selectedMonth => {\n                    const newValue = value.clone();\n                    newValue.month(parseInt(selectedMonth, 10));\n                    onChange(newValue);\n                  }}\n                >\n                  {monthOptions}\n                </Select>\n              </Col>\n            </Row>\n          </div>\n        );\n      }}\n      onPanelChange={onPanelChange}\n    />\n  </div>,\n  mountNode,\n);\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"*","*","\u6ce8\u610f\uff1a","*","*","Calendar \u90e8\u5206 locale \u662f\u4ece value \u4e2d\u8bfb\u53d6\uff0c\u6240\u4ee5\u8bf7\u5148\u6b63\u786e\u8bbe\u7f6e moment \u7684 locale\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u9ed8\u8ba4\u8bed\u8a00\u4e3a en-US\uff0c\u6240\u4ee5\u5982\u679c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\uff0c\u63a8\u8350\u5728\u5165\u53e3\u6587\u4ef6\u5168\u5c40\u8bbe\u7f6e locale\n// import moment from 'moment';\n// import 'moment/locale/zh-cn';\n// moment.locale('zh-cn');\n\n<Calendar\n  dateCellRender={dateCellRender}\n  monthCellRender={monthCellRender}\n  onPanelChange={onPanelChange}\n  onSelect={onSelect}\n/>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateCellRender"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6e32\u67d3\u65e5\u671f\u5355\u5143\u683c\uff0c\u8fd4\u56de\u5185\u5bb9\u4f1a\u88ab\u8ffd\u52a0\u5230\u5355\u5143\u683c"),(0,r.kt)("td",{parentName:"tr",align:null},"function(date: moment): ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateFullCellRender"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6e32\u67d3\u65e5\u671f\u5355\u5143\u683c\uff0c\u8fd4\u56de\u5185\u5bb9\u8986\u76d6\u5355\u5143\u683c"),(0,r.kt)("td",{parentName:"tr",align:null},"function(date: moment): ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5c55\u793a\u7684\u65e5\u671f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://momentjs.com/"},"moment")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u65e5\u671f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabledDate"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53ef\u9009\u62e9\u7684\u65e5\u671f"),(0,r.kt)("td",{parentName:"tr",align:null},"(currentDate: moment) => boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fullscreen"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5168\u5c4f\u663e\u793a"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locale"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fd\u9645\u5316\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"\u9ed8\u8ba4\u914d\u7f6e")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"month/year")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"month"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monthCellRender"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6708\u5355\u5143\u683c\uff0c\u8fd4\u56de\u5185\u5bb9\u4f1a\u88ab\u8ffd\u52a0\u5230\u5355\u5143\u683c"),(0,r.kt)("td",{parentName:"tr",align:null},"function(date: moment): ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monthFullCellRender"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6708\u5355\u5143\u683c\uff0c\u8fd4\u56de\u5185\u5bb9\u8986\u76d6\u5355\u5143\u683c"),(0,r.kt)("td",{parentName:"tr",align:null},"function(date: moment): ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validRange"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u53ef\u4ee5\u663e\u793a\u7684\u65e5\u671f"),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"http://momentjs.com/"},"moment"),", ",(0,r.kt)("a",{parentName:"td",href:"http://momentjs.com/"},"moment"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c55\u793a\u65e5\u671f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://momentjs.com/"},"moment")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u65e5\u671f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPanelChange"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u671f\u9762\u677f\u53d8\u5316\u56de\u8c03"),(0,r.kt)("td",{parentName:"tr",align:null},"function(date: moment, mode: string)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u70b9\u51fb\u9009\u62e9\u65e5\u671f\u56de\u8c03"),(0,r.kt)("td",{parentName:"tr",align:null},"function(date: moment\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u671f\u53d8\u5316\u56de\u8c03"),(0,r.kt)("td",{parentName:"tr",align:null},"function(date: moment\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.8.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headerRender"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u5934\u90e8\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()})"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.19.0")))))}s.isMDXComponent=!0},30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(2784);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(t),c=l,g=s["".concat(d,".").concat(c)]||s[c]||p[c]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=s;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);