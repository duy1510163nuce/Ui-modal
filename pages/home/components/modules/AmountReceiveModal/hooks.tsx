import react, { useEffect, useMemo, useState } from "react";
import { modalMoneyPlanRepository } from "../../../../../repositories/ServiceAmountReceiveRepository";
import { TMoneyPlanRepositoryGetResponse } from "../../../../../repositories/ServiceAmountReceiveRepository/types";
import { convertAmountReceive } from "./utils";

export const useAmountReceive = () => {
  const { data } = useFetch();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  return {
    data,
    isOpen,
    onClose,
  };
};

const useFetch = () => {
  const [data, setData] = useState<
    TMoneyPlanRepositoryGetResponse | undefined
  >();
  const [loading, setLoading] = useState(false);
  const fetch = async () => {
    setLoading(true);
    try {
      const response = await modalMoneyPlanRepository.get();
      setData(
        convertAmountReceive(response)
        // response
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch().then();
  }, []);

  return {
    data,
  };
};
