import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './grid';
import notes from './grid.md';

storiesOf('Organisms/Grid', module).add('Grid', () => <Grid />, {
  notes,
});
