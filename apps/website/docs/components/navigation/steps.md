---
tags:
  - Components
subtitle: 步骤条
type: 导航
cols: 1
title: Steps 步骤条
------

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 示例

### 基本用法

简单的步骤条。

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

### 迷你版

迷你版的步骤条，`<Steps size="small">` 启用.

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

### 带图标的步骤条

通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。

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

### 步骤切换

通常配合内容及按钮使用，表示一个流程的处理进度。

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

### 竖直方向的步骤条

简单的竖直方向的步骤条。

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

### 竖直方向的小型步骤条

简单的竖直方向的小型步骤条。

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

### 步骤运行错误

使用 Steps 的 `status` 属性来指定当前步骤的状态。

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

### 点状步骤条

包含步骤点的进度条。

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

### 自定义点状步骤条

为点状步骤条增加自定义展示。

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

### 可点击

设置 `onChange` 后，Steps 变为可点击状态。

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

### 导航步骤

导航类型的步骤条。

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
  <Step title="第一步" />
  <Step title="第二步" />
  <Step title="第三步" />
</Steps>
```

### Steps

整体步骤条。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 步骤条类名 | string | - | 3.11.3 |
| type | 步骤条类型，有 `default` 和 `navigation` 两种 | string | `default` | 3.22.0 |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number | 0 |  |
| direction | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | string | horizontal |  |
| labelPlacement | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方 | string | `horizontal` | 3.7.3 |
| progressDot | 点状步骤条，可以设置为一个 function，labelPlacement 将强制为 `vertical` | Boolean or (iconDot, {index, status, title, description}) => ReactNode | false |  |
| size | 指定大小，目前支持普通（`default`）和迷你（`small`） | string | default |  |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | string | process |  |
| initial | 起始序号，从 0 开始记数 | number | 0 | 3.9.0 |
| onChange | 点击切换步骤时触发 | (current) => void | - | 3.19.0 |

### Steps.Step

步骤条内的每一个步骤。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| description | 步骤的详情描述，可选 | string|ReactNode | - |  |
| icon | 步骤图标的类型，可选 | string|ReactNode | - |  |
| status | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。可选：`wait` `process` `finish` `error` | string | wait |  |
| title | 标题 | string|ReactNode | - |  |
| subTitle | 子标题 | string|ReactNode | - | 3.22.0 |
| disabled | 禁用点击 | boolean | false | 3.22.0 |
