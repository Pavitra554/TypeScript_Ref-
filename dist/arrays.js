"use strict";
//Array in Ts
let ids = [1, 2, 3, 5, 6];
// ids[5] = 'hello';//This will give an error since type of the array is number.
let anything = [1, true, 'hello']; //since the type of the array is anything
//Tuple
let students = ['Bot', 12]; //Here the order of type is important
//Tuple Array
//Here also the order of type is important
let person;
person = [
    ['person-1', 18],
    ['person-2', 19],
    ['person-2', 17],
    ['person-2', 30],
];
