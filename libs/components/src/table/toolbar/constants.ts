import type { TooltipProps } from 'antd/lib/tooltip';
import type React from 'react';
import type { SyntheticEvent } from 'react';

import type { TableContextValue } from '../context';

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
  icon?: React.ReactNode;
  iconRenderer?: (context: TableContextValue) => React.ReactNode;
  tooltip?: TooltipProps | string;
  key?: string;
  condition?: (context: TableContextValue) => boolean;
  onClick?(
    context: {
      key?: string;
    } & TableContextValue,
    event: SyntheticEvent<HTMLElement>
  ): void;
};

export type ToolkitItem = ToolkitSetting | BuiltInToolkitType;

export const DefaultToolkit: ToolkitItem[] = [
  BuiltInToolkitType.Refresh,
  BuiltInToolkitType.Column,
  BuiltInToolkitType.Size,
  BuiltInToolkitType.Fullscreen,
];
