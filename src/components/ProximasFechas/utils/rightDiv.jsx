import React from 'react';
import PropTypes from 'prop-types';
import {
  RightDiv, InnerRightDiv,
} from '../style';

const greyP = { color: 'gray', marginBottom: '0.5rem' };

export default function rightDiv({ text, index }) {
  return (
    <React.Fragment>
      <RightDiv text={text} index={index}>
        <InnerRightDiv className="translate-child">
          <div>
            {text.proximasFechas[index].descriptions.map(x => (
              <div key={x.title} style={{ marginBottom: '2rem' }}>
                <p style={greyP}>{x.grey}</p>
                <h2 style={{ marginBottom: '2rem' }}>{x.title}</h2>
                <p>{x.description}</p>
                <div style={{ marginBottom: '3rem' }}>
                  {x.hours && x.hours.map(hour => (
                    <ul key={hour}>
                      <li><p style={{ lineHeight: '3rem' }}>{hour}</p></li>
                    </ul>
                  ))}
                  <ul>
                    {x.points && x.points.map(point => (
                      <li key={point}>
•
                        {' '}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  className="anchor"
                  href="https://ironhack.typeform.com/to/K7cC3w"
                  rel="noopener noreferrer"
                  target="_blank"
                >
Aplicar
                </a>
              </div>
            ))}
          </div>
        </InnerRightDiv>
      </RightDiv>
    </React.Fragment>
  );
}

rightDiv.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
  index: '0',
};

rightDiv.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
  index: PropTypes.string,
};
