import React from "react";
import { TItemAmountReceive } from "./types";
import { ItemCommonActive } from "../ItemCommonActive";
import { ItemCommon } from "../ItemCommon";

export function WhenMedicalHigh(props: TItemAmountReceive) {
  const { isActive, labels, money, icon, title, description } = props;

  if (isActive) {
    return (
      <ItemCommonActive
        icon={icon}
        labels={labels}
        money={money}
        title={title}
        description={description}
      />
    );
  }
  return <ItemCommon icon={icon} title={title} />;
}
