import styled from 'styled-components';

export const MainDiv = styled.div`
  margin: 4vw 0.5vw;

`;

export const InnerDiv = styled.div`
  margin: 1rem;
`;

export const P = styled.p`
  font-size: 1.7vw;
  line-height: 3vmin;
  font-weight: 300;
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
