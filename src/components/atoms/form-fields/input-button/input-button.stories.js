import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import theme from 'constants/theme';
import InputButton from './input-button';
import notes from './input-button.md';

storiesOf('Atoms/Form Fields', module).add(
  'InputButton',
  () => (
    <InputButton
      type={select(
        'type',
        ['text', 'search', 'tel', 'number', 'email', 'date'],
        'text'
      )}
      placeholder={text('placeholder', 'destinatário, cidade, NF ou pedido')}
      label={text('label', '')}
      icon={select('icon', Object.keys(theme.icons), 'search')}
      onClick={action('clicked')}
      onChange={action('changed')}
      disabled={boolean('disabled', false)}
      readOnly={boolean('readonly', false)}
    />
  ),
  { notes }
);
