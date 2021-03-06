/* eslint-env browser */
import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import spainTexts from '../assets/languages/spain.json';
import portugueseTexts from '../assets/languages/portuguese.json';
import {
  Navbar, InsideCircus, QueEsCircus, SabiasQue, Fourth, QueAprenderas,
  Sixth, ProximasFechas, Partners, NewsLetter, Footer, Cookies,
} from '.';

const components = [InsideCircus, QueEsCircus, SabiasQue, Fourth,
  QueAprenderas, Sixth, ProximasFechas, Partners, NewsLetter, Footer, Cookies];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'es',
    };
    this.getLanguage = this.getLanguage.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(lang) {
    this.setState({ language: `${lang === '' ? 'es' : lang}` });
  }

  getLanguage() {
    const { language } = this.state;
    switch (language) {
      case 'pt':
        return portugueseTexts;
      default:
        return spainTexts;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Navbar setLanguage={this.setLanguage} text={this.getLanguage()} />
        </Switch>
        {components.map(Components => <Components key={Components} text={this.getLanguage()} />)}
      </React.Fragment>
    );
  }
}
