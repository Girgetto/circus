import styled from 'styled-components';

const MainDiv = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
  display: flex;
  background-color: #E8F0FE;
  margin-top: ${props => (-props.margin)}rem;
  @media (max-width:768px) {
    flex-direction: column;
    margin-top: 5rem;
  }
`;

export default MainDiv;
