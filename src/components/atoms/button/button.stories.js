import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

storiesOf('Atoms/Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>black button</Button>
  ))
  .add('gray', () => (
    <Button color="gray" onClick={action('clicked')}>
      gray button
    </Button>
  ))
  .add('orange', () => (
    <Button color="orange" onClick={action('clicked')}>
      orange button
    </Button>
  ))
  .add('white', () => (
    <Button color="white" onClick={action('clicked')}>
      white button
    </Button>
  ))
  .add('fullWidth', () => (
    <Button as="a" fullWidth onClick={action('clicked')}>
      full width button
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={action('clicked')}>
      white button
    </Button>
  ));
