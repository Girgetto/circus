import React, { Component } from 'react';
import first from '../../assets/img/icon/first.svg';

export default class Seventh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '1',
    };
    this.setColor = this.setColor.bind(this);
  }

  setColor(index) {
    this.setState({ index });
  }

  render() {
    const { index } = this.state;
    return (
      <div
        className="translate"
        style={{ display: 'flex', height: '40rem' }}
      >
        <div className="translate-child center" style={{ width: '100%' }}>
          <h1>Proximas fechas</h1>
          <ul style={{ width: '100%', marginLeft: '50%' }}>
            <li style={{ backgroundColor: `${index === '1' ? 'yellow' : ''}` }}>
              <div onClick={e => this.setColor(e.target.alt)} tabIndex="0" role="button" style={{ display: 'flex' }} onKeyDown={this.handleKeyDown}>
                <img src={first} alt="1" />
                <p>1</p>
              </div>
            </li>
            <li style={{ backgroundColor: `${index === '2' ? 'yellow' : ''}` }}>
              <div onClick={e => this.setColor(e.target.alt)} tabIndex="0" role="button" style={{ display: 'flex' }} onKeyDown={this.handleKeyDown}>
                <img src={first} alt="2" />
                <p>1</p>
              </div>
            </li>
            <li style={{ backgroundColor: `${index === '3' ? 'yellow' : ''}` }}>
              <div onClick={e => this.setColor(e.target.alt)} tabIndex="0" role="button" style={{ display: 'flex' }} onKeyDown={this.handleKeyDown}>
                <img src={first} alt="3" />
                <p>1</p>
              </div>
            </li>
            <li style={{ backgroundColor: `${index === '4' ? 'yellow' : ''}` }}>
              <div onClick={e => this.setColor(e.target.alt)} tabIndex="0" role="button" style={{ display: 'flex' }} onKeyDown={this.handleKeyDown}>
                <img src={first} alt="4" />
                <p>1</p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="center"
          style={{
            width: '100%', backgroundColor: 'yellow', zIndex: '-1', position: 'relative',
          }}
        >
          <h1>
      Prova
          </h1>
        </div>
      </div>
    );
  }
}
