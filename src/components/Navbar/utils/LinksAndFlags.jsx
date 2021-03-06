/* eslint-env browser */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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

const flags = { es: { flag: spainFlag, name: 'Spain' }, pt: { flag: portugalFlag, name: 'Portugal' } };
const countryList = [{ name: 'Spain', flag: spainFlag, path: '/es' }, { name: 'Portugal', flag: portugalFlag, path: '/pt' }];

const LinksAndFlags = ({ location, text, setLanguage }) => (
  <MainDiv>
    {text.navbar.map(x => (
      <Item key={x.text}>
        <AnchorLink offset={() => x.offset} href={x.href}>{x.text}</AnchorLink>
      </Item>
    ))}
    <DropDown className="dropdown">
      <img
        style={imgStyle}
        src={flags[location.pathname.replace('/', '')].flag}
        alt=""
      />
      <DropdownContent className="dropdown-content">
        {countryList.map(country => (country.path !== location.pathname ? (
          <Link
            key={country.name}
            to={country.path}
            onClick={
            () => setLanguage(
              country.path.replace('/', ''),
            )}
          >
            <div style={{ display: 'flex' }}>
              <p style={{ padding: '0 0.5rem' }}>
                {country.name}
              </p>
              <img
                src={country.flag}
                alt=""
              />
            </div>
          </Link>
        ) : ''))}
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
  setLanguage: PropTypes.func,
};

LinksAndFlags.propTypes = {
  text: PropTypes.shape({
    navbar1: PropTypes.string,
    navbar2: PropTypes.string,
    navbar3: PropTypes.string,
    navbar4: PropTypes.string,
  }),
  location: PropTypes.shape({}),
  setLanguage: PropTypes.func,
};

export default LinksAndFlags;
