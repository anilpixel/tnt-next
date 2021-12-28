---
tags:
  - Components
type: Data Entry
title: Checkbox
------

Checkbox component.

## When To Use

*   Used for selecting multiple values from several options.
*   If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## 示例

### Basic

Basic usage of checkbox.

```jsx live
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, mountNode);
```

### Disabled

Disabled checkbox.

```jsx live
ReactDOM.render(
  <div>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div>,
  mountNode,
);
```

### Controlled Checkbox

Communicated with other components.

```jsx live
class App extends React.Component {
  state = {
    checked: true,
    disabled: false,
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  onChange = e => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
      this.state.disabled ? 'Disabled' : 'Enabled'
    }`;
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small" onClick={this.toggleChecked}>
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{ marginLeft: '10px' }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </Button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Checkbox Group

Generate a group of checkboxes from an array.

```jsx live
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

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

ReactDOM.render(
  <div>
    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </div>,
  mountNode,
);
```

### Check all

The `indeterminate` property can help you to achieve a 'check all' effect.

```jsx live
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class App extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Use with Grid

We can use Checkbox and Grid in Checkbox.Group, to implement complex layout.

```jsx live
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

ReactDOM.render(
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>,
  mountNode,
);
```

## API

### Props

#### Checkbox

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | get focus when component mounted | boolean | false | 3.6.2 |
| checked | Specifies whether the checkbox is selected. | boolean | false | 3.6.2 |
| defaultChecked | Specifies the initial state: whether or not the checkbox is selected. | boolean | false | 3.6.2 |
| disabled | Disable checkbox | boolean | false | 3.6.2 |
| indeterminate | indeterminate checked state of checkbox | boolean | false | 3.6.2 |
| onChange | The callback function that is triggered when the state changes. | Function(e:Event) | - | 3.6.2 |

#### Checkbox Group

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | Default selected value | string\[] | \[] | 3.6.2 |
| disabled | Disable all checkboxes | boolean | false | 3.6.2 |
| name | The `name` property of all `input[type="checkbox"]` children | string | - | 3.16.0 |
| options | Specifies options | string\[] | \[] | 3.6.2 |
| value | Used for setting the currently selected value. | string\[] | \[] | 3.6.2 |
| onChange | The callback function that is triggered when the state changes. | Function(checkedValue) | - | 3.6.2 |

### Methods

#### Checkbox

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus | 3.6.2   |
| focus() | get focus    | 3.6.2   |
