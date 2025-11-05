declare class College {
    studentName: string;
    branch: string;
    semester: number;
    RollNo: number;
    static UsersData: any[];
    constructor(name: string, branch: string, semester: number, RollNo: number);
    LoginCredintial(studentName: string, password: number): void;
    getStudentInfo(): void;
    Admin(password: number): void;
}
declare const c11: College;
declare const c12: College;
declare const c13: College;
