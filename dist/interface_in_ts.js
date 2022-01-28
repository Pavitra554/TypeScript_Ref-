"use strict";
//Interface in Typescript
const e = {
    id: 1,
    name: 'Nothing',
};
// interface point = number|string; //We can't do this with interface
const variable = 41;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log('85 + 29 = ' + add(85, 29));
console.log('85 - 29 = ' + subtract(85, 29));
