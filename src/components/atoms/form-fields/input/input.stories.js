import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Input from './input';
import notes from './input.md';

storiesOf('Atoms/FormFields', module).add(
  'input',
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
        name={inputValue}
        placeholder={text('placeholder', 'Leandro Teixeira')}
        onChange={setInputValue}
        disabled={boolean('disabled', false)}
      />
    );
  },
  { notes }
);
