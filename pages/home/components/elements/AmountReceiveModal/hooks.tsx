import react, { useEffect, useMemo, useState } from "react";
import { ModalMoneyPlanRepository } from "../../../../../repositories/ServiceAmountReceiveModal";
import { TMoneyPlanRepositoryGetResponse } from "../../../../../repositories/ServiceAmountReceiveModal/types";
import { convertLabels } from "./utils";

export const useFetchData = () => {
  const [dataAmountReceive, setDataAmountReceive] = useState<
    TMoneyPlanRepositoryGetResponse |any
  >();
  const [loading, setLoading] = useState(false);
  const fetchDataModalAmountReceive = async () => {
    setLoading(true);
    try {
      const response = await ModalMoneyPlanRepository.get();
      setDataAmountReceive(response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataModalAmountReceive().then();
  }, []);
  useMemo(() => {
    convertLabels(dataAmountReceive);
  }, [dataAmountReceive]);

  return {
    dataAmountReceive,
  };
};
