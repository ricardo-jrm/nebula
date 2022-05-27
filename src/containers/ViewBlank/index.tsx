import React from 'react';
import { Fullscreen } from 'components/layout';
import { BtnContained, BtnText } from 'components/button';
import {
  Caption,
  Heading,
  Headline,
  Subtitle,
  Text,
  Title,
} from 'components/typo';

/**
 * ViewBlank
 */
export const ViewBlank = () => (
  <Fullscreen>
    <div>
      <div>
        <Headline>Headline</Headline>
      </div>
      <div>
        <Heading>Heading</Heading>
      </div>
      <div>
        <Title>Title</Title>
      </div>
      <div>
        <Subtitle>Subtitle</Subtitle>
      </div>
      <div>
        <Text>Text</Text>
      </div>
      <div>
        <Caption>Caption</Caption>
      </div>
      <div>
        <BtnContained>BtnContained</BtnContained>
        <BtnText>BtnText</BtnText>
      </div>
    </div>
  </Fullscreen>
);
