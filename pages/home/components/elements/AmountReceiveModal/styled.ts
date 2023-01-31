// import styled from "styled-components";
import styled from "@emotion/styled";

export const HomeBodyStyled = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(26, 55, 47, 0.8);
  min-height: 800px;
  max-width: 1030px ;
  @media only screen and (max-width: 400px) {
    min-height: 1100px;
  }
`;

export const TextStyled = styled.h1(
  {
    margin: "0px",
  },
  (props: any) => ({
    ...props,
  }),
  
);

export const ModalStyled = styled.section`
  max-width: 855px;
  position: absolute;
  background-color: #91c5b6;
  top: 3%;
  width: 82%;
  margin: 0 9%;
  border-radius: 12px;
`;
export const ModalHeaderStyled = styled.div`
  width: 80.5%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 400px) {
  }
`;

export const HeaderImgManStyled = styled.img`
  width: 132px;
  height: 101px;
  padding-top: 3px;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
export const HeaderImgWoManStyled = styled.img`
  width: 132px;
  height: 101px;
  padding-top: 9px;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

export const HeaderTitleStyled = styled.p`
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
