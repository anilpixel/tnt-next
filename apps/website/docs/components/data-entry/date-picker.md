---
tags:
  - Components
type: 数据录入

title:  DatePicker日期选择框
------

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 示例

### 基本

最简单的用法，在浮层中可以选择或者输入日期。

```jsx live
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <div>
    <DatePicker onChange={onChange} />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker onChange={onChange} />
    <br />
    <WeekPicker onChange={onChange} placeholder="Select week" />
  </div>,
  mountNode,
);
```

### 日期格式

使用 `format` 属性，可以自定义日期显示格式。

```jsx live
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

ReactDOM.render(
  <div>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
    <br />
    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <br />
    <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
    <br />
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </div>,
  mountNode,
);
```

### 三种大小

三种大小的输入框，若不设置，则为 `default`。

```jsx live
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <DatePicker size={size} />
        <br />
        <MonthPicker size={size} placeholder="Select Month" />
        <br />
        <RangePicker size={size} />
        <br />
        <WeekPicker size={size} placeholder="Select Week" />
      </div>
    );
  }
}

ReactDOM.render(<PickerSizesDemo />, mountNode);
```

### 日期时间选择

增加选择时间功能，当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

```jsx live
const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

ReactDOM.render(
  <div>
    <DatePicker showTime placeholder="Select Time" onChange={onChange} onOk={onOk} />
    <br />
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      placeholder={['Start Time', 'End Time']}
      onChange={onChange}
      onOk={onOk}
    />
  </div>,
  mountNode,
);
```

### 禁用

选择框的不可用状态。

```jsx live
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
  <div>
    <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
    <br />
    <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
    <br />
    <RangePicker
      defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
      disabled
    />
  </div>,
  mountNode,
);
```

### 不可选择日期和时间

可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间，其中 `disabledTime` 需要和 `showTime` 一起使用。

```jsx live
const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

ReactDOM.render(
  <div>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
    />
    <br />
    <MonthPicker disabledDate={disabledDate} placeholder="Select month" />
    <br />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </div>,
  mountNode,
);
```

### 自定义日期范围选择

当 `RangePicker` 无法满足业务需求时，可以使用两个 `DatePicker` 实现类似的功能。

```jsx live
class DateRange extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<DateRange />, mountNode);
```

### 预设范围

可以预设常用的日期范围以提高用户体验。

```jsx live
const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

ReactDOM.render(
  <div>
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      onChange={onChange}
    />
    <br />
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
  </div>,
  mountNode,
);
```

### 额外的页脚

在浮层中加入额外的页脚，以满足某些定制信息的需求。

```jsx live
const { RangePicker, MonthPicker } = DatePicker;

ReactDOM.render(
  <div>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
  </div>,
  mountNode,
);
```

### 受控面板

通过组合 `mode` 与 `onPanelChange` 控制要展示的面板。

```jsx live
const { RangePicker } = DatePicker;

class ControlledDatePicker extends React.Component {
  state = { mode: 'time' };

  handleOpenChange = open => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  };

  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  };

  render() {
    return (
      <DatePicker
        mode={this.state.mode}
        showTime
        onOpenChange={this.handleOpenChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

class ControlledRangePicker extends React.Component {
  state = {
    mode: ['month', 'month'],
    value: [],
  };

  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
    });
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, mode } = this.state;
    return (
      <RangePicker
        placeholder={['Start month', 'End month']}
        format="YYYY-MM"
        value={value}
        mode={mode}
        onChange={this.handleChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

ReactDOM.render(
  <div>
    <ControlledDatePicker />
    <br />
    <ControlledRangePicker />
  </div>,
  mountNode,
);
```

### 定制日期单元格

使用 `dateRender` 可以自定义日期单元格的内容和样式。

```jsx live
const { RangePicker } = DatePicker;

ReactDOM.render(
  <div>
    <DatePicker
      dateRender={current => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-calendar-date" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
    <RangePicker
      dateRender={current => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-calendar-date" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </div>,
  mountNode,
);
```

### 后缀图标

最简单的用法，在浮层中可以选择或者输入日期。

```jsx live
const smileIcon = <Icon type="smile" />;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <div>
    <DatePicker suffixIcon={smileIcon} onChange={onChange} />
    <br />
    <MonthPicker suffixIcon={smileIcon} onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker suffixIcon={smileIcon} onChange={onChange} />
    <br />
    <WeekPicker suffixIcon={smileIcon} onChange={onChange} placeholder="Select week" />
    <br />
    <DatePicker suffixIcon="ab" onChange={onChange} />
    <br />
    <MonthPicker suffixIcon="ab" onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker suffixIcon="ab" onChange={onChange} />
    <br />
    <WeekPicker suffixIcon="ab" onChange={onChange} placeholder="Select week" />
  </div>,
  mountNode,
);
```

## API

日期类组件包括以下四种形式。

*   DatePicker
*   MonthPicker
*   RangePicker
*   WeekPicker

### 国际化配置

默认配置为 en-US，如果你需要设置其他语言，推荐在入口处使用我们提供的国际化组件，详见：[ConfigProvider 国际化](http://ant.design/components/config-provider-cn/)。

如有特殊需求（仅修改单一组件的语言），请使用 locale 参数，参考：[默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)。

```jsx
import locale from 'antd/es/date-picker/locale/zh_CN';

<DatePicker locale={locale} />;
```

\*\*注意：\*\*DatePicker、MonthPicker、RangePicker、WeekPicker 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。

```jsx
// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />;
```

### 共同的 API

以下 API 为 DatePicker、MonthPicker、RangePicker, WeekPicker 共享的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | boolean | true |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| className | 选择器 className | string | '' |  |
| dateRender | 自定义日期单元格的内容 | function(currentDate: moment, today: moment) => React.ReactNode | - |  |
| disabled | 禁用 | boolean | false |  |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |  |
| dropdownClassName | 额外的弹出日历 className | string | - | 3.3.0 |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |  |
| locale | 国际化配置 | object | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | 日期面板的状态（[设置后无法选择年份/月份？](/docs/react/faq#当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？)） | `time|date|month|year|decade` | 'date' |  |
| open | 控制弹层是否展开 | boolean | - |  |
| placeholder | 输入框提示文字 | string|RangePicker\[] | - |  |
| popupStyle | 额外的弹出日历样式 | object | {} |  |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | string | 无 |  |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - | 3.10.0 |
| style | 自定义输入框样式 | object | {} |  |
| onOpenChange | 弹出日历和关闭日历的回调 | function(status) | 无 |  |
| onPanelChange | 日历面板切换的回调 | function(value, mode) | - | 3.12.0 |

### 共同的方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

### DatePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期，如果开始时间或结束时间为 `null` 或者 `undefined`，日期范围将是一个开区间 | [moment](http://momentjs.com/) | 无 |  |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/) | 无 | 3.10.8 |
| disabledTime | 不可选择的时间 | function(date) | 无 |  |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [moment.js](http://momentjs.com/) | string | string\[] | "YYYY-MM-DD" |  |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |  |
| showTime | 增加时间选择功能 | Object|boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/) | moment() |  |
| showToday | 是否展示“今天”按钮 | boolean | true |  |
| value | 日期 | [moment](http://momentjs.com/) | 无 |  |
| onChange | 时间发生变化的回调 | function(date: moment, dateString: string) | 无 |  |
| onOk | 点击确定按钮的回调 | function() | - |  |
| onPanelChange | 日期面板变化时的回调 | function(value, mode) | - | 3.5.0 |

### MonthPicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期 | [moment](http://momentjs.com/) | 无 |  |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/) | 无 | 3.10.8 |
| format | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string | "YYYY-MM" |  |
| monthCellContentRender | 自定义的月份内容渲染方法 | function(date, locale): ReactNode | - |  |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| value | 日期 | [moment](http://momentjs.com/) | 无 |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | - |  |

### WeekPicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期 | [moment](http://momentjs.com/) | - |  |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/) | 无 | 3.10.8 |
| format | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string | "YYYY-wo" |  |
| value | 日期 | [moment](http://momentjs.com/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | - |  |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - | 3.12.0 |

### RangePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期 | [moment](http://momentjs.com/)\[] | 无 |  |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/)\[] | 无 | 3.10.8 |
| disabledTime | 不可选择的时间 | function(dates: \[moment, moment], partial: `'start'|'end'`) | 无 |  |
| format | 展示的日期格式 | string | "YYYY-MM-DD HH:mm:ss" |  |
| ranges | 预设时间范围快捷选择 | { \[range: string]: [moment](http://momentjs.com/)\[] } | { \[range: string]: () => [moment](http://momentjs.com/)\[] } | 无 |  |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| separator | 设置分隔符 | string | '~' | 3.14.0 |
| showTime | 增加时间选择功能 | Object|boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/)\[] | \[moment(), moment()] |  |
| value | 日期 | [moment](http://momentjs.com/)\[] | 无 |  |
| onCalendarChange | 待选日期发生变化的回调 | function(dates: \[moment, moment]) | 无 | 3.0.0 |
| onChange | 日期范围发生变化的回调 | function(dates: \[moment, moment], dateStrings: \[string, string]) | 无 |  |
| onOk | 点击确定按钮的回调 | function(dates: [moment](http://momentjs.com/)\[]) | - |  |

## FAQ

*   [当我指定了 DatePicker/RangePicker 的 mode 属性后，点击后无法选择年份/月份？](/docs/react/faq#当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？)
