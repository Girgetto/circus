import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.jpg';
import {
  Button, MainDiv, ImgDiv, TextDiv,
  TextBox, MainTitle, MainDescription, Description, Img, ButtonDiv,
} from './style';

const InsideCircus = ({ text, scrollToTop }) => (
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
        <Button type="button" onClick={() => scrollToTop(3100)}>
          {text.insideButton}
        </Button>
      </ButtonDiv>
    </TextDiv>
  </MainDiv>
);

InsideCircus.defaultProps = {
  text: { first: 'Loading' },
  scrollToTop: '',
};

InsideCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
  scrollToTop: PropTypes.func,
};

export default InsideCircus;
