---
tags:
  - Components
type: Data Display
title: Badge
------

Small numerical value or status descriptor for UI elements.

## When To Use

Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

## 示例

### Basic

Simplest Usage. Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.

```jsx live
ReactDOM.render(
  <div>
    <Badge count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={0} showZero>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  mountNode,
);
```

### Standalone

Used in standalone when children is empty.

```jsx live
ReactDOM.render(
  <div>
    <Badge count={25} />
    <Badge
      count={4}
      style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
    />
    <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
  </div>,
  mountNode,
);
```

### Overflow Count

`${overflowCount}+` is displayed when count is larger than `overflowCount`. The default value of `overflowCount` is `99`.

```jsx live
ReactDOM.render(
  <div>
    <Badge count={99}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={100}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  mountNode,
);
```

### Red badge

This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot.

```jsx live
ReactDOM.render(
  <div>
    <Badge dot>
      <Icon type="notification" />
    </Badge>
    <Badge count={0} dot>
      <Icon type="notification" />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </div>,
  mountNode,
);
```

### Clickable

The badge can be wrapped with `a` tag to make it linkable.

```jsx live
ReactDOM.render(
  <a href="#">
    <Badge count={5}>
      <span className="head-example" />
    </Badge>
  </a>,
  mountNode,
);
```

### Dynamic

The count will be animated as it changes.

```jsx live
const ButtonGroup = Button.Group;

class Demo extends React.Component {
  state = {
    count: 5,
    show: true,
  };

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  onChange = show => {
    this.setState({ show });
  };

  render() {
    return (
      <div>
        <div>
          <Badge count={this.state.count}>
            <a href="#" className="head-example" />
          </Badge>
          <ButtonGroup>
            <Button onClick={this.decline}>
              <Icon type="minus" />
            </Button>
            <Button onClick={this.increase}>
              <Icon type="plus" />
            </Button>
          </ButtonGroup>
        </div>
        <div style={{ marginTop: 10 }}>
          <Badge dot={this.state.show}>
            <a href="#" className="head-example" />
          </Badge>
          <Switch onChange={this.onChange} checked={this.state.show} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Status

Standalone badge with status.

```jsx live
ReactDOM.render(
  <div>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </div>,
  mountNode,
);
```

### Colorful Badge

New feature after 3.16.0. We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.

```jsx live
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

ReactDOM.render(
  <div>
    <h4 style={{ marginBottom: 16 }}>Presets:</h4>
    <div>
      {colors.map(color => (
        <div key={color}>
          <Badge color={color} text={color} />
        </div>
      ))}
    </div>
    <h4 style={{ margin: '16px 0' }}>Custom:</h4>
    <div>
      <Badge color="#f50" text="#f50" />
      <br />
      <Badge color="#2db7f5" text="#2db7f5" />
      <br />
      <Badge color="#87d068" text="#87d068" />
      <br />
      <Badge color="#108ee9" text="#108ee9" />
    </div>
  </div>,
  mountNode,
);
```

### Title

The badge will display `title` when hovered over, instead of `count`.

```jsx live
ReactDOM.render(
  <div>
    <Badge count={5} title="Custom hover text">
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  mountNode,
);
```

## API

```jsx
<Badge count={5}>
  <a href="#" className="head-example" />
</Badge>
```

```jsx
<Badge count={5} />
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| color | Customize Badge dot color | string | - | 3.16.0 |
| count | Number to show in badge | ReactNode |  |  |
| dot | Whether to display a red dot instead of `count` | boolean | `false` |  |
| offset | set offset of the badge dot, like`[x, y]` | `[number, number]` | - |  |
| overflowCount | Max count to show | number | 99 |  |
| showZero | Whether to show badge when `count` is zero | boolean | `false` |  |
| status | Set Badge as a status dot | `success` | `processing` | `default` | `error` | `warning` | `''` |  |
| text | If `status` is set, `text` sets the display text of the status `dot` | string | `''` |  |
| title | Text to show when hovering over the badge | string | `count` | 3.5.0 |
