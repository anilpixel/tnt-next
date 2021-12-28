---
tags:
  - Components
type: Data Display
title: Tooltip
------

A simple text popup tip.

## When To Use

*   The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
*   To provide an explanation of a `button/text/operation`. It's often used instead of the html `title` attribute.

## 示例

### Basic

The simplest usage.

```jsx live
ReactDOM.render(
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>,
  mountNode,
);
```

### Placement

There are 12 placement options available.

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

### Arrow pointing at the center

By specifying `arrowPointAtCenter` prop, the arrow will point to the center of the target element.

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

### Adjust placement automatically

Adjust placement automatically when tooltip is invisible.

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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | The text shown in the tooltip | string|ReactNode|() => ReactNode | - |  |

### Common API

The following APIs are shared by Tooltip, Popconfirm, Popover.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| arrowPointAtCenter | Whether the arrow is pointed at the center of target, supported after `antd@1.11+` | boolean | `false` |  |
| autoAdjustOverflow | Whether to adjust popup placement automatically when popup is off screen | boolean | `true` |  |
| defaultVisible | Whether the floating tooltip card is visible by default | boolean | `false` |  |
| getPopupContainer | The DOM container of the tip, the default behavior is to create a `div` element in `body` | Function(triggerNode) | () => document.body |  |
| mouseEnterDelay | Delay in seconds, before tooltip is shown on mouse enter | number | 0.1 |  |
| mouseLeaveDelay | Delay in seconds, before tooltip is hidden on mouse leave | number | 0.1 |  |
| overlayClassName | Class name of the tooltip card | string | - |  |
| overlayStyle | Style of the tooltip card | object | - |  |
| placement | The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |  |
| trigger | Tooltip trigger mode | `hover` | `focus` | `click` | `contextMenu` | `hover` |  |
| visible | Whether the floating tooltip card is visible or not | boolean | `false` |  |
| onVisibleChange | Callback executed when visibility of the tooltip card is changed | (visible) => void | - |  |
| align | this value will be merged into placement's config, please refer to the settings [rc-tooltip](https://github.com/react-component/tooltip) | Object | - | 3.10.0 |

## Note

Please ensure that the child node of `Tooltip` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.
