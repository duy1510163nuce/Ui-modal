import Image from "next/image";
import React from "react";
import { ModalWarning } from "../../../../public/images/modal_warning";
import { TItemModal } from "./types";
import { Button } from "../Button";
import {
  ButtonSolutionStyled,
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
  AfterClickDetailStyled,
  DetailStyled,
  ImageSolutionStyled,
  ItemModalStyled,
  MoneyStyled,
} from "./styled";

const iconWhenMedicalHigh = "/images/medicalExpenses.png";
const nameWhenMedicalHigh = "病気やケガで \n 医療費が高額になった時";
const rules = "ひと月あたり自己負担上限額";
const warningTitle = "保障の対象外です";
export function WhenMedicalHigh(props: TItemModal) {
  const { isActive,labels, money } = props;
  const WhenMedicalHighActive = () => {
    return (
      <ItemModalStyled>
        <UserItemStyled>
          <ImageSolutionStyled>
            <Image
              alt="header-girl"
              src={iconWhenMedicalHigh}
              width={48}
              height={48}
            />
          </ImageSolutionStyled>
          <NameStyled>{nameWhenMedicalHigh}</NameStyled>
        </UserItemStyled>
        <DetailItemStyled primary>
          <SolutionStyled>
            {labels?.map((label, index) => {
              return (
                <ButtonSolutionStyled key={index}>{label}</ButtonSolutionStyled>
              );
            })}
          </SolutionStyled>
          <TypeOfContractStyled>
            <TimeStyled>{rules}</TimeStyled>
            <MoneyStyled>
              <NumberStyled>{money}</NumberStyled>
              <PriceStyled>万円</PriceStyled>
            </MoneyStyled>
            <Button />
          </TypeOfContractStyled>
        </DetailItemStyled>
      </ItemModalStyled>
    );
  };
  const WhenMedicalHighNotActive = () => {
    return (
      <ItemModalStyled>
        <UserItemStyled>
          <ImageSolutionStyled>
            <Image
              alt="header-girl"
              src={iconWhenMedicalHigh}
              width={48}
              height={48}
            />
          </ImageSolutionStyled>
          <NameStyled>{nameWhenMedicalHigh}</NameStyled>
        </UserItemStyled>
        <AfterClickDetailStyled>
          <DetailStyled>
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
          </DetailStyled>
        </AfterClickDetailStyled>
      </ItemModalStyled>
    );
  };

  return (
    <div>
      {isActive ? <WhenMedicalHighActive /> : <WhenMedicalHighNotActive />}
    </div>
  );
}
