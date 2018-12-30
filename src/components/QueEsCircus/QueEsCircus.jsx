import React from 'react';
import PropTypes from 'prop-types';
import second from '../../assets/img/second.svg';
import {
  MainDiv, LeftDiv, Img, RightDiv,
} from './style';

const QueEsCircus = ({ text, margin }) => (
  <MainDiv margin={margin} id="queEsCircus">
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
  margin: '',
};

QueEsCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
  margin: PropTypes.string,
};

export default QueEsCircus;
