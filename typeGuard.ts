// type-Guard----------------------->

type combinable = string | number   // type aliases

function abc(a:combinable , b: combinable){
    // type guard --------------->
    if (typeof a == "string" && typeof b == "string") {
        return a.toString() + b.toString()
    }
    else{
        return `enter same input type...`;
    }
}
console.log(abc("Neetesh" , "Prajapati"));




type Admin = {
    name: string,
    privillage : string[]
}

type employee = {
    name: string,
    startDate : Date
}
type ElevatedEmployee = Admin & employee
type UnknowEmployee = Admin | employee

const emp1 : ElevatedEmployee = {
    name :"neeteshp",
    privillage:['create-server'],
    startDate:new Date(),
}

function printEmployee(emp:UnknowEmployee) {
    console.log("name :" , emp.name);

    // console.log(emp.privillage);
    if("privillage" in emp){
        console.log(emp.privillage);
        
    }  
    if('startDate' in emp){
        console.log(emp.startDate);
        
    }  
    
}
// printEmployee(emp1)
// printEmployee({name : "neet" , startDate :new Date()})



class car {
     drive(){
        console.log("driving a car....");
     }
}

class truck {
    drive(){
        console.log("drive a truck");
        
    }
    loaded(amount : number){
        console.log(amount);
        
    }
}
 type Vehical = car| truck


 const c1 = new car()
 const c2 = new truck()

 function useVehical(vehical : Vehical){
    vehical.drive()

    if("loaded" in vehical){
        vehical.loaded(500)
    }
    if( vehical instanceof truck){
        vehical.loaded(500)
    }
 }

 useVehical(c1) // drivin A CAR 

 
 useVehical(c2)