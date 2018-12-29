import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.svg';
import {
  Button, MainDiv, ButtonText, ImgDiv, TextDiv, TextBox, MainTitle, MainDescription, Description,
} from './style';

const InsideCircus = ({ text }) => (
  <MainDiv>
    <ImgDiv>
      <img
        style={{ width: '100%' }}
        src={first}
        alt=""
      />
    </ImgDiv>
    <TextDiv>
      <TextBox>
        <MainTitle>{text.first}</MainTitle>
        <MainDescription>{text.insideDescription}</MainDescription>
        <Description>{text.inside3}</Description>
        <Button type="button">
          <ButtonText href="/">{text.insideButton}</ButtonText>
        </Button>
      </TextBox>
    </TextDiv>
  </MainDiv>
);

InsideCircus.defaultProps = {
  text: 'Loading',
};

InsideCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default InsideCircus;
