import { FullScreen as FullScreenIcon, OffScreen } from '@icon-park/react'
import { useFullscreen, useToggle } from '@stellaris/hooks'
import React, { memo, useContext } from 'react'

import { TableContext } from '../../context'
import { IconWrapper } from '../icon-wrapper'

export const Fullscreen = memo(() => {
  const { tableContainer } = useContext(TableContext)
  const [show, toggle] = useToggle(false)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isFullscreen = useFullscreen(tableContainer!, show, {
    onClose: () => toggle(false),
  })
  const icon = isFullscreen ? <OffScreen /> : <FullScreenIcon />

  return <IconWrapper onClick={toggle}>{icon}</IconWrapper>
})

Fullscreen.displayName = 'FullscreenIcon'
