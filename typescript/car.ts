interface ICar{
    brand: string;
    color: string;
    model: string;
    price: number;
}
let car: ICar = {
    brand: "BMW",
    color: "Black",
    model: "M4",
    price: 6900000
}

console.log(car.brand);