// Arrays destructuring

let fruits = ['Aplle', 'Banana'];
let [a, b] = fruits;

console.log(a, b);

// Object destructuring

let user = {username: 'Oscar', age: 34};
let {username, age} = user;

console.log(username, age);

// Spread operator

let person = {name: 'oscar', age: 28};
let country = 'MX';

let data = {...person, country};

console.log(data);

// Rest 
function sum(num, ...values)
{
    console.log(values);
    console.log(num + values[0]);
    
}

sum(1, 1 , 2, 3);