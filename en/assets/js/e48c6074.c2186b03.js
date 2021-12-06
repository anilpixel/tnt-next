"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6066],{24942:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>p});var a=n(7896),r=n(31461),l=(n(2784),n(30876)),i=["components"],o={tags:["Components"],type:"Data Entry",cols:1,title:"Transfer"},s=void 0,d={unversionedId:"components/data-entry/transfer",id:"components/data-entry/transfer",isDocsHomePage:!1,title:"Transfer",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/data-entry/transfer.md",sourceDirName:"components/data-entry",slug:"/components/data-entry/transfer",permalink:"/tnt-next/en/docs/components/data-entry/transfer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-entry/transfer.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"Data Entry",cols:1,title:"Transfer"},sidebar:"componentsSidebar",previous:{title:"TimePicker",permalink:"/tnt-next/en/docs/components/data-entry/time-picker"},next:{title:"TreeSelect",permalink:"/tnt-next/en/docs/components/data-entry/tree-select"}},c=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Search",id:"search",children:[],level:3},{value:"Advanced",id:"advanced",children:[],level:3},{value:"Custom datasource",id:"custom-datasource",children:[],level:3},{value:"Performance Test",id:"performance-test",children:[],level:3},{value:"Table Transfer",id:"table-transfer",children:[],level:3},{value:"Tree Transfer",id:"tree-transfer",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Render Props",id:"render-props",children:[{value:"example",id:"example",children:[],level:4}],level:3}],level:2},{value:"Warning",id:"warning",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"How to support fetch and present data from a remote server in Transfer column.",id:"how-to-support-fetch-and-present-data-from-a-remote-server-in-transfer-column",children:[],level:3}],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Double column transfer choice box."),(0,l.kt)("h2",{id:"when-to-use"},"When To Use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is a select control essentially which can be use for selecting multiple items."),(0,l.kt)("li",{parentName:"ul"},"Transfer can display more information for items and take up more space.")),(0,l.kt)("p",null,"Transfer the elements between two columns in an intuitive and efficient way."),(0,l.kt)("p",null,"One or more elements can be selected from either column, one click on the proper ",(0,l.kt)("inlineCode",{parentName:"p"},"direction")," button, and the transfer is done. The left column is considered the ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," and the right column is considered the ",(0,l.kt)("inlineCode",{parentName:"p"},"target"),". As you can see in the API description, these names are reflected in."),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)("p",null,"The most basic usage of ",(0,l.kt)("inlineCode",{parentName:"p"},"Transfer")," involves providing the source data and target keys arrays, plus the rendering and some callback functions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const mockData = [];\nfor (let i = 0; i < 20; i++) {\n  mockData.push({\n    key: i.toString(),\n    title: `content${i + 1}`,\n    description: `description of content${i + 1}`,\n    disabled: i % 3 < 1,\n  });\n}\n\nconst oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);\n\nclass App extends React.Component {\n  state = {\n    targetKeys: oriTargetKeys,\n    selectedKeys: [],\n    disabled: false,\n  };\n\n  handleChange = (nextTargetKeys, direction, moveKeys) => {\n    this.setState({ targetKeys: nextTargetKeys });\n\n    console.log('targetKeys: ', nextTargetKeys);\n    console.log('direction: ', direction);\n    console.log('moveKeys: ', moveKeys);\n  };\n\n  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\n    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });\n\n    console.log('sourceSelectedKeys: ', sourceSelectedKeys);\n    console.log('targetSelectedKeys: ', targetSelectedKeys);\n  };\n\n  handleScroll = (direction, e) => {\n    console.log('direction:', direction);\n    console.log('target:', e.target);\n  };\n\n  handleDisable = disabled => {\n    this.setState({ disabled });\n  };\n\n  render() {\n    const { targetKeys, selectedKeys, disabled } = this.state;\n    return (\n      <div>\n        <Transfer\n          dataSource={mockData}\n          titles={['Source', 'Target']}\n          targetKeys={targetKeys}\n          selectedKeys={selectedKeys}\n          onChange={this.handleChange}\n          onSelectChange={this.handleSelectChange}\n          onScroll={this.handleScroll}\n          render={item => item.title}\n          disabled={disabled}\n        />\n        <Switch\n          unCheckedChildren=\"disabled\"\n          checkedChildren=\"disabled\"\n          checked={disabled}\n          onChange={this.handleDisable}\n          style={{ marginTop: 16 }}\n        />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,l.kt)("h3",{id:"search"},"Search"),(0,l.kt)("p",null,"Transfer with a search box."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class App extends React.Component {\n  state = {\n    mockData: [],\n    targetKeys: [],\n  };\n\n  componentDidMount() {\n    this.getMock();\n  }\n\n  getMock = () => {\n    const targetKeys = [];\n    const mockData = [];\n    for (let i = 0; i < 20; i++) {\n      const data = {\n        key: i.toString(),\n        title: `content${i + 1}`,\n        description: `description of content${i + 1}`,\n        chosen: Math.random() * 2 > 1,\n      };\n      if (data.chosen) {\n        targetKeys.push(data.key);\n      }\n      mockData.push(data);\n    }\n    this.setState({ mockData, targetKeys });\n  };\n\n  filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;\n\n  handleChange = targetKeys => {\n    this.setState({ targetKeys });\n  };\n\n  handleSearch = (dir, value) => {\n    console.log('search:', dir, value);\n  };\n\n  render() {\n    return (\n      <Transfer\n        dataSource={this.state.mockData}\n        showSearch\n        filterOption={this.filterOption}\n        targetKeys={this.state.targetKeys}\n        onChange={this.handleChange}\n        onSearch={this.handleSearch}\n        render={item => item.title}\n      />\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,l.kt)("h3",{id:"advanced"},"Advanced"),(0,l.kt)("p",null,"Advanced Usage of Transfer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class App extends React.Component {\n  state = {\n    mockData: [],\n    targetKeys: [],\n  };\n\n  componentDidMount() {\n    this.getMock();\n  }\n\n  getMock = () => {\n    const targetKeys = [];\n    const mockData = [];\n    for (let i = 0; i < 20; i++) {\n      const data = {\n        key: i.toString(),\n        title: `content${i + 1}`,\n        description: `description of content${i + 1}`,\n        chosen: Math.random() * 2 > 1,\n      };\n      if (data.chosen) {\n        targetKeys.push(data.key);\n      }\n      mockData.push(data);\n    }\n    this.setState({ mockData, targetKeys });\n  };\n\n  handleChange = targetKeys => {\n    this.setState({ targetKeys });\n  };\n\n  renderFooter = () => (\n    <Button size=\"small\" style={{ float: 'right', margin: 5 }} onClick={this.getMock}>\n      reload\n    </Button>\n  );\n\n  render() {\n    return (\n      <Transfer\n        dataSource={this.state.mockData}\n        showSearch\n        listStyle={{\n          width: 250,\n          height: 300,\n        }}\n        operations={['to right', 'to left']}\n        targetKeys={this.state.targetKeys}\n        onChange={this.handleChange}\n        render={item => `${item.title}-${item.description}`}\n        footer={this.renderFooter}\n      />\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,l.kt)("h3",{id:"custom-datasource"},"Custom datasource"),(0,l.kt)("p",null,"Custom each Transfer Item, and in this way you can render a complex datasource."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class App extends React.Component {\n  state = {\n    mockData: [],\n    targetKeys: [],\n  };\n\n  componentDidMount() {\n    this.getMock();\n  }\n\n  getMock = () => {\n    const targetKeys = [];\n    const mockData = [];\n    for (let i = 0; i < 20; i++) {\n      const data = {\n        key: i.toString(),\n        title: `content${i + 1}`,\n        description: `description of content${i + 1}`,\n        chosen: Math.random() * 2 > 1,\n      };\n      if (data.chosen) {\n        targetKeys.push(data.key);\n      }\n      mockData.push(data);\n    }\n    this.setState({ mockData, targetKeys });\n  };\n\n  handleChange = (targetKeys, direction, moveKeys) => {\n    console.log(targetKeys, direction, moveKeys);\n    this.setState({ targetKeys });\n  };\n\n  renderItem = item => {\n    const customLabel = (\n      <span className="custom-item">\n        {item.title} - {item.description}\n      </span>\n    );\n\n    return {\n      label: customLabel, // for displayed item\n      value: item.title, // for title and filter matching\n    };\n  };\n\n  render() {\n    return (\n      <Transfer\n        dataSource={this.state.mockData}\n        listStyle={{\n          width: 300,\n          height: 300,\n        }}\n        targetKeys={this.state.targetKeys}\n        onChange={this.handleChange}\n        render={this.renderItem}\n      />\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,l.kt)("h3",{id:"performance-test"},"Performance Test"),(0,l.kt)("p",null,"2000 items."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class App extends React.Component {\n  state = {\n    mockData: [],\n    targetKeys: [],\n  };\n\n  componentDidMount() {\n    this.getMock();\n  }\n\n  getMock = () => {\n    const targetKeys = [];\n    const mockData = [];\n    for (let i = 0; i < 2000; i++) {\n      const data = {\n        key: i.toString(),\n        title: `content${i + 1}`,\n        description: `description of content${i + 1}`,\n        chosen: Math.random() * 2 > 1,\n      };\n      if (data.chosen) {\n        targetKeys.push(data.key);\n      }\n      mockData.push(data);\n    }\n    this.setState({ mockData, targetKeys });\n  };\n\n  handleChange = (targetKeys, direction, moveKeys) => {\n    console.log(targetKeys, direction, moveKeys);\n    this.setState({ targetKeys });\n  };\n\n  render() {\n    return (\n      <Transfer\n        dataSource={this.state.mockData}\n        targetKeys={this.state.targetKeys}\n        onChange={this.handleChange}\n        render={item => item.title}\n      />\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,l.kt)("h3",{id:"table-transfer"},"Table Transfer"),(0,l.kt)("p",null,"Customize render list with Table component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"\n// Customize Table Transfer\nconst TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (\n  <Transfer {...restProps} showSelectAll={false}>\n    {({\n      direction,\n      filteredItems,\n      onItemSelectAll,\n      onItemSelect,\n      selectedKeys: listSelectedKeys,\n      disabled: listDisabled,\n    }) => {\n      const columns = direction === 'left' ? leftColumns : rightColumns;\n\n      const rowSelection = {\n        getCheckboxProps: item => ({ disabled: listDisabled || item.disabled }),\n        onSelectAll(selected, selectedRows) {\n          const treeSelectedKeys = selectedRows\n            .filter(item => !item.disabled)\n            .map(({ key }) => key);\n          const diffKeys = selected\n            ? difference(treeSelectedKeys, listSelectedKeys)\n            : difference(listSelectedKeys, treeSelectedKeys);\n          onItemSelectAll(diffKeys, selected);\n        },\n        onSelect({ key }, selected) {\n          onItemSelect(key, selected);\n        },\n        selectedRowKeys: listSelectedKeys,\n      };\n\n      return (\n        <Table\n          rowSelection={rowSelection}\n          columns={columns}\n          dataSource={filteredItems}\n          size=\"small\"\n          style={{ pointerEvents: listDisabled ? 'none' : null }}\n          onRow={({ key, disabled: itemDisabled }) => ({\n            onClick: () => {\n              if (itemDisabled || listDisabled) return;\n              onItemSelect(key, !listSelectedKeys.includes(key));\n            },\n          })}\n        />\n      );\n    }}\n  </Transfer>\n);\n\nconst mockTags = ['cat', 'dog', 'bird'];\n\nconst mockData = [];\nfor (let i = 0; i < 20; i++) {\n  mockData.push({\n    key: i.toString(),\n    title: `content${i + 1}`,\n    description: `description of content${i + 1}`,\n    disabled: i % 4 === 0,\n    tag: mockTags[i % 3],\n  });\n}\n\nconst originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);\n\nconst leftTableColumns = [\n  {\n    dataIndex: 'title',\n    title: 'Name',\n  },\n  {\n    dataIndex: 'tag',\n    title: 'Tag',\n    render: tag => <Tag>{tag}</Tag>,\n  },\n  {\n    dataIndex: 'description',\n    title: 'Description',\n  },\n];\nconst rightTableColumns = [\n  {\n    dataIndex: 'title',\n    title: 'Name',\n  },\n];\n\nclass App extends React.Component {\n  state = {\n    targetKeys: originTargetKeys,\n    disabled: false,\n    showSearch: false,\n  };\n\n  onChange = nextTargetKeys => {\n    this.setState({ targetKeys: nextTargetKeys });\n  };\n\n  triggerDisable = disabled => {\n    this.setState({ disabled });\n  };\n\n  triggerShowSearch = showSearch => {\n    this.setState({ showSearch });\n  };\n\n  render() {\n    const { targetKeys, disabled, showSearch } = this.state;\n    return (\n      <div>\n        <TableTransfer\n          dataSource={mockData}\n          targetKeys={targetKeys}\n          disabled={disabled}\n          showSearch={showSearch}\n          onChange={this.onChange}\n          filterOption={(inputValue, item) =>\n            item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1\n          }\n          leftColumns={leftTableColumns}\n          rightColumns={rightTableColumns}\n        />\n        <Switch\n          unCheckedChildren=\"disabled\"\n          checkedChildren=\"disabled\"\n          checked={disabled}\n          onChange={this.triggerDisable}\n          style={{ marginTop: 16 }}\n        />\n        <Switch\n          unCheckedChildren=\"showSearch\"\n          checkedChildren=\"showSearch\"\n          checked={showSearch}\n          onChange={this.triggerShowSearch}\n          style={{ marginTop: 16 }}\n        />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,l.kt)("h3",{id:"tree-transfer"},"Tree Transfer"),(0,l.kt)("p",null,"Customize render list with Tree component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const { TreeNode } = Tree;\n\n// Customize Table Transfer\nconst isChecked = (selectedKeys, eventKey) => {\n  return selectedKeys.indexOf(eventKey) !== -1;\n};\n\nconst generateTree = (treeNodes = [], checkedKeys = []) => {\n  return treeNodes.map(({ children, ...props }) => (\n    <TreeNode {...props} disabled={checkedKeys.includes(props.key)} key={props.key}>\n      {generateTree(children, checkedKeys)}\n    </TreeNode>\n  ));\n};\n\nconst TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {\n  const transferDataSource = [];\n  function flatten(list = []) {\n    list.forEach(item => {\n      transferDataSource.push(item);\n      flatten(item.children);\n    });\n  }\n  flatten(dataSource);\n\n  return (\n    <Transfer\n      {...restProps}\n      targetKeys={targetKeys}\n      dataSource={transferDataSource}\n      className=\"tree-transfer\"\n      render={item => item.title}\n      showSelectAll={false}\n    >\n      {({ direction, onItemSelect, selectedKeys }) => {\n        if (direction === 'left') {\n          const checkedKeys = [...selectedKeys, ...targetKeys];\n          return (\n            <Tree\n              blockNode\n              checkable\n              checkStrictly\n              defaultExpandAll\n              checkedKeys={checkedKeys}\n              onCheck={(\n                _,\n                {\n                  node: {\n                    props: { eventKey },\n                  },\n                },\n              ) => {\n                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));\n              }}\n              onSelect={(\n                _,\n                {\n                  node: {\n                    props: { eventKey },\n                  },\n                },\n              ) => {\n                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));\n              }}\n            >\n              {generateTree(dataSource, targetKeys)}\n            </Tree>\n          );\n        }\n      }}\n    </Transfer>\n  );\n};\n\nconst treeData = [\n  { key: '0-0', title: '0-0' },\n  {\n    key: '0-1',\n    title: '0-1',\n    children: [{ key: '0-1-0', title: '0-1-0' }, { key: '0-1-1', title: '0-1-1' }],\n  },\n  { key: '0-2', title: '0-3' },\n];\n\nclass App extends React.Component {\n  state = {\n    targetKeys: [],\n  };\n\n  onChange = targetKeys => {\n    console.log('Target Keys:', targetKeys);\n    this.setState({ targetKeys });\n  };\n\n  render() {\n    const { targetKeys } = this.state;\n    return (\n      <div>\n        <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={this.onChange} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"className"),(0,l.kt)("td",{parentName:"tr",align:null},"A custom CSS class."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[","'', '']"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,l.kt)("td",{parentName:"tr",align:null},"Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in ",(0,l.kt)("inlineCode",{parentName:"td"},"targetKeys")," prop."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://git.io/vMM64"},"TransferItem"),"[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[","]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether disabled transfer"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"3.10.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filterOption"),(0,l.kt)("td",{parentName:"tr",align:null},"A function to determine whether an item should show in search result list"),(0,l.kt)("td",{parentName:"tr",align:null},"(inputValue, option): boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"footer"),(0,l.kt)("td",{parentName:"tr",align:null},"A function used for rendering the footer."),(0,l.kt)("td",{parentName:"tr",align:null},"(props) => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lazy"),(0,l.kt)("td",{parentName:"tr",align:null},"property of ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/loktar00/react-lazy-load"},"react-lazy-load")," for lazy rendering items. Turn off it by set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ height: 32, offset: 32 }"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"A custom CSS style used for rendering the transfer columns."),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"({direction: 'left'"),(0,l.kt)("td",{parentName:"tr",align:null},"'right'}) => object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null},"i18n text including filter, empty text, item unit, etc"),(0,l.kt)("td",{parentName:"tr",align:null},"{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode; }"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ itemUnit: 'item', itemsUnit: 'items', notFoundContent: 'The list is empty', searchPlaceholder: 'Search here' }")),(0,l.kt)("td",{parentName:"tr",align:null},"3.9.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operations"),(0,l.kt)("td",{parentName:"tr",align:null},"A set of operations that are sorted from top to bottom."),(0,l.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[","'>', '<']"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operationStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"A custom CSS style used for rendering the operations column."),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"3.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"render"),(0,l.kt)("td",{parentName:"tr",align:null},"The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a React element which is generated from that record. Also, it can return a plain object with ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"label"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"label")," is a React element and ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," is for title"),(0,l.kt)("td",{parentName:"tr",align:null},"(record) => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectedKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"A set of keys of selected items."),(0,l.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[","]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showSearch"),(0,l.kt)("td",{parentName:"tr",align:null},"If included, a search box is shown on each column."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showSelectAll"),(0,l.kt)("td",{parentName:"tr",align:null},"Show select all checkbox on the header"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"3.18.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"style"),(0,l.kt)("td",{parentName:"tr",align:null},"A custom CSS style used for rendering wrapper element."),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"3.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"A set of keys of elements that are listed on the right column."),(0,l.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[","]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"titles"),(0,l.kt)("td",{parentName:"tr",align:null},"A set of titles that are sorted from left to right."),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function that is executed when the transfer between columns is complete."),(0,l.kt)("td",{parentName:"tr",align:null},"(targetKeys, direction, moveKeys): void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onScroll"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which is executed when scroll options list"),(0,l.kt)("td",{parentName:"tr",align:null},"(direction, event): void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which is executed when search field are changed"),(0,l.kt)("td",{parentName:"tr",align:null},"(direction: 'left'"),(0,l.kt)("td",{parentName:"tr",align:null},"'right', value: string): void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onSelectChange"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which is executed when selected items are changed."),(0,l.kt)("td",{parentName:"tr",align:null},"(sourceSelectedKeys, targetSelectedKeys): void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"render-props"},"Render Props"),(0,l.kt)("p",null,"New in 3.18.0. Transfer accept ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," to customize render list, using follow props:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"direction"),(0,l.kt)("td",{parentName:"tr",align:null},"List render direction"),(0,l.kt)("td",{parentName:"tr",align:null},"'left'"),(0,l.kt)("td",{parentName:"tr",align:null},"'right'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable list or not"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"3.18.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filteredItems"),(0,l.kt)("td",{parentName:"tr",align:null},"Filtered items"),(0,l.kt)("td",{parentName:"tr",align:null},"TransferItem","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"3.18.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onItemSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"Select item"),(0,l.kt)("td",{parentName:"tr",align:null},"(key: string, selected: boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"3.18.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onItemSelectAll"),(0,l.kt)("td",{parentName:"tr",align:null},"Select a group of items"),(0,l.kt)("td",{parentName:"tr",align:null},"(keys: string","[","], selected: boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"3.18.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectedKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"Selected items"),(0,l.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"3.18.0")))),(0,l.kt)("h4",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Transfer {...props}>{listProps => <YourComponent {...listProps} />}</Transfer>\n")),(0,l.kt)("h2",{id:"warning"},"Warning"),(0,l.kt)("p",null,"According the ",(0,l.kt)("a",{parentName:"p",href:"http://facebook.github.io/react/docs/lists-and-keys.html#keys"},"standard")," of React, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in ",(0,l.kt)("inlineCode",{parentName:"p"},"dataSource")," array. By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," property is used as an unique identifier."),(0,l.kt)("p",null,"If there's no ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," in your data, you should use ",(0,l.kt)("inlineCode",{parentName:"p"},"rowKey")," to specify the key that will be used for uniquely identify each element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// eg. your primary key is `uid`\nreturn <Transfer rowKey={record => record.uid} />;\n")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"how-to-support-fetch-and-present-data-from-a-remote-server-in-transfer-column"},"How to support fetch and present data from a remote server in Transfer column."),(0,l.kt)("p",null,"In order to keep the page number synchronized, you can disable columns you checked without removing the option: ",(0,l.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/93xeb"},"https://codesandbox.io/s/93xeb")))}p.isMDXComponent=!0},30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);