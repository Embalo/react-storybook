import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select from './select';
import notes from './select.md';

storiesOf('Atoms/Form Fields', module).add(
  'Select',
  () => (
    <Select
      placeholder={text('placeholder', 'status')}
      options={object('options', [
        { value: 'a-coletar', label: 'a coletar' },
        { value: 'em-triagem', label: 'em triagem' },
        { value: 'despachado', label: 'despachado' },
      ])}
      onChange={action('changed')}
    />
  ),
  {
    notes,
  }
);
