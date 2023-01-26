// 1. .map()
let array = [5, 10, 15, 20];

let newArray = array.map((element, index) => {
    console.log(index);
    return element * element;
});
console.log(newArray);


// 2. .forEach()
let number = [1,2,3,4,5];
number.forEach((element, index) => {
    element *= element;
    console.log(element);
});

console.log("Number is: ", number);


// 3. .filter()
let number1 = [10, 20, 30, 40, 50];
let newelement = number1.filter((element) => element >= 30);
console.log(newelement);


// 4. .find()
let number2 = [10, 20, 30, 40, 50];
let temp = number2.find((value) => {
    return value > 20;
});

console.log(temp);


// 5. .sort()
let number3 = [50, 40, 111, 30, 20, 10];
let sortednumber3 = number3.sort((el1, el2) => {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1 - el2;
});
console.log(sortednumber3);


// Object Destructuring
let details = {
    name: "Alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "new York",
        state: "NY",
        country: "USA",
        passportDetails:{
            passportNumber: "ABCD1234",
        },
    },
};

let {name : myName, age} = details;
console.log(myName, age);


//Array matching
/*let {
  address: {
    country,
    passportDetails: { passportNumber}
  },
} = details;
console.log(country, passportNumber);
if ( array1==array2)*/


// object matching
let obj1 = { name: "Rachit", age: 24};
let obj2 = { name: "Rachit" };

function areEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key of Object.keys(obj1)) {
        if (typeof obj2[key] === "undefined") {
            return false;
        }
        if (obj2 [key] !== obj1[key]) {
          return false;
        }
    }
    return true;
}

console.log(areEqual(obj1, obj2));


// Map 
let map = new Map();
map.set(1, "Rachit");
map.set(2, "Alex");
console.log(map);
map.values()

//Set
let set = new Set();
set.add(1);
set.add(-1);
let arr = [...set]
console.log(set);


//Class

class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs, color, family, sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
    showAnimal() {
        console.log(`The animal belongs to family ${this.family}`);
    }
}

let animal = new Animal(4, "brown", "rodent", "something");
animal.showAnimal();