import sourceLocale from 'antd/es/locale/en_US'

import { merge } from 'lodash-es'

export const en_US = merge(sourceLocale, {
  Table: {
    loadingDescription: 'loading...',
    emptyText: 'No data',
  },
})
