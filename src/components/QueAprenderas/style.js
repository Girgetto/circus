import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  padding: 10rem 5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  width: 100%;
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
`;

export const DescriptionDiv = styled.div`
  display: flex;
  text-align: left;
  @media(max-width:768px) {
    max-width:100% !important;
  }
`;
