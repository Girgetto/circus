import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  padding: 10rem 0rem;
  text-align: center;
  padding-top: 6rem;
  @media(max-width: 768px){
    padding: 10rem 1rem;
    min-height: 25rem;
  }
`;

export const ImgDiv = styled.div`
  width: 50%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:768px){
    display: none !important;
  }
`;

export const RightDiv = styled.div`
  padding-right: 3rem;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 4vw;
  @media(max-width:768px) {
    font-size: 8vw;
  }
`;

export const InnerDescription = styled.div`
  max-height: 20rem;
  max-width: 20rem;
  @media(max-width:768px) {
    min-height: 30rem;
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

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media(max-width: 768px) {
    flex-direction: row;
  }
`;
