---
tags:
  - Components
type: Navigation
cols: 1
title: Steps
------

`Steps` is a navigation bar that guides users through the steps of a task.

## When To Use

When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.

## 示例

### Basic

The most basic step bar.

```jsx live
const { Step } = Steps;

ReactDOM.render(
  <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
  mountNode,
);
```

### Mini version

By setting like this: `\<Steps size="small">`, you can get a mini version.

```jsx live
const { Step } = Steps;

ReactDOM.render(
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>,
  mountNode,
);
```

### With icon

You can use your own custom icons by setting the property `icon` for `Steps.Step`.

```jsx live
const { Step } = Steps;

ReactDOM.render(
  <Steps>
    <Step status="finish" title="Login" icon={<Icon type="user" />} />
    <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
    <Step status="process" title="Pay" icon={<Icon type="loading" />} />
    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
  </Steps>,
  mountNode,
);
```

### Switch Step

Cooperate with the content and buttons, to represent the progress of a process.

```jsx live
class App extends React.Component {
  state = {
    current: 0,
  }

  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const steps = [
      {
        title: 'First',
        content: 'First-content',
      },
      {
        title: 'Second',
        content: 'Second-content',
      },
      {
        title: 'Last',
        content: 'Last-content',
      },
    ];

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Steps.Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Vertical

A simple step bar in the vertical direction.

```jsx live
const { Step } = Steps;

ReactDOM.render(
  <Steps direction="vertical" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
  mountNode,
);
```

### Vertical mini version

A simple mini version step bar in the vertical direction.

```jsx live
const { Step } = Steps;

ReactDOM.render(
  <Steps direction="vertical" size="small" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
  mountNode,
);
```

### Error status

By using `status` of `Steps`, you can specify the state for current step.

```jsx live
const { Step } = Steps;

ReactDOM.render(
  <Steps current={1} status="error">
    <Step title="Finished" description="This is a description" />
    <Step title="In Process" description="This is a description" />
    <Step title="Waiting" description="This is a description" />
  </Steps>,
  mountNode,
);
```

### Dot Style

Steps with progress dot style.

```jsx live
const { Step } = Steps;

ReactDOM.render(
  <div>
    <Steps progressDot current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    <Divider />
    <Steps progressDot current={1} direction="vertical">
      <Step title="Finished" description="This is a description. This is a description." />
      <Step title="Finished" description="This is a description. This is a description." />
      <Step title="In Progress" description="This is a description. This is a description." />
      <Step title="Waiting" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  </div>,
  mountNode,
);
```

### Customized Dot Style

You can customize the display for Steps with progress dot style.

```jsx live
const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

ReactDOM.render(
  <Steps current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>,
  mountNode,
);
```

### Clickable

Setting `onChange` makes Steps clickable.

```jsx live
const { Step } = Steps;

class Demo extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <div>
        <Steps current={current} onChange={this.onChange}>
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>

        <Divider />

        <Steps current={current} onChange={this.onChange} direction="vertical">
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Navigation Steps

Navigation steps.

```jsx live
const { Step } = Steps;

const stepStyle = {
  marginBottom: 60,
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};

class Demo extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={this.onChange}
          style={stepStyle}
        >
          <Step
            title="Step 1"
            subTitle="00:00:05"
            status="finish"
            description="This is a description."
          />
          <Step
            title="Step 2"
            subTitle="00:01:02"
            status="process"
            description="This is a description."
          />
          <Step
            title="Step 3"
            subTitle="waiting for longlong time"
            status="wait"
            description="This is a description."
          />
        </Steps>
        <Steps type="navigation" current={current} onChange={this.onChange} style={stepStyle}>
          <Step status="finish" title="Step 1" />
          <Step status="process" title="Step 2" />
          <Step status="wait" title="Step 3" />
          <Step status="wait" title="Step 4" />
        </Steps>
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={this.onChange}
          style={stepStyle}
        >
          <Step status="finish" title="finish 1" />
          <Step status="finish" title="finish 2" />
          <Step status="process" title="current process" />
          <Step status="wait" title="wait" disabled />
        </Steps>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

```jsx
<Steps>
  <Step title="first step" />
  <Step title="second step" />
  <Step title="third step" />
</Steps>
```

### Steps

The whole of the step bar.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| className | Additional class to Steps | string | - | 3.11.3 |
| type | Type of steps, can be set to one of the following values: `default`, `navigation` | string | `default` | 3.22.0 |
| current | To set the current step, counting from 0. You can overwrite this state by using `status` of `Step` | number | 0 |  |
| direction | To specify the direction of the step bar, `horizontal` or `vertical` | string | `horizontal` |  |
| labelPlacement | Place title and description with `horizontal` or `vertical` direction | string | `horizontal` | 3.7.3 |
| progressDot | Steps with progress dot style, customize the progress dot by setting it to a function. labelPlacement will be `vertical` | Boolean or (iconDot, {index, status, title, description}) => ReactNode | false |  |
| size | To specify the size of the step bar, `default` and `small` are currently supported | string | `default` |  |
| status | To specify the status of current step, can be set to one of the following values: `wait` `process` `finish` `error` | string | `process` |  |
| initial | Set the initial step, counting from 0 | number | 0 | 3.9.0 |
| onChange | Trigger when Step is changed | (current) => void | - | 3.19.0 |

### Steps.Step

A single step in the step bar.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| description | Description of the step, optional property | string|ReactNode | - |  |
| icon | Icon of the step, optional property | string|ReactNode | - |  |
| status | To specify the status. It will be automatically set by `current` of `Steps` if not configured. Optional values are: `wait` `process` `finish` `error` | string | `wait` |  |
| title | Title of the step | string|ReactNode | - |  |
| subTitle | Subtitle of the step | string|ReactNode | - | 3.22.0 |
| disabled | Disable click | boolean | false | 3.22.0 |
