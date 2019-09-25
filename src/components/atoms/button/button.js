import React from 'react';
import PropTypes from 'prop-types';
import * as S from './button.css';

const Button = ({ children, disabled, ...props }) => (
  <S.Button disabled={disabled} {...props}>
    {children}
  </S.Button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
