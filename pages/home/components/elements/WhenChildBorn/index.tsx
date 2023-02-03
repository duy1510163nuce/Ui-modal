import React from "react";
import { TItemAmountReceive } from "./types";
import { ItemAmountReceive, ItemAmountReceiveActive } from "../ItemAmountReceive";

export function WhenChildBorn(props: TItemAmountReceive) {
  const { isActive, labels, money, icon, title, description } = props;

  if (isActive) {
    return (
      <ItemAmountReceiveActive
        icon={icon}
        labels={labels}
        money={money}
        title={title}
        description={description}
      />
    );
  }
  return <ItemAmountReceive icon={icon} title={title} />;
}
