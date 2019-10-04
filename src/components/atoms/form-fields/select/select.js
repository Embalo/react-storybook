import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './select.css';
import InputButton from '../input-button/input-button';

const Select = ({ options, placeholder, onChange }) => {
  const [selected, setSelected] = useState('');

  const handleChange = option => {
    setSelected(option);
    onChange(option);
  };

  return (
    <S.Container tabIndex="-1">
      <S.Select>
        <InputButton
          placeholder={placeholder}
          value={selected && selected.label}
          icon="arrow-down"
          readOnly
        />
      </S.Select>
      <S.DropDown as="ul">
        {options.map(option => (
          <S.Option
            as="li"
            value={option.value}
            key={option.value}
            onClick={() => handleChange(option)}
            className={option === selected && 'selected'}
          >
            {option.label}
          </S.Option>
        ))}
      </S.DropDown>
    </S.Container>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
