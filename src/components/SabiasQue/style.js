import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50rem;
  @media(max-width: 768px){
    flex-direction: column;
    text-align: center;
  }
`;

export const ImgDiv = styled.div`
background-color: #f5c8cd;
height: 200vh;
display: flex;
width: 100%;
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
  width: 100%
`;
