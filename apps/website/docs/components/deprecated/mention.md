---
tags:
  - Components
type: 废弃
subtitle: 提及（废弃）
title: Mention 提及（废弃）
------

提及组件。已废弃，请使用 [Mentions](/components/mentions) 代替。

## 为何废弃？

## 示例

### 基本使用

基本使用

```jsx live
const { toString, toContentState } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

ReactDOM.render(
  <Mention
    style={{ width: '100%' }}
    onChange={onChange}
    defaultValue={toContentState('@afc163')}
    defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
    onSelect={onSelect}
  />,
  mountNode,
);
```

### 向上展开

向上展开建议。

```jsx live
const { toString } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

ReactDOM.render(
  <Mention
    style={{ width: '100%' }}
    onChange={onChange}
    defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
    onSelect={onSelect}
    placement="top"
  />,
  mountNode,
);
```

### 异步加载

匹配内容列表为异步返回时。

```jsx live
const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class AsyncMention extends React.Component {
  state = {
    suggestions: [],
    loading: false,
  };

  fetchSuggestions = (value, callback) => {
    setTimeout(() => {
      callback(users.filter(item => item.indexOf(value) !== -1));
    }, 500);
  };

  onSearchChange = value => {
    this.fetchSuggestions(value, suggestions => {
      this.setState({
        suggestions,
        loading: false,
      });
    });
    this.setState({
      loading: true,
    });
  };

  render() {
    const { suggestions, loading } = this.state;
    return (
      <Mention
        style={{ width: '100%' }}
        loading={loading}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}

ReactDOM.render(<AsyncMention />, mountNode);
```

### 自定义建议

自定义建议

```jsx live
const { Nav } = Mention;

const webFrameworks = [
  { name: 'React', type: 'JavaScript' },
  { name: 'Angular', type: 'JavaScript' },
  { name: 'Laravel', type: 'PHP', disabled: true },
  { name: 'Flask', type: 'Python' },
  { name: 'Django', type: 'Python' },
];

function onSelect(suggestion, data) {
  console.log('onSelect', suggestion, data);
}

class CustomNavMention extends React.Component {
  state = {
    suggestions: [],
  };

  onSearchChange = value => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(
      item => item.name.toLowerCase().indexOf(searchValue) !== -1,
    );
    const suggestions = filtered.map(suggestion => (
      <Nav value={suggestion.name} data={suggestion} key={suggestion.name}>
        <span>
          {suggestion.name} - {suggestion.type}
        </span>
      </Nav>
    ));
    this.setState({ suggestions });
  };

  render() {
    const { suggestions } = this.state;
    return (
      <Mention
        placeholder="@someone"
        style={{ width: '100%' }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
        onSelect={onSelect}
      />
    );
  }
}

ReactDOM.render(<CustomNavMention />, mountNode);
```

### 头像

自定义建议（含头像）

```jsx live
const { Nav } = Mention;

const webFrameworks = [
  {
    name: 'React',
    type: 'JavaScript',
    icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg',
  },
  {
    name: 'Angular',
    type: 'JavaScript',
    icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png',
  },
  {
    name: 'Dva',
    type: 'Javascript',
    icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png',
  },
  {
    name: 'Flask',
    type: 'Python',
    icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png',
  },
];

class CustomNavMention extends React.Component {
  state = {
    suggestions: [],
  };

  onSearchChange = value => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(
      item => item.name.toLowerCase().indexOf(searchValue) !== -1,
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
        disabled={suggestion.disabled}
        key="mention-avatar"
      >
        <Avatar
          src={suggestion.icon}
          size="small"
          style={{
            width: 14,
            height: 14,
            marginRight: 8,
            top: -1,
            position: 'relative',
          }}
        />
        {suggestion.name} - {suggestion.type}
      </Nav>
    ));
    this.setState({ suggestions });
  };

  render() {
    const { suggestions } = this.state;
    return (
      <Mention
        style={{ width: '100%' }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}

ReactDOM.render(<CustomNavMention />, mountNode);
```

### 受控模式

受控模式.

```jsx live
const { toContentState } = Mention;

class App extends React.Component {
  state = {
    value: toContentState('@afc163'),
  };

  componentDidMount() {
    this.mention.focus();
  }

  handleChange = editorState => {
    this.setState({
      value: editorState,
    });
  };

  render() {
    return (
      <Mention
        ref={ele => (this.mention = ele)}
        defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 配合 Form 使用

受控模式，例如配合 Form 使用。

```jsx live
const { toContentState, getMentions } = Mention;
const FormItem = Form.Item;

class App extends React.Component {
  state = {
    initValue: toContentState('@afc163'),
  };

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
    const { getFieldValue } = this.props.form;
    const mentions = getMentions(getFieldValue('mention'));
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'));
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    console.log('>> render', getFieldValue('mention') === this.state.initValue);
    return (
      <Form layout="horizontal">
        <FormItem
          id="control-mention"
          label="Top coders"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('mention', {
            rules: [{ validator: this.checkMention }],
            initialValue: this.state.initValue,
          })(
            <Mention
              defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
            />,
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 14, offset: 6 }}>
          <Button type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={this.handleReset}>Reset</Button>
        </FormItem>
      </Form>
    );
  }
}

const FormDemo = Form.create()(App);

ReactDOM.render(<FormDemo />, mountNode);
```

### 多行

多行模式，多行模式必须指定高度。

```jsx live
const { toString } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

ReactDOM.render(
  <Mention
    style={{ width: '100%', height: 100 }}
    onChange={onChange}
    defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
    multiLines
  />,
  mountNode,
);
```

### 建议渲染父节点

指定提示渲染的父节点。

```jsx live
const { toString, toContentState } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

class PopoverContainer extends React.Component {
  getSuggestionContainer = () => this.popover.getPopupDomNode();

  visibleChange = visible => {
    if (visible && this.mention) {
      this.mention.focus();
    }
  };

  render() {
    const mention = (
      <Mention
        ref={ele => (this.mention = ele)}
        style={{ width: '100%' }}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        onSelect={onSelect}
        getSuggestionContainer={this.getSuggestionContainer}
      />
    );
    return (
      <Popover
        trigger="click"
        content={mention}
        title="Title"
        ref={popover => (this.popover = popover)}
        onVisibleChange={this.visibleChange}
      >
        <Button type="primary">Click Me</Button>
      </Popover>
    );
  }
}

ReactDOM.render(<PopoverContainer />, mountNode);
```

### 无效或只读

通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。

```jsx live
const { toString } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

function App() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Mention
          style={{ width: '100%' }}
          onChange={onChange}
          placeholder="this is disabled Mention"
          suggestions={users}
          disabled
        />
      </div>
      <Mention
        style={{ width: '100%' }}
        onChange={onChange}
        placeholder="this is readOnly Mention"
        suggestions={users}
        readOnly
      />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```

### 自定义触发字符

通过 `prefix` 属性自定义触发字符。默认为 `@`, 可以定义为数组。

```jsx live
const { toString } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
const tags = ['1.0', '2.0', '3.0'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
    };
  }

  onSearchChange = (value, trigger) => {
    console.log('onSearchChange', value, trigger);
    const dataSource = trigger === '@' ? users : tags;
    this.setState({
      suggestions: dataSource.filter(item => item.indexOf(value) !== -1),
    });
  };

  render() {
    return (
      <Mention
        style={{ width: '100%' }}
        onChange={onChange}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearchChange={this.onSearchChange}
        suggestions={this.state.suggestions}
        onSelect={onSelect}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## API

```jsx
<Mention
  onChange={onChange}
  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
/>
```

### Mention API

| API | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| getMentions | 获取当前 contentState 中提到的人的列表 | Function(contentState: ContentState): string\[] |  |
| toContentState | 把字符串转成 ContentState | Function(value: string): ContentState |  |
| toString | 把 ContentState 转成字符串 | Function(contentState: ContentState): string |  |

### Mention

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |  |
| defaultValue | 默认值 | ContentState, 可以用 `Mention.toContentState(text)` 把文字转换成 ContentState | null |  |
| defaultSuggestions | 默认建议内容 | Array\<string|Mention.Nav> | \[] | 3.12.0 |
| disabled | 是否禁用状态. | boolean | false |  |
| getSuggestionContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位 | function() | () => document.body |  |
| loading | 加载中 | boolean | false |  |
| multiLines | 多行模式 | boolean | false |  |
| notFoundContent | 未找到时的内容 | string | '无匹配结果，轻敲空格完成输入' |  |
| placeholder | 输入框默认文字 | string | null |  |
| placement | 建议框位置，可选 `top` `bottom` | string | 'bottom' |  |
| prefix | 触发弹出下拉框的字符 | string or Array\<string\> | '@' |  |
| readOnly | 是否只读. | boolean | false |  |
| suggestions | 建议内容 | Array\<string|Mention.Nav> | \[] |  |
| suggestionStyle | 弹出下拉框样式 | object | {} |  |
| value | 值 | ContentState | null |  |
| onBlur | 失去焦点时回调 | function(e) | null |  |
| onChange | 输入框内容变化时回调 | function(contentState: ContentState) | null |  |
| onFocus | 获得焦点时回调 | function(e) | null |  |
| onSearchChange | 输入框中 @ 变化时回调 | function(value:string, trigger: string) | \[] |  |
| onSelect | 下拉框选择建议时回调 | function(suggestion: string, data?: any) | null |  |

### Mention 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

### Nav

| 参数     | 说明                                     | 类型   | 默认值 | 版本 |
| -------- | ---------------------------------------- | ------ | ------ | ---- |
| children | 建议内容                                 | object | {}     |      |
| value    | 建议值，选择建议时，用此值插入到输入框中 | string | ""     |      |
