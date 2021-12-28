---
tags:
  - Components
type: General
title: Button
------

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## 示例

### Type

There are `primary` button, `default` button, `dashed` button, `danger` button and `link` button in antd.

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

### Icon

`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`.

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

### Size

Ant Design supports a default button size as well as a large and small size.

```jsx live
class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon="download" size={size} />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
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
    );
  }
}

ReactDOM.render(<ButtonSize />, mountNode);
```

### Disabled

To mark a button as disabled, add the `disabled` property to the `Button`.

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

### Loading

A loading indicator can be added to a button by setting the `loading` property on the `Button`.

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

### Multiple Buttons

If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into `Dropdown.Button`.

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

### Button Group

Buttons can be grouped by placing multiple `Button` components into a `Button.Group`.

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

### Ghost Button

`ghost` property will make button's background transparent, it is commonly used in colored background.

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

### block Button

`block` property will make the button fit to its parent width.

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

To get a customized button, just set `type`/`shape`/`size`/`loading`/`disabled`.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | disabled state of button | boolean | `false` | 3.5.1 |
| ghost | make background transparent and invert text and border colors, added in 2.7 | boolean | `false` |  |
| href | redirect url of link button | string | - |  |
| htmlType | set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | set the icon of button, see: Icon component | string | - |  |
| loading | set the loading status of button | boolean | { delay: number } | `false` |  |
| shape | can be set to `circle`, `round` or omitted | string | - |  |
| size | can be set to `small` `large` or omitted | string | `default` |  |
| target | same as target attribute of a, works when href is specified | string | - |  |
| type | can be set to `primary` `ghost` `dashed` `danger` `link`(added in 3.17) or omitted (meaning `default`) | string | `default` |  |
| onClick | set the handler to handle `click` event | (event) => void | - |  |
| block | option to fit button width to its parent width | boolean | `false` | 3.8.0 |

It accepts all props which native buttons support.

## FAQ

### How to remove space between 2 chinese characters

Following the Ant Design specification, we will add one space between if Button contains two Chinese characters only. If you don't need that, you can use [ConfigProvider](/components/config-provider/#API) to set `autoInsertSpaceInButton` as `false`.

![Button with two Chinese characters](https://gw.alipayobjects.com/zos/antfincdn/Hz5HL9gsT4/f29f170d-b78d-4d2b-aa71-0da6a9ead4d9.png)
