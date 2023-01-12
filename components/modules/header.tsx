import React from "react";
import {
  ImageManStyled,
  ImageWomanStyled,
  TitleHeaderStyled,
  WrapHeader,
} from "../../styles/styled";

export default function ModalHeader() {
  return (
    <WrapHeader>
      <ImageWomanStyled alt="header-girl" src="/images/Frame 46485.png" />

      <TitleHeaderStyled>あなたが公的保険で受け取れる金額</TitleHeaderStyled>

      <ImageManStyled alt="header-girl" src="/images/h_image_ right.png" />
    </WrapHeader>
  );
}
