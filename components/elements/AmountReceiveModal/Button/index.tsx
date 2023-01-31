import { SwapRightOutlined } from "@ant-design/icons";
import {ButtonStyled  } from "./styled";
export const Button = () => {
  return (
    <ButtonStyled 
      color = {'#fff'}
      border= {'none'}
      borderRadius= {'24px'}
      height={'32px'}
      marginLeft={'17px'}
      padding={'0 16px'}
      fontSize={'16px'}
      fontWeight={'500'}
    >
        詳しくみる <SwapRightOutlined />
    </ButtonStyled>
  );
};