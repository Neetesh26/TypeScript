"use strict";
// nameSpace is like a group of related code that helps to organize and avoid name conflicts in larger
var DataInfo;
(function (DataInfo) {
    class Student {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    DataInfo.Student = Student;
    function getInfo() {
        console.log("This is a function inside the DataInfo namespace.");
    }
    DataInfo.getInfo = getInfo;
    let student1 = new Student("Alice", 21);
    console.log(`Name: ${student1.name}, Age: ${student1.age}`);
    getInfo();
})(DataInfo || (DataInfo = {}));
