---

type: 反馈
tags:
  - Components
subtitle: 对话框
title: Modal 对话框
------

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 `Modal.confirm()` 等语法糖方法。

## 示例

### 基本

第一个对话框。

```jsx live
class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 异步关闭

点击确定后异步关闭对话框，例如提交表单。

```jsx live
class App extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with async logic
        </Button>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 自定义页脚

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

```jsx live
class App extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 确认对话框

使用 `confirm()` 可以快捷地弹出确认框。

```jsx live
const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showPropsConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

ReactDOM.render(
  <div>
    <Button onClick={showConfirm}>Confirm</Button>
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
    <Button onClick={showPropsConfirm} type="dashed">
      With extra props
    </Button>
  </div>,
  mountNode,
);
```

### 确认对话框

使用 `confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。

```jsx live
const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

ReactDOM.render(<Button onClick={showConfirm}>Confirm</Button>, mountNode);
```

### 信息提示

各种类型的信息提示，只提供一个按钮用于关闭。

```jsx live
function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

ReactDOM.render(
  <div>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </div>,
  mountNode,
);
```

### 国际化

设置 `okText` 与 `cancelText` 以自定义按钮文字。

```jsx live
class LocalizedModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

ReactDOM.render(
  <div>
    <LocalizedModal />
    <br />
    <Button onClick={confirm}>Confirm</Button>
  </div>,
  mountNode,
);
```

### 手动更新和移除

手动更新和关闭 `Modal.method` 方式创建的对话框。

```jsx live
function countDown() {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

ReactDOM.render(<Button onClick={countDown}>Open modal to close in 5s</Button>, mountNode);
```

### 自定义位置

使用 `centered` 或类似 `style.top` 的样式来设置对话框位置。

```jsx live
class App extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>
          Display a modal dialog at 20px to Top
        </Button>
        <Modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <br />
        <br />
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>
          Vertically centered modal dialog
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 销毁确认对话框

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。

```jsx live
function destroyAll() {
  Modal.destroyAll();
}

const { confirm } = Modal;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
}

ReactDOM.render(
  <div>
    <Button onClick={showConfirm}>Confirm</Button>
  </div>,
  mountNode,
);
```

### 自定义页脚按钮属性

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。

```jsx live
class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized button props
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | 无 |  |
| bodyStyle | Modal body 样式 | object | {} |  |
| cancelText | 取消按钮文字 | string|ReactNode | 取消 |  |
| centered | 垂直居中展示 Modal | Boolean | `false` | 3.8.0 |
| closable | 是否显示右上角的关闭按钮 | boolean | true |  |
| closeIcon | 自定义关闭图标 | ReactNode | - | 3.22.0 |
| confirmLoading | 确定按钮 loading | boolean | 无 |  |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false | 3.1.0 |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | string|ReactNode | 确定取消按钮 |  |
| forceRender | 强制渲染 Modal | boolean | false | 3.12.0 |
| getContainer | 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom | HTMLElement | `() => HTMLElement` | Selectors | false | document.body | 3.20.2 |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true | 3.4.2 |
| mask | 是否展示遮罩 | Boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| maskStyle | 遮罩样式 | object | {} |  |
| okText | 确认按钮文字 | string|ReactNode | 确定 |  |
| okType | 确认按钮类型 | string | primary |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button) | - | 3.7.0 |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button) | - | 3.7.0 |
| style | 可用于设置浮层的样式，调整浮层位置等 | object | - |  |
| title | 标题 | string|ReactNode | 无 |  |
| visible | 对话框是否可见 | boolean | 无 |  |
| width | 宽度 | string|number | 520 |  |
| wrapClassName | 对话框外层容器的类名 | string | - |  |
| zIndex | 设置 Modal 的 `z-index` | Number | 1000 |  |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | 无 |  |
| onOk | 点击确定回调 | function(e) | 无 |  |

#### 注意

> `<Modal />` 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 `destroyOnClose`。

### Modal.method()

包括：

*   `Modal.info`
*   `Modal.success`
*   `Modal.error`
*   `Modal.warning`
*   `Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocusButton | 指定自动获得焦点的按钮 | null|string: `ok` `cancel` | `ok` | 3.10.0 |
| cancelText | 设置 Modal.confirm 取消按钮文字 | string | 取消 |  |
| centered | 垂直居中展示 Modal | Boolean | `false` | 3.8.2 |
| className | 容器类名 | string | - | 3.1.1 |
| content | 内容 | string|ReactNode | 无 |  |
| icon | 自定义图标（3.12.0 新增） | string|ReactNode | `<Icon type="question-circle" />` | 3.12.0 |
| iconType | 图标类型（3.12.0 后废弃，请使用 `icon`） | string | `question-circle` |  |
| mask | 是否展示遮罩 | Boolean | true | 3.13.0 |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | `false` |  |
| okText | 确认按钮文字 | string | 确定 |  |
| okType | 确认按钮类型 | string | primary |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button) | - | 3.10.0 |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button) | - | 3.10.0 |
| title | 标题 | string|ReactNode | 无 |  |
| width | 宽度 | string|number | 416 |  |
| zIndex | 设置 Modal 的 `z-index` | Number | 1000 |  |
| onCancel | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function | 无 |  |
| onOk | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function | 无 |  |

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。

```jsx
const modal = Modal.info();

modal.update({
  title: '修改的标题',
  content: '修改的内容',
});

modal.destroy();
```

*   `Modal.destroyAll`

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗（即上述的 Modal.info、Modal.success、Modal.error、Modal.warning、Modal.confirm）。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题，而不用各处去使用实例的返回值进行关闭（modal.destroy() 适用于主动关闭，而不是路由这样被动关闭）

```jsx
import { browserHistory } from 'react-router';

// router change
browserHistory.listen(() => {
  Modal.destroyAll();
});
```
