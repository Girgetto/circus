import React from 'react';
import circus from '../../assets/img/footerImg/circus.svg';
import ironHackFooter from '../../assets/img/footerImg/ironHackFooter.svg';

const Footer = () => (
  <div
    style={{
      position: 'relative',
      zIndex: '2',
      backgroundColor: '#2D293C',
      color: 'white',
      marginTop: '-5rem',
      height: '20rem',
    }}
    className="center"
  >
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <ul>
          <li><a href="1" style={{ color: 'white' }}>Apply</a></li>
          <li><a href="2" style={{ color: 'white' }}>Work with us</a></li>
          <li><a href="2" style={{ color: 'white' }}>Press</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="1">FAQ</a></li>
          <li><a href="1">Contact</a></li>
          <li><a href="1">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div><img src={circus} alt="" /></div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={ironHackFooter} alt="" />
        <p
          style={{
            color: 'white',
          }}
        >
Powered by ironhack

        </p>
      </div>
    </div>
  </div>
);

export default Footer;
