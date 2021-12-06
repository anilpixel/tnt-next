"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7461],{68491:(n,e,t)=>{t.r(e),t.d(e,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>m,toc:()=>o,default:()=>k});var a=t(7896),l=t(31461),r=(t(2784),t(30876)),u=["components"],i={tags:["Components"],cols:1,type:"\u5bfc\u822a",title:"Menu \u5bfc\u822a\u83dc\u5355"},p=void 0,m={unversionedId:"components/navigation/menu",id:"components/navigation/menu",isDocsHomePage:!1,title:"Menu \u5bfc\u822a\u83dc\u5355",description:"---",source:"@site/docs/components/navigation/menu.md",sourceDirName:"components/navigation",slug:"/components/navigation/menu",permalink:"/tnt-next/docs/components/navigation/menu",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/navigation/menu.md",tags:[{label:"Components",permalink:"/tnt-next/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],cols:1,type:"\u5bfc\u822a",title:"Menu \u5bfc\u822a\u83dc\u5355"},sidebar:"componentsSidebar",previous:{title:"Dropdown \u4e0b\u62c9\u83dc\u5355",permalink:"/tnt-next/docs/components/navigation/dropdown"},next:{title:"PageHeader \u9875\u5934",permalink:"/tnt-next/docs/components/navigation/page-header"}},o=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u9876\u90e8\u5bfc\u822a",id:"\u9876\u90e8\u5bfc\u822a",children:[],level:3},{value:"\u5185\u5d4c\u83dc\u5355",id:"\u5185\u5d4c\u83dc\u5355",children:[],level:3},{value:"\u7f29\u8d77\u5185\u5d4c\u83dc\u5355",id:"\u7f29\u8d77\u5185\u5d4c\u83dc\u5355",children:[],level:3},{value:"\u53ea\u5c55\u5f00\u5f53\u524d\u7236\u7ea7\u83dc\u5355",id:"\u53ea\u5c55\u5f00\u5f53\u524d\u7236\u7ea7\u83dc\u5355",children:[],level:3},{value:"\u5782\u76f4\u83dc\u5355",id:"\u5782\u76f4\u83dc\u5355",children:[],level:3},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",children:[],level:3},{value:"\u5207\u6362\u83dc\u5355\u7c7b\u578b",id:"\u5207\u6362\u83dc\u5355\u7c7b\u578b",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"Menu",id:"menu",children:[],level:3},{value:"Menu.Item",id:"menuitem",children:[],level:3},{value:"Menu.SubMenu",id:"menusubmenu",children:[],level:3},{value:"Menu.ItemGroup",id:"menuitemgroup",children:[],level:3},{value:"Menu.Divider",id:"menudivider",children:[],level:3}],level:2}],d={toc:o};function k(n){var e=n.components,t=(0,l.Z)(n,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u4e3a\u9875\u9762\u548c\u529f\u80fd\u63d0\u4f9b\u5bfc\u822a\u7684\u83dc\u5355\u5217\u8868\u3002"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u5bfc\u822a\u83dc\u5355\u662f\u4e00\u4e2a\u7f51\u7ad9\u7684\u7075\u9b42\uff0c\u7528\u6237\u4f9d\u8d56\u5bfc\u822a\u5728\u5404\u4e2a\u9875\u9762\u4e2d\u8fdb\u884c\u8df3\u8f6c\u3002\u4e00\u822c\u5206\u4e3a\u9876\u90e8\u5bfc\u822a\u548c\u4fa7\u8fb9\u5bfc\u822a\uff0c\u9876\u90e8\u5bfc\u822a\u63d0\u4f9b\u5168\u5c40\u6027\u7684\u7c7b\u76ee\u548c\u529f\u80fd\uff0c\u4fa7\u8fb9\u5bfc\u822a\u63d0\u4f9b\u591a\u7ea7\u7ed3\u6784\u6765\u6536\u7eb3\u548c\u6392\u5217\u7f51\u7ad9\u67b6\u6784\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5e03\u5c40\u548c\u5bfc\u822a\u7684\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/components/layout"},"\u901a\u7528\u5e03\u5c40"),"\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u9876\u90e8\u5bfc\u822a"},"\u9876\u90e8\u5bfc\u822a"),(0,r.kt)("p",null,"\u6c34\u5e73\u7684\u9876\u90e8\u5bfc\u822a\u83dc\u5355\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { SubMenu } = Menu;\n\nclass App extends React.Component {\n  state = {\n    current: \'mail\',\n  };\n\n  handleClick = e => {\n    console.log(\'click \', e);\n    this.setState({\n      current: e.key,\n    });\n  };\n\n  render() {\n    return (\n      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">\n        <Menu.Item key="mail">\n          <Icon type="mail" />\n          Navigation One\n        </Menu.Item>\n        <Menu.Item key="app" disabled>\n          <Icon type="appstore" />\n          Navigation Two\n        </Menu.Item>\n        <SubMenu\n          title={\n            <span className="submenu-title-wrapper">\n              <Icon type="setting" />\n              Navigation Three - Submenu\n            </span>\n          }\n        >\n          <Menu.ItemGroup title="Item 1">\n            <Menu.Item key="setting:1">Option 1</Menu.Item>\n            <Menu.Item key="setting:2">Option 2</Menu.Item>\n          </Menu.ItemGroup>\n          <Menu.ItemGroup title="Item 2">\n            <Menu.Item key="setting:3">Option 3</Menu.Item>\n            <Menu.Item key="setting:4">Option 4</Menu.Item>\n          </Menu.ItemGroup>\n        </SubMenu>\n        <Menu.Item key="alipay">\n          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">\n            Navigation Four - Link\n          </a>\n        </Menu.Item>\n      </Menu>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,r.kt)("h3",{id:"\u5185\u5d4c\u83dc\u5355"},"\u5185\u5d4c\u83dc\u5355"),(0,r.kt)("p",null,"\u5782\u76f4\u83dc\u5355\uff0c\u5b50\u83dc\u5355\u5185\u5d4c\u5728\u83dc\u5355\u533a\u57df\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { SubMenu } = Menu;\n\nclass Sider extends React.Component {\n  handleClick = e => {\n    console.log(\'click \', e);\n  };\n\n  render() {\n    return (\n      <Menu\n        onClick={this.handleClick}\n        style={{ width: 256 }}\n        defaultSelectedKeys={[\'1\']}\n        defaultOpenKeys={[\'sub1\']}\n        mode="inline"\n      >\n        <SubMenu\n          key="sub1"\n          title={\n            <span>\n              <Icon type="mail" />\n              <span>Navigation One</span>\n            </span>\n          }\n        >\n          <Menu.ItemGroup key="g1" title="Item 1">\n            <Menu.Item key="1">Option 1</Menu.Item>\n            <Menu.Item key="2">Option 2</Menu.Item>\n          </Menu.ItemGroup>\n          <Menu.ItemGroup key="g2" title="Item 2">\n            <Menu.Item key="3">Option 3</Menu.Item>\n            <Menu.Item key="4">Option 4</Menu.Item>\n          </Menu.ItemGroup>\n        </SubMenu>\n        <SubMenu\n          key="sub2"\n          title={\n            <span>\n              <Icon type="appstore" />\n              <span>Navigation Two</span>\n            </span>\n          }\n        >\n          <Menu.Item key="5">Option 5</Menu.Item>\n          <Menu.Item key="6">Option 6</Menu.Item>\n          <SubMenu key="sub3" title="Submenu">\n            <Menu.Item key="7">Option 7</Menu.Item>\n            <Menu.Item key="8">Option 8</Menu.Item>\n          </SubMenu>\n        </SubMenu>\n        <SubMenu\n          key="sub4"\n          title={\n            <span>\n              <Icon type="setting" />\n              <span>Navigation Three</span>\n            </span>\n          }\n        >\n          <Menu.Item key="9">Option 9</Menu.Item>\n          <Menu.Item key="10">Option 10</Menu.Item>\n          <Menu.Item key="11">Option 11</Menu.Item>\n          <Menu.Item key="12">Option 12</Menu.Item>\n        </SubMenu>\n      </Menu>\n    );\n  }\n}\n\nReactDOM.render(<Sider />, mountNode);\n')),(0,r.kt)("h3",{id:"\u7f29\u8d77\u5185\u5d4c\u83dc\u5355"},"\u7f29\u8d77\u5185\u5d4c\u83dc\u5355"),(0,r.kt)("p",null,"\u5185\u5d4c\u83dc\u5355\u53ef\u4ee5\u88ab\u7f29\u8d77/\u5c55\u5f00\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { SubMenu } = Menu;\n\nclass App extends React.Component {\n  state = {\n    collapsed: false,\n  };\n\n  toggleCollapsed = () => {\n    this.setState({\n      collapsed: !this.state.collapsed,\n    });\n  };\n\n  render() {\n    return (\n      <div style={{ width: 256 }}>\n        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>\n          <Icon type={this.state.collapsed ? \'menu-unfold\' : \'menu-fold\'} />\n        </Button>\n        <Menu\n          defaultSelectedKeys={[\'1\']}\n          defaultOpenKeys={[\'sub1\']}\n          mode="inline"\n          theme="dark"\n          inlineCollapsed={this.state.collapsed}\n        >\n          <Menu.Item key="1">\n            <Icon type="pie-chart" />\n            <span>Option 1</span>\n          </Menu.Item>\n          <Menu.Item key="2">\n            <Icon type="desktop" />\n            <span>Option 2</span>\n          </Menu.Item>\n          <Menu.Item key="3">\n            <Icon type="inbox" />\n            <span>Option 3</span>\n          </Menu.Item>\n          <SubMenu\n            key="sub1"\n            title={\n              <span>\n                <Icon type="mail" />\n                <span>Navigation One</span>\n              </span>\n            }\n          >\n            <Menu.Item key="5">Option 5</Menu.Item>\n            <Menu.Item key="6">Option 6</Menu.Item>\n            <Menu.Item key="7">Option 7</Menu.Item>\n            <Menu.Item key="8">Option 8</Menu.Item>\n          </SubMenu>\n          <SubMenu\n            key="sub2"\n            title={\n              <span>\n                <Icon type="appstore" />\n                <span>Navigation Two</span>\n              </span>\n            }\n          >\n            <Menu.Item key="9">Option 9</Menu.Item>\n            <Menu.Item key="10">Option 10</Menu.Item>\n            <SubMenu key="sub3" title="Submenu">\n              <Menu.Item key="11">Option 11</Menu.Item>\n              <Menu.Item key="12">Option 12</Menu.Item>\n            </SubMenu>\n          </SubMenu>\n        </Menu>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,r.kt)("h3",{id:"\u53ea\u5c55\u5f00\u5f53\u524d\u7236\u7ea7\u83dc\u5355"},"\u53ea\u5c55\u5f00\u5f53\u524d\u7236\u7ea7\u83dc\u5355"),(0,r.kt)("p",null,"\u70b9\u51fb\u83dc\u5355\uff0c\u6536\u8d77\u5176\u4ed6\u5c55\u5f00\u7684\u6240\u6709\u83dc\u5355\uff0c\u4fdd\u6301\u83dc\u5355\u805a\u7126\u7b80\u6d01\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { SubMenu } = Menu;\n\nclass Sider extends React.Component {\n  // submenu keys of first level\n  rootSubmenuKeys = [\'sub1\', \'sub2\', \'sub4\'];\n\n  state = {\n    openKeys: [\'sub1\'],\n  };\n\n  onOpenChange = openKeys => {\n    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);\n    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {\n      this.setState({ openKeys });\n    } else {\n      this.setState({\n        openKeys: latestOpenKey ? [latestOpenKey] : [],\n      });\n    }\n  };\n\n  render() {\n    return (\n      <Menu\n        mode="inline"\n        openKeys={this.state.openKeys}\n        onOpenChange={this.onOpenChange}\n        style={{ width: 256 }}\n      >\n        <SubMenu\n          key="sub1"\n          title={\n            <span>\n              <Icon type="mail" />\n              <span>Navigation One</span>\n            </span>\n          }\n        >\n          <Menu.Item key="1">Option 1</Menu.Item>\n          <Menu.Item key="2">Option 2</Menu.Item>\n          <Menu.Item key="3">Option 3</Menu.Item>\n          <Menu.Item key="4">Option 4</Menu.Item>\n        </SubMenu>\n        <SubMenu\n          key="sub2"\n          title={\n            <span>\n              <Icon type="appstore" />\n              <span>Navigation Two</span>\n            </span>\n          }\n        >\n          <Menu.Item key="5">Option 5</Menu.Item>\n          <Menu.Item key="6">Option 6</Menu.Item>\n          <SubMenu key="sub3" title="Submenu">\n            <Menu.Item key="7">Option 7</Menu.Item>\n            <Menu.Item key="8">Option 8</Menu.Item>\n          </SubMenu>\n        </SubMenu>\n        <SubMenu\n          key="sub4"\n          title={\n            <span>\n              <Icon type="setting" />\n              <span>Navigation Three</span>\n            </span>\n          }\n        >\n          <Menu.Item key="9">Option 9</Menu.Item>\n          <Menu.Item key="10">Option 10</Menu.Item>\n          <Menu.Item key="11">Option 11</Menu.Item>\n          <Menu.Item key="12">Option 12</Menu.Item>\n        </SubMenu>\n      </Menu>\n    );\n  }\n}\n\nReactDOM.render(<Sider />, mountNode);\n')),(0,r.kt)("h3",{id:"\u5782\u76f4\u83dc\u5355"},"\u5782\u76f4\u83dc\u5355"),(0,r.kt)("p",null,"\u5b50\u83dc\u5355\u662f\u5f39\u51fa\u7684\u5f62\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { SubMenu } = Menu;\n\nfunction handleClick(e) {\n  console.log(\'click\', e);\n}\n\nReactDOM.render(\n  <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">\n    <SubMenu\n      key="sub1"\n      title={\n        <span>\n          <Icon type="mail" />\n          <span>Navigation One</span>\n        </span>\n      }\n    >\n      <Menu.ItemGroup title="Item 1">\n        <Menu.Item key="1">Option 1</Menu.Item>\n        <Menu.Item key="2">Option 2</Menu.Item>\n      </Menu.ItemGroup>\n      <Menu.ItemGroup title="Iteom 2">\n        <Menu.Item key="3">Option 3</Menu.Item>\n        <Menu.Item key="4">Option 4</Menu.Item>\n      </Menu.ItemGroup>\n    </SubMenu>\n    <SubMenu\n      key="sub2"\n      title={\n        <span>\n          <Icon type="appstore" />\n          <span>Navigation Two</span>\n        </span>\n      }\n    >\n      <Menu.Item key="5">Option 5</Menu.Item>\n      <Menu.Item key="6">Option 6</Menu.Item>\n      <SubMenu key="sub3" title="Submenu">\n        <Menu.Item key="7">Option 7</Menu.Item>\n        <Menu.Item key="8">Option 8</Menu.Item>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu\n      key="sub4"\n      title={\n        <span>\n          <Icon type="setting" />\n          <span>Navigation Three</span>\n        </span>\n      }\n    >\n      <Menu.Item key="9">Option 9</Menu.Item>\n      <Menu.Item key="10">Option 10</Menu.Item>\n      <Menu.Item key="11">Option 11</Menu.Item>\n      <Menu.Item key="12">Option 12</Menu.Item>\n    </SubMenu>\n  </Menu>,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"\u4e3b\u9898"},"\u4e3b\u9898"),(0,r.kt)("p",null,"\u5185\u5efa\u4e86\u4e24\u5957\u4e3b\u9898 ","`","light|dark","`","\uff0c\u9ed8\u8ba4 ","`","light","`","\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { SubMenu } = Menu;\n\nclass Sider extends React.Component {\n  state = {\n    theme: \'dark\',\n    current: \'1\',\n  };\n\n  changeTheme = value => {\n    this.setState({\n      theme: value ? \'dark\' : \'light\',\n    });\n  };\n\n  handleClick = e => {\n    console.log(\'click \', e);\n    this.setState({\n      current: e.key,\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <Switch\n          checked={this.state.theme === \'dark\'}\n          onChange={this.changeTheme}\n          checkedChildren="Dark"\n          unCheckedChildren="Light"\n        />\n        <br />\n        <br />\n        <Menu\n          theme={this.state.theme}\n          onClick={this.handleClick}\n          style={{ width: 256 }}\n          defaultOpenKeys={[\'sub1\']}\n          selectedKeys={[this.state.current]}\n          mode="inline"\n        >\n          <SubMenu\n            key="sub1"\n            title={\n              <span>\n                <Icon type="mail" />\n                <span>Navigation One</span>\n              </span>\n            }\n          >\n            <Menu.Item key="1">Option 1</Menu.Item>\n            <Menu.Item key="2">Option 2</Menu.Item>\n            <Menu.Item key="3">Option 3</Menu.Item>\n            <Menu.Item key="4">Option 4</Menu.Item>\n          </SubMenu>\n          <SubMenu\n            key="sub2"\n            title={\n              <span>\n                <Icon type="appstore" />\n                <span>Navigation Two</span>\n              </span>\n            }\n          >\n            <Menu.Item key="5">Option 5</Menu.Item>\n            <Menu.Item key="6">Option 6</Menu.Item>\n            <SubMenu key="sub3" title="Submenu">\n              <Menu.Item key="7">Option 7</Menu.Item>\n              <Menu.Item key="8">Option 8</Menu.Item>\n            </SubMenu>\n          </SubMenu>\n          <SubMenu\n            key="sub4"\n            title={\n              <span>\n                <Icon type="setting" />\n                <span>Navigation Three</span>\n              </span>\n            }\n          >\n            <Menu.Item key="9">Option 9</Menu.Item>\n            <Menu.Item key="10">Option 10</Menu.Item>\n            <Menu.Item key="11">Option 11</Menu.Item>\n            <Menu.Item key="12">Option 12</Menu.Item>\n          </SubMenu>\n        </Menu>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Sider />, mountNode);\n')),(0,r.kt)("h3",{id:"\u5207\u6362\u83dc\u5355\u7c7b\u578b"},"\u5207\u6362\u83dc\u5355\u7c7b\u578b"),(0,r.kt)("p",null,"\u5c55\u793a\u52a8\u6001\u5207\u6362\u6a21\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { SubMenu } = Menu;\n\nclass Sider extends React.Component {\n  state = {\n    mode: \'inline\',\n    theme: \'light\',\n  };\n\n  changeMode = value => {\n    this.setState({\n      mode: value ? \'vertical\' : \'inline\',\n    });\n  };\n\n  changeTheme = value => {\n    this.setState({\n      theme: value ? \'dark\' : \'light\',\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <Switch onChange={this.changeMode} /> Change Mode\n        <span className="ant-divider" style={{ margin: \'0 1em\' }} />\n        <Switch onChange={this.changeTheme} /> Change Theme\n        <br />\n        <br />\n        <Menu\n          style={{ width: 256 }}\n          defaultSelectedKeys={[\'1\']}\n          defaultOpenKeys={[\'sub1\']}\n          mode={this.state.mode}\n          theme={this.state.theme}\n        >\n          <Menu.Item key="1">\n            <Icon type="mail" />\n            Navigation One\n          </Menu.Item>\n          <Menu.Item key="2">\n            <Icon type="calendar" />\n            Navigation Two\n          </Menu.Item>\n          <SubMenu\n            key="sub1"\n            title={\n              <span>\n                <Icon type="appstore" />\n                <span>Navigation Three</span>\n              </span>\n            }\n          >\n            <Menu.Item key="3">Option 3</Menu.Item>\n            <Menu.Item key="4">Option 4</Menu.Item>\n            <SubMenu key="sub1-2" title="Submenu">\n              <Menu.Item key="5">Option 5</Menu.Item>\n              <Menu.Item key="6">Option 6</Menu.Item>\n            </SubMenu>\n          </SubMenu>\n          <SubMenu\n            key="sub2"\n            title={\n              <span>\n                <Icon type="setting" />\n                <span>Navigation Four</span>\n              </span>\n            }\n          >\n            <Menu.Item key="7">Option 7</Menu.Item>\n            <Menu.Item key="8">Option 8</Menu.Item>\n            <Menu.Item key="9">Option 9</Menu.Item>\n            <Menu.Item key="10">Option 10</Menu.Item>\n          </SubMenu>\n        </Menu>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Sider />, mountNode);\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Menu>\n  <Menu.Item>\u83dc\u5355\u9879</Menu.Item>\n  <SubMenu title="\u5b50\u83dc\u5355">\n    <Menu.Item>\u5b50\u83dc\u5355\u9879</Menu.Item>\n  </SubMenu>\n</Menu>\n')),(0,r.kt)("h3",{id:"menu"},"Menu"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultOpenKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5c55\u5f00\u7684 SubMenu \u83dc\u5355\u9879 key \u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultSelectedKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u9009\u4e2d\u7684\u83dc\u5355\u9879 key \u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceSubMenuRender"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5b50\u83dc\u5355\u5c55\u793a\u4e4b\u524d\u5c31\u6e32\u67d3\u8fdb DOM"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlineCollapsed"),(0,r.kt)("td",{parentName:"tr",align:null},"inline \u65f6\u83dc\u5355\u662f\u5426\u6536\u8d77\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlineIndent"),(0,r.kt)("td",{parentName:"tr",align:null},"inline \u6a21\u5f0f\u7684\u83dc\u5355\u7f29\u8fdb\u5bbd\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u83dc\u5355\u7c7b\u578b\uff0c\u73b0\u5728\u652f\u6301\u5782\u76f4\u3001\u6c34\u5e73\u3001\u548c\u5185\u5d4c\u6a21\u5f0f\u4e09\u79cd"),(0,r.kt)("td",{parentName:"tr",align:null},"string: ",(0,r.kt)("inlineCode",{parentName:"td"},"vertical")," ",(0,r.kt)("inlineCode",{parentName:"td"},"horizontal")," ",(0,r.kt)("inlineCode",{parentName:"td"},"inline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vertical")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"multiple"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8\u591a\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5c55\u5f00\u7684 SubMenu \u83dc\u5355\u9879 key \u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8\u9009\u4e2d"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectedKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9009\u4e2d\u7684\u83dc\u5355\u9879 key \u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"style"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u8282\u70b9\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subMenuCloseDelay"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u9f20\u6807\u79bb\u5f00\u5b50\u83dc\u5355\u540e\u5173\u95ed\u5ef6\u65f6\uff0c\u5355\u4f4d\uff1a\u79d2"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subMenuOpenDelay"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u9f20\u6807\u8fdb\u5165\u5b50\u83dc\u5355\u540e\u5f00\u542f\u5ef6\u65f6\uff0c\u5355\u4f4d\uff1a\u79d2"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"theme"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u9898\u989c\u8272"),(0,r.kt)("td",{parentName:"tr",align:null},"string: ",(0,r.kt)("inlineCode",{parentName:"td"},"light")," ",(0,r.kt)("inlineCode",{parentName:"td"},"dark")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"light")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClick"),(0,r.kt)("td",{parentName:"tr",align:null},"\u70b9\u51fb MenuItem \u8c03\u7528\u6b64\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"function({ item, key, keyPath, domEvent })"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDeselect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u9009\u4e2d\u65f6\u8c03\u7528\uff0c\u4ec5\u5728 multiple \u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"function({ item, key, keyPath, selectedKeys, domEvent })"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onOpenChange"),(0,r.kt)("td",{parentName:"tr",align:null},"SubMenu \u5c55\u5f00/\u5173\u95ed\u7684\u56de\u8c03"),(0,r.kt)("td",{parentName:"tr",align:null},"function(openKeys: string","[","])"),(0,r.kt)("td",{parentName:"tr",align:null},"noop"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u9009\u4e2d\u65f6\u8c03\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"function({ item, key, keyPath, selectedKeys, domEvent })"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overflowedIndicator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 Menu \u6298\u53e0\u65f6\u7684\u56fe\u6807"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.16.0")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"More options in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-component/menu#api"},"rc-menu"))),(0,r.kt)("h3",{id:"menuitem"},"Menu.Item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"item \u7684\u552f\u4e00\u6807\u5fd7"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6536\u7f29\u65f6\u5c55\u793a\u7684\u60ac\u6d6e\u6807\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3.11.0")))),(0,r.kt)("h3",{id:"menusubmenu"},"Menu.SubMenu"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"popupClassName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u83dc\u5355\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3.22.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u83dc\u5355\u7684\u83dc\u5355\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"Array\\<MenuItem"),(0,r.kt)("td",{parentName:"tr",align:null},"SubMenu>"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u5fd7"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u83dc\u5355\u9879\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onTitleClick"),(0,r.kt)("td",{parentName:"tr",align:null},"\u70b9\u51fb\u5b50\u83dc\u5355\u6807\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"function({ key, domEvent })"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"menuitemgroup"},"Menu.ItemGroup"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4\u7684\u83dc\u5355\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"MenuItem","[","]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4\u6807\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"menudivider"},"Menu.Divider"),(0,r.kt)("p",null,"\u83dc\u5355\u9879\u5206\u5272\u7ebf\uff0c\u53ea\u7528\u5728\u5f39\u51fa\u83dc\u5355\u5185\u3002"))}k.isMDXComponent=!0},30876:(n,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>s});var a=t(2784);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var p=a.createContext({}),m=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},o=function(n){var e=m(n.components);return a.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,p=n.parentName,o=i(n,["components","mdxType","originalType","parentName"]),k=m(t),s=l,g=k["".concat(p,".").concat(s)]||k[s]||d[s]||r;return t?a.createElement(g,u(u({ref:e},o),{},{components:t})):a.createElement(g,u({ref:e},o))}));function s(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,u=new Array(r);u[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:l,u[1]=i;for(var m=2;m<r;m++)u[m]=t[m];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"}}]);