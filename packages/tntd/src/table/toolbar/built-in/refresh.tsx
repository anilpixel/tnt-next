import { Refresh as RefreshIcon } from '@icon-park/react'
import React, { memo, useCallback, useContext } from 'react'

import { TableContext } from '../../context'
import { IconWrapper } from '../icon-wrapper'

export const Refresh = memo(() => {
  const { refresh } = useContext(TableContext)
  const handleClick = useCallback(() => {
    refresh?.()
  }, [refresh])

  return (
    <IconWrapper onClick={handleClick}>
      <RefreshIcon />
    </IconWrapper>
  )
})

Refresh.displayName = 'Refresh'
