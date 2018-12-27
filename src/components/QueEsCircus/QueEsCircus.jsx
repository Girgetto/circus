import React from 'react';
import PropTypes from 'prop-types';
import second from '../../assets/img/second.svg';
import './QueEsCircus.css';

const QueEsCircus = ({ text }) => (
  <div
    className="translate"
    style={{
      display: 'flex',
      backgroundColor: '#E8F0FE',
      marginTop: '-4.5rem',
    }}
  >
    <div
      className="translate-child"
      style={{ width: '100%' }}
    >
      <h2 style={{ marginTop: '10rem' }}>
        {text.second}
      </h2>
    </div>
    <div style={{ width: '100%' }}>
      <img
        style={{
          width: '100%',
          backgroundColor: '#E8F0FE',
        }}
        src={second}
        alt=""
      />
    </div>
  </div>
);

QueEsCircus.defaultProps = {
  text: 'Loading',
};

QueEsCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default QueEsCircus;
