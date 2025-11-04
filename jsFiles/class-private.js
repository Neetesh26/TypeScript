"use strict";
class btl {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
    changing() {
        this.name = "neetesh";
    }
}
let bn1 = new btl("milton");
// bn1.name="jkjh" ❌ private object se variable access nhi kr sakta
bn1.changing();
class college {
    constructor(name) {
        this.name = name;
        this.clgname = "NIT";
    }
}
class student extends college {
    constructor(name, clgname) {
        super(name);
        // this.clgname = clgname; //<------❌ Accessing private property from parent class
    }
}
class BankAccount {
    constructor() {
        this.balance = 1000;
    }
    calculateInterest() {
        return this.balance * 0.05;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount();
// account.balance;         ❌ Error: Property 'balance' is private
// account.calculateInterest(); ❌ Error
console.log(account.getBalance()); // ✅ Works
