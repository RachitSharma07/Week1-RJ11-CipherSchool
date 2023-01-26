// In JavaScript, we can declare a variable in 3 ways

// 1. by using var
var myName = "John";
console.log(myName);

// 2. by using let
const yourName = [];
console.log(yourName);
yourName.push("John");
console.log(yourName);

// 3. by using const
let ourName = [];
console.log(ourName);
ourName.push("Alex");
console.log(ourName);


// String Interpolation
let firstName = "Rachit";
let lastName= "Sharma";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);


// Default Params
let addTwoNumbers = (num1, num2 = 5) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
};

console.log(addTwoNumbers(1, 10));


// Rest and Spread Operator are applicable in Arrays and Objects in JS
// For Array
// Spread operator
let array = [5, 10, 15, 20, 25];
let newArray = [100, 75, ...array];
console.log(array);

//Rest Operator
let maxOfNumbers = (...numbers) => {
    let maximum = Number.MIN_VALUE;
    for (let number of numbers) {
        maximum = Math.max(maximum, number);
    }
    return maximum;
};

console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));

// For Object
//Spread
let object = {
    name: "John",
    age: 24,
    city: "New York",
};

let object2 = { ...object, country: "USA", favouriteSong: "Numb by Linking path"};
console.log(object2);