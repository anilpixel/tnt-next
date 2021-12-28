---
tags:
  - Components
subtitle: 提及
type: 数据录入
title: Mentions 提及
------

提及组件。

> 原 Mention 组件已废弃，原文档请点击[这里](/components/mention)。

## 何时使用

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 示例

### 基本使用

基本使用

```jsx live
const { Option } = Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}

ReactDOM.render(
  <Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>,
  mountNode,
);
```

### 异步加载

匹配内容列表为异步返回时。

```jsx live
const { Option } = Mentions;

class AsyncMention extends React.Component {
  constructor() {
    super();

    this.loadGithubUsers = debounce(this.loadGithubUsers, 800);
  }

  state = {
    search: '',
    loading: false,
    users: [],
  };

  onSearch = search => {
    this.setState({ search, loading: !!search, users: [] });
    console.log('Search:', search);
    this.loadGithubUsers(search);
  };

  loadGithubUsers(key) {
    if (!key) {
      this.setState({
        users: [],
      });
      return;
    }

    fetch(`https://api.github.com/search/users?q=${key}`)
      .then(res => res.json())
      .then(({ items = [] }) => {
        const { search } = this.state;
        if (search !== key) return;

        this.setState({
          users: items.slice(0, 10),
          loading: false,
        });
      });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <Mentions style={{ width: '100%' }} loading={loading} onSearch={this.onSearch}>
        {users.map(({ login, avatar_url: avatar }) => (
          <Option key={login} value={login} className="antd-demo-dynamic-option">
            <img src={avatar} alt={login} />
            <span>{login}</span>
          </Option>
        ))}
      </Mentions>
    );
  }
}

ReactDOM.render(<AsyncMention />, mountNode);
```

### 配合 Form 使用

受控模式，例如配合 Form 使用。

```jsx live
const { Option, getMentions } = Mentions;

class App extends React.Component {
  handleReset = e => {
    e.preventDefault();
    this.props.form.resetFields();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in the form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  };

  checkMention = (rule, value, callback) => {
    const mentions = getMentions(value);
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'));
    } else {
      callback();
    }
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form layout="horizontal">
        <Form.Item label="Top coders" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          {getFieldDecorator('coders', {
            rules: [{ validator: this.checkMention }],
          })(
            <Mentions rows="1">
              <Option value="afc163">afc163</Option>
              <Option value="zombieJ">zombieJ</Option>
              <Option value="yesmeck">yesmeck</Option>
            </Mentions>,
          )}
        </Form.Item>
        <Form.Item label="Bio" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          {getFieldDecorator('bio', {
            rules: [{ required: true }],
          })(
            <Mentions rows="3" placeholder="You can use @ to ref user here">
              <Option value="afc163">afc163</Option>
              <Option value="zombieJ">zombieJ</Option>
              <Option value="yesmeck">yesmeck</Option>
            </Mentions>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <Button type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={this.handleReset}>Reset</Button>
        </Form.Item>
      </Form>
    );
  }
}

const FormDemo = Form.create()(App);

ReactDOM.render(<FormDemo />, mountNode);
```

### 自定义触发字符

通过 `prefix` 属性自定义触发字符。默认为 `@`, 可以定义为数组。

```jsx live
const { Option } = Mentions;

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

class App extends React.Component {
  state = {
    prefix: '@',
  };

  onSearch = (_, prefix) => {
    this.setState({ prefix });
  };

  render() {
    const { prefix } = this.state;

    return (
      <Mentions
        style={{ width: '100%' }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Mentions>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 无效或只读

通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。

```jsx live
const { Option } = Mentions;

function getOptions() {
  return ['afc163', 'zombiej', 'yesmeck'].map(value => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
}

function App() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Mentions style={{ width: '100%' }} placeholder="this is disabled Mentions" disabled>
          {getOptions()}
        </Mentions>
      </div>
      <Mentions style={{ width: '100%' }} placeholder="this is readOnly Mentions" readOnly>
        {getOptions()}
      </Mentions>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```

### 向上展开

向上展开建议。

```jsx live
const { Option } = Mentions;

ReactDOM.render(
  <Mentions style={{ width: '100%' }} placement="top">
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>,
  mountNode,
);
```

## API

```jsx
<Mentions onChange={onChange}>
  <Mentions.Option value="sample">Sample</Mentions.Option>
</Mentions>
```

### Mentions

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获得焦点 | boolean | `false` | 3.19.0 |
| defaultValue | 默认值 | string | - | 3.19.0 |
| filterOption | 自定义过滤逻辑 | false | (input: string, option: OptionProps) => boolean | - | 3.19.0 |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | 'Not Found' | 3.19.0 |
| placement | 弹出层展示位置 | 'top' | 'bottom' | 'bottom' | 3.19.0 |
| prefix | 设置触发关键字 | string | string\[] | '@' | 3.19.0 |
| split | 设置选中项前后分隔符 | string | ' ' | 3.19.0 |
| validateSearch | 自定义触发验证逻辑 | (text: string, props: MentionsProps) => void | - | 3.19.0 |
| value | 设置值 | string | - | 3.19.0 |
| onChange | 值改变时触发 | (text: string) => void | - | 3.19.0 |
| onSelect | 选择选项时触发 | (option: OptionProps, prefix: string) => void | - | 3.19.0 |
| onSearch | 搜索时触发 | (text: string, prefix: string) => void | - | 3.19.0 |
| onFocus | 获得焦点时触发 | () => void | - | 3.19.0 |
| onBlur | 失去焦点时触发 | () => void | - | 3.19.0 |
| getPopupContainer | 指定建议框挂载的 HTML 节点 | () => HTMLElement | - | 3.22.0 |

### Mentions 方法

| 名称    | 描述     | 版本   |
| ------- | -------- | ------ |
| blur()  | 移除焦点 | 3.19.0 |
| focus() | 获取焦点 | 3.19.0 |

### Option

| 参数     | 说明           | 类型      | 默认值 | 版本   |
| -------- | -------------- | --------- | ------ | ------ |
| children | 选项内容       | ReactNode | -      | 3.19.0 |
| value    | 选择时填充的值 | string    | ''     | 3.19.0 |
