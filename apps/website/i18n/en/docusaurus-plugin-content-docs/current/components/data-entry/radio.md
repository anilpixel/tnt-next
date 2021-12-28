---
tags:
  - Components
type: Data Entry
title: Radio
------

Radio.

## When To Use

*   Used to select a single state from multiple options.
*   The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.

## 示例

### Basic

The simplest use.

```jsx live
ReactDOM.render(<Radio>Radio</Radio>, mountNode);
```

### disabled

Radio unavailable.

```jsx live
class App extends React.Component {
  state = {
    disabled: true,
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <div>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Radio Group

A group of radio components.

```jsx live
class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Vertical Radio.Group

Vertical Radio.Group, with more radios.

```jsx live
class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1}>
          Option A
        </Radio>
        <Radio style={radioStyle} value={2}>
          Option B
        </Radio>
        <Radio style={radioStyle} value={3}>
          Option C
        </Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </Radio.Group>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Radio.Group group - optional

Render radios by configuring `options`.

```jsx live
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class App extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  };

  onChange1 = e => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  };

  onChange2 = e => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value,
    });
  };

  onChange3 = e => {
    console.log('radio3 checked', e.target.value);
    this.setState({
      value3: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Radio.Group options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
        <Radio.Group options={options} onChange={this.onChange2} value={this.state.value2} />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={this.onChange3}
          value={this.state.value3}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### radio style

The combination of radio button style.

```jsx live
function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

ReactDOM.render(
  <div>
    <div>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
    <div style={{ marginTop: 16 }}>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b" disabled>
          Shanghai
        </Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
    <div style={{ marginTop: 16 }}>
      <Radio.Group disabled onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
  </div>,
  mountNode,
);
```

### Radio.Group with name

Passing the `name` property to all `input\[type="radio"]` that are in the same Radio.Group. It is usually used to let the browser see your Radio.Group as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same Radio.Group.

```jsx live
function App() {
  return (
    <Radio.Group name="radiogroup" defaultValue={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
}

ReactDOM.render(<App />, mountNode);
```

### Size

There are three sizes available: large, medium, and small. It can coordinate with input box.

```jsx live
ReactDOM.render(
  <div>
    <div>
      <Radio.Group defaultValue="a" size="large">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
    <div style={{ marginTop: 16 }}>
      <Radio.Group defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
    <div style={{ marginTop: 16 }}>
      <Radio.Group defaultValue="a" size="small">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
  </div>,
  mountNode,
);
```

### Solid radio button

Solid radio button style.

```jsx live
ReactDOM.render(
  <div>
    <div>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
    <div style={{ marginTop: 16 }}>
      <Radio.Group defaultValue="c" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b" disabled>
          Shanghai
        </Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
  </div>,
  mountNode,
);
```

## API

### Radio

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | get focus when component mounted | boolean | false |  |
| checked | Specifies whether the radio is selected. | boolean | - |  |
| defaultChecked | Specifies the initial state: whether or not the radio is selected. | boolean | false |  |
| disabled | Disable radio | boolean | false |  |
| value | According to value for comparison, to determine whether the selected | any | - |  |

### RadioGroup

Radio group can wrap a group of `Radio`。

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | Default selected value | any | - |  |
| disabled | Disable all radio buttons | boolean | false |  |
| name | The `name` property of all `input[type="radio"]` children | string | - |  |
| options | set children optional | string\[] | Array<{ label: string value: string disabled?: boolean }> | - |  |
| size | size for radio button style | `large` | `default` | `small` | `default` |  |
| value | Used for setting the currently selected value. | any | - |  |
| onChange | The callback function that is triggered when the state changes. | Function(e:Event) | - |  |
| buttonStyle | style type of radio button | `outline` | `solid` | `outline` | 3.7.0 |

## Methods

### Radio

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |
