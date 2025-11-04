declare class btl {
    private name;
    constructor(name: string);
    changing(): void;
}
declare let bn1: btl;
declare class college {
    name: string;
    private clgname;
    constructor(name: string);
}
declare class student extends college {
    constructor(name: string, clgname: string);
}
declare class BankAccount {
    private balance;
    private calculateInterest;
    getBalance(): number;
}
declare const account: BankAccount;
