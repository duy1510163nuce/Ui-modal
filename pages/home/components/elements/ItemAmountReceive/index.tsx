import Image from "next/image";
import React from "react";
import { ModalWarning } from "../../../../../public/images/modal_warning";
import { Button } from "../../../../../components/elements/Button/index";
import { Text, Box,Flex} from "../../../../../components/elements/Styled/styled";
import { ItemLeftStyled, ItemRight, ListLabel, Label } from "./styled";
import { TItemAmountReceive, TItemAmountReceiveActive } from "./types";

const warningTitle = "保障の対象外です";

export const ItemAmountReceive = (props: TItemAmountReceive) => {
  const { icon, title } = props;
  return (
    <Box
      width={"100%"}
      borderRadius={"10px"}
      display={"flex"}
      marginBottom={"12px"}
      overflow={"hidden"}
      displayMobileHorizontal={"flex"}
      flexDirection={"column"}
    >
      <ItemLeft icon={icon} title={title} />
      <ItemRight backgroundColor={"#91b3a9"}>
        <Box padding={"13px 16px"}>
          <Box 
            display={"flex"} 
            alignItems={"center"} 
            columnGap={"7px"}
            flexDirection={"row"}
          >
            <ModalWarning />
            <Text
              fontSize={"16px"}
              lineHeight={"16px"}
              fontWeight={"500"}
              color={"#fff"}
            >
              {warningTitle}
            </Text>
          </Box>
          <Text
            fontSize={"10px"}
            lineHeight={"15px"}
            fontWeight={"300"}
            color={"#fff"}
            marginTop={"14px"}
            TFontSize={"8px"}
          >
            入力内容と本シミュレーションの算出条件を考慮すると、
            対象外の可能性が高いです。<br></br>
            ご家族の詳細情報やお住いの市区町村などの条件により、
            対象になる場合もあります。<br></br>
            より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
          </Text>
        </Box>
      </ItemRight>
    </Box>
  );
};
export const ItemLeft = (props: TItemAmountReceive) => {
  const { icon, title } = props;
  return (
    <ItemLeftStyled>
      <Box margin={" 0 12px 0 16px"} MPadding={"0 10px"}>
        <Image alt="header-girl" src={icon} width={48} height={48} />
      </Box>
      <Text
        fontSize={"19px"}
        fontWeight={"500"}
        lineHeight={"26px"}
        whiteSpace={"pre-line"}
        TFontSize={"14px"}
      >
        {title}
      </Text>
    </ItemLeftStyled>
  );
};

export const ItemAmountReceiveActive = (props: TItemAmountReceiveActive) => {
  const { labels, money, icon, title, description } = props;

  return (
    <Box
      width={"100%"}
      borderRadius={"10px"}
      display={"flex"}
      marginBottom={"12px"}
      overflow={"hidden"}
      displayMobileHorizontal={"flex"}
      flexDirection={"column"}
    >
      <ItemLeft icon={icon} title={title} />
      <ItemRight backgroundColor={"#fff"}>
        <ListLabel>
          {labels?.map((label, index) => {
            return <Label key={index}>{label}</Label>;
          })}
        </ListLabel>

        <Box
          display={"flex"}
          height={"50%"}
          justifyContent={"flex-end"}
          padding={"0 16px 16px 0"}
          alignItems={"flex-end"}
        >
          <Text
            fontSize={"14px"}
            fontWeight={"300"}
            lineHeight={"14px"}
            color={"#3b4341"}
            marginRight={"10px"}
            TFontSize={"8px"}
          >
            {description}
          </Text>
          <Box display={"flex"} alignItems={"flex-end"}>
            {money > 100 && (
              <Text
                fontSize={"20px"}
                lineHeight={"20px"}
                fontWeight={"700"}
                color={"#ba8620"}
                MFontSize={"10px"}  
                
              >
                最大
              </Text>
            )}
            <Text
              fontSize={"32px"}
              lineHeight={"23px"}
              fontWeight={"700"}
              color={"#ba8620"}
              MFontSize={"25px"}  
            >
              {money}
            </Text>
            <Text
              fontSize={"20px"}
              lineHeight={"20px"}
              fontWeight={"700"}
              color={"#ba8620"}
              MFontSize={"10px"}  
            >
              万円
            </Text>
          </Box>
          <Button />
        </Box>
      </ItemRight>
    </Box>
  );
};
