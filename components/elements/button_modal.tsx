import { ButtonModalStyled, TextButtonStyled } from "../../styles/styled";
import { SwapRightOutlined } from "@ant-design/icons";
export const ButtonModal = () => {
  return (
    <ButtonModalStyled>
      <TextButtonStyled>
        詳しくみる <SwapRightOutlined />
      </TextButtonStyled>
    </ButtonModalStyled>
  );
};
