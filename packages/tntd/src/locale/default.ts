import sourceLocale from 'antd/es/locale/default'

import { merge } from 'lodash-es'
import { zh_CN } from './zh_CN'

export const defaultLocale = merge(sourceLocale, zh_CN)
