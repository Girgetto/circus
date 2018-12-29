import React, { Component } from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/icon/first.svg';
import { RightDiv, Button } from './style';

export default class ProximasFechas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '0',
    };
    this.setColor = this.setColor.bind(this);
  }

  setColor(index) {
    return index === '' ? '' : this.setState({ index });
  }

  render() {
    const { index } = this.state;
    const { text } = this.props;
    return (
      <div
        className="translate"
        style={{ display: 'flex', height: '40rem' }}
      >
        <div
          className="translate-child center"
          style={{ width: '100%' }}
          onClick={e => this.setColor(e.target.id)}
          role="presentation"
          onKeyDown={this.handleKeyDown}

        >
          <h2 style={{ marginBottom: '3rem' }}>Próximas fechas</h2>
          <ul style={{ width: '100%', marginLeft: '50%' }}>
            {text.proximasFechas.map((x, i) => (
              <li key={x}>
                <div id={i} style={{ display: 'flex' }}>
                  <img src={first} alt="1" style={{ marginRight: '2rem' }} />
                  <div style={{
                    flexDirection: 'column',
                    backgroundColor: `${index === `${i}` ? '#FFF6C1' : ''}`,
                    width: '100%',
                  }}
                  >
                    <p id={i}>{x}</p>
                    <p id={i}>WeCode</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <RightDiv className="center">
          <div className="translate-child">
            <div style={{ margin: '2rem 4rem' }}>
              <p style={{ color: 'gray' }}>15-16 Diciembre - 10 hrs.</p>
              <h2>
                {text.proximasFechas[index]}
              </h2>
              <p>
  Workshop impartido por Playtomic donde nos contaran como trabajan sus
              equipos de diseño, desarollo para evolucionar su startup
              </p>
              <Button type="button">
                Aplicar
              </Button>
            </div>
          </div>
        </RightDiv>
      </div>
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
