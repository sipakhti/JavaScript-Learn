
// MAX of TWO
function max(a, b) {
    return a > b ? a : b;
}

// LANDSCAPE or PORTRAIT
function isLandscape(width, height){
    return width > height
}

// FIZZBUZZ
function fizzBuzz(input) {
    if (typeof input !== "number")
        return NaN;

    if (isFizz() && isBuzz()) return 'FizzBuzz';
    else if (isFizz) return 'Fizz';
    else if (isBuzz) return 'Buzz';

    return input;
    

    function isBuzz() {
        return input % 5 === 0;
    }

    function isFizz(number) {
        return input % 3 === 0;
    }
}

// DEMERIT POINTS

// speed limit = 70
// for every 5km -> 1 point
// if points > 12 -> suspended licesces

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (typeof speed !== 'number') return NaN;

    if (speed < speedLimit + kmPerPoint) return 'Ok';
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint)

    return points > 12 ? 'License Suspended' : 'Points: ' + points;
}

// EVEN & ODD Numbers

function showNumbers(limit) {
    let message;
    for (let i = 0; i <= limit; i++)
        console.log(i, i % 2 === 0 ? 'EVEN' : 'ODD');
}
    

// COUNT TRUTHY

function countTruthy(array) {
    let count = 0;
    for (let item of array)
        if (item) count++;
    
    return count;
}

// STRING PROPERTIES

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

function showProperties(obj) {
    for (let property in obj)
        if (typeof obj[property] === "string")
            console.log(property, obj[property]);
}

// SUM of MULTIPLES

function sum(limit) {
	let sum = 0;
	for (let i = 0; i <= limit; i++)
		if (multipleOfThree(i) || multipleOfFive(i))
			sum += i;
	
	return sum;

	function multipleOfThree(i) {
		return i % 3 === 0;
	}

	function multipleOfFive(i) {
		return i % 5 === 0;
	}
}


// GRADE

// Average grade
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calculateGrade(marks) {

	const average = calculateAverage(marks);
	if (average < 60) return 'F';
	else if (average < 70) return 'D';
	else if (average < 80) return 'C';
	else if (average < 90) return 'B';
	return 'A';

}

function calculateAverage(array){
	let sum = 0;
	for (let value of array)
		sum += value;
	
	return sum/array.length;
}

// STARS

function showStars(rows) {
	for (let row = 1; row <= rows; row++)
		console.log('*'.repeat(row));
}

// PRIME NUMBERS

function showPrimes(limit){
	for (let number = 2; number <= limit; number++)
		
		if (isPrime(number)) console.log(number);
		
}
function isPrime(number) {
  for (let factor = 2; factor < number/2 + 1; factor++)
    if (number % factor === 0) return false;
  
  return true;
}

function biggestPrime(limit){
	for (let number = limit; number > 2; number--)
	    
	    if (isPrime(number)) return number;
}