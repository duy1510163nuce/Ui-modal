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
    padding: 10px 10px;
  }
`;
// export const AvatarStyled = styled.div`
//   margin: 0 12px 0 16px;
//   @media only screen and (max-width: 400px) {
//     // margin-left: 25%;
//   }
// `;
// export const Right = styled.div<any>`
//   width:${(props)=>props.width};
//   margin: ${(props) => props.margin};
//   padding: ${(props) => props.padding};
//   display: ${(props) => props.display};
//   align-items: ${(props) => props.alignItems};
//   column-gap: ${(props) => props.columnGap};
//   height: ${(props) => props.height};
//   justify-content: ${(props) => props.justifyContent};
// `;

// export const TextStyled = styled.p((props: any) => ({
//   ...props,
// }));

// export const LeftTitleStyled = styled.p`
//   font-size: 19px;
//   font-weight: 500;
//   line-height: 26px;
//   white-space: pre-line;
//   @media only screen and (max-width: 821px) {
//     font-size: 13px;
//   }
// `;

export const ItemRight = styled.div<any>`
  width: 60%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 400px) {
    width: 100%;
    white-space: nowrap;
  }
`;
// export const ItemRight = styled.div`
//   width: 60%;
//   background-color: #91b3a9;
//   display: flex;
//   flex-direction: column;
//   @media only screen and (max-width: 400px) {
//     width: 100%;
//     white-space: nowrap;
//   }
// `;

// export const BoxStyled = styled.div`
//   padding: 13px 16px;
// `;

// export const WarningStyled = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 7px;
// `;
// export const WarningTitleStyled = styled.p`
//   font-size: 16px;
//   line-height: 16px;
//   font-weight: 500;
//   color: #fff;
//   @media only screen and (max-width: 400px) {
//   }
// `;

export const ListLabel = styled.div`
  height: 50%;
  padding: 16px 0 12px 16px;
  @media only screen and (max-width: 400px) {
    display: flex;
    justify-content: center;
  }
`;

export const Label = styled.button`
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

// export const TypeOfContractStyled = styled.div`
//   display: flex;
//   height: 50%;
//   justify-content: flex-end;
//   margin: 0 16px 16px 0;
//   align-items: flex-end;
// `;

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
// export const MoneyStyled = styled.div`
//   display: flex;
//   align-items: flex-end;
// `;

// export const TypePriceStyled = styled.p`
//   font-size: 20px;
//   line-height: 20px;
//   font-weight: 700;
//   color: #ba8620;
//   @media only screen and (max-width: 821px) {
//     font-size: 10px;
//     line-height: 12px;
//   }
// `;
// export const NumberStyled = styled.p`
//   font-size: 32px;
//   line-height: 23px;
//   font-weight: 700;
//   color: #ba8620;
//   @media only screen and (max-width: 821px) {
//     font-size: 23px;
//     line-height: 20px;
//   }
// `;
