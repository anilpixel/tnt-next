import { RowHeight } from '@icon-park/react'
import React, { memo, useContext } from 'react'

import { Dropdown, Menu } from '../../../antd-components'
import { TableContext } from '../../context'
import { IconWrapper } from '../icon-wrapper'
import styles from './built-in.module.less'

export const Size = memo(() => {
  const { size, setSize } = useContext(TableContext)

  return (
    <Dropdown
      placement="bottomCenter"
      trigger={['click']}
      overlay={
        <Menu className={styles.sizeMenu} selectedKeys={size ? [size] : []}>
          <Menu.Item
            key="small"
            title="紧凑"
            onClick={() => {
              if (setSize) {
                setSize('small')
              }
            }}
          >
            紧凑
          </Menu.Item>
          <Menu.Item
            key="middle"
            title="中等"
            onClick={() => {
              if (setSize) {
                setSize('middle')
              }
            }}
          >
            中等
          </Menu.Item>
          <Menu.Item
            key="default"
            title="宽松"
            onClick={() => {
              if (setSize) {
                setSize('default')
              }
            }}
          >
            宽松
          </Menu.Item>
        </Menu>
      }
    >
      <IconWrapper>
        <RowHeight />
      </IconWrapper>
    </Dropdown>
  )
})

Size.displayName = 'Size'
