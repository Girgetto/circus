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
          <li>Apply</li>
          <li>Work with us</li>
          <li>Press</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
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
        <p>Powered by ironhack</p>
      </div>
    </div>
  </div>
);

export default Footer;
