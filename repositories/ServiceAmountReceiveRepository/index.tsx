
import { dataMock } from "./mocks";
import { TMoneyPlanRepositoryGetResponse } from "./types";

class MoneyPlanRepository {
  async get(
    // _params: TMoneyPlanRepositoryGetResponse
  ): Promise<TMoneyPlanRepositoryGetResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(dataMock);
      }, 3500);
    });
  }
} 

export const modalMoneyPlanRepository = new MoneyPlanRepository()
