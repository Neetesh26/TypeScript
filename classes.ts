// class department {
//     name :string;
//     employee : string[] =[];
//     // employee : string[]
//     constructor(n :string) {
//         this.name = n
//         // this.employee = []
//         console.log(this.name);
//     }
//     Totalemployee(this : department){
//         console.log("total number of employee is : ", this.employee.length);
        
//     }
//     addEmployee(user : string){
//         this.employee.push(user)
//         console.log("New user added : ", user);
        
//     }
//     describe(){
//         console.log("heyyy heyyyy frnds!!", this.name);
        
//     }
// }
// const depart = new department("Accounting")
// // console.log(depart)
// depart.addEmployee("neetesh")
// depart.addEmployee("geetesh")
// depart.addEmployee("preetesh")
// depart.addEmployee("shreetish")

// console.log(depart)

// depart.Totalemployee() 


// // copy ---------------------------->
// const departCopy = {
//     name : "dummy",
//     newAddemployee : depart.describe 
// }
// console.log(departCopy);
// console.log(departCopy.newAddemployee());
// // console.log();





// Inheritance-----------------------------> ✅
class department {
    protected num = 1
    public name :string;
    // private employee : string[] =[];   // private is only use in the class but not use inherit class
    protected employee : string[] =[];   // protected is  use in the class and inherit class as well...
    // private readonly id : number;
    // employee : string[]
    constructor(  n :string) {
        this.name = n;
        this.employee = [];
        // this.id = id;
        console.log(this.name);
    }

    addEmployee(user : string){
        this.employee.push(user)
        console.log(`New user added : ${this.num}, ${user.toUpperCase()}❤️`);
        this.num= this.num + 1
    }
    describe(){
        console.log("heyyy heyyyy frnds!!", this.name);
        
    }
}

class AccoountingDepart  extends department{
    // reports : string[] = []
    constructor( private reports: string[]){
        super( "accounting")

    }
    addReports(text : string){
        this.reports.push(text)
    }
    
    printReports(){
        console.log("departrments reports : ",this.reports);
        
    }
    addEmployee(user : string){
        if (user == "ravan") {
            console.log(`${user} can't be added...`);
            return;
        }
        this.employee.push(user)
        console.log(`New user added : ${this.num}, ${user.toUpperCase()}❤️`);
        this.num= this.num + 1
    }
    

        // setter | gettter ------------------------>
     get getReport() {
        if(this.reports.length > 0){
            return this.reports
        }
        throw new Error("Reports not found...")
    }

    set setReports(val : string){
        if(!val){
            throw new Error("please enter val...") 
        }
        this.reports.push(val)
    }
    
}
const accdep = new AccoountingDepart([])
accdep.addEmployee("RadhaRani")
accdep.addEmployee("shreekrishna")
accdep.addEmployee("ravan")
accdep.addEmployee("gokul")

accdep.addReports("codeBug")
accdep.addReports("medical report")

accdep.printReports()
// accdep.describe()


// settter & getter --------------------->

accdep.setReports = "cricket report"  // <- set reports setter fn
console.log("Getter Reports -> ",accdep.getReport);


// static me new obj bnane kii need nhi hoti



