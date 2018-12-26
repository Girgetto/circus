import React from 'react';
import image from '../../assets/img/Fifth.svg';

const Fifth = () => (
  <div style={{ display: 'flex', padding: '10rem' }}>
    <div className="center" style={{ width: '100%' }}>
      <img src={image} alt="" />
    </div>
    <div className="center" style={{ width: '100%' }}>
      <div>
        <div>
          <ul>
            <li>.</li>
            <li>.</li>
            <li>.</li>
            <li>.</li>
          </ul>
        </div>
        <div>
          <p>text</p>
        </div>
      </div>
    </div>
  </div>
);

export default Fifth;
