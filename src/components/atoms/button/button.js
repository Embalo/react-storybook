import React from 'react';
import PropTypes from 'prop-types';
import { Component } from './button.css';

const Button = ({ children, disabled, ...props }) => (
  <Component disabled={disabled} {...props}>
    {children}
  </Component>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
