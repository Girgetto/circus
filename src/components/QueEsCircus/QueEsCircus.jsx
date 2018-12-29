import React from 'react';
import PropTypes from 'prop-types';
import second from '../../assets/img/second.svg';
import MainDiv from './style';

const QueEsCircus = ({ text, margin }) => (
  <MainDiv
    className="translate shadow"
    margin={margin}
    id="queEsCircus"
  >
    <div
      className="translate-child"
      style={{ width: '100%' }}
    >
      <div style={{ margin: '0 3rem' }}>
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
  </MainDiv>
);

QueEsCircus.defaultProps = {
  text: 'Loading',
  margin: '',
};

QueEsCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
  margin: PropTypes.string,
};

export default QueEsCircus;
