---
tags:
  - Components
type: Navigation
title: Dropdown
------

A dropdown list.

## When To Use

When there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.

## 示例

### Basic

The most basic dropdown menu.

```jsx live
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
);
```

### Placement

Support 6 placements.

```jsx live
const menu = (
  <Menu>
     <Menu.Item>
     <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
     1st menu item
     </a>
     </Menu.Item>
     <Menu.Item>
     <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
     2nd menu item
     </a>
     </Menu.Item>
     <Menu.Item>
     <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
     3rd menu item
     </a>
     </Menu.Item>
     </Menu>
);

ReactDOM.render(
  <div>
    <Dropdown overlay={menu} placement="bottomLeft">
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button>bottomCenter</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomRight">
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown overlay={menu} placement="topLeft">
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topCenter">
      <Button>topCenter</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topRight">
      <Button>topRight</Button>
    </Dropdown>
  </div>,
  mountNode,
);
```

### Other elements

Divider and disabled menu item.

```jsx live
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
);
```

### Trigger mode

The default trigger mode is `hover`, you can change it to `click`.

```jsx live
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Click me <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
);
```

### Click event

An event will be triggered when you click menu items, in which you can make different operations according to item's key.

```jsx live
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me, Click menu item <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
);
```

### Button with dropdown menu

A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.

```jsx live
function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div id="components-dropdown-demo-dropdown-button">
    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
      Dropdown
    </Dropdown.Button>
    <Dropdown overlay={menu}>
      <Button>
        Button <Icon type="down" />
      </Button>
    </Dropdown>
  </div>,
  mountNode,
);
```

### Cascading menu

The menu has multiple levels.

```jsx live
const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Cascading menu <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
);
```

### The way of hiding menu.

The default is to close the menu when you click on menu items, this feature can be turned off.

```jsx live
class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

ReactDOM.render(<OverlayVisible />, mountNode);
```

### Context Menu

The default trigger mode is `hover`, you can change it to `contextMenu`.

```jsx live
const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu} trigger={['contextMenu']}>
    <div
      style={{
        textAlign: 'center',
        background: '#f7f7f7',
        height: 200,
        lineHeight: '200px',
        color: '#777',
      }}
    >
      Right Click on here
    </div>
  </Dropdown>,
  mountNode,
);
```

### Menu full styles

This demo was created for debugging Menu styles inside Dropdown.

```jsx live
const { SubMenu } = Menu;

const menu = (
  <Menu selectedKeys={['1']} openKeys={['sub1']}>
    <Menu.ItemGroup key="group" title="Item Group">
      <Menu.Item key="01">Option 0</Menu.Item>
      <Menu.Item key="02">Option 0</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="mail" />
          <span>Navigation One</span>
        </span>
      }
    >
      <Menu.ItemGroup key="g1" title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="g2" title="Item 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="appstore" />
          <span>Navigation Two</span>
        </span>
      }
    >
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu
      key="sub4"
      title={
        <span>
          <Icon type="setting" />
          <span>Navigation Three</span>
        </span>
      }
    >
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover to check menu style <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
);
```

## API

### Dropdown

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | Whether the dropdown menu is disabled | boolean | - |  |
| getPopupContainer | To set the container of the dropdown menu. The default is to create a `div` element in `body`, but you can reset it to the scrolling area and make a relative reposition. [Example on CodePen](https://codepen.io/afc163/pen/zEjNOy?editors=0010). | Function(triggerNode) | `() => document.body` |  |
| overlay | The dropdown menu | [Menu](/components/menu) | () => Menu | - |  |
| overlayClassName | Class name of the dropdown root element | string | - | 3.11.0 |
| overlayStyle | Style of the dropdown root element | object | - | 3.11.0 |
| placement | Placement of popup menu: `bottomLeft`, `bottomCenter`, `bottomRight`, `topLeft`, `topCenter` or `topRight` | String | `bottomLeft` |  |
| trigger | The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens. | Array<`click`|`hover`|`contextMenu`> | `['hover']` |  |
| visible | Whether the dropdown menu is currently visible | boolean | - |  |
| onVisibleChange | Called when the visible state is changed. | Function(visible) | - |  |

You should use [Menu](/components/menu/) as `overlay`. The menu items and dividers are also available by using `Menu.Item` and `Menu.Divider`.

> Warning: You must set a unique `key` for `Menu.Item`.
>
> Menu of Dropdown is unselectable by default, you can make it selectable via `<Menu selectable>`.

### Dropdown.Button

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | Whether the dropdown menu is disabled | boolean | - |  |
| icon | Icon (appears on the right) | ReactNode | - | 3.17.0 |
| overlay | The dropdown menu | [Menu](/components/menu) | - |  |
| placement | Placement of popup menu: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |  |
| size | Size of the button, the same as [Button](/components/button) | string | `default` |  |
| trigger | The trigger mode which executes the dropdown action | Array<`click`|`hover`|`contextMenu`> | `['hover']` |  |
| type | Type of the button, the same as [Button](/components/button) | string | `default` |  |
| visible | Whether the dropdown menu is currently visible | boolean | - |  |
| onClick | The same as [Button](/components/button): called when you click the button on the left | Function | - |  |
| onVisibleChange | Called when the visible state is changed | Function | - |  |
