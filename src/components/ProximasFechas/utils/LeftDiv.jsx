import React from 'react';
import PropTypes from 'prop-types';
import first from '../../../assets/img/icon/first.svg';
import second from '../../../assets/img/icon/second.svg';
import third from '../../../assets/img/icon/third.svg';
import fourth from '../../../assets/img/icon/fourth.svg';
import {
  Button, Ul, SelectorDiv, DescriptionDiv,
  TitleDiv, Li, H2, InnerLiDiv,
  InnerTitleDiv, TitleDivProximoEvento,
} from '../style';

const greyP = { color: 'gray', marginBottom: '0.5rem' };

const imgArr = [first, second, third, fourth];


export default function LeftDiv({ text, index }) {
  return (
    <React.Fragment>
      <TitleDivProximoEvento>
        <H2>{text.proximasFechasTitle}</H2>
        <p>{text.proximasFechas[0].date}</p>
      </TitleDivProximoEvento>
      <Ul>
        {text.proximasFechas.map((x, i) => (
          <Li key={x.title} color={x.color}>
            <InnerLiDiv id={i}>
              <SelectorDiv index={index} color={x.color} i={i} key={x.title}>
                <TitleDiv id={i}>
                  <img src={imgArr[i]} alt="1" style={{ marginRight: '2rem' }} />
                  <InnerTitleDiv index={index} color={x.color} i={i}>
                    <p id={i}>{x.title}</p>
                  </InnerTitleDiv>
                </TitleDiv>
                <DescriptionDiv id={`description${i}`} style={{ overflowY: 'scroll' }}>
                  {text.proximasFechas[index].descriptions.map(content => (
                    <div key={content.title} style={{ marginBottom: '2rem' }}>
                      <p style={greyP}>{content.grey}</p>
                      <h2 style={{ marginBottom: '2rem' }}>{content.title}</h2>
                      <p>{content.description}</p>
                      {content.hours && content.hours.map(hour => (
                        <ul key={hour}>
                          <li><p style={{ lineHeight: '3rem' }}>{hour}</p></li>
                        </ul>
                      ))}
                    </div>
                  ))}
                  <Button type="button">
                    <a
                      href="https://ironhack.typeform.com/to/K7cC3w"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
Aplicar
                    </a>
                  </Button>
                </DescriptionDiv>
              </SelectorDiv>
            </InnerLiDiv>
          </Li>
        ))}
      </Ul>
    </React.Fragment>
  );
}


LeftDiv.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
  index: '0',
};

LeftDiv.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
  index: PropTypes.string,
};
