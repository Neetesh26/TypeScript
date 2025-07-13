// basics
// primitive & refrence types
// Array
// Tuples
// any,Unknown , void, Null, undefined,Never



// let a = 3
let a:number =12
let b= a.valueOf()
console.log(b);

// a = "nkjn"❌

let arr = [1,4,2,3,5,"neetesh"] //type number | srting

let arr1 = [21,1,{name : "neetesh"}]

let arr2:(number|string)[] = [1,2,3,"nknj"] // ✅✅ focus--->()
let arr3:[number,string] = [1, "string"] //✅  //[1,2,3,"nknj"] //❌  



//Enums----------------->
enum userRole{
    Admin = "neetesh",
    Guest = "customer",
    Owner = "microsoft"
}


console.log(`Admin : ${userRole.Admin}`);
console.log(`Owner : ${userRole.Owner}`);
console.log(`Guest : ${userRole.Guest}`);
