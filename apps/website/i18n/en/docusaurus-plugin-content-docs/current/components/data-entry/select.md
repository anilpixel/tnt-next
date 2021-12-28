---
tags:
  - Components
type: Data Entry
title: Select
------

Select component to select value from options.

## When To Use

*   A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.
*   Utilizing [Radio](/components/radio/) is recommended when there are fewer total options (less than 5).

## 示例

### Basic Usage

Basic Usage.

```jsx live
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <div>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>,
  mountNode,
);
```

### Select with search field

Search the options while expanded.

```jsx live
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

ReactDOM.render(
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>,
  mountNode,
);
```

### multiple selection

Multiple selection, selecting from existing items.

```jsx live
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={['a10', 'c12']}
    onChange={handleChange}
  >
    {children}
  </Select>,
  mountNode,
);
```

### Sizes

The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.

```jsx live
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

class SelectSizesDemo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Select size={size} defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
          {children}
        </Select>
        <br />
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </Select>
        <br />
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </Select>
      </div>
    );
  }
}

ReactDOM.render(<SelectSizesDemo />, mountNode);
```

### Custom selection render

Spacified the prop name of Option which will be rendered in select box.

```jsx live
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <span role="img" aria-label="China">
        🇨🇳
      </span>
      China (中国)
    </Option>
    <Option value="usa" label="USA">
      <span role="img" aria-label="USA">
        🇺🇸
      </span>
      USA (美国)
    </Option>
    <Option value="japan" label="Japan">
      <span role="img" aria-label="Japan">
        🇯🇵
      </span>
      Japan (日本)
    </Option>
    <Option value="korea" label="Korea">
      <span role="img" aria-label="Korea">
        🇰🇷
      </span>
      Korea (韩国)
    </Option>
  </Select>,
  mountNode,
);
```

### Tags

Select with tags, transform input to tag (scroll the menu)

```jsx live
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
    {children}
  </Select>,
  mountNode,
);
```

### Option Group

Using `OptGroup` to group the options.

```jsx live
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>,
  mountNode,
);
```

### coordinate

Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.

```jsx live
const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class App extends React.Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  };

  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    });
  };

  render() {
    const { cities } = this.state;
    return (
      <div>
        <Select
          defaultValue={provinceData[0]}
          style={{ width: 120 }}
          onChange={this.handleProvinceChange}
        >
          {provinceData.map(province => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
        <Select
          style={{ width: 120 }}
          value={this.state.secondCity}
          onChange={this.onSecondCityChange}
        >
          {cities.map(city => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Search Box

Search with remote data.

```jsx live

import jsonp from 'fetch-jsonp';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
    value: undefined,
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <Select
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

ReactDOM.render(<SearchInput placeholder="input search text" style={{ width: 200 }} />, mountNode);
```

### Get value of selected item

As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.

```jsx live
const { Option } = Select;

function handleChange(value) {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

ReactDOM.render(
  <Select
    labelInValue
    defaultValue={{ key: 'lucy' }}
    style={{ width: 120 }}
    onChange={handleChange}
  >
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select>,
  mountNode,
);
```

### Automatic tokenization

Try to copy `Lucy,Jack` to the input. Only available in tags and multiple mode.

```jsx live
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
    {children}
  </Select>,
  mountNode,
);
```

### Search and Select Users

A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.

```jsx live

const { Option } = Select;

class UserRemoteSelect extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  }

  state = {
    data: [],
    value: [],
    fetching: false,
  };

  fetchUser = value => {
    console.log('fetching user', value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
      });
  };

  handleChange = value => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  };

  render() {
    const { fetching, data, value } = this.state;
    return (
      <Select
        mode="multiple"
        labelInValue
        value={value}
        placeholder="Select users"
        notFoundContent={fetching ? <Spin size="small" /> : null}
        filterOption={false}
        onSearch={this.fetchUser}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {data.map(d => (
          <Option key={d.value}>{d.text}</Option>
        ))}
      </Select>
    );
  }
}

ReactDOM.render(<UserRemoteSelect />, mountNode);
```

### Suffix

Basic Usage.

```jsx live
const smileIcon = <Icon type="smile" />;
const mehIcon = <Icon type="meh" />;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <div>
    <Select
      suffixIcon={smileIcon}
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select suffixIcon={mehIcon} defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>,
  mountNode,
);
```

### Custom dropdown

Customize the dropdown menu via `dropdownRender`. The selection will be closed if click `dropdownRender` area, you can prevent it by wrapping `onMouseDown={e => e.preventDefault()}` (see more at \[#13448]\(https://github.com/ant-design/ant-design/issues/13448)).

```jsx live
const { Option } = Select;

let index = 0;

class App extends React.Component {
  state = {
    items: ['jack', 'lucy'],
  };

  addItem = () => {
    console.log('addItem');
    const { items } = this.state;
    this.setState({
      items: [...items, `New item ${index++}`],
    });
  };

  render() {
    const { items } = this.state;
    return (
      <Select
        style={{ width: 240 }}
        placeholder="custom dropdown render"
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div
              style={{ padding: '4px 8px', cursor: 'pointer' }}
              onMouseDown={e => e.preventDefault()}
              onClick={this.addItem}
            >
              <Icon type="plus" /> Add item
            </div>
          </div>
        )}
      >
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### Hide Already Selected

Hide already selected options in the dropdown.

```jsx live
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class SelectWithHiddenSelectedOptions extends React.Component {
  state = {
    selectedItems: [],
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Select
        mode="multiple"
        placeholder="Inserted are removed"
        value={selectedItems}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
}

ReactDOM.render(<SelectWithHiddenSelectedOptions />, mountNode);
```

## API

```html
<select>
  <option value="lucy">lucy</option>
</select>
```

### Select props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Show clear button. | boolean | false |  |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags`. | boolean | true | 3.10.0 |
| autoFocus | Get focus by default | boolean | false |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |  |
| defaultValue | Initial selected option. | string|string\[]<br />number|number\[]<br />LabeledValue|LabeledValue\[] | - |  |
| disabled | Whether disabled select | boolean | false |  |
| dropdownClassName | className of dropdown menu | string | - |  |
| dropdownMatchSelectWidth | Whether dropdown's width is same with select. | boolean | true |  |
| dropdownRender | Customize dropdown content | (menuNode: ReactNode, props) => ReactNode | - | 3.11.0 |
| dropdownStyle | style of dropdown menu | object | - |  |
| dropdownMenuStyle | additional style applied to dropdown menu | object | - |  |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |  |
| firstActiveValue | Value of action option by default | string|string\[] | - |  |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. [Example](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |  |
| labelInValue | whether to embed label in value, turn the format of value from `string` to `{key: string, label: ReactNode}` | boolean | false |  |
| maxTagCount | Max tag count to show | number | - |  |
| maxTagTextLength | Max tag text length to show | number | - | 3.18.0 |
| maxTagPlaceholder | Placeholder for not showing tags | ReactNode/function(omittedValues) | - |  |
| mode | Set mode of Select | 'default' | 'multiple' | 'tags' | 'default' |  |
| notFoundContent | Specify content to show when no result matches.. | string | 'Not Found' |  |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true | string | value |  |
| optionLabelProp | Which prop value of option will render as content of select. [Example](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | `value` for `combobox`, `children` for other modes |  |
| placeholder | Placeholder of select | string|ReactNode | - |  |
| showArrow | Whether to show the drop-down arrow | boolean | true | 3.2.1 |
| showSearch | Whether show search input in single mode. | boolean | false |  |
| size | Size of Select input. `default` `large` `small` | string | default |  |
| suffixIcon | The custom suffix icon | ReactNode | - | 3.10.0 |
| removeIcon | The custom remove icon | ReactNode | - | 3.11.0 |
| clearIcon | The custom clear icon | ReactNode | - | 3.11.0 |
| menuItemSelectedIcon | The custom menuItemSelected icon with multiple options | ReactNode | - | 3.11.0 |
| tokenSeparators | Separator used to tokenize on tag/multiple mode | string\[] |  |  |
| value | Current selected option. | string|string\[]\<br />number|number\[]\<br />LabeledValue|LabeledValue\[] | - |  |
| onBlur | Called when blur | function | - |  |
| onChange | Called when select an option or input value change, or value of input is changed in combobox mode | function(value, option:Option/Array\<Option\>) | - |  |
| onDeselect | Called when a option is deselected, param is the selected option's value. Only called for multiple or tags, effective in multiple or tags mode only. | function(string|number|LabeledValue) | - |  |
| onFocus | Called when focus | function | - |  |
| onInputKeyDown | Called when key pressed | function | - | 3.1.0 |
| onMouseEnter | Called when mouse enter | function | - |  |
| onMouseLeave | Called when mouse leave | function | - |  |
| onPopupScroll | Called when dropdown scrolls | function | - |  |
| onSearch | Callback function that is fired when input changed. | function(value: string) |  |  |
| onSelect | Called when a option is selected, the params are option's value (or key) and option instance. | function(string|number|LabeledValue, option:Option) | - |  |
| defaultOpen | Initial open state of dropdown | boolean | - | 3.9.3 |
| open | Controlled open state of dropdown | boolean | - | 3.9.0 |
| onDropdownVisibleChange | Call when dropdown open (Supported after version 3.9.0) | function(open) | - | 3.9.0 |
| loading | indicate loading state | Boolean | false | 3.11.0 |

### Select Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | Remove focus |         |
| focus() | Get focus    |         |

### Option props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | Disable this option | boolean | false |  |
| key | Same usage as `value`. If React request you to set this property, you can set it to value of option, and then omit value property. | string |  |  |
| title | `title` of Select after select this Option | string | - |  |
| value | default to filter with this property | string|number | - |  |
| className | additional class to option | string | - | 3.10.1 |

### OptGroup props

| Property | Description | Type                  | Default | Version |
| -------- | ----------- | --------------------- | ------- | ------- |
| key      |             | string                | -       |         |
| label    | Group label | string|React.Element | -       |         |

## FAQ

### The dropdown is closed when click `dropdownRender` area?

See the instruction in [dropdownRender example](#components-select-demo-custom-dropdown-menu).
