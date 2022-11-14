# `tntd` 同盾前端组件库

`tntd` 是同盾前端团队基于 `antd@3.26.19` 衍生的通用组件库，在不破坏原 `antd` 组件功能的基础上添加符合同盾业务的拓展功能，并落地交互设计规范。为各位前端同学提供开箱即用的组件解决方案。

目前 tntd 具有以下特色：

1. 开箱即用符合设计规范的基础组件，并提供定制化配置参数
2. 由 `tntd@1.0` 继承而来的业务组件，例如 `QueryListScene`、`QueryForm`、`Layout` 等组件

## 如何开始

项目仓库同时维护组件文档网站及组件本身，采用 monorepo 结构。目录结构如下：

```
├── apps
│   └── website // 组件文档网站
├── libraries // 配置包，例如 storybook 的配置
└── packages
    └── tntd // 组件包
        ├── src
        │   ├── antd-components // antd 原有组件
        │   ├── svg-components // svg 图标
        │   └── table // 自定义组件
        │   └── query-form // 自定义组件
        ├── svg // svg 源文件
        └── themes // 主题
            ├── default
```

### 1. 安装 `rush` 作为依赖管理工具。

```shell
# 安装 `rush` 作为依赖管理工具。
npm install -g @microsoft/rush
```


### 2. 开发组件

```shell
# 检出功能分支
git checkout -b feature/xxx

# 安装依赖
rush update

# 进入组件开发目录
cd packages/tntd

# 启动 storybook 进行开发
npm run start
```

### 3. 修改组件文档

```shell
# 进入文档目录
cd apps/website
# 启动服务监听 tntd 的变化
npm run watch
# 启动开发服务
npm run start
```

### 4. 发布

```shell
# 组件发布：在根目录下执行
sh ./publish.sh
# 脚本会基于 origin/master 自动生成变更文件，填写版本描述后自动发布

# 文档发布：通过 CI/CD 自动进行

```

### rush 常用命令

```shell
  # 重新安装依赖
  rush update
  # 安装新依赖
  rush add -p lodash-es -p jest
  # 安装 dev 依赖
  rush add -p @types/lodash --dev
  # 清理 node_modules 以及临时文件
  rush purge
  # 扫描 package.json 中是否存在不必要的依赖
  rush scan
  # 检查是否有依赖的版本不一致
  rush check
```

## 编码规范

### 组件样式规范

组件样式变量应该定义在 `*.module.less`，并尽量使用 `antd` 中定义的原有变量，方便后续在主题配置中进行覆盖。例如：

```less
// table.module.less
@vertical-padding: 30px;
@table-padding-vertical-md: @table-padding-vertical * 3 / 4;

.table {
  background-color: @white;
  border-radius: @border-radius-base;

  &.borderless {
    box-shadow: @table-borderless-shadow;

    :global .ant-table-small {
      border: none;
    }
  }

  &.small {
    :global {
      .ant-table-pagination.ant-pagination {
        padding: @table-padding-vertical-sm @table-padding-horizontal-sm;
      }
    }
  }
}
```
```ts
// table.tsx
import styles from 'table.module.less'

export const Table = () => (
  <Table 
    className={classNames(
      styles.table,
      {
        [styles.borderless]: !bordered,
        [styles.small]: innerSize === 'small',
      },
      className
    )}
    />
)
```

### 国际化

1. 在 `locale/zh_CN.ts`、`locale/en_US.ts` 下添加新的文案：

```ts
// locale/*.ts
...
export const zh_CN = merge(sourceLocale, {
  NewComponent: {
    text: '文本',
  },
})
...

...
export const zh_US = merge(sourceLocale, {
  NewComponent: {
    text: 'text',
  },
})
...
```

2. 在组件中使用 `LocaleReceiver` 获取国际化文本：

```ts
import LocaleReceiver from 'antd/es/locale-provider/LocaleReceiver'

// 外部可以传入新的 locale 对象来覆盖默认配置
export const NewComponent = ({ locale }) => (
  <LocaleReceiver componentName="NewComponent" defaultLocale={locale}>
    {(locale) => (<span>{locale.text}</span>)}
  </LocaleReceiver>
)
```
