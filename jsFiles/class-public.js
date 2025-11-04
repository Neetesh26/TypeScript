"use strict";
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} engine started`);
    }
}
const c = new Car("Tesla");
console.log(c.brand); // ✅ Accessible
c.start(); // ✅ Accessible
