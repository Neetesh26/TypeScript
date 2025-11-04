"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.pi = 3.14;
    }
    area() {
        return this.pi * this.radius * this.radius;
    }
}
const circle = new Circle(5);
// circle.pi = 3.14159; ❌ Error: Cannot assign to 'pi' because it is a read-only property
