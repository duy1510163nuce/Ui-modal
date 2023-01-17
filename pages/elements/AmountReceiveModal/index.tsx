import {
  ImageManStyled,
  ImageWomanStyled,
  TitleHeaderStyled,
  WrapBodyStyled,
  WrapHeaderStyled,
  WrapModalStyled,
} from "./styled";

import { useFetchData } from "./hooks";
import { ContentAmountReceiveModal } from "../../../components/elements/AmountReceiveModal/ContentAmountReceiveModal";

const Component = (props: ReturnType<typeof useFetchData>): JSX.Element => {
  const { dataAmountReceive } = props;

  return (
    <WrapBodyStyled>
      <WrapModalStyled>
        <WrapHeaderStyled>
          <ImageWomanStyled alt="header-girl" src="/images/Frame 46485.png" />
          <TitleHeaderStyled>
            あなたが公的保険で受け取れる金額
          </TitleHeaderStyled>
          <ImageManStyled alt="header-girl" src="/images/headerImageMan.png" />
        </WrapHeaderStyled>
        <ContentAmountReceiveModal data={dataAmountReceive} />
      </WrapModalStyled>
    </WrapBodyStyled>
  );
};

export const ModalAmountReceive = (): JSX.Element => {
  return <Component {...useFetchData()} />;
};
