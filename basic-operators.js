// es6 declare var
let name = 'Chika';
console.log(name); 

/*
Rules for naming var or let
1. Cannot be a reseved keyboard
2. Should be meaningful
3. Cannot start with a number
4. cannot contain a space or hyphen (-)
5. are case sensitive
*/

//constanta

const rate = 1; //it can be change if you change it you get an error

/*Primitives/Values Types :
String : 'Chika'
Number : 15
Boolean : true or false
Undefined : let firstName;
Null : let lastName = null;
*/

/* Reference Types
Object
Array
Function*/
//Object
let person = {
    name: 'Chika' ,
    age : 16
}; // this is object

//Dot Notation
person.name = 'Mike';

//Bracket Notation
person['name'] = 'Salwio';
 
//Array
let selectedColors = ['blue' , 'yellow']; // this is array , acsess with index
selectedColors[2] = 1;
console.log(selectedColors[0]); console.log(selectedColors.length);

//Function (performing a task)
function greet(name , lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Chika' ,'Fitrada');


// function (calculating a value)
function square(number) {
    return number * number;
}
let number = square(2);// square (2) the two is value of the square , you can change it
console.log(number);
// or
console.log(square(2));

/* A. Javascript Operators
1. Arithmetic operators
2. Assignment o
3. comparison o
4. Logical o
5. Bitwise o */

// 1. Arithmetic O
let x = 12;
let y = 2;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
console.log(++x); 

// Dcrement O (--)
console.log(--x);

// 2. Assignment O
let xu = 10;

xu = x + 3;
xu += 3;
xu -= 3;
xu *= 3;
xu /= 3;
xu %= 3;
xu **= 3;

// 3. Comparison O
let xi = 1;
// Relational 
console.log( xi > 0);
console.log( xi >= 0);
console.log( xi < 0);
console.log( xi <= 0);

// Equality

console.log( xi === 1);
console.log( xi !== 1);

// 4. Equality O

// strict equality (type + value ) must match
 console.log( 1 === 1);
 console.log( '1' === 1);

 // lose equality ( type + value) doesn't care match or not
 console.log( 1 == true); // true
 console.log('1' == 1);

 // 5. Ternary O
 
 /* #user story
 if a customer has more than 100 points
 they are 'gold' cust , otherwise,
 ther are 'silver' cust */

 let points = 101;
 let type = points >= 100 ? 'gold' : 'silver'; // bacanya : kalo point lebih dari 100 maka gold otherwise silver

 console.log(type);

 // 6. Logical O
 // logical and (&&) => return TRUE if both operands are TRUE

 // Logical or (||) => return TRUE if one of the operands is TRUE

 // Logical not (!) => terbalikan,kalo !true berarti itu false 

 // 7. Logical OPerators w/ non-booleans => not depends w/ true or false , just the value ex : false || 1 will return 1
 /* Falsy (false value)
 undefined
 null
 0
 false
 ''
 NaN*/
 let userColor = 'red';
 let defaultColor='blue';
 let currentColor = userColor || defaultColor;

 console.log(currentColor); // will be red because user has selected red color
 // if user color be undefined it will be blue because default color

 // 8. Bitwise O
 /* represented in decimal system
  1   = 00000001 
  2   = 00000010
  R/3 = 00000011
  R(and)   = 00000000
  */
 console.log(1 | 2); // Bitwise OR
 console.log(1 & 2); // Bitwise AND (will be 0)
 
// read , write , execute
// 00000100 => read                     00000100 = 4 = read
// 00000110 => read , write             00000010 = 2 = write
// 00000111 => read , write , execute   00000001 = 1 = execute

const readPermission = 4; // 4 = 00000100
const writePermission = 2 ; // 2 = 00000010
const executePermission = 1; // 1 = 00000001

let myPermission = 0;
myPermission = myPermission | readPermission |writePermission

let message = (myPermission & readPermission) ? 'yes': 'no';
console.log(message); // will be yes , if the readPermission in myPermission deleted will be no

// 9. Precedance O (which one solved first)

let u = (2 + 3) * 5; 

// Swapping Var
let f = 'blue';
let g = 'pink';

let v = f;
f = g;
g = v; // yay the value has swapping!

console.log(f);
console.log(g); // otput will be blue pink , if i want the output pink blue i do....(above)











