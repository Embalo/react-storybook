import React from 'react';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import * as S from './input-date.css';

registerLocale('pt', pt);

const InputDate = ({ placeholder, ...rest }) => {
  return (
    <S.Container>
      <S.DatePicker
        locale="pt"
        dateFormat="P"
        placeholderText={placeholder}
        {...rest}
      />
      <S.Button />
    </S.Container>
  );
};

InputDate.propTypes = {
  placeholder: PropTypes.string,
};

export default InputDate;
