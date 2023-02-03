
import { Spin } from "antd";
import { ContentAmountReceive } from "../../elements/ContentAmountReceive";
import { useAmountReceive } from "./hooks";
import { HomeBody, ModalHeader, ModalStyled, Loading } from "./styled";
import { Text, Image } from "../../../../../components/elements/Styled/styled";
import { IModalProps } from "./types";

const Component = (props: ReturnType<typeof useAmountReceive>): JSX.Element => {
  const { data, isLoading, isOpen, onClose, onOpen } = props;

  return (
    <HomeBody>
      <ModalStyled isOpen={isOpen}>
        <ModalHeader>
          <Image
            alt="header-girl"
            src="/images/Frame 46485.png"
            width={"132px"}
            height={"101px"}
            paddingTop={"9px"}
            displayMobileHorizontal={"none"}
          />
          <Text
            fontSize={"24px"}
            fontWeight={"500"}
            lineHeight={"24px"}
            color={"#ffff"}
            TFontSize={"16px"}
          >
            あなたが公的保険で受け取れる金額
          </Text>
          <Image
            alt="header-girl"
            src="/images/headerImageMan.png"
            width={"132px"}
            height={"101px"}
            paddingTop={"3px"}
            displayMobileHorizontal={"none"}
          />
        </ModalHeader>
        {isLoading ? (
          <center>
            <Spin tip="Loading..." size="large" />
          </center>
        ) : (
          data && <ContentAmountReceive data={data} />
        )}
      </ModalStyled>
    </HomeBody>
  );
};

export const ModalAmountReceive = (props: IModalProps): JSX.Element => {
  return <Component {...useAmountReceive(props)} />;
};
