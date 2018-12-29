import styled from 'styled-components';

export const Input = styled.input`
  background-color: #F5C8CD;
  border-bottom: 2px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  height: 2rem;
  width: 20rem;
  margin: 0 3rem;
  outline: none;
  font-size: 1.2rem;
  padding-bottom: 1rem;
`;

export const MainDiv = styled.div`
  @media(max-width:768px){
    display: none !important;
  }
`;
