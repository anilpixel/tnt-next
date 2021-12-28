---
tags:
  - Components
type: General
title: Icon
toc: false
------

Semantic vector graphics.

## List of icons

```__react
import IconDisplay from 'site/theme/template/IconDisplay';
ReactDOM.render(<IconDisplay />, mountNode);
```

## 示例

### Basic

Use tag `\<Icon />` to create an icon and set its type in the `type` prop. Specify the `spin` property to show spinning animation and the `theme` property to switch between different themes.

```jsx live
ReactDOM.render(
  <div className="icons-list">
    <Icon type="home" />
    <Icon type="setting" theme="filled" />
    <Icon type="smile" theme="outlined" />
    <Icon type="sync" spin />
    <Icon type="smile" rotate={180} />
    <Icon type="loading" />
  </div>,
  mountNode,
);
```

### Two-tone icon and colorful icon

Specify the property `theme` to `twoTone` to render two-tone icons. You can also set the primary color.

```jsx live
ReactDOM.render(
  <div className="icons-list">
    <Icon type="smile" theme="twoTone" />
    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  </div>,
  mountNode,
);
```

### Custom Icon

Create a reusable React component by using `\<Icon component={...} />`. The property `component` takes a React component that renders to `svg` element.

```jsx live
.custom-icons-list > .anticon {
  margin-right: 6px;
}
```

### Use iconfont.cn

If you are using \[iconfont.cn]\(http://iconfont.cn/), you can use the icons in your project gracefully.

```jsx live
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

ReactDOM.render(
  <div className="icons-list">
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </div>,
  mountNode,
);
```

### Test old icons

Test old icons before `3.9.0`.

```jsx live
const icons = [
  'step-backward',
  'step-forward',
  'fast-backward',
  'fast-forward',
  'shrink',
  'arrows-alt',
  'down',
  'up',
  'left',
  'right',
  'caret-up',
  'caret-down',
  'caret-left',
  'caret-right',
  'up-circle',
  'down-circle',
  'left-circle',
  'right-circle',
  'up-circle-o',
  'down-circle-o',
  'right-circle-o',
  'left-circle-o',
  'double-right',
  'double-left',
  'verticle-left',
  'verticle-right',
  'forward',
  'backward',
  'rollback',
  'enter',
  'retweet',
  'swap',
  'swap-left',
  'swap-right',
  'arrow-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'play-circle',
  'play-circle-o',
  'up-square',
  'down-square',
  'left-square',
  'right-square',
  'up-square-o',
  'down-square-o',
  'left-square-o',
  'right-square-o',
  'login',
  'logout',
  'menu-fold',
  'menu-unfold',
  'question',
  'question-circle-o',
  'question-circle',
  'plus',
  'plus-circle-o',
  'plus-circle',
  'pause',
  'pause-circle-o',
  'pause-circle',
  'minus',
  'minus-circle-o',
  'minus-circle',
  'plus-square',
  'plus-square-o',
  'minus-square',
  'minus-square-o',
  'info',
  'info-circle-o',
  'info-circle',
  'exclamation',
  'exclamation-circle-o',
  'exclamation-circle',
  'close',
  'cross',
  'close-circle',
  'close-circle-o',
  'close-square',
  'close-square-o',
  'check',
  'check-circle',
  'check-circle-o',
  'check-square',
  'check-square-o',
  'clock-circle-o',
  'clock-circle',
  'warning',
  'lock',
  'unlock',
  'area-chart',
  'pie-chart',
  'bar-chart',
  'dot-chart',
  'bars',
  'book',
  'calendar',
  'cloud',
  'cloud-download',
  'code',
  'code-o',
  'copy',
  'credit-card',
  'delete',
  'desktop',
  'download',
  'edit',
  'ellipsis',
  'file',
  'file-text',
  'file-unknown',
  'file-pdf',
  'file-word',
  'file-excel',
  'file-jpg',
  'file-ppt',
  'file-markdown',
  'file-add',
  'folder',
  'folder-open',
  'folder-add',
  'hdd',
  'frown',
  'frown-o',
  'meh',
  'meh-o',
  'smile',
  'smile-o',
  'inbox',
  'laptop',
  'appstore-o',
  'appstore',
  'line-chart',
  'link',
  'mail',
  'mobile',
  'notification',
  'paper-clip',
  'picture',
  'poweroff',
  'reload',
  'search',
  'setting',
  'share-alt',
  'shopping-cart',
  'tablet',
  'tag',
  'tag-o',
  'tags',
  'tags-o',
  'to-top',
  'upload',
  'user',
  'video-camera',
  'home',
  'loading',
  'loading-3-quarters',
  'cloud-upload-o',
  'cloud-download-o',
  'cloud-upload',
  'cloud-o',
  'star-o',
  'star',
  'heart-o',
  'heart',
  'environment',
  'environment-o',
  'eye',
  'eye-o',
  'camera',
  'camera-o',
  'save',
  'team',
  'solution',
  'phone',
  'filter',
  'exception',
  'export',
  'customer-service',
  'qrcode',
  'scan',
  'like',
  'like-o',
  'dislike',
  'dislike-o',
  'message',
  'pay-circle',
  'pay-circle-o',
  'calculator',
  'pushpin',
  'pushpin-o',
  'bulb',
  'select',
  'switcher',
  'rocket',
  'bell',
  'disconnect',
  'database',
  'compass',
  'barcode',
  'hourglass',
  'key',
  'flag',
  'layout',
  'printer',
  'sound',
  'usb',
  'skin',
  'tool',
  'sync',
  'wifi',
  'car',
  'schedule',
  'user-add',
  'user-delete',
  'usergroup-add',
  'usergroup-delete',
  'man',
  'woman',
  'shop',
  'gift',
  'idcard',
  'medicine-box',
  'red-envelope',
  'coffee',
  'copyright',
  'trademark',
  'safety',
  'wallet',
  'bank',
  'trophy',
  'contacts',
  'global',
  'shake',
  'api',
  'fork',
  'dashboard',
  'form',
  'table',
  'profile',
  'android',
  'android-o',
  'apple',
  'apple-o',
  'windows',
  'windows-o',
  'ie',
  'chrome',
  'github',
  'aliwangwang',
  'aliwangwang-o',
  'dingding',
  'dingding-o',
  'weibo-square',
  'weibo-circle',
  'taobao-circle',
  'html5',
  'weibo',
  'twitter',
  'wechat',
  'youtube',
  'alipay-circle',
  'taobao',
  'skype',
  'qq',
  'medium-workmark',
  'gitlab',
  'medium',
  'linkedin',
  'google-plus',
  'dropbox',
  'facebook',
  'codepen',
  'amazon',
  'google',
  'codepen-circle',
  'alipay',
  'ant-design',
  'aliyun',
  'zhihu',
  'slack',
  'slack-square',
  'behance',
  'behance-square',
  'dribbble',
  'dribbble-square',
  'instagram',
  'yuque',
];

ReactDOM.render(
  <div>
    {icons.map(icon => (
      <Icon key={icon} type={icon} />
    ))}
  </div>,
  mountNode,
);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| type | Type of the icon | string | - |  |
| style | Style properties of icon, like `fontSize` and `color` | CSSProperties | - |  |
| theme | Theme variant of the icon | 'filled' | 'outlined' | 'twoTone' | 'outlined' | 3.9.0 |
| spin | Rotate icon with animation | boolean | false |  |
| rotate | Rotate by n degrees (added in 3.13.0, not working in IE9) | number | - | 3.13.0 |
| component | The component used for the root node. This will override the **`type`** property. | ComponentType\<CustomIconComponentProps\> | - | 3.9.0 |
| twoToneColor | Only supports the two-tone icon. Specify the primary color. | string (hex color) | - | 3.9.0 |

> Note: icon rendering priority of the Icon component is component > children > type. When props is passed, the higher priority item will work, and the lower priority item will be invalid.

### SVG icons

We introduced SVG icons in version `3.9.0`, replacing font icons. This has the following benefits:

*   Complete offline usage of icons, without dependency on a CDN-hosted font icon file (No more empty square during downloading and no need to deploy icon font files locally either!)
*   Much more display accuracy on lower-resolution screens
*   The ability to choose icon color
*   No need to change built-in icons with overriding styles by providing more props in component

More discussion of SVG icon reference at [#10353](https://github.com/ant-design/ant-design/issues/10353).

> ⚠️ Given the extra bundle size caused by all SVG icons imported in 3.9.0, we will provide a new API to allow developers to import icons as needed, you can track [#12011](https://github.com/ant-design/ant-design/issues/12011) for updates.
>
> While you wait, you can use [webpack plugin](https://github.com/Beven91/webpack-ant-icon-loader) from the community to chunk the icon file.

The properties `theme`, `component` and `twoToneColor` were added in `3.9.0`. The best practice is to pass the property `theme` to every `<Icon />` component.

```jsx
<Icon type="star" theme="filled" />
```

All the icons will render to `<svg>`. You can still set `style` and `className` for size and color of icons.

```jsx
<Icon type="message" style={{ fontSize: '16px', color: '#08c' }} theme="outlined" />
```

### Set TwoTone Color

When using the two-tone icons, you can use the static methods `Icon.getTwoToneColor()` and `Icon.setTwoToneColor(colorString)` to specify the primary color.

```jsx
Icon.setTwoToneColor('#eb2f96');
Icon.getTwoToneColor(); // #eb2f96
```

### Custom Font Icon

We added a `createFromIconfontCN` function to help developer use their own icons deployed at [iconfont.cn](http://iconfont.cn/) in a convenient way.

> This method is specified for [iconfont.cn](http://iconfont.cn/).

```js
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // generated by iconfont.cn
});

ReactDOM.render(<MyIcon type="icon-example" />, mountedNode);
```

It creates a component that uses SVG sprites in essence.

The following options are available:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| scriptUrl | The URL generated by [iconfont.cn](http://iconfont.cn/) project. | string | - | 3.9.3 |
| extraCommonProps | Define extra properties to the component | `{ [key: string]: any }` | {} | 3.9.3 |

The property `scriptUrl` should be set to import the SVG sprite symbols.

See [iconfont.cn documents](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15\&helptype=code) to learn about how to generate `scriptUrl`.

### Custom SVG Icon

You can import SVG icon as a react component by using `webpack` and [`@svgr/webpack`](https://www.npmjs.com/package/@svgr/webpack). `@svgr/webpack`'s `options` [reference](https://github.com/smooth-code/svgr#options).

```js
// webpack.config.js
{
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
}
```

```jsx
import { Icon } from 'antd';
import MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.

ReactDOM.render(<Icon component={MessageSvg} />, mountNode);
```

The following properties are available for the component:

| Property | Description | Type | Readonly | Version |
| --- | --- | --- | --- | --- |
| width | The width of the `svg` element | string | number | '1em' | 3.10.0 |
| height | The height of the `svg` element | string | number | '1em' | 3.10.0 |
| fill | Define the color used to paint the `svg` element | string | 'currentColor' | 3.10.0 |
| className | The computed class name of the `svg` element | string | - | 3.10.0 |
| style | The computed style of the `svg` element | CSSProperties | - | 3.10.0 |
