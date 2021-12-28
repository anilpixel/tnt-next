---
tags:
  - Components
subtitle: 统计数值
type: 数据展示
title: Statistic 统计数值
-------

展示统计数值。

## 何时使用

*   当需要突出某个或某组数字时。
*   当需要展示带描述的统计类数据时使用。

## 示例

### 基本

简单的展示。

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

### 单位

通过前缀和后缀添加单位。

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

### 在卡片中使用

在卡片中展示统计数值。

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

### 倒计时

倒计时组件。

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

| 参数             | 说明             | 类型                 | 默认值 | 版本   |
| ---------------- | ---------------- | -------------------- | ------ | ------ |
| decimalSeparator | 设置小数点       | string               | .      | 3.13.0 |
| formatter        | 自定义数值展示   | (value) => ReactNode | -      | 3.13.0 |
| groupSeparator   | 设置千分位标识符 | string               | ,      | 3.13.0 |
| precision        | 数值精度         | number               | -      | 3.13.0 |
| prefix           | 设置数值的前缀   | string | ReactNode  | -      | 3.13.0 |
| suffix           | 设置数值的后缀   | string | ReactNode  | -      | 3.13.0 |
| title            | 数值的标题       | string | ReactNode  | -      | 3.13.0 |
| value            | 数值内容         | string | number     | -      | 3.13.0 |
| valueStyle       | 设置数值的样式   | style                | -      | 3.13.0 |

#### Statistic.Countdown

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 格式化倒计时展示，参考 [moment](http://momentjs.com/) | string | 'HH:mm:ss' | 3.13.0 |
| onFinish | 倒计时完成时触发 | () => void | - | 3.14.0 |
| prefix | 设置数值的前缀 | string | ReactNode | - | 3.13.0 |
| suffix | 设置数值的后缀 | string | ReactNode | - | 3.13.0 |
| title | 数值的标题 | string | ReactNode | - | 3.13.0 |
| value | 数值内容 | number | moment | - | 3.13.0 |
| valueStyle | 设置数值的样式 | style | - | 3.13.0 |
