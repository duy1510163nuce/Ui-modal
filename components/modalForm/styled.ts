import styled from "styled-components";

export const WrapBody = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(26, 55, 47, 0.8);
  min-height: 1200px;
  @media only screen and (min-width: 768px) and(max-width:1000px) {
    min-height: 780px;
  }
`;
export const WrapModal = styled.div`
    max-width:855px
    position:absolute;
    background-color:#91C5B6;
    top:3%;
    width:82%;
    margin:0 9%;
    border-radius: 12px;
    
`;
export const WrapHeader = styled.div`
  width: 80.5%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 400px) {
    // display:flex;
    // flex-direction: column;
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
export const ImageHeaderWoman = styled.image`
  //   padding: 9px 0 0 0;
`;
/**----------------------------- */
export const WrapContentModal = styled.div`
  width: 94%;
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  background-color: #91c5b6;
  padding-bottom: 12px;
  @media only screen and (max-width: 400px) {
    width: 88 %;
    margin: auto;
  }
`;
export const WrapItemModal = styled.div`
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
export const UserItemStyled = styled.div`
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
export const WrapImageSolution = styled.div`
  margin: 0 12px 0 16px;
  @media only screen and (max-width: 400px) {
    // margin-left: 25%;
  }
`;

export const NameStyled = styled.p`
  font-size: 19px;
  font-weight: 500;
  line-height: 26px;
  white-space: pre-line;
  @media only screen and (max-width: 821px) {
    font-size: 13px;
  }
`;

export const DetailItemStyled = styled.div`
  width: 60%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const SolutionStyled = styled.div`
    height:50%
    padding: 16px 0 12px 16px;
    @media only screen and (max-width: 400px)  {
      display:flex;
      justify-content:center;
  }
`;

export const ButtonSolution = styled.button`
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
    height:50%
    justify-content: flex-end;
    margin: 0 16px 16px 0;
    align-items: flex-end;
`;

export const TimeStyled = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
  color: #3b4341;
  margin-right: 10px;
  @media only screen and (max-width: 821px) {
    font-size: 9px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 8px;
  }
`;
export const WrapMoney = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const PriceStyled = styled.p`
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

export const ButtonModalStyled = styled.button`
  background-image: linear-gradient(to left, #d8ba81 0%, #ab8f5a 100%);
  color: #fff;
  border: none;
  border-radius: 24px;
  height: 32px;
  margin-left: 17px;
  padding: 0 16px
  font-size:16px;
  font-weight:500;
  @media only screen and (max-width: 400px) {
    // font-size: 7px;
    font-size: 12px;
  }
`;
// export const TextButtonStyled = styled.p`
//     padding: 0 16px
//     font-size:16px;
//     font-weight:500;
//     @media only screen and (max-width: 821px)  {
//     font-size: 12px;
//   }
//    @media only screen and (max-width: 400px)  {
//     font-size: 12px;
//     padding:0 10px;
//   }
    
// `;

export const WrapAfterClickDetail = styled.div`
  width: 60%;
  background-color: #91b3a9;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 400px) {
    width: 100%;
    white-space: nowrap;
  }
`;
export const WrapDetailStyled = styled.div`
  padding: 13px 16px;
`;

export const WarningTitleStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;
export const TitleTextStyled = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  color: #fff;
  @media only screen and (max-width: 400px) {
  }
`;

export const WarningDescriptionStyled = styled.p`
  font-size: 10px;
  line-height: 15px;
  font-weight: 300;
  color: #fff;
  margin-top: 14px;
  @media only screen and (max-width: 821px) {
    font-size: 7px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 6px;
    text-align: left;
  }
`;
