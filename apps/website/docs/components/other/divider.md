---
tags:
  - Components
type: 其他
title: Divider 分割线
------

区隔内容的分割线。

## 何时使用

*   对不同章节的文本段落进行分割。
*   对行内文字/链接进行分割，例如表格的操作列。

## 示例

### 水平分割线

默认为水平分割线，可在中间加入文字。

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

### 带文字的分割线

分割线中带有文字，可以用 `orientation` 指定文字位置。

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

### 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

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

### 样式自定义

测试一些 `style` 修改样式的行为。

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

| 参数        | 说明             | 类型                          | 默认值       | 版本  |
| ----------- | ---------------- | ----------------------------- | ------------ | ----- |
| className   | 分割线样式类     | string                        | -            | 3.5.4 |
| dashed      | 是否虚线         | boolean                       | false        |       |
| orientation | 分割线标题的位置 | enum: `left` `right`          | `center`     | 3.4.1 |
| style       | 分割线样式对象   | object                        | -            | 3.5.4 |
| type        | 水平还是垂直类型 | enum: `horizontal` `vertical` | `horizontal` |       |
