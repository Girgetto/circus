import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import circusLogo from '../../assets/img/circus.svg';
import spainFlag from '../../assets/img/spain.svg';
import portugalFlag from '../../assets/img/portugal.svg';
import './Navbar.css';

export default class Navbar extends Component {
  componentWillMount() {
    const { getLanguage, location } = this.props;
    getLanguage(location.pathname.replace('/', ''));
  }

  render() {
    const { text, location, getLanguage } = this.props;
    return (
      <div style={{
        position: 'relative',
        display: 'flex',
        zIndex: '1',
        padding: '1.75rem 0',
        justifyContent: 'space-evenly',
      }}
      >
        <img src={circusLogo} alt="" />
        <div>
          <Link to="/">{text.navbar1}</Link>
          <Link to="/">{text.navbar2}</Link>
          <Link to="/">{text.navbar3}</Link>
          <Link to="/">{text.navbar4}</Link>
          <div className="dropdown">
            <img
              style={{ paddingTop: '0.7rem' }}
              src={
            location.pathname === '/es' ? spainFlag : portugalFlag}
              alt=""
            />
            <div className="dropdown-content">
              <Link
                to={`${location.pathname === '/es' ? '/pt' : '/es'}`}
                onClick={
                () => getLanguage(
                  location.pathname.replace('/', '') === 'es' ? 'pt' : 'es',
                )}
              >
                <div style={{ display: 'flex' }}>
                  <p style={{ padding: '0 0.5rem' }}>
                    {location.pathname === '/es' ? 'Portugal' : 'Spain'}
                  </p>
                  <img
                    src={
                  location.pathname === '/es' ? portugalFlag : spainFlag
                  }
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
