---
tags:
  - Components
subtitle: 头像
type: 数据展示
title: Avatar 头像
------

用来代表用户或事物，支持图片、图标或字符展示。

## 设计师专属

安装 [Kitchen Sketch 插件 💎](https://kitchen.alipay.com)，一键填充高逼格头像和文本.

## 示例

### 基本

头像有三种尺寸，两种形状可选。

```jsx live
ReactDOM.render(
  <div>
    <div>
      <Avatar size={64} icon="user" />
      <Avatar size="large" icon="user" />
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar shape="square" size={64} icon="user" />
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
    </div>
  </div>,
  mountNode,
);
```

### 类型

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

```jsx live
ReactDOM.render(
  <div>
    <Avatar icon="user" />
    <Avatar icon={<Icon type="user" />} />
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
  </div>,
  mountNode,
);
```

### 自动调整字符大小

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

```jsx live
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

class Autoset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
    };
  }

  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  };

  render() {
    return (
      <div>
        <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
          {this.state.user}
        </Avatar>
        <Button
          size="small"
          style={{ marginLeft: 16, verticalAlign: 'middle' }}
          onClick={this.changeUser}
        >
          Change
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Autoset />, mountNode);
```

### 带徽标的头像

通常用于消息提示。

```jsx live
ReactDOM.render(
  <div>
    <span style={{ marginRight: 24 }}>
      <Badge count={1}>
        <Avatar shape="square" icon="user" />
      </Badge>
    </span>
    <span>
      <Badge dot>
        <Avatar shape="square" icon="user" />
      </Badge>
    </span>
  </div>,
  mountNode,
);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| icon | 设置头像的图标类型，可设为 Icon 的 `type` 或 ReactNode | string | ReactNode | - |  |
| shape | 指定头像的形状 | Enum{ 'circle', 'square' } | `circle` |  |
| size | 设置头像的大小 | number | Enum{ 'large', 'small', 'default' } | `default` |  |
| src | 图片类头像的资源地址 | string | - |  |
| srcSet | 设置图片类头像响应式资源地址 | string | - | 3.11.0 |
| alt | 图像无法显示时的替代文本 | string | - | 3.7.0 |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | - | 3.8.0 |
