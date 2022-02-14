import type { TableProps } from 'antd/lib/table';
import { createContext, RefObject } from 'react';

import type { ColumnSetting } from './hooks/use-column-setting';

export interface TableContextValue {
  /**
   * column setting
   */
  columnSetting?: ColumnSetting[];

  /**
   * size
   */
  size?: TableProps<unknown>['size'];

  /**
   * container ref
   */
  tableContainer?: RefObject<HTMLDivElement>;

  /**
   * set column setting function
   */
  setColumnSetting?(columnSetting: ColumnSetting[] | undefined): void;

  /**
   * refresh function
   */
  refresh?(): void;

  /**
   * set size function
   */
  setSize?(size: TableProps<unknown>['size']): void;
}

export const TableContext = createContext<TableContextValue>({});
