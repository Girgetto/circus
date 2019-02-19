import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ironHack from '../../assets/img/logos/ironHack.svg';
import campusMadrid from '../../assets/img/logos/campusMadrid.svg';
import cabify from '../../assets/img/logos/cabify.svg';
import opinator from '../../assets/img/logos/opinator.svg';
import deliveroo from '../../assets/img/logos/deliverooLogo.png';
import carto from '../../assets/img/logos/CARTO-logo-positive.svg';
import playmotic from '../../assets/img/logos/playtomic_imagotipo_RGB.png';
// import bbva from '../../assets/img/logos/bbva.png';
// import spotahome from '../../assets/img/logos/spotahome.png';
// import eventbrite from '../../assets/img/logos/eventbrite.png';
import elReferente from '../../assets/img/logos/elReferente.svg';
import comunicacion from '../../assets/img/logos/comunicacion.svg';
import whatsNew from '../../assets/img/logos/whatsNew.svg';
import mkm from '../../assets/img/logos/mkm.svg';
import {
  ImgDiv, MainDiv, H2, Img, InnerDiv, ImgContainer,
} from './style';

export default class Partners extends Component {
  constructor() {
    super();
    this.state = {
      photos: [
        ironHack, campusMadrid, cabify, opinator,
        deliveroo, carto, playmotic],
      photosBottom: [
        elReferente, comunicacion, whatsNew, mkm,
      ],
    };
  }

  render() {
    const { photos, photosBottom } = this.state;
    return (
      <MainDiv
        className="transition center shadow"
      >
        <InnerDiv className="center">
          <H2>Partners que apoyan Circus</H2>
          <ImgDiv>
            <ImgContainer>
              {photos.map(image => (
                <Img
                  key={image}
                  src={image}
                  alt=""
                />
              ))}
            </ImgContainer>
          </ImgDiv>
          <H2>Media Partners</H2>
          <ImgDiv>
            <ImgContainer>
              {photosBottom.map((image, i) => (
                <a key={image} href={i === 2 ? 'https://wwwhatsnew.com/' : '#partners'}>
                  <Img
                    src={image}
                    alt=""
                  />
                </a>
              ))}
            </ImgContainer>
          </ImgDiv>
        </InnerDiv>
      </MainDiv>
    );
  }
}

Partners.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
};

Partners.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
};
