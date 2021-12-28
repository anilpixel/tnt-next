---
type: 反馈
tags:
  - Components
title: Result 结果
------

用于反馈一系列操作任务的处理结果。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 示例

### Success

成功的结果。

```jsx live
ReactDOM.render(
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />,
  mountNode,
);
```

### Info

展示处理结果。

```jsx live
ReactDOM.render(
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />,
  mountNode,
);
```

### Warning

警告类型的结果。

```jsx live
ReactDOM.render(
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />,
  mountNode,
);
```

### 403

你没有此页面的访问权限。

```jsx live
ReactDOM.render(
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />,
  mountNode,
);
```

### 404

此页面未找到。

```jsx live
ReactDOM.render(
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />,
  mountNode,
);
```

### 500

服务器发生了错误。

```jsx live
ReactDOM.render(
  <Result
    status="500"
    title="500"
    subTitle="Sorry, the server is wrong."
    extra={<Button type="primary">Back Home</Button>}
  />,
  mountNode,
);
```

### Error

复杂的错误反馈。

```jsx live
const { Paragraph, Text } = Typography;

ReactDOM.render(
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <Icon style={{ color: 'red' }} type="close-circle" /> Your account has been frozen 
        <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <Icon style={{ color: 'red' }} type="close-circle" /> Your account is not yet eligible to
        apply <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>,
  mountNode,
);
```

### 自定义 icon

自定义 icon。

```jsx live
ReactDOM.render(
  <Result
    icon={<Icon type="smile" theme="twoTone" />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />,
  mountNode,
);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | title 文字 | ReactNode | - | 3.20.0 |
| subTitle | subTitle 文字 | ReactNode | - | 3.20.0 |
| status | 结果的状态,决定图标和颜色 | `'success' | 'error' | 'info' | 'warning'| '404' | '403' | '500'` | 'info' | 3.20.0 |
| icon | 自定义 icon | string | ReactNode | - | 3.20.0 |
| extra | 操作区 | ReactNode | - | 3.20.0 |
