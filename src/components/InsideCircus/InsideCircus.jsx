import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.svg';
import './InsideCircus.css';

const InsideCircus = ({ text }) => (
  <div style={{ display: 'flex', marginBottom: '-4.5rem' }}>
    <div style={{ width: '100%' }}>
      <img
        style={{
          width: '100%',
          backgroundColor: '#F2F2F2',
        }}
        src={first}
        alt=""
      />
    </div>
    <div style={{
      width: '100%',
      backgroundColor: '#F2F2F2',
    }}
    >
      <div style={{ padding: '1rem 2rem' }}>
        <h1
          style={{ paddingTop: '5vh' }}
        >
          {text.first}
        </h1>
        <h3 style={{ paddingTop: '5vh' }}>
          Donde comienza tu transormacion digital
        </h3>
        <p>Da el primer paso</p>
        <button
          type="button"
          style={{
            backgroundColor: '#2D293C',
            color: 'white',
            padding: '1rem 10rem',
            borderRadius: '20px',
            marginTop: '10vh',
          }}
        >
          <a
            href="1"
            style={{ color: 'white' }}
          >
          Ver Fechas
          </a>

        </button>
      </div>
    </div>
  </div>
);

InsideCircus.defaultProps = {
  text: 'Loading',
};

InsideCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default InsideCircus;
