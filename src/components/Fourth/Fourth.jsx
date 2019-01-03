import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fourth from '../../assets/img/fourth.jpg';
import { CircleDiv, MainDiv, Img, LeftDiv, RightDiv } from './style';

export default class Fourth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    const { text } = this.props;
    let i = 0;
    setInterval(() => {
      i = i > text.fourthText.length - 2 ? 0 : i + 1;
      this.setState({ counter: i });
    }, 5000);
  }

  render() {
    const { counter } = this.state;
    const { text } = this.props;
    return (
      <MainDiv>
        <LeftDiv>
          <Img src={fourth} alt="" />
        </LeftDiv>
        <RightDiv style={{ width: '100%' }}>
          <div style={{ margin: '10rem 0.5rem' }}>
            <svg width="62" height="41" viewBox="0 0 62 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M47.668 13.6C55.148 13.6 61.2 19.72 61.2 27.2C61.2 34.68 55.08 40.8 47.6 40.8C40.12 40.8 34 34.68 34 27.2C34 12.172 46.172 4.8542e-05 61.2 4.8542e-05C61.2 4.8542e-05 52.292 3.33205 47.668 13.6ZM27.2 27.2C27.2 34.68 21.08 40.8 13.6 40.8C6.12 40.8 0 34.68 0 27.2C0 12.172 12.172 4.8542e-05 27.2 4.8542e-05C27.2 4.8542e-05 18.292 3.33205 13.668 13.6C21.148 13.6 27.2 19.72 27.2 27.2Z" fill="#2D293C" />
            </svg>
            <div style={{ margin: '0 4rem' }}>
              <p>
                {text.fourthText[counter]}
              </p>
              <p
                style={{ color: 'grey', fontSize: '1rem', fontWeight: '400' }}
              >
                {text.fourthCit}
              </p>
              <div style={{ float: 'right' }}>
                <svg width="56" height="41" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.3378 27.2C5.5178 27.2 -0.000196409 21.08 -0.000196409 13.6C-0.000196409 6.12 5.5798 0 12.3998 0C19.2198 0 24.7998 6.12 24.7998 13.6C24.7998 28.628 13.7018 40.8 -0.000196409 40.8C-0.000196409 40.8 8.1218 37.468 12.3378 27.2ZM30.9998 13.6C30.9998 6.12 36.5798 0 43.3998 0C50.2198 0 55.7998 6.12 55.7998 13.6C55.7998 28.628 44.7018 40.8 30.9998 40.8C30.9998 40.8 39.1218 37.468 43.3378 27.2C36.5178 27.2 30.9998 21.08 30.9998 13.6Z" fill="#2D293C" />
                </svg>
              </div>
            </div>
          </div>
          <div className="center" style={{ flexDirection: 'row' }}>
            {text.fourthText.map((x, i) => (
              <CircleDiv key={x}>
                <svg className="circle" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity={counter === i ? '' : '0.1'}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                    fill="#414141"
                  />
                </svg>
              </CircleDiv>
            ))}
          </div>
        </RightDiv>
      </MainDiv>
    );
  }
}

Fourth.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
};

Fourth.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
};
