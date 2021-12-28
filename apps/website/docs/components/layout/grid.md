---
tags:
  - Components
subtitle: 栅格
type: 布局
cols: 1
title: Grid 栅格
-----------

24 栅格系统。

## 设计理念

在多数业务情况下，Ant Design 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。

划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

*   通过 `row` 在水平方向建立一组 `column`（简写 col）
*   你的内容应当放置于 `col` 内，并且，只有 `col` 可以作为 `row` 的直接元素
*   栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<Col span={8} />` 来创建
*   如果一个 `row` 中的 `col` 总和超过 24，那么多余的 `col` 会作为一个整体另起一行排列

## Flex 布局

我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

## 示例

### 基础栅格

从堆叠到水平排列。

```jsx live
ReactDOM.render(
  <div>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </div>,
  mountNode,
);
```

### 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。(n 是自然数)

```jsx live
ReactDOM.render(
  <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### 左右偏移

列偏移。

```jsx live
ReactDOM.render(
  <div>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### 栅格排序

列排序。

```jsx live
ReactDOM.render(
  <div>
    <Row>
      <Col span={18} push={6}>
        col-18 col-push-6
      </Col>
      <Col span={6} pull={18}>
        col-6 col-pull-18
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### Flex 布局

Flex 布局基础。

```jsx live
ReactDOM.render(
  <div>
    <p>sub-element align left</p>
    <Row type="flex" justify="start">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>sub-element align center</p>
    <Row type="flex" justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>sub-element align right</p>
    <Row type="flex" justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>sub-element monospaced arrangement</p>
    <Row type="flex" justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>sub-element align full</p>
    <Row type="flex" justify="space-around">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </div>,
  mountNode,
);
```

### Flex 对齐

Flex 子元素垂直对齐。

```jsx live
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

ReactDOM.render(
  <div>
    <p>Align Top</p>
    <Row type="flex" justify="center" align="top">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <p>Align Center</p>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <p>Align Bottom</p>
    <Row type="flex" justify="space-between" align="bottom">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### Flex 排序

通过 Flex 布局的 Order 来改变元素的排序。

```jsx live
ReactDOM.render(
  <div>
    <Row type="flex">
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### 响应式布局

参照 Bootstrap 的 \[响应式设计]\(http://getbootstrap.com/css/#grid-media-queries)，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl`  `xxl`。

```jsx live
ReactDOM.render(
  <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>,
  mountNode,
);
```

### 其他属性的响应式

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。

```jsx live
ReactDOM.render(
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
  </Row>,
  mountNode,
);
```

### 栅格配置器

可以简单配置几种等分栅格和间距。

```jsx live
class App extends React.Component {
  gutters = {};

  vgutters = {};

  colCounts = {};

  constructor() {
    super();
    this.state = {
      gutterKey: 1,
      vgutterKey: 1,
      colCountKey: 2,
    };
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      this.gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      this.vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      this.colCounts[i] = value;
    });
  }

  onGutterChange = gutterKey => {
    this.setState({ gutterKey });
  };

  onVGutterChange = vgutterKey => {
    this.setState({ vgutterKey });
  };

  onColCountChange = colCountKey => {
    this.setState({ colCountKey });
  };

  render() {
    const { gutterKey, vgutterKey, colCountKey } = this.state;
    const cols = [];
    const colCount = this.colCounts[colCountKey];
    let colCode = '';
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <div>Column</div>
        </Col>,
      );
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 6 }}>Horizontal Gutter (px): </span>
          <div style={{ width: '50%' }}>
            <Slider
              min={0}
              max={Object.keys(this.gutters).length - 1}
              value={gutterKey}
              onChange={this.onGutterChange}
              marks={this.gutters}
              step={null}
            />
          </div>
          <span style={{ marginRight: 6 }}>Vertical Gutter (px): </span>
          <div style={{ width: '50%' }}>
            <Slider
              min={0}
              max={Object.keys(this.vgutters).length - 1}
              value={vgutterKey}
              onChange={this.onVGutterChange}
              marks={this.vgutters}
              step={null}
            />
          </div>
          <span style={{ marginRight: 6 }}>Column Count:</span>
          <div style={{ width: '50%' }}>
            <Slider
              min={0}
              max={Object.keys(this.colCounts).length - 1}
              value={colCountKey}
              onChange={this.onColCountChange}
              marks={this.colCounts}
              step={null}
            />
          </div>
        </div>
        <Row gutter={[this.gutters[gutterKey], this.vgutters[vgutterKey]]}>{cols}</Row>
        <Row gutter={[this.gutters[gutterKey], this.vgutters[vgutterKey]]}>{cols}</Row>
        <pre>{`<Row gutter={[${this.gutters[gutterKey]}, ${this.vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
        <pre>{`<Row gutter={[${this.gutters[gutterKey]}, ${this.vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## API

Ant Design 的布局组件若不能满足你的需求，你也可以直接使用社区的优秀布局组件：

*   [react-flexbox-grid](http://roylee0704.github.io/react-flexbox-grid/)
*   [react-blocks](https://github.com/whoisandy/react-blocks/)

### Row

| 成员 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | flex 布局下的垂直对齐方式：`top` `middle` `bottom` | string | `top` |  |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 `[水平间距, 垂直间距]`（`3.24.0 后支持`）。 | number/object/array | 0 |  |
| justify | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between` | string | `start` |  |
| type | 布局模式，可选 `flex`，[现代浏览器](http://caniuse.com/#search=flex) 下有效 | string |  |  |

### Col

| 成员 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | 0 |  |
| order | 栅格顺序，`flex` 布局模式下有效 | number | 0 |  |
| pull | 栅格向左移动格数 | number | 0 |  |
| push | 栅格向右移动格数 | number | 0 |  |
| span | 栅格占位格数，为 0 时相当于 `display: none` | number | - |  |
| xs | `<576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number|object | - |  |
| sm | `≥576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number|object | - |  |
| md | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number|object | - |  |
| lg | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number|object | - |  |
| xl | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number|object | - |  |
| xxl | `≥1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number|object | - |  |

响应式栅格的断点扩展自 [BootStrap 4 的规则](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)（不包含链接里 `occasionally` 的部分)。

## FAQ

### IE9 响应式不工作怎么办？

可以引入 [matchMedia polyfill](https://github.com/paulirish/matchMedia.js/) 添加支持。
