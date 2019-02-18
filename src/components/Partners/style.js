import styled from 'styled-components';

export const Svg = styled.svg`
  padding: 2rem;
`;

export const ImgDiv = styled.div`
  height: 25rem;
  width: 100%;
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: space-around;
  @media(max-width:1024px){
    >button{
      display: none;
    }
  }
`;

export const MainDiv = styled.div`
  height: 35rem;
  padding-bottom: 10rem;
  background-color: white;
  box-shadow: rgba(0,0,0,0.11) 0px 4px 30px;
  transform: skewY(-5deg);
  @media(max-width:768px){
    height: 75rem;
    transform: skewY(0deg);
  }
`;

export const H2 = styled.h2`
  font-size: 1.5vw;
  margin-top: 5rem;
  text-align: center;
  @media(max-width:768px){
    font-size: 6vw;
    margin-top: 10rem;
  }
`;

export const Img = styled.img`
  padding: 1vw;
  max-width: 15vw;
  object-fit: contain;
  max-width: 10rem;
  @media(max-width:768px){
    width: 9rem;
  }
`;

export const InnerDiv = styled.div`
  transform: skewY(5deg);
  @media (max-width:768px) {
    transform: skewY(0deg);
  }
`;

export const ImgContainer = styled.div`
  flex-flow: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  @media (max-width:768px) {
    width: 100%;
    height: 30rem;
  }
`;

export const Button = styled.button`
  padding: 0px;
  cursor: pointer;
  background-color: white;
`;
