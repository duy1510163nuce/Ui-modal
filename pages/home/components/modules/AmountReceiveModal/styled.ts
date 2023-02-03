import styled from "@emotion/styled";

export const HomeBody = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(26, 55, 47, 0.8);
  min-height: 800px;
  max-width: 1030px;
  @media only screen and (max-width: 400px) {
    min-height: 1180px;
  }
`;

// export const TextStyled = styled.h1(
//   {
//     margin: "0px",
//   },
//   (props: any) => ({
//     ...props,
//   })
// );
// export const ModalStyled = Modal.styled`
//   max-width: 855px;
//   position: absolute;
//   background-color: #91c5b6;
//   top: 3%;
//   width: 82%;
//   margin: 0 9%;
//   border-radius: 12px;

// `;

export const ModalStyled = styled.section<any>`
  max-width: 855px;
  position: absolute;
  background-color: #91c5b6;
  top: 3%;
  width: 82%;
  margin: 0 9%;
  border-radius: 12px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
export const ModalHeader = styled.div`
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
// export const Image = styled.img(
//   (props:any) =>({
//     ...props
//   })
// )

// export const Image = styled.image<any>`
//   alt:${(props) => props.alt};
//   src:${(props) => props.src};
//   width:${(props) => props.width};
//   height:${(props) => props.height};
//   padding-top:${(props) => props.paddingTop};
// `
// export const HeaderImgWoManStyled = styled.img`
//   width: 132px;
//   height: 101px;
//   padding-top: 9px;
//   @media only screen and (max-width: 400px) {
//     display: none;
//   }
// `;

// export const HeaderTitleStyled = styled.p`
//   font-size: 24px;
//   font-weight: 500;
//   line-height: 24px;
//   color: #ffffff;
//   @media only screen and (max-width: 821px) {
//     font-size: 16px;
//   }
//   @media only screen and (max-width: 400px) {
//     margin: 8% 0;
//   }
// `;

export const Loading = styled.div`
  top: 100px;
  display: inline-block;
  border-top: 4px solid #3182ce;
  border-right: 4px solid #3182ce;
  border-bottom-style: solid;
  border-left-style: solid;
  border-radius: 99999px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-bottom-color: #e2e8f0;
  border-left-color: #e2e8f0;
  animation: 0.65s linear 0s infinite normal none running animation-b7n1on;
  width: 3rem;
  height: 3rem;
  --spinner-size: 3rem;
  color: #3182ce;
`;
