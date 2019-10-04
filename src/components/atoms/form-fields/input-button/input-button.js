import React from 'react';
import PropTypes from 'prop-types';
import theme from 'constants/theme';
import * as S from './input-button.css';

let InputButtonValue;

const InputButton = ({ onClick, onChange, icon, disabled, ...rest }) => (
  <S.Container>
    <S.InputButton
      onChange={value => {
        onChange && onChange(value);
        InputButtonValue = value;
      }}
      disabled={disabled}
      {...rest}
    />
    <S.Button
      as="button"
      type="button"
      onClick={() => onClick && onClick(InputButtonValue)}
      icon={icon}
      disabled={disabled}
    />
  </S.Container>
);

InputButton.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  icon: PropTypes.oneOf(Object.keys(theme.icons)).isRequired,
  disabled: PropTypes.bool,
};

export default InputButton;
