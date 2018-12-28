import React from 'react';
import circus from '../../assets/img/footerImg/circus.svg';
import ironHackFooter from '../../assets/img/footerImg/ironHackFooter.svg';
import {
  A, Box, P, Div, Row,
} from './style';

const Footer = () => (
  <Div className="center">
    <Row>
      <Box>
        <ul>
          <li><A href="1">Apply</A></li>
          <li><A href="1">Work with us</A></li>
          <li><A href="1">Press</A></li>
        </ul>
      </Box>
      <Box>
        <ul>
          <li><A href="1">FAQ</A></li>
          <li><A href="1">Contact</A></li>
          <li><A href="1">Privacy Policy</A></li>
        </ul>
      </Box>
      <Box>
        <ul>
          <li><A href="1">Twitter</A></li>
          <li><A href="1">Facebook</A></li>
          <li><A href="1">Instagram</A></li>
          <li><A href="1">Youtube</A></li>
        </ul>
      </Box>
    </Row>
    <Row>
      <div style={{ padding: '0 1rem' }}>
        <img src={circus} alt="" />
      </div>
      <Row>
        <img src={ironHackFooter} style={{ padding: '0 1rem' }} alt="" />
        <P>
Powered by ironhack
        </P>
      </Row>
    </Row>
  </Div>
);

export default Footer;
