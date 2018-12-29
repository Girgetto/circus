import React from 'react';
import { Input, MainDiv, Button } from './style';

const newsLetter = () => (
  <MainDiv className="translate center">
    <div
      className="translate-child"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <h2 style={{ fontWeight: '400' }}>Suscríbete a la newsletter</h2>
      <Input type="text" defaultValue="Tu correo electronico" />
      <Button type="submit">
        <p style={{ color: '#FFF' }}>Subscribirse</p>
      </Button>
    </div>
  </MainDiv>
);

export default newsLetter;
