import Image from "next/image";
import React from "react";
import { ModalWarning } from "../../../../public/images/modal_warning";
import { TItemModal } from "./types";
import { Button } from "../Button/Button";
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
  WrapAfterClickDetailStyled,
  WrapDetailStyled,
  WrapImageSolutionStyled,
  WrapItemModalStyled,
  WrapMoneyStyled,
} from "./styled";

const iconWhenHeNotWork = "/images/work.png";
const nameWhenHeNotWork = "働けなくなった時";
const rules = "ひと月あたり";
const warningTitle = "保障の対象外です";
export function WhenHeNotWork(props: TItemModal) {
  const { isActive,labels, money } = props;

  const WhenHeNotWorkActive = () => {
    return (
      <WrapItemModalStyled>
        <UserItemStyled>
          <WrapImageSolutionStyled>
            <Image
              alt="header-girl"
              src={iconWhenHeNotWork}
              width={48}
              height={48}
            />
          </WrapImageSolutionStyled>
          <NameStyled>{nameWhenHeNotWork}</NameStyled>
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
            <WrapMoneyStyled>
              <NumberStyled>{money}</NumberStyled>
              <PriceStyled>万円</PriceStyled>
            </WrapMoneyStyled>
            <Button />
          </TypeOfContractStyled>
        </DetailItemStyled>
      </WrapItemModalStyled>
    );
  };
  const WhenHeNotWorkNotActive = () => {
    return (
      <WrapItemModalStyled>
        <UserItemStyled>
          <WrapImageSolutionStyled>
            <Image
              alt="header-girl"
              src={iconWhenHeNotWork}
              width={48}
              height={48}
            />
          </WrapImageSolutionStyled>
          <NameStyled>{nameWhenHeNotWork}</NameStyled>
        </UserItemStyled>
        <WrapAfterClickDetailStyled>
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
        </WrapAfterClickDetailStyled>
      </WrapItemModalStyled>
    );
  };

  return (
    <div>
      {isActive ? <WhenHeNotWorkActive /> : <WhenHeNotWorkNotActive />}
    </div>
  );
}
