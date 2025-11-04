type combinable = string | number;
declare function abc(a: combinable, b: combinable): string;
type Admin = {
    name: string;
    privillage: string[];
};
type employee = {
    name: string;
    startDate: Date;
};
type ElevatedEmployee = Admin & employee;
type UnknowEmployee = Admin | employee;
declare const emp1: ElevatedEmployee;
declare function printEmployee(emp: UnknowEmployee): void;
declare class car {
    drive(): void;
}
declare class truck {
    drive(): void;
    loaded(amount: number): void;
}
type Vehical = car | truck;
declare const c1: car;
declare const c2: truck;
declare function useVehical(vehical: Vehical): void;
