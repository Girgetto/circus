import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  background-color: #E8F0FE;
  transform: skewY(-5deg);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 30px;
  @media(max-width:768px){
    flex-direction: column-reverse;
    transform: skewY(0deg);
    margin-bottom: 20rem;
  }
`;

export const RightDiv = styled.div`
  width: 100%;
`;

export const LeftDiv = styled.div`
  width: 100%;
  transform: skewY(5deg);
  @media (max-width:768px) {
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

export const CircleDiv = styled.div`
  .circle {
    margin: 2rem 0.3rem;
  }
`;

export const GrayP = styled.p`
  color: grey;
  fontSize: 1rem;
  fontWeight: 400;
  textAlign: center;
`;

export const CitP = styled.p`
  fontSize: 1.7vw;
  marginBottom: 5rem;
`;
