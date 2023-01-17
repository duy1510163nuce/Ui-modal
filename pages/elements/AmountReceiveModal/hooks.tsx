import react, { useEffect, useState } from "react";
import { dataMock } from "./dataMock";
import { getDataAmountReceiveModal } from "./services";
import { TItemModal, TMoneyPlanRepository } from "./types";

export const useFetchData = () => {
  const [dataAmountReceive, setDataAmountReceive] = useState<
    TMoneyPlanRepository |any
  >();

  useEffect(() => {
    const fetchDataModalAmountReceive = async () => {
      const response = await getDataAmountReceiveModal();
      setDataAmountReceive(response);
    };

    fetchDataModalAmountReceive();
  }, []);

  return {
    dataAmountReceive,
  };
};
