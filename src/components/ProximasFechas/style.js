import styled from 'styled-components';

export const RightDiv = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  background-color: ${props => (props.text.proximasFechas[props.index].color)};
  @media(max-width:768px){
    display: none !important;
  }
`;

export const Button = styled.button`
  background-color: #2D293C;
  color: white;
  border-radius: 20px;
  margin-top: 2rem;
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
  padding: 1rem 2rem;
  background-color: ${props => (props.index === `${props.i}` ? props.color : '')};
`;

export const DescriptionDiv = styled.div`
  display: none;
  height: 0;
  margin-top: 3rem;
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
    margin-bottom: 5rem;
  }
`;

export const Li = styled.li`
  width: 100%;
  cursor: pointer;
  @media(max-width: 768px){
    background-color: ${props => (props.index === `${props.i}` ? props.color : '')};
  }
`;

export const H2 = styled.h2`
  margin-bottom: 3rem;
`;

export const InnerLiDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const InnerTitleDiv = styled.div`
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.index === `${props.i}` ? props.color : '')};
`;
