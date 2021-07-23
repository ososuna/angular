import { calculateISV, Product } from "./05-deses";

const shoppingCar: Product[] = [
    {
        desc: 'Beetle Phone',
        price: 10000
    },
    {
        desc: 'Hunter License',
        price: 200000
    }
];

const [total, isv] = calculateISV( shoppingCar );

console.log(`Total: ${ total }`);
console.log(`ISV: ${ isv }`);
