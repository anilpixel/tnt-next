import { useLocalStorage } from '@stellaris/hooks'
import type { SpinProps } from 'antd/es/spin'
import type { TableProps as AntdTableProps } from 'antd/es/table'
import Column from 'antd/es/table/Column'
import ColumnGroup from 'antd/es/table/ColumnGroup'
import LocaleReceiver from 'antd/es/locale-provider/LocaleReceiver'
import classNames from 'classnames'
import React, { useEffect, useMemo, useRef } from 'react'

import { IllustrationNoResult } from '../svg-components'
import { Table as AntdTable } from '../antd-components/table'
import { Illustration } from '../illustration'
import ImageLoading from './assets/image-loading'
import ImageTableBackground from './assets/image-loading-background'
import { TABLE_SIZE_STORAGE_KEY } from './constants'
import { TableContext } from './context'
import { useColumnSetting } from './hooks/use-column-setting'
import styles from './table.module.less'
import { Toolbar, ToolBarProps } from './toolbar'
import { normalizeColumns } from './utils'

export type TableProps<T> = Omit<AntdTableProps<T>, 'locale'> & {
  storageKey?: string
  toolbar?: ToolBarProps
  locale?: AntdTableProps<T>['locale'] & {
    loadingDescription?: string
    emptyText?: string
  }
  refresh?(): void
}

const mergeSpinConfig = (
  loading: TableProps<unknown>['loading'],
  description: string
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
        description={description}
      />
    ),
    spinning: false,
  }

  return typeof loading === 'boolean'
    ? {
        ...spinConfig,
        spinning: loading,
      }
    : {
        ...spinConfig,
        ...loading,
      }
}

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
  const tableContainer = useRef<HTMLDivElement>(null)
  const [innerSize, setInnerSize] = useLocalStorage<TableProps<T>['size']>(
    TABLE_SIZE_STORAGE_KEY,
    'default'
  )
  const normalizedColumns = useMemo(
    () => columns || normalizeColumns<T>(children as React.ReactChildren),
    [children, columns]
  )
  const [displayColumns, columnSetting, setColumnSetting] = useColumnSetting(
    normalizedColumns,
    storageKey
  )

  /**
   * update the innerSize when props size changes
   */
  useEffect(() => {
    if (size) {
      setInnerSize(size)
    }
  }, [setInnerSize, size])

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

        <LocaleReceiver componentName="Table" defaultLocale={locale}>
          {(_locale) => {
            const locale = _locale as Record<string, string>

            return (
              <AntdTable
                className={classNames(
                  styles.table,
                  {
                    [styles.borderless]: !bordered,
                    [styles.small]: innerSize === 'small',
                    [styles.middle]: innerSize === 'middle',
                  },
                  className
                )}
                locale={{
                  emptyText: (
                    <Illustration
                      illustration={<IllustrationNoResult />}
                      description={locale.emptyText}
                    />
                  ),
                  ...locale,
                }}
                loading={mergeSpinConfig(loading, locale.loadingDescription)}
                bordered={bordered}
                size={innerSize}
                columns={displayColumns}
                {...rest}
              />
            )
          }}
        </LocaleReceiver>
      </div>
    </TableContext.Provider>
  )
}

Table.Column = Column
Table.ColumnGroup = ColumnGroup
Table.displayName = 'Table'
