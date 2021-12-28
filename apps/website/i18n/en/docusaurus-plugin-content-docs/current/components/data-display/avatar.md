---
tags:
  - Components
type: Data Display
title: Avatar
------

Avatars can be used to represent people or objects. It supports images, `Icon`s, or letters.

## 示例

### Basic

Three sizes and two shapes are available.

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

### Type

Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.

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

### Autoset Font Size

For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.

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

### With Badge

Usually used for reminders and notifications.

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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| icon | the `Icon` type for an icon avatar, see `Icon` Component or use ReactNode | string | ReactNode | - |  |
| shape | the shape of avatar | `circle` | `square` | `circle` |  |
| size | the size of the avatar | number | string: `large` `small` `default` | `default` |  |
| src | the address of the image for an image avatar | string | - |  |
| srcSet | a list of sources to use for different screen resolutions | string | - | 3.11.0 |
| alt | This attribute defines the alternative text describing the image | string | - | 3.7.0 |
| onError | handler when img load error, return false to prevent default fallback behavior | () => boolean | - | 3.8.0 |
