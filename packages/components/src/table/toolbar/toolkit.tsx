import React, { memo, useContext } from 'react'

import { Tooltip } from '../../antd-components'
import { TableContext } from '../context'
import { Column, Fullscreen, Refresh, Size } from './built-in'
import type { ToolkitItem, ToolkitSetting } from './constants'
import { BuiltInToolkitType } from './constants'
import { IconWrapper } from './icon-wrapper'
import styles from './toolbar.module.less'

/**
 * dictionary of built-in toolkits
 */
const BUILT_IN_TOOLKIT_SETTING_DICT: {
  [key in BuiltInToolkitType]: ToolkitSetting
} = {
  [BuiltInToolkitType.Fullscreen]: {
    icon: <Fullscreen />,
    tooltip: '全屏',
  },
  [BuiltInToolkitType.Size]: {
    icon: <Size />,
    tooltip: '密度',
  },
  [BuiltInToolkitType.Column]: {
    icon: <Column />,
    tooltip: '列配置',
  },
  [BuiltInToolkitType.Refresh]: {
    icon: <Refresh />,
    tooltip: '刷新',
    condition: (context) => context.refresh != null,
  },
}

/**
 * determine the toolkitItem use built-in toolkit or not
 */
export const isToolkitType = (
  toolkitItem: ToolkitItem
): toolkitItem is BuiltInToolkitType => typeof toolkitItem === 'string'

/**
 * get the toolkit setting from toolkitItem
 */
const getToolkitSetting = (
  toolkitItem: ToolkitItem
): [ToolkitSetting | undefined, boolean] => {
  if (isToolkitType(toolkitItem)) {
    const setting = BUILT_IN_TOOLKIT_SETTING_DICT[toolkitItem]

    /**
     * print error if the toolkitItem is not a built-in toolkit
     */
    if (!setting) {
      console.error(`built-in toolkit ${toolkitItem} not existed`)

      return [undefined, false]
    }

    return [setting, true]
  }

  return [toolkitItem, false]
}

/**
 * export toolkit component
 */
export const Toolkit = memo<{
  toolkitItem: ToolkitItem
  refresh?: () => void
}>(({ toolkitItem }) => {
  const [toolkitSetting, isBuiltIn] = getToolkitSetting(toolkitItem)
  const contextValue = useContext(TableContext)

  /**
   * skip render when toolkitSetting is not existed
   */
  if (!toolkitSetting) {
    return null
  }

  const { key, onClick, icon, tooltip, condition } = toolkitSetting

  /**
   * skip render when condition is not satisfied
   */
  if (condition && !condition(contextValue)) {
    return null
  }

  const element = (
    <button key={key} className={styles.toolkit}>
      {isBuiltIn ? (
        icon
      ) : (
        <IconWrapper
          onClick={(event) => {
            if (onClick) {
              onClick(
                {
                  ...contextValue,
                  key,
                },
                event
              )
            }
          }}
        >
          {icon}
        </IconWrapper>
      )}
    </button>
  )

  if (tooltip == null) {
    return element
  }

  const tooltipProps =
    typeof tooltip === 'string' ? { title: tooltip } : tooltip

  return (
    <Tooltip autoAdjustOverflow={false} placement="top" {...tooltipProps}>
      {element}
    </Tooltip>
  )
})

Toolkit.displayName = 'Toolkit'
