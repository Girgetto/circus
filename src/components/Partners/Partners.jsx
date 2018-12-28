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
        <svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 1L1 32.5L25 65.5" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <img src={ironHack} alt="" />
        <img src={campusMadrid} alt="" />
        <img src={cabify} alt="" />
        <img src={opinator} alt="" />
        <svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.49219L25 32.9922L1 65.9922" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </div>
);

export default Eight;
