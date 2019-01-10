import React, { Component } from 'react';
import { Redirect } from 'react-router';
import circusLogo from '../../assets/img/circus.svg';
import LinksAndFlags from './utils/LinksAndFlags';
import { NavbarDiv, MenuDiv, P } from './style';
import menu from '../../assets/img/menu.svg';
import Sidenav from './utils/Sidenav';

const openNav = () => {
  // eslint-disable-next-line
  document.getElementById("mySidenav").style.width = "100%";
};
export default class Navbar extends Component {
  componentDidMount() {
    const { getLanguage, location } = this.props;
    getLanguage(location.pathname.replace('/', ''));
  }


  render() {
    const { location } = this.props;
    return (
      <NavbarDiv>
        {(location.pathname !== '/pt' && location.pathname !== '/es')
        && <Redirect to="es" />}
        <Sidenav id="mySidenav" {...this.props} />
        <img src={circusLogo} alt="" style={{ marginRight: '10vw' }} />
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
