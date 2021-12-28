---
tags:
  - Components
type: Other
title: BackTop
------

`BackTop` makes it easy to go back to the top of the page.

## When To Use

*   When the page content is very long.
*   When you need to go back to the top very frequently in order to view the contents.

## 示例

### Basic

The most basic usage.

```jsx live
ReactDOM.render(
  <div>
    <BackTop />
    Scroll down to see the bottom-right
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
    button.
  </div>,
  mountNode,
);
```

### Custom style

You can customize the style of the button, just note the size limit: no more than `40px \* 40px`.

```jsx live
ReactDOM.render(
  <div>
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
    Scroll down to see the bottom-right
    <strong style={{ color: '#1088e9' }}> blue </strong>
    button.
  </div>,
  mountNode,
);
```

## API

> The distance to the bottom is set to `50px` by default, which is overridable.
>
> If you decide to use custom styles, please note the size limit: no more than `40px * 40px`.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| target | specifies the scrollable area dom node | () => HTMLElement | () => window |  |
| visibilityHeight | the `BackTop` button will not show until the scroll height reaches this value | number | 400 |  |
| onClick | a callback function, which can be executed when you click the button | Function | - |  |
