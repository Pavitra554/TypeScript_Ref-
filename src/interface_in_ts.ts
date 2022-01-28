//Interface in Typescript

interface employes{ //good for objects
    readonly id:number,
    name:string,
    age?:number,//after putting '?' age is now an optional value for any object
}

const e:employes = {
    id:1,
    name:'Nothing',
}
// e.id = 12;
//if we make id as readyonly then we can't reassign

//using union
type point = number|string;
// interface point = number|string; //We can't do this with interface
const variable:point = 41; 


//interface in funtion's

interface MathFun {
    (x:number,y:number):number 
}

const add:MathFun = (a:number,b:number) :number => a+b;
const subtract:MathFun = (a:number,b:number) :number => a-b;
console.log('85 + 29 = '+add(85,29))
console.log('85 - 29 = '+subtract(85,29))