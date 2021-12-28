---
tags:
  - Components
subtitle: 自动完成
type: 数据录入
cols: 2
title: AutoComplete 自动完成
----------

输入框自动完成功能。

## 何时使用

需要自动完成时。

## 示例

### 基本使用

基本使用。通过 dataSource 设置自动完成的数据源

```jsx live
function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {
  state = {
    value: '',
    dataSource: [],
  };

  onSearch = searchText => {
    this.setState({
      dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    });
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { dataSource, value } = this.state;
    return (
      <div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
        />
        <br />
        <br />
        <AutoComplete
          value={value}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="control mode"
        />
      </div>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);
```

### 自定义选项

也可以直接传 `AutoComplete.Option` 作为 `AutoComplete` 的 `children`，而非使用 `dataSource`。

```jsx live
const { Option } = AutoComplete;

class Complete extends React.Component {
  state = {
    result: [],
  };

  handleSearch = value => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  };

  render() {
    const { result } = this.state;
    const children = result.map(email => <Option key={email}>{email}</Option>);
    return (
      <AutoComplete style={{ width: 200 }} onSearch={this.handleSearch} placeholder="input here">
        {children}
      </AutoComplete>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);
```

### 自定义输入组件

自定义输入组件。

```jsx live
const { TextArea } = Input;

function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  handleKeyPress = ev => {
    console.log('handleKeyPress', ev);
  };

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
      >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{ height: 50 }}
          onKeyPress={this.handleKeyPress}
        />
      </AutoComplete>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);
```

### 不区分大小写

不区分大小写的 AutoComplete

```jsx live
const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

function Complete() {
  return (
    <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) =>
        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
}

ReactDOM.render(<Complete />, mountNode);
```

### 查询模式 - 确定类目

\[查询模式: 确定类目]\(https://ant.design/docs/spec/reaction#Lookup-Patterns) 示例。

```jsx live
const { Option, OptGroup } = AutoComplete;

const dataSource = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'AntDesign UI',
        count: 60100,
      },
      {
        title: 'AntDesign',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'AntDesign design language',
        count: 100000,
      },
    ],
  },
];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
}

const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} people</span>
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        View all results
      </a>
    </Option>,
  ]);

function Complete() {
  return (
    <div className="certain-category-search-wrapper" style={{ width: 250 }}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="input here"
        optionLabelProp="value"
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
  );
}

ReactDOM.render(<Complete />, mountNode);
```

### 查询模式 - 不确定类目

\[查询模式: 不确定类目]\(https://ant.design/docs/spec/reaction#Lookup-Patterns) 示例。

```jsx live
const { Option } = AutoComplete;

function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}

class Complete extends React.Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper" style={{ width: 300 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
          optionLabelProp="text"
        >
          <Input
            suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
              >
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>
      </div>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);
```

## API

```jsx
const dataSource = ['12345', '23456', '34567'];
<AutoComplete dataSource={dataSource} />;
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除, 单选模式有效 | boolean | false |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |  |
| children (自定义输入框) | 自定义输入框 | HTMLInputElement <br /><br /> HTMLTextAreaElement <br /><br /> `React.ReactElement<InputProps>` | `<Input />` |  |
| children (自动完成的数据源) | 自动完成的数据源 | `React.ReactElement<OptionProps>` <br /><br /> `Array<React.ReactElement<OptionProps>>` | - |  |
| dataSource | 自动完成的数据源 | [DataSourceItemType](https://git.io/vMMKF)\[] |  |  |
| dropdownMenuStyle | dropdown 菜单自定义样式 | object |  |  |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true |  |
| defaultValue | 指定默认选中的条目 | string|string\[]| 无 |  |
| disabled | 是否禁用 | boolean | false |  |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | boolean or function(inputValue, option) | true |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | Function(triggerNode) | () => document.body | 3.19.4 |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。 | string | `children` |  |
| placeholder | 输入框提示 | string | - |  |
| value | 指定当前选中的条目 | string|string\[]|{ key: string, label: string|ReactNode }|Array<{ key: string, label: string|ReactNode }> | 无 |  |
| onBlur | 失去焦点时的回调 | function() | - | 3.6.5 |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | 无 |  |
| onFocus | 获得焦点时的回调 | function() | - | 3.6.5 |
| onSearch | 搜索补全项的时候调用 | function(value) | 无 |  |
| onSelect | 被选中时调用，参数为选中项的 value 值 | function(value, option) | 无 |  |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - | 3.9.3 |
| open | 是否展开下拉菜单 | boolean | - | 3.9.3 |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - | 3.9.3 |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

## FAQ

### 为何受控状态下使用 onSearch 无法输入中文？

请使用 `onChange` 进行受控管理。`onSearch` 触发于搜索输入，与 `onChange` 时机不同。此外，点选选项时也不会触发 `onSearch` 事件。

相关 issue：[#18230](https://github.com/ant-design/ant-design/issues/18230) [#17916](https://github.com/ant-design/ant-design/issues/17916)
