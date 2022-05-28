import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Caption } from 'components/typo';

export const FbDisclaimer: FC = () => {
  return (
    <Box>
      <Caption>
        This site is not part of the Facebook website or Meta Platforms, Inc.
        Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK
        is a trademark of Meta Platforms, Inc.
      </Caption>
    </Box>
  );
};
