import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Input from './input';
import notes from './input.md';

storiesOf('Atoms/Form Fields', module).add(
  'Input',
  () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        type={select(
          'type',
          ['text', 'password', 'tel', 'number', 'email', 'date'],
          'text'
        )}
        label={text('label', 'Nome')}
        value={inputValue}
        placeholder={text('placeholder', 'Leandro Teixeira')}
        onChange={setInputValue}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readonly', false)}
      />
    );
  },
  { notes }
);
