import { dataMock } from './dataMock'
import { TMoneyPlanRepository } from './types'


export const getDataAmountReceiveModal = () => {
    return new Promise<TMoneyPlanRepository>((resolve, ) => {
        return resolve(dataMock)
    })
}