import styled from 'styled-components';

export const MainDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarDiv = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  padding: 1.75rem 0;
  justify-content: space-evenly;
`;

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  a: {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
`;

export const MenuDiv = styled.div`
  display:none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
