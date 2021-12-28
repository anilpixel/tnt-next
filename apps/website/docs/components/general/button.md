---
tags:
  - Components
type: 通用
title: Button 按钮
------

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 示例

### 按钮类型

按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

```jsx live
ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
  </div>,
  mountNode,
);
```

### 图标按钮

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

```jsx live
ReactDOM.render(
  <div>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon="search">
      Search
    </Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">
      Search
    </Button>
  </div>,
  mountNode,
);
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

```jsx live
ReactDOM.render((
  <div>
    <div>
      <Button type="primary" size="small">
        Primary
      </Button>
      <Button size="small">Normal</Button>
      <Button type="dashed" size="small">
        Dashed
      </Button>
      <Button type="danger" size="small">
        Danger
      </Button>
      <Button type="link" size="small">
        Link
      </Button>
      <Button type="primary" icon="download" size="small" />
      <Button type="primary" shape="circle" icon="download" size="small" />
      <Button type="primary" shape="round" icon="download" size="small" />
      <Button type="primary" shape="round" icon="download" size="small">
        Download
      </Button>
      <Button type="primary" icon="download" size="small">
        Download
      </Button>
      <Button.Group size="small">
        <Button type="primary">
          <Icon type="left" />
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon type="right" />
        </Button>
      </Button.Group>
    </div>
    <div>
      <Button type="primary" size="default">
        Primary
      </Button>
      <Button size="default">Normal</Button>
      <Button type="dashed" size="default">
        Dashed
      </Button>
      <Button type="danger" size="default">
        Danger
      </Button>
      <Button type="link" size="default">
        Link
      </Button>
      <Button type="primary" icon="download" size="default" />
      <Button type="primary" shape="circle" icon="download" size="default" />
      <Button type="primary" shape="round" icon="download" size="default" />
      <Button type="primary" shape="round" icon="download" size="default">
        Download
      </Button>
      <Button type="primary" icon="download" size="default">
        Download
      </Button>
      <Button.Group size="default">
        <Button type="primary">
          <Icon type="left" />
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon type="right" />
        </Button>
      </Button.Group>
    </div>
    <div>
      <Button type="primary" size="large">
        Primary
      </Button>
      <Button size="large">Normal</Button>
      <Button type="dashed" size="large">
        Dashed
      </Button>
      <Button type="danger" size="large">
        Danger
      </Button>
      <Button type="link" size="large">
        Link
      </Button>
      <Button type="primary" icon="download" size="large" />
      <Button type="primary" shape="circle" icon="download" size="large" />
      <Button type="primary" shape="round" icon="download" size="large" />
      <Button type="primary" shape="round" icon="download" size="large">
        Download
      </Button>
      <Button type="primary" icon="download" size="large">
        Download
      </Button>
      <Button.Group size="large">
        <Button type="primary">
          <Icon type="left" />
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon type="right" />
        </Button>
      </Button.Group>
    </div>
  </div>
), mountNode);
```

### 不可用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```jsx live
ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <br />
    <Button type="link">Link</Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
    <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </div>,
  mountNode,
);
```

### 加载中状态

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

```jsx live
class App extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    return (
      <div>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon="poweroff"
          loading={this.state.iconLoading}
          onClick={this.enterIconLoading}
        >
          Click me!
        </Button>
        <br />
        <Button type="primary" loading />
        <Button type="primary" shape="circle" loading />
        <Button type="danger" shape="round" loading />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 多个按钮组合

按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 `Dropdown.Button` 中组合使用。

```jsx live
function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown overlay={menu}>
      <Button>
        Actions <Icon type="down" />
      </Button>
    </Dropdown>
  </div>,
  mountNode,
);
```

### 按钮组合

可以将多个 `Button` 放入 `Button.Group` 的容器中。

```jsx live
const ButtonGroup = Button.Group;

ReactDOM.render(
  <div>
    <h4>Basic</h4>
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button>OK</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button disabled>L</Button>
      <Button disabled>M</Button>
      <Button disabled>R</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>

    <h4>With Icon</h4>
    <ButtonGroup>
      <Button type="primary">
        <Icon type="left" />
        Go back
      </Button>
      <Button type="primary">
        Go forward
        <Icon type="right" />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary" icon="cloud" />
      <Button type="primary" icon="cloud-download" />
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary" size="small" icon="cloud" />
      <Button type="primary" size="small" icon="cloud-download" />
    </ButtonGroup>
  </div>,
  mountNode,
);
```

### 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

```jsx live
ReactDOM.render(
  <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="danger" ghost>
      danger
    </Button>
    <Button type="link" ghost>
      link
    </Button>
  </div>,
  mountNode,
);
```

### block 按钮

`block`属性将使按钮适合其父宽度。

```jsx live
ReactDOM.render(
  <div>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="danger" block>
      Danger
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </div>,
  mountNode,
);
```

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 按钮失效状态 | boolean | `false` | 3.5.1 |
| ghost | 幽灵属性，使按钮背景透明，版本 2.7 中增加 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | 设置按钮的图标类型 | string | - |  |
| loading | 设置按钮载入状态 | boolean | { delay: number } | `false` |  |
| shape | 设置按钮形状，可选值为 `circle`、 `round` 或者不设 | string | - |  |
| size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default` |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型，可选值为 `primary` `dashed` `danger` `link`(3.17 中增加) 或者不设 | string | - |  |
| onClick | 点击按钮时的回调 | (event) => void | - |  |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | `false` | 3.8.0 |

支持原生 button 的其他所有属性。

## FAQ

### 如何移除两个汉字之间的空格？

根据 Ant Design 设计规范要求，我们会在按钮内只有两个汉字时自动添加空格，如果你不需要这个特性，可以设置 [ConfigProvider](/components/config-provider/#API) 的 `autoInsertSpaceInButton` 为 `false`。

![](https://gw.alipayobjects.com/zos/antfincdn/Hz5HL9gsT4/f29f170d-b78d-4d2b-aa71-0da6a9ead4d9.png)
