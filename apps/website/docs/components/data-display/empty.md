---
tags:
  - Components
subtitle: 空状态
type: 数据展示
title: Empty 空状态
cols: 1
---

空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 示例

### 基本

简单的展示。

```jsx live
ReactDOM.render(<Empty />, mountNode);
```

### 选择图片

可以通过设置 `image` 为 `Empty.PRESENTED\_IMAGE\_SIMPLE` 选择另一种风格的图片。

```jsx live
ReactDOM.render(
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />,
  mountNode
);
```

### 自定义

自定义图片链接、图片大小、描述、附属内容。

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

### 全局化配置

自定义全局组件的 Empty 样式。

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

### 无描述

无描述展示。

```jsx live
ReactDOM.render(<Empty description={false} />, mountNode);
```

## API

```jsx
<Empty>
  <Button>创建</Button>
</Empty>
```

| 参数        | 说明                                           | 类型          | 默认值    | 版本                            |
| ----------- | ---------------------------------------------- | ------------- | --------- | ------------------------------- | ------ |
| description | 自定义描述内容                                 | string        | ReactNode | -                               | 3.12.0 |
| imageStyle  | 图片样式                                       | CSSProperties | -         | 3.16.0                          |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | string        | ReactNode | `Empty.PRESENTED_IMAGE_DEFAULT` | 3.12.0 |

## 内置图片 (3.16.0 以上版本)

- Empty.PRESENTED_IMAGE_SIMPLE

  <img src="https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png" height="35px"/>

- Empty.PRESENTED_IMAGE_DEFAULT

  <img src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" height="100px"/>
