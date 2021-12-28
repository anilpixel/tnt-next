---
tags:
  - Components
type: Data Entry
title: Upload
------

Upload file by selecting or dragging.

## When To Use

Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

*   When you need to upload one or more files.
*   When you need to show the process of uploading.
*   When you need to upload files by dragging and dropping.

## 示例

### Upload by clicking

Classic mode. File selection dialog pops up when upload button is clicked.

```jsx live
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

ReactDOM.render(
  <Upload {...props}>
    <Button>
      <Icon type="upload" /> Click to Upload
    </Button>
  </Upload>,
  mountNode,
);
```

### Avatar

Click to upload user's avatar, and validate size and format of picture with `beforeUpload`.

```jsx live
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}

ReactDOM.render(<Avatar />, mountNode);```

### Default Files

Use `defaultFileList` for uploaded files when page init.

```jsx live
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};

ReactDOM.render(
  <Upload {...props}>
    <Button>
      <Icon type="upload" /> Upload
    </Button>
  </Upload>,
  mountNode,
);
```

### Pictures Wall

After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.

```jsx live
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'error',
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<PicturesWall />, mountNode);
```

### Complete control over file list

You can gain full control over filelist by configuring `fileList`. You can accomplish all kinds of customed functions. The following shows three circumstances:

```jsx live
class MyUpload extends React.Component {
  state = {
    fileList: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
    ],
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  render() {
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
    );
  }
}

ReactDOM.render(<MyUpload />, mountNode);
```

### Drag and Drop

You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.

```jsx live
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

ReactDOM.render(
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>,
  mountNode,
);
```

### Upload directory

You can select and upload a whole directory.

```jsx live
ReactDOM.render(
  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <Button>
      <Icon type="upload" /> Upload Directory
    </Button>
  </Upload>,
  mountNode,
);
```

### Upload manually

Upload files manually after `beforeUpload` returns `false`.

```jsx live

class Demo extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    axios({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData
    }).then(() => {
      this.setState({
        fileList: [],
        uploading: false,
      });
      message.success('upload successfully.');
    }).catch(() => {
      this.setState({
        uploading: false,
      });
      message.error('upload failed.');
    });;
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

### Pictures with list style

If uploaded file is a picture, the thumbnail can be shown. `IE8/9` do not support local thumbnail show. Please use `thumbUrl` instead.

```jsx live
const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
];

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};

ReactDOM.render(
  <div>
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
    <br />
    <br />
    <Upload {...props2}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
  </div>,
  mountNode,
);
```

### Customize preview file

Customize local preview. Can handle with non-image format files such as video.

```jsx live
const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

ReactDOM.render(
  <div>
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
  </div>,
  mountNode,
);
```

### Transform file before request

Use `transformFile` for transform file before request such as add a watermark.

```jsx live
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  transformFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const canvas = document.createElement('canvas');
        const img = document.createElement('img');
        img.src = reader.result;
        img.onload = () => {
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(resolve);
        };
      };
    });
  },
};

ReactDOM.render(
  <div>
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
  </div>,
  mountNode,
);
```

### Aliyun OSS

Use Aliyun OSS upload example.

```jsx live
class AliyunOSSUpload extends React.Component {
  state = {
    OSSData: {},
  };

  async componentDidMount() {
    await this.init();
  }

  init = async () => {
    try {
      const OSSData = await this.mockGetOSSData();

      this.setState({
        OSSData,
      });
    } catch (error) {
      message.error(error);
    }
  };

  // Mock get OSS api
  // https://help.aliyun.com/document_detail/31988.html
  mockGetOSSData = () => {
    return {
      dir: 'user-dir/',
      expire: '1577811661',
      host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
      accessId: 'c2hhb2RhaG9uZw==',
      policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
      signature: 'ZGFob25nc2hhbw==',
    };
  };

  onChange = ({ fileList }) => {
    const { onChange } = this.props;
    console.log('Aliyun OSS:', fileList);
    if (onChange) {
      onChange([...fileList]);
    }
  };

  onRemove = file => {
    const { value, onChange } = this.props;

    const files = value.filter(v => v.url !== file.url);

    if (onChange) {
      onChange(files);
    }
  };

  transformFile = file => {
    const { OSSData } = this.state;

    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    file.url = OSSData.dir + filename;

    return file;
  };

  getExtraData = file => {
    const { OSSData } = this.state;

    return {
      key: file.url,
      OSSAccessKeyId: OSSData.accessId,
      policy: OSSData.policy,
      Signature: OSSData.signature,
    };
  };

  beforeUpload = async () => {
    const { OSSData } = this.state;
    const expire = OSSData.expire * 1000;

    if (expire < Date.now()) {
      await this.init();
    }
    return true;
  };

  render() {
    const { value } = this.props;
    const props = {
      name: 'file',
      fileList: value,
      action: this.state.OSSData.host,
      onChange: this.onChange,
      onRemove: this.onRemove,
      transformFile: this.transformFile,
      data: this.getExtraData,
      beforeUpload: this.beforeUpload,
    };
    return (
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
    );
  }
}

class FormPage extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} labelCol={{ span: 4 }}>
        <Form.Item label="Photos">{getFieldDecorator('photos')(<AliyunOSSUpload />)}</Form.Item>
      </Form>
    );
  }
}

const WrappedFormPage = Form.create()(FormPage);

ReactDOM.render(<WrappedFormPage />, mountNode);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| accept | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |  |
| action | Uploading URL | string|(file) => `Promise` | - |  |
| method | http method of upload request | string | 'post' | 3.25.0 |
| directory | support upload whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory)) | boolean | false | 3.7.0 |
| beforeUpload | Hook function which will be executed before uploading. Uploading will be stopped with `false` or a rejected Promise returned. **Warning：this function is not supported in IE9**。 | (file, fileList) => `boolean | Promise` | - |  |
| customRequest | override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest | Function | - |  |
| data | Uploading extra params or function which can return uploading extra params. | object|function(file) | - |  |
| defaultFileList | Default list of files that have been uploaded. | object\[] | - |  |
| disabled | disable upload button | boolean | false |  |
| fileList | List of files that have been uploaded (controlled). Here is a common issue [#2423](https://github.com/ant-design/ant-design/issues/2423) when using it | object\[] | - |  |
| headers | Set request headers, valid above IE10. | object | - |  |
| listType | Built-in stylesheets, support for three types: `text`, `picture` or `picture-card` | string | 'text' |  |
| multiple | Whether to support selected multiple file. `IE10+` supported. You can select multiple files with CTRL holding down while multiple is set to be true | boolean | false |  |
| name | The name of uploading file | string | 'file' |  |
| previewFile | Customize preview file logic | (file: File | Blob) => Promise\<dataURL: string> | - | 3.17.0 |
| showUploadList | Whether to show default upload list, could be an object to specify `showPreviewIcon`, `showRemoveIcon` and `showDownloadIcon` individually | Boolean or { showPreviewIcon?: boolean, showDownloadIcon?: boolean, showRemoveIcon?: boolean } | true |  |
| supportServerRender | Need to be turned on while the server side is rendering | boolean | false |  |
| withCredentials | ajax upload with cookie sent | boolean | false |  |
| openFileDialogOnClick | click open file dialog | boolean | true | 3.10.0 |
| onChange | A callback function, can be executed when uploading state is changing, see [onChange](#onChange) | Function | - |  |
| onPreview | A callback function, will be executed when file link or preview icon is clicked | Function(file) | - |  |
| onRemove | A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is `false` or a Promise which resolve(false) or reject | Function(file): `boolean | Promise` | - |  |
| onDownload | Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB. | Function(file): void | Jump to new TAB |  |
| transformFile   | Customize transform file before request | Function(file): `string | Blob | File | Promise<string | Blob | File>` | - | 3.21.0 |

### onChange

> The function will be called when uploading is in progress, completed or failed.

When uploading state change, it returns:

```js
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1.  `file` File object for the current operation.

    ```js
    {
       uid: 'uid',      // unique identifier, negative is recommend, to prevent interference with internal generated id
       name: 'xx.png',   // file name
       status: 'done', // options：uploading, done, error, removed
       response: '{"status": "success"}', // response from server
       linkProps: '{"download": "image"}', // additional html props of file link
       xhr: 'XMLHttpRequest{ ... }', // XMLHttpRequest Header
    }
    ```

2.  `fileList` current list of files

3.  `event` response from server, including uploading progress, supported by advanced browsers.

## FAQ

### How to implement upload server side?

*   You can consult [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki#server-side) about how to implement server side upload interface.
*   There is a mock example of [express](https://github.com/react-component/upload/blob/master/server.js) in rc-upload.

### I want to display download links.

Please set property `url` of each item in `fileList` to control content of link.

### How to use `customRequest`?

See <https://github.com/react-component/upload#customrequest>.

### IE8/9 Note

See <https://github.com/react-component/upload#ie89-note>.
