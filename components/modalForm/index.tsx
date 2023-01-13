import {
  ImageManStyled,
  ImageWomanStyled,
  TitleHeaderStyled,
  WrapBody,
  WrapHeader,
  WrapModal,
} from "./styled";
import ModalContent from "./modules/modalBody";
import { fetchData } from "./hooks";
import { TDataModalProps } from "./types";
import { dataMock } from "./dataMock";

const Component = (props: ReturnType<typeof fetchData>): JSX.Element => {
  const { listData } = props;

  return (
    <WrapBody>
      <WrapModal>
        <WrapHeader>
          <ImageWomanStyled alt="header-girl" src="/images/Frame 46485.png" />
          <TitleHeaderStyled>
            あなたが公的保険で受け取れる金額
          </TitleHeaderStyled>
          <ImageManStyled alt="header-girl" src="/images/headerImageMan.png" />
        </WrapHeader>
        <ModalContent data={listData} />
      </WrapModal>
    </WrapBody>
  );
};

const ModalForm = (): JSX.Element => {
  return <Component {...fetchData()} />;
};
export default ModalForm;
