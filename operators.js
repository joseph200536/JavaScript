//task 41
console.log(true && false);
console.log(true || false);
console.log(!true);
let a = true;
let b = false;
let c = 0;

console.log(a && b || c);
//task 42
let num = 20;
let lower = 10;
let upper = 30;

if (num >= lower && num <= upper) {
    console.log("The number is within the range.");
} else {
    console.log("The number is outside the range.");
}
//task 43
console.log(!true);
//task 44
function first() {
    console.log("First function called");
    return false;
}

function second() {
    console.log("Second function called");
    return true;
}

console.log("Short-circuiting with AND:");
let result1 = first() && second();
console.log("Result:", result1);

console.log("\nShort-circuiting with OR:");
let result2 = first() || second();
console.log("Result:", result2);

//task 45
let a = 0;
let b = "Hello"; 
let andResult = a && b; 
console.log("AND (a && b):", andResult);
let orResult = a || b; 
console.log("OR (a || b):", orResult); 
let notResultA = !a;  
let notResultB = !b;  
console.log("NOT (!a):", notResultA); 
console.log("NOT (!b):", notResultB); 

