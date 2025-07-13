"use strict";
// basics
// primitive & refrence types
// Array
// Tuples
// any,Unknown , void, Null, undefined,Never
// let a = 3
let a = 12;
let b = a.valueOf();
console.log(b);
// a = "nkjn"❌
let arr = [1, 4, 2, 3, 5, "neetesh"]; //type number | srting
let arr1 = [21, 1, { name: "neetesh" }];
let arr2 = [1, 2, 3, "nknj"]; // ✅✅ focus--->()
let arr3 = [1, "string"]; //✅  //[1,2,3,"nknj"] //❌  
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
