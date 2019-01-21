import React from 'react';
import PropTypes from 'prop-types';
import {
  MainDiv, InnerDiv, P, GrayP, TextDiv,
} from './style';


const Texts = ({ text, counter }) => (
  <MainDiv>
    <InnerDiv>
      <svg width="62" height="41" viewBox="0 0 62 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M47.668 13.6C55.148 13.6 61.2 19.72 61.2 27.2C61.2 34.68 55.08 40.8 47.6 40.8C40.12 40.8 34 34.68 34 27.2C34 12.172 46.172 4.8542e-05 61.2 4.8542e-05C61.2 4.8542e-05 52.292 3.33205 47.668 13.6ZM27.2 27.2C27.2 34.68 21.08 40.8 13.6 40.8C6.12 40.8 0 34.68 0 27.2C0 12.172 12.172 4.8542e-05 27.2 4.8542e-05C27.2 4.8542e-05 18.292 3.33205 13.668 13.6C21.148 13.6 27.2 19.72 27.2 27.2Z" fill="#2D293C" />
      </svg>
      <TextDiv>
        <P>
          {text.fourthText[counter]}
        </P>
        <svg style={{ float: 'right' }} width="56" height="41" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.3378 27.2C5.5178 27.2 -0.000196409 21.08 -0.000196409 13.6C-0.000196409 6.12 5.5798 0 12.3998 0C19.2198 0 24.7998 6.12 24.7998 13.6C24.7998 28.628 13.7018 40.8 -0.000196409 40.8C-0.000196409 40.8 8.1218 37.468 12.3378 27.2ZM30.9998 13.6C30.9998 6.12 36.5798 0 43.3998 0C50.2198 0 55.7998 6.12 55.7998 13.6C55.7998 28.628 44.7018 40.8 30.9998 40.8C30.9998 40.8 39.1218 37.468 43.3378 27.2C36.5178 27.2 30.9998 21.08 30.9998 13.6Z" fill="#2D293C" />
        </svg>
        <GrayP>
          {text.fourthCit}
        </GrayP>
      </TextDiv>
    </InnerDiv>
  </MainDiv>
);

Texts.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
  counter: 0,
};

Texts.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
  counter: PropTypes.number,
};

export default Texts;
