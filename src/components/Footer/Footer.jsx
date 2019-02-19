import React from 'react';
import circus from '../../assets/img/footerImg/circus.svg';
import ironHackFooter from '../../assets/img/footerImg/ironHackFooter.svg';
import {
  A, Box, P, Div, Row, ImgCircusDiv, PowerIronhackDiv,
} from './style';

const footer = [
  [{ name: 'Apply', url: 'https://ironhack.typeform.com/to/K7cC3w' }, { name: 'work with us', url: '#' }, { name: 'Press', url: '#' }],
  [{ name: 'FAQ', url: '#' }, { name: 'Contact', url: '#' }, { name: 'Privacy Policy', url: '#' }],
  [
    { name: 'Twitter', url: 'https://twitter.com/ironhackmad?lang=es' },
    { name: 'Facebook', ulr: 'https://www.facebook.com/theironhack/' },
    { name: 'Instagram', url: 'https://www.instagram.com/ironhack/?hl=es' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCWD3Q1-d9vzxt1cXUmpbjqg' }],
];

const lowerRow = { marginTop: '10vmin', alignItems: 'center' };

const imgStyle = { padding: '0 1rem' };

const Footer = () => (
  <Div id="footer" className="center">
    <Row>
      {footer.map((x, i) => (
        <Box key={`${x + i}`}>
          <ul>
            {x.map((word, index) => (
              <li key={`${x + index}`}>
                <A href={word.url} target="_blank">
                  {word.name}
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
