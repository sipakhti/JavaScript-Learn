
function arrayFromRange(min, max) {
    let outputArray = [];
    for (let i = min; i <= max; i++)
        outputArray.push(i);

    return outputArray;
}


function includes (array, searchElement) {
    for (let element of array)
        if (element === searchElement) 
            return true;      
    return false;
}




function except(array, excluded) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < excluded.length; j++) {
            if (array[i] === excluded[j])
                array.splice(i,1);
        }
    }
}

function move(array, index, offset) {
    let output = [...array];
    let mappedIndex = index + offset;

    if (isValidOffset())
        throw new Error('Invalid Offset');

    const element = output.splice(index,1)[0];
    output.splice(mappedIndex, 0 , element);
    return output;

    // for (let i = index; i < mappedIndex; i++){
    //     let temp = output[i]
    //     output[i] = output[i + 1];
    //     output[i + 1] = temp;
    // }

    // return output;

    function isValidOffset() {
        return mappedIndex >= array.length || mappedIndex < 0;
    }
}


function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++;

    // return count;

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0)
}

function getMax(array) {
    let max = 0;
    for (let element of array)
        if (element > max)
            max = element;

    return max;
}

function reduceMax(array) {
    return array.reduce((a, b) =>  (a > b) ? a : b)
}


const movies  = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'e', year: 2017, rating: 4.5},
    { title: 'f', year: 2015, rating: 4.9},
    { title: 'g', year: 2019, rating: 4.1},
];

// All the movies in 2018 with rating > 4
// Sort them by their rating 
// descinding order
// pick their title

class Movies {
    movies;
    constructor(movies = []) {
        this.movies = movies;
    }

    filter(year, rating) {
        let output = [];
        for (let movie of movies)
            if (movie.year === year && movie.rating > rating)
                output.push(movie);
        return output;
    }

    ascendingByYear(){
        movies.sort((a, b) => {
            if (a.year < b.year) return -1;
            if (a.year > b.year) return 1;
            return 0;
        })
    }

    descendingByYear(){
        movies.sort((a, b) => {
            if (a.year > b.year) return -1;
            if (a.year < b.year) return 1;
            return 0;
        })
    }

    printTitles() {
        for (let movie of movies){
            console.log(movie.title);
        }
    }

    isInYear(movie, year) {
        return movie.year === year;
    }
}

let test = new Movies(movies);

const titles = 
movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.titles)

console.log(titles);
