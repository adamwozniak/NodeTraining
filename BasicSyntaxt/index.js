/* */
// variables declarations
var a = 'this is a var';
let b = 'this is b let';
const c = 'this is c const';

console.log(a, b, c);
console.log('=======================');

// build in types
const string = 'this is string';
console.log(string, typeof string);
const number = 2;
console.log(number, typeof number);
const anotherNumber = 2.5;
console.log(anotherNumber, typeof anotherNumber);
const array = ['Hello', 2]
console.log(array, typeof array);
const object = {
    name: 'Node',
    version: 16.4
}
console.log(object, typeof array);
const func = function () {
    // do something 
};
console.log(func, typeof func);
console.log('=======================');

// number operations

const addition = 2 + 2;
console.log('addition = ', addition);
const subtraction = 2 - 2;
console.log('subtraction = ', subtraction);
const multiplication = 2 * 2;
console.log('multiplication = ', multiplication);
const division = 2 / 2;
console.log('division = ', multiplication);
const modulo = 4 % 2;
console.log('modulo = ', modulo);
console.log('=======================');

// for rest use Math lib :)

// function definition

function getGreeting(name) {
    return `Hello ${name}`;
}

console.log(getGreeting('Node'));

// OR

const getGreetingArrow = (name) => {
    return `Hello ${name}`;
}

console.log(getGreetingArrow('Node'));
console.log('=======================');

// conditional operations

// comparing operators:
// greater > 
// lesser < 
// equals ==
// strong ===
// greater or equal >=
// lesser or equal <=
// not equal !=
// strong not equal !==

let age = 11;

if (age >= 18) {
    console.log('Here s your beer sir');
} else {
    console.log('Can I see your id?');
}

// short notation for assigning variable 

const canBuyBeer = age >= 18 ? true : false;
console.log('canBuyBeer', canBuyBeer);

console.log('=======================');

// loops
console.log('==========FOR++=============');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('===========FOR--============');
for (let i = 4; i >= 0; i--) {
    console.log(i);
}
console.log('===========WHILE============');
let iterator = 0;
while (iterator < 5) {
    console.log(iterator);
    iterator++;
}

console.log('===========DO WHILE============');
let iterator2 = 0;
do {
    console.log(iterator2);
    iterator2++;
} while (iterator2 < 5)

console.log('===========COLLECTIONS OPERATIONS============');
const collection = ["a", "b", "c"];

console.log('==Iterating over collections==');

console.log('===========UGLY FOR============');
//ugly way
for (let i = 0; i < collection.length; i++) {
    console.log(collection[i])
}
//better ways:
console.log('===========FOR OF============');
// FOR OF
for (let obj of collection) {
    console.log(obj);
}
console.log('===========FOR EACH============');
// FOR OF
collection.forEach(element => { console.log(element) });

console.log('==Filtering/Finding==');

const allAs = collection.filter(element => {
    return element === 'a';
})
console.log('Filter: ', allAs);

const firstA = collection.find(element => {
    return element === 'a';
})

console.log('Find: ', firstA);

console.log('==Mapping==');

const mappedCollection = collection.map(element => {
    return {
        letter: element,
        asciiCode: element.charCodeAt(0)
    }
});
console.log('Mapped collection', mappedCollection);