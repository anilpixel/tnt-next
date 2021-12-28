---
tags:
  - Components
subtitle: 警告提示
type: 反馈
title: Alert 反馈
------

警告提示，展现需要关注的信息。

## 何时使用

*   当某个页面需要向用户显示警告的信息时。
*   非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 示例

### 基本

最简单的用法，适用于简短的警告提示。

```jsx live
ReactDOM.render(<Alert message="Success Text" type="success" />, mountNode);
```

### 四种样式

共有四种样式 `success`、`info`、`warning`、`error`。

```jsx live
ReactDOM.render(
  <div>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </div>,
  mountNode,
);
```

### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。

```jsx live
const onClose = e => {
  console.log(e, 'I was closed.');
};

ReactDOM.render(
  <div>
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
    />
  </div>,
  mountNode,
);
```

### 含有辅助性文字介绍

含有辅助性文字介绍的警告提示。

```jsx live
ReactDOM.render(
  <div>
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </div>,
  mountNode,
);
```

### 图标

可口的图标让信息类型更加醒目。

```jsx live
ReactDOM.render(
  <div>
    <Alert message="Success Tips" type="success" showIcon />
    <Alert message="Informational Notes" type="info" showIcon />
    <Alert message="Warning" type="warning" showIcon />
    <Alert message="Error" type="error" showIcon />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </div>,
  mountNode,
);
```

### 自定义关闭

可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。

```jsx live
ReactDOM.render(<Alert message="Info Text" type="info" closeText="Close Now" />, mountNode);
```

### 顶部公告

页面顶部通告形式，默认有图标且`type` 为 'warning'。

```jsx live
ReactDOM.render(
  <div>
    <Alert message="Warning text" banner />
    <br />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <br />
    <Alert type="error" message="Error text" banner />
  </div>,
  mountNode,
);
```

### 平滑地卸载

平滑、自然的卸载提示。

```jsx live
class App extends React.Component {
  state = {
    visible: true,
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        {this.state.visible ? (
          <Alert
            message="Alert Message Text"
            type="success"
            closable
            afterClose={this.handleClose}
          />
        ) : null}
        <p>placeholder text here</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 自定义图标

可口的图标让信息类型更加醒目。

```jsx live
const icon = <Icon type="smile" />;

ReactDOM.render(
  <div>
    <Alert icon={icon} message="showIcon = false" type="success" />
    <Alert icon={icon} message="Success Tips" type="success" showIcon />
    <Alert icon={icon} message="Informational Notes" type="info" showIcon />
    <Alert icon={icon} message="Warning" type="warning" showIcon />
    <Alert icon={icon} message="Error" type="error" showIcon />
    <Alert
      icon={icon}
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      icon={icon}
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <Alert
      icon={icon}
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <Alert
      icon={icon}
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </div>,
  mountNode,
);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - | 3.3.1 |
| banner | 是否用作顶部公告 | boolean | false |  |
| closable | 默认不显示关闭按钮 | boolean | 无 |  |
| closeText | 自定义关闭按钮 | string|ReactNode | 无 |  |
| description | 警告提示的辅助性文字介绍 | string|ReactNode | 无 |  |
| icon | 自定义图标，`showIcon` 为 `true` 时有效 | ReactNode | - | 3.10.0 |
| message | 警告提示内容 | string|ReactNode | 无 |  |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true |  |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`，`banner` 模式下默认值为 `warning` |  |
| onClose | 关闭时触发的回调函数 | (e: MouseEvent) => void | 无 |  |
