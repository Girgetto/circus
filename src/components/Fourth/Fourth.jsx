import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Texts from './utils/Texts';
import {
  CircleDiv, MainDiv, Img, LeftDiv, RightDiv,
} from './style';
import francisco from '../../assets/img/testimonials/Francisco.png';
import xue from '../../assets/img/testimonials/Xue.png';
import javier from '../../assets/img/testimonials/Javier.png';

const partners = [javier, xue, francisco];
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
      <MainDiv
        className="transition"
      >
        <LeftDiv>
          <Img src={partners[counter]} alt="" />
        </LeftDiv>
        <RightDiv>
          <Texts text={text} counter={counter} />
          <div className="center" style={{ flexDirection: 'row', marginTop: '4rem' }}>
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
