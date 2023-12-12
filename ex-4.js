// Start coding here
let addFunction = (a,b) => a+b;
let substractFunction = (a,b) => a-b;
let multiplyFunction = (a,b) => a*b;
let divideFunction = (a,b) => a/b;

const calculator = {
    add:addFunction,
    substract:substractFunction,
    multiply:multiplyFunction,
    divide:divideFunction
};
let addResult = calculator.add(10,20);
console.log(addResult);

let divideResult = calculator.divide(3000,10);
console.log(divideResult);

