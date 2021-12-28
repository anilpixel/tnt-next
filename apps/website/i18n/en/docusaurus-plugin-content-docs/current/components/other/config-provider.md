---
tags:
  - Components
type: Other
cols: 1
title: ConfigProvider
------

`ConfigProvider` provides a uniform configuration support for components.

## Usage

This component provides a configuration to all React components underneath itself via the [context API](https://facebook.github.io/react/docs/context.html). In the render tree all components will have access to the provided config.

```jsx
import { ConfigProvider } from 'antd';

// ...

return (
  <ConfigProvider {...yourConfig}>
    <App />
  </ConfigProvider>
);
```

### Content Security Policy

Some components use dynamic style to support wave effect. You can config `csp` prop if Content Security Policy (CSP) is enabled:

```jsx
<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <Button>My Button</Button>
</ConfigProvider>
```

## 示例

### Locale

Components which need localization support are listed here, you can toggle the language in the demo.

```jsx live
const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

class Page extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return (
      <div className="locale-components">
        <div className="example">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
        <div className="example">
          <Select showSearch style={{ width: 200 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
          </Select>
          <DatePicker />
          <TimePicker />
          <RangePicker style={{ width: 200 }} />
        </div>
        <div className="example">
          <Button type="primary" onClick={this.showModal}>
            Show Modal
          </Button>
          <Button onClick={info}>Show info</Button>
          <Button onClick={confirm}>Show confirm</Button>
          <Popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </Popconfirm>
        </div>
        <div className="example">
          <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
        </div>
        <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} value={moment()} />
        </div>
        <div className="example">
          <Table dataSource={[]} columns={columns} />
        </div>
        <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
          <p>Locale Modal</p>
        </Modal>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: enUS,
    };
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('zh-cn');
    }
  };

  render() {
    const { locale } = this.state;
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group value={locale} onChange={this.changeLocale}>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <ConfigProvider locale={locale}>
          <Page
            key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}
          />
        </ConfigProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoInsertSpaceInButton | Set `false` to remove space between 2 chinese characters on Button | boolean | true | 3.13.0 |
| csp | Set [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) config | { nonce: string } | - | 3.13.1 |
| renderEmpty | set empty content of components. Ref [Empty](/components/empty/) | Function(componentName: string): ReactNode | - | 3.12.2 |
| getPopupContainer | to set the container of the popup element. The default is to create a `div` element in `body`. | Function(triggerNode) | `() => document.body` | 3.11.0 |
| locale | language package setting, you can find the packages in [antd/es/locale](http://unpkg.com/antd/es/locale/) | object | 3.21.0 |
| prefixCls | set prefix class | string | ant | 3.12.0 |
| pageHeader | Unify the ghost of pageHeader ,Ref \[pageHeader]\(<(/components/page-header)> | { ghost:boolean } | 'true' | 3.24.0 |

## FAQ

#### Does the locale problem still exist in DatePicker even if ConfigProvider `locale` is used?

Please make sure you set moment locale by `moment.locale('zh-cn')` or that you don't have two different versions of moment.

#### Modal throw error when setting `getPopupContainer`?

Related issue: https://github.com/ant-design/ant-design/issues/19974

When you config `getPopupContainer` to parentNode globally, Modal will throw error of `triggerNode is undefined` because it did not have a triggerNode. You can try the [fix](https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a) below.

```diff
 <ConfigProvider
-  getPopupContainer={triggerNode => triggerNode.parentNode}
+  getPopupContainer={node => {
+    if (node) {
+      return node.parentNode;
+    }
+    return document.body;
+  }}
 >
   <App />
 </ConfigProvider>
```
