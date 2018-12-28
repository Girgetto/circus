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
          <li><a href="1" className="footer-a">Apply</a></li>
          <li><a href="1" className="footer-a">Work with us</a></li>
          <li><a href="1" className="footer-a">Press</a></li>
        </ul>
      </div>
      <div className="box">
        <ul>
          <li><a href="1" className="footer-a">FAQ</a></li>
          <li><a href="1" className="footer-a">Contact</a></li>
          <li><a href="1" className="footer-a">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="box">
        <ul>
          <li><a href="1" className="footer-a">Twitter</a></li>
          <li><a href="1" className="footer-a">Facebook</a></li>
          <li><a href="1" className="footer-a">Instagram</a></li>
          <li><a href="1" className="footer-a">Youtube</a></li>
        </ul>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ padding: '0 1rem' }}>
        <img src={circus} alt="" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={ironHackFooter} style={{ padding: '0 1rem' }} alt="" />
        <p
          style={{
            color: 'white',
            fontWeight: '100',
          }}
          className="footer-p"
        >
Powered by ironhack
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
