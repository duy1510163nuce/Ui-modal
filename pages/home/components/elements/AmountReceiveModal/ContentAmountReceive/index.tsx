import React, { FC } from "react";
import { WhenHeDie } from "../WhenHeDie";
import { WhenChildBorn } from "../WhenChildBorn";
import { WhenHeNotWork } from "../WhenHeNotWork";
import { WhenInTrouble } from "../WhenInTrouble";
import { WhenMedicalHigh } from "../WhenMedicalHigh";
import { ModalBodyStyled } from "./styled";
import { TMoneyPlanRepositoryGetResponse } from "../../../../../../repositories/ServiceAmountReceiveRepository/types";


const iconWhenHeDie = "/images/imageDie.png";
const titleWhenHeDie = "亡くなった時";
const descriptionWhenHeDie = "ひと月あたり";

const iconWhenMedicalHigh = "/images/medicalExpenses.png";
const titleWhenMedicalHigh = "病気やケガで \n 医療費が高額になった時";
const descriptionWhenMedicalHigh = "ひと月あたり自己負担上限額";

const iconWhenHeNotWork = "/images/work.png";
const titleWhenHeNotWork = "働けなくなった時";
const descriptionWhenHeNotWork = "ひと月あたり";

const iconWhenInTrouble = "/images/trouble.png";
const titleWhenInTrouble = "障害状態になった時";
const descriptionWhenInTrouble = "障害等級2級の場合 ひと月あたり";

const iconWhenChildBorn = "/images/imageDie.png";
const titleWhenChildBorn = "亡くなった時";
const descriptionWhenChildBorn = "ひと月あたり";

export const ContentAmountReceive: FC< { data: TMoneyPlanRepositoryGetResponse } > = (
  props: { data: TMoneyPlanRepositoryGetResponse }
): JSX.Element => {
  const data = props?.data?.data;
 
  
  return (
    <ModalBodyStyled>
      {data?.whenHeDie && (
        <WhenHeDie
          money={data.whenHeDie.money}
          labels={data.whenHeDie.labels}
          isActive={data.whenHeDie.isActive}
          icon={iconWhenHeDie}
          title={titleWhenHeDie}
          description={descriptionWhenHeDie}
        />
      )}
      {data?.whenMedicalHigh && (
        <WhenMedicalHigh
          money={data.whenMedicalHigh.money}
          labels={data.whenMedicalHigh.labels}
          isActive={data.whenMedicalHigh.isActive}
          icon={iconWhenMedicalHigh}
          title={titleWhenMedicalHigh}
          description={descriptionWhenMedicalHigh}
        />
      )}
      {data?.whenHeNotWork && (
        <WhenHeNotWork
          money={data.whenHeNotWork.money}
          labels={data.whenHeNotWork.labels}
          isActive={data.whenHeNotWork.isActive}
          icon={iconWhenHeNotWork}
          title={titleWhenHeNotWork}
          description={descriptionWhenHeNotWork}
        />
      )}
      {data?.whenInTrouble && (
        <WhenInTrouble
          money={data.whenInTrouble.money}
          labels={data.whenInTrouble.labels}
          isActive={data.whenInTrouble.isActive}
          icon={iconWhenInTrouble}
          title={titleWhenInTrouble}
          description={descriptionWhenInTrouble}
        />
      )}
      {data?.whenChildBorn && (
        <WhenChildBorn
          money={data.whenChildBorn.money}
          labels={data.whenChildBorn.labels}
          isActive={data.whenChildBorn.isActive}
          icon={iconWhenChildBorn}
          title={titleWhenChildBorn}
          description={descriptionWhenChildBorn}
        />
      )}
    </ModalBodyStyled>
  );
};
