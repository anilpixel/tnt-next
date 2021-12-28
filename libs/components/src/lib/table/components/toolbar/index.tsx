import React, { memo, ReactNode } from 'react';

import styles from './toolbar.module.less';
import type { ToolkitItem } from './toolkit';

export interface ToolBarProps {
  /**
   * actions on the right side of the toolbar
   */
  actions?: ReactNode[];
  /**
   * built-in toolkits on the right side of the toolbar
   */
  toolkits?: ToolkitItem[];
}

/**
 * react component rendering toolbar
 */
export const Toolbar = memo(() => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.actions}>{/* actions */}</div>
        <div className={styles.toolkits}>{/* toolkits */}</div>
      </div>
    </div>
  );
});

Toolbar.displayName = 'Toolbar';
