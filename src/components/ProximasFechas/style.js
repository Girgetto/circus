import styled from 'styled-components';

export const RightDiv = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  @media(max-width:768px){
    display: none !important;
  }
`;

export const Button = styled.button`
  background-color: #2D293C;
  color: white;
  border-radius: 20px;
  margin-top: 2rem;
  padding: 1rem 6rem;
  @media(max-width: 768px) {
    font-size: 5vw;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  margin-left: 10%;
  @media(max-width:768px){
    margin-left: 0% !important;
    width: 100%;
  }
`;

export const LeftDiv = styled.div`
  width: 100%;
  @media(max-width: 768px){
    width: 50%;
  }
`;

export const SelectorDiv = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const DescriptionDiv = styled.div`
  display: none;
  @media(max-width: 768px){
    text-align: center;
    transition: 0.2s;
    height: 0;
    display: block;
    overflow: hidden;
  }
`;

export const TitleDiv = styled.div`
  display: flex;

`;

export const OptionsDiv = styled.div`
  width: 50%;
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  height: 40rem;
  @media(max-width: 768px) {
    margin-bottom: 90vw;
  }
`;
