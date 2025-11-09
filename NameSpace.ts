// nameSpace is like a group of related code that helps to organize and avoid name conflicts in larger codebases.


namespace DataInfo {
    class Student {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    function getInfo():void{
        console.log("This is a function inside the DataInfo namespace.");
    }
    let student1 = new Student("Alice", 21);
    console.log(`Name: ${student1.name}, Age: ${student1.age}`);
    getInfo();
}