//task 1
function outer() {
    let x = 10;
    return function inner() {
        console.log(x);
    };
}

const capturedFunction = outer();
capturedFunction();

//task 2
function counter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        display: function() {
            console.log(count);
        }
    };
}

const myCounter = counter();
myCounter.increment();
myCounter.display();
myCounter.increment();
myCounter.display();

//task 3
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        display: function() {
            console.log(count);
        }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.display();

counter2.increment();
counter2.increment();
counter2.display();

//task 4
function createPerson(name, age) {
    let _name = name;
    let _age = age;

    return {
        getName: function() {
            return _name;
        },
        getAge: function() {
            return _age;
        },
        setName: function(newName) {
            _name = newName;
        },
        setAge: function(newAge) {
            _age = newAge;
        }
    };
}

const person = createPerson("Alice", 30);
console.log(person.getName());
console.log(person.getAge());
person.setName("Bob");
person.setAge(35);
console.log(person.getName());
console.log(person.getAge());

//task 5
function functionFactory(type) {
    if (type === 'greet') {
        return function(name) {
            console.log(`Hello, ${name}!`);
        };
    } else if (type === 'farewell') {
        return function(name) {
            console.log(`Goodbye, ${name}!`);
        };
    }
}

const greetFunction = functionFactory('greet');
const farewellFunction = functionFactory('farewell');

greetFunction("Alice");
farewellFunction("Bob");
