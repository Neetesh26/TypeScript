"use strict";
//Interfaces and type aliases
//defining interface
//using interface to define object shape 
//extending interfaces
function xyz(obj) {
    if (obj.name === "neetesh") {
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.email);
    }
}
xyz({ name: "neetesh", age: 20 });
xyz({ name: "neetesh", age: 20, email: "neetesh@26" });
function aws(obj) {
    obj.gender; //access the property by child
}
function xyzf(obj) {
    //access both interface bcz its same name so it is merged....
    obj.name;
    obj.Email;
}
let ao; //own type 
let ml;
function amz(u) {
    u.name;
    u.Email;
}
