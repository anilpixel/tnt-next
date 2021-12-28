---
tags:
  - Components
type: Data Entry
title: Slider
------

A Slider component for displaying current value and intervals in range.

## When To Use

To input a value in a range.

## 示例

### Basic

Basic slider. When `range` is `true`, display as dual thumb mode. When `disable` is `true`, the slider will not be interactable.

```jsx live
class Demo extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Slider with InputNumber

Synchronize with \[InputNumber]\(/components/input-number/) component.

```jsx live
class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  };

  onChange = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={1}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.01}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

ReactDOM.render(
  <div>
    <IntegerStep />
    <DecimalStep />
  </div>,
  mountNode,
);
```

### Slider with icon

You can add an icon beside the slider to make it meaningful.

```jsx live
class IconSlider extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    return (
      <div className="icon-wrapper">
        <Icon style={{ color: preColor }} type="frown-o" />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <Icon style={{ color: nextColor }} type="smile-o" />
      </div>
    );
  }
}

ReactDOM.render(<IconSlider min={0} max={20} />, mountNode);
```

### Customize tooltip

Use `tipFormatter` to format content of `Toolip`. If `tipFormatter` is null, hide it.

```jsx live
function formatter(value) {
  return `${value}%`;
}

ReactDOM.render(
  <div>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </div>,
  mountNode,
);
```

### Event

The `onChange` callback function will fire when the user changes the slider's value. The `onAfterChange` callback function will fire when `onmouseup` fired.

```jsx live
function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

ReactDOM.render(
  <div>
    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </div>,
  mountNode,
);
```

### Graduated slider

Using `marks` property to mark a graduated slider, use `value` or `defaultValue` to specify the position of thumb. When `included` is false, means that different thumbs are coordinative. when `step` is null, users can only slide the thumbs onto marks.

```jsx live
const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

ReactDOM.render(
  <div>
    <h4>included=true</h4>
    <Slider marks={marks} defaultValue={37} />
    <Slider range marks={marks} defaultValue={[26, 37]} />

    <h4>included=false</h4>
    <Slider marks={marks} included={false} defaultValue={37} />

    <h4>marks & step</h4>
    <Slider marks={marks} step={10} defaultValue={37} />

    <h4>step=null</h4>
    <Slider marks={marks} step={null} defaultValue={37} />
  </div>,
  mountNode,
);
```

### Vertical

The vertical Slider.

```jsx live
const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

ReactDOM.render(
  <div>
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider vertical range step={10} defaultValue={[20, 50]} />
    </div>
    <div style={style}>
      <Slider vertical range marks={marks} defaultValue={[26, 37]} />
    </div>
  </div>,
  mountNode,
);
```

### Control visible of ToolTip

When `tooltipVisible` is `true`, ToolTip will show always, or ToolTip will not show anyway, even if dragging or hovering.

```jsx live
ReactDOM.render(<Slider defaultValue={30} tooltipVisible />, mountNode);
```

### Reverse

Using `reverse` to render slider reversely.

```jsx live
class Demo extends React.Component {
  state = {
    reverse: true,
  };

  handleReverseChange = reverse => {
    this.setState({ reverse });
  };

  render() {
    const { reverse } = this.state;
    return (
      <div>
        <Slider defaultValue={30} reverse={reverse} />
        <Slider range defaultValue={[20, 50]} reverse={reverse} />
        Reversed: <Switch size="small" checked={reverse} onChange={this.handleReverseChange} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | get focus when component mounted | boolean | false |  |
| defaultValue | The default value of slider. When `range` is `false`, use `number`, otherwise, use `[number, number]` | number|number\[] | 0 or \[0, 0] |  |
| disabled | If true, the slider will not be interactable. | boolean | false |  |
| dots | Whether the thumb can drag over tick only. | boolean | false |  |
| included | Make effect when `marks` not null, `true` means containment and `false` means coordinative | boolean | true |  |
| marks | Tick mark of Slider, type of key must be `number`, and must in closed interval \[min, max], each mark can declare its own style. | object | { number: string|ReactNode } or { number: { style: object, label: string|ReactNode } } |  |
| max | The maximum value the slider can slide to | number | 100 |  |
| min | The minimum value the slider can slide to. | number | 0 |  |
| range | dual thumb mode | boolean | false |  |
| reverse | reverse the component | boolean | false | 3.24.0 |
| step | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null`. | number|null | 1 |  |
| tipFormatter | Slider will pass its value to `tipFormatter`, and display its value in Tooltip, and hide Tooltip when return value is null. | Function|null | IDENTITY |  |
| value | The value of slider. When `range` is `false`, use `number`, otherwise, use `[number, number]` | number|number\[] |  |
| vertical | If true, the slider will be vertical. | Boolean | false |  |
| onAfterChange | Fire when `onmouseup` is fired. | Function(value) | NOOP |  |
| onChange | Callback function that is fired when the user changes the slider's value. | Function(value) | NOOP |  |
| tooltipPlacement | Set Tooltip display position. Ref [`Tooltip`](/components/tooltip/). | string |  | 3.19.0 |
| tooltipVisible | If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering. | Boolean |  | 3.11.0 |
| getTooltipPopupContainer | The DOM container of the Tooltip, the default behavior is to create a div element in body. | Function | () => document.body | 3.19.0 |

## Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |
