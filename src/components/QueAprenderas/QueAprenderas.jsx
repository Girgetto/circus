import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/Fifth.svg';
import {
  MainDiv, ImgDiv, RightDiv, Img, DescriptionDiv, H1,
} from './style';

export default class QueAprenderas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.changer = this.changer.bind(this);
  }

  changer(index = 0) {
    this.setState({ index });
  }

  render() {
    const { index } = this.state;
    const { text } = this.props;
    return (
      <MainDiv>
        <ImgDiv className="center">
          <Img src={image} alt="" />
        </ImgDiv>
        <div style={{ width: '100%' }}>
          <DescriptionDiv>
            <RightDiv>
              <ul>
                {text.fifth.map((x, i) => (
                  <div
                    key={x.title}
                    tabIndex="0"
                    role="button"
                    onClick={() => this.changer(i)}
                    onKeyDown={this.handleKeyDown}
                  >
                    <svg height="50" width="50">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke={`${text.fifth[i].color}`}
                        strokeWidth="1"
                        fill={`${index === i ? text.fifth[i].color : 'white'}`}
                      />
                    </svg>
                  </div>
                ))}
              </ul>
            </RightDiv>
            <div>
              <h2 style={{ marginBottom: '3rem' }}>Que aprendaras</h2>
              <H1
                style={{ color: `${text.fifth[index].color}` }}
              >
                {text.fifth[index].title}
              </H1>
              <p style={{ marginTop: '2rem' }}>{text.fifth[index].description}</p>
            </div>
          </DescriptionDiv>
        </div>
      </MainDiv>
    );
  }
}

QueAprenderas.defaultProps = {
  text: 'Loading',
};

QueAprenderas.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};
