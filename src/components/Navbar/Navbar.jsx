/* eslint-env browser */
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import circusLogo from '../../assets/img/circus.svg';
import LinksAndFlags from './utils/LinksAndFlags';
import { NavbarDiv, MenuDiv, P } from './style';
import menu from '../../assets/img/menu.svg';
import Sidenav from './utils/Sidenav';

const openNav = () => {
  document.getElementById('mySidenav').style.width = '100%';
};
export default class Navbar extends Component {
  componentDidMount() {
    const { setLanguage, location } = this.props;
    setLanguage(location.pathname.replace('/', ''));
  }


  render() {
    const { location } = this.props;
    return (
      <NavbarDiv>
        {(location.pathname !== '/pt' && location.pathname !== '/es')
        && <Redirect to="es" />}
        <Sidenav id="mySidenav" {...this.props} />
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 3rem',
        }}
        >
          <AnchorLink offset={() => 70} href="#insideCircus">
            <img src={circusLogo} alt="" />
          </AnchorLink>
        </div>
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
      </NavbarDiv>
    );
  }
}
