import react, { useEffect, useMemo, useState } from "react";
import { modalMoneyPlanRepository } from "../../../../../repositories/ServiceAmountReceiveRepository";
import { TMoneyPlanRepositoryGetResponse } from "../../../../../repositories/ServiceAmountReceiveRepository/types";
import { IModalProps } from "./types";
import { convertAmountReceive } from "./utils";

export const useAmountReceive = (props:IModalProps) => {
  const { data, isLoading } = useFetch();
  
  return {
    data,isLoading,
   ...props
  };
};

const useFetch = () => {
  const [data, setData] = useState<
    TMoneyPlanRepositoryGetResponse | undefined
  >();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetch = async () => {
    setIsLoading(true);
    try {
      const response = await modalMoneyPlanRepository.get();
      setData(
        convertAmountReceive(response)
        // response
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch().then();
  }, []);

  return {
    data,isLoading
  };
};

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  return{
    isOpen,onClose,onOpen
  }
};
