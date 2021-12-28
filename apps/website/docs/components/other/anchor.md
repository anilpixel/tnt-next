---
tags:
  - Components
subtitle: 锚点
cols: 2
type: 其他
title: Anchor 锚点
------

用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 示例

### 基本

最简单的用法。

```jsx live
const { Link } = Anchor;

ReactDOM.render(
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

### 静态位置

不浮动，状态不随页面滚动变化。

```jsx live
const { Link } = Anchor;

ReactDOM.render(
  <Anchor affix={false}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

### 自定义 onClick 事件

点击锚点不记录历史。

```jsx live
const { Link } = Anchor;

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

ReactDOM.render(
  <Anchor affix={false} onClick={handleClick}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

### 自定义锚点高亮

自定义锚点高亮。

```jsx live
const { Link } = Anchor;

const getCurrentAnchor = () => {
  return '#components-anchor-demo-static';
};

ReactDOM.render(
  <Anchor affix={false} getCurrentAnchor={getCurrentAnchor}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

### 设置锚点滚动偏移量

锚点目标滚动到屏幕正中间。

```jsx live
const { Link } = Anchor;

class AnchorExample extends React.Component {
  state = {
    targetOffset: undefined,
  };

  componentDidMount() {
    this.setState({
      targetOffset: window.innerHeight / 2,
    });
  }

  render() {
    return (
      <Anchor targetOffset={this.state.targetOffset}>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    );
  }
}

ReactDOM.render(<AnchorExample />, mountNode);
```

### 监听锚点链接改变

监听锚点链接改变

```jsx live
const { Link } = Anchor;

const onChange = link => {
  console.log('Anchor:OnChange', link);
};

ReactDOM.render(
  <Anchor affix={false} onChange={onChange}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

## API

### Anchor Props

| 成员 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| affix | 固定模式 | boolean | true |  |
| bounds | 锚点区域边界 | number | 5(px) |  |
| getContainer | 指定滚动的容器 | () => HTMLElement | () => window | 3.4.0 |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number |  |  |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |  |  |
| showInkInFixed | 固定模式是否显示小圆点 | boolean | false |  |
| onClick | `click` 事件的 handler | Function(e: Event, link: Object) | - | 3.9.0 |
| getCurrentAnchor | 自定义高亮的锚点 | () => string | - | 3.22.0 |
| targetOffset | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#components-anchor-demo-targetOffset) | number | `offsetTop` | 3.22.0 |
| onChange | 监听锚点链接改变 | (currentActiveLink: string) => void |  | 3.24.0 |

### Link Props

| 成员   | 说明                             | 类型              | 默认值 | 版本 |
| ------ | -------------------------------- | ----------------- | ------ | ---- |
| href   | 锚点链接                         | string            |        |      |
| title  | 文字内容                         | string|ReactNode |        |      |
| target | 该属性指定在何处显示链接的资源。 | string            |        |      |
