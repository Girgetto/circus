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
      <Input type="text" placeholder="Tu correo electronico" />
      <Button type="submit">Subscribirse</Button>
    </InnerDiv>
  </MainDiv>
);

export default newsLetter;
