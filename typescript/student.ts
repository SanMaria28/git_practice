class Student {
     id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number)
    {
        this.id=id;
        this.name =name;
        this.age=age;
    }
    displayInfo()
    {
        console.log(`Student: Id: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
    }
}

const s = new Student(1,"San", 19);
s.displayInfo();
console.log(s.id);