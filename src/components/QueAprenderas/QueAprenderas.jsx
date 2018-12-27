import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/Fifth.svg';
import './QueAprenderas.css';


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
      <div style={{ display: 'flex', padding: '10rem' }}>
        <div className="center" style={{ width: '100%' }}>
          <img src={image} alt="" style={{ maxWidth: '50%' }} />
        </div>
        <div className="center" style={{ width: '100%' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '4rem' }}>
              <ul>
                <div
                  style={{ color: 'red', margin: '1rem 0' }}
                  tabIndex="0"
                  role="button"
                  onClick={() => this.changer(0)}
                  onKeyDown={this.handleKeyDown}
                >
                  <svg height="50" width="50">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke={`${text.fifth[0].color}`}
                      strokeWidth="1"
                      fill={`${index === 0 ? text.fifth[0].color : 'white'}`}
                    />
                  </svg>
                </div>
                <div
                  style={{ color: 'green', margin: '1rem 0' }}
                  tabIndex="0"
                  role="button"
                  onClick={() => this.changer(1)}
                  onKeyDown={this.handleKeyDown}
                >
                  <svg height="50" width="50">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke={`${text.fifth[1].color}`}
                      strokeWidth="1"
                      fill={`${index === 1 ? text.fifth[1].color : 'white'}`}
                    />
                  </svg>
                </div>
                <div
                  style={{ color: 'blue', margin: '1rem 0' }}
                  tabIndex="0"
                  role="button"
                  onClick={() => this.changer(2)}
                  onKeyDown={this.handleKeyDown}
                >
                  <svg height="50" width="50">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke={`${text.fifth[2].color}`}
                      strokeWidth="1"
                      fill={`${index === 2 ? text.fifth[2].color : 'white'}`}
                    />
                  </svg>
                </div>
                <div
                  style={{ color: 'pink', margin: '1rem 0' }}
                  tabIndex="0"
                  role="button"
                  onClick={() => this.changer(3)}
                  onKeyDown={this.handleKeyDown}
                >
                  <svg height="50" width="50">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke={`${text.fifth[3].color}`}
                      strokeWidth="1"
                      fill={`${index === 3 ? text.fifth[3].color : 'white'}`}
                    />
                  </svg>

                </div>
                <div
                  style={{ color: 'pink', margin: '1rem 0' }}
                  tabIndex="0"
                  role="button"
                  onClick={() => this.changer(4)}
                  onKeyDown={this.handleKeyDown}
                >
                  <svg height="50" width="50">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke={`${text.fifth[4].color}`}
                      strokeWidth="1"
                      fill={`${index === 4 ? text.fifth[4].color : 'white'}`}
                    />
                  </svg>

                </div>
              </ul>
            </div>
            <div>
              <h2>Que aprendaras</h2>
              <p
                style={{ color: `${text.fifth[index].color}` }}
              >
                {text.fifth[index].title}

              </p>
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
