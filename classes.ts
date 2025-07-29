class department {
    name :string;
    employee : string[] =[];
    // employee : string[]
    constructor(n :string) {
        this.name = n
        // this.employee = []
        console.log(this.name);
    }
    Totalemployee(this : department){
        console.log("total number of employee is : ", this.employee.length);
        
    }
    addEmployee(user : string){
        this.employee.push(user)
        console.log("New user added : ", user);
        
    }
    describe(){
        console.log("heyyy heyyyy frnds!!", this.name);
        
    }
}
const depart = new department("Accounting")
// console.log(depart)
depart.addEmployee("neetesh")
depart.addEmployee("geetesh")
depart.addEmployee("preetesh")
depart.addEmployee("shreetish")

console.log(depart)

depart.Totalemployee() 


// copy ---------------------------->
const departCopy = {
    name : "dummy",
    newAddemployee : depart.describe 
}
console.log(departCopy);
console.log(departCopy.newAddemployee());
// console.log();



