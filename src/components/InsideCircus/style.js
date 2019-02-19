import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 10vw;
  border-radius: 20px;
  margin-top: 2vw;
  font-weight: 500;
  background-color: #ffffff;
  border: 1px solid #2D293C;
  :hover {
    transition: .3s;
    background-color: #2D293C;
  }
  @media (max-width: 768px) {
    background-color: #2D293C;
    >a {
      color: white;
    } 
  }
`;

export const MainDiv = styled.div`
  margin-top: 5rem;
  height: 40rem;
  display: flex;
  margin-bottom: -9rem;
  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    margin-top: 4.1rem;
    margin-bottom: 5rem;
  }
`;

export const ImgDiv = styled.div`
  width:100%;
`;

export const TextDiv = styled.div`
  width:100%;
`;

export const TextBox = styled.div`
  padding: 1rem 2rem;
  @media(max-width:768px){
    font-size: 3vw;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const MainTitle = styled.h1`
  padding-top: 3rem;
  font-size: 5vw; 
  @media(max-width:768px){
    text-align: center;
    font-size: 17vw;
  }
`;

export const MainDescription = styled.h3`
  padding: 1rem 0;
  font-size: 2vw;
    @media(max-width:768px){
      text-align: center;
      font-size: 8vw;
      font-weight: 450;
      line-height: 10vw;
  }
`;

export const Description = styled.p`
  font-size: 1.3vw;
  @media(max-width:768px){
    font-size: 5vw;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media(min-width: 2000px) {
    height: 125%;
  }
`;

export const ButtonDiv = styled.div`
  margin-left: 2rem;
  @media(max-width:768px){
    margin-left: 0;
    text-align: center;
  }
`;
