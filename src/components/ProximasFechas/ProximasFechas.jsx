/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RightDiv from './utils/RightDiv';
import LeftDiv from './utils/LeftDiv';
import {
  OptionsDiv, MainDiv,
} from './style';


const divHeight = ['45rem', '45rem', '45rem', '45rem', '60rem'];


export default class ProximasFechas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '0',
    };
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    const height = divHeight[0];
    document.getElementById(`description${0}`).style.height = height;
  }

  setColor(index) {
    if (!(index === '') && !(index.includes('description'))) {
      const { text } = this.props;
      text.proximasFechas.forEach((_, i) => {
        document.getElementById(`description${i}`).style.height = '0';
      });

      document.getElementById(`description${index || 0}`).style.height = divHeight[index];
      return index === '' ? '' : this.setState({ index });
    }
    return '';
  }

  render() {
    const { index } = this.state;
    const { text } = this.props;
    return (
      <MainDiv id="proximasFechas" className="translate">
        <OptionsDiv
          className="translate-child"
          onMouseOver={e => this.setColor(e.target.id)}
          role="presentation"
          onKeyDown={this.handleKeyDown}
          onFocus={() => 0}
        >
          <LeftDiv text={text} index={index} this={this} />
        </OptionsDiv>
        <RightDiv text={text} index={index} />
      </MainDiv>
    );
  }
}

ProximasFechas.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
};

ProximasFechas.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
};
