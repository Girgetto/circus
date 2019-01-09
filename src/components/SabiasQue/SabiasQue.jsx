import React from 'react';
import PropTypes from 'prop-types';
import red from '../../assets/img/red.svg';
import {
  MainDiv, ImgDiv, DescriptionDiv, FullDiv, H2, P,
} from './style';


const SabiasQue = ({ text }) => (
  <MainDiv>
    <ImgDiv>
      <img src={red} alt="red" />
    </ImgDiv>
    <FullDiv>
      <DescriptionDiv>
        <H2>{text.sabiasQueTitle}</H2>
        <P>{text.sabiasQueDescription}</P>
        <H2>{text.esParaTiTitle}</H2>
        <P>{text.esParaTIDescription}</P>
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
