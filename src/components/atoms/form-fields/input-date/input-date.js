import React from 'react';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import * as S from './input-date.css';

registerLocale('pt', pt);

const InputDate = ({ placeholder, disabled, value, ...rest }) => (
  <S.Container disabled={disabled}>
    <S.DatePicker
      locale="pt"
      dateFormat="P"
      placeholderText={placeholder}
      disabled={disabled}
      popperPlacement="top-start"
      selected={value}
      {...rest}
    />
    <S.ButtonIcon />
  </S.Container>
);

InputDate.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.object,
};

export default InputDate;
