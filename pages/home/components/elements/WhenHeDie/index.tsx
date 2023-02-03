import React from "react";
import { ItemAmountReceive, ItemAmountReceiveActive } from "../ItemAmountReceive";
import { TItemAmountReceive } from "./types";



export function WhenHeDie(props: TItemAmountReceive) {
  const {
    isActive,
    labels,
    money,
    icon,
    title,
    description,
  } = props;

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
