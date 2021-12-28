---
tags:
  - Components
subtitle: 开关
type: 数据录入
title: Switch 开关
------

开关选择器。

## 何时使用

*   需要表示开关状态/两种状态之间的切换时；
*   和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 示例

### 基本

最简单的用法。

```jsx live
function onChange(checked) {
  console.log(`switch to ${checked}`);
}

ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode);
```

### 不可用

Switch 失效状态。

```jsx live
class App extends React.Component {
  state = {
    disabled: true,
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <div>
        <Switch disabled={this.state.disabled} defaultChecked />
        <br />
        <Button type="primary" onClick={this.toggle}>
          Toggle disabled
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 文字和图标

带有文字和图标。

```jsx live
ReactDOM.render(
  <div>
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<Icon type="check" />}
      unCheckedChildren={<Icon type="close" />}
      defaultChecked
    />
  </div>,
  mountNode,
);
```

### 两种大小

`size="small"` 表示小号开关。

```jsx live
ReactDOM.render(
  <div>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </div>,
  mountNode,
);
```

### 加载中

标识开关操作仍在执行中。

```jsx live
ReactDOM.render(
  <div>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </div>,
  mountNode,
);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 组件自动获取焦点 | boolean | false | 3.2.2 |
| checked | 指定当前是否选中 | boolean | false |  |
| checkedChildren | 选中时的内容 | string|ReactNode |  |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| disabled | 是否禁用 | boolean | false | 3.2.2 |
| loading | 加载中的开关 | boolean | false |  |
| size | 开关大小，可选值：`default` `small` | string | default |  |
| unCheckedChildren | 非选中时的内容 | string|ReactNode |  |  |
| onChange | 变化时回调函数 | Function(checked: boolean, event: Event) |  |  |
| onClick | 点击时回调函数 | Function(checked: boolean, event: Event) |  | 3.13.0 |
| className | Switch 器类名 | string | - | 3.10.1 |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
