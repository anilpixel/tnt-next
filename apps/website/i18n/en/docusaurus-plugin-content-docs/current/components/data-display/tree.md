---
tags:
  - Components
type: Data Display
title: Tree
------

A hierarchical list structure component.

## When To Use

Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The `Tree` component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a `Tree`.

## 示例

### Basic

The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.

```jsx live
const { TreeNode } = Tree;

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  render() {
    return (
      <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Controlled Tree

Controlled mode lets parent nodes reflect the status of child nodes more intelligently.

```jsx live
const { TreeNode } = Tree;

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

class Demo extends React.Component {
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
  };

  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  };

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  };

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} />;
    });

  render() {
    return (
      <Tree
        checkable
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {this.renderTreeNodes(treeData)}
      </Tree>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### draggable

Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.

```jsx live
const { TreeNode } = Tree;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

class Demo extends React.Component {
  state = {
    gData,
    expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
  };

  onDragEnter = info => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  onDrop = info => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    this.setState({
      gData: data,
    });
  };

  render() {
    const loop = data =>
      data.map(item => {
        if (item.children && item.children.length) {
          return (
            <TreeNode key={item.key} title={item.title}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={item.title} />;
      });
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={this.state.expandedKeys}
        draggable
        blockNode
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### load data asynchronously

To load data asynchronously when click to expand a treeNode.

```jsx live
const { TreeNode } = Tree;

class Demo extends React.Component {
  state = {
    treeData: [
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Tree Node', key: '2', isLeaf: true },
    ],
  };

  onLoadData = treeNode =>
    new Promise(resolve => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        ];
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      }, 1000);
    });

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} dataRef={item} />;
    });

  render() {
    return <Tree loadData={this.onLoadData}>{this.renderTreeNodes(this.state.treeData)}</Tree>;
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Searchable

Searchable Tree.

```jsx live
const { TreeNode } = Tree;
const { Search } = Input;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

class SearchTree extends React.Component {
  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
  };

  onExpand = expandedKeys => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onChange = e => {
    const { value } = e.target;
    const expandedKeys = dataList
      .map(item => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, gData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  };

  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = data =>
      data.map(item => {
        const index = item.title.indexOf(searchValue);
        const beforeStr = item.title.substr(0, index);
        const afterStr = item.title.substr(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span style={{ color: '#f50' }}>{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{item.title}</span>
          );
        if (item.children) {
          return (
            <TreeNode key={item.key} title={title}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={title} />;
      });
    return (
      <div>
        <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
        <Tree
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        >
          {loop(gData)}
        </Tree>
      </div>
    );
  }
}

ReactDOM.render(<SearchTree />, mountNode);
```

### Tree with line

Tree with connected line between nodes, turn on by `showLine`, customize the preseted icon by `switcherIcon`.

```jsx live
const { TreeNode } = Tree;

class Demo extends React.Component {
  state = {
    showLine: true,
    showIcon: false,
  }

  onShowLineChange = showLine => {
    this.setState({ showLine });
  }

  onShowIconChange = showIcon => {
    this.setState({ showIcon });
  }

  render() {
    const { showIcon, showLine } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          showLine: <Switch checked={showLine} onChange={this.onShowLineChange} />
          <br />
          <br />
          showIcon: <Switch checked={showIcon} onChange={this.onShowIconChange} />
        </div>
        <Tree
          showLine={showLine}
          showIcon={showIcon}
          defaultExpandedKeys={['0-0-0', '0-0-1', '0-0-2']}
        >
          <TreeNode icon={<Icon type="carry-out" />} title="parent 1" key="0-0">
            <TreeNode icon={<Icon type="carry-out" />} title="parent 1-0" key="0-0-0">
              <TreeNode icon={<Icon type="carry-out" />} title="leaf" key="0-0-0-0" />
              <TreeNode icon={<Icon type="carry-out" />} title="leaf" key="0-0-0-1" />
              <TreeNode icon={<Icon type="carry-out" />} title="leaf" key="0-0-0-2" />
            </TreeNode>
            <TreeNode icon={<Icon type="carry-out" />} title="parent 1-1" key="0-0-1">
              <TreeNode icon={<Icon type="carry-out" />} title="leaf" key="0-0-1-0" />
            </TreeNode>
            <TreeNode icon={<Icon type="carry-out" />} title="parent 1-2" key="0-0-2">
              <TreeNode icon={<Icon type="carry-out" />} title="leaf" key="0-0-2-0" />
              <TreeNode
                switcherIcon={<Icon type="form" />}
                icon={<Icon type="carry-out" />}
                title="leaf"
                key="0-0-2-1"
              />
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Customize Icon

You can customize icons for different nodes.

```jsx live
const { TreeNode } = Tree;

ReactDOM.render(
  <Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys={['0-0-0']}
    switcherIcon={<Icon type="down" />}
  >
    <TreeNode icon={<Icon type="smile-o" />} title="parent 1" key="0-0">
      <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-0" />
      <TreeNode
        icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
        title="leaf"
        key="0-0-1"
      />
    </TreeNode>
  </Tree>,
  mountNode,
);
```

### directory

Built-in directory tree. `multiple` support `ctrl(Windows)` / `command(Mac)` selection.

```jsx live
const { TreeNode, DirectoryTree } = Tree;

class Demo extends React.Component {
  onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };

  render() {
    return (
      <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}>
        <TreeNode title="parent 0" key="0-0">
          <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
          <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
        </TreeNode>
        <TreeNode title="parent 1" key="0-1">
          <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
          <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
        </TreeNode>
      </DirectoryTree>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Customize collapse/expand icon

customize collapse/expand icon of tree node

```jsx live
const { TreeNode } = Tree;

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  render() {
    return (
      <Tree
        showLine
        switcherIcon={<Icon type="down" />}
        defaultExpandedKeys={['0-0-0']}
        onSelect={this.onSelect}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

### Tree props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoExpandParent | Whether to automatically expand a parent treeNode | boolean | true |  |
| blockNode | Whether treeNode fill remaining horizontal space | boolean | false | 3.15.0 |
| checkable | Adds a `Checkbox` before the treeNodes | boolean | false |  |
| checkedKeys | (Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When `checkable` and `checkStrictly` is true, its object has `checked` and `halfChecked` property. Regardless of whether the child or parent treeNode is checked, they won't impact each other. | string\[] | {checked: string\[], halfChecked: string\[]} | \[] |  |
| checkStrictly | Check treeNode precisely; parent treeNode and children treeNodes are not associated | boolean | false |  |
| defaultCheckedKeys | Specifies the keys of the default checked treeNodes | string\[] | \[] |  |
| defaultExpandAll | Whether to expand all treeNodes by default | boolean | false |  |
| defaultExpandedKeys | Specify the keys of the default expanded treeNodes | string\[] | \[] |  |
| defaultExpandParent | auto expand parent treeNodes when init | bool | true | 3.4.0 |
| defaultSelectedKeys | Specifies the keys of the default selected treeNodes | string\[] | \[] |  |
| disabled | whether disabled the tree | bool | false | 3.4.0 |
| draggable | Specifies whether this Tree is draggable (IE > 8) | boolean | false |  |
| expandedKeys | (Controlled) Specifies the keys of the expanded treeNodes | string\[] | \[] |  |
| filterTreeNode | Defines a function to filter (highlight) treeNodes. When the function returns `true`, the corresponding treeNode will be highlighted | function(node) | - |  |
| loadData | Load data asynchronously | function(node) | - |  |
| loadedKeys | (Controlled) Set loaded tree nodes. Need work with `loadData` | string\[] | \[] | 3.7.0 |
| multiple | Allows selecting multiple treeNodes | boolean | false |  |
| selectable | whether can be selected | boolean | true |  |
| selectedKeys | (Controlled) Specifies the keys of the selected treeNodes | string\[] | - |  |
| showIcon | Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to `true` | boolean | false |  |
| switcherIcon | customize collapse/expand icon of tree node | React.ReactElement | - | 3.12.0 |
| showLine | Shows a connecting line | boolean | false |  |
| onCheck | Callback function for when the onCheck event occurs | function(checkedKeys, e:{checked: bool, checkedNodes, node, event, halfCheckedKeys}) | - |  |
| onDragEnd | Callback function for when the onDragEnd event occurs | function({event, node}) | - |  |
| onDragEnter | Callback function for when the onDragEnter event occurs | function({event, node, expandedKeys}) | - |  |
| onDragLeave | Callback function for when the onDragLeave event occurs | function({event, node}) | - |  |
| onDragOver | Callback function for when the onDragOver event occurs | function({event, node}) | - |  |
| onDragStart | Callback function for when the onDragStart event occurs | function({event, node}) | - |  |
| onDrop | Callback function for when the onDrop event occurs | function({event, node, dragNode, dragNodesKeys}) | - |  |
| onExpand | Callback function for when a treeNode is expanded or collapsed | function(expandedKeys, {expanded: bool, node}) | - |  |
| onLoad | Callback function for when a treeNode is loaded | function(loadedKeys, {event, node}) | - | 3.7.0 |
| onRightClick | Callback function for when the user right clicks a treeNode | function({event, node}) | - |  |
| onSelect | Callback function for when the user clicks a treeNode | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) | - |  |
| treeData | treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array) | array<{ key, title, children, \[disabled, selectable] }> | - | 3.19.8 |

### TreeNode props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| checkable | When Tree is checkable, set TreeNode display Checkbox or not | boolean | - | 3.17.0 |
| disableCheckbox | Disables the checkbox of the treeNode | boolean | false |  |  |
| disabled | Disables the treeNode | boolean | false |  |  |
| icon | customize icon. When you pass component, whose render will receive full TreeNode props as component props | ReactNode/Function(props):ReactNode | - |  | 3.4.0 |
| isLeaf | Determines if this is a leaf node(effective when `loadData` is specified) | boolean | false |  |  |
| key | Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree! | string | internal calculated position of treeNode |  |  |
| selectable | Set whether the treeNode can be selected | boolean | true |  |  |
| title | Title | string|ReactNode | '---' |  |  |

### DirectoryTree props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| expandAction | Directory open logic, optional `false` `'click'` `'doubleClick'` | string | click | 3.7.0 |

## Note

Before `3.4.0`: The number of treeNodes can be very large, but when `checkable=true`, it will increase the compute time. So, we cache some calculations (e.g. `this.treeNodesStates`) to avoid double computing. But, this brings some restrictions. **When you load treeNodes asynchronously, you should render tree like this**:

```jsx
{
  this.state.treeData.length ? (
    <Tree>
      {this.state.treeData.map(data => (
        <TreeNode />
      ))}
    </Tree>
  ) : (
    'loading tree'
  );
}
```

## FAQ

### How to hide file icon when use showLine?

File icon realize by using switcherIcon. You can overwrite the style to hide it: https://codesandbox.io/s/long-moon-go9e2
