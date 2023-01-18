import { TMoneyPlanRepositoryGetResponse } from "../../../../../repositories/ServiceAmountReceiveModal/types";


export const convertLabels = (data: TMoneyPlanRepositoryGetResponse|undefined) => {
  if (data?.whenHeDie?.labels) {
    const labelsWhenHeDie = data?.whenHeDie.labels;
    labelsWhenHeDie.map((label:string, index:number) => {
      if (label === "SurvivorsBasicPension") {
        return (labelsWhenHeDie[index] = "遺族基礎年金");
      }
      if (label === "SurvivorsWelfarePension") {
        return (labelsWhenHeDie[index] = "遺族厚生年金");
      }
    });
  }
  if (data?.whenMedicalHigh?.labels) {
    const labelsWhenMedicalHigh = data?.whenMedicalHigh.labels;
    labelsWhenMedicalHigh.map((label:string, index:number) => {
      if (label === "HighMedicalExpensesSystem") {
        return (labelsWhenMedicalHigh[index] = "高額療養費制度");
      }
    });
  }
  if (data?.whenHeNotWork?.labels) {
    const labelsWhenHeNotWork = data?.whenHeNotWork.labels;
    labelsWhenHeNotWork.map((label:string, index:number) => {
      if (label === "InjuryAndSicknessAllowance") {
        return (labelsWhenHeNotWork[index] = "傷病手当金");
      }
    });
  }
  if (data?.whenInTrouble?.labels) {
    const labelsWhenInTrouble = data?.whenInTrouble.labels;
    labelsWhenInTrouble.map((label:string, index:number) => {
      if (label === "disabilityBasicPension") {
        return (labelsWhenInTrouble[index] = "障害基礎年金");
      }
      if (label === "DisabilityWelfarePension") {
        return (labelsWhenInTrouble[index] = "障害厚生年金");
      }
    });
  }
  if (data?.whenChildBorn?.labels) {
    const labelsWhenChildBorn = data?.whenChildBorn.labels;
    labelsWhenChildBorn.map((label:string, index:number) => {
      if (label === "ChildbirthAndChildcareLump-SumGrant") {
        return (labelsWhenChildBorn[index] = "出産育児一時金");
      }
      if (label === "maternityAllowance") {
        return (labelsWhenChildBorn[index] = "出産手当金");
      }
      if (label === "ChildcareLeaveBenefits") {
        return (labelsWhenChildBorn[index] = "育児休業給付金");
      }
    });
  }
};