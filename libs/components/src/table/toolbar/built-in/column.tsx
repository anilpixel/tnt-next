import { SettingTwo } from '@icon-park/react';
import React, { memo } from 'react';

import { IconWrapper } from '../icon-wrapper';

export const Column = memo(() => {
  return (
    <IconWrapper>
      <SettingTwo />
    </IconWrapper>
  );
});

Column.displayName = 'Column';
