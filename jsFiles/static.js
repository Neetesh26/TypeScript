"use strict";
// static class ka instance/object nhi bnata------------>
class Shery {
    static version = 1.0;
    static getRandomNumber() {
        console.log("Random Number is : ", Math.floor(Math.random() * 100));
    }
}
//// let s1 = new Shery() ❌  not call by objects or not inherit class objects
class sheryChild extends Shery {
}
const sc1 = new sheryChild();
//  sc1.getRandomNumber()  // isnt call by inherit class objects ❌static keyword are merged
Shery.getRandomNumber(); // static keyword are call by class name ✅
console.log("Shery version is : ", Shery.version);
