import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InputButton from './input-button';
import searchIcon from '../../../../assets/icons/search.svg';
import calendarIcon from '../../../../assets/icons/calendar.svg';
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
      onClick={action('clicked')}
      onChange={action('changed')}
      disabled={boolean('disabled', false)}
      icon={select(
        'icon',
        {
          searchIcon,
          calendarIcon,
        },
        searchIcon
      )}
    />
  ),
  { notes }
);
