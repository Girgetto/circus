import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.svg';
import './First.css';

const First = ({ text }) => (
  <div className="translate" style={{ display: 'flex' }}>
    <div style={{ width: '100%' }}>
      <img style={{ width: '100%', backgroundColor: 'blue' }} src={first} alt="" />
    </div>
    <div className="translate-child center" style={{ width: '100%' }}>
      <h1>{text.first}</h1>
      <p>Donde comienza tu transormacion digital</p>
      <p>Da el primer paso</p>
      <button type="button">Ver fechas</button>
    </div>
  </div>
);

First.defaultProps = {
  text: 'Loading',
};

First.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default First;
