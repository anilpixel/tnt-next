---
tags:
  - Components
type: Data Display
cols: 1
title: Calendar
------

Container for displaying data in calendar form.

## When To Use

When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.

## 示例

### Basic

A basic calendar component with Year/Month switch.

```jsx live
function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(<Calendar onPanelChange={onPanelChange} />, mountNode);
```

### Notice Calendar

This component can be rendered by using `dateCellRender` and `monthCellRender` with the data you need.

```jsx live
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
```

### Card

Nested inside a container element for rendering in limited space.

```jsx live
function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,
  mountNode,
);
```

### Selectable Calendar

A basic calendar component with Year/Month switch.

```jsx live

class App extends React.Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Customize Header

Customize Calendar header content.

```jsx live
const { Group, Button } = Radio;

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar
      fullscreen={false}
      headerRender={({ value, type, onChange, onTypeChange }) => {
        const start = 0;
        const end = 12;
        const monthOptions = [];

        const current = value.clone();
        const localeData = value.localeData();
        const months = [];
        for (let i = 0; i < 12; i++) {
          current.month(i);
          months.push(localeData.monthsShort(current));
        }

        for (let index = start; index < end; index++) {
          monthOptions.push(
            <Select.Option className="month-item" key={`${index}`}>
              {months[index]}
            </Select.Option>,
          );
        }
        const month = value.month();

        const year = value.year();
        const options = [];
        for (let i = year - 10; i < year + 10; i += 1) {
          options.push(
            <Select.Option key={i} value={i} className="year-item">
              {i}
            </Select.Option>,
          );
        }
        return (
          <div style={{ padding: 10 }}>
            <div style={{ marginBottom: '10px' }}>Custom header </div>
            <Row type="flex" justify="space-between">
              <Col>
                <Group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
                  <Button value="month">Month</Button>
                  <Button value="year">Year</Button>
                </Group>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-year-select"
                  onChange={newYear => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                  value={String(year)}
                >
                  {options}
                </Select>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={String(month)}
                  onChange={selectedMonth => {
                    const newValue = value.clone();
                    newValue.month(parseInt(selectedMonth, 10));
                    onChange(newValue);
                  }}
                >
                  {monthOptions}
                </Select>
              </Col>
            </Row>
          </div>
        );
      }}
      onPanelChange={onPanelChange}
    />
  </div>,
  mountNode,
);
```

## API

**Note:** Part of the Calendar's locale is read from `value`. So, please set the locale of `moment` correctly.

```jsx
// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

<Calendar
  dateCellRender={dateCellRender}
  monthCellRender={monthCellRender}
  onPanelChange={onPanelChange}
  onSelect={onSelect}
/>
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| dateCellRender | Customize the display of the date cell, the returned content will be appended to the cell | function(date: moment): ReactNode | - |  |
| dateFullCellRender | Customize the display of the date cell, the returned content will override the cell | function(date: moment): ReactNode | - |  |
| defaultValue | The date selected by default | [moment](http://momentjs.com/) | default date |  |
| disabledDate | Function that specifies the dates that cannot be selected | (currentDate: moment) => boolean | - |  |
| fullscreen | Whether to display in full-screen | boolean | `true` |  |
| locale | The calendar's locale | object | [default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | The display mode of the calendar | `month` | `year` | `month` |  |
| monthCellRender | Customize the display of the month cell, the returned content will be appended to the cell | function(date: moment): ReactNode | - |  |
| monthFullCellRender | Customize the display of the month cell, the returned content will override the cell | function(date: moment): ReactNode | - |  |
| validRange | to set valid range | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - | 3.3.0 |
| value | The current selected date | [moment](http://momentjs.com/) | current date |  |
| onPanelChange | Callback for when panel changes | function(date: moment, mode: string) | - |  |
| onSelect | Callback for when a date is selected | function(date: moment） | - |  |
| onChange | Callback for when date changes | function(date: moment） | - | 3.8.0 |
| headerRender | render custom header in panel | function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) | - | 3.19.0 |
