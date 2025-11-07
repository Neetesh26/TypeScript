class College {
    studentName:string 
    branch:string
    semester:number
    RollNo:number

private static UsersData:any[] = []

    constructor(name:string, branch:string,semester:number,RollNo:number){
        this.studentName = name
        this.branch = branch
        this.semester = semester
        this.RollNo = RollNo
        
    }

    LoginCredintial(studentName:string , password:number){
        // console.log(studentName);
        
       if (studentName === this.studentName && password === this.RollNo) {
      console.log("✅ Student login successful");
      this.getStudentInfo()
    } else {
      console.log("❌ Invalid Credentials... Try again");
    }
    }
    get UniqueUserID(){
        return "@"+`${this.studentName}`
    }
    getStudentInfo(){
        var info = {
        name : this.UniqueUserID, // using gettter
        Branch : this.UsersDataSet=this.branch , // using setter
        Semester : this.semester,
        RollNo : this.RollNo
        }
        // console.log(info) 
        College.UsersData.push(info)
        console.log("Data Added in db : " ,info);
        
    }
    set UsersDataSet(val : any){
        this.branch = "Techie" + val
    }
    Admin(password:number){
        if (password === 12) {
            console.log("✅ Admin login successful");
            console.log("you can Access all Users Data : ");
            College.UsersData.forEach((users)=>{
            console.log("All Student Data : ", users);
        })
        } else {
            console.log("❌ Invalid Admin Credentials... Try again");
            return
        }
        
    }
}

const c11 = new College("Neetesh" , "Computer Science" , 7 , 12)
const c12 = new College("ravi" , "Bussiness Analatics" , 8 , 3)
const c13 = new College("jaya" , "Charted Accounting" , 7 , 28)
// console.log(c11);

//  const login = 
c11.LoginCredintial("Neetesh- prajapti" , 12)
c11.LoginCredintial("Neetesh" , 12)
c13.LoginCredintial("jaya" , 28)
c12.LoginCredintial("ravi" , 3)
c11.Admin(12)
// c11.getStudentInfo()
//  console.log(c11.LoginCredintial("Neetesh- prajapti" , 12));
 