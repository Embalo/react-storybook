import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from 'components/atoms/logo/logo';
import Button from 'components/atoms/button/button';
import InputButton from 'components/atoms/form-fields/input-button/input-button';
import Sidebar from './sidebar';
import notes from './sidebar.md';

storiesOf('Organisms/Sidebar', module).add(
  'Sidebar',
  () => (
    <Sidebar>
      <div style={{ marginBottom: 187 }}>
        <Logo className="teste" />
      </div>
      <nav style={{ marginBottom: 223 }}>
        <Button fullWidth style={{ marginBottom: 132 }}>
          MEU ENVIO
        </Button>
        <Button color="gray" fullWidth style={{ marginBottom: 12 }}>
          painel de pedidos
        </Button>
        <Button color="gray" fullWidth style={{ marginBottom: 12 }}>
          meus pedidos
        </Button>
        <Button color="gray" fullWidth style={{ marginBottom: 12 }}>
          meus destinatários
        </Button>
      </nav>
      <InputButton placeholder="Nº O.S. ou NF" icon="search" />
    </Sidebar>
  ),
  {
    notes,
  }
);
