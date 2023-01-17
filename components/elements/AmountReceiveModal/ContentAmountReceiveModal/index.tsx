import React, { FC, useEffect, useMemo } from "react";
import { convertLabels } from "./utils";
import { WhenChildBorn } from "../WhenChildBorn/WhenChildBorn";
import { WhenHeDie } from "../WhenHeDie/WhenHeDie";
import { WhenHeNotWork } from "../WhenHeNotWork/WhenHeNotWork";
import { WhenInTrouble } from "../WhenInTrouble/WhenInTrouble";
import { WhenMedicalHigh } from "../WhenMedicalHigh/WhenMedicalHigh";
import { WrapContentModalStyled } from "./styled";
import { TContentAmountReceiveProps } from "./types";

export const ContentAmountReceiveModal: FC<TContentAmountReceiveProps> = (
  props: TContentAmountReceiveProps
): JSX.Element => {
  const { data } = props;
  useMemo(() => {
    convertLabels(data);
  }, [data]);

  return (
    <WrapContentModalStyled>
      {data?.whenHeDie && (
        <WhenHeDie
          money={data.whenHeDie.money}
          labels={data.whenHeDie.labels}
          isActive={data.whenHeDie.isActive}
        />
      )}
      {data?.whenMedicalHigh && (
        <WhenMedicalHigh
          money={data.whenMedicalHigh.money}
          labels={data.whenMedicalHigh.labels}
          isActive={data.whenMedicalHigh.isActive}
        />
      )}
      {data?.whenHeNotWork && (
        <WhenHeNotWork
          money={data.whenHeNotWork.money}
          labels={data.whenHeNotWork.labels}
          isActive={data.whenHeNotWork.isActive}
        />
      )}
      {data?.whenInTrouble && (
        <WhenInTrouble
          money={data.whenInTrouble.money}
          labels={data.whenInTrouble.labels}
          isActive={data.whenInTrouble.isActive}
        />
      )}
      {data?.whenChildBorn && (
        <WhenChildBorn
          money={data.whenChildBorn.money}
          labels={data.whenChildBorn.labels}
          isActive={data.whenChildBorn.isActive}
        />
      )}
    </WrapContentModalStyled>
  );
};
