import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/Fifth.svg';
import Descriptions from './utils/Descriptions';
import {
  MainDiv, ImgDiv, RightDiv, Img,
  DescriptionDiv, H1, InnerDescription,
  UpperDescriptonDiv, H2, P,
} from './style';

export default class QueAprenderas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.changer = this.changer.bind(this);
  }

  componentDidMount() {
    const { text } = this.props;
    let i = 0;
    setInterval(() => {
      i = i > text.fifth.length - 2 ? 0 : i + 1;
      this.setState({ index: i });
    }, 5000);
  }

  changer(index = 0) {
    this.setState({ index });
  }

  render() {
    const { index } = this.state;
    const { text } = this.props;
    return (
      <MainDiv>
        <ImgDiv>
          <Img src={image} alt="" />
        </ImgDiv>
        <UpperDescriptonDiv>
          <DescriptionDiv>
            <RightDiv>
              <Descriptions text={text} index={index} changer={this.changer} ctx={this} />
            </RightDiv>
            <InnerDescription>
              <H2>Que aprendaras</H2>
              <H1
                style={{ color: `${text.fifth[index].color}` }}
              >
                {text.fifth[index].title}
              </H1>
              <P>{text.fifth[index].description}</P>
            </InnerDescription>
          </DescriptionDiv>
        </UpperDescriptonDiv>
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
