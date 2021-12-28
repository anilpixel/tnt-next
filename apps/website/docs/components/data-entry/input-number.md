---
tags:
  - Components
subtitle: 数字输入框
type: 数据录入
title: InputNumber 数字输入框
---------

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 示例

### 基本

数字输入框。

```jsx live
function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />, mountNode);
```

### 三种大小

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

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

### 不可用

点击按钮切换可用状态。

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

### 小数

和原生的数字输入框一样，value 的精度由 step 的小数位数决定。

```jsx live
function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(<InputNumber min={0} max={10} step={0.1} onChange={onChange} />, mountNode);
```

### 格式化展示

通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。

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

属性如下

| 成员 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |  |
| defaultValue | 初始值 | number |  |  |
| disabled | 禁用 | boolean | false |  |
| formatter | 指定输入框展示值的格式 | function(value: number | string): string | - |  |
| max | 最大值 | number | Infinity |  |
| min | 最小值 | number | -Infinity |  |
| parser | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | function( string): number | - |  |
| precision | 数值精度 | number | - |  |
| decimalSeparator | 小数点 | string | - | 3.10.0 |
| size | 输入框大小 | string | 无 |  |
| step | 每次改变步数，可以为小数 | number|string | 1 |  |
| value | 当前值 | number |  |  |
| onChange | 变化回调 | Function(value: number | string) |  |  |
| onPressEnter | 按下回车的回调 | function(e) |  |  |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
