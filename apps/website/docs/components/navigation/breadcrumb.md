---
tags:
  - Components
type: 导航
title: Breadcrumb 面包屑
--------

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

*   当系统拥有超过两级以上的层级结构时；
*   当需要告知用户『你在哪里』时；
*   当需要向上导航的功能时。

## 示例

### 基本

最简单的用法。

```jsx live
ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```

### 带有图标的

图标放在文字前面。

```jsx live
ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```

### react-router

和 `react-router@2` `react-router@3` 进行结合使用。

```jsx
import { Router, Route, Link, hashHistory } from 'react-router';
import { Breadcrumb, Alert } from 'antd';

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const Home = ({ routes, params, children }) => (
  <div className="demo">
    <div className="demo-nav">
      <Link to="/">Home</Link>
      <Link to="/apps">Application List</Link>
    </div>
    {children || 'Home Page'}
    <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
    <Breadcrumb routes={routes} params={params} />
  </div>
);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route name="home" breadcrumbName="Home" path="/" component={Home}>
      <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>
        <Route name="app" breadcrumbName="Application:id" path=":id">
          <Route name="detail" breadcrumbName="Detail" path="detail" />
        </Route>
      </Route>
    </Route>
  </Router>,
  mountNode,
);
```

### 其它路由

和 `react-router@4`，或其他路由进行结合使用。

```jsx
import { Router, Route, Link, hashHistory } from 'react-router';
import { Breadcrumb, Alert } from 'antd';

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const Home = ({ routes, params, children }) => (
  <div className="demo">
    <div className="demo-nav">
      <Link to="/">Home</Link>
      <Link to="/apps">Application List</Link>
    </div>
    {children || 'Home Page'}
    <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
    <Breadcrumb routes={routes} params={params} />
  </div>
);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route name="home" breadcrumbName="Home" path="/" component={Home}>
      <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>
        <Route name="app" breadcrumbName="Application:id" path=":id">
          <Route name="detail" breadcrumbName="Detail" path="detail" />
        </Route>
      </Route>
    </Route>
  </Router>,
  mountNode,
);
```

### 分隔符

使用 `separator=">"` 可以自定义分隔符。

```jsx live
ReactDOM.render(
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```

### 带下拉菜单的面包屑

面包屑支持下拉菜单。

```jsx live
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Component</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item overlay={menu}>
      <a href="">General</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Button</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```

### 分隔符

使用 `Breadcrumb.Separator` 可以自定义分隔符。

```jsx live
ReactDOM.render(
  <Breadcrumb separator="">
    <Breadcrumb.Item>Location</Breadcrumb.Item>
    <Breadcrumb.Separator>:</Breadcrumb.Separator>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```

## API

### Breadcrumb

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | - | 3.17.0 |
| params | 路由的参数 | object | - | 3.17.0 |
| routes | router 的路由栈信息 | [routes\[\]](#routes) | - | 3.17.0 |
| separator | 分隔符自定义 | string|ReactNode | '/' | 3.17.0 |

### Breadcrumb.Item

| 参数    | 参数           | 类型                                   | 默认值 | 版本   |
| ------- | -------------- | -------------------------------------- | ------ | ------ |
| href    | 链接的目的地   | string                                 | -      | 3.17.0 |
| overlay | 下拉菜单的内容 | [Menu](/components/menu) | () => Menu | -      | 3.17.0 |
| onClick | 单击事件       | (e:MouseEvent)=>void                   | -      | 3.17.0 |

### Breadcrumb.Separator `3.21.0`

| 参数     | 参数           | 类型              | 默认值 | 版本   |
| -------- | -------------- | ----------------- | ------ | ------ |
| children | 要显示的分隔符 | string|ReactNode | '/'    | 3.21.0 |

> 注意：在使用 `Breadcrumb.Separator` 时，其父组件的分隔符必须设置为 `separator=""`，否则会出现父组件默认的分隔符。

### routes

```ts
interface Route {
  path: string;
  breadcrumbName: string;
  children: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}
```

### 和 browserHistory 配合

和 react-router 一起使用时，默认生成的 url 路径是带有 `#` 的，如果和 browserHistory 一起使用的话，你可以使用 `itemRender` 属性定义面包屑链接。

```jsx
import { Link } from 'react-router';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'home',
  },
  {
    path: 'first',
    breadcrumbName: 'first',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    breadcrumbName: 'second',
  },
];

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

return <Breadcrumb itemRender={itemRender} routes={routes} />;
```
