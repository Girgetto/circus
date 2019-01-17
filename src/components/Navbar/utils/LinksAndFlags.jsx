/* eslint-env browser */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import spainFlag from '../../../assets/img/flags/spain.svg';
import portugalFlag from '../../../assets/img/flags/portugal.svg';
import {
  DropDown, DropdownContent, MainDiv, Item,
} from '../style';


const imgStyle = {
  paddingTop: '0.7rem',
  marginRight: '10rem',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const LinksAndFlags = ({ location, text, getLanguage }) => (
  <MainDiv>
    {text.navbar.map(x => (<Item key={x}><a href="#queEsCircus">{x}</a></Item>))}
    <DropDown className="dropdown">
      <img
        style={imgStyle}
        src={
      location.pathname === '/es' ? spainFlag : portugalFlag}
        alt=""
      />
      <DropdownContent className="dropdown-content">
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
              src={location.pathname === '/es' ? portugalFlag : spainFlag}
              alt=""
            />
          </div>
        </Link>
      </DropdownContent>
    </DropDown>
  </MainDiv>
);


LinksAndFlags.defaultProps = {
  text: 'Loading',
  location: {
    navbar1: 'Loading',
    navbar2: 'Loading',
    navbar3: 'Loading',
    navbar4: 'Loading',
  },
  getLanguage: PropTypes.func,
};

LinksAndFlags.propTypes = {
  text: PropTypes.shape({
    navbar1: PropTypes.string,
    navbar2: PropTypes.string,
    navbar3: PropTypes.string,
    navbar4: PropTypes.string,
  }),
  location: PropTypes.shape({}),
  getLanguage: PropTypes.func,
};

export default LinksAndFlags;
