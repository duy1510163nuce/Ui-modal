import styled from "styled-components";

export const HomeBodyStyled = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(26, 55, 47, 0.8);
  min-height: 800px;
  max-width:1030px
  @media only screen and (max-width: 400px) {
    min-height: 1100px;
  }
`;
export const ModalStyled = styled.div`
    max-width:855px
    position:absolute;
    background-color:#91C5B6;
    top:3%;
    width:82%;
    margin:0 9%;
    border-radius: 12px;
`;
export const HeaderStyled = styled.div`
  width: 80.5%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 400px) {
  }
`;

export const ImageManStyled = styled.img`
  width: 132px;
  height: 101px;
  padding-top: 3px;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
export const ImageWomanStyled = styled.img`
  width: 132px;
  height: 101px;
  padding-top: 9px;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

export const TitleHeaderStyled = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: #ffffff;
  @media only screen and (max-width: 821px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 400px) {
    margin: 8% 0;
  }
`;