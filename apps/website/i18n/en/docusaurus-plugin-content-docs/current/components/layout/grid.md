---
tags:
  - Components
type: Layout
cols: 1
title: Grid
-----------

24 Grids System。

## Design concept

In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 sections.

We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.

## Outline

In the grid system, we define the frame outside the information area based on `row` and `column`, to ensure that every area can have stable arrangement.

Following is a brief look at how it works:

*   Establish a set of `column` in the horizontal space defined by `row` (abbreviated col)
*   Your content elements should be placed directly in the `col`, and only `col` should be placed directly in `row`
*   The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by `<Col span={8} />`.
*   If the sum of `col` spans in a `row` are more than 24, then the overflowing `col` as a whole will start a new line arrangement.

## Flex layout

Our grid systems support Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using `order`.

Flex layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.

## 示例

### Basic Grid

From the stack to the horizontal arrangement.

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

### Grid Gutter

You can use the `gutter` property of `Row` as grid spacing, we recommend set it to `(16 + 8n) px`. (`n` stands for natural number.)

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

### Column offset

`Offset` can set the column to the right side. For example, using `offset = {4}` can set the element shifted to the right four columns width.

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

### Grid sort

By using `push` and`pull` class you can easily change column order.

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

### Flex Layout

Use `row-flex` define `flex` layout, its child elements depending on the value of the `start`,`center`, `end`,`space-between`, `space-around`, which are defined in its parent node layout mode.

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

### Flex Alignment

Flex child elements vertically aligned.

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

### Flex Order

To change the element sort by Flex layout order.

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

### Responsive

Referring to the Bootstrap \[responsive design]\(http://getbootstrap.com/css/#grid-media-queries), here preset six dimensions: `xs` `sm` `md` `lg` `xl`.

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

### More responsive

`span` `pull` `push` `offset` `order` property can be embedded into `xs` `sm` `md` `lg` `xl` properties to use, where `xs={6}` is equivalent to `xs={{span: 6}}`.

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

### Playground

A simple playground for column count and gutter.

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

If the Ant Design grid layout component does not meet your needs, you can use the excellent layout components of the community:

*   [react-flexbox-grid](http://roylee0704.github.io/react-flexbox-grid/)
*   [react-blocks](https://github.com/whoisandy/react-blocks/)

### Row

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| align | the vertical alignment of the flex layout: `top` `middle` `bottom` | string | `top` |  |
| gutter | spacing between grids, could be a number or a object like `{ xs: 8, sm: 16, md: 24}`. or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]` (supported after `3.24.0`) | number/object/array | 0 |  |
| justify | horizontal arrangement of the flex layout: `start` `end` `center` `space-around` `space-between` | string | `start` |  |
| type | layout mode, optional `flex`, [browser support](http://caniuse.com/#search=flex) | string |  |  |

### Col

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| offset | the number of cells to offset Col from the left | number | 0 |  |
| order | raster order, used in `flex` layout mode | number | 0 |  |
| pull | the number of cells that raster is moved to the left | number | 0 |  |
| push | the number of cells that raster is moved to the right | number | 0 |  |
| span | raster number of cells to occupy, 0 corresponds to `display: none` | number | none |  |
| xs | `<576px` and also default setting, could be a `span` value or an object containing above props | number|object | - |  |
| sm | `≥576px`, could be a `span` value or an object containing above props | number|object | - |  |
| md | `≥768px`, could be a `span` value or an object containing above props | number|object | - |  |
| lg | `≥992px`, could be a `span` value or an object containing above props | number|object | - |  |
| xl | `≥1200px`, could be a `span` value or an object containing above props | number|object | - |  |
| xxl | `≥1600px`, could be a `span` value or an object containing above props | number|object | - |  |

The breakpoints of responsive grid follow [BootStrap 4 media queries rules](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)(not including `occasionally part`).

## FAQ

### How to support IE9 when using responsive?

You can use [matchMedia polyfill](https://github.com/paulirish/matchMedia.js/) to handle this.
