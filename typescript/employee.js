var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.annualSalary = 0;
    }
    Employee.prototype.displayInfo = function () {
        console.log("Employee: Id: ".concat(this.id, ", Name: ").concat(this.name, ", Salary: ").concat(this.salary));
    };
    Employee.prototype.calculate = function () {
        this.annualSalary = this.salary + (0.05 * this.salary) + (0.07 * this.salary) - (0.1 * this.salary);
        console.log("Annual Salary: ".concat(this.annualSalary));
    };
    return Employee;
}());
var emp = new Employee(1, "San", 10000);
emp.displayInfo();
emp.calculate();
