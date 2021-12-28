---
tags:
  - Components
type: Data Entry
title: InputNumber
---------

Enter a number within certain range with the mouse or keyboard.

## When To Use

When a numeric value needs to be provided.

## 示例

### Basic

Numeric-only input box.

```jsx live
function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />, mountNode);
```

### Sizes

There are three sizes available to a numeric input box. By default, the size is `32px`. The two additional sizes are `large` and `small` which means `40px` and `24px`, respectively.

```jsx live
function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>,
  mountNode,
);
```

### Disabled

Click the button to toggle between available and disabled states.

```jsx live
class App extends React.Component {
  state = {
    disabled: true,
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <div>
        <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            Toggle disabled
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Decimals

A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop.

```jsx live
function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(<InputNumber min={0} max={10} step={0.1} onChange={onChange} />, mountNode);
```

### Formatter

Display value within it's situation with `formatter`, and we usually use `parser` at the same time.

```jsx live
function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
      onChange={onChange}
    />
  </div>,
  mountNode,
);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | get focus when component mounted | boolean | false |  |
| defaultValue | initial value | number |  |  |
| disabled | disable the input | boolean | false |  |
| formatter | Specifies the format of the value presented | function(value: number | string): string | - |  |
| max | max value | number | Infinity |  |
| min | min value | number | -Infinity |  |
| parser | Specifies the value extracted from formatter | function( string): number | - |  |
| precision | precision of input value | number | - |  |
| decimalSeparator | decimal separator | string | - | 3.10.1 |
| size | height of input box | string | - |  |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal. | number|string | 1 |  |
| value | current value | number |  |  |
| onChange | The callback triggered when the value is changed. | function(value: number | string) |  |  |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |  |  |

## Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |
