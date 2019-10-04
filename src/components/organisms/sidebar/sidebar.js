import React from 'react';
import PropTypes from 'prop-types';

import * as S from './sidebar.css';

const Sidebar = ({ children, ...props }) => (
  <S.Sidebar {...props}>{children}</S.Sidebar>
);

Sidebar.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Sidebar;
