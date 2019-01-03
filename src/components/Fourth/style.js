import styled from 'styled-components';

export const CircleDiv = styled.div`
  .circle {
    margin:0.3rem;
  }
`;

export const MainDiv = styled.div`
  height: 80vh;
  background-color: #E8F0FE;
  display: flex;
  margin-top: -10vh;
  @media(max-width:768px){
    flex-direction: column;
    margin-top: 10rem
  }
`;
