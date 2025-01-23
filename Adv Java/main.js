import { myFunction, MyClass, myVariable } from './myModule.js';
import greet from './greetModule.js';
import { add, multiply } from './mathmodule.js';
console.log(myVariable);
const obj = new MyClass("Alice");
obj.greet();
myFunction();
// main.js

console.log(add(2, 3));
console.log(multiply(2, 3));

greet("Alice");
