import styled from 'styled-components';

export const MainDiv = styled.div`
  height: 40rem;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
  display: flex;
  background-color: #E8F0FE;
  transform: skewY(-5deg);
  @media (max-width:768px) {
    height: 55rem;
    flex-direction: column;
    margin-top: 8rem;
    transform: skewY(0deg);
    justify-content: space-between;
    text-align: center;
  }
  @media (max-width: 425px) {
    height: 35rem;
  }
`;

export const LeftDiv = styled.div`
  transform: skewY(5deg);
  width: 100%;
  margin-top: 3rem;
  @media (max-width:768px) {
    transform: skewY(0deg);
    margin-top: 0rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RightDiv = styled.div`
  width: 100%;
`;

export const H2 = styled.h2`
  margin-top: 9vw;
  margin-bottom: 5vw;
`;

export const TextDiv = styled.div`
  margin: 0 3rem;
`;
