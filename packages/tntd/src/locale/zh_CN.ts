import sourceLocale from 'antd/es/locale/zh_CN'

import { merge } from 'lodash-es'

export const zh_CN = merge(sourceLocale, {
  Table: {
    loadingDescription: '数据加载中...',
    emptyText: '暂无数据',
  },
})
