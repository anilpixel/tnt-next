---
tags:
  - Components
type: Feedback
title: Alert
------

Alert component for feedback.

## When To Use

*   When you need to show alert messages to users.
*   When you need a persistent static container which is closable by user actions.

## 示例

### Basic

The simplest usage for short messages.

```jsx live
ReactDOM.render(<Alert message="Success Text" type="success" />, mountNode);
```

### More types

There are 4 types of Alert: `success`, `info`, `warning`, `error`.

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

### Closable

To show close button.

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

### Description

Additional description for alert message.

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

### Icon

A relevant icon will make information clearer and more friendly.

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

### Customized Close Text

Replace the default icon with customized text.

```jsx live
ReactDOM.render(<Alert message="Info Text" type="info" closeText="Close Now" />, mountNode);
```

### Banner

Display Alert as a banner at top of page.

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

### Smoothly Unmount

Smoothly unmount Alert upon close.

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

### Custom Icon

A relevant icon makes information clearer and more friendly.

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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| afterClose | Called when close animation is finished | () => void | - | 3.3.1 |
| banner | Whether to show as banner | boolean | false |  |
| closable | Whether Alert can be closed | boolean | - |  |
| closeText | Close text to show | string|ReactNode | - |  |
| description | Additional content of Alert | string|ReactNode | - |  |
| icon | Custom icon, effective when `showIcon` is `true` | ReactNode | - | 3.10.0 |
| message | Content of Alert | string|ReactNode | - |  |
| showIcon | Whether to show icon | boolean | false, in `banner` mode default is true |  |
| type | Type of Alert styles, options: `success`, `info`, `warning`, `error` | string | `info`, in `banner` mode default is `warning` |  |
| onClose | Callback when Alert is closed | (e: MouseEvent) => void | - |  |
