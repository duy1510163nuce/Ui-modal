
import { useAmountReceive } from "./hooks";
import { ContentAmountReceive } from "../../../../../components/elements/AmountReceiveModal/ContentAmountReceive";
import { HeaderImgManStyled, HeaderImgWoManStyled, HeaderTitleStyled, HomeBodyStyled, ModalHeaderStyled, ModalStyled } from "./styled";

const Component = (props: ReturnType<typeof useAmountReceive>): JSX.Element => {
  const {} = props
  

  return (
    <HomeBodyStyled>
      <ModalStyled>
        <ModalHeaderStyled>
          <HeaderImgWoManStyled alt="header-girl" src="/images/Frame 46485.png" />
          {/* <TextStyled
            fontSize={"24px"}
            fontWeight={"500"}
            lineHeight={"24px"}
            color={"#ffff"}
          >
            あなたが公的保険で受け取れる金額
          </TextStyled> */}
          <HeaderTitleStyled
          >
            あなたが公的保険で受け取れる金額
          </HeaderTitleStyled>
          <HeaderImgManStyled alt="header-girl" src="/images/headerImageMan.png" />
        </ModalHeaderStyled>
        <ContentAmountReceive {...props} />
        
      </ModalStyled>
    </HomeBodyStyled>
  );
};

export const ModalAmountReceive = (): JSX.Element => {
  return <Component {...useAmountReceive()} />;
};
