import React, { Component } from 'react';
import Navbar from './Navbar';
import spainTexts from '../assets/texts/spain.json';
import portugueseTexts from '../assets/texts/portuguese.json';
import First from './First';
import Second from './Second';


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
        <Navbar getLanguage={this.getLanguage} text={this.setLanguage()} />
        <First text={this.setLanguage()} />
        <Second text={this.setLanguage()} />
      </div>
    );
  }
}
