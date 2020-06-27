
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
}));





