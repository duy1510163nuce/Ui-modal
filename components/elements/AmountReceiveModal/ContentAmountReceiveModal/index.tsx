import React, { FC } from "react";
import { TMoneyPlanRepositoryGetResponse } from "../../../../repositories/ServiceAmountReceiveModal/types";

import { WhenChildBorn } from "../WhenChildBorn";
import { WhenHeDie } from "../WhenHeDie";
import { WhenHeNotWork } from "../WhenHeNotWork";
import { WhenInTrouble } from "../WhenInTrouble";
import { WhenMedicalHigh } from "../WhenMedicalHigh";
import { ContentModalStyled } from "./styled";
import { TContentAmountReceiveProps } from "./types";

export const ContentAmountReceiveModal: FC<TMoneyPlanRepositoryGetResponse> = (
  props: TMoneyPlanRepositoryGetResponse
): JSX.Element => {
  const { whenHeDie,whenChildBorn,whenHeNotWork,whenInTrouble,whenMedicalHigh } = props;
 

  return (
    <ContentModalStyled>
      {whenHeDie && (
        <WhenHeDie
          money={whenHeDie.money}
          labels={whenHeDie.labels}
          isActive={whenHeDie.isActive}
        />
      )}
      {whenMedicalHigh && (
        <WhenMedicalHigh
          money={whenMedicalHigh.money}
          labels={whenMedicalHigh.labels}
          isActive={whenMedicalHigh.isActive}
        />
      )}
      {whenHeNotWork && (
        <WhenHeNotWork
          money={whenHeNotWork.money}
          labels={whenHeNotWork.labels}
          isActive={whenHeNotWork.isActive}
        />
      )}
      {whenInTrouble && (
        <WhenInTrouble
          money={whenInTrouble.money}
          labels={whenInTrouble.labels}
          isActive={whenInTrouble.isActive}
        />
      )}
      {whenChildBorn && (
        <WhenChildBorn
          money={whenChildBorn.money}
          labels={whenChildBorn.labels}
          isActive={whenChildBorn.isActive}
        />
      )}
    </ContentModalStyled>
  );
};
