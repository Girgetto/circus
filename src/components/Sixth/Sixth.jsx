import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Texts from './utils/Texts';
import {
  MainDiv, LeftDiv, CircleDiv,
} from './style';

export default class Sixth extends Component {
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
        className="transition sixth"
      >
        <LeftDiv className="order">
          <Texts text={text} counter={counter} />
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
        </LeftDiv>
      </MainDiv>
    );
  }
}

Sixth.defaultProps = {
  text: {},
};

Sixth.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
};
