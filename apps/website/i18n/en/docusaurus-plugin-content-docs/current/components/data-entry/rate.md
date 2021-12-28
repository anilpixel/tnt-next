---
tags:
  - Components
type: Data Entry
title: Rate
------

Rate component.

## When To Use

*   Show evaluation.
*   A quick rating operation on something.

## 示例

### Basic

The simplest usage.

```jsx live
ReactDOM.render(<Rate />, mountNode);
```

### Half star

Support select half star.

```jsx live
ReactDOM.render(<Rate allowHalf defaultValue={2.5} />, mountNode);
```

### Show copywriting

Add copywriting in rate components.

```jsx live
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}

ReactDOM.render(<Rater />, mountNode);
```

### Read only

Read only, can't use mouse to interact.

```jsx live
ReactDOM.render(<Rate disabled defaultValue={2} />, mountNode);
```

### Clear star

Support set allow to clear star when click again.

```jsx live
ReactDOM.render(
  <div>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">allowClear: false</span>
  </div>,
  mountNode,
);
```

### Other Character

Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.

```jsx live
ReactDOM.render(
  <div>
    <Rate character={<Icon type="heart" />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </div>,
  mountNode,
);
```

## API

| Property | Description | type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | whether to allow clear when click again | boolean | true | 3.1.0 |
| allowHalf | whether to allow semi selection | boolean | false |  |
| autoFocus | get focus when component mounted | boolean | false |  |
| character | custom character of rate | ReactNode | `<Icon type="star" />` |  |
| className | custom class name of rate | string | - |  |
| count | star count | number | 5 |  |
| defaultValue | default value | number | 0 |  |
| disabled | read only, unable to interact | boolean | false |  |
| style | custom style object of rate | object | - |  |
| tooltips | Customize tooltip by each character | string\[] | - | 3.12.0 |
| value | current value | number | - |  |
| onBlur | callback when component lose focus | Function() | - |  |
| onChange | callback when select value | Function(value: number) | - |  |
| onFocus | callback when component get focus | Function() | - |  |
| onHoverChange | callback when hover item | Function(value: number) | - |  |
| onKeyDown | callback when keydown on component | Function(event) | - |  |

## Methods

| Name    | Description  | Version |
| ------- | --- | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |
