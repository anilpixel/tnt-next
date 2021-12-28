---
tags:
  - Components
type: Data Entry
cols: 2
title: AutoComplete
----------

Autocomplete function of input field.

## When To Use

When there is a need for autocomplete functionality.

## 示例

### Basic Usage

Basic Usage, set data source of autocomplete with `dataSource` property.

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

### Customized

You could pass `AutoComplete.Option` as children of `AutoComplete`, instead of using `dataSource`。

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

### Customize Input Component

Customize Input Component

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

### Non-case-sensitive AutoComplete

A non-case-sensitive AutoComplete

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

### Lookup-Patterns - Certain Category

Demonstration of \[Lookup Patterns: Certain Category]\(https://ant.design/docs/spec/reaction#Lookup-Patterns). Basic Usage, set datasource of autocomplete with `dataSource` property.

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

### Lookup-Patterns - Uncertain Category

Demonstration of \[Lookup Patterns: Uncertain Category]\(https://ant.design/docs/spec/reaction#Lookup-Patterns). Basic Usage, set datasource of autocomplete with `dataSource` property.

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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Show clear button, effective in multiple mode only. | boolean | false |  |
| autoFocus | get focus when component mounted | boolean | false |  |
| backfill | backfill selected item the input when using keyboard | boolean | false |  |
| children (for customize input element) | customize input element | HTMLInputElement <br /><br /> HTMLTextAreaElement <br /><br /> `React.ReactElement<InputProps>` | `<Input />` |  |
| children (for dataSource) | Data source to auto complete | `React.ReactElement<OptionProps>` <br /><br /> `Array<React.ReactElement<OptionProps>>` | - |  |
| dataSource | Data source for autocomplete | [DataSourceItemType](https://git.io/vMMKF)\[] | - |  |
| dropdownMenuStyle | additional style applied to dropdown menu | object |  |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |  |
| defaultValue | Initial selected option. | string|string\[] | - |  |
| disabled | Whether disabled select | boolean | false |  |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |  |
| optionLabelProp | Which prop value of option will render as content of select. | string | `children` |  |
| placeholder | placeholder of input | string | - |  |
| value | selected option | string|string\[]|{ key: string, label: string|ReactNode }|Array<{ key: string, label: string|ReactNode }> | - |  |
| onBlur | Called when leaving the component. | function() | - | 3.6.5 |
| onChange | Called when select an option or input value change, or value of input is changed | function(value) | - |  |
| onFocus | Called when entering the component | function() | - | 3.6.5 |
| onSearch | Called when searching items. | function(value) | - |  |
| onSelect | Called when a option is selected. param is option's value and option instance. | function(value, option) | - |  |
| defaultOpen | Initial open state of dropdown | boolean | - | 3.9.3 |
| open | Controlled open state of dropdown | boolean | - | 3.9.3 |
| onDropdownVisibleChange | Call when dropdown open | function(open) | - | 3.9.3 |

## Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |

## FAQ

### Why doesn't the text composition system work well with onSearch in controlled mode?

Please use `onChange` to manage control state. `onSearch` is used for searching input which is not same as `onChange`. Besides, clicking on the option will not trigger the `onSearch` event.

Related issue: [#18230](https://github.com/ant-design/ant-design/issues/18230) [#17916](https://github.com/ant-design/ant-design/issues/17916)
