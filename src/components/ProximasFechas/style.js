import styled from 'styled-components';

export const RightDiv = styled.div`
  width: 100%;
  background-color: #FFF6C1;
  z-index: 1;
  position: relative;
  @media(max-width:768px){
    display: none !important;
  }
`;

export const Button = styled.button`
  background-color: #2D293C;
  color: white;
  padding: 1rem 10rem;
  border-radius: 20px;
  margin-top: 5rem;
  width: 100%;
  font-size: 2rem;
`;

export const Ul = styled.ul`
  width: 100%;
  margin-left: 50%;
  @media(max-width:768px){
    margin-left: 0% !important;
  }
`;
