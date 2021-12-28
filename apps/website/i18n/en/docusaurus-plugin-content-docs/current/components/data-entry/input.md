---
tags:
  - Components
type: Data Entry
title: Input
------

A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.

## When To Use

*   A user input in a form field is needed.
*   A search input is required.

## 示例

### Basic usage

Basic usage example.

```jsx live
ReactDOM.render(<Input placeholder="Basic usage" />, mountNode);
```

### Three sizes of Input

There are three sizes of an Input box: `large` (40px), `default` (32px) and `small` (24px).

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

### Pre / Post tab

Using pre & post tabs example.

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

### Input Group

Input.Group example

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

### Search box

Example of creating a search box by grouping a standard input with a search button, added in `2.5.0`.

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

### Search box with loading

Search loading when onSearch.

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

### TextArea

For multi-line input.

```jsx live
const { TextArea } = Input;

ReactDOM.render(<TextArea rows={4} />, mountNode);
```

### Autosizing the height to fit the content

`autoSize` prop for a `textarea` type of `Input` makes the height to automatically adjust based on the content. An options object can be provided to `autoSize` to specify the minimum and maximum number of lines the textarea will automatically adjust.

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

### Format Tooltip Input

You can use the Input in conjunction with \[Tooltip]\(/components/tooltip) component to create a Numeric Input, which can provide a good experience for extra-long content display.

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

### prefix and suffix

Add prefix or suffix icons inside input.

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

### Password box

Input type of password and added in 3.12.0.

```jsx live
ReactDOM.render(<Input.Password placeholder="input password" />, mountNode);
```

### With clear icon

Input box with the remove icon, click the icon to delete everything.

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

### Text Align



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

### TextArea

For multi-line input.

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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| addonAfter | The label text displayed after (on the right side of) the input field. | string|ReactNode |  |  |
| addonBefore | The label text displayed before (on the left side of) the input field. | string|ReactNode |  |  |
| defaultValue | The initial input content | string |  |  |
| disabled | Whether the input is disabled. | boolean | false |  |
| id | The ID for input | string |  |  |
| maxLength | max length | number |  |  |
| prefix | The prefix icon for the Input. | string|ReactNode |  |  |
| size | The size of the input box. Note: in the context of a form, the `large` size is used. Available: `large` `default` `small` | string | `default` |  |
| suffix | The suffix icon for the Input. | string|ReactNode |  |  |
| type | The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)(use `Input.TextArea` instead of `type="textarea"`) | string | `text` |  |
| value | The input content value | string |  |  |
| onChange | callback when user input | function(e) |  | 3.9.3 |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |  |  |
| allowClear | allow to remove input content with clear icon | boolean |  | 3.12.0 |

> When `Input` is used in a `Form.Item` context, if the `Form.Item` has the `id` and `options` props defined then `value`, `defaultValue`, and `id` props of `Input` are automatically set.

The rest of the props of Input are exactly the same as the original [input](https://facebook.github.io/react/docs/events.html#supported-events).

### Input.TextArea

> If you are using `antd@<2.12`, please use `Input[type=textarea]`.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoSize | Height autosize feature, can be set to `true|false` or an object `{ minRows: 2, maxRows: 6 }`. `autosize` is deprecated after `3.24.0`, please use `autoSize`. | boolean|object | false | 3.24.0 |
| defaultValue | The initial input content | string |  |  |
| value | The input content value | string |  |  |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |  |  |
| allowClear | allow to remove input content with clear icon | boolean |  | 3.25.0 |

The rest of the props of `Input.TextArea` are the same as the original [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

#### Input.Search

`Added in 2.5.0`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| enterButton | to show an enter button after input. This prop is conflict with addon. | boolean|ReactNode | false |  |
| onSearch | The callback function triggered when you click on the search-icon, the clear-icon or press the Enter key. | function(value, event) |  |  |
| loading | Search box with loading. | boolean |  |  |

Supports all props of `Input`.

#### Input.Group

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| compact | Whether use compact style | boolean | false |  |
| size | The size of `Input.Group` specifies the size of the included `Input` fields. Available: `large` `default` `small` | string | `default` |  |

```html
<Input.Group>
  <input />
  <input />
</Input.Group>
```

#### Input.Password (Added in 3.12.0)

| Property         | Description                | Type    | Default | Version |
| ---------------- | -------------------------- | ------- | ------- | ------- |
| visibilityToggle | Whether show toggle button | boolean | true    | 3.12.2  |

## FAQ

### Why Input lose focus when change `prefix/suffix`

When Input dynamic add or remove `prefix/suffix` will make React recreate the dom structure and new input will be not focused. You can set an empty `<span />` element to keep the dom structure:

```jsx
const suffix = condition ? <Icon type="smile" /> : <span />;

<Input suffix={suffix} />;
```
