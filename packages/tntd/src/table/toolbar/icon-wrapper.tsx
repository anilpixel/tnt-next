import React, { ComponentProps, memo } from 'react'

export const IconWrapper = memo<ComponentProps<'span'>>(
  ({ children, ...rest }) => {
    return <span {...rest}>{children}</span>
  }
)

IconWrapper.displayName = 'IconWrapper'
