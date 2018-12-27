import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './Navbar';
import spainTexts from '../assets/texts/spain.json';
import portugueseTexts from '../assets/texts/portuguese.json';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import Seventh from './Seventh';
import Eight from './Eight';
import NewsLetter from './NewsLetter';
import Footer from './Footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'es',
    };
    this.getLanguage = this.getLanguage.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  getLanguage(lang) {
    this.setState({ language: lang });
  }

  setLanguage() {
    const { language } = this.state;
    return language === 'es' ? spainTexts : portugueseTexts;
  }

  render() {
    return (
      <div>
        <Switch>
          <Navbar getLanguage={this.getLanguage} text={this.setLanguage()} />
        </Switch>
        <First text={this.setLanguage()} />
        <Second text={this.setLanguage()} />
        <Third text={this.setLanguage()} />
        <Fourth text={this.setLanguage()} />
        <Fifth text={this.setLanguage()} />
        <Sixth text={this.setLanguage()} />
        <Seventh text={this.setLanguage()} />
        <Eight text={this.setLanguage()} />
        <NewsLetter text={this.setLanguage()} />
        <Footer text={this.setLanguage()} />
      </div>
    );
  }
}
