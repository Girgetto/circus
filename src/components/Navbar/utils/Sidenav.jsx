/* eslint-env browser */
import React, { Component } from 'react';
import './Sidenav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import circus from '../../../assets/img/circus.svg';
import { Item } from '../style';

const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0';
};

const scrolls = [600, 1300, 2800, 3900];

class Sidenav extends Component {
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
    closeNav();
    const intervalId = setInterval(this.scrollStep(scroll), 1);
    this.setState({ intervalId });
  }

  render() {
    const { location, text, getLanguage } = this.props;
    return (
      <div id="mySidenav" className="sidenav">
        <div style={{
          display: 'flex',
          borderBottom: '1px solid gray',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        >
          <img src={circus} alt="" />
          <Link
            to="/pt"
            onClick={() => getLanguage('pt')}
          >
            <p
              style={{
                padding: '0 0.5rem',
                textDecoration: `${location.pathname === '/pt' ? 'underline' : ''}`,
              }}
            >
PT

            </p>
          </Link>
          <Link
            to="/es"
            onClick={() => getLanguage('es')}
          >
            <p
              style={{
                padding: '0 0.5rem',
                textDecoration: `${location.pathname === '/es' ? 'underline' : ''}`,
              }}
            >
ES

            </p>
          </Link>
          <button
            type="button"
            href="/"
            onClick={closeNav}
            style={{
              fontSize: '5vh',
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
        &times;
          </button>
        </div>
        {/* eslint-disable-next-line */}
        {text.navbar.map((x,i) => <a key={x} onClick={()=>this.scrollToTop(scrolls[i])}><Item>{x}</Item></a>)}
      </div>
    );
  }
}

Sidenav.defaultProps = {
  location: {
    navbar1: 'Loading',
    navbar2: 'Loading',
    navbar3: 'Loading',
    navbar4: 'Loading',
  },
  getLanguage: PropTypes.func,
  text: {},
};

Sidenav.propTypes = {
  location: PropTypes.shape({}),
  getLanguage: PropTypes.func,
  text: PropTypes.shape({}),
};

export default Sidenav;
