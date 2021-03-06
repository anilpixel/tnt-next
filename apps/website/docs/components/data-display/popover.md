---
tags:
  - Components
subtitle: 气泡卡片
type: 数据展示
title: Popover 气泡卡片
------

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 示例

### 基本

最简单的用法，浮层的大小由内容区域决定。

```jsx live
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>,
  mountNode,
);
```

### 三种触发方式

鼠标移入、聚集、点击。

```jsx live
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <div>
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </div>,
  mountNode,
);
```

### 位置

位置有十二个方向。

```jsx live
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Popover placement="topLeft" title={text} content={content} trigger="click">
        <Button>TL</Button>
      </Popover>
      <Popover placement="top" title={text} content={content} trigger="click">
        <Button>Top</Button>
      </Popover>
      <Popover placement="topRight" title={text} content={content} trigger="click">
        <Button>TR</Button>
      </Popover>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Popover placement="leftTop" title={text} content={content} trigger="click">
        <Button>LT</Button>
      </Popover>
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button>Left</Button>
      </Popover>
      <Popover placement="leftBottom" title={text} content={content} trigger="click">
        <Button>LB</Button>
      </Popover>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Popover placement="rightTop" title={text} content={content} trigger="click">
        <Button>RT</Button>
      </Popover>
      <Popover placement="right" title={text} content={content} trigger="click">
        <Button>Right</Button>
      </Popover>
      <Popover placement="rightBottom" title={text} content={content} trigger="click">
        <Button>RB</Button>
      </Popover>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Popover placement="bottomLeft" title={text} content={content} trigger="click">
        <Button>BL</Button>
      </Popover>
      <Popover placement="bottom" title={text} content={content} trigger="click">
        <Button>Bottom</Button>
      </Popover>
      <Popover placement="bottomRight" title={text} content={content} trigger="click">
        <Button>BR</Button>
      </Popover>
    </div>
  </div>,
  mountNode,
);
```

### 从浮层内关闭

使用 `visible` 属性控制浮层显示。

```jsx live
class App extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 箭头指向

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

```jsx live
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <div>
    <Popover placement="topLeft" title={text} content={content}>
      <Button>Align edge / 边缘对齐</Button>
    </Popover>
    <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Popover>
  </div>,
  mountNode,
);
```

### 悬停点击弹出窗口

以下示例显示如何创建可悬停和单击的弹出窗口。

```jsx live
class App extends React.Component {
  state = {
    clicked: false,
    hovered: false,
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };

  handleHoverChange = visible => {
    this.setState({
      hovered: visible,
      clicked: false,
    });
  };

  handleClickChange = visible => {
    this.setState({
      clicked: visible,
      hovered: false,
    });
  };

  render() {
    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
      <Popover
        style={{ width: 500 }}
        content={hoverContent}
        title="Hover title"
        trigger="hover"
        visible={this.state.hovered}
        onVisibleChange={this.handleHoverChange}
      >
        <Popover
          content={
            <div>
              {clickContent}
              <a onClick={this.hide}>Close</a>
            </div>
          }
          title="Click title"
          trigger="click"
          visible={this.state.clicked}
          onVisibleChange={this.handleClickChange}
        >
          <Button>Hover and click / 悬停并单击</Button>
        </Popover>
      </Popover>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## API

| 参数    | 说明     | 类型              | 默认值 | 版本 |
| ------- | -------- | ----------------- | ------ | ---- |
| content | 卡片内容 | string|ReactNode | 无     |      |
| title   | 卡片标题 | string|ReactNode | 无     |      |

更多属性请参考 [Tooltip](/components/tooltip/#API)。

## 注意

请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
