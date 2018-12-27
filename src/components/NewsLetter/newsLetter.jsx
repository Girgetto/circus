import React from 'react';

const newsLetter = () => (
  <div
    className="translate center"
    style={{
      backgroundColor: '#F5C8CD',
      minHeight: '20rem',
      marginTop: '10rem',
    }}
  >
    <div
      className="translate-child"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <h2>Suscríbete a la newsletter</h2>
      <input type="text" placeholder="Tu correo electronico" />
      <button type="submit">Suscribirse</button>
    </div>
  </div>
);

export default newsLetter;
