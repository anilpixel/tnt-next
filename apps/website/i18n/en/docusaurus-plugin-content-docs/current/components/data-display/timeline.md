---
tags:
  - Components
type: Data Display
title: Timeline
------

Vertical display timeline.

## When To Use

*   When a series of information needs to be ordered by time (ascending or descending).
*   When you need a timeline to make a visual connection.

## 示例

### Basic

Basic timeline.

```jsx live
ReactDOM.render(
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### Color

Set the color of circles. `green` means completed or success status, `red` means warning or error, and `blue` means ongoing or other default status, `gray` for unfinished or disabled status.

```jsx live
ReactDOM.render(
  <Timeline>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### Last node and Reversing

When the timeline is incomplete and ongoing, put a ghost node at last. Set `pending` as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, `pendingDot={a React Element}` is used to customize the dot of the pending item. `reverse={true}` is used for reversing nodes.

```jsx live
class PendingTimeLine extends React.Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <Timeline pending="Recording..." reverse={this.state.reverse}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>
          Toggle Reverse
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<PendingTimeLine />, mountNode);
```

### Alternate

Alternate timeline.

```jsx live
ReactDOM.render(
  <Timeline mode="alternate">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </Timeline.Item>
    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
      Technical testing 2015-09-01
    </Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### Custom

Set a node as an icon or other custom element.

```jsx live
ReactDOM.render(
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

### Right alternate

Right alternate timeline.

```jsx live
ReactDOM.render(
  <Timeline mode="right">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,
  mountNode,
);
```

## API

```jsx
<Timeline>
  <Timeline.Item>step1 2015-09-01</Timeline.Item>
  <Timeline.Item>step2 2015-09-01</Timeline.Item>
  <Timeline.Item>step3 2015-09-01</Timeline.Item>
  <Timeline.Item>step4 2015-09-01</Timeline.Item>
</Timeline>
```

### Timeline

Timeline

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| pending | Set the last ghost node's existence or its content | boolean|string|ReactNode | `false` |  |
| pendingDot | Set the dot of the last ghost node when pending is true | string|ReactNode | `<Icon type="loading" />` | 3.3.0 |
| reverse | reverse nodes or not | boolean | false | 3.5.0 |
| mode | By sending `alternate` the timeline will distribute the nodes to the left and right. | `left` | `alternate` | `right` | - | 3.8.0 |

### Timeline.Item

Node of timeline

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| color | Set the circle's color to `blue`, `red`, `green`, `gray` or other custom colors | string | `blue` |  |
| dot | Customize timeline dot | string|ReactNode | - |  |
| position | Customize node position | `left` | `right` | - | 3.17.0 |
