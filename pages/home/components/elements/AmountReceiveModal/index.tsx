import {
  ImageManStyled,
  ImageWomanStyled,
  TitleHeaderStyled,
  HomeBodyStyled,
  HeaderStyled,
  ModalStyled,
} from "./styled";

import { useFetchData } from "./hooks";
import { ContentAmountReceiveModal } from "../../../../../components/elements/AmountReceiveModal/ContentAmountReceiveModal";
import { FC } from "react";
import { TMoneyPlanRepositoryGetResponse } from "../../../../../repositories/ServiceAmountReceiveModal/types";

const Component = (props: ReturnType<typeof useFetchData>): JSX.Element => {
  const { dataAmountReceive } = props;

  return (
    <HomeBodyStyled>
      <ModalStyled>
        <HeaderStyled>
          <ImageWomanStyled alt="header-girl" src="/images/Frame 46485.png" />
          <TitleHeaderStyled>
            あなたが公的保険で受け取れる金額
          </TitleHeaderStyled>
          <ImageManStyled alt="header-girl" src="/images/headerImageMan.png" />
        </HeaderStyled>
        <ContentAmountReceiveModal {...dataAmountReceive} />
      </ModalStyled>
    </HomeBodyStyled>
  );
};

export const ModalAmountReceive:FC<TMoneyPlanRepositoryGetResponse> = (): JSX.Element => {
  return <Component {...useFetchData()} />;
};
