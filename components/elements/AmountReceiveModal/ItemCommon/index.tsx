import Image from "next/image";
import React from "react";
import { ModalWarning } from "../../../../public/images/modal_warning";
// import { TItemModal } from "./types";
import {
  // LeftTitleStyled,
  TextStyled,
  WarningStyled,
  ItemLeftStyled,
  // WarningDescriptionStyled,
  // WarningTitleStyled,
  ItemRightStyled,
  BoxStyled,
  AvatarStyled,
  ItemModalStyled,
  // BoxStyle
  
} from "./styled";
import { TItemCommon } from "./types";

const warningTitle = "保障の対象外です";
export const ItemCommon = (props: TItemCommon) => {
  const { icon, title } = props;
  return (
    <ItemModalStyled>
      <ItemLeftStyled>
        <AvatarStyled>
          <Image alt="header-girl" src={icon} width={48} height={48} />
        </AvatarStyled>
        <TextStyled
          fontSize={'19px'}
          fontWeight={'500'}
          lightHeight={'26px'}
          whiteSpace={'pre-line'}
        >{title}
        </TextStyled>
      </ItemLeftStyled>
      <ItemRightStyled>
        <BoxStyled>
          <WarningStyled>
            <ModalWarning />
            {/* <WarningTitleStyled>
              {warningTitle}
            </WarningTitleStyled> */}
             <TextStyled
                fontSize={'16px'}
                lightHeight={'16px'}
                fontWeight={'500'}
                color={'#fff'}
             >
              {warningTitle}
            </TextStyled>
          </WarningStyled>
          <TextStyled
            fontSize={'10px'}
            lightHeight={'15px'}
            fontWeight={'300'}
            color={'#fff'}
            marginTop={'14px'}
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
