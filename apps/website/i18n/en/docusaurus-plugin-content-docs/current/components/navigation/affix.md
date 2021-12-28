---
tags:
  - Components
type: Navigation
title: Affix
------

Wrap Affix around another component to make it stick the viewport.

## When To Use

On longer web pages, its helpful for some content to stick to the viewport. This is common for menus and actions.

Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.

## 示例

### Basic

The simplest usage.

```jsx live
class Demo extends React.Component {
  state = {
    top: 10,
    bottom: 10,
  };

  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              });
            }}
          >
            Affix top
          </Button>
        </Affix>
        <br />
        <Affix offsetBottom={this.state.bottom}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10,
              });
            }}
          >
            Affix bottom
          </Button>
        </Affix>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Callback

Callback with affixed state.

```jsx live
ReactDOM.render(
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>,
  mountNode,
);
```

### Container to scroll.

Set a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).

```jsx live
class Demo extends React.Component {
  render() {
    return (
      <div
        className="scrollable-container"
        ref={node => {
          this.container = node;
        }}
      >
        <div className="background">
          <Affix target={() => this.container}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| offsetBottom | Offset from the bottom of the viewport (in pixels) | number | - |  |
| offsetTop | Offset from the top of the viewport (in pixels) | number | 0 |  |
| target | Specifies the scrollable area DOM node | () => HTMLElement | () => window |  |
| onChange | Callback for when Affix state is changed | Function(affixed) | - |  |

**Note:** Children of `Affix` must not have the property `position: absolute`, but you can set `position: absolute` on `Affix` itself:

```jsx
<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>
```

## FAQ

### Affix bind container with `target`, sometime move out of container.

We don't listen window scroll for performance consideration. You can add listener if you still want: <https://codesandbox.io/s/2xyj5zr85p>

Related issues：[#3938](https://github.com/ant-design/ant-design/issues/3938) [#5642](https://github.com/ant-design/ant-design/issues/5642) [#16120](https://github.com/ant-design/ant-design/issues/16120)
