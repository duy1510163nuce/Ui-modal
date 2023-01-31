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
export const LeftAvatarStyled = styled.div`
  margin: 0 12px 0 16px;
  @media only screen and (max-width: 400px) {
    // margin-left: 25%;
  }
`;

// export const LeftTitleStyled = styled.p`
//   font-size: 19px;
//   font-weight: 500;
//   line-height: 26px;
//   white-space: pre-line;
//   @media only screen and (max-width: 821px) {
//     font-size: 13px;
//   }
// `;
export const TextStyled = styled.p( 
    (props:any)=>({
      ...props
    })
)

export const ItemRightStyled = styled.div`
  width: 60%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const LabelsStyled = styled.div`
    height:50%;
    padding: 16px 0 12px 16px;
    @media only screen and (max-width: 400px)  {
      display:flex;
      justify-content:center;
  }
`;

export const LabelStyled = styled.button`
  font-size: 14px;
  font-weight: 300;
  width: 104px;
  height: 26px;
  border-radius: 27px;
  background-color: #fff6e3;
  color: #ba8620;
  border: none;
  margin-right: 8px;
  @media only screen and (max-width: 821px) {
    font-size: 11px;
  }
`;

export const TypeOfContractStyled = styled.div`
    display:flex;
    height:50%;
    justify-content: flex-end;
    margin: 0 16px 16px 0;
    align-items: flex-end;
`;

// export const RightDescriptionStyled = styled.p`
//   font-size: 14px;
//   line-height: 14px;
//   font-weight: 300;
//   color: #3b4341;
//   margin-right: 10px;
//   @media only screen and (max-width: 821px) {
//     font-size: 9px;
//   }
//   @media only screen and (max-width: 400px) {
//     font-size: 8px;
//   }
// `;
export const MoneyStyled = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const TypePriceStyled = styled.p`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #ba8620;
  @media only screen and (max-width: 821px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
export const NumberStyled = styled.p`
  font-size: 32px;
  line-height: 23px;
  font-weight: 700;
  color: #ba8620;
  @media only screen and (max-width: 821px) {
    font-size: 23px;
    line-height: 20px;
  }
`;





