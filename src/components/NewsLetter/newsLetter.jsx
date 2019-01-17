import React from 'react';
import {
  Input, MainDiv, Button, InnerDiv, H2,
} from './style';

const newsLetter = () => (
  <MainDiv className="translate center">
    <InnerDiv className="translate-child">
      <H2 style={{
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
      >
Suscríbete a la newsletter

      </H2>
      <Input type="text" placeholder="Tu correo electrónico" />
      <Button type="submit">Suscribirse</Button>
    </InnerDiv>
  </MainDiv>
);

export default newsLetter;
