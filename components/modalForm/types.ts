export type TItemModal = {
  isActive: boolean;
  // labels: string[];
  money: number;
};
export type TItemActive = {
  // label: string[];
  money: number;
};
export type TItemNotActive = {
  isActive: boolean;
};

export type TDataModalProps = {
  data: {
    whenHeDie: TItemModal;
    whenMedicalHigh: TItemModal;
    whenHeNotWork: TItemModal;
    whenInTrouble: TItemModal;
    whenChildBorn: TItemModal;
  };
};

export type TDataModal = {
  whenHeDie: TItemModal;
  whenMedicalHigh: TItemModal;
  whenHeNotWork: TItemModal;
  whenInTrouble: TItemModal;
  whenChildBorn: TItemModal;
};

export type TFetchData = {
  data: {
    whenHeDie: TItemModal;
    whenMedicalHigh: TItemModal;
    whenHeNotWork: TItemModal;
    whenInTrouble: TItemModal;
    whenChildBorn: TItemModal;
  };
};
