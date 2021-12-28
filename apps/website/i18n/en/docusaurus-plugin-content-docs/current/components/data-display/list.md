---
tags:
  - Components
type: Data Display
title: List
cols: 1
-------

Simple List.

## When To Use

A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.

## 示例

### Simple list

Ant Design supports a default list size as well as a large and small size.

```jsx live
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

ReactDOM.render(
  <div>
    <h3 style={{ marginBottom: 16 }}>Default Size</h3>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <h3 style={{ margin: '16px 0' }}>Small Size</h3>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    <h3 style={{ margin: '16px 0' }}>Large Size</h3>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </div>,
  mountNode,
);
```

### Basic list

Basic list.

```jsx live
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

ReactDOM.render(
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />,
  mountNode,
);
```

### Load more

Load more list with `loadMore` property.

```jsx live
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class LoadMoreList extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    axios({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      callback(res.data);
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

ReactDOM.render(<LoadMoreList />, mountNode);
```

### Vertical

Set the `itemLayout` property to `vertical` to create a vertical list.

```jsx live
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

ReactDOM.render(
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" key="list-vertical-star-o" />,
          <IconText type="like-o" text="156" key="list-vertical-like-o" />,
          <IconText type="message" text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />,
  mountNode,
);
```

### Grid

Create a grid layout by setting the `grid` property of List.

```jsx live
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

ReactDOM.render(
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />,
  mountNode,
);
```

### Responsive grid list

Responsive grid list. The size property the is as same as \[Layout Grid]\(https://ant.design/components/grid/#Col).

```jsx live
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

ReactDOM.render(
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />,
  mountNode,
);
```

### Scrolling loaded

The example of infinite load with \[react-infinite-scroller]\(https://github.com/CassetteRocks/react-infinite-scroller).

```jsx live
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = callback => {
    axios({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      callback(res.data);
    });
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

ReactDOM.render(<InfiniteListExample />, mountNode);
```

### Infinite & virtualized

An example of infinite list & virtualized loading using \[react-virtualized]\(https://github.com/bvaughn/react-virtualized). \[Learn more]\(https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/).

```jsx live
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class VirtualizedExample extends React.Component {
  state = {
    data: [],
    loading: false,
  };

  loadedRowsMap = {};

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = callback => {
    axios({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      callback(res.data);
    });
  };

  handleInfiniteOnLoad = ({ startIndex, stopIndex }) => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    for (let i = startIndex; i <= stopIndex; i++) {
      // 1 means loading
      this.loadedRowsMap[i] = 1;
    }
    if (data.length > 19) {
      message.warning('Virtualized List loaded all');
      this.setState({
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];

  renderItem = ({ index, key, style }) => {
    const { data } = this.state;
    const item = data[index];
    return (
      <List.Item key={key} style={style}>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.name.last}</a>}
          description={item.email}
        />
        <div>Content</div>
      </List.Item>
    );
  };

  render() {
    const { data } = this.state;
    const vlist = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered, width }) => (
      <VList
        autoHeight
        height={height}
        isScrolling={isScrolling}
        onScroll={onChildScroll}
        overscanRowCount={2}
        rowCount={data.length}
        rowHeight={73}
        rowRenderer={this.renderItem}
        onRowsRendered={onRowsRendered}
        scrollTop={scrollTop}
        width={width}
      />
    );
    const autoSize = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered }) => (
      <AutoSizer disableHeight>
        {({ width }) =>
          vlist({
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            onRowsRendered,
            width,
          })
        }
      </AutoSizer>
    );
    const infiniteLoader = ({ height, isScrolling, onChildScroll, scrollTop }) => (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.handleInfiniteOnLoad}
        rowCount={data.length}
      >
        {({ onRowsRendered }) =>
          autoSize({
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            onRowsRendered,
          })
        }
      </InfiniteLoader>
    );
    return (
      <List>
        {data.length > 0 && <WindowScroller>{infiniteLoader}</WindowScroller>}
        {this.state.loading && <Spin className="demo-loading" />}
      </List>
    );
  }
}

ReactDOM.render(<VirtualizedExample />, mountNode);
```

## API

### List

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bordered | Toggles rendering of the border around the list | boolean | false |  |
| footer | List footer renderer | string|ReactNode | - |  |
| grid | The grid type of list. You can set grid to something like {gutter: 16, column: 4} | object | - |  |
| header | List header renderer | string|ReactNode | - |  |
| itemLayout | The layout of list, default is `horizontal`, If a vertical list is desired, set the itemLayout property to `vertical` | string | - |  |
| rowKey | Item's unique key, could be a string or function that returns a string | string|Function(record):string | `key` | 3.12.0 |
| loading | Shows a loading indicator while the contents of the list are being fetched | boolean|[object](https://ant.design/components/spin-cn/#API) ([more](https://github.com/ant-design/ant-design/issues/8659)) | false |  |
| loadMore | Shows a load more content | string|ReactNode | - |  |
| locale | i18n text including empty text | object | emptyText: 'No Data' /<br/> | 3.4.2 |
| pagination | Pagination [config](https://ant.design/components/pagination/), hide it by setting it to false | boolean | object | false |  |
| split | Toggles rendering of the split under the list item | boolean | true |  |
| dataSource | dataSource array for list | any\[] | - | 3.20.1 |
| renderItem | customize list item when using `dataSource` | `item => ReactNode` | - | 3.20.1 |

### pagination

Properties for pagination.

| Property | Description                          | Type                        | Default  |
| -------- | --------------------------- | --------------------------- | -------- |
| position | specify the position of `Pagination` | 'top' | 'bottom' | 'both' | 'bottom' | 3.6.0 |

More about pagination, please check [`Pagination`](/components/pagination/).

### List grid props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| column | column of grid, [optional number](https://github.com/ant-design/ant-design/blob/a7f17b4cdebbca07b3b9ce5698de61e772d46237/components/list/index.tsx#L16) | number | - |  |
| gutter | spacing between grid | number | 0 |  |
| size | Size of list | `default` | `middle` | `small` | `default` |  |
| xs | `<576px` column of grid | number | - |  |
| sm | `≥576px` column of grid | number | - |  |
| md | `≥768px` column of grid | number | - |  |
| lg | `≥992px` column of grid | number | - |  |
| xl | `≥1200px` column of grid | number | - |  |
| xxl | `≥1600px` column of grid | number | - |  |

### List.Item

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| actions | The actions content of list item. If `itemLayout` is `vertical`, shows the content on bottom, otherwise shows content on the far right. | Array\<ReactNode\> | - |  |
| extra | The extra content of list item. If `itemLayout` is `vertical`, shows the content on right, otherwise shows content on the far right. | string|ReactNode | - |  |

### List.Item.Meta

| Property    | Description                  | Type              | Default | Version |
| ----------- | ---------------------------- | ----------------- | ------- | ------- |
| avatar      | The avatar of list item      | ReactNode         | -       |         |
| description | The description of list item | string|ReactNode | -       |         |
| title       | The title of list item       | string|ReactNode | -       |         |
