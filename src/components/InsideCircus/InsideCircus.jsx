import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.jpg';
import {
  Button, MainDiv, ButtonText, ImgDiv, TextDiv,
  TextBox, MainTitle, MainDescription, Description, Img,
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button type="button">
          <ButtonText href="/">{text.insideButton}</ButtonText>
        </Button>
      </div>
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
