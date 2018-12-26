import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import circusLogo from '../../assets/img/circus.svg';
import spainFlag from '../../assets/img/spain.svg';
import portugalFlag from '../../assets/img/portugal.svg';
import './Navbar.css';

const Navbar = ({ text, location, getLanguage }) => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <img src={circusLogo} alt="" />
    <Link to="/">{text.navbar1}</Link>
    <Link to="/">{text.navbar2}</Link>
    <Link to="/">{text.navbar3}</Link>
    <Link to="/">{text.navbar4}</Link>
    <div className="dropdown">
      <img src={location.pathname === '/es' ? spainFlag : portugalFlag} alt="" />
      <div className="dropdown-content">
        <Link to="pt" onClick={() => getLanguage('pt')}>
          <img src={portugalFlag} alt="" />
          Portugues
        </Link>
        <Link to="es" onClick={() => getLanguage('es')}>
          <img src={spainFlag} alt="" />
          Spanish
        </Link>
      </div>
    </div>
  </div>
);

Navbar.defaultProps = {
  text: 'Loading',
  location: {},
  getLanguage: PropTypes.func,
};

Navbar.propTypes = {
  text: PropTypes.shape({
    navbar1: PropTypes.string,
    navbar2: PropTypes.string,
    navbar3: PropTypes.string,
    navbar4: PropTypes.string,
  }),
  location: PropTypes.shape({}),
  getLanguage: PropTypes.func,
};

export default Navbar;
