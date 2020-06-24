/*
    ARITHMETIC OPERATORS
*/

let x = 10;
let y = 3;
console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // multiply
console.log(x / y); // divide
console.log(x % y); // modulus
console.log(x ** y); // exponent

// Increment (++)
console.log(++x);
console.log(x++);

// Decrement (--)
console.log(--x);
console.log(x--);


/*
    ASSIGNMENT OPERATORS
*/

let z = 20;
z += 6;
z *= 3; // And so on and so forth


/*
    COMPARISON OPERATORS
*/

// Relational 
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// Equality
console.log(x === 1);
console.log(x !== 1);

/*
    EQUALITY OPERATORS
*/

// Strict Eqaulity (Type + Value)
// makes sure that both have the same value as well as the same type
console.log(1 === 1); // True
console.log('1' === 1); // False

// Lose Equality
console.log(1 == 1); // True
console.log('1' == 1); // True


/*
    TERNARY OPERATOR
*/

// if a customer has more than 100 points,
// they are gold customer, otherwise,
// they are a 'silver' customer

let points = 90;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);


/*
    LOGICAL OPERATORS
*/

// Logical AND (&&)
// Returns TRUE if both operands are TRUE

// LOGICAL OR (||)

// LOGICAL NOT (!)



/*
    LOGICAL OPERATORS WITH NON-BOOLEANS
*/

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN (Not a Number)

// Anything that is not Falsy -> Truthy


let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;



/*
    BITWISE OPERATORS
*/

// 1 = 00000001
// 2 = 00000010
// OR = 00000011 -> 3
// AND = 00000000 -> 0

// Read, Write, Execute
// 00000100 -> Read
// 00000110 -> Read, Write
// 00000111 -> ALL

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 000000001

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission | executePermission;

console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';


/*
    OPERATORS PRECEDENCE
*/

x = 2 + 3 * 4;
console.log(x);