---
tags:
  - Components
type: Feedback
noinstant: true
title: Notification
----------

Display a notification message globally.

## When To Use

To display a notification message at any of the four corners of the viewport. Typically it can be used in the following cases:

*   A notification with complex content.
*   A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.
*   A notification that is pushed by the application.

## 示例

### Basic

The simplest usage that close the notification box after 4.5s.

```jsx live
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
);
```

### Duration after which the notification box is closed

`Duration` can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.

```jsx live
const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  notification.open(args);
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
);
```

### Notification with icon

A notification box with a icon at the left side.

```jsx live
const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

ReactDOM.render(
  <div>
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
  </div>,
  mountNode,
);
```

### Custom close button

To customize the style or font of the close button.

```jsx live
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description:
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
);
```

### Customized Icon

The icon can be customized to any react node.

```jsx live
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
);
```

### Placement

A notification box can appear from the `topRight`, `bottomRight`, `bottomLeft` or `topLeft` of the viewport.

```jsx live
const openNotification = placement => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};

ReactDOM.render(
  <div>
    <Button type="primary" onClick={() => openNotification('topLeft')}>
      <Icon type="radius-upleft" />
      topLeft
    </Button>
    <Button type="primary" onClick={() => openNotification('topRight')}>
      <Icon type="radius-upright" />
      topRight
    </Button>
    <Divider />
    <Button type="primary" onClick={() => openNotification('bottomLeft')}>
      <Icon type="radius-bottomleft" />
      bottomLeft
    </Button>
    <Button type="primary" onClick={() => openNotification('bottomRight')}>
      <Icon type="radius-bottomright" />
      bottomRight
    </Button>
  </div>,
  mountNode,
);
```

### Customized style

The style and className are available to customize Notification.

```jsx live
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
);
```

### Update Message Content

Update content with unique key.

```jsx live
const key = 'updatable';

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode,
);
```

## API

*   `notification.success(config)`
*   `notification.error(config)`
*   `notification.info(config)`
*   `notification.warning(config)`
*   `notification.warn(config)`
*   `notification.open(config)`
*   `notification.close(key: String)`
*   `notification.destroy()`

The properties of config are as follows:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bottom | Distance from the bottom of the viewport, when `placement` is `bottomRight` or `bottomLeft` (unit: pixels). | number | 24 |  |
| btn | Customized close button | ReactNode | - |  |
| className | Customized CSS class | string | - |  |
| description | The content of notification box (required) | string|ReactNode | - |  |
| duration | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | number | 4.5 |  |
| getContainer | Return the mount node for Notification | () => HTMLNode | () => document.body |  |
| icon | Customized icon | ReactNode | - |  |
| key | The unique identifier of the Notification | string | - |  |
| message | The title of notification box (required) | string|ReactNode | - |  |
| onClose | Specify a function that will be called when the close button is clicked | Function | - |  |
| onClick | Specify a function that will be called when the notification is clicked | Function | - | 3.11.0 |
| placement | Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `topRight` |  |
| style | Customized inline style | [React.CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - |  |
| top | Distance from the top of the viewport, when `placement` is `topRight` or `topLeft` (unit: pixels). | number | 24 |  |
| closeIcon | custom close icon | ReactNode | - | 3.26.0 |

`notification` also provides a global `config()` method that can be used for specifying the default options. Once this method is used, all the notification boxes will take into account these globally defined options when displaying.

*   `notification.config(options)`

```js
notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
});
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bottom | Distance from the bottom of the viewport, when `placement` is `bottomRight` or `bottomLeft` (unit: pixels). | number | 24 |  |
| duration | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | number | 4.5 |  |
| getContainer | Return the mount node for Notification | () => HTMLNode | () => document.body |  |
| placement | Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `topRight` |  |
| top | Distance from the top of the viewport, when `placement` is `topRight` or `topLeft` (unit: pixels). | number | 24 |  |
| closeIcon | custom close icon | ReactNode | - | 3.25.0 |
