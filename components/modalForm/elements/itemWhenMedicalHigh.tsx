import Image from "next/image";
import React from "react";
import { ModalWarning } from "../../../public/images/modal_warning";
import {
  ButtonSolution,
  WrapItemModal,
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
} from "../styled";
import { TItemModal } from "../types";
import { ButtonModal } from "./button";


const iconWhenMedicalHigh = "/images/medicalExpenses.png";
const nameWhenMedicalHigh = "病気やケガで \n 医療費が高額になった時";
const rules = "ひと月あたり自己負担上限額";
const warningTitle = "保障の対象外です";
const labels = ["高額療養費制度"]
export default function ItemWhenMedicalHigh(props: TItemModal) {
  const { isActive,  money } = props;

  const ItemWhenMedicalHighActive = () => {
    return (
      <WrapItemModal>
        <UserItemStyled>
          <WrapImageSolution>
            <Image
              alt="header-girl"
              src={iconWhenMedicalHigh}
              width={48}
              height={48}
            />
          </WrapImageSolution>
          <NameStyled>{nameWhenMedicalHigh}</NameStyled>
        </UserItemStyled>

        <DetailItemStyled primary>
          <SolutionStyled>
            {labels?.map((label, index) => {
              return <ButtonSolution key={index}>{label}</ButtonSolution>;
            })}
          </SolutionStyled>
          <TypeOfContractStyled>
            <TimeStyled>{rules}</TimeStyled>
            <WrapMoney>
              <NumberStyled>{money}</NumberStyled>
              <PriceStyled>万円</PriceStyled>
            </WrapMoney>
            <ButtonModal />
          </TypeOfContractStyled>
        </DetailItemStyled>
      </WrapItemModal>
    );
  };
  const ItemWhenMedicalHighNotActive = () => {
    return (
      <WrapItemModal>
        <UserItemStyled>
          <WrapImageSolution>
            <Image
              alt="header-girl"
              src={iconWhenMedicalHigh}
              width={48}
              height={48}
            />
          </WrapImageSolution>
          <NameStyled>{nameWhenMedicalHigh}</NameStyled>
        </UserItemStyled>
        <WrapAfterClickDetail>
          <WrapDetailStyled>
            <WarningTitleStyled>
              <ModalWarning />
              <TitleTextStyled>{warningTitle}</TitleTextStyled>
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
      </WrapItemModal>
    );
  };

  return (
    <div>
      {isActive ? (
        <ItemWhenMedicalHighActive />
      ) : (
        <ItemWhenMedicalHighNotActive />
      )}
    </div>
  );
}
