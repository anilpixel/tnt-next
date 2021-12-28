---
tags:
  - Components
type: Data Entry
title: Cascader
------

Cascade selection box.

## When To Use

*   When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
*   When selecting from a large data set, with multi-stage classification separated for easy selection.
*   Chooses cascade items in one float layer for better user experience.

## 示例

### Basic

Cascade selection box for selecting province/city/district.

```jsx live
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

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <Cascader options={options} onChange={onChange} placeholder="Please select" />,
  mountNode,
);
```

### Default value

Specifies default value by an array.

```jsx live
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

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <Cascader
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    options={options}
    onChange={onChange}
  />,
  mountNode,
);
```

### Custom trigger

Separate trigger button and result.

```jsx live
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
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
      },
    ],
  },
];

class CitySwitcher extends React.Component {
  state = {
    text: 'Unselect',
  };

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  };

  render() {
    return (
      <span>
        {this.state.text}
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a href="#">Change city</a>
        </Cascader>
      </span>
    );
  }
}

ReactDOM.render(<CitySwitcher />, mountNode);
```

### Hover

Hover to expand sub menu, click to select option.

```jsx live
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

function onChange(value) {
  console.log(value);
}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

ReactDOM.render(
  <Cascader
    options={options}
    expandTrigger="hover"
    displayRender={displayRender}
    onChange={onChange}
  />,
  mountNode,
);
```

### Disabled option

Disable option by specifying the `disabled` property in `options`.

```jsx live
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
    disabled: true,
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

function onChange(value) {
  console.log(value);
}

ReactDOM.render(<Cascader options={options} onChange={onChange} />, mountNode);
```

### Change on select

Allow only select parent options.

```jsx live
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hanzhou',
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

function onChange(value) {
  console.log(value);
}

ReactDOM.render(<Cascader options={options} onChange={onChange} changeOnSelect />, mountNode);
```

### Size

Cascade selection box of different sizes.

```jsx live
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

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <div>
    <Cascader size="large" options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader size="small" options={options} onChange={onChange} />
    <br />
    <br />
  </div>,
  mountNode,
);
```

### Custom render

For instance, add an external link after the selected value.

```jsx live
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
            code: 752100,
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
            code: 453400,
          },
        ],
      },
    ],
  },
];

function handleAreaClick(e, label, option) {
  e.stopPropagation();
  console.log('clicked', label, option);
}

const displayRender = (labels, selectedOptions) =>
  labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
        </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });

ReactDOM.render(
  <Cascader
    options={options}
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    displayRender={displayRender}
    style={{ width: '100%' }}
  />,
  mountNode,
);
```

### Search

Search and select options directly.

```jsx live
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
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
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
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
  return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
}

ReactDOM.render(
  <Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
    showSearch={{ filter }}
  />,
  mountNode,
);
```

### Load Options Lazily

Load options lazily with `loadData`.

```jsx live
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

class LazyOptions extends React.Component {
  state = {
    options,
  };

  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  };

  render() {
    return (
      <Cascader
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}

ReactDOM.render(<LazyOptions />, mountNode);
```

### Custom Field Names

Custom field names.

```jsx live
const options = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <Cascader
    fieldNames={{ label: 'name', value: 'code', children: 'items' }}
    options={options}
    onChange={onChange}
    placeholder="Please select"
  />,
  mountNode,
);
```

### Suffix

Cascade selection box for selecting province/city/district.

```jsx live
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

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <div>
    <Cascader
      suffixIcon={<Icon type="smile" />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <Cascader
      suffixIcon="ab"
      style={{ marginTop: '1rem' }}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  </div>,
  mountNode,
);
```

## API

```jsx
<Cascader options={options} onChange={onChange} />
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | whether allow clear | boolean | true |  |
| autoFocus | get focus when component mounted | boolean | false |  |
| changeOnSelect | change value on each selection if set to true, see above demo for details | boolean | false |  |
| className | additional css class | string | - |  |
| defaultValue | initial selected value | string\[] | \[] |  |
| disabled | whether disabled select | boolean | false |  |
| displayRender | render function of displaying selected options | `(label, selectedOptions) => ReactNode` | `label => label.join(' / ')` |  |
| expandTrigger | expand current item when click or hover, one of 'click' 'hover' | string | 'click' |  |
| fieldNames | custom field name for label and value and children (before 3.7.0 it calls `filedNames` which is typo）) | object | `{ label: 'label', value: 'value', children: 'children' }` | 3.7.0 |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative.[example](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode) | () => document.body |  |
| loadData | To load option lazily, and it cannot work with `showSearch` | `(selectedOptions) => void` | - |  |
| notFoundContent | Specify content to show when no result matches. | string | 'Not Found' |  |
| options | data options of cascade | [Option](#Option)\[] | - |  |
| placeholder | input placeholder | string | 'Please select' |  |
| popupClassName | additional className of popup overlay | string | - |  |
| popupPlacement | use preset popup align config from builtinPlacements：`bottomLeft` `bottomRight` `topLeft` `topRight` | string | `bottomLeft` |  |
| popupVisible | set visible of cascader popup | boolean | - |  |
| showSearch | Whether show search input in single mode. | boolean|object | false |  |
| size | input size, one of `large` `default` `small` | string | `default` |  |
| style | additional style | string | - |  |
| suffixIcon | The custom suffix icon | ReactNode | - | 3.10.0 |
| value | selected value | string\[] | - |  |
| onChange | callback when finishing cascader select | `(value, selectedOptions) => void` | - |  |
| onPopupVisibleChange | callback when popup shown or hidden | `(value) => void` | - |  |

Fields in `showSearch`:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| filter | The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded. | `function(inputValue, path): boolean` |  |  |
| limit | Set the count of filtered items | number | false | 50 | 3.11.0 |
| matchInputWidth | Whether the width of result list equals to input's | boolean |  |  |
| render | Used to render filtered options. | `function(inputValue, path): ReactNode` |  |  |
| sort | Used to sort filtered options. | `function(a, b, inputValue)` |  |  |

### Option

```typescript
interface Option {
  value: string;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
}
```

## Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |
