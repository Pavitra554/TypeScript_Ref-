//Class in Ts
class student{
    private id:number
    name:string

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }
}

const pavitra = new student(10,"Pavitra Behara");
const bot = new student(12,"Bot");
// pavitra.id = 45; //Error! since id is private it can be accessable within the class only
console.log(pavitra,bot);
console.log(pavitra.name);


//Implement class using interface
interface structure{
    no:number
    brand:string
    speed():string
}

class car implements structure{
    no:number
    brand:string
    constructor(n:number,brand:string){
        this.no = n;
        this.brand = brand;
    }

    speed(): string {
        return '120km/h'
    }
}

const BMW  = new car(1245,'BMW');
console.log(BMW.speed());

//Inheritance in Ts
//SubClasses
class bike extends car{
    owner:string
    constructor(n:number,bikeBrand:string,owner:string){
        super(n,bikeBrand);
        this.owner = owner;
    }
}

const Activa125 = new bike(4523,'Honda','Me me😂');
console.log(Activa125)
