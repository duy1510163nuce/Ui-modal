export type TItemModal = {
  isActive: boolean;
  labels: string[];
  money: number;
};

export type TMoneyPlanRepository = {
  whenHeDie: TItemModal;
  whenMedicalHigh: TItemModal;
  whenHeNotWork: TItemModal;
  whenInTrouble: TItemModal;
  whenChildBorn: TItemModal;
};