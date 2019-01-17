/* eslint-env browser */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import spainFlag from '../../../assets/img/flags/spain.svg';
import portugalFlag from '../../../assets/img/flags/portugal.svg';
import {
  DropDown, DropdownContent, MainDiv, Item,
} from '../style';

const scrolls = [450, 1000, 2200, 3100];

const imgStyle = {
  paddingTop: '0.7rem',
  marginRight: '10rem',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
class LinksAndFlags extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
    this.scrollStep = this.scrollStep.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollStep(scroll) {
    const { intervalId } = this.state;
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, scroll);
  }

  scrollToTop(scroll) {
    const intervalId = setInterval(this.scrollStep(scroll), 1);
    this.setState({ intervalId });
  }

  render() {
    const { location, text, getLanguage } = this.props;
    return (
      <MainDiv>
        {/* eslint-disable-next-line */}
        {text.navbar.map((x,i) => (<a key={x} onClick={()=>this.scrollToTop(scrolls[i])}><Item>{x}</Item></a>))}
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
  }
}

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
