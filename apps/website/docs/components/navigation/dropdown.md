---
tags:
  - Components
subtitle: 下拉菜单
type: 导航
title: Dropdown 下拉菜单
------

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 示例

### 基本

最简单的下拉菜单。

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

### 弹出位置

支持 6 个弹出位置。

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
)
```

### 其他元素

分割线和不可用菜单项。

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

### 触发方式

默认是移入触发菜单，可以点击触发。

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

### 触发事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

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

### 带下拉框的按钮

左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。

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

### 多级菜单

传入的菜单里有多个层级。

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

### 菜单隐藏方式

默认是点击关闭菜单，可以关闭此功能。

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

### 右键菜单

默认是移入触发菜单，可以点击鼠标右键触发。

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

### Menu 完整样式

此演示需要注意去掉 Reset 样式后查看 Dropdown 内 Menu 的样式是否正常。

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

属性如下

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 菜单是否禁用 | boolean | - |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode) | `() => document.body` |  |
| overlay | 菜单 | [Menu](/components/menu) | () => Menu | - |  |
| overlayClassName | 下拉根元素的类名称 | string | - | 3.11.0 |
| overlayStyle | 下拉根元素的样式 | object | - | 3.11.0 |
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |  |
| trigger | 触发下拉的行为, 移动端不支持 hover | Array<`click`|`hover`|`contextMenu`> | `['hover']` |  |
| visible | 菜单是否显示 | boolean | - |  |
| onVisibleChange | 菜单显示状态改变时调用，参数为 visible | Function(visible) | - |  |

`overlay` 菜单使用 [Menu](/components/menu/)，还包括菜单项 `Menu.Item`，分割线 `Menu.Divider`。

> 注意： Menu.Item 必须设置唯一的 key 属性。
>
> Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 `<Menu selectable>`.

### Dropdown.Button

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 菜单是否禁用 | boolean | - |  |
| icon | 右侧的 icon | ReactNode | - | 3.17.0 |
| overlay | 菜单 | [Menu](/components/menu/) | - |  |
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |  |
| size | 按钮大小，和 [Button](/components/button/) 一致 | string | 'default' |  |
| trigger | 触发下拉的行为 | Array<`click`|`hover`|`contextMenu`> | `['hover']` |  |
| type | 按钮类型，和 [Button](/components/button/) 一致 | string | 'default' |  |
| visible | 菜单是否显示 | boolean | - |  |
| onClick | 点击左侧按钮的回调，和 [Button](/components/button/) 一致 | Function | - |  |
| onVisibleChange | 菜单显示状态改变时调用，参数为 visible | Function | - |  |
