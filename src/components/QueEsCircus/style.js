import styled from 'styled-components';

const MainDiv = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
  display: flex;
  background-color: #E8F0FE;
  margin-top: ${props => (
    (props.margin < 7 || props.margin > 15) ? 0 : -props.margin + 7)}rem;

  @media (max-width: 6000px) {
    ${props => (
    (props.margin < 0 || props.margin > 20) ? 0 : -props.margin * 10)}rem;
  }
`;

export default MainDiv;
