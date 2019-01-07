import React from 'react';
import circus from '../../assets/img/footerImg/circus.svg';
import ironHackFooter from '../../assets/img/footerImg/ironHackFooter.svg';
import {
  A, Box, P, Div, Row,
} from './style';

const footer = [
  ['Apply', 'work with us', 'Press'],
  ['FAQ', 'Contact', 'Privacy Policy'],
  ['Twitter', 'Facebook', 'Instagram', 'YouTube'],
];

const Footer = () => (
  <Div className="center">
    <Row>
      {footer.map((x, i) => (
        <Box key={`${x + i}`}>
          <ul>
            {x.map((word, index) => (
              <li key={`${x + index}`}>
                <A href="/">
                  {word}
                </A>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Row>
    <Row style={{ marginTop: '10vmin' }}>
      <div style={{ padding: '0 1rem' }}>
        <img src={circus} alt="" />
      </div>
      <div style={{ display: 'flex' }}>
        <img src={ironHackFooter} style={{ padding: '0 1rem' }} alt="" />
        <P>
  Powered by ironhack
        </P>
      </div>
    </Row>
  </Div>
);

export default Footer;