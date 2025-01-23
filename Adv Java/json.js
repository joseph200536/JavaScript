//task 1
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(10, 20));
//task 2
function sumArray(numbers) {
    return sum(...numbers);
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([5, 10, 15]));
//task 3
const original = { a: 1, b: { c: 2 } };
const cloned = JSON.parse(JSON.stringify(original));

console.log(original);
console.log(cloned);

//task 4
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1 }, { b: 2 }));
console.log(mergeObjects({ x: 10 }, { y: 20, z: 30 }));

//task 5
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
const parsedObj = JSON.parse(jsonString);

console.log(jsonString);
console.log(parsedObj);
