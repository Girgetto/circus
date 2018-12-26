import React from 'react';
import PropTypes from 'prop-types';
import second from '../../assets/img/second.svg';
import './Second.css';

const Second = ({ text }) => (
  <div className="translate" style={{ display: 'flex' }}>
    <div className="translate-child" style={{ width: '100%' }}>
      <p style={{ marginTop: '10rem' }}>
        {text.second}
      </p>
    </div>
    <div style={{ width: '100%' }}>
      <img style={{ width: '100%', backgroundColor: 'blue' }} src={second} alt="" />
    </div>
  </div>
);

Second.defaultProps = {
  text: 'Loading',
};

Second.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default Second;
