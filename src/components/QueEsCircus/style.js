import styled from 'styled-components';

export const MainDiv = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
  display: flex;
  background-color: #E8F0FE;
  transform: skewY(-5deg);
  @media (max-width:768px) {
    flex-direction: column;
    margin-top: 8rem;
    transform: skewY(0deg);
  }
`;

export const LeftDiv = styled.div`
  transform: skewY(5deg);
  @media (max-width:768px) {
    transform: skewY(0deg);
  }
`;

export const Img = styled.img`
  width: 100%;
  @media(max-width:768px){
    border-radius: 20px;
  }
`;

export const RightDiv = styled.div`
  width: 100%;
`;
