// import styled from "styled-components";
import styled from "@emotion/styled";

export const ItemModalStyled = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  margin-bottom: 12px;
  overflow: hidden;
  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ItemLeftStyled = styled.div`
  width: 40%;
  background-color: #edf9f5;
  display: flex;
  align-items: center;
  padding: 27px 16px;
  @media only screen and (max-width: 400px) {
    width: 100%;
    padding: 10px 0;
  }
`;
export const AvatarStyled = styled.div`
  margin: 0 12px 0 16px;
  @media only screen and (max-width: 400px) {
    // margin-left: 25%;
  }
`;

export const TextStyled = styled.p((props: any) => ({
  ...props,
}));

export const LeftTitleStyled = styled.p`
  font-size: 19px;
  font-weight: 500;
  line-height: 26px;
  white-space: pre-line;
  @media only screen and (max-width: 821px) {
    font-size: 13px;
  }
`;

export const ItemRightStyled = styled.div`
  width: 60%;
  background-color: #91b3a9;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 400px) {
    width: 100%;
    white-space: nowrap;
  }
`;
export const BoxStyled = styled.div`
  padding: 13px 16px;
`;

export const WarningStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;
export const WarningTitleStyled = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  color: #fff;
  @media only screen and (max-width: 400px) {
  }
`;

// export const WarningDescriptionStyled = styled.p`
//   font-size: 10px;
//   line-height: 15px;
//   font-weight: 300;
//   color: #fff;
//   margin-top: 14px;
//   @media only screen and (max-width: 821px) {
//     font-size: 7px;
//   }
//   @media only screen and (max-width: 400px) {
//     font-size: 6px;
//     text-align: left;
//   }
// `;
