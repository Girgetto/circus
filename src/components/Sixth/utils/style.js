import styled from 'styled-components';

export const MainDiv = styled.div`
  height: 50%;
  margin: 4vw 0.5vw;
  @media (max-width: 768px) {
    height: 75%;
  }
`;

export const InnerDiv = styled.div`
  margin: 10rem 1rem 3rem 1rem;
  height: 25rem;
  @media(max-width: 768px) {
    height: 38rem;
  }
`;

export const TextDiv = styled.div`
  margin: 0 4rem;
`;
