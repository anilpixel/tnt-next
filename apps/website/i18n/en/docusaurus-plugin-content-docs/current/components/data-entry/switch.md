---
tags:
  - Components
type: Data Entry
title: Switch
------

Switching Selector.

## When To Use

*   If you need to represent the switching between two states or on-off state.
*   The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

## 示例

### Basic

The most basic usage.

```jsx live
function onChange(checked) {
  console.log(`switch to ${checked}`);
}

ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode);
```

### Disabled

Disabled state of `Switch`.

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
        <Switch disabled={this.state.disabled} defaultChecked />
        <br />
        <Button type="primary" onClick={this.toggle}>
          Toggle disabled
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Text & icon

With text and icon.

```jsx live
ReactDOM.render(
  <div>
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<Icon type="check" />}
      unCheckedChildren={<Icon type="close" />}
      defaultChecked
    />
  </div>,
  mountNode,
);
```

### Two sizes

`size="small"` represents a small sized switch.

```jsx live
ReactDOM.render(
  <div>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </div>,
  mountNode,
);
```

### Loading

Mark a pending state of switch.

```jsx live
ReactDOM.render(
  <div>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </div>,
  mountNode,
);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | get focus when component mounted | boolean | false |  |
| checked | determine whether the `Switch` is checked | boolean | false |  |
| checkedChildren | content to be shown when the state is checked | string|ReactNode |  |  |
| defaultChecked | to set the initial state | boolean | false |  |
| disabled | Disable switch | boolean | false |  |
| loading | loading state of switch | boolean | false |  |
| size | the size of the `Switch`, options: `default` `small` | string | default |  |
| unCheckedChildren | content to be shown when the state is unchecked | string|ReactNode |  |  |
| onChange | trigger when the checked state is changing | Function(checked: boolean, event: Event) |  |  |
| onClick | trigger when clicked | Function(checked: boolean, event: Event) |  | 3.13.0 |
| className | additional class to Switch | string | - | 3.10.1 |

## Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |
