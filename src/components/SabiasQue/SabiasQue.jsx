import React from 'react';
import PropTypes from 'prop-types';
import red from '../../assets/img/red.svg';
import {
  MainDiv, ImgDiv, DescriptionDiv, FullDiv,
} from './style';

const margin = { marginBottom: '4rem' };

const SabiasQue = ({ text }) => (
  <MainDiv id="porQueCircus">
    <ImgDiv>
      <img src={red} alt="red" />
    </ImgDiv>
    <FullDiv>
      <DescriptionDiv>
        <h2 style={margin}>{text.sabiasQueTitle}</h2>
        <p style={margin}>{text.sabiasQueDescription}</p>
        <h2 style={margin}>{text.esParaTiTitle}</h2>
        <p>{text.esParaTIDescription}</p>
      </DescriptionDiv>
    </FullDiv>
  </MainDiv>
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
