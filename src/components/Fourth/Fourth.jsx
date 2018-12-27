import React from 'react';
import fourth from '../../assets/img/fourth.svg';

const Fourth = () => (
  <div
    className="translate"
    style={{
      backgroundColor: '#E8F0FE',
      display: 'flex',
      marginTop: '-4.5rem',
    }}
  >
    <div className="center" style={{ width: '100%' }}>
      <img
        style={{
          width: '100%',
          backgroundColor: '#E8F0FE',
        }}
        src={fourth}
        alt=""
      />
    </div>
    <div
      className="translate-child center"
      style={{ width: '100%' }}
    >
      <p>Prova</p>
    </div>
  </div>
);

export default Fourth;
