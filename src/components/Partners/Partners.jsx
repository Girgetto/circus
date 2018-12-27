import React from 'react';
import ironHack from '../../assets/img/logos/ironHack.svg';
import campusMadrid from '../../assets/img/logos/campusMadrid.svg';
import cabify from '../../assets/img/logos/cabify.svg';
import opinator from '../../assets/img/logos/opinator.svg';

const Eight = () => (
  <div className="translate center" style={{ height: '20rem' }}>
    <div className="translate-child center">
      <h2>Partners que apoyan Circus.</h2>
      <div style={{
        display: 'flex', flexDirection: 'row', marginTop: '5rem', justifyContent: 'space-evenly',
      }}
      >
        <img src={ironHack} alt="" />
        <img src={campusMadrid} alt="" />
        <img src={cabify} alt="" />
        <img src={opinator} alt="" />
      </div>
    </div>
  </div>
);

export default Eight;
