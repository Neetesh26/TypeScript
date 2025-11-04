declare class department {
    protected num: number;
    name: string;
    protected employee: string[];
    constructor(n: string);
    addEmployee(user: string): void;
    describe(): void;
}
declare class AccoountingDepart extends department {
    private reports;
    constructor(reports: string[]);
    addReports(text: string): void;
    printReports(): void;
    addEmployee(user: string): void;
    get getReport(): string[];
    set setReports(val: string);
}
declare const accdep: AccoountingDepart;
