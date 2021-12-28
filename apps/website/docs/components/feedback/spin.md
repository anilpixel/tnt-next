---
tags:
  - Components
type: 反馈
title: Spin 加载中
------

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 示例

### 基本用法

一个简单的 loading 状态。

```jsx live
ReactDOM.render(<Spin />, mountNode);
```

### 各种大小

小的用于文本加载，默认用于卡片容器级加载，大的用于\*\*页面级\*\*加载。

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

### 容器

放入一个容器中。

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

### 卡片加载中

可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。

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

### 自定义描述文案

自定义描述文案。

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

### 延迟

延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。

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

### 自定义指示符

使用自定义指示符。

```jsx live
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

ReactDOM.render(<Spin indicator={antIcon} />, mountNode);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |  |
| indicator | 加载指示符 | ReactNode | - |  |
| size | 组件大小，可选值为 `small` `default` `large` | string | 'default' |  |
| spinning | 是否为加载中状态 | boolean | true |  |
| tip | 当作为包裹元素时，可以自定义描述文案 | string | - |  |
| wrapperClassName | 包装器的类属性 | string | - |  |

### 静态方法

*   `Spin.setDefaultIndicator(indicator: ReactNode)`

    你可以自定义全局默认 Spin 的元素。
