---

tags:
  - Components
type: Data Display
title: Empty
cols: 1

-----

Empty state placeholder.

## When To Use

- When there is no data provided, display for friendly tips.
- User tutorial to create something in fresh new situation.

## 示例

### Basic

Simplest Usage.

```jsx live
ReactDOM.render(<Empty />, mountNode);
```

### Chose image

You can choose another style of `image` by setting image to `Empty.PRESENTED\_IMAGE\_SIMPLE`.

```jsx live
ReactDOM.render(
  <Empty image={Illustration.PRESENTED_IMAGE_SIMPLE} />,
  mountNode
);
```

### Customize

Customize image source, image size, description and extra content.

```jsx live
ReactDOM.render(
  <Empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>,
  mountNode
);
```

### ConfigProvider

Use ConfigProvider set global Empty style.

```jsx live
const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <Icon type="smile" style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
);

const style = { width: 200 };

class Demo extends React.Component {
  state = {
    customize: false,
  };

  render() {
    const { customize } = this.state;
    return (
      <div>
        <Switch
          unCheckedChildren="default"
          checkedChildren="customize"
          checked={customize}
          onChange={(val) => {
            this.setState({ customize: val });
          }}
        />

        <Divider />

        <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
          <div className="config-provider">
            <h3>Select</h3>
            <Select style={style} />

            <h3>TreeSelect</h3>
            <TreeSelect style={style} treeData={[]} />

            <h3>Cascader</h3>
            <Cascader style={style} options={[]} showSearch />

            <h3>Transfer</h3>
            <Transfer />

            <h3>Table</h3>
            <Table
              style={{ marginTop: 8 }}
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                  key: 'age',
                },
              ]}
            />

            <h3>List</h3>
            <List />
          </div>
        </ConfigProvider>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### No description

Simplest Usage with no description.

```jsx live
ReactDOM.render(<Empty description={false} />, mountNode);
```

## API

```jsx
<Empty>
  <Button>Create</Button>
</Empty>
```

| Property    | Description                                                    | Type          | Default   | Version                         |
| ----------- | -------------------------------------------------------------- | ------------- | --------- | ------------------------------- | ------ |
| description | Customize description                                          | string        | ReactNode | -                               | 3.12.0 |
| imageStyle  | style of image                                                 | CSSProperties | -         | 3.16.0                          |
| image       | Customize image. Will tread as image url when string provided. | string        | ReactNode | `Empty.PRESENTED_IMAGE_DEFAULT` | 3.12.0 |

## Built-in images

- Empty.PRESENTED_IMAGE_SIMPLE

  <img src="https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png" height="35px"/>

- Empty.PRESENTED_IMAGE_DEFAULT

  <img src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" height="100px"/>
