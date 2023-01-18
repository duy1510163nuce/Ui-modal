import { TMoneyPlanRepositoryGetResponse } from './types';
export const dataMock:TMoneyPlanRepositoryGetResponse = {
  whenHeDie: {
    isActive: false,
    labels: ["SurvivorsBasicPension", "SurvivorsWelfarePension"],
    money: 16,
  },
  whenMedicalHigh: {
    isActive: true,
    labels: ["HighMedicalExpensesSystem"],
    money: 11,
  },
  whenHeNotWork: {
    isActive: true,
    labels: ["InjuryAndSicknessAllowance"],
    money: 20,
  },
  whenInTrouble: {
    isActive: true,
    labels: ["disabilityBasicPension", "DisabilityWelfarePension"],
    money: 20,
  },
  whenChildBorn: {
    isActive: true,
    labels: ["ChildbirthAndChildcareLump-SumGrant", "maternityAllowance", "ChildcareLeaveBenefits"],
    money: 294,
  },
};