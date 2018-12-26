import React from 'react';
import fourth from '../../assets/img/fourth.svg';

const Fourth = () => (
  <div className="translate" style={{ backgroundColor: 'red', display: 'flex', marginTop: '-4.5rem' }}>
    <div className="translate-child center" style={{ width: '100%' }}>
      <img style={{ width: '100%' }} src={fourth} alt="" />
    </div>
    <div className="center" style={{ width: '100%' }}>
      Prova
    </div>
  </div>
);

export default Fourth;
