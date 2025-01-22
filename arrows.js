//task 51
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Alice"));
console.log(greet("Bob"));
console.log(greet("Charlie"));
//task 52
const add = (a, b) => a + b;

console.log(add(5, 7));
console.log(add(-3, 10));
console.log(add(0, 0));
//task 53
const isEven = (num) => num % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
//task 54
const maxValue = (a, b) => {
    return a > b ? a : b;
};

console.log(maxValue(10, 20));
console.log(maxValue(5, 3));
console.log(maxValue(-10, -20));
//task 55
const myObject = {
    value: 10,
    multiplyTraditional: function (num) {
        console.log("Traditional:", this);
        return this.value * num;
    },
    multiplyArrow: (num) => {
        console.log("Arrow:", this);
        return this.value * num;
    }
};

console.log(myObject.multiplyTraditional(2));
console.log(myObject.multiplyArrow(2));
