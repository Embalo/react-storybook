import React from 'react';
import PropTypes from 'prop-types';
import * as S from './button.css';

const Button = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
