//task 1
function greetAfter(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello after " + seconds + " seconds!");
        }, seconds * 1000);
    });
}

// Using async/await
async function greet() {
    const message = await greetAfter(3);
    console.log(message);
}

greet();

//task 2
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Fetched Data:', data);
        return data.title;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

//task 3
async function fetchDataWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/invalid');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataWithErrorHandling();

//task 4
async function fetchMultipleData() {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2'
    ];

    try {
        const responses = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
        console.log('All Data:', responses);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchMultipleData();

//task 5
async function waitForMultipleTasks() {
    const task1 = new Promise((resolve) => setTimeout(() => resolve('Task 1 completed'), 2000));
    const task2 = new Promise((resolve) => setTimeout(() => resolve('Task 2 completed'), 1000));

    const results = await Promise.all([task1, task2]);
    console.log('All tasks completed:', results);
}

waitForMultipleTasks();
