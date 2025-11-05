"use strict";
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Employee {
    display() {
        console.log(`Manager: ${this.name}`); // ✅ Works
    }
}
const mb = new Manager("John");
// console.log(mb.name); ❌ Error: 'name' is protected
mb.display(); // ✅
