---
tags:
  - Components
type: Data Entry
cols: 1
title: Transfer
------

Double column transfer choice box.

## When To Use

*   It is a select control essentially which can be use for selecting multiple items.
*   Transfer can display more information for items and take up more space.

Transfer the elements between two columns in an intuitive and efficient way.

One or more elements can be selected from either column, one click on the proper `direction` button, and the transfer is done. The left column is considered the `source` and the right column is considered the `target`. As you can see in the API description, these names are reflected in.

## 示例

### Basic

The most basic usage of `Transfer` involves providing the source data and target keys arrays, plus the rendering and some callback functions.

```jsx live
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

class App extends React.Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: false,
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  handleDisable = disabled => {
    this.setState({ disabled });
  };

  render() {
    const { targetKeys, selectedKeys, disabled } = this.state;
    return (
      <div>
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={disabled}
        />
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={this.handleDisable}
          style={{ marginTop: 16 }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Search

Transfer with a search box.

```jsx live
class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };

  handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        filterOption={this.filterOption}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
        render={item => item.title}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Advanced

Advanced Usage of Transfer.

```jsx live
class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };

  renderFooter = () => (
    <Button size="small" style={{ float: 'right', margin: 5 }} onClick={this.getMock}>
      reload
    </Button>
  );

  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        listStyle={{
          width: 250,
          height: 300,
        }}
        operations={['to right', 'to left']}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={item => `${item.title}-${item.description}`}
        footer={this.renderFooter}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Custom datasource

Custom each Transfer Item, and in this way you can render a complex datasource.

```jsx live
class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  };

  renderItem = item => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );

    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    };
  };

  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        listStyle={{
          width: 300,
          height: 300,
        }}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={this.renderItem}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Performance Test

2000 items.

```jsx live
class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  };

  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={item => item.title}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Table Transfer

Customize render list with Table component.

```jsx live

// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
  <Transfer {...restProps} showSelectAll={false}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;

      const rowSelection = {
        getCheckboxProps: item => ({ disabled: listDisabled || item.disabled }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter(item => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: listSelectedKeys,
      };

      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{ pointerEvents: listDisabled ? 'none' : null }}
          onRow={({ key, disabled: itemDisabled }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled) return;
              onItemSelect(key, !listSelectedKeys.includes(key));
            },
          })}
        />
      );
    }}
  </Transfer>
);

const mockTags = ['cat', 'dog', 'bird'];

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 4 === 0,
    tag: mockTags[i % 3],
  });
}

const originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const leftTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: tag => <Tag>{tag}</Tag>,
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];

class App extends React.Component {
  state = {
    targetKeys: originTargetKeys,
    disabled: false,
    showSearch: false,
  };

  onChange = nextTargetKeys => {
    this.setState({ targetKeys: nextTargetKeys });
  };

  triggerDisable = disabled => {
    this.setState({ disabled });
  };

  triggerShowSearch = showSearch => {
    this.setState({ showSearch });
  };

  render() {
    const { targetKeys, disabled, showSearch } = this.state;
    return (
      <div>
        <TableTransfer
          dataSource={mockData}
          targetKeys={targetKeys}
          disabled={disabled}
          showSearch={showSearch}
          onChange={this.onChange}
          filterOption={(inputValue, item) =>
            item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
          }
          leftColumns={leftTableColumns}
          rightColumns={rightTableColumns}
        />
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={this.triggerDisable}
          style={{ marginTop: 16 }}
        />
        <Switch
          unCheckedChildren="showSearch"
          checkedChildren="showSearch"
          checked={showSearch}
          onChange={this.triggerShowSearch}
          style={{ marginTop: 16 }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Tree Transfer

Customize render list with Tree component.

```jsx live
const { TreeNode } = Tree;

// Customize Table Transfer
const isChecked = (selectedKeys, eventKey) => {
  return selectedKeys.indexOf(eventKey) !== -1;
};

const generateTree = (treeNodes = [], checkedKeys = []) => {
  return treeNodes.map(({ children, ...props }) => (
    <TreeNode {...props} disabled={checkedKeys.includes(props.key)} key={props.key}>
      {generateTree(children, checkedKeys)}
    </TreeNode>
  ));
};

const TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {
  const transferDataSource = [];
  function flatten(list = []) {
    list.forEach(item => {
      transferDataSource.push(item);
      flatten(item.children);
    });
  }
  flatten(dataSource);

  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={item => item.title}
      showSelectAll={false}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === 'left') {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <Tree
              blockNode
              checkable
              checkStrictly
              defaultExpandAll
              checkedKeys={checkedKeys}
              onCheck={(
                _,
                {
                  node: {
                    props: { eventKey },
                  },
                },
              ) => {
                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
              }}
              onSelect={(
                _,
                {
                  node: {
                    props: { eventKey },
                  },
                },
              ) => {
                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
              }}
            >
              {generateTree(dataSource, targetKeys)}
            </Tree>
          );
        }
      }}
    </Transfer>
  );
};

const treeData = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [{ key: '0-1-0', title: '0-1-0' }, { key: '0-1-1', title: '0-1-1' }],
  },
  { key: '0-2', title: '0-3' },
];

class App extends React.Component {
  state = {
    targetKeys: [],
  };

  onChange = targetKeys => {
    console.log('Target Keys:', targetKeys);
    this.setState({ targetKeys });
  };

  render() {
    const { targetKeys } = this.state;
    return (
      <div>
        <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={this.onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| className | A custom CSS class. | string | \['', ''] |  |
| dataSource | Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in `targetKeys` prop. | [TransferItem](https://git.io/vMM64)\[] | \[] |  |
| disabled | Whether disabled transfer | boolean | false | 3.10.0 |
| filterOption | A function to determine whether an item should show in search result list | (inputValue, option): boolean |  |  |
| footer | A function used for rendering the footer. | (props) => ReactNode |  |  |
| lazy | property of [react-lazy-load](https://github.com/loktar00/react-lazy-load) for lazy rendering items. Turn off it by set to `false`. | object|boolean | `{ height: 32, offset: 32 }` |  |
| listStyle | A custom CSS style used for rendering the transfer columns. | object|({direction: 'left'|'right'}) => object |  |  |
| locale | i18n text including filter, empty text, item unit, etc | { itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode; } | `{ itemUnit: 'item', itemsUnit: 'items', notFoundContent: 'The list is empty', searchPlaceholder: 'Search here' }` | 3.9.0 |
| operations | A set of operations that are sorted from top to bottom. | string\[] | \['>', '<'] |  |
| operationStyle | A custom CSS style used for rendering the operations column. | object |  | 3.6.0 |
| render | The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a React element which is generated from that record. Also, it can return a plain object with `value` and `label`, `label` is a React element and `value` is for title | (record) => ReactNode |  |  |
| selectedKeys | A set of keys of selected items. | string\[] | \[] |  |
| showSearch | If included, a search box is shown on each column. | boolean | false |  |
| showSelectAll | Show select all checkbox on the header | boolean | true | 3.18.0 |
| style | A custom CSS style used for rendering wrapper element. | object |  | 3.6.0 |
| targetKeys | A set of keys of elements that are listed on the right column. | string\[] | \[] |  |
| titles | A set of titles that are sorted from left to right. | ReactNode\[] | - |  |
| onChange | A callback function that is executed when the transfer between columns is complete. | (targetKeys, direction, moveKeys): void |  |  |
| onScroll | A callback function which is executed when scroll options list | (direction, event): void |  |  |
| onSearch | A callback function which is executed when search field are changed | (direction: 'left'|'right', value: string): void | - | 3.11.0 |
| onSelectChange | A callback function which is executed when selected items are changed. | (sourceSelectedKeys, targetSelectedKeys): void |  |  |

### Render Props

New in 3.18.0. Transfer accept `children` to customize render list, using follow props:

| Property        | Description             | Type                                | Version |
| --------------- | ----------------------- | ----------------------------------- | ------- |
| direction       | List render direction   | 'left' | 'right'                   | 3.18.0  |
| disabled        | Disable list or not     | boolean                             | 3.18.0  |
| filteredItems   | Filtered items          | TransferItem\[]                      | 3.18.0  |
| onItemSelect    | Select item             | (key: string, selected: boolean)    | 3.18.0  |
| onItemSelectAll | Select a group of items | (keys: string\[], selected: boolean) | 3.18.0  |
| selectedKeys    | Selected items          | string\[]                            | 3.18.0  |

#### example

```jsx
<Transfer {...props}>{listProps => <YourComponent {...listProps} />}</Transfer>
```

## Warning

According the [standard](http://facebook.github.io/react/docs/lists-and-keys.html#keys) of React, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in `dataSource` array. By default, `key` property is used as an unique identifier.

If there's no `key` in your data, you should use `rowKey` to specify the key that will be used for uniquely identify each element.

```jsx
// eg. your primary key is `uid`
return <Transfer rowKey={record => record.uid} />;
```

## FAQ

### How to support fetch and present data from a remote server in Transfer column.

In order to keep the page number synchronized, you can disable columns you checked without removing the option: <https://codesandbox.io/s/93xeb>
