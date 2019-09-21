import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './logo';
import doc from './logo.md';

storiesOf('Logo', module).add('default', () => <Logo />, {
  notes: doc,
});
