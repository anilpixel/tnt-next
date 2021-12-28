---
tags:
  - Components
subtitle: 选择器
type: 数据录入
title: Select 选择器
------

下拉选择器。

## 何时使用

*   弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
*   当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/components/radio/) 是更好的选择。

## 示例

### 基本使用

基本使用。

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

### 带搜索框

展开后可对选项进行搜索。

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

### 多选

多选，从已有条目中选择。

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

### 三种大小

三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

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

### 定制回填内容

使用 `optionLabelProp` 指定回填到选择框的 `Option` 属性。

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

### 标签

tags select，随意输入的内容（scroll the menu）

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

### 分组

用 `OptGroup` 进行选项分组。

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

### 联动

省市联动是典型的例子。

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

### 搜索框

搜索和远程数据结合。

```jsx live
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

### 获得选项的文本

默认情况下 `onChange` 里只能拿到 value，如果需要拿到选中的节点文本 label，可以使用 `labelInValue` 属性。

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

### 自动分词

试下复制 `露西,杰克` 到输入框里。只在 tags 和 multiple 模式下可用。

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

### 搜索用户

一个带有远程搜索，防抖控制，请求时序控制，加载状态的多选示例。

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

### 后缀图标

基本使用。

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

### 扩展菜单

使用 `dropdownRender` 对下拉菜单进行自由扩展。自定义内容点击时会关闭浮层，如果不喜欢关闭，可以添加 `onMouseDown={e => e.preventDefault()}` 进行阻止（更多详情见 \[#13448]\(https://github.com/ant-design/ant-design/issues/13448)）。

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

### 隐藏已选择选项

隐藏下拉列表中已选择的选项。

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

```jsx
<Select>
  <Select.Option value="lucy">lucy</Select.Option>
</Select>
```

### Select props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean | false |  |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效。 | boolean | true | 3.10.0 |
| autoFocus | 默认获取焦点 | boolean | false |  |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true |  |
| defaultValue | 指定默认选中的条目 | string|string\[]\<br />number|number\[]\<br />LabeledValue|LabeledValue\[] | - |  |
| disabled | 是否禁用 | boolean | false |  |
| dropdownClassName | 下拉菜单的 className 属性 | string | - |  |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | true |  |
| dropdownRender | 自定义下拉框内容 | (menuNode: ReactNode, props) => ReactNode | - | 3.11.0 |
| dropdownStyle | 下拉菜单的 style 属性 | object | - |  |
| dropdownMenuStyle | dropdown 菜单自定义样式 | object | - |  |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | boolean or function(inputValue, option) | true |  |
| firstActiveValue | 默认高亮的选项 | string|string\[] | - |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | Function(triggerNode) | () => document.body |  |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 `{key: string, label: ReactNode}` 的格式 | boolean | false |  |
| maxTagCount | 最多显示多少个 tag | number | - |  |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - | 3.18.0 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode/function(omittedValues) | - |  |
| mode | 设置 Select 的模式为多选或标签 | 'multiple' | 'tags' | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | string | 'Not Found' |  |
| optionFilterProp | 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。[示例](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | value |  |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。 | string | `children` （combobox 模式下为 `value`） |  |
| placeholder | 选择框默认文字 | string | - |  |
| showArrow | 是否显示下拉小箭头 | boolean | true | 3.2.1 |
| showSearch | 使单选模式可搜索 | boolean | false |  |
| size | 选择框大小，可选 `large` `small` | string | default |  |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - | 3.10.0 |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - | 3.11.0 |
| clearIcon | 自定义的多选框清空图标 | ReactNode | - | 3.11.0 |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标 | ReactNode | - | 3.11.0 |
| tokenSeparators | 在 tags 和 multiple 模式下自动分词的分隔符 | string\[] |  |  |
| value | 指定当前选中的条目 | string|string\[]\<br />number|number\[]\<br />LabeledValue|LabeledValue\[] | - |  |
| onBlur | 失去焦点时回调 | function | - |  |
| onChange | 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数 | function(value, option:Option/Array\<Option\>) | - |  |
| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 | function(string|number|LabeledValue) | - |  |
| onFocus | 获得焦点时回调 | function | - |  |
| onInputKeyDown | 按键按下时回调 | function | - | 3.1.0 |
| onMouseEnter | 鼠标移入时回调 | function | - |  |
| onMouseLeave | 鼠标移出时回调 | function | - |  |
| onPopupScroll | 下拉列表滚动时的回调 | function | - |  |
| onSearch | 文本框值变化时回调 | function(value: string) |  |  |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(string|number|LabeledValue, option:Option) | - |  |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - | 3.9.3 |
| open | 是否展开下拉菜单 | boolean | - | 3.9.0 |
| onDropdownVisibleChange | 展开下拉菜单的回调 (3.9.0 后支持) | function(open) | - | 3.9.0 |
| loading | 加载中状态 | Boolean | false | 3.11.0 |

> 注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 `getPopupContainer={triggerNode => triggerNode.parentElement}` 将下拉弹层渲染节点固定在触发器的父元素中。

### Select Methods

| 名称    | 说明     | 版本 |
| ------- | -------- | ---- |
| blur()  | 取消焦点 |      |
| focus() | 获取焦点 |      |

### Option props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |  |
| key | 和 value 含义一致。如果 React 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置 | string |  |  |
| title | 选中该 Option 后，Select 的 title | string | - |  |
| value | 默认根据此属性值进行筛选 | string|number | - |  |
| className | Option 器类名 | string | - | 3.10.1 |

### OptGroup props

| 参数  | 说明 | 类型                  | 默认值 | 版本 |
| ----- | ---- | --------------------- | ------ | ---- |
| key   |      | string                | -      |      |
| label | 组名 | string|React.Element | 无     |      |

## FAQ

### 点击 `dropdownRender` 里的内容浮层关闭怎么办？

看下 [dropdownRender 例子](#components-select-demo-custom-dropdown-menu) 里的说明。
