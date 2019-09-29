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
        onClick={action('clicked')}
        size={select('size', ['normal', 'small'], 'normal')}
        fullWidth={boolean('full width', false)}
        disabled={boolean('disabled', false)}
      >
        {text('label', 'simple button')}
      </Button>
    </>
  ),
  { notes }
);
