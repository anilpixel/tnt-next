---
tags:
  - Components
type: Feedback
title: Progress
------

Display the current progress of an operation flow.

## When To Use

If it will take a long time to complete an operation, you can use `Progress` to show the current progress and status.

*   When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
*   When you need to display the completion percentage of an operation.

## 示例

### Progress bar

A standard progress bar.

```jsx live
ReactDOM.render(
  <div>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </div>,
  mountNode,
);
```

### Circular progress bar

A circular progress bar.

```jsx live
ReactDOM.render(
  <div>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </div>,
  mountNode,
);
```

### Mini size progress bar

Appropriate for a narrow area.

```jsx live
ReactDOM.render(
  <div style={{ width: 170 }}>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>,
  mountNode,
);
```

### Mini size circular progress bar

A smaller circular progress bar.

```jsx live
ReactDOM.render(
  <div>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </div>,
  mountNode,
);
```

### Dynamic circular progress bar

A dynamic progress bar is better.

```jsx live
const ButtonGroup = Button.Group;

class App extends React.Component {
  state = {
    percent: 0,
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  render() {
    return (
      <div>
        <Progress type="circle" percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Dynamic

A dynamic progress bar is better.

```jsx live
const ButtonGroup = Button.Group;

class App extends React.Component {
  state = {
    percent: 0,
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Custom text format

You can set a custom text by setting the `format` prop.

```jsx live
ReactDOM.render(
  <div>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </div>,
  mountNode,
);
```

### Dashboard

By setting `type=dashboard`, you can get a dashboard style of progress easily.

```jsx live
ReactDOM.render(<Progress type="dashboard" percent={75} />, mountNode);
```

### Progress bar with success segment

A standard progress bar.

```jsx live
ReactDOM.render(
  <div>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} successPercent={30} />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} successPercent={30} type="circle" />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} successPercent={30} type="dashboard" />
    </Tooltip>
  </div>,
  mountNode,
);
```

### Square linecaps

By setting `strokeLinecap="square"`, you can change the linecaps from round to square.

```jsx live
ReactDOM.render(
  <div>
    <Progress strokeLinecap="square" percent={75} />
    <Progress strokeLinecap="square" type="circle" percent={75} />
    <Progress strokeLinecap="square" type="dashboard" percent={75} />
  </div>,
  mountNode,
);
```

### Custom line gradient

A package of `linear-gradient`. It is recommended to only pass two colors.

```jsx live
const Demo = () => (
  <div>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={99.9}
    />
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={99.9}
      status="active"
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={90}
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
    />
  </div>
);

ReactDOM.render(<Demo />, mountNode);
```

## API

Properties that shared by all types.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| type | to set the type, options: `line` `circle` `dashboard` | string | `line` |  |
| format | template function of the content | function(percent, successPercent) | `percent => percent + '%'` |  |
| percent | to set the completion percentage | number | 0 |  |
| showInfo | whether to display the progress value and the status icon | boolean | true |  |
| status | to set the status of the Progress, options: `success` `exception` `normal` `active`(line only) | string | - |  |
| strokeLinecap | to set the style of the progress linecap | Enum{ 'round', 'square' } | `round` | 3.8.0 |
| strokeColor | color of progress bar | string | - | 3.7.0 |
| successPercent | segmented success percent | number | 0 | 3.2.0 |

### `type="line"`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| strokeWidth | to set the width of the progress bar, unit: `px` | number | 10 | 3.13.1 |
| strokeColor | color of progress bar, render `linear-gradient` when passing an object | string | { from: string; to: string; direction: string } | - | 3.16.0 |

### `type="circle"`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| width | to set the canvas width of the circular progress, unit: `px` | number | 132 | 3.13.1 |
| strokeWidth | to set the width of the circular progress, unit: percentage of the canvas width | number | 6 | 3.13.1 |
| strokeColor | color of circular progress, render `linear-gradient` when passing an object | string | object | - | 3.19.8 |

### `type="dashboard"`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| width | to set the canvas width of the dashboard progress, unit: `px` | number | 132 | 3.13.1 |
| strokeWidth | to set the width of the dashboard progress, unit: percentage of the canvas width | number | 6 | 3.13.1 |
| gapDegree | the gap degree of half circle, 0 ~ 360 | number | 0 | 3.13.1 |
| gapPosition | the gap position, options: `top` `bottom` `left` `right` | string | `top` | 3.13.1 |
