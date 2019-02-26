import styled from 'styled-components';

export const MainDiv = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #F5C8CD;
  opacity: ${props => (props.display === 'false' ? '0' : '')};
  transition: 1s;
`;

export const Button = styled.button`
  background-color: #FFF6C1;
  cursor: pointer;
  border-radius: 20px;
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em 1.8em;
  align-items: center;
  @media(max-width: 768px) {
    flex-direction: column;
    p {
      width: 65%;
    }

    a {
      margin-left: .5em;
      font-size: 5.5vw;
    }
  }
`;
