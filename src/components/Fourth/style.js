import styled from 'styled-components';

export const CircleDiv = styled.div`
  .circle {
    margin: 0rem 0.3rem;
  }
`;

export const MainDiv = styled.div`
  height: 35rem;
  background-color: #E8F0FE;
  display: flex;
  transform: skewY(-5deg);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
  margin-top: 2rem;
  @media(max-width:768px){
    flex-direction: column;
    transform: skewY(0deg);
  }
  @media(max-width: 425px) {
    height: 60rem
  }
  @media(max-width: 768px) and (min-width: 426px) {
    height: 80rem
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LeftDiv = styled.div`
  width: 100%;
`;

export const RightDiv = styled.div`
  width: 100%;
  transform: skewY(5deg);
  @media (max-width:768px) {
    transform: skewY(0deg);
  }
`;
