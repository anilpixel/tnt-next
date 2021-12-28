---
tags:
  - Components
subtitle: 输入框
type: 数据录入
title: Input 输入框
------

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

*   需要用户输入表单域内容时。
*   提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 示例

### 基本使用

基本使用。

```jsx live
ReactDOM.render(<Input placeholder="Basic usage" />, mountNode);
```

### 三种大小

我们为 `\<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

```jsx live
ReactDOM.render(
  <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>,
  mountNode,
);
```

### 前置/后置标签

用于配置一些固定组合。

```jsx live
const { Option } = Select;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

ReactDOM.render(
  <div>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
    </div>
  </div>,
  mountNode,
);
```

### 输入框组合

输入框的组合展现。

```jsx live
const InputGroup = Input.Group;
const { Option } = Select;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class CompactDemo extends React.Component {
  state = {
    dataSource: [],
  };

  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
  };

  render() {
    return (
      <div>
        <InputGroup size="large">
          <Row gutter={8}>
            <Col span={5}>
              <Input defaultValue="0571" />
            </Col>
            <Col span={8}>
              <Input defaultValue="26888888" />
            </Col>
          </Row>
        </InputGroup>
        <br />
        <InputGroup compact>
          <Input style={{ width: '20%' }} defaultValue="0571" />
          <Input style={{ width: '30%' }} defaultValue="26888888" />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Zhejiang">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="input content" />
          <InputNumber />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Input style={{ width: '50%' }} defaultValue="input content" />
          <DatePicker style={{ width: '50%' }} />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Option1-1">
            <Option value="Option1-1">Option1-1</Option>
            <Option value="Option1-2">Option1-2</Option>
          </Select>
          <Select defaultValue="Option2-2">
            <Option value="Option2-1">Option2-1</Option>
            <Option value="Option2-2">Option2-2</Option>
          </Select>
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="1">
            <Option value="1">Between</Option>
            <Option value="2">Except</Option>
          </Select>
          <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
          <Input
            style={{
              width: 30,
              borderLeft: 0,
              pointerEvents: 'none',
              backgroundColor: '#fff',
            }}
            placeholder="~"
            disabled
          />
          <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Sign Up">
            <Option value="Sign Up">Sign Up</Option>
            <Option value="Sign In">Sign In</Option>
          </Select>
          <AutoComplete
            dataSource={this.state.dataSource}
            style={{ width: 200 }}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select style={{ width: '30%' }} defaultValue="Home">
            <Option value="Home">Home</Option>
            <Option value="Company">Company</Option>
          </Select>
          <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
        </InputGroup>
      </div>
    );
  }
}

ReactDOM.render(<CompactDemo />, mountNode);
```

### 搜索框

带有搜索按钮的输入框，`2.5.0` 时新增。

```jsx live
const { Search } = Input;

ReactDOM.render(
  <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
    <br />
    <br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
  </div>,
  mountNode,
);
```

### 搜索框 loading

用于 `onSearch` 的时候展示 `loading`。

```jsx live
const { Search } = Input;

ReactDOM.render(
  <div>
    <Search placeholder="input search loading deault" loading />
    <br />
    <br />
    <Search placeholder="input search loading with enterButton" loading enterButton />
  </div>,
  mountNode,
);
```

### 文本域

用于多行输入。

```jsx live
const { TextArea } = Input;

ReactDOM.render(<TextArea rows={4} />, mountNode);
```

### 适应文本高度的文本域

`autoSize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autoSize` 可以设定为一个对象，指定最小行数和最大行数。

```jsx live
const { TextArea } = Input;

class Demo extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### 输入时格式化展示

结合 \[Tooltip]\(/components/tooltip) 组件，实现一个数值输入框，方便内容超长时的全量展现。

```jsx live
function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
  onChange = e => {
    const { value } = e.target;
    const reg = /^-?[0-9]*(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  };

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    if (onBlur) {
      onBlur();
    }
  };

  render() {
    const { value } = this.props;
    const title = value ? (
      <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
    ) : (
      'Input a number'
    );
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="Input a number"
          maxLength={25}
        />
      </Tooltip>
    );
  }
}

class NumericInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />
    );
  }
}

ReactDOM.render(<NumericInputDemo />, mountNode);
```

### 前缀和后缀

在输入框上添加前缀或后缀图标。

```jsx live
ReactDOM.render(
  <div>
    <Input
      placeholder="Enter your username"
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      suffix={
        <Tooltip title="Extra information">
          <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />

    <br />
    <br />

    <Input prefix="￥" suffix="RMB" />
  </div>,
  mountNode,
);
```

### 密码框

密码框，版本 3.12.0 中新增。

```jsx live
ReactDOM.render(<Input.Password placeholder="input password" />, mountNode);
```

### 带移除图标

带移除图标的输入框，点击图标删除所有内容。

```jsx live
const { TextArea } = Input;

const onChange = e => {
  console.log(e);
};

ReactDOM.render(
  <div>
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
  </div>,
  mountNode,
);
```

### 文本对齐



```jsx live
const { Text } = Typography;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

ReactDOM.render(
  <div>
    <Mentions style={{ width: 100 }} rows={1} />
    <Input.TextArea rows={1} style={{ width: 100 }} />
    <Button type="primary">Button</Button>
    <Input style={{ width: 100 }} />
    <Text copyable>Ant Design</Text>
    <Input prefix="1" suffix="2" style={{ width: 100 }} />
    <Input addonBefore="1" addonAfter="2" style={{ width: 100 }} />
    <InputNumber style={{ width: 100 }} />
    <DatePicker style={{ width: 100 }} />
    <TimePicker style={{ width: 100 }} />
    <Select style={{ width: 100 }} defaultValue="jack">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select style={{ width: 100 }} combobox defaultValue="jack" />
    <TreeSelect style={{ width: 100 }} />
    <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} />
    <RangePicker />
    <MonthPicker />
    <RadioGroup defaultValue="a">
      <RadioButton value="a">Hangzhou</RadioButton>
      <RadioButton value="b">Shanghai</RadioButton>
    </RadioGroup>
    <AutoComplete style={{ width: 100 }} placeholder="input here" />
  </div>,
  mountNode,
);
```

### 文本域

用于多行输入。

```jsx live
const { TextArea } = Input;

const defaultValue =
  'The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows. The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows.';

class Demo extends React.Component {
  state = {
    autoResize: false,
  };

  render() {
    const { autoResize } = this.state;

    return (
      <div>
        <Button
          onClick={() => this.setState({ autoResize: !autoResize })}
          style={{ marginBottom: 16 }}
        >
          Auto Resize: {String(autoResize)}
        </Button>
        <TextArea rows={4} autoSize={autoResize} defaultValue={defaultValue} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

### Input

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | string|ReactNode |  |  |
| addonBefore | 带标签的 input，设置前置标签 | string|ReactNode |  |  |
| defaultValue | 输入框默认内容 | string |  |  |
| disabled | 是否禁用状态，默认为 false | boolean | false |  |
| id | 输入框的 id | string |  |  |
| maxLength | 最大长度 | number |  |  |
| prefix | 带有前缀图标的 input | string|ReactNode |  |  |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |  |
| suffix | 带有后缀图标的 input | string|ReactNode |  |  |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`)。 | string | `text` |  |
| value | 输入框内容 | string |  |  |
| onChange | 输入框内容变化时的回调 | function(e) |  | 3.9.3 |
| onPressEnter | 按下回车的回调 | function(e) |  |  |
| allowClear | 可以点击清除图标删除内容 | boolean |  | 3.12.0 |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 和 `options` 属性，则 `value` `defaultValue` 和 `id` 属性会被自动设置。

Input 的其他属性和 React 自带的 [input](https://facebook.github.io/react/docs/events.html#supported-events) 一致。

### Input.TextArea

> `2.12` 后新增的组件，旧版请使用 `Input[type=textarea]`。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoSize | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`。`3.24.0` 后 `autosize` 被废弃，请使用 `autoSize`。 | boolean|object | false | 3.24.0 |
| defaultValue | 输入框默认内容 | string |  |  |
| value | 输入框内容 | string |  |  |
| onPressEnter | 按下回车的回调 | function(e) |  |  |
| allowClear | 可以点击清除图标删除内容 | boolean |  | 3.25.0 |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

#### Input.Search

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。 | boolean|ReactNode | false |  |
| onSearch | 点击搜索或按下回车键时的回调 | function(value, event) |  |  |
| loading | 搜索 loading | boolean |  |  |

其余属性和 Input 一致。

#### Input.Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| compact | 是否用紧凑模式 | boolean | false |  |
| size | `Input.Group` 中所有的 `Input` 的大小，可选 `large` `default` `small` | string | `default` |  |

```html
<Input.Group>
  <input />
  <input />
</Input.Group>
```

#### Input.Password (3.12.0 中新增)

| 参数             | 说明             | 类型    | 默认值 | 版本   |
| ---------------- | ---------------- | ------- | ------ | ------ |
| visibilityToggle | 是否显示切换按钮 | boolean | true   | 3.12.2 |

## FAQ

### 为什么我动态改变 `prefix/suffix` 时，Input 会失去焦点？

当 Input 动态添加或者删除 `prefix/suffix` 时，React 会重新创建 DOM 结构而新的 input 是没有焦点的。你可以预设一个空的 `<span />` 来保持 DOM 结构不变：

```jsx
const suffix = condition ? <Icon type="smile" /> : <span />;

<Input suffix={suffix} />;
```
