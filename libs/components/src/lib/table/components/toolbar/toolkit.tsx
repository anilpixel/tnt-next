import { FullScreenOne, Refresh } from '@icon-park/react';
import type { TooltipProps } from 'antd/lib/tooltip';
import React, { memo } from 'react';

import styles from './toolbar.module.less';

export enum BuiltInToolkitType {
  /**
   * fullscreen toggle
   */
  Fullscreen = 'fullscreen',
  /**
   *  table size setter
   */
  Size = 'size',
  /**
   * table column setter
   */
  Column = 'column',
  /**
   * table reload button
   */
  Refresh = 'reload',
}

export type ToolkitSetting = {
  icon: React.ReactNode;
  tooltip?: TooltipProps | string;
  key?: string;
  onClick?: (key?: string) => void;
};

export type ToolkitItem = ToolkitSetting | BuiltInToolkitType;

/**
 * dictionary of built-in toolkits
 */
const BUILT_IN_TOOLKIT_SETTING_DICT: {
  [key in BuiltInToolkitType]: ToolkitSetting;
} = {
  [BuiltInToolkitType.Fullscreen]: {
    icon: <FullScreenOne />,
    tooltip: '全屏',
  },
  [BuiltInToolkitType.Size]: {
    icon: <Refresh />,
    tooltip: '刷新',
  },
  [BuiltInToolkitType.Column]: {
    icon: <Refresh />,
    tooltip: '刷新',
  },
  [BuiltInToolkitType.Refresh]: {
    icon: <Refresh />,
    tooltip: '刷新',
  },
};

/**
 * determine the toolkitItem use built-in toolkit or not
 */
const isToolkitType = (
  toolkitItem: ToolkitItem
): toolkitItem is BuiltInToolkitType => typeof toolkitItem === 'string';

/**
 * get the toolkit setting from toolkitItem
 */
const getToolkitSetting = (
  toolkitItem: ToolkitItem
): ToolkitSetting | undefined => {
  if (isToolkitType(toolkitItem)) {
    const setting = BUILT_IN_TOOLKIT_SETTING_DICT[toolkitItem];

    /**
     * print error if the toolkitItem is not a built-in toolkit
     */
    if (!setting) {
      console.error(`built-in toolkit ${toolkitItem} not existed`);

      return;
    }

    return setting;
  }

  return toolkitItem;
};

/**
 * export toolkit component
 */
export const Toolkit = memo<{
  toolkitItem: ToolkitItem;
}>(({ toolkitItem }) => {
  const toolkitSetting = getToolkitSetting(toolkitItem);

  /**
   * skip render when toolkitSetting is not existed
   */
  if (!toolkitSetting) {
    return null;
  }

  const { key, onClick, icon, tooltip } = toolkitSetting;

  return (
    <div
      key={key}
      className={styles.toolkit}
      onClick={() => {
        if (onClick) {
          onClick(key);
        }
      }}
    >
      <div className={styles.icon}>{icon}</div>
      {tooltip && <div className={styles.tooltip}>{tooltip}</div>}
    </div>
  );
});

Toolkit.displayName = 'Toolkit';
