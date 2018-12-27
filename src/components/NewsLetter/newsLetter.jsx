import React from 'react';

const newsLetter = () => (
  <div className="translate center" style={{ backgroundColor: 'pink', minHeight: '20rem' }}>
    <div className="translate-child" style={{ display: 'flex', flexDirection: 'row' }}>
      <h1>Suscríbete a la newsletter</h1>
      <input type="text" placeholder="Tu correo electronico" />
      <button type="submit">Suscribirse</button>
    </div>
  </div>
);

export default newsLetter;
