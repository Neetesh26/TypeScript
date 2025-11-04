"use strict";
//important things----->✅
// function types
// optional & default perameters
// Rest perameters
// overloads
function msx(name, age, cb) {
    cb("hehehe");
}
msx("neetesh", 6, (arg) => {
    // console.log("callback");
    console.log(arg);
});
//1
function la(name, gender) {
}
la("neetsh");
// 2function
function opw(name, gender = "not to be disclose") {
}
opw("neetesh");
//rest/spread-------->
function news(...args) {
    console.log(args);
}
news(1, 2, 3, 5, 5, 5, 5, 85, 4, 5, 5, 5, 5, 5, 5, 5, 5);
function newswwwwww(...args) {
    console.log(args);
}
newswwwwww("neetesh", "ram", "jay", "ajay");
function jayhoo(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey fn 1 calling");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("something went wrong");
}
jayhoo("hello");
jayhoo("hello", 26);
