import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ironHack from '../../assets/img/logos/ironHack.svg';
import campusMadrid from '../../assets/img/logos/campusMadrid.svg';
import cabify from '../../assets/img/logos/cabify.svg';
import opinator from '../../assets/img/logos/opinator.svg';
import deliveroo from '../../assets/img/logos/deliverooLogo.png';
import carto from '../../assets/img/logos/CARTO-logo-positive.svg';
import playmotic from '../../assets/img/logos/playtomic_imagotipo_RGB.png';
import bbva from '../../assets/img/logos/bbva.png';
import spotahome from '../../assets/img/logos/spotahome.png';
import eventbrite from '../../assets/img/logos/eventbrite.png';
import {
  Svg, ImgDiv, MainDiv, H2, Img, InnerDiv, ImgContainer, Button,
} from './style';

export default class Partners extends Component {
  constructor() {
    super();
    this.state = {
      photos: [bbva, spotahome, eventbrite, ironHack, campusMadrid, cabify, opinator,
        deliveroo, carto, playmotic],
      animate: false,
    };
  }

  componentDidMount() {
    const seconds = 10;
    setInterval(() => { this.startSlider(); }, seconds * 1000);
  }

  moveToEnd() {
    this.setState({ animate: false });
  }

  moveToHead() {
    this.setState({ animate: true });
  }

  clickMoveTogle() {
    const { animate } = this.state;
    this.setState({ animate: !animate });
  }

  startSlider() {
    const { animate } = this.state;
    this.setState({ animate: !animate });
  }

  render() {
    const { photos, animate } = this.state;
    const animationClasses = (animate ? 'slideLeft' : 'slideRight');
    return (
      <MainDiv
        className="transition center shadow"
      >
        <InnerDiv className="center">
          <H2>Partners que apoyan Circus.</H2>
          <ImgDiv>
            <Button type="button" onClick={() => this.moveToEnd()}>
              <Svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 1L1 32.5L25 65.5" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </Button>
            <ImgContainer onClick={() => { this.clickMoveTogle(); }}>
              {photos.map(image => (
                <Img
                  className={`${animationClasses}`}
                  key={image}
                  src={image}
                  alt=""
                />
              ))}
            </ImgContainer>
            <Button type="button" onClick={() => this.moveToHead()}>
              <Svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.49219L25 32.9922L1 65.9922" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </Button>
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
