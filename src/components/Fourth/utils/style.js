import styled from 'styled-components';

export const MainDiv = styled.div`
  margin: 4vw 0.5vw;

`;

export const InnerDiv = styled.div`
  margin: 1rem;
  margin-top: 5rem;
  height: 25rem;
  @media(max-width: 768px) {
    height: 38rem;
  }
`;

export const P = styled.p`
  @media(max-width: 768px) {
    line-height: 8vmin;
    margin-bottom: 0rem;
  }
`;

export const GrayP = styled.p`
  color: grey;
  font-size: 1.5vw;
  font-weight: 400;
  text-align: center;
  margin-top: 4rem;
`;

export const TextDiv = styled.div`
  margin: 0 4rem;
`;
