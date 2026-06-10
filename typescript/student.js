var Student = /** @class */ (function () {
    function Student(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Student.prototype.displayInfo = function () {
        console.log("Student: Id: ".concat(this.id, ", Name: ").concat(this.name, ", Age: ").concat(this.age));
    };
    return Student;
}());
var s = new Student(1, "San", 19);
s.displayInfo;
