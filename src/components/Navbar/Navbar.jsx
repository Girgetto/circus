/* eslint-env browser */
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import circusLogo from '../../assets/img/circus.svg';
import LinksAndFlags from './utils/LinksAndFlags';
import {
  NavbarDiv, MenuDiv, P, ImgContainer, ImgAnimation,
} from './style';
import menu from '../../assets/img/menu.svg';
import Sidenav from './utils/Sidenav';

const openNav = () => {
  document.getElementById('mySidenav').style.width = '100%';
};

const languages = ['/es', '/pt'];
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isAnimation: false,
    };
    this.animation = this.animation.bind(this);
  }

  componentDidMount() {
    const { setLanguage, location } = this.props;
    setLanguage(location.pathname.replace('/', ''));
  }

  animation() {
    return window.pageYOffset > 0
      ? this.setState({ isAnimation: true })
      : this.setState({ isAnimation: false });
  }

  render() {
    const { location } = this.props;
    window.addEventListener('scroll', this.animation);
    return (
      <NavbarDiv {...this.state}>
        {!languages.includes(location.pathname)
          ? <Redirect to="es" />
          : (
            <React.Fragment>
              <Sidenav id="mySidenav" {...this.props} />
              <ImgContainer>
                <AnchorLink offset={() => 80} style={{ display: 'flex' }} href="#insideCircus">
                  <ImgAnimation {...this.state} src={circusLogo} alt="" />
                </AnchorLink>
              </ImgContainer>
              <LinksAndFlags {...this.props} />
              <MenuDiv>
                <P>Menu</P>
                <img
                  src={menu}
                  alt="menu"
                  onClick={openNav}
                  onKeyDown={this.handleKeyDown}
                  role="presentation"
                />
              </MenuDiv>
            </React.Fragment>
          )}
      </NavbarDiv>
    );
  }
}
