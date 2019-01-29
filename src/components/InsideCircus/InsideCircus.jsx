import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import first from '../../assets/img/first.jpg';
import {
  Button, MainDiv, ImgDiv, TextDiv,
  TextBox, MainTitle, MainDescription, Description, Img, ButtonDiv,
} from './style';

const InsideCircus = ({ text }) => (
  <MainDiv id="insideCircus">
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
          <AnchorLink offset={() => 100} href="#proximasFechas">
            {text.insideButton}
          </AnchorLink>
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
