import React from 'react';
import { Input, MainDiv } from './style';

const newsLetter = () => (
  <MainDiv
    className="translate center"
    style={{
      backgroundColor: '#F5C8CD',
      minHeight: '20rem',
      width: '100%',
    }}
  >
    <div
      className="translate-child"
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >

      <h2
        style={{ fontWeight: '400' }}
      >
Suscríbete a la newsletter

      </h2>
      <Input type="text" defaultValue="Tu correo electronico" />
      <button
        style={{
          backgroundColor: '#2D293C',
          borderRadius: '20px',
          padding: '1rem 6rem',
        }}
        type="submit"
      >
        <p style={{ color: '#FFF' }}>Subscribirse</p>
      </button>
    </div>
  </MainDiv>
);

export default newsLetter;
