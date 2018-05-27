// casting a string to number

let a = 5;
let b = '6';
b = parseInt(b,10);
let c = a+b;
console.log('Answer: '+ c);

// we can also check if a variable is a number or not as follows

console.log(isNaN(c));