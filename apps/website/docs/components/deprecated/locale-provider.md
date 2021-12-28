---
tags:
  - Components
subtitle: 国际化（废弃）
cols: 1
type: 废弃
title: LocaleProvider 国际化（废弃）
------------

国际化组件。已废弃，请使用 [ConfigProvider](/components/config-provider) 代替。

## 使用

LocaleProvider 使用 React 的 [context](https://facebook.github.io/react/docs/context.html) 特性，只需在应用外围包裹一次即可全局生效。

```jsx
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
...

return <LocaleProvider locale={zh_CN}><App /></LocaleProvider>;
```

我们提供了英语，中文，俄语，法语，德语等多种语言支持，所有语言包可以在 [这里](https://github.com/ant-design/ant-design/blob/master/components/locale-provider/) 找到。

注意：如果你需要使用 UMD 版的 dist 文件，应该引入 `antd/dist/antd-with-locales.js`，同时引入 moment 对应的 locale，然后按以下方式使用：

```jsx
const { LocaleProvider, locales } = window.antd;

...

return <LocaleProvider locale={locales.en_US}><App /></LocaleProvider>;
```

### 增加语言包

如果你找不到你需要的语言包，欢迎你在 [英文语言包](https://github.com/ant-design/ant-design/blob/master/components/locale-provider/en_US.tsx) 的基础上创建一个新的语言包，并给我们 Pull Request。

### 其他国际化需求

本模块仅用于组件的内建文案，若有业务文案的国际化需求，建议使用 [react-intl](https://github.com/yahoo/react-intl)，可参考示例：[Intl demo 1](http://github.com/ant-design/intl-example) 和 [Intl demo 2](http://yiminghe.me/learning-react/examples/react-intl.html?locale=en-US)。

## 示例

### 国际化

用 `LocaleProvider` 包裹你的应用，并引用对应的语言包。

```jsx live
const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  mountNode,
);
```

### 所有组件

此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。

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
      locale: null,
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
          <Radio.Group defaultValue={undefined} onChange={this.changeLocale}>
            <Radio.Button key="en" value={undefined}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <LocaleProvider locale={locale}>
          <Page
            key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}
          />
        </LocaleProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| locale | 语言包配置，语言包可到 [antd/es/locale-provider](http://unpkg.com/antd/es/locale-provider/) 目录下寻找 | object | - |  |

## FAQ

#### 为什么我使用了 LocaleProvider 还有问题？

请检查是否设置了 `moment.locale('zh-cn')`，或者是否有两个版本的 moment 共存。
