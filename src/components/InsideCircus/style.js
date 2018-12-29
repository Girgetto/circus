import styled from 'styled-components';

export const Button = styled.button`
  background-color: #2D293C;
  color: white;
  padding: 2rem 10vw;
  border-radius: 20px;
  margin-top: 2vw;
  font-weight: 500;
`;

export const MainDiv = styled.div`
  display: flex;
  margin-bottom: -9vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonText = styled.a`
  color:white;
  font-size: 1.5vw;
`;

export const ImgDiv = styled.div`
  width:100%;
`;

export const TextDiv = styled.div`
  width:100%;
`;

export const TextBox = styled.div`
  padding: 1rem 2rem;
`;

export const MainTitle = styled.h1`
  padding-top: 1vh;
  font-size: 5vw; 
`;

export const MainDescription = styled.h3`
  padding-top: 5vw;
  padding-bottom: 2vw;
  font-size: 2vw;
`;

export const Description = styled.p`
  font-size: 1.3vw;
`;
