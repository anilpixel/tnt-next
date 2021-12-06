"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8707],{16093:(t,n,e)=>{e.r(n),e.d(n,{frontMatter:()=>d,contentTitle:()=>o,metadata:()=>s,toc:()=>p,default:()=>u});var a=e(7896),l=e(31461),r=(e(2784),e(30876)),i=["components"],d={tags:["Components"],type:"\u6570\u636e\u5c55\u793a",title:"List \u5217\u8868",cols:1},o=void 0,s={unversionedId:"components/data-display/list",id:"components/data-display/list",isDocsHomePage:!1,title:"List \u5217\u8868",description:"----",source:"@site/docs/components/data-display/list.md",sourceDirName:"components/data-display",slug:"/components/data-display/list",permalink:"/tnt-next/docs/components/data-display/list",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/components/data-display/list.md",tags:[{label:"Components",permalink:"/tnt-next/docs/tags/components"}],version:"current",frontMatter:{tags:["Components"],type:"\u6570\u636e\u5c55\u793a",title:"List \u5217\u8868",cols:1},sidebar:"componentsSidebar",previous:{title:"Empty \u7a7a\u72b6\u6001",permalink:"/tnt-next/docs/components/data-display/empty"},next:{title:"Popover \u6c14\u6ce1\u5361\u7247",permalink:"/tnt-next/docs/components/data-display/popover"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u7b80\u5355\u5217\u8868",id:"\u7b80\u5355\u5217\u8868",children:[],level:3},{value:"\u57fa\u7840\u5217\u8868",id:"\u57fa\u7840\u5217\u8868",children:[],level:3},{value:"\u52a0\u8f7d\u66f4\u591a",id:"\u52a0\u8f7d\u66f4\u591a",children:[],level:3},{value:"\u7ad6\u6392\u5217\u8868\u6837\u5f0f",id:"\u7ad6\u6392\u5217\u8868\u6837\u5f0f",children:[],level:3},{value:"\u6805\u683c\u5217\u8868",id:"\u6805\u683c\u5217\u8868",children:[],level:3},{value:"\u54cd\u5e94\u5f0f\u7684\u6805\u683c\u5217\u8868",id:"\u54cd\u5e94\u5f0f\u7684\u6805\u683c\u5217\u8868",children:[],level:3},{value:"\u6eda\u52a8\u52a0\u8f7d",id:"\u6eda\u52a8\u52a0\u8f7d",children:[],level:3},{value:"\u6eda\u52a8\u52a0\u8f7d\u65e0\u9650\u957f\u5217\u8868",id:"\u6eda\u52a8\u52a0\u8f7d\u65e0\u9650\u957f\u5217\u8868",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"List",id:"list",children:[],level:3},{value:"pagination",id:"pagination",children:[],level:3},{value:"List grid props",id:"list-grid-props",children:[],level:3},{value:"List.Item",id:"listitem",children:[],level:3},{value:"List.Item.Meta",id:"listitemmeta",children:[],level:3}],level:2}],m={toc:p};function u(t){var n=t.components,e=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u901a\u7528\u5217\u8868\u3002"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u6700\u57fa\u7840\u7684\u5217\u8868\u5c55\u793a\uff0c\u53ef\u627f\u8f7d\u6587\u5b57\u3001\u5217\u8868\u3001\u56fe\u7247\u3001\u6bb5\u843d\uff0c\u5e38\u7528\u4e8e\u540e\u53f0\u6570\u636e\u5c55\u793a\u9875\u9762\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u7b80\u5355\u5217\u8868"},"\u7b80\u5355\u5217\u8868"),(0,r.kt)("p",null,"\u5217\u8868\u62e5\u6709\u5927\u3001\u4e2d\u3001\u5c0f\u4e09\u79cd\u5c3a\u5bf8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const data = [\n  'Racing car sprays burning fuel into crowd.',\n  'Japanese princess to wed commoner.',\n  'Australian walks 100km after outback crash.',\n  'Man charged over missing wedding girl.',\n  'Los Angeles battles huge wildfires.',\n];\n\nReactDOM.render(\n  <div>\n    <h3 style={{ marginBottom: 16 }}>Default Size</h3>\n    <List\n      header={<div>Header</div>}\n      footer={<div>Footer</div>}\n      bordered\n      dataSource={data}\n      renderItem={item => (\n        <List.Item>\n          <Typography.Text mark>[ITEM]</Typography.Text> {item}\n        </List.Item>\n      )}\n    />\n    <h3 style={{ margin: '16px 0' }}>Small Size</h3>\n    <List\n      size=\"small\"\n      header={<div>Header</div>}\n      footer={<div>Footer</div>}\n      bordered\n      dataSource={data}\n      renderItem={item => <List.Item>{item}</List.Item>}\n    />\n    <h3 style={{ margin: '16px 0' }}>Large Size</h3>\n    <List\n      size=\"large\"\n      header={<div>Header</div>}\n      footer={<div>Footer</div>}\n      bordered\n      dataSource={data}\n      renderItem={item => <List.Item>{item}</List.Item>}\n    />\n  </div>,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u57fa\u7840\u5217\u8868"},"\u57fa\u7840\u5217\u8868"),(0,r.kt)("p",null,"\u57fa\u7840\u5217\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const data = [\n  {\n    title: 'Ant Design Title 1',\n  },\n  {\n    title: 'Ant Design Title 2',\n  },\n  {\n    title: 'Ant Design Title 3',\n  },\n  {\n    title: 'Ant Design Title 4',\n  },\n];\n\nReactDOM.render(\n  <List\n    itemLayout=\"horizontal\"\n    dataSource={data}\n    renderItem={item => (\n      <List.Item>\n        <List.Item.Meta\n          avatar={<Avatar src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" />}\n          title={<a href=\"https://ant.design\">{item.title}</a>}\n          description=\"Ant Design, a design language for background applications, is refined by Ant UED Team\"\n        />\n      </List.Item>\n    )}\n  />,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u52a0\u8f7d\u66f4\u591a"},"\u52a0\u8f7d\u66f4\u591a"),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"loadMore")," \u5c5e\u6027\u5b9e\u73b0\u52a0\u8f7d\u66f4\u591a\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const count = 3;\nconst fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;\n\nclass LoadMoreList extends React.Component {\n  state = {\n    initLoading: true,\n    loading: false,\n    data: [],\n    list: [],\n  };\n\n  componentDidMount() {\n    this.getData(res => {\n      this.setState({\n        initLoading: false,\n        data: res.results,\n        list: res.results,\n      });\n    });\n  }\n\n  getData = callback => {\n    axios({\n      url: fakeDataUrl,\n      type: 'json',\n      method: 'get',\n      headers: { 'content-type': 'application/json' }\n    }).then(res => {\n      callback(res.data);\n    });\n  };\n\n  onLoadMore = () => {\n    this.setState({\n      loading: true,\n      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),\n    });\n    this.getData(res => {\n      const data = this.state.data.concat(res.results);\n      this.setState(\n        {\n          data,\n          list: data,\n          loading: false,\n        },\n        () => {\n          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.\n          // In real scene, you can using public method of react-virtualized:\n          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized\n          window.dispatchEvent(new Event('resize'));\n        },\n      );\n    });\n  };\n\n  render() {\n    const { initLoading, loading, list } = this.state;\n    const loadMore =\n      !initLoading && !loading ? (\n        <div\n          style={{\n            textAlign: 'center',\n            marginTop: 12,\n            height: 32,\n            lineHeight: '32px',\n          }}\n        >\n          <Button onClick={this.onLoadMore}>loading more</Button>\n        </div>\n      ) : null;\n\n    return (\n      <List\n        className=\"demo-loadmore-list\"\n        loading={initLoading}\n        itemLayout=\"horizontal\"\n        loadMore={loadMore}\n        dataSource={list}\n        renderItem={item => (\n          <List.Item\n            actions={[<a key=\"list-loadmore-edit\">edit</a>, <a key=\"list-loadmore-more\">more</a>]}\n          >\n            <Skeleton avatar title={false} loading={item.loading} active>\n              <List.Item.Meta\n                avatar={\n                  <Avatar src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" />\n                }\n                title={<a href=\"https://ant.design\">{item.name.last}</a>}\n                description=\"Ant Design, a design language for background applications, is refined by Ant UED Team\"\n              />\n              <div>content</div>\n            </Skeleton>\n          </List.Item>\n        )}\n      />\n    );\n  }\n}\n\nReactDOM.render(<LoadMoreList />, mountNode);\n")),(0,r.kt)("h3",{id:"\u7ad6\u6392\u5217\u8868\u6837\u5f0f"},"\u7ad6\u6392\u5217\u8868\u6837\u5f0f"),(0,r.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"itemLayout")," \u5c5e\u6027\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"vertical")," \u53ef\u5b9e\u73b0\u7ad6\u6392\u5217\u8868\u6837\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const listData = [];\nfor (let i = 0; i < 23; i++) {\n  listData.push({\n    href: \'http://ant.design\',\n    title: `ant design part ${i}`,\n    avatar: \'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\',\n    description:\n      \'Ant Design, a design language for background applications, is refined by Ant UED Team.\',\n    content:\n      \'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\',\n  });\n}\n\nconst IconText = ({ type, text }) => (\n  <span>\n    <Icon type={type} style={{ marginRight: 8 }} />\n    {text}\n  </span>\n);\n\nReactDOM.render(\n  <List\n    itemLayout="vertical"\n    size="large"\n    pagination={{\n      onChange: page => {\n        console.log(page);\n      },\n      pageSize: 3,\n    }}\n    dataSource={listData}\n    footer={\n      <div>\n        <b>ant design</b> footer part\n      </div>\n    }\n    renderItem={item => (\n      <List.Item\n        key={item.title}\n        actions={[\n          <IconText type="star-o" text="156" key="list-vertical-star-o" />,\n          <IconText type="like-o" text="156" key="list-vertical-like-o" />,\n          <IconText type="message" text="2" key="list-vertical-message" />,\n        ]}\n        extra={\n          <img\n            width={272}\n            alt="logo"\n            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"\n          />\n        }\n      >\n        <List.Item.Meta\n          avatar={<Avatar src={item.avatar} />}\n          title={<a href={item.href}>{item.title}</a>}\n          description={item.description}\n        />\n        {item.content}\n      </List.Item>\n    )}\n  />,\n  mountNode,\n);\n')),(0,r.kt)("h3",{id:"\u6805\u683c\u5217\u8868"},"\u6805\u683c\u5217\u8868"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"grid")," \u5c5e\u6027\u6765\u5b9e\u73b0\u6805\u683c\u5217\u8868\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"column")," \u53ef\u8bbe\u7f6e\u671f\u671b\u663e\u793a\u7684\u5217\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const data = [\n  {\n    title: 'Title 1',\n  },\n  {\n    title: 'Title 2',\n  },\n  {\n    title: 'Title 3',\n  },\n  {\n    title: 'Title 4',\n  },\n];\n\nReactDOM.render(\n  <List\n    grid={{ gutter: 16, column: 4 }}\n    dataSource={data}\n    renderItem={item => (\n      <List.Item>\n        <Card title={item.title}>Card content</Card>\n      </List.Item>\n    )}\n  />,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u54cd\u5e94\u5f0f\u7684\u6805\u683c\u5217\u8868"},"\u54cd\u5e94\u5f0f\u7684\u6805\u683c\u5217\u8868"),(0,r.kt)("p",null,"\u54cd\u5e94\u5f0f\u7684\u6805\u683c\u5217\u8868\u3002\u5c3a\u5bf8\u4e0e ","[","Layout Grid]","(",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/grid-cn/#Col"},"https://ant.design/components/grid-cn/#Col"),") \u4fdd\u6301\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const data = [\n  {\n    title: 'Title 1',\n  },\n  {\n    title: 'Title 2',\n  },\n  {\n    title: 'Title 3',\n  },\n  {\n    title: 'Title 4',\n  },\n  {\n    title: 'Title 5',\n  },\n  {\n    title: 'Title 6',\n  },\n];\n\nReactDOM.render(\n  <List\n    grid={{\n      gutter: 16,\n      xs: 1,\n      sm: 2,\n      md: 4,\n      lg: 4,\n      xl: 6,\n      xxl: 3,\n    }}\n    dataSource={data}\n    renderItem={item => (\n      <List.Item>\n        <Card title={item.title}>Card content</Card>\n      </List.Item>\n    )}\n  />,\n  mountNode,\n);\n")),(0,r.kt)("h3",{id:"\u6eda\u52a8\u52a0\u8f7d"},"\u6eda\u52a8\u52a0\u8f7d"),(0,r.kt)("p",null,"\u7ed3\u5408 ","[","react-infinite-scroller]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CassetteRocks/react-infinite-scroller"},"https://github.com/CassetteRocks/react-infinite-scroller"),") \u5b9e\u73b0\u6eda\u52a8\u81ea\u52a8\u52a0\u8f7d\u5217\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';\n\nclass InfiniteListExample extends React.Component {\n  state = {\n    data: [],\n    loading: false,\n    hasMore: true,\n  };\n\n  componentDidMount() {\n    this.fetchData(res => {\n      this.setState({\n        data: res.results,\n      });\n    });\n  }\n\n  fetchData = callback => {\n    axios({\n      url: fakeDataUrl,\n      type: 'json',\n      method: 'get',\n      headers: { 'content-type': 'application/json' }\n    }).then(res => {\n      callback(res.data);\n    });\n  };\n\n  handleInfiniteOnLoad = () => {\n    let { data } = this.state;\n    this.setState({\n      loading: true,\n    });\n    if (data.length > 14) {\n      message.warning('Infinite List loaded all');\n      this.setState({\n        hasMore: false,\n        loading: false,\n      });\n      return;\n    }\n    this.fetchData(res => {\n      data = data.concat(res.results);\n      this.setState({\n        data,\n        loading: false,\n      });\n    });\n  };\n\n  render() {\n    return (\n      <div className=\"demo-infinite-container\">\n        <InfiniteScroll\n          initialLoad={false}\n          pageStart={0}\n          loadMore={this.handleInfiniteOnLoad}\n          hasMore={!this.state.loading && this.state.hasMore}\n          useWindow={false}\n        >\n          <List\n            dataSource={this.state.data}\n            renderItem={item => (\n              <List.Item key={item.id}>\n                <List.Item.Meta\n                  avatar={\n                    <Avatar src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" />\n                  }\n                  title={<a href=\"https://ant.design\">{item.name.last}</a>}\n                  description={item.email}\n                />\n                <div>Content</div>\n              </List.Item>\n            )}\n          >\n            {this.state.loading && this.state.hasMore && (\n              <div className=\"demo-loading-container\">\n                <Spin />\n              </div>\n            )}\n          </List>\n        </InfiniteScroll>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<InfiniteListExample />, mountNode);\n")),(0,r.kt)("h3",{id:"\u6eda\u52a8\u52a0\u8f7d\u65e0\u9650\u957f\u5217\u8868"},"\u6eda\u52a8\u52a0\u8f7d\u65e0\u9650\u957f\u5217\u8868"),(0,r.kt)("p",null,"\u7ed3\u5408 ","[","react-virtualized]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bvaughn/react-virtualized"},"https://github.com/bvaughn/react-virtualized"),") \u5b9e\u73b0\u6eda\u52a8\u52a0\u8f7d\u65e0\u9650\u957f\u5217\u8868\uff0c\u5e26\u6709\u865a\u62df\u5316\uff08","[","virtualization]","(",(0,r.kt)("a",{parentName:"p",href:"https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/)%EF%BC%89%E5%8A%9F%E8%83%BD%EF%BC%8C%E8%83%BD%E5%A4%9F%E6%8F%90%E9%AB%98%E6%95%B0%E6%8D%AE%E9%87%8F%E5%A4%A7%E6%97%B6%E5%80%99%E9%95%BF%E5%88%97%E8%A1%A8%E7%9A%84%E6%80%A7%E8%83%BD%E3%80%82"},"https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/)\uff09\u529f\u80fd\uff0c\u80fd\u591f\u63d0\u9ad8\u6570\u636e\u91cf\u5927\u65f6\u5019\u957f\u5217\u8868\u7684\u6027\u80fd\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';\n\nclass VirtualizedExample extends React.Component {\n  state = {\n    data: [],\n    loading: false,\n  };\n\n  loadedRowsMap = {};\n\n  componentDidMount() {\n    this.fetchData(res => {\n      this.setState({\n        data: res.results,\n      });\n    });\n  }\n\n  fetchData = callback => {\n    axios({\n      url: fakeDataUrl,\n      type: 'json',\n      method: 'get',\n      headers: { 'content-type': 'application/json' }\n    }).then(res => {\n      callback(res.data);\n    });\n  };\n\n  handleInfiniteOnLoad = ({ startIndex, stopIndex }) => {\n    let { data } = this.state;\n    this.setState({\n      loading: true,\n    });\n    for (let i = startIndex; i <= stopIndex; i++) {\n      // 1 means loading\n      this.loadedRowsMap[i] = 1;\n    }\n    if (data.length > 19) {\n      message.warning('Virtualized List loaded all');\n      this.setState({\n        loading: false,\n      });\n      return;\n    }\n    this.fetchData(res => {\n      data = data.concat(res.results);\n      this.setState({\n        data,\n        loading: false,\n      });\n    });\n  };\n\n  isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];\n\n  renderItem = ({ index, key, style }) => {\n    const { data } = this.state;\n    const item = data[index];\n    return (\n      <List.Item key={key} style={style}>\n        <List.Item.Meta\n          avatar={<Avatar src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" />}\n          title={<a href=\"https://ant.design\">{item.name.last}</a>}\n          description={item.email}\n        />\n        <div>Content</div>\n      </List.Item>\n    );\n  };\n\n  render() {\n    const { data } = this.state;\n    const vlist = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered, width }) => (\n      <VList\n        autoHeight\n        height={height}\n        isScrolling={isScrolling}\n        onScroll={onChildScroll}\n        overscanRowCount={2}\n        rowCount={data.length}\n        rowHeight={73}\n        rowRenderer={this.renderItem}\n        onRowsRendered={onRowsRendered}\n        scrollTop={scrollTop}\n        width={width}\n      />\n    );\n    const autoSize = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered }) => (\n      <AutoSizer disableHeight>\n        {({ width }) =>\n          vlist({\n            height,\n            isScrolling,\n            onChildScroll,\n            scrollTop,\n            onRowsRendered,\n            width,\n          })\n        }\n      </AutoSizer>\n    );\n    const infiniteLoader = ({ height, isScrolling, onChildScroll, scrollTop }) => (\n      <InfiniteLoader\n        isRowLoaded={this.isRowLoaded}\n        loadMoreRows={this.handleInfiniteOnLoad}\n        rowCount={data.length}\n      >\n        {({ onRowsRendered }) =>\n          autoSize({\n            height,\n            isScrolling,\n            onChildScroll,\n            scrollTop,\n            onRowsRendered,\n          })\n        }\n      </InfiniteLoader>\n    );\n    return (\n      <List>\n        {data.length > 0 && <WindowScroller>{infiniteLoader}</WindowScroller>}\n        {this.state.loading && <Spin className=\"demo-loading\" />}\n      </List>\n    );\n  }\n}\n\nReactDOM.render(<VirtualizedExample />, mountNode);\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bordered"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c55\u793a\u8fb9\u6846"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"footer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5e95\u90e8"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grid"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u6805\u683c\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5934\u90e8"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"itemLayout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"List.Item")," \u5e03\u5c40, \u8bbe\u7f6e\u6210 ",(0,r.kt)("inlineCode",{parentName:"td"},"vertical")," \u5219\u7ad6\u76f4\u6837\u5f0f\u663e\u793a, \u9ed8\u8ba4\u6a2a\u6392"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u5361\u7247\u5185\u5bb9\u8fd8\u5728\u52a0\u8f7d\u4e2d\u65f6\uff0c\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"loading")," \u5c55\u793a\u4e00\u4e2a\u5360\u4f4d"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/spin-cn/#API"},"object")," (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ant-design/ant-design/issues/8659"},"\u66f4\u591a"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loadMore"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u66f4\u591a"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locale"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6587\u6848\u8bbe\u7f6e\uff0c\u76ee\u524d\u5305\u62ec\u7a7a\u6570\u636e\u6587\u6848"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"emptyText: '\u6682\u65e0\u6570\u636e'"),(0,r.kt)("td",{parentName:"tr",align:null},"3.4.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pagination"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"pagination")," \u914d\u7f6e, \u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u4e0d\u663e\u793a"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"list \u7684\u5c3a\u5bf8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"middle")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"small"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"split"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c55\u793a\u5206\u5272\u7ebf"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u6570\u636e\u6e90"),(0,r.kt)("td",{parentName:"tr",align:null},"any","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.20.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderItem"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 dataSource \u65f6\uff0c\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"renderItem")," \u81ea\u5b9a\u4e49\u6e32\u67d3\u5217\u8868\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"item => ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.20.1")))),(0,r.kt)("h3",{id:"pagination"},"pagination"),(0,r.kt)("p",null,"\u5206\u9875\u7684\u914d\u7f6e\u9879\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5206\u9875\u663e\u793a\u7684\u4f4d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"'top'"),(0,r.kt)("td",{parentName:"tr",align:null},"'bottom'")))),(0,r.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u9879\uff0c\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/components/pagination/"},(0,r.kt)("inlineCode",{parentName:"a"},"Pagination")),"\u3002"),(0,r.kt)("h3",{id:"list-grid-props"},"List grid props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u6570\uff0c",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ant-design/ant-design/blob/a7f17b4cdebbca07b3b9ce5698de61e772d46237/components/list/index.tsx#L16"},"\u53ef\u9009\u503c")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gutter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6805\u683c\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<576px")," \u5c55\u793a\u7684\u5217\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u2265576px")," \u5c55\u793a\u7684\u5217\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"md"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u2265768px")," \u5c55\u793a\u7684\u5217\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u2265992px")," \u5c55\u793a\u7684\u5217\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u22651200px")," \u5c55\u793a\u7684\u5217\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xxl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u22651600px")," \u5c55\u793a\u7684\u5217\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"listitem"},"List.Item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u64cd\u4f5c\u7ec4\uff0c\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"td"},"itemLayout")," \u7684\u4e0d\u540c, \u4f4d\u7f6e\u5728\u5361\u7247\u5e95\u90e8\u6216\u8005\u6700\u53f3\u4fa7"),(0,r.kt)("td",{parentName:"tr",align:null},"Array\\<ReactNode",">"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extra"),(0,r.kt)("td",{parentName:"tr",align:null},"\u989d\u5916\u5185\u5bb9, \u901a\u5e38\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"td"},"itemLayout")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"vertical")," \u7684\u60c5\u51b5\u4e0b, \u5c55\u793a\u53f3\u4fa7\u5185\u5bb9; ",(0,r.kt)("inlineCode",{parentName:"td"},"horizontal")," \u5c55\u793a\u5728\u5217\u8868\u5143\u7d20\u6700\u53f3\u4fa7"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"listitemmeta"},"List.Item.Meta"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5143\u7d20\u7684\u56fe\u6807"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5143\u7d20\u7684\u63cf\u8ff0\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5143\u7d20\u7684\u6807\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}u.isMDXComponent=!0},30876:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>g});var a=e(2784);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=a.createContext({}),s=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=s(t.components);return a.createElement(o.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=s(e),g=l,c=u["".concat(o,".").concat(g)]||u[g]||m[g]||r;return e?a.createElement(c,i(i({ref:n},p),{},{components:e})):a.createElement(c,i({ref:n},p))}));function g(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=u;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var s=2;s<r;s++)i[s]=e[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"}}]);