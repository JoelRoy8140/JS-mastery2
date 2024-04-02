const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(score.toString());
// console.log(score.toFixed(2));

const otherNumber = 100.1234

// console.log(otherNumber.toPrecision(2));  //The expression 1.0e+2 is a way of representing a number in scientific notation in JavaScript.

// const hundreds = 100000000
// console.log(hundreds.toLocaleString());

// console.log(hundreds.toLocaleString('en-IN'));



// ******************************* maths *******************************//


// Output the entire Math object in the console
console.log(Math);

// Calculate the absolute value of -4 and output the result
console.log(Math.abs(-4));

// Round 4.7 to the nearest integer and output the result
console.log(Math.round(4.7));

// Round 4.2 up to the nearest integer and output the result
console.log(Math.ceil(4.2));

// Round 4.9 down to the nearest integer and output the result
console.log(Math.floor(4.9));

console.log(Math.min(4, 5, 6, 7, 8, 9, 10));
console.log(Math.max(4, 5, 6, 7, 8, 9, 10));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

Math.random()

Math.random(Math.floor(Math.random() * (max - min + 1)))
