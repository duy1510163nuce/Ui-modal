// import { TItemAmountReceive } from "../../components/elements/AmountReceiveModal/ItemCommonActive/types";

// import { TItemCommonActive } from "../../components/elements/AmountReceiveModal/ItemCommonActive/types";

export type TMoneyPlanRepositoryGetResponse = {
  data: {
    whenHeDie: TMockType  ;
    whenMedicalHigh: TMockType  ;
    whenHeNotWork: TMockType  ;
    whenInTrouble: TMockType  ;
    whenChildBorn: TMockType  ;
  } | undefined;
};

export type TMockType = {
    isActive: boolean;
    labels:string[];
    money:number;
}


