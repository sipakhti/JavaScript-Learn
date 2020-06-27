
const numbers = [3, 4];

// End of this array
numbers.push(5);


// Begininng of the array
numbers.unshift(1,2);


// middle of the array
numbers.splice(2,0,'a','b')
console.log(numbers)


/*
    FINDING PRIMITVES
*/

const primitiveNum = [1,2,3,4];
console.log(primitiveNum.indexOf(1)); // returns -1 if the element isnt found
console.log(primitiveNum.includes(1));


/*
    FINDING REFERENCE TYPES
*/

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];



console.log(courses.find(function(course) {
    return course.name = 'a';
})); // predicate

// courses.findIndex()


/*
    ARROW FUNCTON
*/

courses.find((course) => {
    return courses.name === 'a';
})
// Both expression are same
// if only ONE argument is passed then we can remove the brackets
// if our code is of only ONE line then we can also remove the return statement
// and the curly braces to write it all in a single line
// THIS MAKES THE CODE CLEANER AND EASY TO UNDERSTAND
courses.find(course => course.name === 'a');



/*
    REMOVING ELEMENTS
*/

// End
numbers.pop();

// Beginning
numbers.shift();

// Middle
// array.splice(a, b) => a is the starting index, b is the number of elements to be removed
// if b = 1, then only the value at index 'a' will be removed
numbers.splice(2,1)


/*
    EMPTYING AN ARRAY
*/

let randomNumbers = [1,2,3,4,5];
let another = randomNumbers;

// Solution 1
// randomNumbers = [];

// Only works if the original array is not being referenced by another variable


// Solution 2 
randomNumbers.length = 0;

// Truncates the orignal array thus it doesnt matter how many varaibles reference this array


// Solution 3 
randomNumbers.splice(0, randomNumbers.length);


// Solution 4

while (randomNumbers.length > 0);
    randomNumbers.pop();


/*
    COMBINING AND SLICING ARRAYS
*/

const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second); // will return a new array
// SPREAD OPERATOR
const spread = [...first, ...second];


// OPPOSITE OF CONCAT

combined.slice(2, 4); // will return a new array
// starts afte index 2 and ends at index 4(inculding)
// by removing the ending index we can get all the elements after the starting index
// by removing the starting index we can get a copy of the original array
// if elements are of primitve type, then the values are copied
// if elements are of reference type then only the reference will be copied
// so the copied array elements and the original  array elements will point to the same object in memory


/*
    ITERATING AN ARRAY
*/

for (let number of numbers)
    console.log(number)

numbers.forEach((number, index) => console.log(number, index));

/*
    JOINING ARRAYS
*/

const array = [1,2,3,4];
const join  = array.join('')
console.log(join);
console.log(Number.parseInt(join));


/*
    SPRTING ARRAYS
*/

const randSeq = [2,3,1];
randSeq.sort();

const objectArray = [
    { id: 1, name: 'Node.js'},    
    { id: 2, name: 'JavaScript'},    
];

objectArray.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})


/*
    TESTING THE ELEMENTS
*/

const checking = [1,2,3,4,5];

const allPositive = checking.every(value => value >= 0);
console.log(allPositive);

const atleastOnePostive = checking.some(value => value >= 0);
console.log(atleastOnePostive);

/*
    FILTERING
*/

const filtering = [1,2,-1,3,4,5];

const filtered = filtering.filter(v => v >= 0);

console.log(filtered);


/*
    MAPPING AN ARRAY
*/

const mapping = [1,-1,2,-3,5,65];

const items = mapping.map(n => '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>';

const objects = mapping.map(n => {
    const obj = { value: n};
    return obj;
})
console.log(objects);


/*
    REDUCING AN ARRAY
*/

const price = [1,2,3,5,64,6];

let sum = 0;

for (let n of price)
    sum += n;
console.log(sum);

const result = price.reduce(
    (accumulator, currectValue) => accumulator + currectValue
);
console.log(result);
