import Image from "next/image";
import React from "react";
import { TItemCommonActive } from "./types";
import { Button } from "../Button/index";
import {
  // ButtonSolutionStyled,
  ItemRightStyled,
  // LeftTitleStyled,
  TextStyled,
  NumberStyled,
  TypePriceStyled,
  LabelsStyled,
  LabelStyled,
  // RightDescriptionStyled,
  TypeOfContractStyled,
  ItemLeftStyled,
  LeftAvatarStyled,
  ItemModalStyled,
  MoneyStyled,
} from "./styled";


export const ItemCommonActive = (props: TItemCommonActive) => {
  const { labels, money,icon,title,description } = props;
  return (
    <ItemModalStyled>
      <ItemLeftStyled>
        <LeftAvatarStyled>
          <Image
            alt="header-girl"
            src={icon}
            width={48}
            height={48}
          />
        </LeftAvatarStyled>
        <TextStyled
          fontSize={'19px'}
          fontWeight={'500'}
          lightHeight={'26px'}
          whiteSpace={'pre-line'}
        >
          {title}
        </TextStyled>
      </ItemLeftStyled>

      <ItemRightStyled >
        <LabelsStyled>
          {labels?.map((label, index) => {
            return (
              <LabelStyled key={index}>{label}</LabelStyled>
            );
          })}
        </LabelsStyled>
        <TypeOfContractStyled>
          <TextStyled
            fontSize={'14px'}
            fontWeight={'300'}
            lightHeight={'14px'}
            color={'#3b4341'}
            marginRight={'10px'}
          >
            {description}
          </TextStyled>
          <MoneyStyled>
            {money>100 &&<TypePriceStyled>最大</TypePriceStyled>}
            <NumberStyled>{money}</NumberStyled>
            <TypePriceStyled>万円</TypePriceStyled>
          </MoneyStyled>
          <Button />
        </TypeOfContractStyled>
      </ItemRightStyled>
    </ItemModalStyled>
  );
};
