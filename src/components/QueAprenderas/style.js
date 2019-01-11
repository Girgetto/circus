import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  padding: 10rem 5rem;
  text-align: center;
  padding-top: 6rem;
  @media(max-width: 768px){
    padding: 10rem 1rem;
  }
`;

export const ImgDiv = styled.div`
  width: 50%;
  margin-top: 3rem;
  @media(max-width:768px){
    display: none !important;
  }
`;

export const RightDiv = styled.div`
  padding: 3rem;
  @media(max-width:768px){
    padding: 0;
  }
`;

export const Img = styled.img`
  width: 50%;
  float: left;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  text-align: left;
  @media(max-width:768px) {
    max-width:100% !important;
    text-align: center;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  @media(max-width:768px) {
    font-size: 7vh;
  }
`;

export const InnerDescription = styled.div`
  max-height: 20rem;
  @media(max-width:768px) {
    max-height: 100%;
    max-width: 75vw;
  }
`;

export const UpperDescriptonDiv = styled.div`
  width: 50%;
  @media(max-width:768px) {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 3rem;
  font-weight: 400;
`;

export const P = styled.p`
  margin-top: 2rem;
`;
