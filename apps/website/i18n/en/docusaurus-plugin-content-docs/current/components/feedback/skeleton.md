---
tags:
  - Components
type: Feedback
title: Skeleton
cols: 1
-------

Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet.

## When To Use

*   When a resource needs long time to load.
*   When the component contains lots of information, such as List or Card.
*   Only works when loading data for the first time.
*   Could be replaced by Spin in any situation, but can provide a better user experience.

## 示例

### Basic

Simplest Skeleton usage.

```jsx live
ReactDOM.render(<Skeleton />, mountNode);
```

### Complex combination

Complex combination with avatar and multiple paragraphs.

```jsx live
ReactDOM.render(<Skeleton avatar paragraph={{ rows: 4 }} />, mountNode);
```

### Active Animation

Display active animation.

```jsx live
ReactDOM.render(<Skeleton active />, mountNode);
```

### Contains sub component

Skeleton contains sub component.

```jsx live
class Demo extends React.Component {
  state = {
    loading: false,
  };

  showSkeleton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    return (
      <div className="article">
        <Skeleton loading={this.state.loading}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes
              beautifully and efficiently.
            </p>
          </div>
        </Skeleton>
        <Button onClick={this.showSkeleton} disabled={this.state.loading}>
          Show Skeleton
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### List

Use skeleton in list component.

```jsx live
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class App extends React.Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Switch checked={!loading} onChange={this.onChange} />

        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                !loading && [
                  <IconText type="star-o" text="156" key="skeleton-star-o" />,
                  <IconText type="like-o" text="156" key="skeleton-like-o" />,
                  <IconText type="message" text="2" key="skeleton-message" />,
                ]
              }
              extra={
                !loading && (
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }
            >
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## API

### Skeleton

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| active | Show animation effect | boolean | false | 3.9.0 |
| avatar | Show avatar placeholder | boolean | [SkeletonAvatarProps](#SkeletonAvatarProps) | false | 3.9.0 |
| loading | Display the skeleton when `true` | boolean | - | 3.9.0 |
| paragraph | Show paragraph placeholder | boolean | [SkeletonParagraphProps](#SkeletonParagraphProps) | true | 3.9.0 |
| title | Show title placeholder | boolean | [SkeletonTitleProps](#SkeletonTitleProps) | true | 3.9.0 |

### SkeletonAvatarProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| size | Set the size of avatar | number | Enum{ 'large', 'small', 'default' } | - | 3.9.0 |
| shape | Set the shape of avatar | Enum{ 'circle', 'square' } | - | 3.9.0 |

### SkeletonTitleProps

| Property | Description            | Type             | Default | Version |
| -------- | ------------- | ---------------- | ------- | ------- |
| width    | Set the width of title | number | string | -       | 3.9.0   |

### SkeletonParagraphProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| rows | Set the row count of paragraph | number | - | 3.9.0 |
| width | Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width | number | string | Array\<number | string> | - | 3.9.0 |
