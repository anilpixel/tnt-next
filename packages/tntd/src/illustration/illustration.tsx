import classNames from 'classnames'
import React from 'react'
import type { ComponentPropsWithRef, ReactNode } from 'react'

import styles from './illustration.module.less'

export interface IllustrationProps extends ComponentPropsWithRef<'div'> {
  illustration: ReactNode
  caption?: string
  description?: string
}

export function Illustration({
  className,
  illustration,
  caption,
  description,
  children,
  ...rest
}: IllustrationProps) {
  return (
    <div className={classNames(styles.illustration, className)} {...rest}>
      {illustration}
      {caption && <h3 className={styles.illustrationCaption}>{caption}</h3>}
      {description && (
        <p className={styles.illustrationDescription}>{description}</p>
      )}
      {children && (
        <div className={styles.illustrationChildren}>{children}</div>
      )}
    </div>
  )
}
