import styled from 'styled-components';

export const CircleDiv = styled.div`
  .circle {
    margin:0.3rem;
  }
`;

export const MainDiv = styled.div`
  height: 80vh;
  background-color: #E8F0FE;
  display: flex;
  margin-top: -8vh;
  transform: skewY(-5deg);
  @media(max-width:768px){
    flex-direction: column;
    margin-top: 10rem;
    transform: skewY(0deg);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media(max-width:768px){
    border-radius: 20px;
  }
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
