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
            <li onClick={e => this.setColor(e.target.id)} style={{ backgroundColor: `${index === '1' ? '#FFF6C1' : ''}` }}>
              <div id="1" style={{ display: 'flex' }}>
                <img src={first} alt="1" />
                <p>Dia 1 - impartido por Playtomic</p>
              </div>
            </li>
            <li onClick={e => this.setColor(e.target.id)} style={{ backgroundColor: `${index === '2' ? '#FFF6C1' : ''}` }}>
              <div id="2" style={{ display: 'flex' }}>
                <img src={first} alt="2" />
                <p>WeCode & WeDesign - WeWork </p>
              </div>
            </li>
            <li onClick={e => this.setColor(e.target.id)} style={{ backgroundColor: `${index === '3' ? '#FFF6C1' : ''}` }}>
              <div id="3" style={{ display: 'flex' }}>
                <img src={first} alt="3" />
                <p>Topping croissant cookie</p>
              </div>
            </li>
            <li onClick={e => this.setColor(e.target.id)} style={{ backgroundColor: `${index === '4' ? '#FFF6C1' : ''}` }}>
              <div id="4" style={{ display: 'flex' }}>
                <img src={first} alt="4" />
                <p>WeCode</p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="center"
          style={{
            width: '100%', backgroundColor: '#FFF6C1', zIndex: '-1', position: 'relative',
          }}
        >
          <div className="translate-child">
            <h1>
                Prova
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
