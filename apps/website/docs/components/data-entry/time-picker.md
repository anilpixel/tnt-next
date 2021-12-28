---
tags:
  - Components
subtitle: 时间选择框
type: 数据录入
title: TimePicker 时间选择框
------

输入或选择时间的控件。

## 何时使用

***

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 示例

### 基本

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

```jsx live

function onChange(time, timeString) {
  console.log(time, timeString);
}

ReactDOM.render(
  <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
  mountNode,
);
```

### 受控组件

value 和 onChange 需要配合使用。

```jsx live
class Demo extends React.Component {
  state = {
    value: null,
  };

  onChange = time => {
    console.log(time);
    this.setState({ value: time });
  };

  render() {
    return <TimePicker value={this.state.value} onChange={this.onChange} />;
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### 三种大小

三种大小的输入框，大的用在表单中，中的为默认。

```jsx live

ReactDOM.render(
  <div>
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
  </div>,
  mountNode,
);
```

### 禁用

禁用时间选择。

```jsx live

ReactDOM.render(
  <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />,
  mountNode
);
```

### 选择时分

TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。

```jsx live

const format = 'HH:mm';

ReactDOM.render(<TimePicker defaultValue={moment('12:08', format)} format={format} />, mountNode);
```

### 步长选项

可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。

```jsx live
ReactDOM.render(<TimePicker minuteStep={15} secondStep={10} />, mountNode);
```

### 附加内容

在 TimePicker 选择框底部显示自定义的内容。

```jsx live
class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = open => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}

ReactDOM.render(<TimePickerAddonDemo />, mountNode);
```

### 12 小时制

12 小时制的时间选择器，默认的 format 为 `h:mm:ss a`。

```jsx live
function onChange(time, timeString) {
  console.log(time, timeString);
}

ReactDOM.render(
  <div>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </div>,
  mountNode,
);
```

### 后缀图标

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

```jsx live
function onChange(time, timeString) {
  console.log(time, timeString);
}

const icon = <Icon type="smile" />;

ReactDOM.render(
  <TimePicker
    suffixIcon={icon}
    onChange={onChange}
    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
  />,
  mountNode,
);
```

## API

***

```jsx
import moment from 'moment';
<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| addon | 选择框底部显示自定义的内容 | function | 无 |  |
| allowClear | 是否展示清除按钮 | boolean | true | 3.13.0 |
| autoFocus | 自动获取焦点 | boolean | false |  |
| className | 选择器类名 | string | '' |  |
| clearText | 清除按钮的提示文案 | string | clear |  |
| defaultOpenValue | 当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值 | [moment](http://momentjs.com/) | moment() |  |
| defaultValue | 默认时间 | [moment](http://momentjs.com/) | 无 |  |
| disabled | 禁用全部操作 | boolean | false |  |
| disabledHours | 禁止选择部分小时选项 | function() | 无 |  |
| disabledMinutes | 禁止选择部分分钟选项 | function(selectedHour) | 无 |  |
| disabledSeconds | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | 无 |  |
| format | 展示的时间格式 | string | "HH:mm:ss" |  |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |  |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |  |
| hourStep | 小时选项间隔 | number | 1 |  |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false | 3.3.0 |
| minuteStep | 分钟选项间隔 | number | 1 |  |
| open | 面板是否打开 | boolean | false |  |
| placeholder | 没有值的时候显示的内容 | string | "请选择时间" |  |
| popupClassName | 弹出层类名 | string | '' |  |
| popupStyle | 弹出层样式对象 | object | - | 3.12.0 |
| secondStep | 秒选项间隔 | number | 1 |  |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - | 3.10.0 |
| clearIcon | 自定义的清除图标 | ReactNode | - | 3.14.0 |
| use12Hours | 使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a` | boolean | false |  |
| value | 当前时间 | [moment](http://momentjs.com/) | 无 |  |
| onChange | 时间发生变化的回调 | function(time: moment, timeString: string): void | 无 |  |
| onOpenChange | 面板打开/关闭时的回调 | (open: boolean): void | 无 |  |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
