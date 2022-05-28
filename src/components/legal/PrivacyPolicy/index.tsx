import React, { FC } from 'react';
import { Box } from '@mui/material';
import { brandName } from 'cfg';
import { Text, Title } from 'components/typo';

export const PrivacyPolicy: FC = () => {
  return (
    <Box>
      <Box>
        <Title paragraph>PRIVACY POLICY</Title>
      </Box>
      <Box>
        <Text paragraph>
          Our privacy policy has been updated to comply with the General Data
          Protection Regulation (GDPR), which goes into effect in the EU on May
          25th, 2018. The GDPR gives you additional protection and insight into
          how companies collect and use your personal data.
        </Text>
      </Box>
      <Box>
        <Text>
          {brandName} respects your privacy. In short, we collect only the
          minimal information we need to better understand who is using our
          website and how we can better serve them.
        </Text>
      </Box>
    </Box>
  );
};
