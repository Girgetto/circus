import React from 'react';
import PropTypes from 'prop-types';
import second from '../../assets/img/second.jpg';
import {
  MainDiv, LeftDiv, Img, RightDiv,
} from './style';

const QueEsCircus = ({ text }) => (
  <MainDiv id="queEsCircus">
    <LeftDiv style={{ width: '100%' }}>
      <div style={{ margin: '0 3rem' }}>
        <h2 style={{ marginTop: '10rem', marginBottom: '8rem' }}>
          {text.queEsCircusTitle}
        </h2>
        <p>
          {text.queEsCircusDescription}
        </p>
      </div>
    </LeftDiv>
    <RightDiv>
      <Img src={second} alt="" />
    </RightDiv>
  </MainDiv>
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
