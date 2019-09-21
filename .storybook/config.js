import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalStyle from '../src/globalStyle';

// Apply global style to stories
const withGlobal = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(withGlobal);

// Add the `withKnobs` decorator to add knobs support to stories.
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
