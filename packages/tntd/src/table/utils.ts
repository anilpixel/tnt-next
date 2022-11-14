import type { ColumnProps } from 'antd/es/table'
import React from 'react'

export function normalizeColumns<T>(elements: React.ReactChildren) {
  const columns: ColumnProps<T>[] = []

  React.Children.forEach(elements, (element) => {
    if (!React.isValidElement(element)) {
      return
    }

    const column = {
      ...(element.props as ColumnProps<T>),
    }

    if (element.key) {
      column.key = element.key
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (element.type && (element.type as any).__ANT_TABLE_COLUMN_GROUP) {
      column.children = normalizeColumns(column.children as never)
    }

    columns.push(column)
  })

  return columns
}
