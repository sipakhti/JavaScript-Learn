
/*
    ADDRESS OBJECT
*/

// FACTORY Function
function createAddress(street = '', city = '', zipCode = 0) {
    return {
        street,
        city,
        zipCode
    };
}
// CONSTRUCTOR Function
function Address(street = '', city = '', zipCode = 0) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};


function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
        
}

const Gujranwala = new Address('Hospital Road','Gujranwala',501245);
const Lahore = new Address('Street', 'Lahore',446556);
const newLahore = new Address('Street', 'Lahore',446556);

function areEqual(address1, address2) {
    for (let key in address1)
        if (address1[key] !== address2[key]) return false;
    
    return true;
}

function areSame(address1, address2) {
    return address1 === address2;
}

// console.log(areEqual(Lahore,newLahore));
// console.log(areSame(Lahore,newLahore));


// BLOG POST OBJECT

const blogPost = {
    title: 'blog',
    body: 'some body',
    author: 'sipakhti',
    views: 100,
    comments: [
        { author: 'Lamasha', body: 'sipa'},
        { author: 'kulu', body: 'tika'}
],
    isLive: false
}

console.log(blogPost);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post('a','b','c');
console.log(post);

function PriceRange(label, tooltip, min, max = Infinity){
    this.label = label;
    this.tooltip = tooltip;
    this.min = min,
    this.max = max
}

let minRange = new PriceRange('$', 'Inexpensive', 0, 33);
let midRange = new PriceRange('$$','Moderate',34,66);
let maxRange = new PriceRange('$$$','Expensive',67);

let priceRanges = [
    minRange,
    midRange,
    maxRange
]

console.log(minRange);
console.log(midRange);
console.log(maxRange);

