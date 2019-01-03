import React from 'react';
import './Sidenav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import circus from '../../../assets/img/circus.svg';


const closeNav = () => {
  // eslint-disable-next-line
  document.getElementById('mySidenav').style.width = '0';
};

const Sidenav = ({ location, getLanguage }) => (
  <div id="mySidenav" className="sidenav">
    <div style={{ display: 'flex', borderBottom: '1px solid gray', justifyContent: 'space-around' }}>
      <img src={circus} alt="" />
      <Link
        to="/pt"
        onClick={() => getLanguage('pt')}
      >
        <p style={{ padding: '0 0.5rem', textDecoration: `${location.pathname === '/pt' ? 'underline' : ''}` }}>PT</p>
      </Link>
      <Link
        to="/es"
        onClick={() => getLanguage('es')}
      >
        <p style={{ padding: '0 0.5rem', textDecoration: `${location.pathname === '/es' ? 'underline' : ''}` }}>ES</p>
      </Link>
      <button type="button" href="/" onClick={closeNav}>
        &times;
      </button>
    </div>
    <a href="/">Que es Circus</a>
    <a href="/">Services</a>
    <a href="/">Clients</a>
    <a href="/">Contact</a>
  </div>
);

Sidenav.defaultProps = {
  location: {
    navbar1: 'Loading',
    navbar2: 'Loading',
    navbar3: 'Loading',
    navbar4: 'Loading',
  },
  getLanguage: PropTypes.func,
};

Sidenav.propTypes = {
  location: PropTypes.shape({}),
  getLanguage: PropTypes.func,
};

export default Sidenav;
