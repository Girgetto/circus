/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/icon/first.svg';
import second from '../../assets/img/icon/second.svg';
import third from '../../assets/img/icon/third.svg';
import fourth from '../../assets/img/icon/fourth.svg';
import {
  RightDiv, Button, Ul, SelectorDiv, DescriptionDiv,
  TitleDiv, OptionsDiv, MainDiv, Li, H2, InnerLiDiv,
  InnerTitleDiv,
} from './style';

const imgArr = [first, second, third, fourth];

export default class ProximasFechas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '0',
    };
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    document.getElementById(`description${0}`).style.height = '40vh';
  }

  setColor(index) {
    if (!(index === '') && !(index.includes('description'))) {
      const { text } = this.props;
      text.proximasFechas.forEach((_, i) => {
        document.getElementById(`description${i}`).style.height = '0';
      });

      document.getElementById(`description${index || 0}`).style.height = '40vh';
      return index === '' ? '' : this.setState({ index });
    }
    return '';
  }

  render() {
    const { index } = this.state;
    const { text } = this.props;
    return (
      <MainDiv className="translate">
        <OptionsDiv
          className="translate-child center"
          onClick={e => this.setColor(e.target.id)}
          role="presentation"
          onKeyDown={this.handleKeyDown}
        >
          <H2>Próximas fechas</H2>
          <Ul>
            {text.proximasFechas.map((x, i) => (
              <Li {...this.state} color={x.color} i={i} key={x.title}>
                <InnerLiDiv id={i}>
                  <SelectorDiv>
                    <TitleDiv id={i}>
                      <img src={imgArr[i]} alt="1" style={{ marginRight: '2rem' }} />
                      <InnerTitleDiv {...this.state} color={x.color} i={i}>
                        <p id={i} style={{ color: 'grey' }}>{x.date}</p>
                        <p id={i}>{x.title}</p>
                      </InnerTitleDiv>
                    </TitleDiv>
                    <DescriptionDiv id={`description${i}`}>
                      <p>{text.proximasFechas[index].description}</p>
                      <Button type="button">
                          Aplicar
                      </Button>
                    </DescriptionDiv>
                  </SelectorDiv>
                </InnerLiDiv>
              </Li>
            ))}
          </Ul>
        </OptionsDiv>
        <RightDiv className="center" text={text} index={index}>
          <div className="translate-child" style={{ width: '100%' }}>
            <div style={{ margin: '2rem 4rem' }}>
              <p style={{
                color: 'gray',
                marginBottom: '2rem',
              }}
              >
                {text.proximasFechas[index].date}

              </p>
              <h2 style={{ marginBottom: '2rem' }}>
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
