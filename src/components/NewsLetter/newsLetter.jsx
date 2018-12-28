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
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >

      <h2>Suscríbete a la newsletter</h2>
      <input
        type="text"
        placeholder="Tu correo electronico"
        style={{
          backgroundColor: '#F5C8CD',
          borderBottom: '2px solid black',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          height: '2rem',
          width: '20rem',
          margin: '0 3rem',
        }}
      />
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
  </div>
);

export default newsLetter;
