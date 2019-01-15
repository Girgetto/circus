import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import spainFlag from '../../../assets/img/flags/spain.svg';
import portugalFlag from '../../../assets/img/flags/portugal.svg';
import {
  DropDown, DropdownContent, MainDiv, Item,
} from '../style';


class LinksAndFlags extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
    this.scrollStep = this.scrollStep.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollStep() {
    // eslint-disable-next-line
    if (window.pageYOffset === 0) {
      // eslint-disable-next-line
      clearInterval(this.state.intervalId);
    }
    // eslint-disable-next-line
    window.scroll(0, 500);
  }

  scrollToTop() {
    const intervalId = setInterval(this.scrollStep, 1);
    this.setState({ intervalId });
  }

  render() {
    const { location, text, getLanguage } = this.props;
    return (
      <MainDiv>
        {/* eslint-disable-next-line */}
        {text.navbar.map(x => (<a key={x} onClick={this.scrollToTop}><Item>{x}</Item></a>))}
        <DropDown className="dropdown">
          <img
            style={{
              paddingTop: '0.7rem',
              marginRight: '10rem',
              padding: '1rem',
            }}
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
