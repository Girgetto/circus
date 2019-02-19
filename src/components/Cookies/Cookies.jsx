import React, { Component } from 'react';
import { MainDiv, InnerDiv, Button } from './style';

export default class Cookies extends Component {
  constructor() {
    super();
    this.state = {
      display: 'true',
      remove: 'block',
    };
  }

  hideCookie() {
    this.setState({ display: 'false' });
    setTimeout(() => { this.setState({ remove: 'none' }); }, 1000);
  }

  render() {
    const { text } = this.props;
    const { remove } = this.state;
    return (
      <MainDiv style={{ display: `${remove}` }} {...this.state}>
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
