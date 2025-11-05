"use strict";
// const User: {
//     id:number,
//     name:string,
//     company:string | undefined
// }={
//     id:26,
//     name:"neetesh",
//     company:"microsoft"
// }
// User.company = "Google"
// var UserData :{
//     [key:string]:string|number|undefined |boolean
// }={
//     name:"NeeteshPrajapati",
//     company:"Infosys"
// }
// UserData.award = true
// console.log(UserData);
var EmployeeData = {
    name: "Neet",
    company: "google",
    Address: {
        sector: 5,
        country: "india"
    },
    Friends: {}
};
EmployeeData.Friends.name = "Neetesh_Prajapti";
var username = "@Sonu_Sudh";
// EmployeeData.Friends.push(username)
console.log(EmployeeData.Friends);
