---
tags:
  - Components
type: Data Display
title: Tabs
cols: 1
-------

Tabs make it easy to switch between different views.

### When To Use

Ant Design has 3 types of Tabs for different situations.

*   Card Tabs: for managing too many closeable views.
*   Normal Tabs: for functional aspects of a page.
*   [RadioButton](/components/radio/#components-radio-demo-radiobutton): for secondary tabs.

## 示例

### Basic

Default activate first tab.

```jsx live
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

ReactDOM.render(
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
  mountNode,
);
```

### Disabled

Disabled a tab.

```jsx live
const { TabPane } = Tabs;

ReactDOM.render(
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
      Tab 1
    </TabPane>
    <TabPane tab="Tab 2" disabled key="2">
      Tab 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Tab 3
    </TabPane>
  </Tabs>,
  mountNode,
);
```

### Icon

The Tab with Icon.

```jsx live
const { TabPane } = Tabs;

ReactDOM.render(
  <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <Icon type="apple" />
          Tab 1
        </span>
      }
      key="1"
    >
      Tab 1
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="android" />
          Tab 2
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
  </Tabs>,
  mountNode,
);
```

### Slide

In order to fit in more tabs, they can slide left and right (or up and down).

```jsx live
const { TabPane } = Tabs;

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array(30).keys()].map(i => (
            <TabPane tab={`Tab-${i}`} key={i}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<SlidingTabsDemo />, mountNode);
```

### Extra content

You can add extra actions to the right of Tabs.

```jsx live
const { TabPane } = Tabs;

const operations = <Button>Extra Action</Button>;

ReactDOM.render(
  <Tabs tabBarExtraContent={operations}>
    <TabPane tab="Tab 1" key="1">
      Content of tab 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of tab 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of tab 3
    </TabPane>
  </Tabs>,
  mountNode,
);
```

### Size

Large size tabs are usually used in page header, and small size could be used in Modal.

```jsx live
const { TabPane } = Tabs;

class Demo extends React.Component {
  state = { size: 'small' };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" size={size}>
          <TabPane tab="Tab 1" key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Position

Tab's position: left, right, top or bottom.

```jsx live
const { TabPane } = Tabs;
const { Option } = Select;

class Demo extends React.Component {
  state = {
    tabPosition: 'top',
  };

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          Tab position：
          <Select
            value={this.state.tabPosition}
            onChange={this.changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select>
        </div>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Card type tab

Another type of Tabs, which doesn't support vertical mode.

```jsx live
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

ReactDOM.render(
  <Tabs onChange={callback} type="card">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
  mountNode,
);
```

### Add & close tab

Only card type Tabs support adding & closable. +Use `closable={false}` to disable close.

```jsx live
const { TabPane } = Tabs;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false,
      },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Container of card type Tab

Should be used at the top of container, needs to override styles.

```jsx live
const { TabPane } = Tabs;

ReactDOM.render(
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>,
  mountNode,
);
```

### Customized trigger of new tab

Hide default plus icon, and bind event for customized trigger.

```jsx live
const { TabPane } = Tabs;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Customized bar of tab

Use react-sticky.

```jsx live

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

ReactDOM.render(
  <StickyContainer>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
      <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </StickyContainer>,
  mountNode,
);
```

### Draggable Tabs

Use `react-dnd` to make tabs draggable.

```jsx live

import { DndProvider, DragSource, DropTarget } from 'react-dnd';
const { TabPane } = Tabs;

// Drag & Drop node
class TabNode extends React.Component {
  render() {
    const { connectDragSource, connectDropTarget, children } = this.props;

    return connectDragSource(connectDropTarget(children));
  }
}

const cardTarget = {
  drop(props, monitor) {
    const dragKey = monitor.getItem().index;
    const hoverKey = props.index;

    if (dragKey === hoverKey) {
      return;
    }

    props.moveTabNode(dragKey, hoverKey);
    monitor.getItem().index = hoverKey;
  },
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const WrapTabNode = DropTarget('DND_NODE', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(
  DragSource('DND_NODE', cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))(TabNode),
);

class DraggableTabs extends React.Component {
  state = {
    order: [],
  };

  moveTabNode = (dragKey, hoverKey) => {
    const newOrder = this.state.order.slice();
    const { children } = this.props;

    React.Children.forEach(children, c => {
      if (newOrder.indexOf(c.key) === -1) {
        newOrder.push(c.key);
      }
    });

    const dragIndex = newOrder.indexOf(dragKey);
    const hoverIndex = newOrder.indexOf(hoverKey);

    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragKey);

    this.setState({
      order: newOrder,
    });
  };

  renderTabBar = (props, DefaultTabBar) => (
    <DefaultTabBar {...props}>
      {node => (
        <WrapTabNode key={node.key} index={node.key} moveTabNode={this.moveTabNode}>
          {node}
        </WrapTabNode>
      )}
    </DefaultTabBar>
  );

  render() {
    const { order } = this.state;
    const { children } = this.props;

    const tabs = [];
    React.Children.forEach(children, c => {
      tabs.push(c);
    });

    const orderTabs = tabs.slice().sort((a, b) => {
      const orderA = order.indexOf(a.key);
      const orderB = order.indexOf(b.key);

      if (orderA !== -1 && orderB !== -1) {
        return orderA - orderB;
      }
      if (orderA !== -1) {
        return -1;
      }
      if (orderB !== -1) {
        return 1;
      }

      const ia = tabs.indexOf(a);
      const ib = tabs.indexOf(b);

      return ia - ib;
    });

    return (
      <DndProvider backend={HTML5Backend}>
        <Tabs renderTabBar={this.renderTabBar} {...this.props}>
          {orderTabs}
        </Tabs>
      </DndProvider>
    );
  }
}

ReactDOM.render(
  <DraggableTabs>
    <TabPane tab="tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </DraggableTabs>,
  mountNode,
);
```

### Nest

Default activate first tab.

```jsx live
const { TabPane } = Tabs;
const { Option } = Select;

const positionList = ['left', 'right', 'top', 'bottom'];

const list = new Array(20).fill().map((_, index) => index);

class Demo extends React.Component {
  state = {
    parentPos: undefined,
    childPos: undefined,
    parentType: undefined,
    childType: undefined,
  };

  render() {
    const { parentPos, childPos, parentType, childType } = this.state;

    return (
      <div>
        <Select
          style={{ width: 200 }}
          onChange={val => {
            this.setState({ parentPos: val });
          }}
        >
          {positionList.map(pos => (
            <Option key={pos} value={pos}>
              Parent - {pos}
            </Option>
          ))}
        </Select>

        <Select
          style={{ width: 200 }}
          onChange={val => {
            this.setState({ childPos: val });
          }}
        >
          {positionList.map(pos => (
            <Option key={pos} value={pos}>
              Child - {pos}
            </Option>
          ))}
        </Select>

        <Select
          style={{ width: 200 }}
          onChange={val => {
            this.setState({ parentType: val });
          }}
        >
          <Option value="line">Parent - line</Option>
          <Option value="card">Parent - card</Option>
        </Select>

        <Select
          style={{ width: 200 }}
          onChange={val => {
            this.setState({ childType: val });
          }}
        >
          <Option value="line">Child - line</Option>
          <Option value="card">Child - card</Option>
        </Select>

        <Tabs defaultActiveKey="1" tabPosition={parentPos} type={parentType}>
          <TabPane tab="Tab 1" key="1">
            <Tabs
              defaultActiveKey="1"
              tabPosition={childPos}
              type={childType}
              style={{ height: 300 }}
            >
              {list.map(key => (
                <TabPane tab={`Tab ${key}`} key={key}>
                  TTTT {key}
                </TabPane>
              ))}
            </Tabs>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

### Tabs

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| activeKey | Current TabPane's key | string | - |  |
| animated | Whether to change tabs with animation. Only works while `tabPosition="top"\|"bottom"` | boolean | {inkBar:boolean, tabPane:boolean} | `true`, `false` when `type="card"` |  |
| renderTabBar | replace the TabBar | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | - | 3.9.0 |
| defaultActiveKey | Initial active TabPane's key, if `activeKey` is not set. | string | - |  |
| hideAdd | Hide plus icon or not. Only works while `type="editable-card"` | boolean | `false` |  |
| size | preset tab bar size | `large` | `default` | `small` | `default` |  |
| tabBarExtraContent | Extra content in tab bar | React.ReactNode | - |  |
| tabBarGutter | The gap between tabs | number | - | 3.2.0 |
| tabBarStyle | Tab bar style object | object | - |  |
| tabPosition | Position of tabs | `top` | `right` | `bottom` | `left` | `top` |  |
| type | Basic style of tabs | `line` | `card` | `editable-card` | `line` |  |
| onChange | Callback executed when active tab is changed | Function(activeKey) {} | - |  |
| onEdit | Callback executed when tab is added or removed. Only works while `type="editable-card"` | (targetKey, action): void | - |  |
| onNextClick | Callback executed when next button is clicked | Function | - |  |
| onPrevClick | Callback executed when prev button is clicked | Function | - |  |
| onTabClick | Callback executed when tab is clicked | Function(key: string, event: MouseEvent) | - |  |

More option at [rc-tabs option](https://github.com/react-component/tabs#tabs)

### Tabs.TabPane

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| forceRender | Forced render of content in tabs, not lazy render after clicking on tabs | boolean | false |  |
| key | TabPane's key | string | - |  |
| tab | Show text in TabPane's head | string|ReactNode | - |  |

More option at [rc-tabs option](https://github.com/react-component/tabs#tabpane)
