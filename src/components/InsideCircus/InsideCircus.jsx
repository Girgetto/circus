import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.svg';

const InsideCircus = ({ text }) => (
  <div style={{ display: 'flex', marginBottom: '-4.5rem' }}>
    <div style={{ width: '100%' }}>
      <img
        style={{
          width: '100%',
        }}
        src={first}
        alt=""
      />
    </div>
    <div style={{
      width: '100%',
    }}
    >
      <div style={{ padding: '1rem 2rem' }}>
        <h1
          style={{ paddingTop: '5vh' }}
        >
          {text.first}
        </h1>
        <h3 style={{ paddingTop: '5vh', paddingBottom: '2rem' }}>
          {text.insideDescription}
        </h3>
        <p>{text.inside3}</p>
        <button
          type="button"
          style={{
            backgroundColor: '#2D293C',
            color: 'white',
            padding: '2rem 10rem',
            borderRadius: '20px',
            marginTop: '10vh',
            fontWeight: '500',
          }}
        >
          <a
            href="1"
            style={{ color: 'white' }}
          >
            {text.insideButton}
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
