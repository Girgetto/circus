import React from 'react';
import PropTypes from 'prop-types';
import second from '../../assets/img/second.svg';
import './QueEsCircus.css';

const QueEsCircus = ({ text, margin }) => (
  <div
    className="translate shadow"
    style={{
      display: 'flex',
      backgroundColor: '#E8F0FE',
      marginTop: `-${margin}rem`,
    }}
  >
    <div
      className="translate-child"
      style={{ width: '100%' }}
    >
      <div
        style={{ margin: '0 3rem' }}
      >
        <h2 style={{ marginTop: '10rem', marginBottom: '8rem' }}>
          {text.queEsCircusTitle}
        </h2>
        <p>
          {text.queEsCircusDescription}
        </p>
      </div>
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
  margin: '-4.5rem',
};

QueEsCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
  margin: PropTypes.string,
};

export default QueEsCircus;
