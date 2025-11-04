"use strict";
// basics
// primitive & refrence types
// Array
// Tuples
// any,Unknown , void, Null, undefined,Never
// never is never return or  run next line of  code
// let a = 3
let a = 12;
let b = a.valueOf();
console.log(b);
// a = "chalooo"❌
let arr = [1, 4, 2, 3, 5, "neetesh"]; //type number | srting
let arr1 = [21, 1, { name: "neetesh" }];
let arr2 = [1, 2, 3, "hey"]; // ✅✅ focus--->()
let arr3 = [1, "string"]; //✅  //[1,2,3,"hey"] //❌  
//Enums----------------->
var userRole;
(function (userRole) {
    userRole["Admin"] = "neetesh";
    userRole["Guest"] = "customer";
    userRole["Owner"] = "microsoft";
})(userRole || (userRole = {}));
console.log(`Admin : ${userRole.Admin}`);
console.log(`Owner : ${userRole.Owner}`);
console.log(`Guest : ${userRole.Guest}`);
// any,Unknown , void, Null, undefined,Never
//Any❌
let m;
m = 456;
m = "error";
//unknown ❌
let n;
n = 456;
n = "error";
if (typeof n === "string") {
    n.toUpperCase();
}
//void
function abc1() {
    return "neetesh";
}
function abcd() {
    //nothing will return 
}
//Null
let ab;
// ab = 12  bcz its type is null❌
let abce;
abce = "jhkdj";
abce = "jkdsjkj";
abce = 5435;
abce = "5435";
