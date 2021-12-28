---
tags:
  - Components
type: Deprecated
title: Mention (Deprecated)
------

Mention component. Deprecated, please use [Mentions](/components/mentions) instead.

## Why deprecated?

## 示例

### Basic

Basic usage.

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

### Placement

Change the suggestions placement.

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

### Asynchronous loading

async

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

### Customize Suggestion

Customize suggestions.

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

### Icon Image

Customize suggestions.

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

### Controlled

Controlled mode.

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

### With Form

Controlled mode, for example, to work with `Form`.

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

### Multi-lines Mode

Multi lines mode.

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

### SuggestionContainer

To set the container of the suggestion.

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

### disabled or readOnly

Configurate `disabled` and `readOnly`.

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

### Customize Trigger Token

Customize Trigger Token by `prefix` props. Default to `@`, `Array\<string\>` also supported.

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

| API | Description | Type | Version |
| --- | --- | --- | --- |
| getMentions | get mentioned people in current contentState | Function(ContentState: contentState): string\[] |  |
| toContentState | convert string to ContentState | Function(value: string): ContentState |  |
| toString | convert ContentState to string | Function(contentState: ContentState): string |  |

### Mention

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | get focus when component mounted | boolean | false |  |
| defaultValue | default value | ContentState, you can use `Mention.toContentState` to convert text to `ContentState` | null |  |
| defaultSuggestions | default suggestion content | Array\<string|Mention.Nav> | \[] | 3.12.0 |
| disabled | Tell if the input is disabled. | boolean | false |  |
| getSuggestionContainer | rendered to the root of the menu. Default rendered to the body dom. If gets any problem of the menu while scrolling. Try to make the root the dom scrolled, and make it position relative. | function | () => document.body |  |
| loading | loading mode | boolean | false |  |
| multiLines | multilines mode | boolean | false |  |
| notFoundContent | suggestion when suggestions empty | string | 'No matches found' |  |
| placeholder | placeholder of input | string | null |  |
| placement | The position of the suggestion relative to the target, which can be one of `top` and `bottom` | string | 'bottom'. |  |
| prefix | character which will trigger Mention to show mention list | string or Array\<string\> | '@' |  |
| readOnly | Tell if the input is readonly. | boolean | false |  |
| suggestions | suggestion content | Array\<string|Mention.Nav> | \[] |  |
| suggestionStyle | style of suggestion container | object | {} |  |
| value | core state of mention | ContentState | null |  |
| onBlur | Callback function called when mention component blur | function(e) | null |  |
| onChange | Callback function called when content of input changes | function(contentState: ContentState) | null |  |
| onFocus | Callback function called when mention component get focus | function | null |  |
| onSearchChange | Callback function called when search content changes | function(value:string, trigger: string) | \[] |  |
| onSelect | Callback function called when select from suggestions | function(suggestion: string, data?: any) | null |  |

### Mention methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |

### Nav

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| children | suggestion content | object | {} |  |
| value | value of suggestion, the value will insert into input filed while selected | string | "" |  |
