import React from 'react';
import PropTypes from 'prop-types';
import * as S from './button.css';

const Button = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.oneOf(['button', 'a']),
  color: PropTypes.oneOf(['black', 'gray', 'orange', 'white']),
  size: PropTypes.oneOf(['normal', 'small']),
  fullSize: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  as: 'button',
  color: 'black',
  size: 'normal',
};

export default Button;
