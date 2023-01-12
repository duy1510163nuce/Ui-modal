import Image from "next/image";
import React from "react";
import { ModalWarning } from "../../public/images/modal_warning";
import {
  ButtonSolution,
  ContentItemStyled,
  DetailItemStyled,
  NameStyled,
  NumberStyled,
  PriceStyled,
  SolutionStyled,
  TimeStyled,
  TitleTextStyled,
  TypeOfContractStyled,
  UserItemStyled,
  WarningDescriptionStyled,
  WarningTitleStyled,
  WrapAfterClickDetail,
  WrapDetailStyled,
  WrapImageSolution,
  WrapMoney,
} from "../../styles/styled";
import { dataContentModal } from "../../const/data_content_modal";
import { ButtonModal } from "../elements/button_modal";
import { TDataModalItem } from "../../types/modal_item";

export default function ContentModalItem() {
  // const {dataContentModal} = props
  return (
    <>
      {dataContentModal.map((item: TDataModalItem) => {
        return (
          <ContentItemStyled key={item.id}>
            <UserItemStyled>
              <WrapImageSolution>
                <Image
                  alt="header-girl"
                  src={item.image}
                  width={48}
                  height={48}
                />
              </WrapImageSolution>
              <NameStyled>{item.name}</NameStyled>
            </UserItemStyled>
            {item.type === "true" ? (
              <DetailItemStyled primary>
                <SolutionStyled>
                  {item.solution?.map((detail, index) => {
                    return (
                      <ButtonSolution key={index}>{detail}</ButtonSolution>
                    );
                  })}
                </SolutionStyled>
                <TypeOfContractStyled>
                  <TimeStyled>{item.rules}</TimeStyled>
                  <WrapMoney>
                    <PriceStyled>{item.level}</PriceStyled>
                    <NumberStyled>{item.price}</NumberStyled>
                    <PriceStyled>万円</PriceStyled>
                  </WrapMoney>
                  <ButtonModal />
                </TypeOfContractStyled>
              </DetailItemStyled>
            ) : (
              <WrapAfterClickDetail>
                <WrapDetailStyled>
                  <WarningTitleStyled>
                    <ModalWarning />
                    <TitleTextStyled>保障の対象外です</TitleTextStyled>
                  </WarningTitleStyled>
                  <WarningDescriptionStyled>
                    入力内容と本シミュレーションの算出条件を考慮すると、
                    対象外の可能性が高いです。<br></br>
                    ご家族の詳細情報やお住いの市区町村などの条件により、
                    対象になる場合もあります。<br></br>
                    より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
                  </WarningDescriptionStyled>
                </WrapDetailStyled>
              </WrapAfterClickDetail>
            )}
          </ContentItemStyled>
        );
      })}
    </>
  );
}
