import { TMoneyPlanRepositoryGetResponse } from "../../../../../repositories/ServiceAmountReceiveRepository/types";


function getLabelWhenHeDie(labels: string[]) {
  return labels?.map((label: string) => {
    if (label === "survivorsBasicPension") {
      return "遺族基礎年金";
    }
    if (label === "survivorsWelfarePension") {
      return "遺族厚生年金";
    }
    return label;
  });
}
function getLabelWhenMedicalHigh(labels: string[]) {
  return labels?.map((label: string) => {
    if (label === "highMedicalExpensesSystem") {
      return "高額療養費制度";
    }
    return label;
  });
}
function getLabelWhenHeNotWork(labels: string[]) {
  return labels?.map((label: string) => {
    if (label === "injuryAndSicknessAllowance") {
      return "傷病手当金";
    }
    return label;
  });
}
function getLabelWhenInTrouble(labels: string[]) {
  return labels?.map((label: string) => {
    if (label === "disabilityBasicPension") {
      return "障害基礎年金";
    }
    if (label === "disabilityWelfarePension") {
      return "障害厚生年金";
    }
    return label;
  });
}
function getLabelWhenChildBorn(labels: string[]) {
  return labels?.map((label: string) => {
    if (label === "childbirthAndChildcareLump-SumGrant") {
      return "出産育児一時金";
    }
    if (label === "maternityAllowance") {
      return "出産手当金";
    }
    if (label === "childcareLeaveBenefits") {
      return "育児休業給付金";
    }
    return label;
  });
}

export const convertAmountReceive = (data: TMoneyPlanRepositoryGetResponse) => {
  return {
    data: {
      whenHeDie: {
        isActive: data?.data?.whenHeDie.isActive,
        labels: getLabelWhenHeDie(data?.data?.whenHeDie.labels),
        money: data?.data?.whenHeDie.money,
      },
      whenMedicalHigh: {
        labels: getLabelWhenMedicalHigh(data?.data?.whenMedicalHigh?.labels),
        money: data?.data?.whenMedicalHigh.money,
        isActive: data?.data?.whenMedicalHigh.isActive,
      },
      whenHeNotWork: {
        labels: getLabelWhenHeNotWork(data?.data?.whenHeNotWork.labels),
        money: data?.data?.whenHeNotWork.money,
        isActive: data?.data?.whenHeNotWork.isActive,
      },
      whenInTrouble: {
        labels: getLabelWhenInTrouble(data?.data?.whenInTrouble.labels),
        money: data?.data?.whenInTrouble.money,
        isActive: data?.data?.whenInTrouble.isActive,
      },
      whenChildBorn: {
        labels: getLabelWhenChildBorn(data?.data?.whenChildBorn.labels),
        money: data?.data?.whenChildBorn.money,
        isActive: data?.data?.whenChildBorn.isActive,
      },
    },
  };
};
