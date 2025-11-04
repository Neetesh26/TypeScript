// basics
// primitive & refrence types
// Array
// Tuples
// any,Unknown , void, Null, undefined,Never
// never is never return or  run next line of  code


// let a = 3
let a:number =12
let b= a.valueOf()
console.log(b);

// a = "chalooo"❌

let arr = [1,4,2,3,5,"neetesh"] //type number | srting

let arr1 = [21,1,{name : "neetesh"}]

let arr2:(number|string)[] = [1,2,3,"hey"] // ✅✅ focus--->()
let arr3:[number,string] = [1, "string"] //✅  //[1,2,3,"hey"] //❌  



//Enums----------------->
enum userRole{
    Admin = "neetesh",
    Guest = "customer",
    Owner = "microsoft"
}


console.log(`Admin : ${userRole.Admin}`);
console.log(`Owner : ${userRole.Owner}`);
console.log(`Guest : ${userRole.Guest}`);


// any,Unknown , void, Null, undefined,Never

//Any❌
let m;
m = 456
m = "error"

//unknown ❌
let n;
n = 456
n = "error"

if (typeof n === "string") {
    n.toUpperCase()
}

//void
function abc1():string {
    return "neetesh"
}
function abcd():void {
    //nothing will return 
}
//Null
let ab:null
// ab = 12  bcz its type is null❌

let abce: null | string | number
abce="jhkdj"
abce="jkdsjkj"
abce=5435
abce="5435"

