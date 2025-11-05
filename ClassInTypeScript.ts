class College {
    studentName:string 
    branch:string
    semester:number
    RollNo:number

static UsersData:any[] = []

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
      this.getStudentInfo();
    } else {
      console.log("❌ Invalid Credentials... Try again");
    }
    }
    getStudentInfo(){
        var info = {
        name : this.studentName,
        Branch : this.branch ,
        Semester : this.semester,
        RollNo : this.RollNo
        }
        // console.log(info) 
        College.UsersData.push(info)
        console.log("Data Added in db : " ,info);
        
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

const c11 = new College("Neetesh" , "CSE" , 7 , 12)
const c12 = new College("ravi" , "CSE" , 8 , 3)
const c13 = new College("jaya" , "CSE" , 7 , 28)
// console.log(c11);

//  const login = 
c11.LoginCredintial("Neetesh- prajapti" , 12)
c11.LoginCredintial("Neetesh" , 12)
c13.LoginCredintial("jaya" , 28)
c12.LoginCredintial("ravi" , 3)
c11.Admin(12)
//  console.log(c11.LoginCredintial("Neetesh- prajapti" , 12));
 