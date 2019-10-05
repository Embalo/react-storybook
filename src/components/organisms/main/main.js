import React from 'react';
import PropTypes from 'prop-types';
import * as S from './main.css';

const Main = ({ children, ...props }) => <S.Main {...props}>{children}</S.Main>;

Main.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Main;
