import React from 'react';
import ironHack from '../../assets/img/logos/ironHack.svg';
import campusMadrid from '../../assets/img/logos/campusMadrid.svg';
import cabify from '../../assets/img/logos/cabify.svg';
import opinator from '../../assets/img/logos/opinator.svg';

const Eight = () => (
  <div className="translate center" style={{ height: '20rem' }}>
    <div className="translate-child center">
      <h1>Partners que apoyan Circus.</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={ironHack} alt="" />
        <img src={campusMadrid} alt="" />
        <img src={cabify} alt="" />
        <img src={opinator} alt="" />
      </div>
    </div>
  </div>
);

export default Eight;
