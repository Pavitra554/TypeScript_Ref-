"use strict";
//Generics in Ts
function gen(item) {
    return new Array().concat(item);
}
let numarr = gen([1, 2, 3, 5]);
let starr = gen(['hello', 'hii', 'bbye']);
console.log(numarr);
console.log(starr);
