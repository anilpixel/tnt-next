---
tags:
  - Components
type: Feedback
title: Spin
------

A spinner for displaying loading state of a page or a section.

## When To Use

When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.

## 示例

### basic Usage

A simple loading status.

```jsx live
ReactDOM.render(<Spin />, mountNode);
```

### Size

A small `Spin` is used for loading text, default sized `Spin` for loading a card-level block, and large `Spin` used for loading a \*\*page\*\*.

```jsx live
ReactDOM.render(
  <div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>,
  mountNode,
);
```

### Inside a container

Spin in a container.

```jsx live
.example {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
```

### Embedded mode

Embedding content into `Spin` will set it into loading state.

```jsx live
class Card extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    return (
      <div>
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);
```

### Customized description

Customized description content.

```jsx live
ReactDOM.render(
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>,
  mountNode,
);
```

### delay

Specifies a delay for loading state. If `spinning` ends during delay, loading status won't appear.

```jsx live
class Card extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>
          {container}
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);
```

### Custom spinning indicator

Use custom loading indicator.

```jsx live
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

ReactDOM.render(<Spin indicator={antIcon} />, mountNode);
```

## API

| Property | Description | Type | Default Value | Version |
| --- | --- | --- | --- | --- |
| delay | specifies a delay in milliseconds for loading state (prevent flush) | number (milliseconds) | - |  |
| indicator | React node of the spinning indicator | ReactNode | - |  |
| size | size of Spin, options: `small`, `default` and `large` | string | `default` |  |
| spinning | whether Spin is spinning | boolean | true |  |
| tip | customize description content when Spin has children | string | - |  |
| wrapperClassName | className of wrapper when Spin has children | string | - |  |

### Static Method

*   `Spin.setDefaultIndicator(indicator: ReactNode)`

    You can define default spin element globally.
