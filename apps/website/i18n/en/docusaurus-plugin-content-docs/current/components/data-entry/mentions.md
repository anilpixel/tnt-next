---
tags:
  - Components
type: Data Entry
title: Mentions
------

Mention component.

> Mention component is deprecated. Please click [here](/components/mention) to view old document.

## When To Use

When need to mention someone or something.

## 示例

### Basic

Basic usage.

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

### Asynchronous loading

async

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

### With Form

Controlled mode, for example, to work with `Form`.

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

### Customize Trigger Token

Customize Trigger Token by `prefix` props. Default to `@`, `Array\<string\>` also supported.

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

### disabled or readOnly

Configurate `disabled` and `readOnly`.

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

### Placement

Change the suggestions placement.

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

### Mention

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | Auto get focus when component mounted | boolean | `false` | 3.19.0 |
| defaultValue | Default value | string | - | 3.19.0 |
| filterOption | Customize filter option logic | false | (input: string, option: OptionProps) => boolean | - | 3.19.0 |
| notFoundContent | Set mentions content when not match | ReactNode | 'Not Found' | 3.19.0 |
| placement | Set popup placement | 'top' | 'bottom' | 'bottom' | 3.19.0 |
| prefix | Set trigger prefix keyword | string | string\[] | '@' | 3.19.0 |
| split | Set split string before and after selected mention | string | ' ' | 3.19.0 |
| validateSearch | Customize trigger search logic | (text: string, props: MentionsProps) => void | - | 3.19.0 |
| value | Set value of mentions | string | - | 3.19.0 |
| onChange | Trigger when value changed | (text: string) => void | - | 3.19.0 |
| onSelect | Trigger when user select the option | (option: OptionProps, prefix: string) => void | - | 3.19.0 |
| onSearch | Trigger when prefix hit | (text: string, prefix: string) => void | - | 3.19.0 |
| onFocus | Trigger when mentions get focus | () => void | - | 3.19.0 |
| onBlur | Trigger when mentions lose focus | () => void | - | 3.19.0 |
| getPopupContainer | Set the mount HTML node for suggestions | () => HTMLElement | - | 3.22.0 |

### Mention methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus | 3.19.0  |
| focus() | get focus    | 3.19.0  |

### Option

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| children | suggestion content | ReactNode | - | 3.19.0 |
| value | value of suggestion, the value will insert into input filed while selected | string | '' | 3.19.0 |
