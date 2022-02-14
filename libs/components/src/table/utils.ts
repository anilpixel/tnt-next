import type { ColumnProps } from 'antd/lib/table';
import React from 'react';

export function normalizeColumns<T>(elements: React.ReactChildren) {
  const columns: ColumnProps<T>[] = [];

  React.Children.forEach(elements, (element) => {
    if (!React.isValidElement(element)) {
      return;
    }

    const column = {
      ...(element.props as ColumnProps<T>),
    };

    if (element.key) {
      column.key = element.key;
    }

    if (element.type && (element.type as any).__ANT_TABLE_COLUMN_GROUP) {
      column.children = normalizeColumns(column.children as any);
    }

    columns.push(column);
  });

  return columns;
}
