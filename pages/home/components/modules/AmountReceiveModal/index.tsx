// import { ContentAmountReceive } from "../../elements/AmountReceiveModal/ContentAmountReceive";
// import { useAmountReceive } from "./hooks";
// import { Image } from "../../../../../styles/themes";
import { Modal } from "@chakra-ui/react";
import { ContentAmountReceive } from "../../elements/AmountReceiveModal/ContentAmountReceive";
import { useAmountReceive } from "./hooks";
import {
  HeaderImgManStyled,
  TextStyled,
  Image,
  HomeBodyStyled,
  ModalHeaderStyled,
  ModalStyled,
} from "./styled";

const Component = (props: ReturnType<typeof useAmountReceive>): JSX.Element => {
  const {data, isOpen, onClose } = props;

  return (
    <HomeBodyStyled>
      <ModalStyled>
      {/* <Modal isOpen={isOpen} onClose={onClose}> */}
        <ModalHeaderStyled>
          <Image
            alt="header-girl"
            src="/images/Frame 46485.png"
            width={"132px"}
            height={"101px"}
            paddingTop={"9px"}
          />
          <TextStyled
            fontSize={"24px"}
            fontWeight={"500"}
            lineHeight={"24px"}
            color={"#ffff"}
          >
            あなたが公的保険で受け取れる金額
          </TextStyled>
          <Image
            alt="header-girl"
            src="/images/headerImageMan.png"
            width={"132px"}
            height={"101px"}
            paddingTop={"3px"}
          />
        </ModalHeaderStyled>
       {data && <ContentAmountReceive data={data} />}
       </ModalStyled>
      
       {/* </Modal> */}
    </HomeBodyStyled>
  );
};

export const ModalAmountReceive = (): JSX.Element => {
  return <Component {...useAmountReceive()} />;
};
