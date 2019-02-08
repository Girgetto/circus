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
  margin-top: 28px; /*sistemare*/
`;

export const MainDiv = styled.div`
  background-color: #F5C8CD;
  min-height: 20rem;
  width: 100%;
  @media(max-width:768px){
    display: none !important;
  }
`;

export const Button = styled.button`
  background-color: #F5C8CD;
  border-radius: 20px;
  border: 1px solid #2D293C;
  >a {
    color: #F5C8CD;
  }
  :hover {
    cursor: pointer;
    transition: .3s;
    background-color: #2D293C;
    >p {
      color: white;
    }
  }
  :focus{
  outline: none;
}
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  margin: 2rem;
`;

export const H2 = styled.h2`
  font-weight: 400;
`;
