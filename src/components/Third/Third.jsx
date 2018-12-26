import React from 'react';
import red from '../../assets/img/red.svg';
import './Third.css';

const Third = () => (
  <div style={{ display: 'flex', height: '40rem' }}>
    <div className="center" style={{ backgroundColor: '#fdc6cb', width: '100%' }}>
      <img src={red} alt="red" />
    </div>
    <div className="center" style={{ width: '100%' }}>
      <p>Prova</p>
    </div>
  </div>
);

export default Third;
