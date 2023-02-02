import Image from "next/image";
import React from "react";
import { ModalWarning } from "../../../../../../public/images/modal_warning";
import { Button } from "../../../../../../components/elements/Button/index";
import {
  // LeftTitleStyled,
  TextStyled,
  // WarningStyled,
  ItemLeftStyled,
  // WarningDescriptionStyled,
  // WarningTitleStyled,
  ItemRightStyled,
  BoxStyled,
  // AvatarStyled,
  ItemModalStyled,
  ListLabelStyled,
  LabelStyled,
  // TypeOfContractStyled,
  // MoneyStyled,
  TypePriceStyled,
  NumberStyled,
  ItemRightActiveStyled,
} from "./styled";

import { TItemAmountReceive, TItemAmountReceiveActive } from "./types";

const warningTitle = "保障の対象外です";

export const ItemAmountReceive = (props: TItemAmountReceive) => {
  const { icon, title } = props;
  return (
    <ItemModalStyled>
      <ItemLeft icon={icon} title={title} />
      <ItemRightStyled>
        <BoxStyled padding={"13px 16px"}>
          <BoxStyled display={"flex"} alignItems={"center"} columnGap={"7px"}>
            <ModalWarning />
            <TextStyled
              fontSize={"16px"}
              lightHeight={"16px"}
              fontWeight={"500"}
              color={"#fff"}
            >
              {warningTitle}
            </TextStyled>
          </BoxStyled>
          <TextStyled
            fontSize={"10px"}
            lightHeight={"15px"}
            fontWeight={"300"}
            color={"#fff"}
            marginTop={"14px"}
          >
            入力内容と本シミュレーションの算出条件を考慮すると、
            対象外の可能性が高いです。<br></br>
            ご家族の詳細情報やお住いの市区町村などの条件により、
            対象になる場合もあります。<br></br>
            より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
          </TextStyled>
        </BoxStyled>
      </ItemRightStyled>
    </ItemModalStyled>
  );
};
export const ItemLeft = (props: TItemAmountReceive) => {
  const { icon, title } = props;
  return (
    <ItemLeftStyled>
      <BoxStyled margin={" 0 12px 0 16px"}>
        <Image alt="header-girl" src={icon} width={48} height={48} />
      </BoxStyled>
      <TextStyled
        fontSize={"19px"}
        fontWeight={"500"}
        lightHeight={"26px"}
        whiteSpace={"pre-line"}
      >
        {title}
      </TextStyled>
    </ItemLeftStyled>
  );
};

export const ItemAmountReceiveActive = (props: TItemAmountReceiveActive) => {
  const { labels, money, icon, title, description } = props;

  return (
    <ItemModalStyled>
      <ItemLeft icon={icon} title={title} />
      <ItemRightActiveStyled>
        <ListLabelStyled>
          {labels?.map((label, index) => {
            return <LabelStyled key={index}>{label}</LabelStyled>;
          })}
        </ListLabelStyled>

        <BoxStyled
          display={"flex"}
          height={"50%"}
          justifyContent={"flex-end"}
          margin={"0 16px 16px 0"}
          alignItems={"flex-end"}
        >
          <TextStyled
            fontSize={"14px"}
            fontWeight={"300"}
            lightHeight={"14px"}
            color={"#3b4341"}
            marginRight={"10px"}
          >
            {description}
          </TextStyled>
          <BoxStyled display={"flex"} alignItems={"flex-end"}>
            {money > 100 && <TypePriceStyled>最大</TypePriceStyled>}
            <NumberStyled>{money}</NumberStyled>
            <TypePriceStyled>万円</TypePriceStyled>
          </BoxStyled>
          <Button />
        </BoxStyled>
      </ItemRightActiveStyled>
    </ItemModalStyled>
  );
};
