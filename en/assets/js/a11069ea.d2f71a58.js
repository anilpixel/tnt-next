"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3972],{88247:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>u});var a=t(7896),r=t(31461),l=(t(2784),t(30876)),o=["components"],i={type:"Feedback",tags:["Components"],subtitle:null,title:"Drawer"},s=void 0,p={unversionedId:"components/feedback/drawer",id:"components/feedback/drawer",isDocsHomePage:!1,title:"Drawer",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/feedback/drawer.md",sourceDirName:"components/feedback",slug:"/components/feedback/drawer",permalink:"/tnt-next/en/docs/components/feedback/drawer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/feedback/drawer.md",tags:[{label:"Components",permalink:"/tnt-next/en/docs/tags/components"}],version:"current",frontMatter:{type:"Feedback",tags:["Components"],subtitle:null,title:"Drawer"},sidebar:"componentsSidebar",previous:{title:"Alert",permalink:"/tnt-next/en/docs/components/feedback/alert"},next:{title:"Message",permalink:"/tnt-next/en/docs/components/feedback/message"}},d=[{value:"When To Use",id:"when-to-use",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Custom Placement",id:"custom-placement",children:[],level:3},{value:"Render in current dom",id:"render-in-current-dom",children:[],level:3},{value:"Submit form in drawer",id:"submit-form-in-drawer",children:[],level:3},{value:"Preview drawer",id:"preview-drawer",children:[],level:3},{value:"Multi-level drawer",id:"multi-level-drawer",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"A panel which slides in from the edge of the screen."),(0,l.kt)("h2",{id:"when-to-use"},"When To Use"),(0,l.kt)("p",null,"A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use a Form to create or edit a set of information."),(0,l.kt)("li",{parentName:"ul"},"Processing subtasks. When subtasks are too heavy for a Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy."),(0,l.kt)("li",{parentName:"ul"},"When the same Form is needed in multiple places.")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)("p",null,"Basic drawer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'class App extends React.Component {\n  state = { visible: false };\n\n  showDrawer = () => {\n    this.setState({\n      visible: true,\n    });\n  };\n\n  onClose = () => {\n    this.setState({\n      visible: false,\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <Button type="primary" onClick={this.showDrawer}>\n          Open\n        </Button>\n        <Drawer\n          title="Basic Drawer"\n          placement="right"\n          closable={false}\n          onClose={this.onClose}\n          visible={this.state.visible}\n        >\n          <p>Some contents...</p>\n          <p>Some contents...</p>\n          <p>Some contents...</p>\n        </Drawer>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,l.kt)("h3",{id:"custom-placement"},"Custom Placement"),(0,l.kt)("p",null,"The Drawer can appear from any edge of the screen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const RadioGroup = Radio.Group;\n\nclass App extends React.Component {\n  state = { visible: false, placement: \'left\' };\n\n  showDrawer = () => {\n    this.setState({\n      visible: true,\n    });\n  };\n\n  onClose = () => {\n    this.setState({\n      visible: false,\n    });\n  };\n\n  onChange = e => {\n    this.setState({\n      placement: e.target.value,\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <RadioGroup\n          style={{ marginRight: 8 }}\n          defaultValue={this.state.placement}\n          onChange={this.onChange}\n        >\n          <Radio value="top">top</Radio>\n          <Radio value="right">right</Radio>\n          <Radio value="bottom">bottom</Radio>\n          <Radio value="left">left</Radio>\n        </RadioGroup>\n        <Button type="primary" onClick={this.showDrawer}>\n          Open\n        </Button>\n        <Drawer\n          title="Basic Drawer"\n          placement={this.state.placement}\n          closable={false}\n          onClose={this.onClose}\n          visible={this.state.visible}\n        >\n          <p>Some contents...</p>\n          <p>Some contents...</p>\n          <p>Some contents...</p>\n        </Drawer>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,l.kt)("h3",{id:"render-in-current-dom"},"Render in current dom"),(0,l.kt)("p",null,"Render in current dom. custom container, check getContainer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class App extends React.Component {\n  state = { visible: false };\n\n  showDrawer = () => {\n    this.setState({\n      visible: true,\n    });\n  };\n\n  onClose = () => {\n    this.setState({\n      visible: false,\n    });\n  };\n\n  render() {\n    return (\n      <div\n        style={{\n          height: 200,\n          overflow: 'hidden',\n          position: 'relative',\n          border: '1px solid #ebedf0',\n          borderRadius: 2,\n          padding: 48,\n          textAlign: 'center',\n          background: '#fafafa',\n        }}\n      >\n        Render in this\n        <div style={{ marginTop: 16 }}>\n          <Button type=\"primary\" onClick={this.showDrawer}>\n            Open\n          </Button>\n        </div>\n        <Drawer\n          title=\"Basic Drawer\"\n          placement=\"right\"\n          closable={false}\n          onClose={this.onClose}\n          visible={this.state.visible}\n          getContainer={false}\n          style={{ position: 'absolute' }}\n        >\n          <p>Some contents...</p>\n        </Drawer>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,l.kt)("h3",{id:"submit-form-in-drawer"},"Submit form in drawer"),(0,l.kt)("p",null,"Use a form in Drawer with a submit button."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const { Option } = Select;\n\nclass DrawerForm extends React.Component {\n  state = { visible: false };\n\n  showDrawer = () => {\n    this.setState({\n      visible: true,\n    });\n  };\n\n  onClose = () => {\n    this.setState({\n      visible: false,\n    });\n  };\n\n  render() {\n    const { getFieldDecorator } = this.props.form;\n    return (\n      <div>\n        <Button type="primary" onClick={this.showDrawer}>\n          <Icon type="plus" /> New account\n        </Button>\n        <Drawer\n          title="Create a new account"\n          width={720}\n          onClose={this.onClose}\n          visible={this.state.visible}\n          bodyStyle={{ paddingBottom: 80 }}\n        >\n          <Form layout="vertical" hideRequiredMark>\n            <Row gutter={16}>\n              <Col span={12}>\n                <Form.Item label="Name">\n                  {getFieldDecorator(\'name\', {\n                    rules: [{ required: true, message: \'Please enter user name\' }],\n                  })(<Input placeholder="Please enter user name" />)}\n                </Form.Item>\n              </Col>\n              <Col span={12}>\n                <Form.Item label="Url">\n                  {getFieldDecorator(\'url\', {\n                    rules: [{ required: true, message: \'Please enter url\' }],\n                  })(\n                    <Input\n                      style={{ width: \'100%\' }}\n                      addonBefore="http://"\n                      addonAfter=".com"\n                      placeholder="Please enter url"\n                    />,\n                  )}\n                </Form.Item>\n              </Col>\n            </Row>\n            <Row gutter={16}>\n              <Col span={12}>\n                <Form.Item label="Owner">\n                  {getFieldDecorator(\'owner\', {\n                    rules: [{ required: true, message: \'Please select an owner\' }],\n                  })(\n                    <Select placeholder="Please select an owner">\n                      <Option value="xiao">Xiaoxiao Fu</Option>\n                      <Option value="mao">Maomao Zhou</Option>\n                    </Select>,\n                  )}\n                </Form.Item>\n              </Col>\n              <Col span={12}>\n                <Form.Item label="Type">\n                  {getFieldDecorator(\'type\', {\n                    rules: [{ required: true, message: \'Please choose the type\' }],\n                  })(\n                    <Select placeholder="Please choose the type">\n                      <Option value="private">Private</Option>\n                      <Option value="public">Public</Option>\n                    </Select>,\n                  )}\n                </Form.Item>\n              </Col>\n            </Row>\n            <Row gutter={16}>\n              <Col span={12}>\n                <Form.Item label="Approver">\n                  {getFieldDecorator(\'approver\', {\n                    rules: [{ required: true, message: \'Please choose the approver\' }],\n                  })(\n                    <Select placeholder="Please choose the approver">\n                      <Option value="jack">Jack Ma</Option>\n                      <Option value="tom">Tom Liu</Option>\n                    </Select>,\n                  )}\n                </Form.Item>\n              </Col>\n              <Col span={12}>\n                <Form.Item label="DateTime">\n                  {getFieldDecorator(\'dateTime\', {\n                    rules: [{ required: true, message: \'Please choose the dateTime\' }],\n                  })(\n                    <DatePicker.RangePicker\n                      style={{ width: \'100%\' }}\n                      getPopupContainer={trigger => trigger.parentNode}\n                    />,\n                  )}\n                </Form.Item>\n              </Col>\n            </Row>\n            <Row gutter={16}>\n              <Col span={24}>\n                <Form.Item label="Description">\n                  {getFieldDecorator(\'description\', {\n                    rules: [\n                      {\n                        required: true,\n                        message: \'please enter url description\',\n                      },\n                    ],\n                  })(<Input.TextArea rows={4} placeholder="please enter url description" />)}\n                </Form.Item>\n              </Col>\n            </Row>\n          </Form>\n          <div\n            style={{\n              position: \'absolute\',\n              right: 0,\n              bottom: 0,\n              width: \'100%\',\n              borderTop: \'1px solid #e9e9e9\',\n              padding: \'10px 16px\',\n              background: \'#fff\',\n              textAlign: \'right\',\n            }}\n          >\n            <Button onClick={this.onClose} style={{ marginRight: 8 }}>\n              Cancel\n            </Button>\n            <Button onClick={this.onClose} type="primary">\n              Submit\n            </Button>\n          </div>\n        </Drawer>\n      </div>\n    );\n  }\n}\n\nconst App = Form.create()(DrawerForm);\n\nReactDOM.render(<App />, mountNode);\n')),(0,l.kt)("h3",{id:"preview-drawer"},"Preview drawer"),(0,l.kt)("p",null,"Use Drawer to quickly preview details of an object, such as those in a list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const pStyle = {\n  fontSize: 16,\n  color: \'rgba(0,0,0,0.85)\',\n  lineHeight: \'24px\',\n  display: \'block\',\n  marginBottom: 16,\n};\n\nconst DescriptionItem = ({ title, content }) => (\n  <div\n    style={{\n      fontSize: 14,\n      lineHeight: \'22px\',\n      marginBottom: 7,\n      color: \'rgba(0,0,0,0.65)\',\n    }}\n  >\n    <p\n      style={{\n        marginRight: 8,\n        display: \'inline-block\',\n        color: \'rgba(0,0,0,0.85)\',\n      }}\n    >\n      {title}:\n    </p>\n    {content}\n  </div>\n);\n\nclass App extends React.Component {\n  state = { visible: false };\n\n  showDrawer = () => {\n    this.setState({\n      visible: true,\n    });\n  };\n\n  onClose = () => {\n    this.setState({\n      visible: false,\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <List\n          dataSource={[\n            {\n              name: \'Lily\',\n            },\n            {\n              name: \'Lily\',\n            },\n          ]}\n          bordered\n          renderItem={item => (\n            <List.Item\n              key={item.id}\n              actions={[\n                <a onClick={this.showDrawer} key={`a-${item.id}`}>\n                  View Profile\n                </a>,\n              ]}\n            >\n              <List.Item.Meta\n                avatar={\n                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />\n                }\n                title={<a href="https://ant.design/index-cn">{item.name}</a>}\n                description="Progresser XTech"\n              />\n            </List.Item>\n          )}\n        />\n        <Drawer\n          width={640}\n          placement="right"\n          closable={false}\n          onClose={this.onClose}\n          visible={this.state.visible}\n        >\n          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>\n          <p style={pStyle}>Personal</p>\n          <Row>\n            <Col span={12}>\n              <DescriptionItem title="Full Name" content="Lily" />\n            </Col>\n            <Col span={12}>\n              <DescriptionItem title="Account" content="AntDesign@example.com" />\n            </Col>\n          </Row>\n          <Row>\n            <Col span={12}>\n              <DescriptionItem title="City" content="HangZhou" />\n            </Col>\n            <Col span={12}>\n              <DescriptionItem title="Country" content="China\ud83c\udde8\ud83c\uddf3" />\n            </Col>\n          </Row>\n          <Row>\n            <Col span={12}>\n              <DescriptionItem title="Birthday" content="February 2,1900" />\n            </Col>\n            <Col span={12}>\n              <DescriptionItem title="Website" content="-" />\n            </Col>\n          </Row>\n          <Row>\n            <Col span={24}>\n              <DescriptionItem\n                title="Message"\n                content="Make things as simple as possible but no simpler."\n              />\n            </Col>\n          </Row>\n          <Divider />\n          <p style={pStyle}>Company</p>\n          <Row>\n            <Col span={12}>\n              <DescriptionItem title="Position" content="Programmer" />\n            </Col>\n            <Col span={12}>\n              <DescriptionItem title="Responsibilities" content="Coding" />\n            </Col>\n          </Row>\n          <Row>\n            <Col span={12}>\n              <DescriptionItem title="Department" content="XTech" />\n            </Col>\n            <Col span={12}>\n              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />\n            </Col>\n          </Row>\n          <Row>\n            <Col span={24}>\n              <DescriptionItem\n                title="Skills"\n                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."\n              />\n            </Col>\n          </Row>\n          <Divider />\n          <p style={pStyle}>Contacts</p>\n          <Row>\n            <Col span={12}>\n              <DescriptionItem title="Email" content="AntDesign@example.com" />\n            </Col>\n            <Col span={12}>\n              <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />\n            </Col>\n          </Row>\n          <Row>\n            <Col span={24}>\n              <DescriptionItem\n                title="Github"\n                content={\n                  <a href="http://github.com/ant-design/ant-design/">\n                    github.com/ant-design/ant-design/\n                  </a>\n                }\n              />\n            </Col>\n          </Row>\n        </Drawer>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n')),(0,l.kt)("h3",{id:"multi-level-drawer"},"Multi-level drawer"),(0,l.kt)("p",null,"Open a new drawer on top of an existing drawer to handle multi branch tasks."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class App extends React.Component {\n  state = { visible: false, childrenDrawer: false };\n\n  showDrawer = () => {\n    this.setState({\n      visible: true,\n    });\n  };\n\n  onClose = () => {\n    this.setState({\n      visible: false,\n    });\n  };\n\n  showChildrenDrawer = () => {\n    this.setState({\n      childrenDrawer: true,\n    });\n  };\n\n  onChildrenDrawerClose = () => {\n    this.setState({\n      childrenDrawer: false,\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <Button type=\"primary\" onClick={this.showDrawer}>\n          Open drawer\n        </Button>\n        <Drawer\n          title=\"Multi-level drawer\"\n          width={520}\n          closable={false}\n          onClose={this.onClose}\n          visible={this.state.visible}\n        >\n          <Button type=\"primary\" onClick={this.showChildrenDrawer}>\n            Two-level drawer\n          </Button>\n          <Drawer\n            title=\"Two-level Drawer\"\n            width={320}\n            closable={false}\n            onClose={this.onChildrenDrawerClose}\n            visible={this.state.childrenDrawer}\n          >\n            This is two-level drawer\n          </Drawer>\n          <div\n            style={{\n              position: 'absolute',\n              bottom: 0,\n              width: '100%',\n              borderTop: '1px solid #e8e8e8',\n              padding: '10px 16px',\n              textAlign: 'right',\n              left: 0,\n              background: '#fff',\n              borderRadius: '0 0 4px 4px',\n            }}\n          >\n            <Button\n              style={{\n                marginRight: 8,\n              }}\n              onClick={this.onClose}\n            >\n              Cancel\n            </Button>\n            <Button onClick={this.onClose} type=\"primary\">\n              Submit\n            </Button>\n          </div>\n        </Drawer>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closable"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether a close (x) button is visible on top right of the Drawer dialog or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destroyOnClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to unmount child components on closing drawer or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getContainer"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the mounted node for Drawer."),(0,l.kt)("td",{parentName:"tr",align:null},"HTMLElement"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => HTMLElement")),(0,l.kt)("td",{parentName:"tr",align:null},"Selectors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mask"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show mask or not."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maskClosable"),(0,l.kt)("td",{parentName:"tr",align:null},"Clicking on the mask (area outside the Drawer) to close the Drawer or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maskStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"Style for Drawer's mask element."),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"style"),(0,l.kt)("td",{parentName:"tr",align:null},"Style of wrapper element which ",(0,l.kt)("strong",{parentName:"td"},"contains mask")," compare to ",(0,l.kt)("inlineCode",{parentName:"td"},"drawerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drawerStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the popup layer element"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.24.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the drawer header part"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.24.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bodyStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the drawer content part"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.12.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"The title for Drawer."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the Drawer dialog is visible or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"Width of the Drawer dialog."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"256")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"placement is ",(0,l.kt)("inlineCode",{parentName:"td"},"top")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"bottom"),", height of the Drawer dialog."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"256")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"className"),(0,l.kt)("td",{parentName:"tr",align:null},"The class name of the container of the Drawer dialog."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.8.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"z-index")," of the Drawer."),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"placement"),(0,l.kt)("td",{parentName:"tr",align:null},"The placement of the Drawer."),(0,l.kt)("td",{parentName:"tr",align:null},"'top'"),(0,l.kt)("td",{parentName:"tr",align:null},"'right'"),(0,l.kt)("td",{parentName:"tr",align:null},"'bottom'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a callback that will be called when a user clicks mask, close button or Cancel button."),(0,l.kt)("td",{parentName:"tr",align:null},"function(e)"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterVisibleChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback after the animation ends when switching drawers."),(0,l.kt)("td",{parentName:"tr",align:null},"function(visible)"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"3.17.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyboard"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether support press esc to close"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"3.19.8")))))}u.isMDXComponent=!0},30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);