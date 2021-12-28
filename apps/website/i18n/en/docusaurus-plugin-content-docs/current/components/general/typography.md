---
tags:
  - Components
type: General
title: Typography
cols: 1
-------

Basic text writing, including headings, body text, lists, and more.

## When To Use

*   When need to display a title or paragraph contents in Articles/Blogs/Notes.
*   When you need copyable/editable/ellipsis texts.

## 示例

### Basic

Display the document sample.

```jsx live
const { Title, Paragraph, Text } = Typography;

ReactDOM.render(
  <Typography>
    <Title>Introduction</Title>
    <Paragraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Paragraph>
    <Paragraph>
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to 
      <Text strong>
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development
      </Text>
      .
    </Paragraph>
    <Title level={2}>Guidelines and Resources</Title>
    <Paragraph>
      We supply a series of design principles, practical patterns and high quality design resources
      (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
      prototypes beautifully and efficiently.
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <a href="/docs/spec/proximity">Principles</a>
        </li>
        <li>
          <a href="/docs/pattern/navigation">Patterns</a>
        </li>
        <li>
          <a href="/docs/resource/download">Resource Download</a>
        </li>
      </ul>
    </Paragraph>

    <Divider />

    <Title>介绍</Title>
    <Paragraph>
      蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
    </Paragraph>
    <Paragraph>
      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
      Ant Design。基于<Text mark>『确定』和『自然』</Text>
      的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
      <Text strong>更好的用户体验</Text>。
    </Paragraph>
    <Title level={2}>设计资源</Title>
    <Paragraph>
      我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
      <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <a href="/docs/spec/proximity">设计原则</a>
        </li>
        <li>
          <a href="/docs/pattern/navigation">设计模式</a>
        </li>
        <li>
          <a href="/docs/resource/download">设计资源</a>
        </li>
      </ul>
    </Paragraph>
  </Typography>,
  mountNode,
);
```

### Title Component

Display title in different level.

```jsx live
const { Title } = Typography;

ReactDOM.render(
  <div>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
  </div>,
  mountNode,
);
```

### Text Component

Provides multiple types of text.

```jsx live
const { Text } = Typography;

ReactDOM.render(
  <div>
    <Text>Ant Design</Text>
    <br />
    <Text type="secondary">Ant Design</Text>
    <br />
    <Text type="warning">Ant Design</Text>
    <br />
    <Text type="danger">Ant Design</Text>
    <br />
    <Text disabled>Ant Design</Text>
    <br />
    <Text mark>Ant Design</Text>
    <br />
    <Text code>Ant Design</Text>
    <br />
    <Text underline>Ant Design</Text>
    <br />
    <Text delete>Ant Design</Text>
    <br />
    <Text strong>Ant Design</Text>
  </div>,
  mountNode,
);
```

### Interactive

Provide additional interactive capacity of editable and copyable.

```jsx live
const { Paragraph } = Typography;

class Demo extends React.Component {
  state = {
    str: 'This is an editable text.',
  };

  onChange = str => {
    console.log('Content change:', str);
    this.setState({ str });
  };

  render() {
    return (
      <div>
        <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Ellipsis

Multiple line ellipsis support.

```jsx live
const { Paragraph } = Typography;

ReactDOM.render(
  <div>
    <Paragraph ellipsis>
      Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.
    </Paragraph>

    <Paragraph ellipsis={{ rows: 3, expandable: true }}>
      Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.
    </Paragraph>
  </div>,
  mountNode,
);
```

## API

### Typography.Text

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false | 3.15.1 |
| copyable | Config copy. Can set copy text and callback when is an object | boolean | { text: string, onCopy: Function } | false | 3.14.0 |
| delete | Deleted line style | boolean | false | 3.14.0 |
| disabled | Disabled content | boolean | false | 3.14.0 |
| editable | Editable. Can control edit state when is object | boolean | { editing: boolean, onStart: Function, onChange: Function(string) } | false | 3.14.0 |
| ellipsis | Display ellipsis when text overflows | boolean | false | 3.14.0 |
| mark | Marked style | boolean | false | 3.14.0 |
| underline | Underlined style | boolean | false | 3.14.0 |
| onChange | Trigger when user edits the content | Function(string) | - | 3.14.0 |
| strong | Bold style | boolean | false | 3.14.0 |
| type | Content type | `secondary`, `warning`, `danger` | - | 3.14.0 |

### Typography.Title

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false | 3.15.1 |
| copyable | Config copy. Can set copy text and callback when is an object | boolean | { text: string, onCopy: Function } | false | 3.14.0 |
| delete | Deleted line style | boolean | false | 3.14.0 |
| disabled | Disabled content | boolean | false | 3.14.0 |
| editable | Editable. Can control edit state when is object | boolean | { editing: boolean, onStart: Function, onChange: Function(string) } | false | 3.14.0 |
| ellipsis | Display ellipsis when text overflows. Can configure rows and expandable by using object | boolean | { rows: number, expandable: boolean, onExpand: Function } | false | 3.14.0 |
| level | Set content importance. Match with `h1`, `h2`, `h3`, `h4` | number: `1`, `2`, `3`, `4` | 1 | 3.14.0 |
| mark | Marked style | boolean | false | 3.14.0 |
| underline | Underlined style | boolean | false | 3.14.0 |
| onChange | Trigger when user edits the content | Function(string) | - | 3.14.0 |
| type | Content type | `secondary`, `warning`, `danger` | - | 3.14.0 |

### Typography.Paragraph

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false | 3.15.1 |
| copyable | Config copy. Can set copy text and callback when is an object | boolean | { text: string, onCopy: Function } | false | 3.14.0 |
| delete | Deleted line style | boolean | false | 3.14.0 |
| disabled | Disabled content | boolean | false | 3.14.0 |
| editable | Editable. Can control edit state when is object | boolean | { editing: boolean, onStart: Function, onChange: Function(string) } | false | 3.14.0 |
| ellipsis | Display ellipsis when text overflows. Can configure rows and expandable by using object | boolean | { rows: number, expandable: boolean, onExpand: Function } | false | 3.14.0 |
| mark | Marked style | boolean | false | 3.14.0 |
| underline | Underlined style | boolean | false | 3.14.0 |
| onChange | Trigger when user edits the content | Function(string) | - | 3.14.0 |
| strong | Bold style | boolean | false | 3.14.0 |
| type | Content type | `secondary`, `warning`, `danger` | - | 3.14.0 |
