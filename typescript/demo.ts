// const num: number = 12;
// console.log(`the number is: ${num}`);

// const greeting: string = "Hello, World!";
// console.log(greeting);

// const greet = (name:string) => {
//     console.log(`Hello ${name}`);
// }
// greet("San");

// let scores: number[] = [90,80,70,60];
// for(let i in scores)
// {
//     console.log(scores[i]);
// }

// let index: number[] = [1,2,3,4,5,6,7,8,9,10];
// const table = (num:number) => {
//    for(let i in index)
//    {
//         console.log(`${num} * ${index[i]} = ${num*index[i]}` );
//    }   
// }
// table(2);


//optional parameters
// const add = (a:number, b:number, c?:number) => {
//     if( c === undefined){
//         return a+b;
//     }
//     else{
//         return a+b+c;
//     }
// }
// console.log(add(1,2));
// console.log(add(1,2,3));

// const greet = (name:string, name2?:string) => {
//   if(name2 === undefined){
//     console.log(`hello ${name}`);
// }
// else{
//     console.log(`hello ${name}, ${name2}`);
// }
// }
// greet("San");
// greet("San","Nihitha");

const area = (shape:string, width:number, length?:number) =>
{
    if(shape === "square" || length == undefined )
        console.log(`Area: ${width*width}`);
    else
        console.log(`Area: ${length*width}`);
}

area("Square",2);
area("rectangle",3,5);

class Person {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  display () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
  }
}

// create an array of Person objects
const people: Person[] = [
  new Person('Alice', 25, 'alice@example.com'),
  new Person('Bob', 30, 'bob@example.com'),
  new Person('Charlie', 22, 'charlie@example.com')
];

// iterate and display all persons
for (const person of people) {
  person.display();
}
class Car {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  printDetails(): void {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

// create an array of Car objects
const cars: Car[] = [
  new Car('Toyota', 'Corolla'),
  new Car('Honda', 'Civic'),
  new Car('Tesla', 'Model 3')
];

// print them in sequence
for (const car of cars) {
  car.printDetails();
}

