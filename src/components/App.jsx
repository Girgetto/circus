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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'es',
      margin: '',
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
    const { margin } = this.state;
    // eslint-disable-next-line
    window.onscroll = () => {
      // eslint-disable-next-line
      const scrollBarPosition = window.pageYOffset | document.body.scrollTop;
      this.setState({ margin: (scrollBarPosition / 80).toFixed(2) });
    };
    return (
      <div>
        <Switch>
          <Navbar getLanguage={this.getLanguage} text={this.setLanguage()} />
        </Switch>
        <InsideCircus text={this.setLanguage()} />
        <QueEsCircus margin={margin} text={this.setLanguage()} />
        <SabiasQue text={this.setLanguage()} />
        <Fourth text={this.setLanguage()} />
        <QueAprenderas text={this.setLanguage()} />
        <Sixth text={this.setLanguage()} />
        <ProximasFechas text={this.setLanguage()} />
        <Partners text={this.setLanguage()} />
        <NewsLetter text={this.setLanguage()} />
        <Footer text={this.setLanguage()} />
      </div>
    );
  }
}
