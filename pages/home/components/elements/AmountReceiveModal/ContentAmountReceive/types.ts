

export type TContentAmountReceiveProps = {

    whenHeDie: TMockType ;
    whenMedicalHigh: TMockType ;
    whenHeNotWork: TMockType ;
    whenInTrouble: TMockType ;
    whenChildBorn: TMockType ;
 
};

export type TMockType = {
    isActive: boolean;
    labels:string[]|undefined;
    money:number;
}