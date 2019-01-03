import React from 'react';
import PropTypes from 'prop-types';
import ironHack from '../../assets/img/logos/ironHack.svg';
import campusMadrid from '../../assets/img/logos/campusMadrid.svg';
import cabify from '../../assets/img/logos/cabify.svg';
import opinator from '../../assets/img/logos/opinator.svg';
import {
  Svg, ImgDiv, MainDiv, H2,
} from './style';

const photos = [ironHack, campusMadrid, cabify, opinator];

const Partners = () => (
  <MainDiv
    className="translate center shadow"
    style={{ marginTop: '5rem' }}
  >
    <div className="translate-child center">
      <H2 style={{ marginTop: '5rem' }}>Partners que apoyan Circus.</H2>
      <ImgDiv>
        <Svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 1L1 32.5L25 65.5" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
        {photos.map(image => <img key={image} src={image} alt="" />)}
        <Svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.49219L25 32.9922L1 65.9922" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </ImgDiv>
    </div>
  </MainDiv>
);

Partners.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
};

Partners.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
};


export default Partners;
