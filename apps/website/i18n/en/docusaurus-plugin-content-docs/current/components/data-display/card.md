---
tags:
  - Components
type: Data Display
title: Card
cols: 1
-------

Simple rectangular container.

## When To Use

A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## 示例

### Basic card

A basic card containing a title, content and an extra corner content. Supports two sizes: `default` and `small`.

```jsx live
ReactDOM.render(
  <div>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,
  mountNode,
);
```

### No border

A borderless card on a gray background.

```jsx live
ReactDOM.render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,
  mountNode,
);
```

### Simple card

A simple card only containing a content area.

```jsx live
ReactDOM.render(
  <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>,
  mountNode,
);
```

### Customized content

You can use `Card.Meta` to support more flexible content.

```jsx live
const { Meta } = Card;

ReactDOM.render(
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  mountNode,
);
```

### Card in column

Cards usually cooperate with grid column layout in overview page.

```jsx live
ReactDOM.render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### Loading card

Shows a loading indicator while the contents of the card is being fetched.

```jsx live
const { Meta } = Card;

class App extends React.Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Switch checked={!loading} onChange={this.onChange} />

        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Grid card

Grid style card content.

```jsx live
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

ReactDOM.render(
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>,
  mountNode,
);
```

### Inner card

It can be placed inside the ordinary card to display the information of the multilevel structure.

```jsx live
ReactDOM.render(
  <Card title="Card title">
    <p
      style={{
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 16,
        fontWeight: 500,
      }}
    >
      Group title
    </p>
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>,
  mountNode,
);
```

### With tabs

More content can be hosted.

```jsx live
const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          title="Card title"
          extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
        <br />
        <br />
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}

ReactDOM.render(<TabsCard />, mountNode);
```

### Support more content configuration

A Card that supports `cover`, `avatar`, `title` and `description`.

```jsx live
const { Meta } = Card;

ReactDOM.render(
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Icon type="setting" key="setting" />,
      <Icon type="edit" key="edit" />,
      <Icon type="ellipsis" key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>,
  mountNode,
);
```

## API

```html
<Card title="Card title">Card content</Card>
```

### Card

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| actions | The action list, shows at the bottom of the Card. | Array\<ReactNode\> | - |  |
| activeTabKey | Current TabPane's key | string | - | 3.3.0 |
| headStyle | Inline style to apply to the card head | object | - | 3.8.0 |
| bodyStyle | Inline style to apply to the card content | object | - |  |
| bordered | Toggles rendering of the border around the card | boolean | `true` |  |
| cover | Card cover | ReactNode | - |  |
| defaultActiveTabKey | Initial active TabPane's key, if `activeTabKey` is not set. | string | - | 3.3.0 |
| extra | Content to render in the top-right corner of the card | string|ReactNode | - |  |
| hoverable | Lift up when hovering card | boolean | false |  |
| loading | Shows a loading indicator while the contents of the card are being fetched | boolean | false |  |
| tabList | List of TabPane's head. | Array<{key: string, tab: ReactNode}> | - |  |
| tabBarExtraContent | Extra content in tab bar | React.ReactNode | - | 3.23.0 |
| size | Size of card | `default` | `small` | `default` | 3.12.0 |
| title | Card title | string|ReactNode | - |  |
| type | Card style type, can be set to `inner` or not set | string | - |  |
| onTabChange | Callback when tab is switched | (key) => void | - |  |

### Card.Grid

| Property  | Description                     | Type    | Default | Version |
| --------- | ---------------------- | ------- | ------- | ------- |
| className | className of container          | string  | -       |         |
| hoverable | Lift up when hovering card grid | boolean | true    | 3.23.0  |
| style     | style object of container       | object  | -       |         |

### Card.Meta

| Property    | Description               | Type      | Default | Version |
| ----------- | ------------------------- | --------- | ------- | ------- |
| avatar      | avatar or icon            | ReactNode | -       |         |
| className   | className of container    | string    | -       |         |
| description | description content       | ReactNode | -       |         |
| style       | style object of container | object    | -       |         |
| title       | title content             | ReactNode | -       |         |
