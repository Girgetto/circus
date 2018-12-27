import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.svg';
import './First.css';

const First = ({ text }) => (
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
    <div className="center" style={{ width: '100%', backgroundColor: '#F2F2F2' }}>
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
