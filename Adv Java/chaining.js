//task 1
function greetAfter(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello after " + seconds + " seconds!");
        }, seconds * 1000);
    });
}

greetAfter(3).then((message) => {
    console.log(message);
});

//task 2
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Data:', data);
        return data.title; // Chain another promise
    })
    .then(title => {
        console.log('Title:', title);
    })
    .catch(error => {
        console.error('Error:', error);
    });

//task 3
function randomPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > 0.5) {
            resolve("Success! Random number is " + random);
        } else {
            reject("Failure! Random number is " + random);
        }
    });
}

randomPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));

// task 4
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
];

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    .then(results => {
        console.log('All Data:', results);
    })
    .catch(error => {
        console.error('Error:', error);
    });

//task 5
function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    });
}

function stepTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    });
}

function stepThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    });
}

stepOne()
    .then(() => stepTwo())
    .then(() => stepThree())
    .then(() => {
        console.log("All steps completed!");
    })
    .catch(error => {
        console.error("Error:", error);
    });
