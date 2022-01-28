//Function in TypeScript

//Function having number return type
function sum(x:number,y:number):number{
    return x+y;
}

//Void return type function 
function print(message:string | number): void{
    console.log(message);
}

console.log(sum(45,82));
print('Hello world');
print(45);