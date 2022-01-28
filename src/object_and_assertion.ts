//Object

//Assigning the type for object elements
type User = {
    id:number,
    name:string,
}

const user: User = {
    id:5,
    name:'Pavitra'
}
const user1: User[] = [
    {id:1,name:'Pavitra'},
    {id:2,name:'Bot'}
]

//we can also do this like.....
const data: {id:number,name:string}[]=[
    {id:52,name:'number'},
    {id:100,name:'bot100'},
]

//Type Assertion

let c: any = 45;
let id = <number>c;
// id = '5465'// Error
let id2 = c as number;

console.log(user.id)

user1.map((e)=>{
    return console.log(e.name + ' '+e.id)
})

