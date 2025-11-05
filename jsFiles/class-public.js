"use strict";
class Car {
    brand;
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
