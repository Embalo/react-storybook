import React, { useState } from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import InputDate from './input-date';
import notes from './input-date.md';

storiesOf('Atoms/Form Fields', module).add(
  'InputDate',
  () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <InputDate
        placeholder={text('placeholder', 'data entrega')}
        value={inputValue}
        onChange={setInputValue}
        disabled={boolean('disabled', false)}
      />
    );
  },
  { notes }
);
