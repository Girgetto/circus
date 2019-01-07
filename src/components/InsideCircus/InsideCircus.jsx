import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.jpg';
import {
  Button, MainDiv, ButtonText, ImgDiv, TextDiv,
  TextBox, MainTitle, MainDescription, Description, Img, ButtonDiv,
} from './style';

const InsideCircus = ({ text }) => (
  <MainDiv>
    <ImgDiv>
      <Img src={first} alt="" />
    </ImgDiv>
    <TextDiv>
      <TextBox>
        <MainTitle>{text.first}</MainTitle>
        <MainDescription>{text.insideDescription}</MainDescription>
        <Description>{text.inside3}</Description>
      </TextBox>
      <ButtonDiv>
        <Button type="button">
          <ButtonText href="/">{text.insideButton}</ButtonText>
        </Button>
      </ButtonDiv>
    </TextDiv>
  </MainDiv>
);

InsideCircus.defaultProps = {
  text: { first: 'Loading' },
};

InsideCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default InsideCircus;
