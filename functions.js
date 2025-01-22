//task 46
function sum(a, b) {
    return a + b;
}

console.log(sum(5, 7));
console.log(sum(-3, 9));
//task 47
function rectangleArea(length, width) {
    return length * width;
}

console.log(rectangleArea(5, 10));
console.log(rectangleArea(7, 3));
//task 48
function greet() {
    console.log("Hello, World!");
}

greet();
//task 49
function noReturn() {
    console.log("This function returns nothing");
}

let result = noReturn();
console.log("Default return value:", result);
//task 50
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet("Alice");
greet();
