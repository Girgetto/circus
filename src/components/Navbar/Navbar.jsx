import React, { Component } from 'react';
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
  componentWillMount() {
    const { getLanguage, location } = this.props;
    getLanguage(location.pathname.replace('/', ''));
  }


  render() {
    return (
      <NavbarDiv>
        <Sidenav id="mySidenav" {...this.props} />
        <img src={circusLogo} alt="" />
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
