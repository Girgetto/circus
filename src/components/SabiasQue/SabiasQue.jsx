import React from 'react';
import PropTypes from 'prop-types';
import red from '../../assets/img/red.svg';
import {
  MainDiv, ImgDiv, DescriptionDiv, FullDiv,
} from './style';


const SabiasQue = ({ text }) => (
  <MainDiv>
    <ImgDiv>
      <img src={red} alt="red" />
    </ImgDiv>
    <FullDiv>
      <DescriptionDiv>
        <h2 style={{ marginBottom: '4rem' }}>{text.sabiasQueTitle}</h2>
        <p style={{ marginBottom: '4rem' }}>{text.sabiasQueDescription}</p>
        <h2 style={{ marginBottom: '4rem' }}>{text.esParaTiTitle}</h2>
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
