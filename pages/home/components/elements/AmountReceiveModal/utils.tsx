import { TMoneyPlanRepositoryGetResponse } from "../../../../../repositories/ServiceAmountReceive/types";


export const convertAmountReceive = (data: TMoneyPlanRepositoryGetResponse) => {
 
  if (data.data?.whenHeDie) {
    const labelsWhenHeDie = data?.data.whenHeDie.labels;
    labelsWhenHeDie.map((label:string, index:number) => {
      if (label === "survivorsBasicPension") {
        return (labelsWhenHeDie[index] = "遺族基礎年金");
      }
      if (label === "survivorsWelfarePension") {
        return (labelsWhenHeDie[index] = "遺族厚生年金");
      }
    });
  }
  if (data.data?.whenMedicalHigh?.labels) {
    const labelsWhenMedicalHigh = data?.data.whenMedicalHigh.labels;
    labelsWhenMedicalHigh.map((label:string, index:number) => {
      if (label === "highMedicalExpensesSystem") {
        return (labelsWhenMedicalHigh[index] = "高額療養費制度");
      }
    });
  }
  if (data.data?.whenHeNotWork?.labels) {
    const labelsWhenHeNotWork = data?.data.whenHeNotWork.labels;
    labelsWhenHeNotWork.map((label:string, index:number) => {
      if (label === "injuryAndSicknessAllowance") {
        return (labelsWhenHeNotWork[index] = "傷病手当金");
      }
    });
  }
  if (data.data?.whenInTrouble?.labels) {
    const labelsWhenInTrouble = data?.data.whenInTrouble.labels;
    labelsWhenInTrouble.map((label:string, index:number) => {
      if (label === "disabilityBasicPension") {
        return (labelsWhenInTrouble[index] = "障害基礎年金");
      }
      if (label === "disabilityWelfarePension") {
        return (labelsWhenInTrouble[index] = "障害厚生年金");
      }
    });
  }
  if (data.data?.whenChildBorn?.labels) {
    const labelsWhenChildBorn = data?.data.whenChildBorn.labels;
    labelsWhenChildBorn.map((label:string, index:number) => {
      if (label === "childbirthAndChildcareLump-SumGrant") {
        return (labelsWhenChildBorn[index] = "出産育児一時金");
      }
      if (label === "maternityAllowance") {
        return (labelsWhenChildBorn[index] = "出産手当金");
      }
      if (label === "childcareLeaveBenefits") {
        return (labelsWhenChildBorn[index] = "育児休業給付金");
      }
    });
  }

  return data
};
