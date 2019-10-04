import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from 'constants/theme';
import * as S from './icons.css';
import notes from './icons.md';

storiesOf('Icons', module).add(
  'Icons',
  () => (
    <S.Container>
      {Object.keys(theme.icons).map(icon => (
        <S.Icon key={icon}>
          <img width="22" src={theme.icons[icon]} alt={icon} />
          <span>{icon}</span>
        </S.Icon>
      ))}
    </S.Container>
  ),
  {
    notes,
  }
);
