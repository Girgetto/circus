import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/Fifth.svg';

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
      <div style={{ display: 'flex', padding: '10rem 5rem' }}>
        <div className="center" style={{ width: '100%' }}>
          <img src={image} alt="" />
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '3rem' }}>
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
            </div>
            <div style={{ maxWidth: '23rem', maxHeight: '10rem' }}>
              <h2>Que aprendaras</h2>
              <h1
                style={{ color: `${text.fifth[index].color}` }}
              >
                {text.fifth[index].title}
              </h1>
              <p>{text.fifth[index].description}</p>
            </div>
          </div>
        </div>
      </div>
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
