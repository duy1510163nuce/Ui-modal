

export type TMoneyPlanRepositoryGetResponse = {
  data:
     {
        whenHeDie: {
          isActive: boolean;
          labels: string[] ;
          money: number;
        };
        whenMedicalHigh: {
          isActive: boolean;
          labels: string[] ;
          money: number;
        };
        whenHeNotWork: {
          isActive: boolean;
          labels: string[] ;
          money: number;
        };
        whenInTrouble: {
          isActive: boolean;
          labels: string[] ;
          money: number;
        };
        whenChildBorn: {
          isActive: boolean;
          labels: string[] ;
          money: number;
        };
      
    },
    // isLoading: boolean

    // | undefined;
};

// export type TMockType = {
//   isActive: boolean;
//   labels: string[];
//   money: number;
// };
