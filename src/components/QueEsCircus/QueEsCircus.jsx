import React from 'react';
import PropTypes from 'prop-types';
import second from '../../assets/img/second.jpg';
import {
  MainDiv, LeftDiv, Img, RightDiv, H2, TextDiv,
} from './style';

const QueEsCircus = ({ text }) => (
  <MainDiv id="queEsCircus" className="transition">
    <LeftDiv>
      <TextDiv>
        <H2>
          {text.queEsCircusTitle}
        </H2>
        <p>
          {text.queEsCircusDescription}
        </p>
      </TextDiv>
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
