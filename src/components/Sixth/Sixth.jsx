import React from 'react';
import face from '../../assets/img/face.svg';
import './Sixth.css';

const Sixth = () => (
  <div className="translate" style={{ display: 'flex', backgroundColor: 'green' }}>
    <div className="translate-child center" style={{ width: '100%' }}>Priova</div>
    <div style={{ width: '100%' }}>
      <img src={face} alt="" />
    </div>
  </div>
);

export default Sixth;
