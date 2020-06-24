/*
    IF...ELSE
*/

// HOUR
// if hour is between 6am and 12pm: Good morning!
// if it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good Evening!
let hour = 19;

if (hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if (hour >= 12 && hour < 18)
    console.log("Good Afternoon!");
else
    console.log("Good Evening!");


/*
    SWITCH...CASE
*/

let role;

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log("Moderator User");
        break;
    default:
        console.log('Unknown User');
}


/*
    FOR
*/

for (let i = 0; i < 5; i++)
    console.log("HElloe World");


/*
    WHILE
*/
let i = 0;
while (i < 5) {
    console.log("umer");
    i++;
}


/*
    DO...WHILE
*/

do {
    console.log("hassan");
    i--;
} while (i > 0);


/*
    INFINITE LOOP
*/


/*
    FOR...IN
    Iterate over the properties of an Object
    can also iterate over array elements but isnt preffered
*/

const person = {
    name: 'Umer',
    age: 25
};

for (let key in person)
    console.log(key, person[key]);

const colors = ['red','green', 'blue'];

for(let index in colors)
    console.log(index, colors[index]);


/*
    FOR...OF
*/

for (let color of colors)
    console.log(color);

for (let key of person)
    console.log(key);