import styled from 'styled-components';

export const Button = styled.button`
  background-color: #2D293C;
  color: white;
  padding: 1rem 10vw;
  border-radius: 20px;
  margin-top: 2vw;
  font-weight: 500;
  width: 90%;
`;

export const MainDiv = styled.div`
  height: 80vh;
  display: flex;
  margin-bottom: -9vh;
  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const ButtonText = styled.a`
  color:white;
  font-size: 1.5vw;
  @media(max-width:768px){
    font-size: 5vw;
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
  padding-top: 1vh;
  font-size: 5vw; 
  @media(max-width:768px){
    text-align: center;
    font-size: 17vw;
  }
`;

export const MainDescription = styled.h3`
  padding-top: 5vw;
  padding-bottom: 2vw;
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
  color: gray;
  @media(max-width:768px){
    font-size: 5vw;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media(max-width:768px){
    border-radius: 20px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;