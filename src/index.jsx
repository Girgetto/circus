/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
import './index.css';


ReactDOM.render(
  <ParallaxProvider>
    <Router>
      <App />
    </Router>
  </ParallaxProvider>, document.getElementById('root'),
);
