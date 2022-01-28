"use strict";
//Object
const user = {
    id: 5,
    name: 'Pavitra'
};
const user1 = [
    { id: 1, name: 'Pavitra' },
    { id: 2, name: 'Bot' }
];
//we can also do this like.....
const data = [
    { id: 52, name: 'number' },
    { id: 100, name: 'bot100' },
];
//Type Assertion
let c = 45;
let id = c;
// id = '5465'// Error
let id2 = c;
console.log(user.id);
user1.map((e) => {
    return console.log(e.name + ' ' + e.id);
});
