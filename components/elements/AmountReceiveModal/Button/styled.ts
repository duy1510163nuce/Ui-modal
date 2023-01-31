// import styled from "styled-components";
import styled from "@emotion/styled";
// export const ButtonStyled = styled.button` 
//   background-image: linear-gradient(to left, #d8ba81 0%, #ab8f5a 100%);
//   color: #fff;
//   border: none;
//   border-radius: 24px;
//   height: 32px;
//   margin-left: 17px;
//   padding: 0 16px
//   font-size:16px;
//   font-weight:500;
//   @media only screen and (max-width: 400px) {
//     font-size: 12px;
//   }
// `;

export const ButtonStyled = styled.button(
  {
    backgroundImage: "linear-gradient(to left, #d8ba81 0%, #ab8f5a 100%)"
  },
  (props:any) =>({
    ...props,
  }),
)