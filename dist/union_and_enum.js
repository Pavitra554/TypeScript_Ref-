"use strict";
//Union
let z = 4;
console.log(z);
//This variable can able to store two types either string or number.
z = 'this is a string';
z = z.concat(' connected'); //this will not work on line 4
console.log(z);
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
//initially the value of Up is 0 then accordingly Down ,Right and Left will be 1 ,2 and 3
console.log(Direction.Up + ' ' + Direction.Down + ' ' + Direction.Right + ' ' + Direction.Left);
var way;
(function (way) {
    way[way["Up"] = 10] = "Up";
    way[way["Down"] = 11] = "Down";
    way[way["Right"] = 12] = "Right";
    way[way["Left"] = 13] = "Left";
})(way || (way = {}));
//Here the value of Up ,Down ,Right and Left will be 10 ,11 ,12 and 13
console.log(way.Up + ' ' + way.Down + ' ' + way.Right + ' ' + way.Left);
var st;
(function (st) {
    st["Up"] = "Up";
    st["Down"] = "Down";
    st["Right"] = "Right";
    st["Left"] = "Left";
})(st || (st = {}));
console.log(st.Up + ' ' + st.Down + ' ' + st.Right + ' ' + st.Left);
