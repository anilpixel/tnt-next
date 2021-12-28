---
tags:
  - Components
type: Data Entry
title: DatePicker
--------

To select or input a date.

## When To Use

By clicking the input box, you can select a date from a popup calendar.

## 示例

### Basic

Basic use case. Users can select or input a date in panel.

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

### Date Format

We can set the date format by `format`.

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

### Three Sizes

The input box comes in three sizes. `default` will be used if `size` is omitted.

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

### Choose Time

This property provide an additional time selection. When `showTime` is an Object, its properties will be passed on to built-in `TimePicker`.

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

### Disabled

A disabled state of the `DatePicker`.

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

### Disabled Date & Time

Disabled part of dates and time by `disabledDate` and `disabledTime` respectively, and `disabledTime` only works with `showTime`.

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

### Customized Range Picker

When `RangePicker` does not satisfied your requirements, try to implement similar functionality with two `DatePicker`.

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

### Preset Ranges

We can set preset ranges to RangePicker to improve user experience.

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

### Extra Footer

Render extra footer in panel for customized requirements.

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

### Controlled Panels

Determing which panel to show with `mode` and `onPanelChange`.

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

### Customized Date Rendering

We can customize the rendering of date cells in the calendar by providing a `dateRender` function to `DatePicker`.

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

### Suffix

Basic use case. Users can select or input a date in panel.

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

There are four kinds of picker:

*   DatePicker
*   MonthPicker
*   RangePicker
*   WeekPicker

### Localization

The default locale is en-US, if you need to use other languages, recommend to use internationalized components provided by us at the entrance. Look at: [ConfigProvider](http://ant.design/components/config-provider/).

If there are special needs (only modifying single component language), Please use the property: local. Example: [default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json).

```jsx
import locale from 'antd/es/date-picker/locale/zh_CN';

<DatePicker locale={locale} />;
```

**Note:** Part of locale of DatePicker, MonthPicker, RangePicker, WeekPicker is read from value. So, please set the locale of moment correctly.

```jsx
// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
import moment from 'moment';
import 'moment/locale/zh-cn';

<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />;
```

### Common API

The following APIs are shared by DatePicker, MonthPicker, RangePicker, WeekPicker.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Whether to show clear button | boolean | true |  |
| autoFocus | get focus when component mounted | boolean | false |  |
| className | picker className | string | '' |  |
| dateRender | custom rendering function for date cells | function(currentDate: moment, today: moment) => React.ReactNode | - |  |
| disabled | determine whether the DatePicker is disabled | boolean | false |  |
| disabledDate | specify the date that cannot be selected | (currentDate: moment) => boolean | - |  |
| dropdownClassName | to customize the className of the popup calendar | string | - | 3.3.0 |
| getCalendarContainer | to set the container of the floating layer, while the default is to create a `div` element in `body` | function(trigger) | - |  |
| locale | localization configuration | object | [default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | picker panel mode（[Cannot select year or month anymore?](/docs/react/faq#When-set-mode-to-DatePicker/RangePicker,-cannot-select-year-or-month-anymore?) | `time|date|month|year|decade` | 'date' |  |
| open | open state of picker | boolean | - |  |
| placeholder | placeholder of date input | string|RangePicker\[] | - |  |
| popupStyle | to customize the style of the popup calendar | object | {} |  |
| size | determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | string | - |  |
| suffixIcon | The custom suffix icon | ReactNode | - | 3.10.0 |
| style | to customize the style of the input box | object | {} |  |
| onOpenChange | a callback function, can be executed whether the popup calendar is popped up or closed | function(status) | - |  |
| onPanelChange | callback when picker panel mode is changed | function(value, mode) | - | 3.5.0 |

### Common Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |

### DatePicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | to set default date, if start time or end time is null or undefined, the date range will be an open interval | [moment](http://momentjs.com/) | - |  |
| defaultPickerValue | to set default picker date | [moment](http://momentjs.com/) | - | 3.10.8 |
| disabledTime | to specify the time that cannot be selected | function(date) | - |  |
| format | to set the date format, refer to [moment.js](http://momentjs.com/). When an array is provided, all values are used for parsing and first value is used for formatting. | string | string\[] | "YYYY-MM-DD" |  |
| renderExtraFooter | render extra footer in panel | (mode) => React.ReactNode | - |  |
| showTime | to provide an additional time selection | object|boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | to set default time of selected date, [demo](#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/) | moment() |  |
| showToday | whether to show "Today" button | boolean | true |  |
| value | to set date | [moment](http://momentjs.com/) | - |  |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |  |
| onOk | callback when click ok button | function() | - |  |
| onPanelChange | Callback function for panel changing | function(value, mode) | - | 3.19.8 |

### MonthPicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | to set default date | [moment](http://momentjs.com/) | - |  |
| defaultPickerValue | to set default picker date | [moment](http://momentjs.com/) | - | 3.10.8 |
| format | to set the date format, refer to [moment.js](http://momentjs.com/) | string | "YYYY-MM" |  |
| monthCellContentRender | Custom month cell content render method | function(date, locale): ReactNode | - |  |
| renderExtraFooter | render extra footer in panel | () => React.ReactNode | - |  |
| value | to set date | [moment](http://momentjs.com/) | - |  |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |  |

### WeekPicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | to set default date | [moment](http://momentjs.com/) | - |  |
| defaultPickerValue | to set default picker date | [moment](http://momentjs.com/) | - | 3.10.8 |
| format | to set the date format, refer to [moment.js](http://momentjs.com/) | string | "YYYY-wo" |  |
| value | to set date | [moment](http://momentjs.com/) | - |  |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |  |
| renderExtraFooter | render extra footer in panel | (mode) => React.ReactNode | - | 3.12.0 |

### RangePicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | to set default date | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - |  |
| defaultPickerValue | to set default picker date | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - | 3.10.8 |
| disabledTime | to specify the time that cannot be selected | function(dates: \[moment, moment], partial: `'start'|'end'`) | - |  |
| format | to set the date format, refer to [moment.js](http://momentjs.com/). When an array is provided, all values are used for parsing and first value is used for formatting. | string | string\[] | "YYYY-MM-DD HH:mm:ss" |  |
| ranges | preseted ranges for quick selection | { \[range: string]: [moment](http://momentjs.com/)\[] } | { \[range: string]: () => [moment](http://momentjs.com/)\[] } | - |  |
| renderExtraFooter | render extra footer in panel | () => React.ReactNode | - |  |
| separator | set separator between inputs | string | '~' | 3.14.0 |
| showTime | to provide an additional time selection | object|boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | to set default time of selected date, [demo](#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/)\[] | \[moment(), moment()] |  |
| value | to set date | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - |  |
| onCalendarChange | a callback function, can be executed when the start time or the end time of the range is changing | function(dates: \[moment, moment]) | - | 3.0.0 |
| onChange | a callback function, can be executed when the selected time is changing | function(dates: \[moment, moment], dateStrings: \[string, string]) | - |  |
| onOk | callback when click ok button | function(dates: [moment](http://momentjs.com/)\[]) | - |  |

## FAQ

*   [When set mode to DatePicker/RangePicker, cannot select year or month anymore?](/docs/react/faq#When-set-mode-to-DatePicker/RangePicker,-cannot-select-year-or-month-anymore?)
