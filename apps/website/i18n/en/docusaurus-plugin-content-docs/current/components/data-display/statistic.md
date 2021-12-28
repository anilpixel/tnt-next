---
tags:
  - Components
type: Data Display
title: Statistic
-------

Display statistic number.

## When To Use

*   When want to highlight some data.
*   When want to display statistic data with description.

## 示例

### Basic

Simplest Usage.

```jsx live
ReactDOM.render(
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
  </Row>,
  mountNode,
);
```

### Unit

Add unit through `prefix` and `suffix`.

```jsx live
ReactDOM.render(
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>,
  mountNode,
);
```

### In Card

Display statistic data in Card.

```jsx live
ReactDOM.render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<Icon type="arrow-down" />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### Countdown

Countdown component.

```jsx live
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log('finished!');
}

ReactDOM.render(
  <Row gutter={16}>
    <Col span={12}>
      <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
    </Col>
    <Col span={12}>
      <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
    </Col>
    <Col span={24} style={{ marginTop: 32 }}>
      <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
    </Col>
  </Row>,
  mountNode,
);
```

## API

#### Statistic

| Property         | Description                   | Type                 | Default | Version |
| ---------------- | ----------------------------- | -------------------- | ------- | ------- |
| decimalSeparator | decimal separator             | string               | .       | 3.13.0  |
| formatter        | customize value display logic | (value) => ReactNode | -       | 3.13.0  |
| groupSeparator   | group separator               | string               | ,       | 3.13.0  |
| precision        | precision of input value      | number               | -       | 3.13.0  |
| prefix           | prefix node of value          | string | ReactNode  | -       | 3.13.0  |
| suffix           | suffix node of value          | string | ReactNode  | -       | 3.13.0  |
| title            | Display title                 | string | ReactNode  | -       | 3.13.0  |
| value            | Display value                 | string | number     | -       | 3.13.0  |
| valueStyle       | Set value css style           | style                | -       | 3.13.0  |

#### Statistic.Countdown

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| format | Format as [moment](http://momentjs.com/) | string | 'HH:mm:ss' | 3.13.0 |
| onFinish | Trigger when time's up | () => void | - | 3.14.0 |
| prefix | prefix node of value | string | ReactNode | - | 3.13.0 |
| suffix | suffix node of value | string | ReactNode | - | 3.13.0 |
| title | Display title | string | ReactNode | - | 3.13.0 |
| value | Set target countdown time | number | moment | - | 3.13.0 |
| valueStyle | Set value css style | style | - | 3.13.0 |
