import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarDiv = styled.div`
  justify-content: center;
  display: flex;
  z-index: 1;
  padding: 1rem 0;
  position: fixed;
  background-color: white;
  right: 0;
  left: 0;
  top: 0;
  height: 5rem;
  box-shadow: 0px 4px 30px rgba(0,0,0,0.11);
  @media (max-width: 768px) {
    height: 2rem;
    justify-content: space-evenly;
  }
`;

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  :hover {
    .dropdown-content {
      display: block;
      border-radius: 5px;
      margin: 0rem 1rem;
    }
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 1rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  a:hover {
    background-color: #E8F0FE;
    border-radius: 5px;
  }
`;

export const MenuDiv = styled.div`
  display:none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Item = styled.div`
  display: flex;
  color: black;
  padding: 0 1rem;
  font-size: 1.2rem !important;
  font-weight: bold !important;
  width: 15rem;
`;

export const P = styled.p`
  margin-right: 1rem;
`;
