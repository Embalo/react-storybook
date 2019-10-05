import React from 'react';
import PropTypes from 'prop-types';
import * as S from './template.css';

const Template = ({ children, ...props }) => (
  <S.Template {...props}>{children}</S.Template>
);

Template.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Template;
