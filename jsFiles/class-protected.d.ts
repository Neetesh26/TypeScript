declare class Employee {
    protected name: string;
    constructor(name: string);
}
declare class Manager extends Employee {
    display(): void;
}
declare const mb: Manager;
