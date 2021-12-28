---
tags:
  - Components
type: 数据展示
subtitle: 日历
cols: 1
title: Calendar 日历
------

按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## 示例

### 基本

一个通用的日历面板，支持年/月切换。

```jsx live
function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(<Calendar onPanelChange={onPanelChange} />, mountNode);
```

### 通知事项日历

一个复杂的应用示例，用 `dateCellRender` 和 `monthCellRender` 函数来自定义需要渲染的数据。

```jsx live
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

ReactDOM.render(
  <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
  mountNode,
);
```

### 卡片模式

用于嵌套在空间有限的容器中。

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

### 选择功能

一个通用的日历面板，支持年/月切换。

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

### 自定义头部

自定义日历头部内容。

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

\*\*注意：\*\*Calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。

```jsx
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
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

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dateCellRender | 自定义渲染日期单元格，返回内容会被追加到单元格 | function(date: moment): ReactNode | 无 |  |
| dateFullCellRender | 自定义渲染日期单元格，返回内容覆盖单元格 | function(date: moment): ReactNode | 无 |  |
| defaultValue | 默认展示的日期 | [moment](http://momentjs.com/) | 默认日期 |  |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |  |
| fullscreen | 是否全屏显示 | boolean | true |  |
| locale | 国际化配置 | object | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | 初始模式，`month/year` | string | month |  |
| monthCellRender | 自定义渲染月单元格，返回内容会被追加到单元格 | function(date: moment): ReactNode | 无 |  |
| monthFullCellRender | 自定义渲染月单元格，返回内容覆盖单元格 | function(date: moment): ReactNode | 无 |  |
| validRange | 设置可以显示的日期 | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | 无 | 3.3.0 |
| value | 展示日期 | [moment](http://momentjs.com/) | 当前日期 |  |
| onPanelChange | 日期面板变化回调 | function(date: moment, mode: string) | 无 |  |
| onSelect | 点击选择日期回调 | function(date: moment） | 无 |  |
| onChange | 日期变化回调 | function(date: moment） | 无 | 3.8.0 |
| headerRender | 自定义头部内容 | function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) | 无 | 3.19.0 |
