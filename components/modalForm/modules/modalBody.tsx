import React, { FC, useCallback, useMemo, useState } from "react";
import { WrapContentModal } from "../styled";
import ItemWhenChildBorn from "../elements/itemWhenChildBorn";
import ItemWhenHeDie from "../elements/itemWhenHeDie";
import ItemWhenHeNotWork from "../elements/itemWhenHeNotWork";
import ItemWhenInTrouble from "../elements/itemWhenInTrouble";
import ItemWhenMedicalHigh from "../elements/itemWhenMedicalHigh";
import { TDataModal, TDataModalProps } from "../types";

const ModalContent: FC<TDataModalProps> = (
  props: TDataModalProps
): JSX.Element => {
  const { data } = props;

  return (
    <WrapContentModal>
      {data.whenHeDie && (
        <ItemWhenHeDie
          money={data.whenHeDie.money}
          isActive={data.whenHeDie.isActive}
        />
      )}
      {data.whenMedicalHigh && (
        <ItemWhenMedicalHigh
          money={data.whenMedicalHigh.money}
          isActive={data.whenMedicalHigh.isActive}
        />
      )}
      {data.whenHeNotWork && (
        <ItemWhenHeNotWork
          money={data.whenHeNotWork.money}
          isActive={data.whenHeNotWork.isActive}
        />
      )}
      {data.whenInTrouble && (
        <ItemWhenInTrouble
          money={data.whenInTrouble.money}
          isActive={data.whenInTrouble.isActive}
        />
      )}
      {data.whenChildBorn && (
        <ItemWhenChildBorn
          money={data.whenChildBorn.money}
          isActive={data.whenChildBorn.isActive}
        />
      )}
    </WrapContentModal>
  );
};
export default ModalContent;
