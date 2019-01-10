import React from 'react';
import PropTypes from 'prop-types';
import second from '../../assets/img/second.jpg';
import {
  MainDiv, LeftDiv, Img, RightDiv, H2, TextDiv,
} from './style';

const QueEsCircus = ({ text, margin }) => (
  <MainDiv
    id="queEsCircus"
    className="transition"
    style={{
      display: 'flex',
      backgroundColor: '#E8F0FE',
      marginTop: `${(margin < 0 || margin > 15) ? 0 : -margin * 2}rem`,
    }}
  >
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
  margin: '',
};

QueEsCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
  margin: PropTypes.string,
};

export default QueEsCircus;
