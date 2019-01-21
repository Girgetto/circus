import styled from 'styled-components';

export const A = styled.a`
  color:white;
  font-weight: 200 !important;
  line-height: 2rem;
`;

export const Box = styled.div`
  @media(max-width:768px){
    display: flex;
    flex-wrap: wrap;
  }
`;

export const P = styled.p`
  color:white;
  font-weight: 200 !important;
  font-size: 1rem;
  line-height: 2rem;
`;

export const Div = styled.div`
    position: relative;
    background-color: #2D293C;
    color: white;
    margin-top: -5rem;
    padding: 10vmin 0;
    height: 20rem;
    justify-content: space-around;
    @media(max-width:768px){
    a {
      font-size: 6vmin;
      line-height: 2;
    }
    height: 45rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media(max-width:768px){
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
