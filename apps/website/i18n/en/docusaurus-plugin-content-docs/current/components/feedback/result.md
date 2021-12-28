---
type: Feedback
tags:
  - Components

title: Result
------

Used to feed back the results of a series of operational tasks.

## When To Use

Use when important operations need to inform the user to process the results and the feedback is more complicated.

## 示例

### Success

Show successful results.

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

Show processing results.

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

The result of the warning.

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

you are not authorized to access this page.

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

The page you visited does not exist.

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

The server is wrong.

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

Complex error feedback.

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

### Custom icon

Custom icon.

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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | title string | ReactNode | - | 3.20.0 |
| subTitle | subTitle string | ReactNode | - | 3.20.0 |
| status | result status,decide icons and colors | `'success' | 'error' | 'info' | 'warning'| '404' | '403' | '500'` | 'info' | 3.20.0 |
| icon | custom back icon | string | ReactNode | - | 3.20.0 |
| extra | operating area | ReactNode | - | 3.20.0 |
