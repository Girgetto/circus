import React from 'react';
import PropTypes from 'prop-types';
import red from '../../assets/img/red.svg';
import './SabiasQue.css';


const SabiasQue = ({ text }) => (
  <div style={{ display: 'flex', height: '50rem' }}>
    <div
      className="center"
      style={{ backgroundColor: '#fdc6cb', width: '100%' }}
    >
      <img src={red} alt="red" />
    </div>
    <div style={{
      width: '100%',
    }}
    >
      <div
        style={{ margin: '3rem 6rem' }}
      >
        <h2 style={{ marginBottom: '4rem' }}>{text.sabiasQueTitle}</h2>
        <p style={{ marginBottom: '4rem' }}>{text.sabiasQueDescription}</p>
        <h2 style={{ marginBottom: '4rem' }}>{text.esParaTiTitle}</h2>
        <p>{text.esParaTIDescription}</p>
      </div>
    </div>
  </div>
);

SabiasQue.defaultProps = {
  text: 'Loading',
};

SabiasQue.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default SabiasQue;
