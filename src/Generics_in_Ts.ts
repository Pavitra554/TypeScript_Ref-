//Generics in Ts
//Just an example
function gen<T>(item:T[]): T[]{
    return new Array().concat(item);
}

let numarr = gen<number>([1,2,3,5]);
let starr = gen<string>(['hello','hii','bbye']);

console.log(numarr);
console.log(starr);
