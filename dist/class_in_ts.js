"use strict";
//Class in Ts
class student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const pavitra = new student(10, "Pavitra Behara");
const bot = new student(12, "Bot");
// pavitra.id = 45; //Error! since id is private it can be accessable within the class only
console.log(pavitra, bot);
console.log(pavitra.name);
class car {
    constructor(n, brand) {
        this.no = n;
        this.brand = brand;
    }
    speed() {
        return '120km/h';
    }
}
const BMW = new car(1245, 'BMW');
console.log(BMW.speed());
//Inheritance in Ts
//SubClasses
class bike extends car {
    constructor(n, bikeBrand, owner) {
        super(n, bikeBrand);
        this.owner = owner;
    }
}
const Activa125 = new bike(4523, 'Honda', 'Me me😂');
console.log(Activa125);
