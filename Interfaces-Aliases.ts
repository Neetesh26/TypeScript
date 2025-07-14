//Interfaces and type aliases
//defining interface
//using interface to define object shape 
//extending interfaces


//type aliases
// Intersection type-----




// Interfaces-------->

interface User {
    name: string;
    age: number;
    email?: string; //optional property ****----------------->   '?' sign of denoted optional property
}
function xyz(obj:User) {
    if (obj.name === "neetesh" ) {
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.email);
        
    }
    
}
xyz({name:"neetesh",age:20})
xyz({name:"neetesh",age:20,email:"neetesh@26"})



///Extending Interface---------->it means inherit the property to parent to child 

interface User2 {
    name: string;
    age: number;
}
interface Child extends User2{
    gender : string
}
function aws(obj:Child){
obj.gender //access the property by child
}

//Merge both interfaces-------->
interface oop{
    name:string
}
interface oop{
    Email:string
}

function xyzf(obj:oop){

    //access both interface bcz its same name so it is merged....
    obj.name
    obj.Email
}


//Type Aliases----------------->  generate own types like....

type num = number

let ao:num //own type 

// ----------->aliases
type MultiType = string|number|boolean
let ml:MultiType


//intersection------->
type mnc ={
    name:string
}
type mncAdmin =mnc &{
    Email:string
}
function amz(u:mncAdmin){ //both property access
    u.name
    u.Email
}
