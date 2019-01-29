import styled from 'styled-components';

export const Svg = styled.svg`
  padding: 2rem;
}
`;

export const ImgDiv = styled.div`
  height: 10rem;
  width: 100%;
  display: flex; 
  flex-direction: row; 
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: space-around;
  @media(max-width:768px){
    >button{
      display: none;
    }
  }
`;

export const MainDiv = styled.div`
  height: 20rem;
  padding-bottom: 10rem;
  background-color: white;
  box-shadow: rgba(0,0,0,0.11) 0px 4px 30px;
  transform: skewY(-5deg);
  @media(max-width:768px){
    transform: skewY(0deg);
  }
`;

export const H2 = styled.h2`
  margin-top: 5rem;
`;

export const Img = styled.img`
  padding: 1vw;
  max-width: 15vw;
  object-fit: contain;
  max-width: 10rem;
`;

export const InnerDiv = styled.div`
  transform: skewY(5deg);
  @media (max-width:768px) {
    transform: skewY(0deg);
  }
`;

export const ImgContainer = styled.div`
  width: 54rem;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  @media (max-width:768px) {
    width: 19rem;
  }
`;

export const Button = styled.button`
  padding: 0px;
  cursor: pointer;
`;
