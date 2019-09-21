import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';
import notes from './button.md';

storiesOf('Atoms/Button', module).add(
  'default',
  () => (
    <>
      <Button
        color={select('color', ['black', 'gray', 'orange', 'white'], 'black')}
        as={select('component', ['button', 'a'], 'button')}
        disabled={boolean('disabled', false)}
        fullWidth={boolean('full width', false)}
        onClick={action('clicked')}
        size={select('size', ['normal', 'small'], 'normal')}
      >
        {text('label', 'black button')}
      </Button>
    </>
  ),
  { notes }
);
