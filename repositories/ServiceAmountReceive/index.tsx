import { dataMock } from "./mock";
import { TMoneyPlanRepositoryGetResponse } from "./types";

class moneyPlanRepository {
  async get(
    // _params: TMoneyPlanRepositoryGetResponse
  ): Promise<TMoneyPlanRepositoryGetResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(dataMock);
      }, 1500);
    });
  }
} 

export const ModalMoneyPlanRepository = new moneyPlanRepository()
