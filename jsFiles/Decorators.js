"use strict";
// function getinfoD(target: any, propertyKey: any) {
//     console.log( `Decorator called on ${target}` );
//     console.log( `Decorator called on 2nd line ${target.name}` );
//     // console.log( `Decorator called on 3rd line ${descriptor}` );
// } 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class University {
//     constructor(public name: string) {}
//     @getinfoD  //decorator applied to method like keylogger 
//     getDetails() {
//         return `University Name: ${this.name}`;
//     }
// }
// ✅ Enable experimentalDecorators in tsconfig.json before running this
// Decorator function
function Logger(target, propertyKey, descriptor) {
    const orgDeco = descriptor.value;
    descriptor.value = function (...args) {
        console.log('property key is :', propertyKey);
        const result = orgDeco.apply(this, args);
        console.log('result is  : ', result);
        return result;
    };
    return descriptor;
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    Logger
], Calculator.prototype, "add", null);
// Testing
const calc = new Calculator();
calc.add(5, 3);
// calc.multiply(4, 2);
