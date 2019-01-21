import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35rem;
  margin-bottom: 6rem;
  @media(max-width: 768px){
    flex-direction: column;
    text-align: center;
    margin-bottom: 0rem;
  }
`;

export const ImgDiv = styled.div`
background-color: #f5c8cd;
height: 70rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
  @media(max-width: 768px){
    display: none !important;
  }
`;

export const DescriptionDiv = styled.div`
  margin: 3rem 6rem;
  @media(max-width:768px) {
    margin: 3rem 3rem;
  }
`;

export const FullDiv = styled.div`
  width: 100%;
`;

export const H2 = styled.h2`
  margin-bottom: 4rem;
`;

export const P = styled.h2`
  margin-bottom: 4rem;
`;
