import styled from 'styled-components';

export const CircleDiv = styled.div`
  .circle {
    margin: 0rem 0.3rem;
  }
`;

export const MainDiv = styled.div`
  height: 30rem;
  background-color: #E8F0FE;
  display: flex;
  margin-top: -8vh;
  transform: skewY(-5deg);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
  @media(max-width:768px){
    height: 100vh;
    flex-direction: column;
    transform: skewY(0deg);
    justify-content: space-between;
    margin-bottom: 10vh;
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
