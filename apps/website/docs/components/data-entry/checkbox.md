---
tags:
  - Components
subtitle: 多选框
type: 数据录入
title: Checkbox 多选框
------

多选框。

## 何时使用

*   在一组可选项中进行多项选择时；
*   单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 示例

### 基本用法

简单的 checkbox。

```jsx live
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, mountNode);
```

### 不可用

checkbox 不可用。

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

### 受控的 Checkbox

联动 checkbox。

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

### Checkbox 组

方便的从数组生成 Checkbox 组。

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

### 全选

在实现全选效果时，你可能会用到 `indeterminate` 属性。

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

### 布局

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。

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

### 属性

#### Checkbox

| 参数           | 说明                                    | 类型              | 默认值 | 版本  |
| -------------- | --------------------------------------- | ----------------- | ------ | ----- |
| autoFocus      | 自动获取焦点                            | boolean           | false  | 3.6.2 |
| checked        | 指定当前是否选中                        | boolean           | false  | 3.6.2 |
| defaultChecked | 初始是否选中                            | boolean           | false  | 3.6.2 |
| disabled       | 失效状态                                | boolean           | false  | 3.6.2 |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean           | false  | 3.6.2 |
| onChange       | 变化时回调函数                          | Function(e:Event) | -      | 3.6.2 |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string\[] | \[] | 3.6.2 |
| disabled | 整组失效 | boolean | false | 3.6.2 |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - | 3.16.0 |
| options | 指定可选项 | string\[] | Option\[] | \[] | 3.6.2 |
| value | 指定选中的选项 | string\[] | \[] | 3.6.2 |
| onChange | 变化时回调函数 | Function(checkedValue) | - | 3.6.2 |

##### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### 方法

#### Checkbox

| 名称    | 描述     | 版本  |
| ------- | -------- | ----- |
| blur()  | 移除焦点 | 3.6.2 |
| focus() | 获取焦点 | 3.6.2 |
