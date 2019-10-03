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
        color={select('color', ['black', 'gray', 'orange', 'white'])}
        as={select('component', ['button', 'a'])}
        onClick={action('clicked')}
        size={select('size', ['normal', 'small'])}
        fullWidth={boolean('full width')}
        disabled={boolean('disabled')}
      >
        {text('label', 'simple button')}
      </Button>
    </>
  ),
  { notes }
);
