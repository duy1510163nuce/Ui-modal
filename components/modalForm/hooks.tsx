import react, { useState } from "react";
import { dataMock } from "./dataMock";
import { TDataModal, TDataModalProps, TFetchData } from "./types";

export const fetchData = () => {
  const listData = dataMock;

  return {
    listData,
  };
};


