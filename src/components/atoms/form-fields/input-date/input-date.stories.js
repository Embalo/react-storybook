import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import InputDate from './input-date';

storiesOf('Atoms/Form Fields', module).add('InputDate', () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputDate
      placeholder="data entrega"
      selected={inputValue}
      onChange={setInputValue}
    />
  );
});
