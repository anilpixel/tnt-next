---
tags:
  - Components
subtitle: 文字提示
type: 数据展示
title: Tooltip 文字提示
------

简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## 示例

### 基本

最简单的用法。

```jsx live
ReactDOM.render(
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>,
  mountNode,
);
```

### 位置

位置有 12 个方向。

```jsx live
const text = <span>prompt text</span>;

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>,
  mountNode,
);
```

### 箭头指向

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

```jsx live
ReactDOM.render(
  <div>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </div>,
  mountNode,
);
```

### 自动调整位置

气泡框不可见时自动调整位置

```jsx live
const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};

ReactDOM.render(
  <div style={wrapStyles}>
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={trigger => trigger.parentElement}
    >
      <Button>Adjust automatically / 自动调整</Button>
    </Tooltip>
    <br />
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={trigger => trigger.parentElement}
      autoAdjustOverflow={false}
    >
      <Button>Ignore / 不处理</Button>
    </Tooltip>
  </div>,
  mountNode,
);
```

## API

| 参数  | 说明     | 类型                               | 默认值 | 版本 |
| ----- | -------- | ---------------------------------- | ------ | ---- |
| title | 提示文字 | string|ReactNode|() => ReactNode | 无     |      |

### 共同的 API

以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrowPointAtCenter | 箭头是否指向目标元素中心，`antd@1.11+` 支持 | boolean | `false` |  |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | `true` |  |
| defaultVisible | 默认是否显隐 | boolean | false |  |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | Function(triggerNode) | () => document.body |  |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |  |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |  |
| overlayClassName | 卡片类名 | string | 无 |  |
| overlayStyle | 卡片样式 | object | 无 |  |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | top |  |
| trigger | 触发行为，可选 `hover/focus/click/contextMenu` | string | hover |  |
| visible | 用于手动控制浮层显隐 | boolean | false |  |
| onVisibleChange | 显示隐藏的回调 | (visible) => void | 无 |  |
| align | 该值将合并到 placement 的配置中，设置参考 [rc-tooltip](https://github.com/react-component/tooltip) | Object | 无 | 3.10.0 |

## 注意

请确保 `Tooltip` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
