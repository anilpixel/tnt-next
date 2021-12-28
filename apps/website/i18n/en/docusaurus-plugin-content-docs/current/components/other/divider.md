---
tags:
  - Components
type: Other
title: Divider
cols: 1
------

A divider line separates different content.

## When To Use

*   Divide sections of article.
*   Divide inline text and links such as the operation column of table.

## 示例

### Horizontal

Divider is `horizontal` by default. You can add text within Divider.

```jsx live
ReactDOM.render(
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </div>,
  mountNode,
);
```

### Divider with title

Divider with inner title, set `orientation="left/right"` to align it.

```jsx live
ReactDOM.render(
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </div>,
  mountNode,
);
```

### Vertical

Use `type="vertical"` make it vertical.

```jsx live
ReactDOM.render(
  <div>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </div>,
  mountNode,
);
```

### Style Customization

Use `style` to change default style.

```jsx live
ReactDOM.render(
  <div>
    <Divider style={{ height: 2, backgroundColor: '#7cb305' }} />
    <Divider style={{ borderColor: '#7cb305' }} dashed />
    <Divider type="vertical" style={{ height: 60, backgroundColor: '#7cb305' }} />
    <Divider type="vertical" style={{ height: 60, borderColor: '#7cb305' }} dashed />
  </div>,
  mountNode,
);
```

## API

### Divider

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| className | className of container | string | - | 3.5.4 |
| dashed | whether line is dashed | boolean | false |  |
| orientation | position of title inside divider | enum: `left` `right` `center` | `center` | 3.3.0 |
| style | style object of container | object | - | 3.5.4 |
| type | direction type of divider | enum: `horizontal` `vertical` | `horizontal` |  |
