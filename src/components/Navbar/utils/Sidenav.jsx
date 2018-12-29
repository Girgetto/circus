import React from 'react';
import './Sidenav.css';

const closeNav = () => {
  // eslint-disable-next-line
  document.getElementById('mySidenav').style.width = '0';
};

const Sidenav = () => (
  <div id="mySidenav" className="sidenav">
    <button type="button" href="/" className="closebtn" onClick={closeNav}>
      &times;adsfdsa
    </button>
    <a href="/">About</a>
    <a href="/">Services</a>
    <a href="/">Clients</a>
    <a href="/">Contact</a>
  </div>
);

export default Sidenav;
