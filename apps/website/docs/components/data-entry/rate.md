---
tags:
  - Components
subtitle: 评分
type: 数据录入
title: Rate 评分
------

评分组件。

## 何时使用

*   对评价进行展示。
*   对事物进行快速的评级操作。

## 示例

### 基本

最简单的用法。

```jsx live
ReactDOM.render(<Rate />, mountNode);
```

### 半星

支持选中半星。

```jsx live
ReactDOM.render(<Rate allowHalf defaultValue={2.5} />, mountNode);
```

### 文案展现

给评分组件加上文案展示。

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

### 只读

只读，无法进行鼠标交互。

```jsx live
ReactDOM.render(<Rate disabled defaultValue={2} />, mountNode);
```

### 清除

支持允许或者禁用清除。

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

### 其他字符

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

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

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true | 3.1.0 |
| allowHalf | 是否允许半选 | boolean | false |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| character | 自定义字符 | ReactNode | `<Icon type="star" />` |  |
| className | 自定义样式类名 | string | - |  |
| count | star 总数 | number | 5 |  |
| defaultValue | 默认值 | number | 0 |  |
| disabled | 只读，无法进行交互 | boolean | false |  |
| style | 自定义样式对象 | object | - |  |
| tooltips | 自定义每项的提示信息 | string\[] | - | 3.12.0 |
| value | 当前数，受控值 | number | - |  |
| onBlur | 失去焦点时的回调 | Function() | - |  |
| onChange | 选择时的回调 | Function(value: number) | - |  |
| onFocus | 获取焦点时的回调 | Function() | - |  |
| onHoverChange | 鼠标经过时数值变化的回调 | Function(value: number) | - |  |
| onKeyDown | 按键回调 | Function(event) | - |  |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
