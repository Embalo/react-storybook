import React from 'react';
import PropTypes from 'prop-types';
import * as S from './input.css';

const Input = ({ type = 'text', label, onChange, ...rest }) => (
  <S.Container>
    {label && <S.Label>{label}</S.Label>}
    <S.Input
      type={type}
      onChange={event => onChange && onChange(event.target.value)}
      {...rest}
    />
  </S.Container>
);

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
