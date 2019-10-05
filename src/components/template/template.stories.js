import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from 'components/organisms/sidebar/sidebar';
import Main from 'components/organisms/main/main';
import Logo from 'components/atoms/logo/logo';
import Button from 'components/atoms/button/button';
import InputButton from 'components/atoms/form-fields/input-button/input-button';
import Template from './template';
import notes from './template.md';

storiesOf('Template', module).add(
  'default',
  () => (
    <Template>
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
      <Main>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using Content here,
          content here, making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for lorem ipsum will uncover many web
          sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour
          and the like). Where does it come from? Contrary to popular belief,
          Lorem Ipsum is not simply random text.
        </p>
        <p>
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, Lorem ipsum dolor sit amet., comes from a line in
          section 1.10.32.
        </p>
      </Main>
    </Template>
  ),
  {
    notes,
  }
);
