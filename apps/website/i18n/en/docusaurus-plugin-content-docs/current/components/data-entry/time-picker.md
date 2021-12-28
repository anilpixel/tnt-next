---
tags:
  - Components
type: Data Entry
title: TimePicker
------

To select/input a time.

## When To Use

***

By clicking the input box, you can select a time from a popup panel.

## 示例

### Basic

Click `TimePicker`, and then we could select or input a time in panel.

```jsx live

function onChange(time, timeString) {
  console.log(time, timeString);
}

ReactDOM.render(
  <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
  mountNode,
);
```

### Under Control

`value` and `onChange` should be used together,

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

### Three Sizes

The input box comes in three sizes. large is used in the form, while the medium size is the default.

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

### disabled

A disabled state of the `TimePicker`.

```jsx live

ReactDOM.render(
  <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />,
  mountNode
);
```

### Hour and minute

While part of `format` is omitted, the corresponding column in panel will disappear, too.

```jsx live

const format = 'HH:mm';

ReactDOM.render(<TimePicker defaultValue={moment('12:08', format)} format={format} />, mountNode);
```

### interval option

Show stepped options by `hourStep` `minuteStep` `secondStep`.

```jsx live
ReactDOM.render(<TimePicker minuteStep={15} secondStep={10} />, mountNode);
```

### Addon

Render addon contents to timepicker panel's bottom.

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

### 12 hours

TimePicker of 12 hours format, with default format `h:mm:ss a`.

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

### Suffix

Click `TimePicker`, and then we could select or input a time in panel.

```jsx live

function onChange(time, timeString) {
  console.log(time, timeString);
}

const icon = <Icon type="smile" />;

ReactDOM.render(
  <TimePicker
    suffixIcon={icon}
    onChange={onChange}
    ~~defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}~~
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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| addon | called from timepicker panel to render some addon to its bottom | function | - |  |
| allowClear | allow clearing text | boolean | true | 3.13.0 |
| autoFocus | get focus when component mounted | boolean | false |  |
| className | className of picker | string | '' |  |
| clearText | clear tooltip of icon | string | clear |  |
| defaultOpenValue | default open panel value, used to set utcOffset,locale if value/defaultValue absent | [moment](http://momentjs.com/) | moment() |  |
| defaultValue | to set default time | [moment](http://momentjs.com/) | - |  |
| disabled | determine whether the TimePicker is disabled | boolean | false |  |
| disabledHours | to specify the hours that cannot be selected | function() | - |  |
| disabledMinutes | to specify the minutes that cannot be selected | function(selectedHour) | - |  |
| disabledSeconds | to specify the seconds that cannot be selected | function(selectedHour, selectedMinute) | - |  |
| format | to set the time format | string | "HH:mm:ss" |  |
| getPopupContainer | to set the container of the floating layer, while the default is to create a div element in body | function(trigger) | - |  |
| hideDisabledOptions | hide the options that can not be selected | boolean | false |  |
| hourStep | interval between hours in picker | number | 1 |  |
| inputReadOnly | Set the `readonly` attribute of the input tag (avoids virtual keyboard on touch devices) | boolean | false | 3.3.0 |
| minuteStep | interval between minutes in picker | number | 1 |  |
| open | whether to popup panel | boolean | false |  |
| placeholder | display when there's no value | string | "Select a time" |  |
| popupClassName | className of panel | string | '' |  |
| popupStyle | style of panel | object | - | 3.12.0 |
| secondStep | interval between seconds in picker | number | 1 |  |
| suffixIcon | The custom suffix icon | ReactNode | - | 3.10.0 |
| clearIcon | The custom clear icon | ReactNode | - | 3.14.0 |
| use12Hours | display as 12 hours format, with default format `h:mm:ss a` | boolean | false |  |
| value | to set time | [moment](http://momentjs.com/) | - |  |
| onChange | a callback function, can be executed when the selected time is changing | function(time: moment, timeString: string): void | - |  |
| onOpenChange | a callback function which will be called while panel opening/closing | (open: boolean): void | - |  |

## Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |
