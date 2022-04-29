import React from 'react';
import { HEADER_HEIGHT, FOOTER_HEIGHT, FOOTER_OFFSET } from '../../cfg';
import { Fullscreen } from '../../components/Fullscreen';

/**
 * ViewHome
 */
export const ViewHome = () => (
  <Fullscreen subtract={HEADER_HEIGHT + FOOTER_OFFSET + FOOTER_HEIGHT}>
    HOME
  </Fullscreen>
);
