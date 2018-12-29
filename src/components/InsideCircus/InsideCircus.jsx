import React from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/first.svg';
import { Button, MainDiv, ButtonText } from './style';

const InsideCircus = ({ text }) => (
  <MainDiv>
    <div style={{ width: '100%' }}>
      <img
        style={{ width: '100%' }}
        src={first}
        alt=""
      />
    </div>
    <div style={{ width: '100%' }}>
      <div style={{ padding: '1rem 2rem' }}>
        <h1 style={{ paddingTop: '5vh' }}>
          {text.first}
        </h1>
        <h3 style={{ paddingTop: '5vh', paddingBottom: '2rem' }}>
          {text.insideDescription}
        </h3>
        <p>{text.inside3}</p>
        <Button type="button">
          <ButtonText href="/">
            {text.insideButton}
          </ButtonText>
        </Button>
      </div>
    </div>
  </MainDiv>
);

InsideCircus.defaultProps = {
  text: 'Loading',
};

InsideCircus.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default InsideCircus;
