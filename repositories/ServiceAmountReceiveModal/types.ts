// export type TItemModal = {
//   isActive: boolean;
//   labels: string[];
//   money: number;
// };

import { TItemModal } from "../../components/elements/AmountReceiveModal/WhenHeDie/types";


export type TMoneyPlanRepositoryGetResponse = {
  whenHeDie: TItemModal;
  whenMedicalHigh: TItemModal;
  whenHeNotWork: TItemModal;
  whenInTrouble: TItemModal;
  whenChildBorn: TItemModal;
};