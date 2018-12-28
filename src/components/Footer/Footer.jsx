import React from 'react';
import circus from '../../assets/img/footerImg/circus.svg';
import ironHackFooter from '../../assets/img/footerImg/ironHackFooter.svg';
import './Footer.css';

const Footer = () => (
  <div
    style={{
      position: 'relative',
      zIndex: '2',
      backgroundColor: '#2D293C',
      color: 'white',
      marginTop: '-5rem',
      height: '20rem',
      justifyContent: 'space-around',
    }}
    className="center"
  >
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="box">
        <ul>
          <li><a href="1">Apply</a></li>
          <li><a href="2">Work with us</a></li>
          <li><a href="2">Press</a></li>
        </ul>
      </div>
      <div className="box">
        <ul>
          <li><a href="1">FAQ</a></li>
          <li><a href="1">Contact</a></li>
          <li><a href="1">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="box">
        <ul>
          <li><a href="1">Twitter</a></li>
          <li><a href="1">Facebook</a></li>
          <li><a href="1">Instagram</a></li>
          <li><a href="1">Youtube</a></li>
        </ul>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ padding: '0 10rem' }}>
        <img src={circus} alt="" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={ironHackFooter} style={{ padding: '0 1rem' }} alt="" />
        <p
          style={{
            color: 'white',
            fontWeight: '100',
          }}
        >
Powered by ironhack

        </p>
      </div>
    </div>
  </div>
);

export default Footer;
