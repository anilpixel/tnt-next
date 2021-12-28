---
tags:
  - Components
type: Other
cols: 2
title: Anchor
------

Hyperlinks to scroll on one page.

## When To Use

For displaying anchor hyperlinks on page and jumping between them.

## 示例

### Basic

The simplest usage.

```jsx live
const { Link } = Anchor;

ReactDOM.render(
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

### Static Anchor

Do not change state when page is scrolling.

```jsx live
const { Link } = Anchor;

ReactDOM.render(
  <Anchor affix={false}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

### Customize the onClick event

Clicking on an anchor does not record history.

```jsx live
const { Link } = Anchor;

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

ReactDOM.render(
  <Anchor affix={false} onClick={handleClick}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

### Customize the anchor highlight

Customize the anchor highlight.

```jsx live
const { Link } = Anchor;

const getCurrentAnchor = () => {
  return '#components-anchor-demo-static';
};

ReactDOM.render(
  <Anchor affix={false} getCurrentAnchor={getCurrentAnchor}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

### Set Anchor scroll offset

Anchor target scroll to screen center.

```jsx live
const { Link } = Anchor;

class AnchorExample extends React.Component {
  state = {
    targetOffset: undefined,
  };

  componentDidMount() {
    this.setState({
      targetOffset: window.innerHeight / 2,
    });
  }

  render() {
    return (
      <Anchor targetOffset={this.state.targetOffset}>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    );
  }
}

ReactDOM.render(<AnchorExample />, mountNode);
```

### Listening for anchor link change

Listening for anchor link change.

```jsx live
const { Link } = Anchor;

const onChange = link => {
  console.log('Anchor:OnChange', link);
};

ReactDOM.render(
  <Anchor affix={false} onChange={onChange}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  mountNode,
);
```

## API

### Anchor Props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| affix | Fixed mode of Anchor | boolean | true |  |
| bounds | Bounding distance of anchor area | number | 5(px) |  |
| getContainer | Scrolling container | () => HTMLElement | () => window | 3.4.0 |
| offsetBottom | Pixels to offset from bottom when calculating position of scroll | number | - |  |
| offsetTop | Pixels to offset from top when calculating position of scroll | number | 0 |  |
| showInkInFixed | Whether show ink-balls in Fixed mode | boolean | false |  |
| onClick | set the handler to handle `click` event | Function(e: Event, link: Object) | - | 3.9.0 |
| getCurrentAnchor | Customize the anchor highlight | () => string | - | 3.22.0 |
| targetOffset | Anchor scroll offset, default as `offsetTop`, [example](#components-anchor-demo-targetOffset) | number | `offsetTop` | 3.22.0 |
| onChange | Listening for anchor link change | (currentActiveLink: string) => void |  | 3.24.0 |

### Link Props

| Property | Description                               | Type              | Default | Version |
| -------- | ----------------------------------------- | ----------------- | ------- | ------- |
| href     | target of hyperlink                       | string            |         |         |
| title    | content of hyperlink                      | string|ReactNode |         |         |
| target   | Specifies where to display the linked URL | string            |         |         |
