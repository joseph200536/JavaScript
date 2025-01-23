//task 1
let num =3;
let fact =1;
function factr(num){
    if(num==1) return 1;
    fact = fact * num;
    factr(num-1);
}
factr(num);
console.log(fact);
//task 2
function fibo(num){
    if(num <=1)return num;
    return fibo(num-1) + fibo(num-2);
}
console.log(fibo(num));

//task 3
function countWays(n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
}

console.log(countWays(3));
//task 4
function flatten(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flatten([1, [2, [3, 4], 5], 6, [7, 8]]));
console.log(flatten([1, [2, 3], [4, [5, 6]]]));
//task 5
function towerOfHanoi(n, left, right, center) {
    if (n === 1) {
        console.log(`Move disk 1 from ${left} to ${right}`);
        return;
    }
    towerOfHanoi(n - 1, left, center, right);
    console.log(`Move disk ${n} from ${left} to ${right}`);
    towerOfHanoi(n - 1, center, right, left);
}

towerOfHanoi(3, 'Left', 'Right', 'Center');


