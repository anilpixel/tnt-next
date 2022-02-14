import { useLocalStorageMayEmpty } from '@stellaris/hooks';
import type { ColumnProps } from 'antd/lib/table';
import type { Dispatch, SetStateAction } from 'react';
import { useMemo } from 'react';

export interface ColumnSetting {
  key: string;
  order: number;
  enable: boolean;
}

export const useColumnSetting = <T>(
  columns: ColumnProps<T>[],
  storageKey?: string
): [
  ColumnProps<T>[],
  ColumnSetting[] | undefined,
  Dispatch<SetStateAction<ColumnSetting[] | undefined>>
] => {
  const [columnSetting, setColumnSetting] = useLocalStorageMayEmpty<
    ColumnSetting[]
  >(storageKey, []);
  const displayColumns = useMemo(() => {
    if (!columnSetting || columnSetting.length === 0) {
      return columns;
    }

    return columns
      .filter((column) =>
        columnSetting.some((setting) => setting.key === column.key)
      )
      .sort((a, b) => {
        const aIndex = columnSetting.find((setting) => setting.key === a.key);
        const bIndex = columnSetting.find((setting) => setting.key === b.key);

        return (aIndex?.order || 0) - (bIndex?.order || 0);
      });
  }, []);

  return [displayColumns, columnSetting, setColumnSetting];
};
