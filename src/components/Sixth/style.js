import styled from 'styled-components';

export const MainDiv = styled.div`
  height: 32rem;
  display: flex;
  background-color: #E8F0FE;
  transform: skewY(-5deg);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 30px;
  @media(max-width:768px){
    height: 57rem;
    flex-direction: column;
    transform: skewY(0deg);
    margin-bottom: 10rem;
    .order:nth-child(1) { order: 1; }
    .order:nth-child(2) { order: 0; }
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
`;

export const CircleDiv = styled.div`
  .circle {
    margin: 0rem 0.3rem;
  }
`;

export const GrayP = styled.p`
  color: grey;
  fontSize: 1rem;
  fontWeight: 400;
  textAlign: center;
  margin-top: 4rem;
`;

export const CitP = styled.p`
  font-size: 1.7vw;
  @media(max-width: 768px) {
    line-height: 8vmin;
    margin-bottom: 0rem;
  }
`;
