import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.svg';
import './InsideCircus.css';

const InsideCircus = ({ text }) => (
  <div style={{ display: 'flex' }}>
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
        <h1>{text.first}</h1>
        <p>Donde comienza tu transormacion digital</p>
        <p>Da el primer paso</p>
        <button
          type="button"
          style={{
            backgroundColor: '#2D293C',
            color: 'white',
            padding: '1rem 10rem',
            borderRadius: '20px',
          }}
        >
  Ver fechas

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
