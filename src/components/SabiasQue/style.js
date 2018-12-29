import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  height: 50rem;
  @media(max-width: 768px){
    flex-direction: column;
  }
`;

export const ImgDiv = styled.div`
  @media(max-width: 768px){
    display: none !important;
  }
`;
