---
tags:
  - Components
type: Data Display
title: Collapse
cols: 1
-------

A content area which can be collapsed and expanded.

## When To Use

*   Can be used to group or hide complex regions to keep the page clean.
*   `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.

## 示例

### Collapse

By default, any number of panels can be expanded at a time. The first panel is expanded in this example.

```jsx live
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" disabled>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  mountNode,
);
```

### Accordion

In accordion mode, only one panel can be expanded at a time.

```jsx live
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  mountNode,
);
```

### Nested panel

`Collapse` is nested inside the `Collapse`.

```jsx live
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse onChange={callback}>
    <Panel header="This is panel header 1" key="1">
      <Collapse defaultActiveKey="1">
        <Panel header="This is panel nest panel" key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  mountNode,
);
```

### Borderless

A borderless style of Collapse.

```jsx live
const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

ReactDOM.render(
  <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="This is panel header 1" key="1">
      {text}
    </Panel>
    <Panel header="This is panel header 2" key="2">
      {text}
    </Panel>
    <Panel header="This is panel header 3" key="3">
      {text}
    </Panel>
  </Collapse>,
  mountNode,
);
```

### Custom Panel

Customize the background, border, margin styles and icon for each panel.

```jsx live
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

ReactDOM.render(
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
  >
    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  mountNode,
);
```

### No arrow

You can hide the arrow icon by passing `showArrow={false}` to `CollapsePanel` component.

```jsx live
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="This is panel header with arrow icon" key="1">
      <p>{text}</p>
    </Panel>
    <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  mountNode,
);
```

### Extra node

More than one panel can be expanded at a time, the first panel is initialized to be active in this case.

```jsx live
const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = () => (
  <Icon
    type="setting"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class Demo extends React.Component {
  state = {
    expandIconPosition: 'left',
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel header="This is panel header 1" key="1" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
        </Collapse>
        <br />
        <span>Expand Icon Position: </span>
        <Select value={expandIconPosition} onChange={this.onPositionChange}>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

### Collapse

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| activeKey | Key of the active panel | string\[]|string| number\[]|number | No default value. In `accordion` mode, it's the key of the first panel. |  |
| defaultActiveKey | Key of the initial active panel | string\[]|string| number\[]|number | - |  |
| bordered | Toggles rendering of the border around the collapse block | boolean | `true` | 3.6.5 |
| accordion | If `true`, `Collapse` renders as `Accordion` | boolean | `false` | 3.6.5 |
| onChange | Callback function executed when active panel is changed | Function | - |  |
| expandIcon | allow to customize collapse icon | (panelProps) => ReactNode | - | 3.13.0 |
| expandIconPosition | Set expand icon position: `left`, `right` | `left` | - | 3.17.0 |
| destroyInactivePanel | Destroy Inactive Panel | boolean | `false` | 3.6.5 |

### Collapse.Panel

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | If `true`, panel cannot be opened or closed | boolean | `false` |  |
| forceRender | Forced render of content on panel, instead of lazy rending after clicking on header | boolean | `false` | 3.2.0 |
| header | Title of the panel | string|ReactNode | - |  |
| key | Unique key identifying the panel from among its siblings | string|number | - |  |
| showArrow | If `false`, panel will not show arrow icon | boolean | `true` | 3.1.0 |
| extra | extra element in the corner | ReactNode | - | 3.14.0 |
