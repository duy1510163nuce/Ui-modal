import { TMoneyPlanRepositoryGetResponse } from "./types";
export const dataMock: TMoneyPlanRepositoryGetResponse = {
  data: {
    whenHeDie: {
      isActive: false,
      labels: ["survivorsBasicPension", "survivorsWelfarePension"],
      money: 16,
    },
    whenMedicalHigh: {
      isActive: true,
      labels: ["highMedicalExpensesSystem"],
      money: 11,
    },
    whenHeNotWork: {
      isActive: true,
      labels: ["injuryAndSicknessAllowance"],
      money: 20,
    },
    whenInTrouble: {
      isActive: true,
      labels: ["disabilityBasicPension", "disabilityWelfarePension"],
      money: 20,
    },
    whenChildBorn: {
      isActive: true,
      labels: [
        "childbirthAndChildcareLump-SumGrant",
        "maternityAllowance",
        "childcareLeaveBenefits",
      ],
      money: 294,
    },
  },
};
