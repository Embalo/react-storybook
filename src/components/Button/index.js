import React from 'react';
import { Button } from './index.css';

export default ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);
