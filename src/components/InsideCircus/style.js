import styled from 'styled-components';

export const Button = styled.button`
  background-color: #2D293C;
  color: white;
  padding: 2rem 10rem;
  border-radius: 20px;
  margin-top: 10vh;
  font-weight: 500;
`;

export const MainDiv = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonText = styled.a`
  color:white;
  font-size: 1.5vw;
`;
