import { IllustrationNoResult } from '@tnt-next/illustrations';
import type { SpinProps } from 'antd/lib/spin';
import type { TableProps as AntdTableProps } from 'antd/lib/table';
import type StoreTable from 'antd/lib/table/Table';
import classNames from 'classnames';
import React from 'react';

import { Table as AntdTable } from '../../antd-components/table';
import { Illustration } from '../illustration';
import ImageLoading from './assets/image-loading';
import ImageTableBackground from './assets/image-loading-background';
import type { ToolBarProps } from './components/toolbar';
import styles from './table.module.less';

export type TableProps<T> = AntdTableProps<T> & {
  toolbar?: ToolBarProps;
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

export class Table<T>
  extends React.Component<TableProps<T>>
  implements
    Omit<
      StoreTable<T>,
      'store' | 'CheckboxPropsCache' | 'setCheckboxPropsCache'
    >
{
  static displayName = 'Table';
  static Column = AntdTable.Column;
  static ColumnGroup = AntdTable.ColumnGroup;

  render() {
    const { className, loading, locale, bordered, ...rest } = this.props;

    return (
      <AntdTable
        className={classNames(
          styles.table,
          {
            [styles.shadowed]: !bordered,
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
        {...rest}
      />
    );
  }
}
