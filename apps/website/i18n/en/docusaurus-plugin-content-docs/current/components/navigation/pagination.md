---
tags:
  - Components
type: Navigation
title: Pagination
-------

A long list can be divided into several pages using `Pagination`, and only one page will be loaded at a time.

## When To Use

*   When it will take a long time to load/render all items.
*   If you want to browse the data by navigating through pages.

## 示例

### Basic

Basic pagination.

```jsx live
ReactDOM.render(<Pagination defaultCurrent={1} total={50} />, mountNode);
```

### More

More pages.

```jsx live
ReactDOM.render(<Pagination defaultCurrent={6} total={500} />, mountNode);
```

### Changer

Change \`pageSize\`.

```jsx live
function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

ReactDOM.render(
  <div>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </div>,
  mountNode,
);
```

### Jumper

Jump to a page directly.

```jsx live
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

ReactDOM.render(
  <div>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
  </div>,
  mountNode,
);
```

### Mini size

Mini size pagination.

```jsx live
function showTotal(total) {
  return `Total ${total} items`;
}

ReactDOM.render(
  <div>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
  </div>,
  mountNode,
);
```

### Simple mode

Simple mode.

```jsx live
ReactDOM.render(<Pagination simple defaultCurrent={2} total={50} />, mountNode);
```

### Controlled

Controlled page number.

```jsx live
class App extends React.Component {
  state = {
    current: 3,
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return <Pagination current={this.state.current} onChange={this.onChange} total={50} />;
  }
}

ReactDOM.render(<App />, mountNode);
```

### Total number

You can show the total number of data by setting \`showTotal\`.

```jsx live
ReactDOM.render(
  <div>
    <Pagination
      total={85}
      showTotal={total => `Total ${total} items`}
      pageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      pageSize={20}
      defaultCurrent={1}
    />
  </div>,
  mountNode,
);
```

### Prev and next

Use text link for prev and next button.

```jsx live
function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

ReactDOM.render(<Pagination total={500} itemRender={itemRender} />, mountNode);
```

## API

```html
<Pagination onChange="{onChange}" total="{50}" />
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| current | Current page number | number | - |  |
| defaultCurrent | Default initial page number | number | 1 |  |
| defaultPageSize | Default number of data items per page | number | 10 |  |
| disabled | Disable pagination | boolean | - | 3.18.0 |
| hideOnSinglePage | Whether to hide pager on single page | boolean | false | 3.1.0 |
| itemRender | To customize item's innerHTML | (page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode | - |  |
| pageSize | Number of data items per page | number | - |  |
| pageSizeOptions | Specify the sizeChanger options | string\[] | \['10', '20', '30', '40'] |  |
| showLessItems | Show less page items | boolean | false | 3.16.3 |
| showQuickJumper | Determine whether you can jump to pages directly | boolean | `{ goButton: ReactNode }` | false |  |
| showSizeChanger | Determine whether `pageSize` can be changed | boolean | false |  |
| showTitle | Show page item's title | boolean | true |  |
| showTotal | To display the total number and range | Function(total, range) | - |  |
| simple | Whether to use simple mode | boolean | - |  |
| size | Specify the size of `Pagination`, can be set to `small` | string | "" |  |
| total | Total number of data items | number | 0 |  |
| onChange | Called when the page number is changed, and it takes the resulting page number and pageSize as its arguments | Function(page, pageSize) | noop |  |
| onShowSizeChange | Called when `pageSize` is changed | Function(current, size) | noop |  |
