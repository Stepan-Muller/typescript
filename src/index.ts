import { get } from "http";

// 1
let string: string = 'Hello World';
let number1: number = 1;
let number2: number = 12;
let boolean: boolean = true;
let array: number[] = [1, 2, 3];

function multiply(a: number, b: number, showResult?: boolean): number {
    const result: number = a * b;
    if (showResult) {
        console.log(result);
    }
    return result;
}

multiply(number1, number2, boolean);

// 2
function getFullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

getFullName('Štěpán', 'Müller');

// 3
interface Car {
    make: string;
    model: string;
    year: number;
}

const car: Car = {
    make: 'Škoda',
    model: 'Octavia',
    year: 2012
}

console.log(car);

// 4
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

console.log(greet('Štěpán', 'Ahoj'));

// 5
function printId(id: number | string): void {
    console.log(`${id}: ${typeof id}`);
}

printId(123);
printId('abc');

// 6
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(123));
console.log(identity<string>('abc'));