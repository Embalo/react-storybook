import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/globalStyle';
import theme from '../src/constants/theme';

// Apply global style to stories
const withGlobal = storyFn => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
);

addDecorator(withGlobal);

// Add the `withKnobs` decorator to add knobs support to stories.
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
