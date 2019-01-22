import React from 'react';
import circus from '../../assets/img/footerImg/circus.svg';
import ironHackFooter from '../../assets/img/footerImg/ironHackFooter.svg';
import {
  A, Box, P, Div, Row, ImgCircusDiv, PowerIronhackDiv,
} from './style';

const footer = [
  ['Apply', 'work with us', 'Press'],
  ['FAQ', 'Contact', 'Privacy Policy'],
  ['Twitter', 'Facebook', 'Instagram', 'YouTube'],
];

const lowerRow = { marginTop: '10vmin', alignItems: 'center' };

const imgStyle = { padding: '0 1rem' };

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
    <Row style={lowerRow}>
      <ImgCircusDiv>
        <img src={circus} alt="" />
      </ImgCircusDiv>
      <PowerIronhackDiv>
        <img src={ironHackFooter} style={imgStyle} alt="" />
        <P>Powered by ironhack</P>
      </PowerIronhackDiv>
    </Row>
  </Div>
);

export default Footer;
