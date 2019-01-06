import React, { Component } from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/icon/first.svg';
import {
  RightDiv, Button, Ul, SelectorDiv, DescriptionDiv, TitleDiv,
} from './style';

export default class ProximasFechas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '0',
    };
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line
    document.getElementById(`description${0}`).style.height = '40vh';
  }

  setColor(index) {
    if (!(index === '') && !(index.includes('description'))) {
      const { text } = this.props;
      text.proximasFechas.forEach((_, i) => {
        // eslint-disable-next-line
        document.getElementById(`description${i}`).style.height = '0';
      });
      // eslint-disable-next-line
      document.getElementById(`description${index || 0}`).style.height = '40vh';
      return index === '' ? '' : this.setState({ index });
    }
    return '';
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
          <Ul>
            {text.proximasFechas.map((x, i) => (
              <li
                key={x.title}
                style={{
                  backgroundColor: `${index === `${i}` ? '#FFF6C1' : ''}`,
                }}
              >
                <div id={i} style={{ display: 'flex' }}>
                  <SelectorDiv style={{
                    backgroundColor: `${index === `${i}` ? '#FFF6C1' : ''}`,
                  }}
                  >
                    <TitleDiv id={i}>
                      <img src={first} alt="1" style={{ marginRight: '2rem' }} />
                      <div style={{ flexDirection: 'column' }}>
                        <p id={i} style={{ color: 'grey' }}>{x.date}</p>
                        <p id={i}>{x.title}</p>
                      </div>
                    </TitleDiv>
                    <DescriptionDiv
                      id={`description${i}`}
                      style={{
                        height: 0,
                        marginTop: '3rem',
                      }}
                    >
                      <p>{text.proximasFechas[index].description}</p>
                      <Button type="button">
                          Aplicar
                      </Button>
                    </DescriptionDiv>
                  </SelectorDiv>
                </div>
              </li>
            ))}
          </Ul>
        </div>
        <RightDiv className="center">
          <div className="translate-child">
            <div style={{ margin: '2rem 4rem' }}>
              <p style={{ color: 'gray' }}>{text.proximasFechas[index].date}</p>
              <h2>
                {text.proximasFechas[index].title}
              </h2>
              <p>
                {text.proximasFechas[index].description}
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
