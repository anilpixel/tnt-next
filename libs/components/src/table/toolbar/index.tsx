import React, { memo, ReactNode } from 'react';

import type { ToolkitItem } from './constants';
import { DefaultToolkit } from './constants';
import styles from './toolbar.module.less';
import { isToolkitType, Toolkit } from './toolkit';

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
export const Toolbar = memo<ToolBarProps>(
  ({ actions = [], toolkits = DefaultToolkit }) => {
    return (
      <div className={styles.toolbar}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.actions}>{/* actions */}</div>
          <div className={styles.toolkits}>
            {toolkits.map((toolkit, index) => {
              const key = isToolkitType(toolkit) ? toolkit : toolkit.key;

              return <Toolkit toolkitItem={toolkit} key={key || index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
);

Toolbar.displayName = 'Toolbar';
