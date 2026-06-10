class Employee
{
    id: number;
    name: string;
    salary: number;
    annualSalary:number;

    constructor(id:number, name:string, salary:number)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.annualSalary = 0;
    }
    displayInfo()
    {
        console.log(`Employee: Id: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
    }
    calculate()
    {
        this.annualSalary =  this.salary + (0.05*this.salary) + (0.07*this.salary) - (0.1*this.salary);
        console.log(`Annual Salary: ${this.annualSalary}`);

    }

}

const emp = new Employee(1, "San", 10000);
emp.displayInfo();
emp.calculate();