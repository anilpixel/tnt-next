import { useLocalStorage } from '@stellaris/hooks';
import { IllustrationNoResult } from '@tnt-next/illustrations';
import type { SpinProps } from 'antd/lib/spin';
import type { TableProps as AntdTableProps } from 'antd/lib/table';
import Column from 'antd/lib/table/Column';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import classNames from 'classnames';
import React, { useEffect, useMemo, useRef } from 'react';

import { Table as AntdTable } from '../antd-components/table';
import { Illustration } from '../illustration';
import ImageLoading from './assets/image-loading';
import ImageTableBackground from './assets/image-loading-background';
import { TABLE_SIZE_STORAGE_KEY } from './constants';
import { TableContext } from './context';
import { useColumnSetting } from './hooks/use-column-setting';
import styles from './table.module.less';
import { Toolbar, ToolBarProps } from './toolbar';
import { normalizeColumns } from './utils';

export type TableProps<T> = AntdTableProps<T> & {
  storageKey?: string;
  toolbar?: ToolBarProps;
  refresh?(): void;
};

const mergeSpinConfig = (
  loading: TableProps<unknown>['loading']
): SpinProps => {
  const spinConfig = {
    indicator: (
      <Illustration
        illustration={
          <div className={styles.spinContainer}>
            <ImageLoading className={styles.spinLoading} />
            <ImageTableBackground />
          </div>
        }
        description="数据加载中..."
      />
    ),
    spinning: false,
  };

  return typeof loading === 'boolean'
    ? {
        ...spinConfig,
        spinning: loading,
      }
    : {
        ...spinConfig,
        ...loading,
      };
};

export const Table = <T,>({
  className,
  loading,
  locale,
  bordered,
  toolbar,
  refresh,
  size,
  storageKey,
  columns,
  children,
  ...rest
}: TableProps<T>) => {
  const tableContainer = useRef<HTMLDivElement>(null);
  const [innerSize, setInnerSize] = useLocalStorage<TableProps<T>['size']>(
    TABLE_SIZE_STORAGE_KEY,
    'default'
  );
  const normalizedColumns = useMemo(
    () => columns || normalizeColumns<T>(children as React.ReactChildren),
    [children, columns]
  );
  const [displayColumns, columnSetting, setColumnSetting] = useColumnSetting(
    normalizedColumns,
    storageKey
  );

  /**
   * update the innerSize when props size changes
   */
  useEffect(() => {
    if (size) {
      setInnerSize(size);
    }
  }, [setInnerSize, size]);

  return (
    <TableContext.Provider
      value={{
        size: innerSize,
        tableContainer,
        columnSetting,
        refresh,
        setSize: setInnerSize,
        setColumnSetting,
      }}
    >
      <div ref={tableContainer}>
        <Toolbar {...toolbar} />

        <AntdTable
          className={classNames(
            styles.table,
            {
              [styles.boundless]: !bordered,
              [styles.small]: innerSize === 'small',
              [styles.middle]: innerSize === 'middle',
            },
            className
          )}
          locale={{
            emptyText: (
              <Illustration
                illustration={<IllustrationNoResult />}
                description="暂无数据"
              />
            ),
            ...locale,
          }}
          loading={mergeSpinConfig(loading)}
          bordered={bordered}
          size={innerSize}
          columns={displayColumns}
          {...rest}
        />
      </div>
    </TableContext.Provider>
  );
};

Table.Column = Column;
Table.ColumnGroup = ColumnGroup;
Table.displayName = 'Table';
