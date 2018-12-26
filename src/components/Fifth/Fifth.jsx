import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/Fifth.svg';
import './Fifth.css';


export default class Fifth extends Component {
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
      <div style={{ display: 'flex', padding: '10rem' }}>
        <div className="center" style={{ width: '100%' }}>
          <img src={image} alt="" />
        </div>
        <div className="center" style={{ width: '100%' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '4rem' }}>
              <ul>
                <div tabIndex="0" role="button" onClick={() => this.changer(0)} onKeyDown={this.handleKeyDown}>⃝</div>
                <div tabIndex="0" role="button" onClick={() => this.changer(1)} onKeyDown={this.handleKeyDown}>⃝</div>
                <div tabIndex="0" role="button" onClick={() => this.changer(2)} onKeyDown={this.handleKeyDown}>⃝</div>
                <div tabIndex="0" role="button" onClick={() => this.changer(3)} onKeyDown={this.handleKeyDown}>⃝</div>
              </ul>
            </div>
            <div>
              <h1>Que aprendaras</h1>
              <p style={{ color: `${text.fifth[index].color}` }}>{text.fifth[index].title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Fifth.defaultProps = {
  text: 'Loading',
};

Fifth.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};
