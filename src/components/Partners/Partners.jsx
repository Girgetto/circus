import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ironHack from '../../assets/img/logos/ironHack.svg';
import campusMadrid from '../../assets/img/logos/campusMadrid.svg';
import cabify from '../../assets/img/logos/cabify.svg';
import opinator from '../../assets/img/logos/opinator.svg';
import deliveroo from '../../assets/img/logos/deliverooLogo.png';
import {
  Svg, ImgDiv, MainDiv, H2, Img, InnerDiv,
} from './style';

export default class Partners extends Component {
  constructor() {
    super();
    this.state = {
      photos: [ironHack, campusMadrid, cabify, opinator, deliveroo],
    };
  }

  moveToEnd() {
    const { photos } = this.state;
    photos.push(photos.shift());
    this.setState({ photos });
  }

  moveToHead() {
    const { photos } = this.state;
    photos.unshift(photos.pop());
    this.setState({ photos });
  }

  render() {
    const { margin } = this.props;
    const { photos } = this.state;
    return (
      <MainDiv
        className="transition center shadow"
        style={{
          marginTop: `${margin < 41 ? -2 : (-margin + 30)}rem`,
        }}
      >
        <InnerDiv className="center">
          <H2>Partners que apoyan Circus.</H2>
          <ImgDiv>
            <button style={{ padding: 0, cursor: 'pointer' }} type="button" onClick={() => this.moveToEnd()}>
              <Svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 1L1 32.5L25 65.5" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </button>
            {photos.map((image, i) => (i < 4 ? <Img key={image} src={image} alt="" /> : ''))}
            <button style={{ padding: 0, cursor: 'pointer' }} type="button" onClick={() => this.moveToHead()}>
              <Svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.49219L25 32.9922L1 65.9922" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </button>
          </ImgDiv>
        </InnerDiv>
      </MainDiv>
    );
  }
}

Partners.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
  margin: '',
};

Partners.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
  margin: PropTypes.string,
};
