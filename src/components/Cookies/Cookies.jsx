import React, { Component } from 'react';
import { MainDiv, InnerDiv, Button } from './style';

export default class Cookies extends Component {
  constructor() {
    super();
    this.state = {
      display: 'true',
    };
  }

  hideCookie() {
    this.setState({ display: 'false' });
  }

  render() {
    const { text } = this.props;
    return (
      <MainDiv {...this.state}>
        <InnerDiv>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '1em' }}>
              {text.cookie.p}
            </p>
            <a
              target="_blanck"
              style={{ textDecoration: 'underline' }}
              href="https://cookiesandyou.com/"
            >
              {text.cookie.a}
            </a>
          </div>
          <Button onClick={() => this.hideCookie()}>
            {text.cookie.button}
          </Button>
        </InnerDiv>
      </MainDiv>
    );
  }
}