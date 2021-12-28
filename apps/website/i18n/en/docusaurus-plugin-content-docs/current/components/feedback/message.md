---
tags:
  - Components
type: Feedback
noinstant: true
title: Message
------

Display global messages as feedback in response to user operations.

## When To Use

*   To provide feedback such as success, warning, error etc.
*   A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.

## 示例

### Normal prompt

Normal message for information.

```jsx live
const info = () => {
  message.info('This is a normal message');
};

ReactDOM.render(
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>,
  mountNode,
);
```

### Other types of message

Messages of success, error and warning types.

```jsx live
const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

ReactDOM.render(
  <div>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </div>,
  mountNode,
);
```

### Customize duration

Customize message display duration from default `3s` to `10s`.

```jsx live
const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

ReactDOM.render(<Button onClick={success}>Customized display duration</Button>, mountNode);
```

### Message with loading indicator

Display a global loading indicator, which is dismissed by itself asynchronously.

```jsx live
const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

ReactDOM.render(<Button onClick={success}>Display a loading indicator</Button>, mountNode);
```

### Promise interface

`message` provides a promise interface for `onClose`. The above example will display a new message when the old message is about to close.

```jsx live
const success = () => {
  message
    .loading('Action in progress..', 2.5)
    .then(() => message.success('Loading finished', 2.5))
    .then(() => message.info('Loading finished is finished', 2.5));
};

ReactDOM.render(<Button onClick={success}>Display sequential messages</Button>, mountNode);
```

### Update Message Content

Update message content with unique `key`.

```jsx live
const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

ReactDOM.render(
  <Button type="primary" onClick={openMessage}>
    Open the message box
  </Button>,
  mountNode,
);
```

## API

This components provides some static methods, with usage and arguments as following:

*   `message.success(content, [duration], onClose)`
*   `message.error(content, [duration], onClose)`
*   `message.info(content, [duration], onClose)`
*   `message.warning(content, [duration], onClose)`
*   `message.warn(content, [duration], onClose)` // alias of warning
*   `message.loading(content, [duration], onClose)`

| Argument | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| content | content of the message | string|ReactNode|config | - |  |
| duration | time(seconds) before auto-dismiss, don't dismiss if set to 0 | number | 1.5 |  |
| onClose | Specify a function that will be called when the message is closed | Function | - |  |

`afterClose` can be called in thenable interface:

*   `message[level](content, [duration]).then(afterClose)`
*   `message[level](content, [duration], onClose).then(afterClose)`

where `level` refers one static methods of `message`. The result of `then` method will be a Promise.

Supports passing parameters wrapped in an object:

*   `message.open(config)`
*   `message.success(config)`
*   `message.error(config)`
*   `message.info(config)`
*   `message.warning(config)`
*   `message.warn(config)` // alias of warning
*   `message.loading(config)`

The properties of config are as follows:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| content | content of the message | ReactNode | - |  |
| duration | time(seconds) before auto-dismiss, don't dismiss if set to 0 | number | 3 |  |
| onClose | Specify a function that will be called when the message is closed | function | - |  |
| icon | Customized Icon | ReactNode | - | 3.9.0 |
| key | The unique identifier of the Message | string|number | - | 3.24.0 |

### Global static methods

Methods for global configuration and destruction are also provided:

*   `message.config(options)`
*   `message.destroy()`

#### message.config

```js
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});
```

| Argument | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| duration | time before auto-dismiss, in seconds | number | 1.5 | 3.9.0 |
| getContainer | Return the mount node for Message | () => HTMLElement | () => document.body | 3.9.0 |
| maxCount | max message show, drop oldest if exceed limit | number | - | 3.9.0 |
| top | distance from top | number | 24 | 3.9.0 |
