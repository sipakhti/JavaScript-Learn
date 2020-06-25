
// Collections of key:value pair

/*
    USING OBJECT LITERALS
*/

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,

    draw: function() {
        console.log('draw');
        
    }
};


/*
    FACTORY FUNCTIONS
*/

function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw');
        }

    };
};

const circle1 = createCircle(1);
console.log(circle1);


/*
    CONSTRUCTOR FUNCTION
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle5 = new Circle(1)

/*
    DYNAMIC NATURE OF OBJECTS
*/

const CIRCLE = {
    radius: 1
};

CIRCLE.color = 'yellow';
console.log(CIRCLE);
delete CIRCLE.radius;
console.log(CIRCLE);

// Constructor property of an object holds a reference to the function that is used to initialize this object

// Function is also and Object. the java Engine uses Function() Object to create a function

/*
    ENUMERATING PROPERITES OF AN OBJECT
*/

for (let key in circle)
    console.log(key, circle[key])

for (let key of Object.keys(circle))
    console.log(key)

for (let entry of Object.entries(circle))
    console.log(entry)


/*
    CLONING AND OBJECT
*/

const another = {};

// Old method
for (let key in circle)
    another[key] = circle[key];

const other = Object.assign({
    color: 'pink'
}, circle);

console.log(other)

const spreadOperator = { ...circle};

console.log([1,2,3,4,5]);



        
