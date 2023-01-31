import react, { useEffect, useMemo, useState } from "react";
import { ModalMoneyPlanRepository } from "../../../../../repositories/ServiceAmountReceive";
import { TMoneyPlanRepositoryGetResponse } from "../../../../../repositories/ServiceAmountReceive/types";
import { convertAmountReceive } from "./utils";

export const useAmountReceive = () => {
  const { data } = useFetch();
  // useEffect(()=>{
  //   // convertAmountReceive(data);
  // },[])
  return {
    data,
  };
};

// const useFetch = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState<TMoneyPlanRepositoryGetResponse | undefined>(
//     undefined
//   );

//   const fetch = async () => {
//     setIsLoading(true);
//     try {
//       const response = await ModalMoneyPlanRepository.get();
//       setData(response);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetch().then();
//   }, []);

//   return {
//     isLoading,
//     data,
//   };
// };

const useFetch = () => {
  const [data, setData] = useState<
    TMoneyPlanRepositoryGetResponse | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);
  const fetchDataModalAmountReceive = async () => {
    setLoading(true);
    try {
      const response = await ModalMoneyPlanRepository.get();
      setData(convertAmountReceive(response));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataModalAmountReceive().then();
  }, []);

  return {
    data,
  };
};
