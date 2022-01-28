//Union
let z:string | number = 4;
console.log(z);
//This variable can able to store two types either string or number.
z = 'this is a string';
z = z.concat(' connected');//this will not work on line 4
console.log(z);

//enum
enum Direction{
    Up,
    Down,
    Right,
    Left,
}
//initially the value of Up is 0 then accordingly Down ,Right and Left will be 1 ,2 and 3

console.log(Direction.Up+' '+Direction.Down+' '+Direction.Right+' '+Direction.Left)

enum way{
    Up = 10,
    Down,
    Right,
    Left,
}
//Here the value of Up ,Down ,Right and Left will be 10 ,11 ,12 and 13

console.log(way.Up+' '+way.Down+' '+way.Right+' '+way.Left)

enum st{
    Up = 'Up',
    Down = 'Down',
    Right ='Right',
    Left = 'Left',
}
console.log(st.Up+' '+st.Down+' '+st.Right+' '+st.Left)
