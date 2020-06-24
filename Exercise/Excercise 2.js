
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