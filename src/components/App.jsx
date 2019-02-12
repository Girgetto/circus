/* eslint-env browser */
import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './Navbar';
import spainTexts from '../assets/texts/spain.json';
import portugueseTexts from '../assets/texts/portuguese.json';
import InsideCircus from './InsideCircus';
import QueEsCircus from './QueEsCircus';
import SabiasQue from './SabiasQue';
import Fourth from './Fourth';
import QueAprenderas from './QueAprenderas';
import Sixth from './Sixth';
import ProximasFechas from './ProximasFechas';
import Partners from './Partners';
import NewsLetter from './NewsLetter';
import Footer from './Footer/Footer';

const components = [InsideCircus, QueEsCircus, SabiasQue, Fourth,
  QueAprenderas, Sixth, ProximasFechas, Partners, NewsLetter, Footer];
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
      case 'es':
        return spainTexts;
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
        {components.map(Componenti => <Componenti text={this.getLanguage()} />)}
      </React.Fragment>
    );
  }
}
